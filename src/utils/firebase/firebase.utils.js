import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from "firebase/firestore";





const firebaseConfig = {
  apiKey: "AIzaSyDeGB9l67Rh9O3_316QuF5U9Aiv8Ul8EkI",
  authDomain: "crwn-clothing-db-3af8a.firebaseapp.com",
  projectId: "crwn-clothing-db-3af8a",
  storageBucket: "crwn-clothing-db-3af8a.appspot.com",
  messagingSenderId: "203559862672",
  appId: "1:203559862672:web:36e86cd4dc48d04c777315",
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd ) => {
  const collectionRef = collection (db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object)=>{
    const docRef = doc(collectionRef, object.title.toLowerCase());
     batch.set(docRef, object)
  });
  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const categoryMap = querySnapshot.docs.reduce ((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;
}



export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
  if(!userAuth) return;
  
  const userDocRef = doc (db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();
    
    try {
      await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation})
    } catch (error) {
      alert(error);
      console.log ('error creating the user', error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password ) return;
  return await createUserWithEmailAndPassword(auth, email, password)

}

export const signInAuthWithEmailAndPassword = async (email, password) =>  {
  if(!email || !password ) return;
  return await signInWithEmailAndPassword(auth, email, password);
} 

export const signOutUser = async () => {
  await signOut(auth);
}

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback)
};



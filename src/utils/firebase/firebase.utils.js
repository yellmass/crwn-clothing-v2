import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";



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

// export const signInAuthWithEmailAndPassword = () => signInWithEmailAndPassword(auth, email, password);

export const db = getFirestore();

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
      console.log ('error creating the user', error.message)
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
  if(!email || !password ) return;
  return await createUserWithEmailAndPassword(auth, email, password)

}



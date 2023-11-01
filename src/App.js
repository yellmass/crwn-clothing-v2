import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocuments } from "./utils/firebase/firebase.utils";

import { setCurrentUser } from "./store/user/user.slice";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import Categories from "./routes/categories/categories.component";
import { setCategories } from "./store/categories/category.slice";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      user && createUserDocumentFromAuth(user);
      const fetchedUser = user && (({accessToken, email})=>({accessToken, email}))(user)
      dispatch(setCurrentUser(fetchedUser));
    });

    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const getCategoriesAsync = async() => {
      const categoriesArray = await getCategoriesAndDocuments('categories');
      dispatch(setCategories(categoriesArray));
    }
    getCategoriesAsync();
    
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop/:categoryName" element={<Categories />} />
        <Route path="authentication" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;

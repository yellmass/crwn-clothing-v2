import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";


export const ProductsContext =  createContext({
    Products: null,
    setExistingData: ()=>null
});

export const ProductsProvider = ({children}) => {
    const [Products, setExistingData] = useState(PRODUCTS);
    const value = {Products, setExistingData};


    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}
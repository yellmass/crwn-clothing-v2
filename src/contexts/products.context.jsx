import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";


export const ProductsContext =  createContext({
    existingProducts: null,
    setExistingData: ()=>null
});

export const ProductsProvider = ({children}) => {
    const [existingProducts, setExistingData] = useState(SHOP_DATA);
    const value = {existingProducts, setExistingData};


    return <ProductsContext.Provider value={value} >{children}</ProductsContext.Provider>
}
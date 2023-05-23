import { createContext, useState, useEffect } from "react";
import SHOP_DATA from '../shop-data.js'
import { addCollectionAndDocuments,getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


// as the actual value you want to access
export const CategoriesContext = createContext({
    categoriesMap: [],

});

export const CategoriesProvider = ({children}) => {

    // useEffect(() => {
    //     addCollectionAndDocuments('categories',SHOP_DATA)
    // },[])
    
    


    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {

        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        
        }
        getCategoriesMap();
        
    },[])

    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>
        {children}
    </CategoriesContext.Provider>
}
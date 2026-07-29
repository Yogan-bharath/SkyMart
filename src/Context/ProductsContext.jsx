import React, { createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
export const ProductContext = createContext();

const ProductsContext = ({children}) => {
    
    const [products , setProducts ] = useState([]);
    const [cartProducts , setCartProducts] = useState([]);
    const [user , setUser ] = useState(null);
     // Top Rated
    const topRated = useMemo(()=>{
        return products.sort((a,b)=>b.rating-a.rating).slice(0,5);
    },[products])
    // New Products
    const newArrivals = useMemo(()=>{
        return products.reverse().slice(0,5);
    },[products]);
    
    // 
    useEffect(()=>{
        const  getproducts = async()=>{
            const data = await axios.get("https://dummyjson.com/products");
            setProducts(data.data.products)            
        }
        let user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
        getproducts();
    },[])


    return (
    <ProductContext.Provider value={{cartProducts,setCartProducts,products,topRated,newArrivals}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductsContext
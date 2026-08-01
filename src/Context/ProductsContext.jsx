import React, { createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
export const ProductContext = createContext();

const ProductsContext = ({ children }) => {

    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);
    const [cartOpen, setCartOpen] = useState(false)
    const [user, setUser] = useState(null);
    // Top Rated
    const topRated = useMemo(() => {
        return products.sort((a, b) => b.rating - a.rating).slice(0, 5);
    }, [products])
    // New Products
    const newArrivals = useMemo(() => {
        return products.reverse().slice(0, 5);
    }, [products]);

    const removeFormCart = (product) => {
        let filtredProducts = cartProducts.filter((p) => p.id != product.id)
        setCartProducts(filtredProducts);
    }
    // Total cart Amount calculation is stored 
    const cartTotal = useMemo(() => {
        return cartProducts.reduce((prev, product) => {
            return prev + product.total
        }, 0).toFixed(2)
    }, [cartProducts])

    const increaseQuantity = (id) => {
        setCartProducts((prev) => {
            return prev.map((product) => {
                return product.id == id ? {
                    ...product, quantity: (product.quantity + 1), total: (product.total + product.price)
                } : product
            })
        })
    }
    const decreaseQuantity = (id) => {
        setCartProducts((prev) => {
            return prev.flatMap((product) => {
                if (product.id == id && product.quantity == 1) return [];
                return product.id == id ? {
                    ...product, quantity: (product.quantity - 1), total: (product.total - product.price)
                } : product
            })
        })
    }
    // Add to Cart form Home Home page
    const addToCartFromHome = (id, productFromHome) => {
        let isInCart = cartProducts.find((product) => product.id == id);
        if (!isInCart) {
            setCartProducts((prev) => [...prev, { ...productFromHome, quantity: 1, total: productFromHome.price }])
            toast.success("Added to cart 🛒")
            return;
        }
        setCartProducts((prev) => {
            return prev.map((product) => {
                return product.id == id ? {
                    ...product, quantity: (product.quantity + 1), total: (product.total + product.price)
                } : product
            })
        })
    }

    // 
    useEffect(() => {
        const getproducts = async () => {
            const data = await axios.get("https://dummyjson.com/products");
            setProducts(data.data.products)
        }
        let user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
        getproducts();
    }, [])


    return (
        <ProductContext.Provider value={{ cartProducts, setCartProducts, products, topRated, newArrivals, cartOpen, setCartOpen, removeFormCart, cartTotal, increaseQuantity, decreaseQuantity, addToCartFromHome }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductsContext
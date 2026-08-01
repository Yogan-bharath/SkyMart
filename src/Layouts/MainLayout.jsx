import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Cart from "../components/Cart";
import { ProductContext } from "../Context/ProductsContext";

const MainLayout = () => {
  const navigate = useNavigate()
  const {cartOpen} = useContext(ProductContext)
    useEffect(()=>{
      let user = JSON.parse(localStorage.getItem("user"));
      if(!user) navigate("/")
    },[])
  return (
    <div className="text-white min-h-screen flex flex-col">
      <div className="p-2">
        <NavBar />
      </div>

      <div className="flex-1 p-2">
        <Outlet />
      </div>

      <Footer />
      <div className={`fixed top-0 right-0 w-120 max-[600px]:w-full bg-black h-full transition z-10 ${
        cartOpen ? "translate-x-0" : "translate-x-[100%]"
      }`}>
        <Cart/>
      </div>
    </div>
  );
};

export default MainLayout;
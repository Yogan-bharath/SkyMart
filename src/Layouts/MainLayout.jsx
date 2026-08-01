import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const MainLayout = () => {
  const navigate = useNavigate()
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
    </div>
  );
};

export default MainLayout;
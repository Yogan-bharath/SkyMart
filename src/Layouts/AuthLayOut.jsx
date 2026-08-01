import React, { useContext, useEffect } from 'react'
import { Outlet } from 'react-router'
import { ProductContext } from '../Context/ProductsContext'
import { useNavigate } from 'react-router'
const AuthLayOut = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("user"));
    if(user) navigate("/home")
  },[])
  return (
    <div className='h-full w-full'>
        <Outlet/>
    </div>
  )
}

export default AuthLayOut
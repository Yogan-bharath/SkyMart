import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { ProductContext } from '../Context/ProductsContext'
import { useNavigate } from 'react-router'
const AuthLayOut = () => {
  const navigate = useNavigate()
  let user = localStorage.getItem("user");
  if(user) navigate("/home")
  return (
    <div className='h-full w-full'>
        <Outlet/>
    </div>
  )
}

export default AuthLayOut
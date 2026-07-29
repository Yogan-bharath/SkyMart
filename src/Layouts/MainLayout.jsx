import React from 'react'
import { Outlet } from 'react-router'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router'
const MainLayout = () => {
    const navigate = useNavigate()
    let user = localStorage.getItem("user")
    if(!user) navigate("/")
    return (
        <div className='text-white min-h-screen flex flex-col'>
            <div className='p-2'>
                <NavBar className="fixed top-0 left-0" />
            </div>
            <div className='p-2 flex-1 h-full'>
                <Outlet />
            </div>
            <div className='flex-1'>
                <Footer/>
            </div>
        </div>

    )
}

export default MainLayout
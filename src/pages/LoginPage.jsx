import React from 'react'
import Hero from '../components/Hero'
import Login from '../components/Login'

const LoginPage = () => {
  return (
    <div className='font-clash h-screen w-full bg-[#111111] flex items-center justify-center bg-black h-full w-full text-white'>
      <div className='flex-1 w-full p-2 h-screen lg:flex  hidden lg:bg-[#111111] border-r-1'>
      <Hero/>
      </div>
      <div className='flex-1 w-full h-full p-2'>
        <Login/>
      </div>
    </div>
  )
}

export default LoginPage
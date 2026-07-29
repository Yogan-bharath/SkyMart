import React from 'react'
import { RiFlashlightFill } from "react-icons/ri";
const Hero = () => {
  return (
    <div className='bg-[#111111] w-full px-10 py-5 h-full flex flex-col gap-10 '>

        <div className='flex gap-2 items-center'>
            <RiFlashlightFill className='bg-[var(--pr)] p-3 text-5xl rounded-[20px] text-black'/>
            <h2 className='text-2xl font-medium tracking-[2px]'>Sky<span className='text-[var(--pr)]'>Mart</span></h2>
        </div>

        <div className='flex flex-col gap-3 font-bold'>
            <h3 className='text-xl  text-[var(--pr)] font-medium uppercase tracking-[1px]'>Welcome back</h3>
            <h1 className='text-7xl '>Shop the future.</h1>
            <h1 className='text-7xl  text-[var(--pr)]'>Today.</h1>
        </div>
            <p className='text-gray-400 text-lg/8'>Thousands of products, lightning-fast delivery, and<br/> prices that make your wallet happy.</p>

        <div className='flex items-center gap-4'>
            <div className='border px-3 py-5 flex items-center justify-center flex-col w-full rounded-2xl'>
                <p className='text-2xl text-[var(--pr)]'>20K+</p>
                <p className='text-sm text-gray-400'>Products</p>
            </div>
            <div className='border px-3 py-5 flex items-center justify-center flex-col w-full rounded-2xl'>
                <p className='text-2xl text-[var(--pr)]'>20K+</p>
                <p className='text-sm text-gray-400'>Products</p>
            </div>
            <div className='border px-3 py-5 flex items-center justify-center flex-col w-full rounded-2xl'>
                <p className='text-2xl text-[var(--pr)]'>20K+</p>
                <p className='text-sm text-gray-400'>Products</p>
            </div>

        </div>
    </div>
  )
}

export default Hero
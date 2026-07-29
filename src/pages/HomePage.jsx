import React, { useContext } from 'react'
import { LuArrowRight, LuPlus } from "react-icons/lu";
import {
    HiOutlineComputerDesktop,
    HiOutlineDevicePhoneMobile,
    HiOutlineTv,
    HiOutlineSpeakerWave,
    HiOutlineCamera,
    HiOutlineCpuChip,
    HiOutlinePrinter,
    HiOutlineWifi,
    HiOutlineCube,
    HiOutlineArrowTrendingUp,
    HiOutlineStar,
    HiOutlineTag,
} from "react-icons/hi2";
import { useNavigate } from 'react-router';
import axios from 'axios'
import TopRetedAndNewPro from '../components/TopRetedAndNewPro';
const HomePage = () => {
    const navitage = useNavigate()
    const categories = [
        {
            name: "Electronics",
            items: 17,
            icon: HiOutlineComputerDesktop,
        },
        {
            name: "Clothing",
            items: 2,
            icon: HiOutlineDevicePhoneMobile,
        },
        {
            name: "Furniture",
            items: 3,
            icon: HiOutlineTv,
        },
        {
            name: "Home",
            items: 14,
            icon: HiOutlineSpeakerWave,
        },
        {
            name: "Sports",
            items: 8,
            icon: HiOutlineCamera,
        },
        {
            name: "Accessories",
            items: 6,
            icon: HiOutlineCpuChip,
        }
    ];
    
    return (
        <div className='max-w-340 m-auto py-10 flex flex-col'>
            <div className=' relative border rounded-2xl [@media(max-width:700px)]:p-5 p-12 gap-4 flex [@media(max-width:700px)]:flex-col'>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
                    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)
                `,
                        backgroundSize: "55px 55px",
                    }}
                />
                <div className='flex flex-col gap-3'>
                    <p className='uppercase tracking-[2px]'>Good evening 👋</p>
                    <h1 className='text-6xl/14 font-medium'>Welcome back,<br /><span className='text-[var(--pr)]'>Yogan!</span></h1>
                    <p className='text-xl w-[70%] my-3 text-zinc-400'>Discover today's picks — hand-curated products across electronics, fashion, and more.</p>
                    <div className='flex items-center gap-3'>
                        <button className='text-black bg-[var(--pr)]  font-medium flex items-center justify-center gap-2  py-3 px-5 rounded-2xl'>
                            <p>Shop Now</p>
                            <LuArrowRight />
                        </button>
                        <button className='text-zinc-300 border flex items-center justify-center gap-2 py-3 px-5 rounded-2xl'>
                            View All Products
                        </button>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-end w-full gap-3'>
                    <div className='p-5 [@media(max-width:700px)]:w-full flex flex-col items-center justify-center bg-lime-100/10 border border-zinc-500 rounded-2xl'>
                        <h1 className='text-[var(--pr)] text-3xl font-bold'>20+</h1>
                        <p className='text-zinc-400'>Products Available</p>
                    </div>
                    <div className='border [@media(max-width:700px)]:w-full p-5 flex flex-col items-center justify-center bg-transparent rounded-2xl'>
                        <h1 className='text-3xl font-bold'>Free</h1>
                        <p className='text-zinc-400'>Delivery on ₹999+</p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-6">
                <div className="flex items-center gap-5 bg-[#111111] border border-zinc-600 rounded-[30px] px-8 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-lime-500/10 flex items-center justify-center">
                        <HiOutlineCube className="text-3xl text-lime-400" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">3</h2>
                        <p className="text-xl text-zinc-300">Cart Items</p>
                        <p className="text-sm text-zinc-500">In your bag</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 bg-[#111111] border border-zinc-600 rounded-[30px] px-8 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center">
                        <HiOutlineArrowTrendingUp className="text-3xl text-blue-400" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">$234.97</h2>
                        <p className="text-xl text-zinc-300">Cart Value</p>
                        <p className="text-sm text-zinc-500">Ready to checkout</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 bg-[#111111] border border-zinc-600 rounded-[30px] px-8 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                        <HiOutlineStar className="text-3xl text-amber-400" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">5</h2>
                        <p className="text-xl text-zinc-300">Top Products</p>
                        <p className="text-sm text-zinc-500">Highly rated</p>
                    </div>
                </div>
                <div className="flex items-center gap-5 bg-[#111111] border border-zinc-600 rounded-[30px] px-8 py-8">
                    <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center">
                        <HiOutlineTag className="text-3xl text-purple-400" />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-white">6</h2>
                        <p className="text-xl text-zinc-300">Categories</p>
                        <p className="text-sm text-zinc-500">To explore</p>
                    </div>
                </div>

            </div>

            
            <div className='flex flex-col gap-3 my-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-medium'>Shop by Category</h1>
                    <p className='flex items-center gap-2 text-[var(--pr)] cursor-pointer' onClick={() => { navitage("products") }}>View All <LuArrowRight /></p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {categories.map((category, index) => {
                        const Icon = category.icon;

                        return (
                            <div
                                key={index}
                                className="bg-white rounded-3xl p-8 text-center transition ease-in hover:-translate-y-1 hover:shadow-lg"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-lime-100 flex items-center justify-center">
                                    <Icon className="text-3xl text-lime-600" />
                                </div>

                                <h3 className="mt-5 text-xl font-semibold text-zinc-900">
                                    {category.name}
                                </h3>

                                <p className="mt-1 text-zinc-500">
                                    {category.items} items
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        
            <TopRetedAndNewPro/>
        </div>
    )
}

export default HomePage
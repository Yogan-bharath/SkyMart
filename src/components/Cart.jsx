import React, { useContext } from 'react'
import { FiShoppingBag } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { ProductContext } from '../Context/ProductsContext';
import { SlSocialDropbox } from "react-icons/sl";
import { IoArrowForwardOutline } from "react-icons/io5";
import CartProductsCard from './CartProductsCard';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const Cart = () => {
    const navigate = useNavigate();
    const { cartProducts, setCartProducts, setCartOpen, cartTotal } = useContext(ProductContext)
    return (
        <div className='h-full w-full '>
            <div className='flex  p-8 items-center justify-between border-b-1'>
                <div className='flex items-center gap-3 text-xl'>
                    <FiShoppingBag className='text-[var(--pr)]' />
                    <h1 className='font-semibold'>Cart</h1>
                </div>
                <RxCross2 onClick={() => setCartOpen((prev) => !prev)} className='cursor-pointer text-xl' />
            </div>
            {
                cartProducts.length == 0 && <div className='flex items-center justify-center h-full'>
                    <div className='flex flex-col gap-2 text-white items-center'>
                        <SlSocialDropbox className='text-5xl bg-zinc-800 text-zinc-600 w-20 h-20 p-5 border rounded-3xl' />
                        <h2 className='text-xl font-semibold text-shadow-lime-50'>Cart is empty</h2>
                        <p className='text-[1rem] text-zinc-400'>Go shop something cool!</p>
                        <button onClick={() => {
                            navigate("/products")
                            setCartOpen((prev) => !prev)
                        }} className='cursor-pointer text-lg font-semibold active:scale-97 bg-[var(--pr)] text-black py-3 px-6 rounded-2xl'>Browser Products</button>
                    </div>
                </div>
            }

            {
                cartProducts.length != 0 && <div className='flex flex-col h-7/8'>

                    <div className='h-full overflow-y-auto scrollbar-thumb-zinc-600 scrollbar-thin p-6 flex flex-col gap-2'>
                        {
                            cartProducts.map((product) => {
                                return <CartProductsCard key={product.id} product={product} />
                            })
                        }
                    </div>

                    <div className='flex flex-col p-6 gap-2 border-t-1'>

                        <div className='flex items-center justify-between'>
                            <p className='text-zinc-400'>Total</p>
                            <h1 className='text-2xl font-bold'>${cartTotal}</h1>
                        </div>
                        <button onClick={() => {
                            toast.success("Order plcaed 🎉(Demo)")
                            setCartProducts([])
                            setCartOpen(false)
                        }} className='bg-[var(--pr)] text-black p-3 cursor-pointer rounded-2xl text-xl flex items-center justify-center gap-2'>
                            <p>Chickout</p>
                            <IoArrowForwardOutline />
                        </button>
                        <button onClick={() => setCartProducts([])} className='cursor-pointer bg-red-500 text-white p-3 rounded-2xl text-xl flex items-center justify-center'>
                            Clear cart
                        </button>

                    </div>

                </div>
            }
        </div>
    )
}

export default Cart
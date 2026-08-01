import React, { useContext } from 'react'
import { LuPlus,LuMinus } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { ProductContext } from '../Context/ProductsContext';

const CartProductsCard = ({product}) => {
    const {removeFormCart,increaseQuantity,decreaseQuantity} = useContext(ProductContext)
  return (
    <div className='flex border p-3 gap-3 border rounded-xl'>
       <div className='w-25 h-20 border bg-white rounded-xl'>
        <img className='h-full w-full object-center object-fill' src={product.images[0]} alt="" />
       </div>
        <div className='w-full flex flex-col gap-2'>
            <h3 className='text-lg text-zinc-300'>{product.title}</h3>
            <div>
                <h2 className='text-xl font-bold text-[var(--pr)]'>${product.total.toFixed(2)}</h2>
                <p className='text-zinc-500'>${product.price} each</p>
            </div>
            <div className='flex items-center justify-between px-3'>
                <div className='flex items-center gap-1'>  
                    <LuMinus onClick={()=>{decreaseQuantity(product.id)}} className='border border-zinc-600 p-1 text-white text-2xl rounded-lg cursor-pointer'/>
                    <p className=' p-1 text-white'>{product.quantity}</p>
                    <LuPlus onClick={()=>increaseQuantity(product.id)} className='border border-zinc-600 p-1 text-white text-2xl rounded-lg cursor-pointer'/>
                </div>
                <RiDeleteBin6Line onClick={()=>{removeFormCart(product)}} className=' p-1 text-red-600 text-2xl rounded-lg cursor-pointer'/>
            </div>
        </div>
    </div>
  )
}

export default CartProductsCard
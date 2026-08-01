import React from 'react'
import { useContext } from 'react'
import { ProductContext } from '../Context/ProductsContext';
import {
  HiOutlineStar,
  HiOutlineBolt,
  HiOutlineShoppingBag,
} from "react-icons/hi2";
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
const TopRetedAndNewPro = () => {
  const navigate = useNavigate();
const {topRated,newArrivals,setCartProducts,setCartOpen,addToCartFromHome} = useContext(ProductContext)
  return (
     <section className="w-full bg-[#0d0d0d] py-12">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-zinc-50 rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <HiOutlineStar className="text-2xl text-amber-500" />
                <h2 className="text-3xl font-bold text-zinc-900">
                  Top Rated
                </h2>
              </div>

              <button onClick={()=>navigate("/products")} className="cursor-pointer flex items-center gap-2 text-lime-700 hover:text-lime-800 font-medium">
                See all →
              </button>
            </div>

            <div className="space-y-4">
              {topRated.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-3xl border border-zinc-200 bg-white px-6 py-5 hover:shadow-md transition"
                >
                  <div className="[@media(max-width:700px)]:flex-col [@media(max-width:700px)]:items-start flex items-center gap-5">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-14 h-14 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-zinc-800">
                        {product.title}
                      </h3>

                      <p className="text-lg font-bold text-lime-700 mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <button onClick={()=>{
                    addToCartFromHome(product.id,product)
                    setCartOpen(true)
                  }} className="w-12 h-12 cursor-pointer rounded-2xl bg-lime-100 hover:bg-lime-200 flex items-center justify-center">
                    <HiOutlineShoppingBag  className="text-xl text-lime-700" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-50 rounded-[32px] p-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <HiOutlineBolt className="text-2xl text-lime-500" />
                <h2 className="text-3xl font-bold text-zinc-900">
                  New Arrivals
                </h2>
              </div>

              <button  onClick={()=>navigate("/products")} className="cursor-pointer flex items-center gap-2 text-lime-700 hover:text-lime-800 font-medium">
                See all →
              </button>
            </div>

            <div className="space-y-4">
              {newArrivals.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-3xl border border-zinc-200 bg-white px-6 py-5 hover:shadow-md transition"
                >
                  <div className="[@media(max-width:700px)]:flex-col [@media(max-width:700px)]:items-start flex items-center gap-5">
                    <img
                      src={product.images[0]}
                      alt={product.title}
                      className="w-14 h-14 rounded-lg object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-zinc-800">
                        {product.title}
                      </h3>

                      <p className="text-lg font-bold text-lime-700 mt-1">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <button onClick={()=>{
                    addToCartFromHome(product.id,product)
                    setCartOpen(true)
                  }}  className="w-12 h-12 rounded-2xl bg-lime-100 hover:bg-lime-200 flex items-center justify-center">
                    <HiOutlineShoppingBag className="text-xl text-lime-700" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 flex items-center gap-4">
            <HiOutlineBolt className="text-3xl text-lime-400" />
            <div>
              <h3 className="text-white text-xl font-semibold">
                Fast Delivery
              </h3>
              <p className="text-zinc-500">
                Same-day on select items
              </p>
            </div>
          </div>

          <div className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 flex items-center gap-4">
            <HiOutlineShoppingBag className="text-3xl text-blue-400" />
            <div>
              <h3 className="text-white text-xl font-semibold">
                Secure Payments
              </h3>
              <p className="text-zinc-500">
                100% encrypted checkout
              </p>
            </div>
          </div>

          <div className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 flex items-center gap-4">
            <HiOutlineStar className="text-3xl text-emerald-400" />
            <div>
              <h3 className="text-white text-xl font-semibold">
                Best Prices
              </h3>
              <p className="text-zinc-500">
                Price-match guarantee
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TopRetedAndNewPro
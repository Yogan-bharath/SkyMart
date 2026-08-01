import { RiFlashlightFill, RiMenu3Fill } from "react-icons/ri";
import { LuShoppingCart, LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router";
import { ProductContext } from "../Context/ProductsContext";
import { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const { cartOpen, setCartOpen, cartProducts } = useContext(ProductContext)
    const [toggleNav, setToggleNav] = useState(false)
    return (
        <div className="relative flex items-center justify-between py-4 max-w-350 m-auto">
            <div className='flex items-center gap-2'>
                <RiFlashlightFill className="p-3 text-5xl text-black bg-[var(--pr)] rounded-2xl border" />
                <h3 className="text-xl font-semibold">Sky <span className=" text-[var(--pr)]">Mart</span></h3>
            </div>

            <div className='[@media(max-width:700px)]:hidden max-[700px]:absolute  flex items-center gap-5 text-zinc-500 font-medium'>
                <NavLink to="/home" end>Home</NavLink>
                <NavLink to="/products">Shop</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
            {
                toggleNav && (
                    <div className="hidden max-[700px]:flex absolute top-full left-0 w-full flex-col gap-3 p-4 bg-black border border-zinc-200 rounded-xl mt-2 shadow-lg z-50">
                        <NavLink
                            to="/home"
                            end
                            onClick={() => setToggleNav(false)}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/products"
                            onClick={() => setToggleNav(false)}
                        >
                            Shop
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={() => setToggleNav(false)}
                        >
                            About
                        </NavLink>
                    </div>
                )
            }
            <div className='flex items-center gap-3 text-zinc-400'>

                <div className='[@media(max-width:700px)]:hidden   flex items-center gap-2 py-1 px-3 border border-zinc-700 rounded-xl'>
                    <div className="px-2 py-1 text-[.7rem] text-black bg-[var(--pr)] h-full rounded-sm border">{user.fullName[0]}</div>
                    <h3>{user?.fullName}</h3>
                </div>

                <div onClick={() => setCartOpen((prev) => !prev)} className="relative py-2 px-3 border border-zinc-700 rounded-xl cursor-pointer">
                    <LuShoppingCart />
                    {
                        cartProducts.length != 0 && <div className="w-5 h-5 -top-3 -right-2 bg-[var(--pr)] absolute flex items-center justify-center text-black text-sm rounded-2xl p-2">{cartProducts.length}</div>
                    }
                </div>

                <NavLink to="/" onClick={() => {
                    localStorage.removeItem("user")
                }} className="py-2 px-3 border border-zinc-700 rounded-xl cursor-pointer">
                    <LuLogOut />
                </NavLink>

                <div onClick={() => setToggleNav(prev => !prev)} className="[@media(max-width:700px)]:flex hidden relative py-2 px-3 border border-zinc-700 rounded-xl cursor-pointer">
                    {
                        toggleNav ? <RxCross2 /> : <RiMenu3Fill />
                    }
                </div>
            </div>
        </div>
    )
}

export default NavBar
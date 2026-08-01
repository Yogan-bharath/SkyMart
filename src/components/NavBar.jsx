import { RiFlashlightFill } from "react-icons/ri";
import { LuShoppingCart , LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router";
const NavBar = () => {
    const user = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="flex items-center justify-between py-4 max-w-350 m-auto">
        <div className='flex items-center gap-2'>
            <RiFlashlightFill className="p-3 text-5xl text-black bg-[var(--pr)] rounded-2xl border"/>
            <h3 className="text-xl font-semibold">Sky <span className=" text-[var(--pr)]">Mart</span></h3>
        </div>

        <div  className='[@media(max-width:700px)]:hidden flex items-center gap-5 text-zinc-500 font-medium'>
            <NavLink to="/home" end>Home</NavLink>
            <NavLink to="/products">Shop</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div  className='flex items-center gap-3 text-zinc-400'>

            <div  className='flex items-center gap-2 py-1 px-3 border border-zinc-700 rounded-xl'>
                <div className="px-2 py-1 text-[.7rem] text-black bg-[var(--pr)] h-full rounded-sm border">Y</div>
                <h3>{user?.fullName}</h3>
            </div>

            <div className="py-2 px-3 border border-zinc-700 rounded-xl cursor-pointer">
                <LuShoppingCart/>
            </div>

            <NavLink to="/" onClick={()=>{
                localStorage.removeItem("user")
            }} className="py-2 px-3 border border-zinc-700 rounded-xl cursor-pointer">
                <LuLogOut/>
            </NavLink>
        </div>
    </div>
  )
}

export default NavBar
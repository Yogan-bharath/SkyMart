import { useContext } from "react";
import { HiOutlineShoppingCart, HiStar ,HiOutlineCheck  } from "react-icons/hi2";
import { ProductContext } from "../Context/ProductsContext";
import { toast } from "react-toastify";

export default function ProductCard({ product }) {
    const {cartProducts,setCartProducts,setCartOpen} = useContext(ProductContext)
    let  isIntCart = cartProducts.find((p)=>p.id==product.id);
  return (
    <div className="overflow-hidden rounded-[28px] border border-zinc-700 bg-[#151515] hover:-translate-y-1 hover:shadow-xl transition">
      <div className="relative bg-zinc-50 p-8">
        <span className="absolute top-4 left-4 rounded-full bg-zinc-600 px-3 py-1 text-xs text-white capitalize">
          {product.category}
        </span>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-50 w-full object-contain"
        />
      </div>
      <div className="p-4 flex flex-col gap-1">
        <p className="text-sm text-zinc-500 capitalize">
          {product.category}
        </p>
        <h2 className="h-16 text-xl font-semibold text-white line-clamp-2">
          {product.title}
        </h2>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <HiStar
              key={star}
              className={`text-lg ${
                star <= Math.round(product.rating)
                  ? "text-yellow-400"
                  : "text-zinc-600"
              }`}
            />
          ))}
          <span className="text-sm text-zinc-500">
            ({product.reviews.length})
          </span>
        </div>
        <div className="border-t border-zinc-700"></div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-[var(--pr)] ">
              ${product.price}
            </h3>   
            <p
              className={`mt-1 text-sm ${
                product.stock > 0
                  ? "text-green-400"
                  : "text-red-400"
              }`}   
            >
              {product.availabilityStatus}
            </p>
          </div>
          {
            isIntCart ? <button className="flex items-center  text-sm gap-2 rounded-2xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-lg font-semibold text-green-400 transition-all duration-300">
            <HiOutlineCheck className="text-sm" />
            Added
            </button> : <button onClick={()=>{
            setCartProducts(prev=>{
                product.quantity = 1;
                product.total = product.price;
                return [...prev,product];
            })
            toast.success("Added to cart 🛒")
          }}
            disabled={product.stock === 0}
            className="cursor-pointer text-sm flex items-center gap-2 rounded-xl bg-[var(--pr)] px-3 py-2 font-semibold text-black transition disabled:cursor-not-allowed disabled:bg-zinc-600 disabled:text-zinc-300"
          >
            <HiOutlineShoppingCart className="text-[1rem]" />
            Add
          </button>

          }
          
          
        </div>
      </div>
    </div>
  );
}
import { useContext, useMemo, useState } from "react";
import {
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";
import { ProductContext } from "../Context/ProductsContext";
import ProductCard from "../components/ProductCard";

export default function ProductFilters() {
    const {products} = useContext(ProductContext)
    console.log(products)
  const clearFilters = () => {
    setFilters({
    search: "",
    category: "",
    sort: "",
})
};
const [filters, setFilters] = useState({
    search: "",
    category: "",
    sort: "",
});
console.log(filters)
const handleChange = (e)=>{
    const { name , value } = e.target
    setFilters((prev)=>({...prev,[name]:value}))
}
const filteredProducts = useMemo(() => {
  let result = [...products];

  if (filters.search) {
    result = result.filter((product) =>
      product.title
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    );
  }

  if (filters.category) {
    result = result.filter(
      (product) => product.category === filters.category
    );
  }

  switch (filters.sort) {
    case "low-high":
      result.sort((a, b) => a.price - b.price);
      break;

    case "high-low":
      result.sort((a, b) => b.price - a.price);
      break;

    case "rating":
      result.sort((a, b) => b.rating - a.rating);
      break;

    case "newest":
      result.sort(
        (a, b) =>
          new Date(b.meta.createdAt) -
          new Date(a.meta.createdAt)
      );
      break;

    default:
      break;
  }

  return result;
}, [products, filters]);
  return (
    <section className="py-4 max-w-[1400px] mx-auto bg-[#111111]">
      <h1 className="text-5xl font-bold text-white">
        All Products
      </h1>

      <p className="mt-2 text-xl text-zinc-500">
        50 products found
      </p>

      <div className="mt-8 rounded-[24px] border border-zinc-500 bg-[#151515] p-5">

        <div className="flex flex-col xl:flex-row gap-4">

          <div className="relative flex-1">
            <HiOutlineMagnifyingGlass className="absolute left-6 top-1/2 -translate-y-1/2 text-xl text-zinc-500" />

            <input name="search" onChange={handleChange}
              type="text"
              placeholder="Search products..."
              className="w-full h-14 rounded-2xl border border-zinc-700 bg-[#1d1d1d] pl-14 pr-5 text-white placeholder:text-zinc-500 outline-none focus:border-lime-400"
            />
          </div>

          <select name="category" onChange={handleChange}
            value={filters.category}
            className="h-14 w-full xl:w-56 rounded-2xl border border-zinc-700 bg-[#1d1d1d] px-5 text-white outline-none"
          >
            <option value="">All Categories</option>
            <option value="groceries">groceries</option>
            <option value="beauty">beauty</option>
            <option value="fragrances">fragrances</option>
            <option value="furniture">furniture</option>
          </select>

          <select name="sort" onChange={handleChange}
            className={`h-14 w-full xl:w-64 rounded-2xl bg-[#1d1d1d] px-5 text-white outline-none ${
              filters.sort
                ? "border border-lime-400"
                : "border border-zinc-700"
            }`}
          >
            <option value="">Featured</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
            <option value="rating">Top Rated</option>
            <option value="newest">Newest</option>
          </select>

          <button
            onClick={clearFilters}
            className="h-14 px-8 rounded-2xl border border-red-500/30 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition"
          >
            Clear
          </button>

        </div>

        {(filters.category || filters.sort) && (
          <>
            <div className="my-4 border-t border-zinc-600"></div>

            <div className="flex flex-wrap gap-3">

              {filters.category && (
                <div className="flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-lime-300 text-sm">
                  {filters.category}
                  <button onClick={() => setCategory("")}>
                    <HiOutlineXMark className="text-base" />
                  </button>
                </div>
              )}

              {filters.sort && (
                <div className="flex items-center gap-2 rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-1.5 text-lime-300 text-sm">
                  {filters.sort}
                  <button onClick={() => setFilter("")}>
                    <HiOutlineXMark className="text-base" />
                  </button>
                </div>
              )}

            </div>
          </>
        )}

      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredProducts.map((product) => (
            <ProductCard
            key={product.id}
            product={product}
            />
        ))}
        </div>
    </section>
  );
}
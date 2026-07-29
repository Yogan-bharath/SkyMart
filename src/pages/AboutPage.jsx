import React from 'react'
import {
  HiOutlineBolt,
  HiOutlineCube,
  HiOutlineUsers,
  HiOutlineStar,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineHeart,
  HiOutlineArrowRight
} from "react-icons/hi2";
import { RiFlashlightFill } from "react-icons/ri";
import { useNavigate } from 'react-router';
const AboutPage = () => {
    const navigate = useNavigate()
  return (
     <section className="bg-[#111111] py-10 max-w-270 m-auto">
      <div className="">

        <div className="flex justify-center">
          <div className="w-13 h-13 rounded-[14px] bg-[var(--pr)] flex items-center justify-center">
            <RiFlashlightFill className="text-xl text-black" />
          </div>
        </div>

        <h1 className="mt-12 text-center text-5xl font-bold text-white">
          About <span className="text-[var(--pr)] ">SkyMart</span>
        </h1>

        <p className="max-w-4xl mx-auto mt-8 text-center text-xl leading-5 text-zinc-500">
          SkyMart is a next-generation e-commerce platform built to make
          online shopping fast, fair, and enjoyable — for everyone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-15">

          <div className="rounded-[30px] border border-zinc-700 bg-[#151515] py-4 flex flex-col items-center">
            <HiOutlineCube className="text-2xl text-[var(--pr)]" />
            <h2 className=" text-2xl font-bold text-white">20K+</h2>
            <p className=" text-sm text-zinc-500">Products</p>
          </div>

          <div className="rounded-[30px] border border-zinc-700 bg-[#151515] py-4 flex flex-col items-center gap-2">
            <HiOutlineUsers className="text-2xl text-[var(--pr)]" />
            <h2 className=" text-2xl font-bold text-white">50K+</h2>
            <p className=" text-sm text-zinc-500">Happy Customers</p>
          </div>

          <div className="rounded-[30px] border border-zinc-700 bg-[#151515] py-4 flex flex-col items-center gap-2">
            <HiOutlineStar className="text-2xl text-[var(--pr)]" />
            <h2 className=" text-2xl font-bold text-white">4.9</h2>
            <p className=" text-sm text-zinc-500">Avg. Rating</p>
          </div>

          <div className="rounded-[30px] border border-zinc-700 bg-[#151515] py-4 flex flex-col items-center gap-2">
            <HiOutlineTruck className="text-2xl text-[var(--pr)]" />
            <h2 className=" text-2xl font-bold text-white">99%</h2>
            <p className=" text-sm text-zinc-500">On-time Delivery</p>
          </div>

        </div>

      </div>

          <section className="bg-[#111111] py-20">
      <div className="">

        <div className="rounded-[30px] border border-zinc-700 bg-[#151515] p-10">
          <h2 className="text-3xl font-bold text-white mb-8">
            Our Story
          </h2>

          <div className="space-y-3 text-zinc-400 text-[1rem] leading-9">
            <p>
              SkyMart started in 2022 as a small side project — two engineers
              tired of bloated, slow e-commerce experiences. We asked
              ourselves: what if shopping online was actually{" "}
              <span className="italic text-zinc-300">enjoyable?</span>
            </p>

            <p>
              Three years later, SkyMart serves over 50,000 customers across
              the country. We stock electronics, fashion, jewelry, and everyday
              essentials — all at prices that don't require a second mortgage.
            </p>

            <p>
              We're still the same team at heart: obsessed with speed,
              transparency, and making you feel good about every purchase you
              make here.
            </p>
          </div>
        </div>
    </div>
        </section>

        <section className="py-5 bg-[#111111]">
  <div className="">

    <h2 className="text-center text-3xl font-bold text-white mb-12">
      What We Stand For
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="rounded-[28px] border border-lime-500/30 bg-[#151515] p-5 flex gap-3">
        <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center shrink-0">
          <HiOutlineShieldCheck className="text-3xl text-lime-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Trust
          </h3>

          <p className="mt-2 text-sm leading-8 text-zinc-400">
            Every product is verified for quality and authenticity
            before listing.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-zinc-700 bg-[#151515] p-5 flex gap-3">
        <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center shrink-0">
          <HiOutlineTruck className="text-3xl text-lime-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Speed
          </h3>

          <p className="mt-2 text-sm leading-8 text-zinc-400">
            We obsess over delivery times so your orders arrive
            when promised.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-zinc-700 bg-[#151515] p-5 flex gap-3">
        <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center shrink-0">
          <HiOutlineHeart className="text-3xl text-lime-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Community
          </h3>

          <p className="mt-2 text-sm leading-8 text-zinc-400">
            Built around real customer feedback, not just business
            metrics.
          </p>
        </div>
      </div>

      <div className="rounded-[28px] border border-zinc-700 bg-[#151515] p-5 flex gap-3">
        <div className="w-12 h-12 rounded-2xl bg-lime-500/10 flex items-center justify-center shrink-0">
          <HiOutlineStar className="text-3xl text-lime-400" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">
            Quality
          </h3>

          <p className="mt-2 text-sm leading-8 text-zinc-400">
            We curate the best — no filler, no junk, just great
            products.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-3 bg-[#111111]">
  <div className="">

    <h2 className="text-center text-3xl font-bold text-white mb-12">
      Meet the Developer
    </h2>

    <div className="flex justify-center">
      <div className="w-full max-w-sm rounded-[28px] border border-zinc-700 bg-[#151515] p-10 flex flex-col items-center">

        <div className="w-15 h-15 rounded-2xl bg-lime-400 flex items-center justify-center">
          <span className="text-3xl font-bold text-black">Y</span>
        </div>

        <h3 className="mt-6 text-2xl font-semibold text-white">
          Yogan Bharath
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          Full Stack Developer
        </p>

      </div>
    </div>

  </div>
</section>

<section className="py-10 bg-[#111111]">
  <div className="">

    <div className="rounded-[32px] border border-lime-500/20 bg-[#151515] px-8 py-16 text-center">

      <h2 className="text-3xl font-bold text-white">
        Ready to Shop?
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-lg text-zinc-500 leading-8">
        Discover thousands of premium products across multiple
        categories. Enjoy secure shopping, fast delivery, and
        unbeatable prices—all in one place.
      </p>

      <div
        to="products" onClick={()=>{navigate("/home/products")}}
        className="inline-flex items-center gap-3 mt-6 px-8 py-3 rounded-2xl bg-lime-400 text-black text-xl font-semibold hover:bg-lime-300 transition-all duration-300 hover:scale-101"
      >
        Browse Products
        <HiOutlineArrowRight className="text-2xl" />
      </div>

    </div>

  </div>
</section>
    </section>
  )
}

export default AboutPage
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-700 bg-[#111111] py-8">
    <div className="max-w-7xl mx-auto px-3 flex flex-col items-center justify-center gap-3">
        <h2 className="text-3xl font-semibold text-[var(--pr)]">
        SkyMart
        </h2>

        <p className="text-sm text-zinc-500 text-center">
        © 2025 SkyMart • Built with React + TailWind + ContextAPI
        </p>
    </div>
    </footer>
  )
}

export default Footer
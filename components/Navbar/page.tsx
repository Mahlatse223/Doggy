"use client"

import { NavLinks } from "@/constants"
import { useState } from "react";




const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="p-4 sm:px-10 py-4 flex ">

      <div className="flex items-center justify-between w-full  ">
        <h1 className="text-2xl font-bold xl:  text-3xl">
          Doggy
        </h1>

        <div className="hidden sm:flex items-center">
          {NavLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="mx-2 text-lg  hover:text-gray-600 transition-colors  "
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="/cart"
            className="mx-2 text-lg hover:text-gray-600 transition-colors inline-flex items-center"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18l-1.68 9.39A2 2 0 0 1 17.35 17H6.65a2 2 0 0 1-1.97-1.61L3 6zm5 0V4a3 3 0 0 1 6 0v2"
              />
            </svg>
          </a>
        </div>

 <button 
          className="sm:hidden p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        
      </div>

     
     
    </nav>
  )
}

export default Navbar
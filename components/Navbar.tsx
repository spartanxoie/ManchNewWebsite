'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import manchLogo from "@/public/manchLogo.png"

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-background/50 backdrop-blur bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-2">
        {/* Logo */}
        <Link href="#" className="flex items-center space-x-3">
          <Image
            src={manchLogo}
            height={70}
            width={190}
            alt="Flowbite Logo"
          />
          {/* <span className="text-2xl font-semibold dark:text-white">Flowbite</span> */}
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-500 dark:text-gray-400"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } w-full lg:flex md:w-auto lg:items-center`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent p-4 md:p-0 text-xl font-semibold">
            <li><Link href="/rules-and-clauses" className="nav-link">RULES & CLAUSES</Link></li>
            <li><Link href="#" className="nav-link">SERVICES</Link></li>
            <li><Link href="#" className="nav-link">ABOUT</Link></li>
            <li><Link href="#" className="nav-link">RESOURCES</Link></li>
            <li><Link href="/arbitrators" className="nav-link">ARBITRATORS</Link></li>
            <li><Link href="#" className="nav-link">LOGIN</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// Tailwind Utility Classes for Better Readability
// const navLinkStyles = "block py-2 px-3 text-gray-900 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent";
// const dropdownItemStyles = "block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600";

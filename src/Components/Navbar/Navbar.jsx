"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

const menuItems = [
    ["Programas In-Company", "/"],
    ["Cursos y Diplomados", "/cursos"],
    ["Diplomados", "/diplomados"],
    ["Blog", "/blog"],
    ["Nosotros", "/nosotros"]
];

export default function Navbar({ locoScroll }) {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <nav className={`fixed top-0 left-0 pt-3 sm:py-1.5 w-full z-[999999] transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] "bg-[linear-gradient(90deg,#4895ef,#343ec2,#8d4aed)]/10 backdrop-blur-md shadow-md"`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white font-bold text-xl select-none cursor-pointer">
                        <Link href="/" className="hover:text-purple-400 transition">
                            <Image
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221274/vectux-academy/assets/LogoVectux.png"
                                alt="Logo"
                                width={80}
                                height={60}
                                unoptimized
                                className="w-150px"
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex font-Manrope font-[700] space-x-9 flex-grow justify-center text-white text-[15px]">
                        {menuItems.map(([label, href]) => (
                            <li key={href}>
                                <Link href={href} className="hover:text-purple-400 transition">
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Right Button */}
                    <div className="hidden min-[840px]:block">
                        <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none">
                            Contacta con
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="min-[840px]:hidden flex items-center">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                            className="text-white focus:outline-none"
                        >
                            {menuOpen ? (
                                <HiX className="h-6 w-6" />
                            ) : (
                                <HiMenu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="min-[840px]:hidden bg-[linear-gradient(90deg,#4895ef,#343ec2,#8d4aed)]/90 backdrop-blur-sm px-6 py-4">
                        <ul className="flex flex-col space-y-4 text-white font-medium">
                            {menuItems.map(([label, href]) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="hover:text-skyBlue transition block"
                                        onClick={() => setMenuOpen(false)} // close menu on click
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button className="w-max sm:w-full bg-skyBlue hover:bg-skyBlue transition text-white font-semibold px-5 py-2 rounded-md select-none">
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

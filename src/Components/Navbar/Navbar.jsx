"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const menuItems = [
    ["Programas In-Company", "/"],
    ["Diplomados", "/diplomados"],
    ["Cursos", "/cursos"],
    ["Blog", "/blog"],
    ["Nosotros", "/nosotros"]
];

const cursosDropdownItems = [
    { label: "Business Analytics", href: "/analysis" },
    { label: "Financial Analytics", href: "#financial-analytics" },
    { label: "Marketing Analytics", href: "#marketing-analytics" }
];

export default function Navbar({ locoScroll }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [cursosDropdownOpen, setCursosDropdownOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav className={`fixed top-0 left-0 pt-3 sm:py-1.5 w-full z-[999999] transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)] "bg-[linear-gradient(90deg,#4895ef,#343ec2,#8d4aed)]/10 backdrop-blur-md shadow-md"`}>
                <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white font-bold text-xl select-none cursor-pointer">
                        <button onClick={() => router.push("/")} className="hover:text-purple-400 transition">
                            <Image
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221274/vectux-academy/assets/LogoVectux.png"
                                alt="Logo"
                                width={80}
                                height={60}
                                unoptimized
                                className="w-150px"
                            />
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex font-Manrope font-[700] space-x-9 flex-grow justify-center text-white text-[15px]">
                        {menuItems.map(([label, href]) => (
                            <li key={href} className="relative">
                                {label === "Cursos" ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setCursosDropdownOpen(true)}
                                        onMouseLeave={() => setCursosDropdownOpen(false)}
                                    >
                                        <button
                                            onClick={() => router.push(href)}
                                            className="flex items-center gap-1 hover:text-purple-400 transition cursor-pointer"
                                        >
                                            {label}
                                            <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${cursosDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        {cursosDropdownOpen && (
                                            <div className="absolute top-[16px] left-0 mt-2 w-56 backdrop-blur-md rounded-lg shadow-lg border border-[#4cc9f0]/30 overflow-hidden">
                                                {cursosDropdownItems.map((item, index) => (
                                                    <button
                                                        key={index}
                                                        onClick={() => {
                                                            router.push(item.href);
                                                            setCursosDropdownOpen(false);
                                                        }}
                                                        className="w-full text-left px-4 py-3 text-white/80 hover:text-white hover:bg-[#4cc9f0]/20 transition-colors duration-200 text-[14px] cursor-pointer"
                                                    >
                                                        {item.label}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <button onClick={() => router.push(href)} className="hover:text-purple-400 transition cursor-pointer">
                                        {label}
                                    </button>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Right Button */}
                    <div className="hidden min-[840px]:block">
                        <button className="bg-[#fa0] font-Manrope uppercase hover:bg-[#e80] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-6 py-2.5 rounded-[3px] select-none">
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
                                    {label === "Cursos" ? (
                                        <div>
                                            <button
                                                onClick={() => setCursosDropdownOpen(!cursosDropdownOpen)}
                                                className="flex items-center justify-between w-full hover:text-[#4cc9f0] transition cursor-pointer"
                                            >
                                                {label}
                                                <HiChevronDown className={`w-4 h-4 transition-transform duration-200 ${cursosDropdownOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {cursosDropdownOpen && (
                                                <div className="mt-2 ml-4 space-y-2">
                                                    {cursosDropdownItems.map((item, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => {
                                                                router.push(`/cursos${item.href}`);
                                                                setMenuOpen(false);
                                                                setCursosDropdownOpen(false);
                                                            }}
                                                            className="block text-white/70 hover:text-white text-[14px] transition"
                                                        >
                                                            {item.label}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => { router.push(href); setMenuOpen(false); }}
                                            className="hover:text-[#4cc9f0] transition block cursor-pointer"
                                        >
                                            {label}
                                        </button>
                                    )}
                                </li>
                            ))}
                            <li>
                                <button className="w-max sm:w-full bg-[#fa0] hover:bg-[#b80] transition text-white font-semibold px-5 py-2 rounded-[3px] select-none">
                                    Contáctanos
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    );
}

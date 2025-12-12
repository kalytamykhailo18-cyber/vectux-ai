'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const SocialLinks = [
    { id: 1, icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61565445280821" },
    { id: 2, icon: FaInstagram, href: "https://www.instagram.com/vectuxacademy/" },
    { id: 3, icon: FaLinkedin, href: "https://www.linkedin.com/company/vectux-academy/" }
];

const QuickLinks = [
    { id: 1, label: "Programas In-Company", href: "/" },
    { id: 2, label: "Cursos y Diplomados", href: "/cursos" },
    { id: 3, label: "Blog", href: "/blog" },
    { id: 4, label: "Nosotros", href: "/nosotros" }
];

const LegalLinks = [
    { id: 1, label: "Política de Privacidad", href: "/privacy-policy" },
    { id: 2, label: "Política de Cookies", href: "/cookies-policy" }
];

const Footer = () => {
    const router = useRouter();

    return (
        <footer className="bg-gradient-to-b from-[#343ec2] via-[#2a35a8] to-[#1e2785]">
            <div className="max-w-[1200px] mx-auto px-8 sm:px-14">
                {/* Main Footer Content */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2 pr-16">
                        <Image
                            src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221274/vectux-academy/assets/LogoVectux.png"
                            alt="Vectux Academy Logo"
                            width={160}
                            height={70}
                            unoptimized
                            className="mb-6"
                        />
                        <p className="text-white/80 font-Manrope text-[14px] leading-[24px] mb-6">
                            Somos parte de Vectux Analytics, una empresa líder en el campo del análisis de datos y consultoría de inteligencia artificial en América Latina.
                        </p>
                        <div className="flex gap-3">
                            {SocialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <button
                                        key={social.id}
                                        onClick={() => window.open(social.href, '_blank', 'noopener,noreferrer')}
                                        className="bg-white/10 hover:bg-[#4cc9f0] text-white w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer"
                                    >
                                        <IconComponent className="text-[18px]" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold text-[18px] mb-6">Enlaces</h3>
                        <ul className="space-y-3">
                            {QuickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => router.push(link.href)}
                                        className="text-white/70 hover:text-[#4cc9f0] font-Manrope text-[14px] transition-colors duration-300 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-bold text-[18px] mb-6">Políticas Legales</h3>
                        <ul className="space-y-3">
                            {LegalLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => router.push(link.href)}
                                        className="text-white/70 hover:text-[#4cc9f0] font-Manrope text-[14px] transition-colors duration-300 cursor-pointer"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white font-bold text-[18px] mb-6">Contáctanos</h3>
                        <div className="space-y-3 text-white/70 font-Manrope text-[14px]">
                            <p>mpaez@vectuxanalytics.com</p>
                            <p>+52 56 1195-5405</p>
                            <button
                                onClick={() => router.push('/cursos/#contact')}
                                className="block text-white/70 hover:text-[#4cc9f0] transition-colors duration-300 mt-4 cursor-pointer"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/20" />

                {/* Copyright */}
                <div className="py-6 text-center">
                    <p className="text-white/70 font-Manrope text-[14px]">
                        Copyright © 2025, Vectux Academy
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

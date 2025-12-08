"use client"
import React from 'react'
import Image from 'next/image'
import { HiMail, HiPhone } from 'react-icons/hi'

const ContactSection = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#4a45c9] to-[#5a3db8]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#343ec2] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - Image */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-tl-[24px] rounded-tr-none rounded-bl-none rounded-br-[24px]">
                            <Image
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220969/vectux-academy/assets/askus.jpg"
                                alt="Contáctanos"
                                width={600}
                                height={450}
                                unoptimized
                                className="w-full h-auto object-cover"
                            />
                            {/* Gradient overlay on image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#343ec2]/30 to-transparent" />
                        </div>
                    </div>

                    {/* Right - Contact Info */}
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-[45px] sm:leading-[52px] mb-6">
                            ¿Tienes Dudas? ¡Contáctanos!
                        </h2>

                        <p className="text-white/80 font-Manrope text-[16px] sm:text-[17px] font-[500] leading-[28px] mb-8">
                            Si quieres saber si nuestros programas son para ti o para tu equipo, agenda una llamada o escríbenos directamente.
                        </p>

                        {/* Contact Person */}
                        <div className="bg-black/20 backdrop-blur-sm rounded-[16px] p-6 border border-[#e3e3e330] mb-8">
                            <p className="text-[#4cc9f0] font-Manrope font-[700] text-[18px] mb-1">
                                Mercedes Paez
                            </p>
                            <p className="text-white/60 font-Manrope text-[14px] mb-6">
                                Head of Growth and Strategic Partnerships
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                <a
                                    href="mailto:mpaez@vectuxanalytics.com"
                                    className="flex items-center gap-3 text-white/80 hover:text-[#4cc9f0] transition-colors duration-300"
                                >
                                    <HiMail className="w-5 h-5 text-[#4cc9f0]" />
                                    <span className="font-Manrope text-[15px]">mpaez@vectuxanalytics.com</span>
                                </a>
                                <a
                                    href="tel:+525611955405"
                                    className="flex items-center gap-3 text-white/80 hover:text-[#4cc9f0] transition-colors duration-300"
                                >
                                    <HiPhone className="w-5 h-5 text-[#4cc9f0]" />
                                    <span className="font-Manrope text-[15px]">+52 56 1195-5405</span>
                                </a>
                            </div>
                        </div>

                        {/* QR Code */}
                        <div
                            data-aos="zoom-in"
                            data-aos-duration="600"
                            data-aos-delay="400"
                            className="flex items-center gap-6"
                        >
                            <div className="bg-white p-3 rounded-[12px]">
                                <Image
                                    src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221777/vectux-academy/assets/qrcode.jpg"
                                    alt="QR Code - Contacto"
                                    width={120}
                                    height={120}
                                    unoptimized
                                    className="w-[100px] h-[100px] object-contain"
                                />
                            </div>
                            <div>
                                <p className="text-white/60 font-Manrope text-[14px]">
                                    Escanea el código QR para contactarnos directamente por WhatsApp
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for footer transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#5a3db8] blur-xl" />
        </section>
    )
}

export default ContactSection

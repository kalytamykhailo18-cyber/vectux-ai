"use client"
import React from 'react'
import Image from 'next/image'
import { HiMail, HiPhone } from 'react-icons/hi'

const contactBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221126/vectux-academy/assets/course-1.jpg"
const leftBlock={
    title: "No perderás tu lugar por culpa de la IA. Lo perderás si no te preparas para convertirla en tu aliada.",
    signer: "- Academia Vectux...",
    text: "tu salto a la analítica avanzada y la inteligencia artificial"
}

const ContactSection = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${contactBackgroundImage})` }}
        >
            {/* Color Overlay - Blue */}
            <div className="absolute inset-0 bg-[#4895ef]/75" />

            {/* Top Gradient - from MasterclassSection (Light Blue) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#44f_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to Footer */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - block */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="relative"
                    >
                    </div>

                    {/* Right - Contact Info */}
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-[45px] sm:leading-[52px] mb-6">
                            ¿Tienes Dudas? ¡Contáctanos!
                        </h2>

                        <p className="text-white font-Manrope text-[16px] sm:text-[17px] font-[500] leading-[28px] mb-8">
                            Si quieres saber si nuestros programas son para ti o para tu equipo, agenda una llamada o escríbenos directamente.
                        </p>

                        {/* Contact Person */}
                        <div className="bg-[#42f] backdrop-blur-sm rounded-[6px] p-6 border border-[#e3e3e330] mb-8">
                            <p className="text-[#4cc9f0] font-Manrope font-[700] text-[18px] mb-1">
                                Mercedes Paez
                            </p>
                            <p className="text-white font-Manrope text-[14px] mb-6">
                                Directora de Crecimiento y Alianzas Estratégicas
                            </p>

                            {/* Contact Details */}
                            <div className="space-y-4">
                                <button
                                    onClick={() => window.open('mailto:mpaez@vectuxanalytics.com', '_self')}
                                    className="flex items-center gap-3 text-white/80 hover:text-[#4cc9f0] transition-colors duration-300 cursor-pointer"
                                >
                                    <HiMail className="w-5 h-5 text-[#4cc9f0]" />
                                    <span className="font-Manrope text-[15px]">mpaez@vectuxanalytics.com</span>
                                </button>
                                <button
                                    onClick={() => window.open('tel:+525611955405', '_self')}
                                    className="flex items-center gap-3 text-white/80 hover:text-[#4cc9f0] transition-colors duration-300 cursor-pointer"
                                >
                                    <HiPhone className="w-5 h-5 text-[#4cc9f0]" />
                                    <span className="font-Manrope text-[15px]">+52 56 1195-5405</span>
                                </button>
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
            </section>
        </div>
    )
}

export default ContactSection

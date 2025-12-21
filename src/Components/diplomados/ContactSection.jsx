"use client"
import React from 'react'
import Image from 'next/image'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const contactBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221126/vectux-academy/assets/course-1.jpg"
const leftBlock={
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765420894/robot_uhbrwt.jpg",
    title: "No perderás tu lugar por culpa de la IA. Lo perderás si no te preparas para convertirla en tu aliada.",
    signer: "Vectux Academy…...",
    text: "tu salto a la analítica avanzada y la inteligencia artificial"
}

const ContactSection = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${contactBackgroundImage})` }}
        >
            {/* Color Overlay - starts where MasterclassSection ends, ends at footer color */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #5058d0 0%, #4550cc 50%, #343ec2 100%)' }} />

            {/* Bottom Gradient - blend into Footer */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#343ec2_0%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left - block */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="relative"
                    >
                        <Image
                            src={leftBlock.image}
                            alt="AI Robot"
                            width={500}
                            height={400}
                            unoptimized
                            className="w-full h-auto object-cover rounded-lg mb-8"
                        />
                        <p className="text-white font-bold text-2xl md:text-3xl lg:text-[36px] leading-[36px] md:leading-[48px] mb-6 italic">
                            "{leftBlock.title}"
                        </p>
                        <p className="text-[#4cc9f0] font-Manrope font-[600] text-[16px] mb-8">
                            {leftBlock.signer}
                        </p>
                        <p className="text-white/80 font-Manrope text-[15px] sm:text-[17px] font-[500] leading-[28px]">
                            {leftBlock.text}
                        </p>
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
                        <div className="bg-black/10 backdrop-blur-sm rounded-[6px] p-6 border border-[#e3e3e330] mb-8">
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
                                    <FaWhatsapp className="w-6 h-6 text-[#fff] bg-[#0c0] p-[2px] rounded-[3px]" />
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
                            <div className="bg-white p-2 rounded-[12px]">
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

"use client"
import React from 'react'
import Image from 'next/image'
import { FaCalendarAlt, FaClock, FaLaptop } from 'react-icons/fa'

const masterclassBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221271/vectux-academy/assets/insight.jpg"

const MasterclassSection = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${masterclassBackgroundImage})` }}
        >
            {/* Color Overlay - Blue */}
            <div className="absolute inset-0 bg-[#4895ef]/75" />

            {/* Top Gradient - from DiplomadosCards (Green-ish Pink) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to ContactSection (Light Blue) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8db8f2_50%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Side - Image */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="relative"
                    >
                        <Image
                            src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765366777/Ana-2-fotor-2025121073910_hiwcgd.png"
                            alt="Ana Mireya López"
                            width={600}
                            height={700}
                            unoptimized
                            className="w-full h-auto object-cover rounded-lg"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 12%, black 50%), linear-gradient(to top, transparent 0%, black 20%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 12%, black 50%), linear-gradient(to top, transparent 0%, black 20%)',
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'source-in'
                            }}
                        />
                    </div>

                    {/* Right Side - Content */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="flex flex-col items-center gap-6"
                    >
                        {/* Masterclass Badge */}
                        <div className="inline-block w-max">
                            <span className="bg-[#4cc9f0] text-[#0a0a1a] font-Manrope font-[700] text-[12px] uppercase tracking-[1px] px-4 py-2 rounded-full">
                                Masterclass
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-center text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight">
                            Del Insight a la Acción.
                        </h2>

                        {/* Subtitle */}
                        <h3 className="text-[#faa307] text-center font-bold text-xl md:text-2xl leading-tight">
                            Storytelling con Datos para Inspirar Decisiones y ROI
                        </h3>

                        {/* Description */}
                        <p className="text-white/80 text-center font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[26px]">
                            Transforma tus datos en historias que capturan atención, impulsan decisiones y generan resultados reales.
                        </p>

                        {/* Speaker Info */}
                        <div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                            <p className="text-white font-Manrope font-[600] text-[16px] mb-2">
                                Ponente: Ana Mireya López
                            </p>
                            <p className="text-white/70 font-Manrope text-[14px] leading-[22px]">
                                Certificada en Inteligencia Artificial - MIT<br />
                                CEO de Vectux Academy & Vectux Analytics
                            </p>
                        </div>

                        {/* Event Details */}
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                                <FaCalendarAlt className="text-[#4cc9f0] w-5 h-5" />
                                <div>
                                    <p className="text-white/60 font-Manrope text-[11px] uppercase">Inicio:</p>
                                    <p className="text-white font-Manrope font-[600] text-[14px]">12 ENE 2025</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                                <FaClock className="text-[#4cc9f0] w-5 h-5" />
                                <div>
                                    <p className="text-white font-Manrope font-[600] text-[14px]">6:00 PM</p>
                                    <p className="text-white/60 font-Manrope text-[11px]">Hora del Este</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3">
                                <FaLaptop className="text-[#4cc9f0] w-5 h-5" />
                                <div>
                                    <p className="text-white/60 font-Manrope text-[11px] uppercase">Modalidad</p>
                                    <p className="text-white font-Manrope font-[600] text-[14px]">Online</p>
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mt-4">
                            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 transition text-white font-Manrope font-[700] text-[13px] uppercase tracking-[1px] px-6 py-3 rounded-full">
                                Certificado Digital de Participación
                            </button>
                            <button className="bg-[#faa307] hover:bg-[#f48c06] transition text-[#0a0a1a] font-Manrope font-[700] text-[13px] uppercase tracking-[1px] px-8 py-3 rounded-full">
                                Inscríbete
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#4cc9f0]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-[#8d4aed]/30 rounded-full blur-3xl" />
            </div>
            </section>
        </div>
    )
}

export default MasterclassSection

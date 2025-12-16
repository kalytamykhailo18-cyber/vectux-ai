"use client"
import React from 'react'
import Image from 'next/image'
import { BarChart3, Brain, Presentation } from 'lucide-react'

const bussinessBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221828/vectux-academy/assets/sample-2.jpg"

const bussinessData = {
    title: "Conviértete en Experto en Analytics",
    subtitle: "Potencia tu carrera en tan sólo 3 meses con nuestro plan de formación:",
    cards: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765529683/bussiness-1_ininrd.jpg",
            title: "Fase 1: Análisis y Visualización de Datos",
            text: "Crea tableros que hablen por sí solos.",
            icon: BarChart3,
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765529687/bussiness-2_hpheyc.jpg",
            title: "Fase 2: Predicción con IA",
            text: "Usa Machine Learning para anticipar tendencias y comportamientos.",
            icon: Brain,
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765529686/bussiness-3_o7n35q.jpg",
            title: "Fase 3: Data Storytelling",
            text: "Genera impacto e influencia a través de los datos",
            icon: Presentation,
        }
    ]
}

const Bussiness = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${bussinessBackgroundImage})` }}
        >
            {/* Color Overlay - Dark */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #343ec2 0%, #5a3db8 50%, #8d4aed 100%)' }} />

            {/* Top Gradient - from Promotion (Cyan-Blue) */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />


            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    {/* Title */}
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[36px] md:leading-[50px] text-center mb-4"
                    >
                        {bussinessData.title}
                    </h2>

                    {/* Subtitle */}
                    <p
                        data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-delay="100"
                        className="text-white/80 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[28px] text-center mb-12 max-w-[800px] mx-auto"
                    >
                        {bussinessData.subtitle}
                    </p>

                    {/* Vertical Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {bussinessData.cards.map((card, index) => (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay={index * 100}
                                className="group relative backdrop-blur-sm rounded-[16px] overflow-hidden border border-[#e3e3e330] hover:border-[#4cc9f0] transition-all duration-300"
                            >
                                {/* Shimmer effect on hover */}
                                <div
                                    className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
                                    style={{
                                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                                        transform: 'translateX(-100%)',
                                        transition: 'transform 0.8s ease-out'
                                    }}
                                    ref={(el) => {
                                        if (el) {
                                            const parent = el.parentElement;
                                            parent.addEventListener('mouseenter', () => {
                                                el.style.transform = 'translateX(100%)';
                                            });
                                            parent.addEventListener('mouseleave', () => {
                                                el.style.transform = 'translateX(-100%)';
                                            });
                                        }
                                    }}
                                />

                                {/* Card Image */}
                                <div className="relative aspect-[16/10] overflow-hidden z-[1]">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        unoptimized
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Phase Badge */}
                                    <span className="absolute top-4 left-4 bg-[#4cc9f0] text-[#0a0a1a] font-Manrope font-bold text-[12px] uppercase tracking-[1px] px-3 py-1 rounded-full">
                                        Módulo {index + 1}
                                    </span>
                                </div>

                                {/* Card Content */}
                                <div className="relative p-6 z-[1] text-center">
                                    <div className="flex items-center gap-3 mb-4">
                                        <card.icon className="w-7 h-7 text-[#fa0] group-hover:text-[#1cf9f0] transition-colors duration-300" />
                                        <h3 className="text-white font-bold text-[20px] md:text-[22px] leading-[28px] group-hover:text-[#1cf9f0] transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                    </div>
                                    <span className="text-white/90 font-Manrope text-[15px] leading-[24px]">
                                        {card.text}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Bussiness

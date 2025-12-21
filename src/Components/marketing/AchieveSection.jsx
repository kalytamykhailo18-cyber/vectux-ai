"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

const achieveData = {
    title: {
        text: "Diplomado en",
        rightImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228090/vectux-academy/svg/logo-marketing-analytics.svg"
    },
    left: {
        title: "Objetivo del Programa",
        subtitle: "Capacitar a líderes de marketing, producto y canales digitales para convertir datos de clientes, campañas y comportamiento en decisiones más precisas, rentables y personalizadas.",
        text: "A través del análisis descriptivo, predictivo y visual, los participantes aprenderán no solo a identificar qué funciona y qué ajustar en sus estrategias, sino también a presentar hallazgos con claridad e influencia, utilizando storytelling comercial para comunicar resultados ante stakeholders y dirección con impacto."
    },
    right: {
        title: "¿Qué lograrás al finalizar el programa?",
        list: [
            {
                image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226661/vectux-academy/raw/technology.png",
                text: "Crear segmentaciones de clientes avanzadas con machine learning"
            },
            {
                image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226660/vectux-academy/raw/storytelling.png",
                text: "Optimizar campañas digitales con A/B testing y atribución multicanal"
            },
            {
                image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226658/vectux-academy/raw/start-up.png",
                text: "Predecir el comportamiento del consumidor y el lifetime value"
            },
            {
                image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226656/vectux-academy/raw/searching.png",
                text: "Medir y demostrar el ROI de cada acción de marketing"
            }
        ]
    }
}

const AchieveSection = () => {
    const rightCardRef = useRef(null)

    const handle3DMouseMove = (e, ref) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 12
        const rotateY = (centerX - x) / 12

        const shadowX = (centerX - x) / 5
        const shadowY = (centerY - y) / 5

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
        ref.current.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.4), ${shadowX * 0.5}px ${shadowY * 0.5}px 20px rgba(76, 201, 240, 0.2)`
    }

    const handle3DMouseLeave = (ref) => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        ref.current.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #6478e0 0%, #5f70dc 35%, #5a68d8 65%, #5058d2 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#6478e0_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to WhoIsSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5058d2_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                {/* Title with Logo */}
                <div data-aos="fade-up" className="flex items-center justify-center gap-4 mb-16">
                    <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight">
                        {achieveData.title.text}
                    </h2>
                    <Image
                        src={achieveData.title.rightImage}
                        alt="Marketing Analytics"
                        width={280}
                        height={60}
                        unoptimized
                        className="h-18 md:h-22 w-auto"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left: Objetivo del Programa */}
                    <div data-aos="fade-right" data-aos-duration="800">
                        <h3 className="text-[#4cc9f0] font-bold text-2xl md:text-3xl mb-6">
                            {achieveData.left.title}
                        </h3>
                        <p className="text-white font-Manrope text-lg md:text-xl font-[600] mb-4 leading-relaxed">
                            {achieveData.left.subtitle}
                        </p>
                        <p className="text-white/80 font-Manrope text-base md:text-lg leading-relaxed">
                            {achieveData.left.text}
                        </p>
                    </div>

                    {/* Right: ¿Qué lograrás? */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        onMouseMove={(e) => handle3DMouseMove(e, rightCardRef)}
                        onMouseLeave={() => handle3DMouseLeave(rightCardRef)}
                    >
                        <div
                            ref={rightCardRef}
                            className="border border-white/10 rounded-[6px] p-6 transition-all duration-200 ease-out"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <h3 className="text-[#ffaa00] font-bold text-xl md:text-2xl mb-6">
                                {achieveData.right.title}
                            </h3>
                            <div className="space-y-4">
                                {achieveData.right.list.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-4 py-3 px-4 border-l-4 border-[#4cc9f0] hover:border-[#ffaa00] transition-all duration-300 rounded-r-lg hover:bg-white/5"
                                    >
                                        <Image
                                            src={item.image}
                                            alt={item.text}
                                            width={50}
                                            height={50}
                                            unoptimized
                                            className="w-12 h-12 object-contain flex-shrink-0"
                                        />
                                        <p className="text-white font-Manrope text-sm md:text-base">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AchieveSection

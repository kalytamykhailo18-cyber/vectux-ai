"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const achieveData = {
    leftblock: {
        title: "Diplomado en Financial Analytics",
        subtitle: "OBJETIVO",
        boldText: "Formar profesionales financieros capaces de transformar datos en decisiones estratégicas —desde el análisis de riesgos hasta la modelación predictiva— con un enfoque práctico orientado a resultados.",
        text: "El programa busca que cada participante domine las herramientas analíticas más avanzadas del sector financiero, desarrolle capacidad de pronóstico y logre comunicar insights financieros con claridad a la alta dirección."
    },
    title: "¿Qué lograrás al finalizar el programa?",
    list: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228064/vectux-academy/svg/D-Guiamos.svg",
            text: "Construir modelos de pronóstico financiero con machine learning"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228059/vectux-academy/svg/D-diagnosticamos-2.svg",
            text: "Analizar y gestionar riesgos financieros con datos en tiempo real"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228062/vectux-academy/svg/D-Disenamos.svg",
            text: "Crear dashboards financieros interactivos para la alta dirección"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228057/vectux-academy/svg/D-Aplicamos.svg",
            text: "Tomar decisiones de inversión basadas en análisis cuantitativo"
        }
    ],
    carouselImages: [
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221828/vectux-academy/assets/sample-2.jpg",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765229036/vectux-academy/raw/diplomado-people-analytics.webp",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221798/vectux-academy/assets/sample-1.jpg",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765225233/vectux-academy/raw/3333.jpg",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765529686/bussiness-3_o7n35q.jpg",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220972/vectux-academy/assets/benefits1.jpg"
    ]
}

const AchieveSection = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const imageHeight = 160 // height of each image + gap
                const totalHeight = achieveData.carouselImages.length * imageHeight
                const newPosition = prev + 1
                // Reset when we've scrolled through all images
                if (newPosition >= totalHeight) {
                    return 0
                }
                return newPosition
            })
        }, 30) // Smooth animation speed

        return () => clearInterval(interval)
    }, [])

    // Duplicate images for seamless loop
    const duplicatedImages = [...achieveData.carouselImages, ...achieveData.carouselImages]

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #6478e0 0%, #5f70dc 35%, #5a68d8 65%, #5058d2 100%)' }}>

            {/* Bottom gradient boundary - connects to WhoIsSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5058d2_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28 mt-40">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                    {/* Left Block */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="w-full lg:w-1/3"
                    >
                        <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight text-center">
                            {achieveData.leftblock.title}
                        </p>
                        <h3 className="text-[#4cc9f0] font-bold text-md md:text-xl mb-16">
                            {achieveData.leftblock.subtitle}
                        </h3>
                        <p className="text-white font-Manrope text-base md:text-lg font-[600] leading-relaxed mb-4">
                            {achieveData.leftblock.boldText}
                        </p>
                        <p className="text-white font-Manrope text-sm md:text-base leading-relaxed">
                            {achieveData.leftblock.text}
                        </p>
                    </div>

                    {/* Center Content */}
                    <div className="w-full lg:w-[40%]">
                        <h2 data-aos="fade-up" className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight mb-8 text-center">
                            {achieveData.title}
                        </h2>
                        <div className="space-y-4">
                            {achieveData.list.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 100}
                                    className="flex items-center gap-4 py-4 px-6 border-l-4 border-[#4cc9f0] hover:border-[#ffaa00] transition-all duration-300 rounded-lg"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.text}
                                        width={60}
                                        height={60}
                                        unoptimized
                                        className="w-14 h-14 object-contain flex-shrink-0"
                                    />
                                    <p className="text-white font-Manrope text-base md:text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Block - Vertical Carousel */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        className="w-full sm:w-2/3 lg:w-1/4 h-[250px] md:h-[350px] lg:h-[450px] overflow-hidden relative mx-auto"
                    >
                        <div className="h-full relative">
                            {/* Top fade gradient */}
                            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#6478e0] to-transparent z-10 pointer-events-none" />

                            {/* Bottom fade gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#5058d2] to-transparent z-10 pointer-events-none" />

                            {/* Scrolling images container */}
                            <div
                                className="flex flex-col gap-4 transition-none"
                                style={{
                                    transform: `translateY(-${scrollPosition}px)`
                                }}
                            >
                                {duplicatedImages.map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-[144px] flex-shrink-0 rounded-lg overflow-hidden"
                                    >
                                        <Image
                                            src={image}
                                            alt={`Financial Analytics ${index + 1}`}
                                            width={300}
                                            height={144}
                                            unoptimized
                                            className="w-full h-full object-cover"
                                        />
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

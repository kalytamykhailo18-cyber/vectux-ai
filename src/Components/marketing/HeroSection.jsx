"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765229421/vectux-academy/raw/l1.webp",
        title: "Analítica Digital"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221032/vectux-academy/assets/blog-10.webp",
        title: "Segmentación Avanzada"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220981/vectux-academy/assets/benefits3.jpg",
        title: "Optimización de Campañas"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220976/vectux-academy/assets/benefits2.jpg",
        title: "Estrategia de Marketing"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221106/vectux-academy/assets/blog-8.webp",
        title: "Análisis de Datos"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765223371/vectux-academy/assets/why-4.jpg",
        title: "Decisiones Inteligentes"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765527504/diploma-1_v6wdjl.jpg",
        title: "Marketing Basado en Datos"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226309/vectux-academy/raw/InfoBanner.webp",
        title: "Insights de Negocio"
    },
    {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228770/vectux-academy/raw/diploma-5.jpg",
        title: "Transformación Digital"
    }
]

const heroData = {
    subtitle: "Diplomado en Marketing Analytics",
    title: "Convierte datos en estrategias que impulsan el crecimiento.",
    text: "Un programa ejecutivo para profesionales de marketing que buscan dominar la analítica digital, la segmentación avanzada y la optimización de campañas basada en datos.",
    button: "Contáctanos"
}

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [progress, setProgress] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const slideDuration = 5000 // 5 seconds per slide
    const cardWidth = 180 // width + gap

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setProgress(0)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        setProgress(0)
    }, [])

    const goToSlide = (index) => {
        setCurrentSlide(index)
        setProgress(0)
    }

    // Background slide auto-advance
    useEffect(() => {
        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide()
                    return 0
                }
                return prev + (100 / (slideDuration / 50))
            })
        }, 50)

        return () => clearInterval(progressInterval)
    }, [nextSlide])

    // Infinite thumbnail scroll
    useEffect(() => {
        const scrollInterval = setInterval(() => {
            setScrollPosition((prev) => {
                const totalWidth = slides.length * cardWidth
                const newPosition = prev + 1
                if (newPosition >= totalWidth) {
                    return 0
                }
                return newPosition
            })
        }, 30)

        return () => clearInterval(scrollInterval)
    }, [])

    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image Carousel with Fade Effect */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        unoptimized
                        className="object-cover"
                        priority={index === 0}
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Hero Content */}
            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 w-full">
                <div className="max-w-[600px]">
                    <p data-aos="fade-up" className="text-[#4cc9f0] font-Manrope text-lg md:text-xl font-[600] mb-4">
                        {heroData.subtitle}
                    </p>
                    <h1 data-aos="fade-up" data-aos-delay="200" className="text-white font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
                        {heroData.title}
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400" className="text-white/90 font-Manrope text-lg md:text-xl leading-relaxed mb-8">
                        {heroData.text}
                    </p>
                    <a
                        data-aos="fade-up"
                        data-aos-delay="600"
                        href="#contact"
                        className="inline-block bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {heroData.button}
                    </a>
                </div>
            </div>

            {/* Bottom Carousel Controls */}
            <div className="absolute bottom-8 left-0 right-0 z-30">
                <div className="max-w-[1200px] mx-auto px-8 sm:px-14">
                    {/* Infinite Flowing Thumbnail Cards Carousel */}
                    <div className="relative overflow-hidden mb-6">
                        {/* Left fade gradient */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
                        {/* Right fade gradient */}
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />

                        <div
                            className="flex gap-3"
                            style={{
                                transform: `translateX(-${scrollPosition}px)`
                            }}
                        >
                            {/* Duplicate slides for infinite loop */}
                            {[...slides, ...slides].map((slide, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index % slides.length)}
                                    className="flex-shrink-0 group cursor-pointer transition-opacity duration-300 hover:opacity-100 opacity-80"
                                >
                                    <div className="w-[160px] h-[140px] flex flex-col">
                                        <div className="relative h-[80px] flex-shrink-0 rounded-sm overflow-hidden mb-2">
                                            <Image
                                                src={slide.image}
                                                alt={slide.title}
                                                fill
                                                unoptimized
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="h-[2px] flex-shrink-0 mb-2 bg-white/30 group-hover:bg-[#4cc9f0] transition-all duration-300" />
                                        <p className="text-sm font-Manrope font-[500] text-white group-hover:text-[#4cc9f0] transition-colors duration-300 text-center line-clamp-2">
                                            {slide.title}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center justify-center gap-4">
                        {/* Prev/Next Buttons */}
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        {/* Progress Indicator */}
                        <div className="flex items-center gap-3">
                            <span className="text-white font-Manrope font-[600] text-sm">
                                {String(currentSlide + 1).padStart(2, '0')}
                            </span>
                            <div className="w-[100px] md:w-[150px] h-[3px] bg-white/20 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#4cc9f0] transition-all duration-50"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="text-white/50 font-Manrope font-[600] text-sm">
                                {String(slides.length).padStart(2, '0')}
                            </span>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors cursor-pointer"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

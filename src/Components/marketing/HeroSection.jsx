"use client"
import React from 'react'
import Image from 'next/image'

const backgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1766248356/5d872f10-0dcf-492b-b298-1433027c0937.png"

const heroData = {
    subtitle: "Diplomado en Marketing Analytics",
    title: "Convierte datos en estrategias que impulsan el crecimiento.",
    text: "Un programa ejecutivo para profesionales de marketing que buscan dominar la analítica digital, la segmentación avanzada y la optimización de campañas basada en datos.",
    button: "Contáctanos"
}

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={backgroundImage}
                    alt="Marketing Analytics"
                    fill
                    unoptimized
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

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
        </section>
    )
}

export default HeroSection

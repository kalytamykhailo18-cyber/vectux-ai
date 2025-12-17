"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const heroData = {
    backgroundImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765981627/Picture1_simdn4.jpg",
    subtitle: "Diplomado en Business Analytics",
    title: "Domina el idioma de los datos. Lidera con inteligencia.",
    text: "Un programa ejecutivo para líderes que quieren dominar el ciclo analítico completo, desde el análisis de datos y realización de predicciones hasta el storytelling estratégico.",
    button: "Contáctanos"
}

const HeroSection = () => {
    const router = useRouter()

    return (
        <section className="relative h-screen flex items-center overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroData.backgroundImage})`, backgroundAttachment: 'fixed' }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 z-10" />

            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-20 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-20 bg-[linear-gradient(to_top,_transparent_0%,_#4895ef_50%,_transparent_100%)]" />

            <div className="relative z-30 max-w-[1200px] mx-auto px-8 sm:px-14 flex justify-end w-full">
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
                    <button
                        data-aos="fade-up"
                        data-aos-delay="600"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {heroData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

"use client"
import React from 'react'

const heroData = {
    backgroundVideo: "https://res.cloudinary.com/dcfjvxt5h/video/upload/v1766136677/marketing-bg_r96luh.mp4",
    backgroundImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765527504/diploma-1_v6wdjl.jpg",
    subtitle: "Diplomado en Financial Analytics",
    title: "Transforma los números en decisiones estratégicas.",
    text: "Un programa ejecutivo diseñado para profesionales financieros que buscan dominar el análisis predictivo, la modelación financiera avanzada y la toma de decisiones basada en datos.",
    button: "Contáctanos"
}

const HeroSection = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                poster={heroData.backgroundImage}
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src={heroData.backgroundVideo} type="video/mp4" />
            </video>

            <div className="relative z-30 max-w-[1200px] mx-auto px-8 sm:px-14 flex w-full">
                <div className="max-w-[600px] backdrop-blur-md bg-black/40 rounded-sm p-8 md:p-10">
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

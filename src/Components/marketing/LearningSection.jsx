"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const learningData = {
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226666/vectux-academy/raw/uplogo.png",
    text: "Nuestra metodología se basa en casos reales de campañas de marketing digital. Trabajarás con datos de Google Ads, Meta Ads, CRM y plataformas de e-commerce para desarrollar estrategias que puedas implementar inmediatamente.\n\nAprenderás las mismas técnicas que utilizan las agencias de marketing más exitosas y los equipos de growth de startups unicornio.",
    benefitsTitle: "Beneficios clave",
    benefits: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228050/vectux-academy/svg/CLH-diagnosticamos.svg",
            text: "Mentores de agencias digitales y equipos de growth líderes"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228052/vectux-academy/svg/CLH-disenamos.svg",
            text: "Proyectos con datos reales de campañas publicitarias"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228054/vectux-academy/svg/CLH-guiamos.svg",
            text: "Clases online en vivo con sesiones de Q&A"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228048/vectux-academy/svg/CLH-aplicamos.svg",
            text: "Comunidad de marketers data-driven de LATAM"
        }
    ],
    button: "Contáctanos"
}

const LearningSection = () => {
    const router = useRouter()

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5a68d8 0%, #5f70dc 35%, #6478e0 65%, #5078e0 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#5a68d8_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to ContactSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5078e0_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                {/* Image with text block */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2 p-10">
                        <Image
                            src={learningData.image}
                            alt="Marketing Learning"
                            width={500}
                            height={400}
                            unoptimized
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="800" className="md:w-1/2">
                        <p className="text-white font-Manrope text-lg md:text-xl leading-relaxed whitespace-pre-line">
                            {learningData.text}
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-12 text-center">
                    {learningData.benefitsTitle}
                </h2>

                <div className="flex flex-wrap mb-12">
                    {learningData.benefits.map((benefit, index) => (
                        <div
                            key={index}
                            data-aos="flip-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            className="flex-1 min-w-[150px] group hover:border-[#4cc9f0]/30 transition-all duration-300 rounded-[16px] p-6 flex flex-col items-center gap-4 text-center"
                        >
                            <Image
                                src={benefit.image}
                                alt={benefit.text}
                                width={80}
                                height={80}
                                unoptimized
                                className="w-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="h-full text-white font-Manrope text-base md:text-lg group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {learningData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LearningSection

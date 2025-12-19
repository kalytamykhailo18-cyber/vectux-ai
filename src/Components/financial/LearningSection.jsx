"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const learningData = {
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=600&q=80",
    text: "Nuestra metodología combina teoría financiera con aplicación práctica inmediata. Trabajarás con datos reales de mercados, estados financieros de empresas públicas y casos de análisis de inversión.\n\nAprenderás a usar las mismas herramientas que utilizan los profesionales de Wall Street y las principales instituciones financieras del mundo.",
    benefitsTitle: "Beneficios clave",
    benefits: [
        {
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
            text: "Mentores con experiencia en banca de inversión y fintech"
        },
        {
            image: "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=100&q=80",
            text: "Casos prácticos con datos de mercados reales"
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&q=80",
            text: "Clases online en vivo con grabaciones disponibles"
        },
        {
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&q=80",
            text: "Red de profesionales financieros LATAM"
        },
        {
            image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=100&q=80",
            text: "Certificado Vectux en Financial Analytics con validez internacional"
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
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2">
                        <Image
                            src={learningData.image}
                            alt="Financial Learning"
                            width={500}
                            height={400}
                            unoptimized
                            className="w-full h-auto rounded-tl-[0px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[0px] object-cover"
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
                                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="h-full text-white font-Manrope text-base md:text-lg group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
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

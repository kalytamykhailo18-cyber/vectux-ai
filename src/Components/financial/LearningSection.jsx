"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const learningData = {
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765984576/Picture2-removebg-preview_gvjdkh.png",
    text: "Nuestra metodología combina teoría financiera con aplicación práctica inmediata. Trabajarás con datos reales de mercados, estados financieros de empresas públicas y casos de análisis de inversión.\n\nAprenderás a usar las mismas herramientas que utilizan los profesionales de Wall Street y las principales instituciones financieras del mundo.",
    benefitsTitle: "Beneficios clave",
    benefits: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228078/vectux-academy/svg/DD-mayor-eficiencia.svg",
            text: "Mentores con experiencia en banca de inversión y fintech"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228076/vectux-academy/svg/DD-innovacion-continua.svg",
            text: "Casos prácticos con datos de mercados reales"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228072/vectux-academy/svg/DD-Decisiones-mas-seguras.svg",
            text: "Clases online en vivo con grabaciones disponibles"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228068/vectux-academy/svg/DD-agilidad-competitiva.svg",
            text: "Red de profesionales financieros LATAM"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228081/vectux-academy/svg/DD-transparencia-interna.svg",
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
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mt-48 mb-22 text-center">
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
                                width={100}
                                height={100}
                                unoptimized
                                className="w-full object-contain group-hover:scale-110 transition-transform duration-300"
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

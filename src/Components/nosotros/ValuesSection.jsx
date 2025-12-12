"use client"
import React from 'react'
import { HiLightBulb, HiAcademicCap, HiCog, HiGlobeAlt, HiHeart } from "react-icons/hi2"

const values = [
    {
        icon: HiLightBulb,
        title: "Innovación:",
        description: "Actualizamos continuamente nuestros programas para ofrecer conocimientos avanzados en inteligencia artificial y análisis de datos. Impacto inmediato: Diseñamos cursos prácticos que generan resultados tangibles en la vida profesional y el desempeño empresarial.",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        icon: HiAcademicCap,
        title: "Excelencia educativa:",
        description: "Nuestros expertos combinan teoría y práctica para garantizar una formación de alta calidad y aplicabilidad en el mundo real.",
        aos: "fade-right",
        duration: "800",
        delay: 100
    },
    {
        icon: HiCog,
        title: "Sostenibilidad y responsabilidad:",
        description: "Alineados con los ODS, promovemos la educación inclusiva y el uso de la tecnología para el bienestar social y el crecimiento económico sostenible.",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        icon: HiGlobeAlt,
        title: "Colaboración global:",
        description: "Fomentamos una red de colaboración internacional para el crecimiento mutuo de profesionales y organizaciones.",
        aos: "fade-left",
        duration: "800",
        delay: 300
    },
    {
        icon: HiHeart,
        title: "Accesibilidad para todos:",
        description: "Creemos que el aprendizaje debe ser inclusivo y accesible para todos, facilitando el desarrollo de habilidades críticas en un entorno empresarial cada vez más digital.",
        aos: "fade-up",
        duration: "1000",
        delay: 400
    }
]

const ValuesSection = () => {
    return (
        <section id="valores" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#8d4aed]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <h2
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16"
                >
                    Nuestros Valores.
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => {
                        const IconComponent = value.icon
                        return (
                            <div
                                key={index}
                                data-aos={value.aos}
                                data-aos-duration={value.duration}
                                data-aos-delay={value.delay}
                                className="p-6 rounded-[16px] border border-[#e3e3e330] bg-black/30 backdrop-blur-sm hover:border-[#4cc9f0] transition-all duration-300 group"
                            >
                                <IconComponent className="text-[#4cc9f0] text-[50px] mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-white font-bold text-[18px] leading-[26px] mb-3 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    {value.title}
                                </h3>
                                <p className="text-white/70 font-Manrope text-[14px] leading-[22px]">
                                    {value.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ValuesSection

"use client"
import React from 'react'
import { HiBookOpen, HiBriefcase, HiSparkles } from "react-icons/hi2"

const sdgs = [
    {
        icon: HiBookOpen,
        title: "ODS 4",
        subtitle: "Educación de calidad:",
        description: "Estamos comprometidos en proporcionar una educación de calidad, promoviendo el aprendizaje continuo y preparando a las personas para el futuro del trabajo."
    },
    {
        icon: HiBriefcase,
        title: "ODS 8",
        subtitle: "Trabajo decente y crecimiento económico:",
        description: "Empoderando a empleados y gerentes para mejorar la productividad y la innovación en sus organizaciones."
    },
    {
        icon: HiSparkles,
        title: "ODS 9",
        subtitle: "Industria, innovación e infraestructura:",
        description: "Promoviendo el uso de la tecnología y el análisis de datos como pilares fundamentales para la innovación en las empresas."
    }
]

const SDGsSection = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            <div className="max-w-[1200px] mx-auto">
                <h2
                    data-aos="fade-up"
                    className="text-white font-bold text-[24px] md:text-3xl lg:text-[36px] leading-[34px] md:leading-[46px] text-center mb-16"
                >
                    Vectux Academy y su compromiso con los Objetivos de Desarrollo Sostenible (ODS)
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sdgs.map((sdg, index) => {
                        const IconComponent = sdg.icon
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                                className="p-6 rounded-[16px] border border-[#e3e3e330] bg-black/30 backdrop-blur-sm hover:border-[#4cc9f0] transition-all duration-300 group text-center"
                            >
                                <IconComponent className="text-[#4cc9f0] text-[60px] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                                <h3 className="text-[#fa0] font-bold text-[22px] mb-2">
                                    {sdg.title}
                                </h3>
                                <p className="text-white font-bold text-[16px] mb-3">
                                    {sdg.subtitle}
                                </p>
                                <p className="text-white/70 font-Manrope text-[14px] leading-[22px]">
                                    {sdg.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default SDGsSection

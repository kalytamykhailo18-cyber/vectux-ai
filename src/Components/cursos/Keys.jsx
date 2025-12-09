"use client"
import React from 'react'
import { FaCheckCircle } from "react-icons/fa"

const sections = [
    {
        title: "Metodología Única – Aprender Haciendo",
        aos: "fade-right",
        duration: "800",
        delay: 0,
        items: [
            { text: "100% Online con Sesiones en Vivo: Aprendizaje flexible, sin sacrificar la interacción.", aos: "fade-up", duration: "600", delay: 100 },
            { text: "Casos Reales y Proyectos Prácticos: Trabaja con datasets actuales y problemas reales de RR.HH.", aos: "fade-right", duration: "800", delay: 200 },
            { text: "Mentoría Directa de Expertos: Profesores con experiencia internacional en empresas líderes.", aos: "zoom-in", duration: "600", delay: 300 },
            { text: "Networking Ejecutivo: Conéctate con líderes y profesionales de toda la región.", aos: "fade-left", duration: "800", delay: 400 }
        ]
    },
    {
        title: "Beneficios Clave",
        aos: "fade-left",
        duration: "800",
        delay: 150,
        items: [
            { text: "Aprendizaje aplicado desde la primera clase", aos: "fade-up", duration: "600", delay: 100 },
            { text: "Acceso a las herramientas más demandadas del mercado (Power BI, Machine Learning, IA Generativa)", aos: "fade-right", duration: "800", delay: 200 },
            { text: "Proyecto final con aplicación directa a tu organización", aos: "zoom-in", duration: "600", delay: 300 },
            { text: "Certificación con reconocimiento internacional", aos: "fade-left", duration: "800", delay: 400 },
            { text: "Horarios flexibles para ejecutivos y líderes", aos: "fade-up", duration: "1000", delay: 500 }
        ]
    }
]

const Keys = () => {
    return (
        <section className="relative overflow-hidden px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            {/* Bottom Gradient - blends with WhyUs */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <div className="max-w-[1200px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} data-aos={section.aos} data-aos-duration={section.duration} data-aos-delay={section.delay}>
                            <h2 className="text-[#fa0] font-bold text-[28px] md:text-3xl lg:text-[36px] leading-[40px] md:leading-[46px] mb-8">
                                {section.title}
                            </h2>
                            <ul className="space-y-4">
                                {section.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        data-aos={item.aos}
                                        data-aos-duration={item.duration}
                                        data-aos-delay={item.delay}
                                        className="flex items-start gap-3 group"
                                    >
                                        <FaCheckCircle className="text-[#4cc9f0] text-[20px] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-white font-Manrope text-[15px] sm:text-[16px] leading-[26px]">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Keys

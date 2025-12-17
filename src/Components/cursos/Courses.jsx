"use client"
import React from 'react'
import Image from 'next/image'
import { HiBriefcase, HiChartBar, HiChatBubbleLeftRight, HiUserGroup } from "react-icons/hi2"

const sections = [
    {
        title: "Prepárate para Liderar la Revolución Financiera",
        description: [
            "En un entorno donde los mercados evolucionan a velocidad digital y la inteligencia artificial está redefiniendo la toma de decisiones, el nuevo profesional financiero debe ser ",
            { text: "analítico, estratégico y tecnológicamente competente", bold: true },
            "."
        ],
        description2: [
            "Nuestros programas están diseñados para convertirte en un ",
            { text: "líder financiero basado en datos", bold: true },
            ", capaz de ",
            { text: "anticipar riesgos, descubrir oportunidades ocultas", bold: true },
            ", y generar valor real con datos, automatización y modelos predictivos."
        ],
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221126/vectux-academy/assets/course-1.jpg",
        imageAlt: "Revolución Financiera",
        reverse: false,
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        title: "Objetivo de Nuestros Cursos",
        description: [
            "En un mundo donde los datos son el nuevo petróleo y la inteligencia artificial está redefiniendo las industrias, nuestros programas están enfocados en ",
            { text: "convertirte en un líder basado en datos", bold: true },
            ", capaz de tomar decisiones más inteligentes, ágiles y estratégicas."
        ],
        description2: [
            "Cada curso ha sido diseñado para desarrollar ",
            { text: "habilidades prácticas y aplicables desde el primer día", bold: true },
            ", utilizando metodologías modernas y herramientas de última generación."
        ],
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221130/vectux-academy/assets/course-2.png",
        imageAlt: "Objetivos del Curso",
        buttonText: "Solicitar más información",
        reverse: true,
        aos: "fade-left",
        duration: "800",
        delay: 0
    }
]

const whoIsFor = [
    {
        icon: HiBriefcase,
        title: "CFOs, Contralores, Gerentes Financieros",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        icon: HiChartBar,
        title: "Analistas Financieros, Planificación Financiera",
        aos: "fade-right",
        duration: "800",
        delay: 100
    },
    {
        icon: HiChatBubbleLeftRight,
        title: "Consultores, Contralores y Líderes de FP&A",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        icon: HiUserGroup,
        title: "Profesionales de negocios con orientación estratégica y analítica",
        aos: "fade-left",
        duration: "800",
        delay: 300
    }
]

const renderText = (textArray) => {
    return textArray.map((item, index) => {
        if (typeof item === 'string') {
            return <span key={index}>{item}</span>
        }
        if (item.bold) {
            return <strong key={index}>{item.text}</strong>
        }
        return <span key={index}>{item.text}</span>
    })
}

const Courses = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221016/vectux-academy/assets/bg-5.jpg')" }}
        >
            {/* White Overlay - makes background appear transparent/faded */}
            <div className="absolute inset-0 bg-skyBlue/80" />

            {/* Top Gradient - flows from center to top and bottom */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />
            {/* Bottom Gradient - flows from center to top and bottom */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            {sections.map((section, index) => (
                <section
                    key={index}
                    className="relative px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 py-20 md:py-28"
                >
                    <div className="max-w-[1200px] mx-auto relative z-20">
                        <div className={`flex flex-col ${section.reverse ? 'min-[860px]:flex-row-reverse' : 'min-[860px]:flex-row'} items-center gap-10 lg:gap-16`}>
                            {/* Text Content */}
                            <div className="flex flex-col justify-center gap-4 min-[860px]:w-[55%] bg-black/50 backdrop-blur-sm p-6 rounded-[16px]">
                                <h2
                                    data-aos="fade-up"
                                    className="text-[#fa0] font-bold text-[32px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px]"
                                >
                                    {section.title}
                                </h2>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                    className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]"
                                >
                                    {renderText(section.description)}
                                </p>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                    className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]"
                                >
                                    {renderText(section.description2)}
                                </p>
                                {section.buttonText && (
                                    <div data-aos="fade-up" data-aos-delay="300" className="mt-4">
                                        <button className="bg-[#fa0] cursor-pointer w-max font-Manrope uppercase hover:bg-[#e80] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none">
                                            {section.buttonText}
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Image */}
                            <div data-aos={section.reverse ? "fade-left" : "fade-right"} data-aos-duration={section.duration} data-aos-delay="200" className="w-full min-[860px]:w-[45%]">
                                <div className="relative group cursor-pointer">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#4cc9f0] via-[#f72585] to-[#4895ef] rounded-[16px] blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md animate-pulse"></div>
                                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[16px]">
                                        <Image
                                            alt={section.imageAlt}
                                            fill
                                            src={section.image}
                                            unoptimized
                                            className="object-cover transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Who Is It For Section */}
            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    <h2
                        data-aos="fade-up"
                        className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16"
                    >
                        ¿Para quién es?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whoIsFor.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="flex items-start gap-4 pl-6 border-l-4 border-[#4cc9f0] group hover:border-white transition-all duration-300"
                                >
                                    <IconComponent className="text-[#4cc9f0] text-[50px] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <h3 className="text-white font-bold text-[16px] leading-[24px] pt-3 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Courses

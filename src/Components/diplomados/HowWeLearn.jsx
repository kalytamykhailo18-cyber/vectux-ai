"use client"
import React from 'react'
import { HiUserGroup } from "react-icons/hi"
import { FaUserTie, FaRocket, FaUsers } from "react-icons/fa"
import { MdTrendingUp, MdBusinessCenter } from "react-icons/md"
import { RiTeamFill } from "react-icons/ri"

const benefitsItems = [
    {
        title: "Aprende haciendo, no solo entendiendo",
        text: "100 % práctico y aplicado a tu rol actual",
        icon: "✨", aos: "fade-up", duration: "600", delay: 0
    },
    {
        title: "Aplica en tu trabajo desde el primer módulo",
        text: "Mentoría personalizada y acompañamiento estratégico",
        icon: "🎓", aos: "fade-up", duration: "600", delay: 100
    },
    {
        title: "Conecta con mentores y pares de alto nivel en Latinoamérica",
        text: "Mentores en activo, trabajando en el mundo de la analítica con empresas top Mundiales",
        icon: "🤝", aos: "fade-up", duration: "600", delay: 200
    },
    {
        title: "La analítica avanzada abre tus puertas en otros países como EE.UU. y Canadá",
        text: "Certificado en Blockchain respaldado por Vectux, firma de referencia en analítica avanzada",
        icon: "🌍", aos: "fade-up", duration: "600", delay: 300
    }
]

const targetAudienceItems = [
    {
        text: "Analistas, gerentes y directivos de cualquier industria",
        icon: MdBusinessCenter, aos: "fade-up", duration: "600", delay: 0
    },
    {
        text: "Líderes funcionales que no son técnicos, pero toman decisiones clave",
        icon: FaUserTie, aos: "fade-up", duration: "800", delay: 100
    },
    {
        text: "Profesionales que quieren impulsar su carrera o prepararse para mercados globales",
        icon: FaRocket, aos: "fade-up", duration: "600", delay: 200
    },
    {
        text: "Equipos internos de empresas que buscan mejorar su capacidad analítica",
        icon: FaUsers, aos: "fade-up", duration: "1000", delay: 300
    }
]

const HowWeLearn = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#6b3fa0] to-[#343ec2]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <h2
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="text-white font-bold text-3xl md:text-[36px] leading-[44px] mb-12 text-center"
                >
                    Beneficios diferenciales
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefitsItems.map((item, index) => (
                        <div
                            key={index}
                            data-aos={item.aos}
                            data-aos-duration={item.duration}
                            data-aos-delay={item.delay}
                            className="group flex flex-col items-start gap-4 px-6 border-l-4 border-[#4cc9f0] hover:border-white transition-all duration-300 flex-1 rounded-lg"
                        >
                            <span className="text-[32px] flex-shrink-0 group-hover:rotate-360 transition-transform duration-500">{item.icon}</span>
                            <div>
                                <h3 className="text-white font-bold text-[18px] md:text-[20px] leading-[28px] mb-2 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/70 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] group-hover:text-white transition-colors duration-300">
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Target Audience Section */}
                <div className="mt-20">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-[36px] leading-[44px] mb-12 text-center"
                    >
                        ¿A quién están dirigidos?
                    </h2>

                    <div className="flex flex-col gap-6 max-w-[900px] mx-auto">
                        {targetAudienceItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group flex items-center gap-6 p-8 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/10 hover:border-[#4cc9f0] transition-all duration-300"
                                >
                                    <IconComponent className="text-[#4cc9f0] w-8 h-8 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-white/80 font-Manrope text-[16px] sm:text-[17px] font-[500] leading-[28px] group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#343ec2] blur-xl" />
        </section>
    )
}

export default HowWeLearn

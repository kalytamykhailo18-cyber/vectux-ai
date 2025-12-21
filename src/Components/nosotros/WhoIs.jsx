"use client"
import React from 'react'
import { GiTeamIdea, GiTargetArrows } from 'react-icons/gi'

const whoIsData = {
    title: "¿Quiénes somos en Vectux Academy?",
    text: "Vectux Academy es parte de Vectux Analytics, una consultora internacional especializada en analítica avanzada e inteligencia artificial aplicada a negocios.",
    list: [
        {
            icon: GiTeamIdea,
            text: "No somos una escuela tradicional: formamos líderes reales con desafíos reales, combinando experiencia práctica, metodologías ágiles y el respaldo de nuestros mentores, quienes trabajan activamente en empresas líderes en América."
        },
        {
            icon: GiTargetArrows,
            text: "Nuestro propósito es claro: abrirle la puerta al mundo de los datos a personas y equipos que quieren mantenerse relevantes, competitivos y estratégicos en la era de la inteligencia artificial."
        }
    ]
}

const WhoIs = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #343ec2 0%, #3a45c5 35%, #4550cc 65%, #5058d2 100%)' }}>
            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6 text-center">
                    {whoIsData.title}
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-white font-Manrope text-lg md:text-xl leading-relaxed mb-12 text-center max-w-[900px] mx-auto">
                    {whoIsData.text}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {whoIsData.list.map((item, index) => {
                        const IconComponent = item.icon
                        return (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                                data-aos-duration="800"
                                className="group border border-white/10 hover:bg-white/10 hover:border-[#4cc9f0]/30 transition-all duration-300 rounded-[6px] p-6 flex items-start gap-4"
                            >
                                <IconComponent className="text-[#4cc9f0] w-10 h-10 flex-shrink-0 group-hover:text-[#ffaa00] transition-all duration-500 mt-1" />
                                <p className="text-white font-Manrope text-base md:text-lg leading-relaxed">
                                    {item.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhoIs

"use client"
import React from 'react'
import { FaBullhorn, FaUsers, FaStore } from 'react-icons/fa'

const whoIsData = {
    title: "¿Para quién está diseñado?",
    text: "Para profesionales de marketing, publicidad y comunicación que buscan evolucionar de la intuición a la toma de decisiones basada en datos. Ideal para quienes quieren maximizar el impacto de cada inversión en marketing.",
    cards: [
        {
            text: "Gerentes de marketing digital, growth hackers y CMOs",
            icon: FaBullhorn
        },
        {
            text: "Especialistas en CRM, email marketing y automatización",
            icon: FaUsers
        },
        {
            text: "Directores comerciales y de e-commerce que buscan optimizar conversiones",
            icon: FaStore
        }
    ]
}

const WhoIsSection = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5058d2 0%, #4550cc 35%, #3a45c5 65%, #343ec2 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#5058d2_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to StructureSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6 text-center">
                    {whoIsData.title}
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-white/90 font-Manrope text-lg md:text-xl leading-relaxed mb-12 text-center max-w-[900px] mx-auto">
                    {whoIsData.text}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whoIsData.cards.map((card, index) => {
                        const IconComponent = card.icon
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                                data-aos-duration="600"
                                className="flex flex-col items-start gap-4 py-6 px-6 border-l-4 border-[#4cc9f0] hover:border-[#ffaa00] transition-all duration-300 rounded-lg"
                            >
                                <IconComponent className="text-[#4cc9f0] w-10 h-10 transition-colors duration-300" />
                                <p className="text-white font-Manrope text-base md:text-lg">
                                    {card.text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default WhoIsSection

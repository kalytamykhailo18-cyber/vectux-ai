"use client"
import React from 'react'
import Link from 'next/link'

const diplomados = [
    {
        id: 1,
        icon: "🧠",
        title: "Diplomado en Business Analytics (BA)",
        description: "Lidera con datos, no con suposiciones. Aprende a transformar información en decisiones estratégicas, visuales y accionables para tu negocio. Ideal para analistas y gerentes de cualquier área: administración, operaciones, ventas, recursos humanos y líderes que necesitan incorporar la analítica en sus funciones.",
        buttonText: "Ver Detalle",
        slug: "business-analytics",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        icon: "📊",
        title: "Diplomado en Financial Analytics (FA)",
        description: "Convierte tus datos financieros en decisiones estratégicas. Dirigido a CFOs, controllers, gerentes y equipos contables o financieros que quieren pasar de Excel a modelos predictivos.",
        buttonText: "Ver Detalle",
        slug: "financial-analytics",
        aos: "zoom-in",
        duration: "600",
        delay: 100
    },
    {
        id: 3,
        icon: "📈",
        title: "Diplomado en Marketing Analytics (MA)",
        description: "Optimiza campañas, entiende a tu cliente y predice resultados con datos reales. Para líderes de marketing, producto, e-commerce y estrategia digital.",
        buttonText: "Ver Detalle",
        slug: "marketing-analytics",
        aos: "fade-left",
        duration: "800",
        delay: 200
    }
]

const DiplomadosCards = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#5a3db8] via-[#6b3fa0] to-[#8d4aed]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#5a3db8] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] leading-[45px] sm:leading-[58px]"
                    >
                        Conoce Nuestros Diplomados
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {diplomados.map((diplomado) => (
                        <div
                            key={diplomado.id}
                            data-aos={diplomado.aos}
                            data-aos-duration={diplomado.duration}
                            data-aos-delay={diplomado.delay}
                            className="group bg-black/30 backdrop-blur-sm rounded-[20px] p-8 border border-[#e3e3e330] hover:border-[#4cc9f0] hover:bg-[#4cc9f0]/10 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-[48px] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {diplomado.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-xl md:text-[22px] leading-[30px] mb-4 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {diplomado.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] mb-8">
                                {diplomado.description}
                            </p>

                            {/* Button */}
                            <Link
                                href={`/diplomados/${diplomado.slug}`}
                                className="inline-block bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12px] tracking-[1.3px] px-6 py-2.5 rounded-md select-none"
                            >
                                {diplomado.buttonText}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#8d4aed] blur-xl" />
        </section>
    )
}

export default DiplomadosCards

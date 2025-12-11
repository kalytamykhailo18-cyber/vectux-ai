"use client"
import React from 'react'
import Link from 'next/link'

const diplomados = [
    {
        id: 1,
        icon: "📊",
        title: "Business Analytics",
        subtitle: "Domina el idioma de los datos para tomar mejores decisiones.",
        description: "Una experiencia ejecutiva para líderes de distintas áreas que quieren integrar la analítica en su día a día, sin ser técnicos. Aprende a visualizar, interpretar y aplicar datos para liderar con confianza en un entorno cambiante.",
        buttonText: "Ver Detalle",
        slug: "business-analytics",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        icon: "💰",
        title: "Financial Analytics",
        subtitle: "Convierte tus datos financieros en decisiones estratégicas.",
        description: "Dirigido a profesionales de finanzas que quieren ir más allá de los reportes: automatización, modelos predictivos, análisis de rentabilidad y escenarios para tomar decisiones ágiles, informadas y rentables.",
        buttonText: "Ver Detalle",
        slug: "financial-analytics",
        aos: "zoom-in",
        duration: "600",
        delay: 100
    },
    {
        id: 3,
        icon: "📈",
        title: "Marketing Analytics",
        subtitle: "Pasa de suposiciones a decisiones basadas en datos reales.",
        description: "Para líderes de marketing, producto o e-commerce que buscan optimizar campañas, entender a sus clientes, medir resultados y predecir el rendimiento con herramientas analíticas claras, aplicables y potentes.",
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
                            className="group backdrop-blur-sm rounded-[20px] p-8 border border-[#e3e3e330] hover:border-[#4cc9f0] hover:bg-[#4cc9f0]/3 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="text-[48px] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                {diplomado.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-white font-bold text-xl md:text-[22px] leading-[30px] mb-2 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {diplomado.title}
                            </h3>

                            {/* Subtitle */}
                            <p className="text-[#4cc9f0] font-Manrope text-[14px] sm:text-[15px] font-[600] leading-[24px] mb-4">
                                {diplomado.subtitle}
                            </p>

                            {/* Description */}
                            <p className="text-white/90 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] mb-8">
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

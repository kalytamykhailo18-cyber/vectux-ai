"use client"
import React from 'react'
import Image from 'next/image'

const achieveData = {
    leftblock: {
        subtitle: "OBJETIVO",
        boldText: "Preparar a líderes y profesionales para dominar todo el ciclo analítico —desde la recolección y visualización de datos hasta el análisis predictivo— con un enfoque estratégico, práctico y accionable.",
        text: "El programa busca que cada participante integre la analítica en su toma de decisiones diaria, desarrolle pensamiento crítico, y logre comunicar con impacto a través del storytelling con datos, convirtiendo cifras complejas en narrativas persuasivas que movilicen a sus equipos, direcciones y organizaciones."
    },
    title: "Diplomado en Business Analytics",
    subtitle: "¿Qué lograrás al finalizar el programa?",
    list: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765983227/Picture5-removebg-preview_q9c5ot.png",
            text: "Aplicar herramientas analíticas reales en tus decisiones diarias"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765983227/Picture6-removebg-preview_vebab0.png",
            text: "Construir dashboards, modelos predictivos y presentaciones ejecutivas"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765983227/Picture7-removebg-preview_omueuf.png",
            text: "Elevar tu perfil profesional en un entorno dominado por los datos"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765983228/Picture8-removebg-preview_xm0hqt.png",
            text: "Presentar insights a tu dirección con claridad y poder de influencia"
        }
    ],
    button: "Solicitar el programa completo"
}

const AchieveSection = () => {
    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #6478e0 0%, #5f70dc 35%, #5a68d8 65%, #5058d2 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#000_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to WhoIsSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5058d2_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28 mt-40">
                <h2 data-aos="fade-up" className="m-20 text-white font-bold text-2xl md:text-4xl lg:text-6xl leading-tight text-center">
                    {achieveData.title}
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Left Block */}
                    <div data-aos="fade-right" data-aos-duration="800">
                        <h3 className="text-[#4cc9f0] font-bold text-md md:text-xl mb-6">
                            {achieveData.leftblock.subtitle}
                        </h3>
                        <p className="text-white font-Manrope text-base md:text-lg font-[600] leading-relaxed mb-4">
                            {achieveData.leftblock.boldText}
                        </p>
                        <p className="text-white/80 font-Manrope text-sm md:text-base leading-relaxed">
                            {achieveData.leftblock.text}
                        </p>
                    </div>

                    {/* Right Content - List */}
                    <div data-aos="fade-left" data-aos-duration="800">
                        <h3 className="text-[#ffaa00] font-bold text-xl md:text-2xl mb-6 text-center">
                            {achieveData.subtitle}
                        </h3>
                        <div className="space-y-4">
                            {achieveData.list.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 100}
                                    className="flex items-center gap-4 py-3 px-4 border-l-4 border-[#4cc9f0] hover:border-[#ffaa00] transition-all duration-300 rounded-r-lg hover:bg-white/5"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.text}
                                        width={50}
                                        height={50}
                                        unoptimized
                                        className="w-12 h-12 object-contain flex-shrink-0"
                                    />
                                    <p className="text-white font-Manrope text-sm md:text-base">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="text-center mt-20">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {achieveData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AchieveSection

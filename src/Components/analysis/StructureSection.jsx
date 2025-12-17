"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { BarChart3, Brain, Target } from 'lucide-react'

const structureData = {
    title: "Estructura del Programa",
    text: "El Diplomado en Business Analytics te prepara para dominar todo el ciclo analítico, desde la recolección y limpieza de datos hasta la creación de modelos predictivos y la comunicación de insights que generan impacto real en los negocios",
    modules: [
        {
            icon: BarChart3,
            title: "Módulo I - Fundamentos de Business Analytics (30 hrs)",
            subtitle: "De los datos a la visualización",
            text: "Aprende a recolectar, limpiar y visualizar datos para tomar decisiones claras. Dominarás Power BI y las bases estadísticas del análisis.",
            mentor: "Luis Fernando González, Commercial Insights & Analytics Lead, Johnson & Johnson México"
        },
        {
            icon: Brain,
            title: "Módulo II - Business Analytics Aplicado (51 hrs)",
            subtitle: "Del análisis a la predicción",
            text: "Desarrolla modelos de machine learning, clasificación y segmentación. Aplica análisis prescriptivo con herramientas reales.",
            mentor: "Francisco Vargas, Chief Data Officer - Bimbonet (Grupo Bimbo)"
        },
        {
            icon: Target,
            title: "Módulo III - Storytelling con Datos (9 hrs)",
            subtitle: "Del modelo al relato convincente",
            text: "Convierte resultados complejos en historias que persuadan. Aprende a comunicar con impacto a líderes C-level.",
            mentor: "Ana Mireya López, CEO de Vectux Analytics y Vectux Academy"
        }
    ],
    button: "Solicitar el programa completo"
}

const StructureSection = () => {
    const router = useRouter()

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #343ec2 0%, #4a5bb8 50%, #5a67d8 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5a67d8_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6 text-center">
                    {structureData.title}
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-white/90 font-Manrope text-lg md:text-xl leading-relaxed mb-12 text-center max-w-[900px] mx-auto">
                    {structureData.text}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {structureData.modules.map((module, index) => {
                        const IconComponent = module.icon
                        return (
                            <div
                                key={index}
                                data-aos="zoom-in"
                                data-aos-delay={index * 150}
                                data-aos-duration="800"
                                className="group backdrop-blur-md bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#4cc9f0]/30 transition-all duration-300 rounded-[16px] p-6 flex flex-col gap-4"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <IconComponent className="text-[#4cc9f0] w-18 h-18 group-hover:text-[#ffaa00] transition-all duration-500 group-hover:rotate-[360deg]" />
                                    <h3 className="text-white font-bold text-[20px] md:text-[22px]">
                                        {module.title}
                                    </h3>
                                </div>
                                <p className="text-[#ffaa00] font-Manrope text-base font-[600]">
                                    {module.subtitle}
                                </p>
                                <p className="text-white/80 font-Manrope text-[15px] leading-relaxed">
                                    {module.text}
                                </p>
                                <p className="text-[#4cc9f0] font-Manrope text-sm font-[500] mt-auto">
                                    {module.mentor}
                                </p>
                            </div>
                        )
                    })}
                </div>

                <div className="text-center">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {structureData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StructureSection

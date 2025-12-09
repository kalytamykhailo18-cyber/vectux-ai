"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { HiBriefcase } from "react-icons/hi2"
import { FaProjectDiagram } from "react-icons/fa"
import { MdOutlineSettingsSuggest } from "react-icons/md"
import { PiUsersThreeFill } from "react-icons/pi"
import { TbChartHistogram } from "react-icons/tb"
import { BsRobot } from "react-icons/bs"
import Modal from '@/Components/LayoutWrapper/Modal'

const ObjectiveData = {
    title: "Objetivo de Nuestros Diplomados",
    subtitle: "Un impulso directo a tu desarrollo profesional",
    text: "Adquiere habilidades altamente demandadas que fortalecerán tu perfil como líder estratégico de talento, con capacidades aplicables desde el primer mes.",
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221133/vectux-academy/assets/cursos-2.webp"
}

const design = {
    title: "Nuestros programas están diseñados para:",
    cards: [
        {
            icon: PiUsersThreeFill,
            text: "Directores y Gerentes de RR.HH. y Talento",
            aos: "fade-right",
            duration: "800",
            delay: 0
        },
        {
            icon: TbChartHistogram,
            text: "Equipos de Recursos Humanos que quieren evolucionar hacia People Analytics",
            aos: "zoom-in",
            duration: "600",
            delay: 100
        },
        {
            icon: BsRobot,
            text: "Líderes que apuestan por la inteligencia artificial para gestionar el talento del futuro",
            aos: "fade-left",
            duration: "800",
            delay: 200
        }
    ]
}

const modules = [
    {
        number: 1,
        title: "Analítica Descriptiva de Talento y Toma de Decisiones con Dashboards",
        description: "Lleva las decisiones de talento al siguiente nivel con datos y analítica.",
        aos: "fade-right",
        duration: "800",
        delay: 0,
        modalData: {
            moduleLabel: "MÓDULO I",
            title: "Analítica Descriptiva de Talento y Toma de Decisiones con Dashboards",
            duration: "18 horas (3 horas diarias)",
            learningObjectives: [
                "Definir KPIs de RR.HH. vinculados a decisiones (rotación, ausentismo, cobertura de vacantes, desempeño, DEI, movilidad interna).",
                "Construir dashboards ejecutivos con alertas, umbrales e interpretación correcta (evitar sesgos de agregación).",
                "Establecer contrato mínimo de datos para People Analytics (diccionario de datos, calidad, trazabilidad y ética)."
            ],
            keyContents: [
                "Modelo de datos de personas (employee journey: atracción → onboarding → desarrollo → salida).",
                "Buenas prácticas de visualización (Power BI o similar), segmentación por grupos y cohortes.",
                "Lectura ejecutiva: cómo pasar de un indicador a una decisión."
            ],
            practice: [
                "Construcción de un Dashboard Ejecutivo de Talento con 3 vistas: \"Riesgo\", \"Oportunidad\", \"Operación\".",
                "Verificación de calidad de datos + plan de remediación."
            ],
            deliverable: [
                "Tablero publicado + guía de interpretación para líderes."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%201%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    },
    {
        number: 2,
        title: "Modelado Analítico: Predicción de Fuga y Potencial",
        description: "Desarrolla habilidades de IA para impactar directamente en la gestión del talento.",
        aos: "zoom-in",
        duration: "600",
        delay: 150,
        modalData: {
            moduleLabel: "MÓDULO II",
            title: "Modelado Analítico: Predicción de Fuga y Potencial",
            duration: "21 horas (3 horas diarias)",
            learningObjectives: [
                "Formular problemas de clasificación/regresión en RR.HH. (riesgo de salida, probabilidad de éxito en rol, tiempo para cubrir vacantes).",
                "Diseñar pipelines: feature store, división temporal, validación, métricas de costo/beneficio.",
                "Controlar riesgos éticos: sesgos, explicabilidad, pruebas de equidad por subpoblaciones."
            ],
            keyContents: [
                "Modelos base: Logísticos, Árboles/GBM, y shape/explicabilidad para RR.HH.",
                "Modelado uplift simple para priorizar intervenciones (quién cambia con la acción).",
                "Simulación de escenarios (presupuesto limitado, priorización top-N)."
            ],
            practice: [
                "Entrenar un modelo de deserción con corte trimestral y matriz de costos.",
                "Generar una lista accionable: \"Top 50 empleados en riesgo + razones explicables\"."
            ],
            deliverable: [
                "Artefacto del modelo (reporte técnico + model card) y playbook de intervención por segmento."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%202%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    },
    {
        number: 3,
        title: "Storytelling e Influencia con Datos para Ejecutivos",
        description: "El liderazgo del siglo XXI demanda storytelling estratégico y liderazgo adaptativo ante la disrupción de la inteligencia artificial.",
        aos: "fade-left",
        duration: "800",
        delay: 300,
        modalData: {
            moduleLabel: "MÓDULO III",
            title: "Storytelling e Influencia con Datos para Ejecutivos",
            duration: "9 horas (3 horas diarias)",
            learningObjectives: [
                "Diseñar una narrativa que conecte KPI → riesgo → modelo → ROI esperado.",
                "Preparar materiales ejecutivos (1-pager, deck de 10 hojas, demo en vivo).",
                "Practicar presentación y manejo de objeciones (finanzas, legal, operaciones)."
            ],
            keyContents: [
                "Estructuras narrativas (problema → evidencia → opciones → recomendación → plan).",
                "Storytelling visual del pipeline: del dashboard a la \"lista accionable\" y el impacto económico.",
                "Taller de role-play (comité directivo): decisiones bajo incertidumbre."
            ],
            practice: [
                "Ensayo grabado de la presentación final con retroalimentación basada en rúbrica (claridad, precisión, baja fricción cognitiva)"
            ],
            deliverable: [
                "Presentación ejecutiva aprobable + anexo técnico para datos/TI."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%203%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    }
]

const benefits = [
    {
        icon: HiBriefcase,
        title: "Casos Reales y Proyectos Prácticos:",
        description: "Trabaja con datasets actuales y problemas reales de RR.HH.",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        icon: FaProjectDiagram,
        title: "Proyecto Final",
        description: "Con aplicación directa a tu organización.",
        aos: "fade-up",
        duration: "800",
        delay: 100
    },
    {
        icon: MdOutlineSettingsSuggest,
        title: "Acceso a herramientas",
        description: "Acceso a las herramientas más demandadas del mercado (Power BI, Machine Learning, IA Generativa).",
        aos: "fade-up",
        duration: "1000",
        delay: 200
    }
]

const Exclusive = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedModule, setSelectedModule] = useState(null)

    const handleOpenModal = (modalData) => {
        setSelectedModule(modalData)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedModule(null)
    }

    return (
        <section
            className="relative overflow-hidden px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 py-20 md:py-28 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221121/vectux-academy/assets/corse-1.jpg')" }}
        >
            {/* Top Gradient */}
            <div className="absolute -top-20 -left-20 w-[140%] h-[25%] z-10 bg-gradient-to-b blur-2xl from-[#343ec2] to-[#343ec2]" />
            <div className="absolute inset-0 bg-skyBlue/80" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            <div className="max-w-[1200px] mx-auto relative z-20">
                {/* Objective Section */}
                <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16 mb-20">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-4 min-[860px]:w-[55%]">
                        <p data-aos="fade-up" className="text-[#4cc9f0] font-Manrope font-semibold text-[14px] uppercase tracking-[2px]">
                            {ObjectiveData.subtitle}
                        </p>
                        <h2 data-aos="fade-up" data-aos-delay="100" className="text-[#fa0] font-bold text-[32px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px]">
                            {ObjectiveData.title}
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="200" className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]">
                            {ObjectiveData.text}
                        </p>
                        <div data-aos="fade-up" data-aos-delay="300" className="mt-4">
                            <button className="bg-skyBlue cursor-pointer w-max font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none">
                                Ver Programas
                            </button>
                        </div>
                    </div>

                    {/* Image */}
                    <div data-aos="zoom-in" data-aos-delay="200" className="min-[860px]:w-[45%]">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#4cc9f0] via-[#f72585] to-[#4895ef] rounded-tl-none rounded-tr-[16px] rounded-bl-[16px] rounded-br-none blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md animate-pulse"></div>
                            <Image
                                alt="Diploma Programs"
                                width={550}
                                height={400}
                                src={ObjectiveData.image}
                                unoptimized
                                className="relative rounded-tl-none rounded-tr-[40px] rounded-bl-[40px] rounded-br-none w-full transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#4cc9f0]/50"
                            />
                        </div>
                    </div>
                </div>

                {/* Designed For Section */}
                <div className="mb-20">
                    <h3 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-3xl lg:text-[36px] text-center mb-12">
                        {design.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {design.cards.map((card, index) => {
                            const IconComponent = card.icon
                            return (
                                <div
                                    key={index}
                                    data-aos={card.aos}
                                    data-aos-duration={card.duration}
                                    data-aos-delay={card.delay}
                                    className="flex flex-col items-center text-center p-8 rounded-[12px] border border-[#e3e3e349] bg-black/30 backdrop-blur-sm hover:bg-black/40 transition-all duration-300 group"
                                >
                                    <IconComponent className="text-[#4cc9f0] text-[60px] mb-5 group-hover:scale-110 transition-transform duration-300" />
                                    <p className="text-white font-Manrope font-semibold text-[16px] leading-[26px]">
                                        {card.text}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Modules Section */}
                <div className="text-center mb-16">
                    <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] mb-4">
                        Diplomado Ejecutivo en People Analytics e Inteligencia Artificial Aplicada a RR.HH.
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-[#4cc9f0] font-Manrope font-semibold text-[18px] md:text-[20px]">
                        Nuestro programa consta de 3 módulos independientes:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {modules.map((module, index) => (
                        <div
                            key={index}
                            data-aos={module.aos}
                            data-aos-duration={module.duration}
                            data-aos-delay={module.delay}
                            className="relative p-6 rounded-[16px] border border-[#e3e3e330] bg-black/30 backdrop-blur-sm hover:border-[#4cc9f0] transition-all duration-300 group"
                        >
                            {/* Module Number Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[#4cc9f0] font-Manrope text-[14px] uppercase tracking-[2px]">Módulo</span>
                                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#4cc9f0] text-[#0a0a1a] font-bold text-[18px]">
                                    {module.number}
                                </span>
                            </div>

                            {/* Content */}
                            <h3 className="text-white font-bold text-[20px] leading-[28px] mb-3 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {module.title}
                            </h3>
                            <p className="text-white/70 font-Manrope text-[15px] leading-[24px] mb-5">
                                {module.description}
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => handleOpenModal(module.modalData)}
                                className="bg-transparent border border-[#4cc9f0] text-[#4cc9f0] hover:bg-[#4cc9f0] hover:text-[#0a0a1a] font-Manrope font-semibold text-[13px] uppercase tracking-[1px] px-6 py-3 rounded-full transition-all duration-300 cursor-pointer"
                            >
                                Más Información
                            </button>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="mt-20">
                    <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16">
                        Beneficios Diferenciales
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => {
                            const IconComponent = benefit.icon
                            return (
                                <div
                                    key={index}
                                    data-aos={benefit.aos}
                                    data-aos-duration={benefit.duration}
                                    data-aos-delay={benefit.delay}
                                    className="flex items-start gap-4 pl-6 border-l-4 border-[#4cc9f0] group hover:border-white transition-all duration-300"
                                >
                                    <IconComponent className="text-[#4cc9f0] text-[62px] mt-1 group-hover:scale-110 transition-transform duration-300" />
                                    <div className="text-left">
                                        <h3 className="text-white font-bold text-[20px] leading-[28px] mb-2 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-white/70 font-Manrope text-[15px] leading-[24px]">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                moduleData={selectedModule}
            />
        </section>
    )
}

export default Exclusive

"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/Components/LayoutWrapper/Modal'

const programs = [
    {
        title: "Análisis de Datos para Finanzas",
        description: "Desarrolla habilidades clave en Power BI y analítica descriptiva para interpretar KPIs financieros, márgenes, rentabilidad, flujo de caja y más. Aprende a contar historias con datos y crear dashboards para tomadores de decisiones.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221139/vectux-academy/assets/financial-1.jpg",
        buttonText: "Más Información",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%201%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    },
    {
        title: "Modelos Predictivos con IA para Finanzas",
        description: "Integra técnicas de machine learning para predecir ingresos, costos, fraude o comportamiento del cliente. Aprende sobre los algoritmos más poderosos para detección de anomalías, segmentación financiera y pronósticos automatizados.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221164/vectux-academy/assets/financial-2.jpg",
        buttonText: "Más Información",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%202%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    },
    {
        title: "Transforma tu liderazgo para el futuro digital.",
        description: [
            "El liderazgo del siglo XXI demanda más que habilidades operativas: requiere ",
            { text: "pensamiento crítico", bold: true },
            ", ",
            { text: "storytelling estratégico", bold: true },
            ", y ",
            { text: "liderazgo adaptativo", bold: true },
            " ante la disrupción de la inteligencia artificial."
        ],
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221171/vectux-academy/assets/financial-3.jpg",
        buttonText: "Más Información",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%203%20|%20People%20Analytics",
            ctaText: "Inscríbete ahora"
        }
    }
]

const renderDescription = (description) => {
    if (typeof description === 'string') {
        return description
    }
    return description.map((item, index) => {
        if (typeof item === 'string') {
            return <span key={index}>{item}</span>
        }
        if (item.bold) {
            return <strong key={index}>{item.text}</strong>
        }
        return <span key={index}>{item.text}</span>
    })
}

const Financial = () => {
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
            className="relative overflow-hidden px-8 sm:px-14 py-20 md:py-28 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221174/vectux-academy/assets/financial-bg.jpg')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Top Gradient */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <div className="max-w-[1200px] mx-auto relative z-20">
                {/* Title */}
                <h2
                    data-aos="fade-up"
                    className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16"
                >
                    Programas en Analítica Financiera
                </h2>

                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            data-aos={program.aos}
                            data-aos-duration={program.duration}
                            data-aos-delay={program.delay}
                            className="relative rounded-[16px] border border-[#e3e3e330] bg-black/30 backdrop-blur-sm hover:border-[#4cc9f0] transition-all duration-300 group flex flex-col overflow-hidden"
                        >
                            {/* Card Image */}
                            <div className="relative h-[200px] overflow-hidden">
                                <Image
                                    src={program.image}
                                    alt={program.title}
                                    fill
                                    unoptimized
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-white font-bold text-[20px] leading-[28px] mb-4 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-white/70 font-Manrope text-[15px] leading-[24px] mb-6 flex-grow group-hover:text-[#fff]">
                                    {renderDescription(program.description)}
                                </p>

                                {/* Button */}
                                <button
                                    onClick={() => handleOpenModal(program.modalData)}
                                    className="bg-transparent border border-[#4cc9f0] text-[#4cc9f0] hover:bg-[#4cc9f0] hover:text-[#0a0a1a] font-Manrope font-semibold text-[13px] uppercase tracking-[1px] px-6 py-3 rounded-full transition-all duration-300 w-max cursor-pointer"
                                >
                                    {program.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Gradient - blends with next section */}
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

export default Financial

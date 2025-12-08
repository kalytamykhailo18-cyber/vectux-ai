"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Modal from '@/Components/LayoutWrapper/Modal'

const programs = [
    {
        title: "Data Analysis for Finance",
        description: "Develop key skills in Power BI and descriptive analytics to interpret financial KPIs, margins, profitability, cash flow, and more. Learn to tell stories with data and create dashboards for decision-makers.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221139/vectux-academy/assets/financial-1.jpg",
        buttonText: "More Info",
        aos: "fade-right",
        duration: "800",
        delay: 0,
        modalData: {
            moduleLabel: "MODULE I",
            title: "Descriptive Talent Analytics and Decision Making with Dashboards",
            duration: "18 hours (3 hours daily)",
            learningObjectives: [
                "Define HR KPIs linked to decisions (turnover, absenteeism, vacancy coverage, performance, DEI, internal mobility).",
                "Build executive dashboards with alerts, thresholds and correct interpretation (avoid aggregation biases).",
                "Establish minimum data contract for People Analytics (data dictionary, quality, traceability and ethics)."
            ],
            keyContents: [
                "People data model (employee journey: attraction → onboarding → development → exit).",
                "Good visualization practices (Power BI or similar), segmentation by groups and cohorts.",
                "Executive reading: how to go from an indicator to a decision."
            ],
            practice: [
                "Building an Executive Talent Dashboard with 3 views: \"Risk\", \"Opportunity\", \"Operation\".",
                "Data quality check + remediation plan."
            ],
            deliverable: [
                "Board published + interpretation guide for leaders."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%201%20|%20People%20Analytics",
            ctaText: "Sign up now"
        }
    },
    {
        title: "Predictive Models with AI for Finance",
        description: "It integrates machine learning techniques to predict revenue, costs, fraud, or customer behavior. Learn about the most powerful algorithms for anomaly detection, financial segmentation, and automated forecasting.",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221164/vectux-academy/assets/financial-2.jpg",
        buttonText: "More Info",
        aos: "zoom-in",
        duration: "600",
        delay: 150,
        modalData: {
            moduleLabel: "MODULE II",
            title: "Analytical Modeling: Leakage and Potential Prediction",
            duration: "21 hours (3 hours daily)",
            learningObjectives: [
                "Formulate classification/regression problems in HR (risk of leaving, probability of success in role, time to fill vacancies).",
                "Design pipelines: feature store, time splitting, validation, cost/benefit metrics.",
                "Controlling ethical risks: biases, explainability, fairness tests by subpopulations."
            ],
            keyContents: [
                "Base models: Logistics, Trees/GBM, and shape/explainability for HR.",
                "Simple uplift modeling to prioritize interventions (who changes with the action).",
                "Scenario simulation (limited budget, top-N prioritization)."
            ],
            practice: [
                "Train an attrition model with quarterly cut-off and cost matrix.",
                "Generate an actionable list: \"Top 50 employees at risk + explainable reasons\"."
            ],
            deliverable: [
                "Model artifact (technical report + model card) and intervention playbook by segment."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%202%20|%20People%20Analytics",
            ctaText: "Sign up now"
        }
    },
    {
        title: "Transform your leadership for the digital future.",
        description: [
            "21st-century leadership demands more than operational skills: it requires ",
            { text: "critical thinking", bold: true },
            ", ",
            { text: "strategic storytelling", bold: true },
            ", and ",
            { text: "adaptive leadership", bold: true },
            " in the face of disruption from artificial intelligence."
        ],
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221171/vectux-academy/assets/financial-3.jpg",
        buttonText: "More Info",
        aos: "fade-left",
        duration: "800",
        delay: 300,
        modalData: {
            moduleLabel: "MODULE III",
            title: "Storytelling and Influence with Data for Executives",
            duration: "9 hours (3 hours daily)",
            learningObjectives: [
                "Design a narrative that connects KPI → risk → model → expected ROI.",
                "Prepare executive materials (1-pager, 10-sheet deck, live demo).",
                "Practice presenting and handling objections (finance, legal, operations)."
            ],
            keyContents: [
                "Narrative structures (problem → evidence → options → recommendation → plan).",
                "Visual storytelling of the pipeline: from the dashboard to the \"actionable list\" and the economic impact.",
                "Role-play workshop (steering committee): decisions under uncertainty."
            ],
            practice: [
                "Recorded rehearsal of the final presentation with rubric-based feedback (clarity, accuracy, low cognitive friction)"
            ],
            deliverable: [
                "Approvable executive presentation + technical annex for data/IT."
            ],
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Curso%203%20|%20People%20Analytics",
            ctaText: "Sign up now"
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
                    Programs in Financial Analytics
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

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
    title: "Objective of Our Diploma Programs",
    subtitle: "A direct boost to your professional development",
    text: "Acquire highly sought-after skills that will strengthen your profile as a strategic talent leader, with abilities applicable from the first month.",
    image: "/assets/cursos-2.jpg"
}

const design = {
    title: "Our programs are designed to:",
    cards: [
        {
            icon: PiUsersThreeFill,
            text: "HR and Talent Directors and Managers",
            aos: "fade-right",
            duration: "800",
            delay: 0
        },
        {
            icon: TbChartHistogram,
            text: "Human Resources teams that want to evolve towards People Analytics",
            aos: "zoom-in",
            duration: "600",
            delay: 100
        },
        {
            icon: BsRobot,
            text: "Leaders who are betting on artificial intelligence to manage the talent of the future",
            aos: "fade-left",
            duration: "800",
            delay: 200
        }
    ]
}

const modules = [
    {
        number: 1,
        title: "Descriptive Talent Analytics and Decision Making with Dashboards",
        description: "Take talent decisions to the next level with data and analytics.",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%201%20|%20People%20Analytics",
            ctaText: "Sign up now"
        }
    },
    {
        number: 2,
        title: "Analytical Modeling: Leakage and Potential Prediction",
        description: "Develop AI skills to directly impact talent management.",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%202%20|%20People%20Analytics",
            ctaText: "Sign up now"
        }
    },
    {
        number: 3,
        title: "Storytelling and Influence with Data for Executives",
        description: "21st-century leadership demands strategic storytelling and adaptive leadership in the face of disruption from artificial intelligence.",
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
            ctaLink: "mailto:mpaez@vectuxanalytics.com?subject=Información%20Módulo%203%20|%20People%20Analytics",
            ctaText: "Sign up now"
        }
    }
]

const benefits = [
    {
        icon: HiBriefcase,
        title: "Real Cases and Practical Projects:",
        description: "It works with current datasets and real HR problems.",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        icon: FaProjectDiagram,
        title: "Final Project",
        description: "With direct application to your organization.",
        aos: "fade-up",
        duration: "800",
        delay: 100
    },
    {
        icon: MdOutlineSettingsSuggest,
        title: "Access to tools",
        description: "Access to the most in-demand tools on the market (Power BI, Machine Learning, Generative AI).",
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
            style={{ backgroundImage: "url('/assets/corse-1.jpg')" }}
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
                                View Programs
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
                        Executive Diploma in People Analytics and Artificial Intelligence Applied to HR
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-[#4cc9f0] font-Manrope font-semibold text-[18px] md:text-[20px]">
                        Our program consists of 3 independent modules:
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
                                <span className="text-[#4cc9f0] font-Manrope text-[14px] uppercase tracking-[2px]">Module</span>
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
                                More Info
                            </button>
                        </div>
                    ))}
                </div>

                {/* Benefits Section */}
                <div className="mt-20">
                    <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16">
                        Differential Benefits
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

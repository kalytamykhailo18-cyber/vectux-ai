"use client"
import React from 'react'
import { HiBriefcase } from "react-icons/hi2"
import { FaProjectDiagram } from "react-icons/fa"
import { MdOutlineSettingsSuggest } from "react-icons/md"

const benefits = [
    {
        icon: HiBriefcase,
        title: "Real Cases and Practical Projects:",
        description: "It works with current datasets and real HR problems."
    },
    {
        icon: FaProjectDiagram,
        title: "Final Project",
        description: "With direct application to your organization."
    },
    {
        icon: MdOutlineSettingsSuggest,
        title: "Access to tools",
        description: "Access to the most in-demand tools on the market (Power BI, Machine Learning, Generative AI)."
    }
]

const Benefits = () => {
    return (
        <section className="relative px-8 sm:px-14 pb-20 md:pb-28">
            <div className="max-w-[1200px] mx-auto">
                {/* Title */}
                <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16">
                    Differential Benefits
                </h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const IconComponent = benefit.icon
                        return (
                            <div
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
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
        </section>
    )
}

export default Benefits

"use client"
import React from 'react'
import { FaCheckCircle } from "react-icons/fa"

const sections = [
    {
        title: "Unique Methodology – Learning by Doing",
        aos: "fade-right",
        duration: "800",
        delay: 0,
        items: [
            { text: "100% Online with Live Sessions: Flexible learning, without sacrificing interaction.", aos: "fade-up", duration: "600", delay: 100 },
            { text: "Real Cases and Practical Projects: Work with current datasets and real HR problems.", aos: "fade-right", duration: "800", delay: 200 },
            { text: "Direct Mentoring from Experts: Professors with international experience in leading companies.", aos: "zoom-in", duration: "600", delay: 300 },
            { text: "Executive Networking: Connect with leaders and professionals from across the region.", aos: "fade-left", duration: "800", delay: 400 }
        ]
    },
    {
        title: "Key Benefits",
        aos: "fade-left",
        duration: "800",
        delay: 150,
        items: [
            { text: "Applied learning from the first class", aos: "fade-up", duration: "600", delay: 100 },
            { text: "Access to the most in-demand tools on the market (Power BI, Machine Learning, Generative AI)", aos: "fade-right", duration: "800", delay: 200 },
            { text: "Final project with direct application to your organization", aos: "zoom-in", duration: "600", delay: 300 },
            { text: "Internationally recognized certification", aos: "fade-left", duration: "800", delay: 400 },
            { text: "Flexible working hours for executives and leaders", aos: "fade-up", duration: "1000", delay: 500 }
        ]
    }
]

const Keys = () => {
    return (
        <section className="relative overflow-hidden px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            {/* Bottom Gradient - blends with WhyUs */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <div className="max-w-[1200px] mx-auto relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                    {sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} data-aos={section.aos} data-aos-duration={section.duration} data-aos-delay={section.delay}>
                            <h2 className="text-[#fa0] font-bold text-[28px] md:text-3xl lg:text-[36px] leading-[40px] md:leading-[46px] mb-8">
                                {section.title}
                            </h2>
                            <ul className="space-y-4">
                                {section.items.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        data-aos={item.aos}
                                        data-aos-duration={item.duration}
                                        data-aos-delay={item.delay}
                                        className="flex items-start gap-3 group"
                                    >
                                        <FaCheckCircle className="text-[#4cc9f0] text-[20px] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                                        <span className="text-white font-Manrope text-[15px] sm:text-[16px] leading-[26px]">
                                            {item.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Keys

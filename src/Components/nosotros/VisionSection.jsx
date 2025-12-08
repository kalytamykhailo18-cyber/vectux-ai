"use client"
import React from 'react'
import Image from 'next/image'

const visionData = {
    title: "Vision.",
    description: [
        "To be the leading provider of ",
        { text: "accessible, ongoing", bold: true },
        " business analytics training for companies and professionals, offering practical tools in advanced analytics, AI, and ",
        { text: "digital transformation", bold: true },
        " that translate ",
        { text: "deep data insights into actionable business", bold: true },
        " solutions. We aspire to lead the creation of a ",
        { text: "global network of companies and skilled talent,", bold: true },
        " fostering ",
        { text: "strategic innovation", bold: true },
        " and ",
        { text: "sustainable growth.", bold: true },
        " Our goal is to facilitate access to training so that any organization, regardless of size or ",
        { text: "analytical maturity level,", bold: true },
        " can adapt and thrive in a competitive and digitalized environment by unlocking the ",
        { text: "hidden value of its data.", bold: true }
    ],
    image: "/assets/course-1.jpg"
}

const renderText = (textArray) => {
    return textArray.map((item, index) => {
        if (typeof item === 'string') {
            return <span key={index}>{item}</span>
        }
        if (item.bold) {
            return <strong key={index}>{item.text}</strong>
        }
        return <span key={index}>{item.text}</span>
    })
}

const VisionSection = () => {
    return (
        <section id="vision" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col min-[860px]:flex-row-reverse items-center gap-10 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-4 min-[860px]:w-[55%]">
                        <h2
                            data-aos="fade-up"
                            className="text-[#fa0] font-bold text-[32px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px]"
                        >
                            {visionData.title}
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]"
                        >
                            {renderText(visionData.description)}
                        </p>
                    </div>

                    {/* Image */}
                    <div data-aos="zoom-in" data-aos-delay="200" className="min-[860px]:w-[45%]">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#4cc9f0] via-[#f72585] to-[#4895ef] rounded-[16px] blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md animate-pulse"></div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px]">
                                <Image
                                    alt="Vision"
                                    fill
                                    src={visionData.image}
                                    unoptimized
                                    className="object-cover transition-all duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionSection

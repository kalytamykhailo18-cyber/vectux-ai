"use client"
import React from 'react'
import Image from 'next/image'

const reasons = [
    {
        image: "/assets/why-2.jpg",
        title: "World-Class Faculty",
        description: "with experts certified by MIT, Kellogg, Microsoft",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        image: "/assets/why-3.jpg",
        title: "Training with immediate impact",
        description: "70% practical, 30% theoretical foundations",
        aos: "zoom-in",
        duration: "600",
        delay: 100
    },
    {
        image: "/assets/why-4.jpg",
        title: "Direct focus on business results in human capital",
        description: "",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        image: "/assets/why-1.jpg",
        title: "Active student community and access to job opportunities",
        description: "",
        aos: "fade-left",
        duration: "800",
        delay: 300
    }
]

const WhyUs = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#02c]">
            <div className="absolute -top-30 -left-20 w-[140%] h-[23%] sm:h-[30%] z-10 bg-gradient-to-b blur-3xl from-[#346ea2] to-[#8d4aed]" />
            <div className="max-w-[1200px] mx-auto">
                {/* Title */}
                <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16">
                    Why Choose Us?
                </h2>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {reasons.map((reason, index) => (
                        <div
                            key={index}
                            data-aos={reason.aos}
                            data-aos-duration={reason.duration}
                            data-aos-delay={reason.delay}
                            className="flex flex-col text-center rounded-tl-none rounded-tr-none rounded-bl-[36px] rounded-br-[36px] border border-[#e3e3e330] bg-transparent hover:bg-[#4cc9f0] hover:border-[#4cc9f0] transition-all duration-300 group overflow-hidden"
                        >
                            <div className="w-full aspect-[4/3] overflow-hidden">
                                <Image
                                    src={reason.image}
                                    alt={reason.title}
                                    width={300}
                                    height={225}
                                    unoptimized
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="text-white font-bold text-[18px] leading-[26px] mb-2 group-hover:text-[#1a1a2e] transition-colors duration-300">
                                    {reason.title}
                                </h3>
                                {reason.description && (
                                    <p className="text-white/70 font-Manrope text-[14px] leading-[22px] group-hover:text-[#1a1a2e]/80 transition-colors duration-300">
                                        {reason.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs

"use client"
import React from 'react'
import Image from 'next/image'
import { PiUsersThreeFill } from "react-icons/pi"
import { TbChartHistogram } from "react-icons/tb"
import { BsRobot } from "react-icons/bs"

const design={
    title: "Our programs are designed to:",
    cards: [
        {
            icon: PiUsersThreeFill,
            text: "HR and Talent Directors and Managers"
        },
        {
            icon: TbChartHistogram,
            text: "Human Resources teams that want to evolve towards People Analytics"
        },
        {
            icon: BsRobot,
            text: "Leaders who are betting on artificial intelligence to manage the talent of the future"
        }
    ]
}

const ObjectiveData = {
    title: "Objective of Our Diploma Programs",
    subtitle: "A direct boost to your professional development",
    text: "Acquire highly sought-after skills that will strengthen your profile as a strategic talent leader, with abilities applicable from the first month.",
    image: "/assets/cursos-2.jpg"
}

const Objective = () => {
    return (
        <section className="relative overflow-visible px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 py-20 md:py-28 flex justify-center items-center" style={{ backgroundImage: "linear-gradient(90deg, rgba(72,149,239,0.85), rgba(52,62,194,0.85), rgba(141,74,237,0.85))"}}>
            {/* Top Gradient Blur - reverse of hero's bottom gradient */}
            <div className="absolute top-0 left-0 w-full h-[150px] z-10 bg-gradient-to-b from-[#5677F6]" />

            <div className="max-w-[1200px] w-full relative z-20">
                <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16">
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
                <div className="mt-20">
                    <h3 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-3xl lg:text-[36px] text-center mb-12">
                        {design.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {design.cards.map((card, index) => {
                            const IconComponent = card.icon
                            return (
                                <div
                                    key={index}
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 100}
                                    className="flex flex-col items-center text-center p-8 rounded-[12px] border border-[#e3e3e349] bg-[#444d5a19] hover:bg-[#444d5a30] transition-all duration-300 group"
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
            </div>
        </section>
    )
}

export default Objective

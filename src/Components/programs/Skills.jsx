"use client"
import React from 'react'
import { FaUsersGear } from "react-icons/fa6";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LuChartNoAxesCombined } from "react-icons/lu";

const SkillsData = [
    {
        id: 1,
        icon: FaUsersGear,
        title: "Executive or Managerial Level",
        description: "Advanced Analytics Leadership Program: Workshops focused on strategic leadership and digital transformation.",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        icon: LuChartNoAxesCombined,
        title: "Intermediate or Departmental Management Level",
        description: "Certification in Data Analysis for Managers: Improving data analysis skills for decision making.",
        aos: "zoom-in",
        duration: "600",
        delay: 150
    },
    {
        id: 3,
        icon: TbAdjustmentsSearch,
        title: "Level of Operational or Base Employees",
        description: "Fundamentals of Data Analysis: Introduction to basic concepts and practical applications.",
        aos: "fade-left",
        duration: "800",
        delay: 300
    }
];

const Skills = () => {
    return (
        <section className="flex justify-center items-center px-7 md:px-10 lg:px-16 py-20 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            <div className="max-w-[1200px]">
                <div>
                    <div className="flex flex-col justify-center items-center gap-3 text-center">
                        <h1 data-aos="zoom-in" data-aos-duration="800" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-[48px] leading-[56px]">
                            Levels
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-[60%]">
                            Our artificial intelligence and advanced analytics courses for businesses are focused on three different levels of the organization:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 px-2 min-[860px]:px-6">
                        {SkillsData.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={skill.id}
                                    data-aos={skill.aos}
                                    data-aos-duration={skill.duration}
                                    data-aos-delay={skill.delay}
                                    className="rounded-[14px] group border border-white/30"
                                >
                                    <div className="px-9 py-10 flex justify-between flex-col gap-7">
                                        <div className="flex items-center group-hover:scale-120 cursor-pointer transition-all duration-700 ease-out w-max scale-100">
                                            <IconComponent size={70} className="text-white sm:w-[80px]" />
                                        </div>
                                        <div>
                                            <h1 className="text-[#ebebeb] font-bold mb-3 text-[20.5px] leading-[28px] sm:text-[24px] sm:leading-[32px] tracking-[0.4px]">
                                                {skill.title}
                                            </h1>
                                            <p className="text-[#ebebeb] font-Manrope text-[15px] sm:text-[15.5px] tracking-[0.5px] font-[500] leading-[22px]">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

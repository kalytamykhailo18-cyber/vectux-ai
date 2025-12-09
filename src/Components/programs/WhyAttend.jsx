"use client"
import Image from "next/image";
import { GiBrain, GiArtificialIntelligence, GiBookmarklet, GiPuzzle, GiLightBulb, GiSpeaker } from 'react-icons/gi';
import { PiListPlus, PiUsersThree } from "react-icons/pi";

const SkillsData = [
    {
        id: 1,
        icon: GiArtificialIntelligence,
        title: "Artificial Intelligence & Machine Learning",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        id: 2,
        icon: GiBrain,
        title: "Generative Artificial Intelligence",
        aos: "fade-right",
        duration: "800",
        delay: 100
    },
    {
        id: 3,
        icon: PiListPlus,
        title: "Advanced Data Analysis",
        aos: "zoom-in",
        duration: "600",
        delay: 150
    },
    {
        id: 4,
        icon: GiBookmarklet,
        title: "Storytelling",
        aos: "fade-left",
        duration: "800",
        delay: 200
    },
    {
        id: 5,
        icon: GiPuzzle,
        title: "Problem Solving",
        aos: "fade-up",
        duration: "1000",
        delay: 250
    },
    {
        id: 6,
        icon: PiUsersThree,
        title: "Creative Thinking",
        aos: "zoom-in",
        duration: "600",
        delay: 300
    },
    {
        id: 7,
        icon: GiLightBulb,
        title: "Strategic",
        aos: "fade-right",
        duration: "800",
        delay: 350
    },
    {
        id: 8,
        icon: GiSpeaker,
        title: "Effective Communication",
        aos: "fade-up",
        duration: "1000",
        delay: 400
    }
];

export default function WhyAttend() {
    return (
        <section className="bg-gradient-to-b from-[#4895ef] via-[#5a6def] to-[#8d4aed] px-8 pt-4 sm:px-7 md:px-10 min-[860px]:!px-10 lg:!px-14 sm:pt-10 pb-24 sm:pb-16 md:pb-24 flex justify-center items-center">
            <div className="max-w-[1200px]">
                <div className="flex flex-col min-[860px]:flex-row">
                    <div className="flex flex-col justify-center gap-6 md:w-[60%] lg:w-[65%]">
                        <h1 data-aos="fade-right" data-aos-duration="800" className="text-[#fa0] font-bold text-[38px] md:text-5xl lg:text-[43px] leading-[45px] sm:leading-[56px]">
                            We develop
                            <br />
                            <span className="">analytical skills</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-full min-[860px]:!w-[80%]">
                            Our programs are custom-developed and focused on enhancing the "soft" and "hard" analytical skills of your employees, which are necessary to keep your business at the forefront in the age of Artificial Intelligence.
                        </p>
                        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600" className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-skyBlue cursor-pointer w-max font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none">
                                More information
                            </button>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000" className="flex justify-end pt-12 md:pt-0 lg:pr-2 min-[860px]:w-[40%] lg:!w-[35%]">
                        <div className="relative group cursor-pointer">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#4cc9f0] via-[#f72585] to-[#4895ef] rounded-[16px] blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500 group-hover:blur-md animate-pulse"></div>
                            <Image
                                alt="services"
                                width={750}
                                height={360}
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221176/vectux-academy/assets/frame40.jpg"
                                unoptimized
                                className="relative  rounded-tl-none rounded-tr-[72px] rounded-bl-[72px] rounded-br-none transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-[#4cc9f0]/50"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
                        {SkillsData.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={skill.id}
                                    data-aos={skill.aos}
                                    data-aos-duration={skill.duration}
                                    data-aos-delay={skill.delay}
                                    className="flex flex-col gap-2 justify-center items-center py-9 px-8 rounded-[8px] border border-[#e3e3e349] bg-[#444d5a19] group"
                                >
                                    <IconComponent
                                        size={45}
                                        className={`text-white group-hover:scale-125 group-hover:rotate-12 cursor-pointer transition-all duration-700 ease-out icon-float icon-float-delay-${skill.id}`}
                                    />
                                    <h3 className="font-Manrope text-center font-semibold text-[19px] tracking-[0.4px] text-white">
                                        {skill.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

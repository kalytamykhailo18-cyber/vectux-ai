"use client"
import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa"

const teamMembers = [
    {
        name: "Ana Mireya López",
        role: "CEO, MBA",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220965/vectux-academy/assets/Ana.png",
        linkedin: "https://www.linkedin.com/in/ana-mireya-lopez/",
        description: "+21 years of management experience in finance, strategic planning, business planning and advanced analytics in multinational companies such as Dell, Microsoft, Megablocks, General Electric, Thermo Fisher and Ericsson Telecom.",
        credentials: "Certificate in Artificial Intelligence Product Design and Development, MIT MBA, IPADE Business School.",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        name: "Gerzo Morales Gallardo",
        role: "CAO, Chief Analytics Officer & Founder",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221239/vectux-academy/assets/Gerzo.png",
        linkedin: "https://www.linkedin.com/in/gerzogallardo/",
        description: "Over 300 advanced analytics and artificial intelligence projects, former partner at MetricArts (acquired by EY), founder of the Data Science Institute. Advisor to the IMF and World Bank, professor of Business Intelligence, AI & Marketing Analytics at INCAE.",
        credentials: "Data Science & Big Data, MIT Master; Statistical Methods, University of La Rioja",
        aos: "fade-left",
        duration: "800",
        delay: 100
    },
    {
        name: "Horacio Sepúlveda",
        role: "Associate Director of Sales and Promotion IPADE Business School",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221266/vectux-academy/assets/horacio.png",
        linkedin: "https://www.linkedin.com/in/hsepulv/",
        description: "+30 years of professional experience and +24 years of management experience in transnational companies such as P & G, Unilever and América Móvil. Creator of multiple products and solutions for the telecommunications business and integrator of large work teams.",
        credentials: "Chemical Engineer from La Salle University, MBA with honors from the International University of La Rioja, and certified in the D-1 management development program by IPADE Business School.",
        aos: "fade-right",
        duration: "1000",
        delay: 200
    },
    {
        name: "Luis Fernando González Lara",
        role: "Master, collaborator",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221316/vectux-academy/assets/Luis.png",
        linkedin: "https://www.linkedin.com/in/luisfernandogonzalezlara/",
        description: "10+ years of experience in data analysis and business intelligence at companies such as AstraZeneca, Coca Cola and Femsa. Currently the Commercial Insights & Advanced Analytics Lead for Johnson & Johnson.",
        credentials: "Degree in Computer Engineering, specializing in Data Analysis and Business Intelligence, certified in Tableau and Power BI. Graduated from the National Polytechnic Institute (UPIICSA).",
        aos: "fade-left",
        duration: "800",
        delay: 300
    },
    {
        name: "Francisco Vargas Esparza",
        role: "Chief Data Officer, collaborator",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221219/vectux-academy/assets/Francisco.png",
        linkedin: "https://www.linkedin.com/in/fvargase/",
        description: "13+ years of experience in Business Intelligence, Advanced Analytics, and Data Science at companies such as Santander, Accenture, and Grupo Bimbo. Currently, he is Chief Data Officer at BimboNet, leading projects in Data Governance, BI, and cloud infrastructure.",
        credentials: "Graduated in actuarial science from Anahuac University, with a Diploma in Business Engineering from ITAM.",
        aos: "fade-right",
        duration: "1000",
        delay: 400
    }
]

const TeamSection = () => {
    return (
        <section id="team-vectux" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#343ec2]">
            <div className="max-w-[1200px] mx-auto">
                <h2
                    data-aos="fade-up"
                    className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16"
                >
                    Meet our team.
                </h2>

                <div className="space-y-12">
                    {teamMembers.map((member, index) => (
                        <a
                            key={index}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos={member.aos}
                            data-aos-duration={member.duration}
                            data-aos-delay={member.delay}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 p-16 rounded-[16px] border border-[#e3e3e330] bg-black/20 backdrop-blur-sm cursor-pointer hover:border-[#4cc9f0] hover:bg-black/30 transition-all duration-300 group`}
                        >
                            {/* Image */}
                            <div className="w-[200px] h-[200px] flex-shrink-0">
                                <div className="relative w-full h-full rounded-full overflow-hidden hover:border-1 border-transparent group-hover:border-[#4cc9f0] transition-all duration-300">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-white font-bold text-[24px] mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-[#4cc9f0] font-Manrope font-semibold text-[14px] uppercase tracking-[1px] mb-4">
                                    {member.role}
                                </p>
                                <p className="text-white/80 font-Manrope text-[15px] leading-[26px] mb-3">
                                    {member.description}
                                </p>
                                <p className="text-white font-Manrope font-semibold text-[14px] leading-[24px]">
                                    {member.credentials}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection

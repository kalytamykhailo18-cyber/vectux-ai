"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const missionData = {
    title: "Misión.",
    description: [
        "Nuestra misión es ",
        { text: "empoderar a empresas y profesionales para transformar sus datos en conocimiento a través de formación en analítica de negocios", bold: true },
        ". Proporcionamos capacitación avanzada en análisis de datos, ",
        { text: "inteligencia artificial y aprendizaje automático,", bold: true },
        " accesible para todos, independientemente de su formación en programación o ",
        { text: "TI", bold: true },
        ". Nos enfocamos en ofrecer programas prácticos y personalizados que impulsan la toma de decisiones estratégicas basadas en datos, fomentando una ",
        { text: "cultura empresarial basada en datos.", bold: true }
    ],
    images: ['https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220995/vectux-academy/assets/bg-2.webp', 'https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221110/vectux-academy/assets/blog-9.webp', 'https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221038/vectux-academy/assets/blog-11.webp']
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

const MissionSection = () => {
    const router = useRouter()

    return (
        <section id="mision" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-4 min-[860px]:w-[60%]">
                        <h2
                            data-aos="fade-up"
                            className="text-[#fa0] font-bold text-[32px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px]"
                        >
                            {missionData.title}
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]"
                        >
                            {renderText(missionData.description)}
                        </p>
                        <div data-aos="fade-up" data-aos-delay="200" className="mt-4">
                            <button
                                onClick={() => router.push('/contactanos')}
                                className="inline-block bg-skyBlue cursor-pointer font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div data-aos="zoom-in" data-aos-delay="200" className="min-[860px]:w-[40%] grid grid-cols-2 gap-4">
                        <div className="h-32 rounded-[16px] overflow-hidden group cursor-pointer">
                            <Image src={missionData.images[0]} alt="Mission" width={300} height={128} unoptimized className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="h-32 rounded-[16px] overflow-hidden group cursor-pointer">
                            <Image src={missionData.images[1]} alt="Mission" width={300} height={128} unoptimized className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="h-32 rounded-[16px] overflow-hidden col-span-2 group cursor-pointer">
                            <Image src={missionData.images[2]} alt="Mission" width={600} height={128} unoptimized className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionSection

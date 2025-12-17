"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const missionData = {
    title: "Misión.",
    description: "Ser la plataforma que impulsa la inserción de miles de personas en la era de la inteligencia artificial, empoderándolas con el conocimiento, las herramientas y la confianza para seguir siendo relevantes, influyentes y valiosas en una economía digital que cambia cada día.",
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765988624/testimonial-1-removebg-preview_gsnth0.png"
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
                            className="text-white font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[28px]"
                        >
                            {missionData.description}
                        </p>
                        <div data-aos="fade-up" data-aos-delay="200" className="mt-4">
                            <button
                                onClick={() => router.push('/contactanos')}
                                className="inline-block bg-[#fa0] cursor-pointer font-Manrope uppercase hover:bg-[#e80] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                            >
                                Contáctanos
                            </button>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div data-aos="zoom-in" data-aos-delay="200" className="min-[860px]:w-[40%]">
                        <Image src={missionData.image} alt="Mission" width={300} height={128} unoptimized className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MissionSection

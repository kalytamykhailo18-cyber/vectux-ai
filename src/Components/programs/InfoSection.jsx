"use client"
import { Quote } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const InfoSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className='relative overflow-hidden px-8 sm:px-20 py-20 sm:py-32 md:py-20 min-[860px]:py-32  bg-blue  flex justify-center items-center
                            bg-[url("https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226309/vectux-academy/raw/InfoBanner.webp")] bg-ontain bg-center bg-fixed'>
            <div className="absolute -top-20 -left-20 w-[140%] h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>

            <div className="absolute inset-0 bg-[#000000]  opacity-30
                  transition-all duration-500"></div>

            <div data-aos="zoom-out" className='flex flex-col justify-center items-center gap-5 relative z-50 py-10 text-center max-w-[1200px] '>

                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-[32px] leading-[38px] md:text-4xl  lg:text-[48px]  sm:leading-[56px] min-[860px]:w-[80%]">
                    Guía práctica de Prompts: Impulsa la toma de decisiones estratégicas empresariales con IA
                </h1>
                <div className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button
                        onClick={() => scrollToSection('#section-tickets')}
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        Descarga el artículo aquí
                    </button>

                </div>

            </div>

            <div className="absolute -bottom-20 -left-20 w-[140%] h-[30%] z-50 bg-gradient-to-b blur-2xl from-[#102136] to-[#102136]"></div>
        </section>
    )
}

export default InfoSection

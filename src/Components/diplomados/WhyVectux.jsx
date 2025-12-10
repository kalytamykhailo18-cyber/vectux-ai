"use client"
import React from 'react'
import Image from 'next/image'

const WhyVectux = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#8d4aed]">
            <div className="max-w-[1200px] mx-auto">
                {/* Block 1 - Why Vectux */}
                <div className="mb-20 p-8 md:p-12">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] leading-[45px] sm:leading-[58px] mb-8 text-center"
                    >
                        ¿Por qué elegir Vectux Academy?
                    </h2>

                    <div className="max-w-[900px] mx-auto space-y-4">
                        <p
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="100"
                            className="text-[#4cc9f0] font-Manrope font-[600] text-[18px] sm:text-[20px] leading-[30px] text-center"
                        >
                            No somos una escuela tradicional.
                        </p>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="800"
                            data-aos-delay="200"
                            className="text-[#4cc9f0] font-Manrope font-[600] text-[18px] sm:text-[20px] leading-[30px] text-center"
                        >
                            Somos una consultora tecnológica que forma líderes en Análisis de Datos.
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="300"
                            className="text-white/80 font-Manrope text-[16px] sm:text-[17px] font-[500] leading-[28px] text-center mt-6"
                        >
                            En Vectux diseñamos programas ejecutivos que nacen desde la práctica: conocemos el negocio, dominamos la tecnología y llevamos años resolviendo desafíos reales en banca, retail, salud, energía y servicios.
                        </p>
                    </div>
                </div>

                {/* Block 2 - Founder Quote with Image */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Image */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-tl-none rounded-tr-[72px] rounded-bl-[72px] rounded-br-none">
                            <Image
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765338332/Ana-1-fotor-20251209234527_einmgc.png"
                                alt="Ana Mireya López - Fundadora & CEO Vectux Academy"
                                width={600}
                                height={450}
                                unoptimized
                                className="w-full h-auto object-cover"
                                style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)' }}
                            />
                        </div>
                    </div>

                    {/* Quote */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="relative"
                    >

                        <div className="pl-6 p-8 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg">
                            <p className="text-white/90 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mb-4 italic">
                                Quiero ayudarte a pensar con claridad en la era digital y a tomar decisiones con visión.
                            </p>
                            <p className="text-white/90 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mb-6 italic">
                                Que tengas las herramientas de analítica, modelos predictivos con inteligencia artificial y storytelling para liderar, influir y adaptarte a un mundo que ya cambió.
                            </p>
                            <div className="mt-6">
                                <p className="text-[#4cc9f0] font-Manrope font-[700] text-[16px]">
                                    — Ana Mireya López
                                </p>
                                <p className="text-white/60 font-Manrope text-[14px] mt-1">
                                    Fundadora & CEO Vectux Academy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#8d4aed] blur-xl" />
        </section>
    )
}

export default WhyVectux

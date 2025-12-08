"use client"
import React from 'react'
import Image from 'next/image'

const MasterclassSection = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#6b3fa0] to-[#343ec2] overflow-hidden">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] leading-[45px] sm:leading-[58px]"
                    >
                        Próximas Masterclass Gratuitas
                    </h2>
                </div>

                {/* Image with Overlay */}
                <div
                    data-aos="zoom-in"
                    data-aos-duration="800"
                    data-aos-delay="200"
                    className="relative rounded-[24px] overflow-hidden"
                >
                    <div className="relative aspect-[16/7] w-full">
                        <Image
                            src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221271/vectux-academy/assets/insight.jpg"
                            alt="Próximas Masterclass"
                            fill
                            unoptimized
                            className="object-cover"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#343ec2]/80 via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8d4aed]/40 via-transparent to-[#4895ef]/40" />
                    </div>

                    {/* Floating Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            <div>
                                <p
                                    data-aos="fade-right"
                                    data-aos-duration="600"
                                    data-aos-delay="400"
                                    className="text-white/90 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[28px] max-w-[600px]"
                                >
                                    Participa en nuestras masterclass gratuitas y descubre cómo la analítica puede transformar tu carrera profesional.
                                </p>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="500">
                                <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[14px] tracking-[1.3px] px-8 py-3.5 rounded-md select-none whitespace-nowrap">
                                    Ver Calendario
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-1/4 -left-20 w-40 h-40 bg-[#4cc9f0]/20 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-[#8d4aed]/30 rounded-full blur-3xl" />
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#343ec2] blur-xl" />
        </section>
    )
}

export default MasterclassSection

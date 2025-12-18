"use client"
import Image from 'next/image'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const Letstalk = () => {
    return (
        <section className="relative overflow-hidden flex justify-center px-7.5 sm:px-10 min-[860px]:px-16">
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #3a50cc 0%, #3745c8 50%, #343ec2 100%)' }} />

            {/* Bottom Gradient - blend into Footer */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#343ec2_0%,_transparent_100%)]" />

            <div className="py-16 sm:py-20 pt-28 flex flex-col min-[860px]:flex-row max-w-[1200px] w-full justify-center relative z-20">
                <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-lg pr-4">
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-white text-[42px] font-bold leading-tight mb-5">
                        ¿Tu empresa está lista para la era de la Inteligencia Artificial?
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-white text-lg lg:text-xl leading-relaxed mb-6 border-l-4 border-[#00acf4] pl-4">
                        Transformar la cultura, los procesos y los resultados comienza cambiando la forma en que capacitamos a nuestros equipos.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="600" className="text-white text-sm lg:text-base font-bold">
                        Vectux Academy | Decisiones que transforman
                    </p>
                </div>
                <div className="hidden min-[860px]:block w-0.5 bg-[#3e7ef5] mx-4" />
                <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-md pl-4">
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-white text-2xl lg:text-3xl font-bold mb-1">
                        Hablemos.
                    </h2>
                    <div data-aos="fade-up" data-aos-delay="300" className="text-white mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold">
                            Mercedes Paez
                        </h3>
                        <p className="text-sm lg:text-base mb-1">
                            Directora de Crecimiento y Alianzas Estratégicas
                        </p>
                        <p className="text-sm lg:text-base mb-1">
                            mpaez@vectuxanalytics.com
                        </p>
                        <p className="text-sm lg:text-base flex items-center gap-2">
                            <FaWhatsapp className="bg-[#25D366] text-white w-7 h-7 p-[2px] rounded-[3px]" />
                            +52 56 1195-5405
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col p-1">
                        <Image
                            alt="QR Code"
                            width={128}
                            height={128}
                            src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221777/vectux-academy/assets/qrcode.jpg"
                            unoptimized
                            className="mb-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Letstalk

"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const lectureData = {
    left: {
        title: "Aprovecha tus años de experiencia y súmales el poder de los datos. En nuestro programa \"Learning by doing\", en sólo 3 meses construirás soluciones reales de Machine Learning (IA) y Dashboards aplicables a tu trabajo desde el primer mes.",
        button: "Ver planes de estudio",
        text: "🟢 Próximo inicio: 19 Febrero 2026 | 🎓 No requiere conocimientos previos de programación."
    },
    right: {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765527504/diploma-1_v6wdjl.jpg"
    }
}

const Lecture = () => {
    const router = useRouter()

    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#8d4aed]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16">
                    {/* Left - Text Content */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="flex flex-col justify-center gap-6 min-[860px]:w-[55%]"
                    >
                        <p className="text-white font-Manrope text-[17px] sm:text-[18px] font-[500] leading-[30px]">
                            {lectureData.left.title}
                        </p>

                        <button
                            onClick={() => router.push('#diplomados')}
                            className="inline-block w-max bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                        >
                            {lectureData.left.button}
                        </button>

                        <p className="text-[#6f6] text-center font-Manrope text-[14px] sm:text-[15px] font-[600]">
                            {lectureData.left.text}
                        </p>
                    </div>

                    {/* Right - Image with 2 sharp + 2 rounded corners */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="min-[860px]:w-[45%]"
                    >
                        <div className="relative overflow-hidden rounded-tl-none rounded-tr-[48px] rounded-bl-[48px] rounded-br-none group cursor-pointer">
                            <Image
                                src={lectureData.right.image}
                                alt="Lecture"
                                width={500}
                                height={350}
                                unoptimized
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#8d4aed] blur-xl" />
        </section>
    )
}

export default Lecture

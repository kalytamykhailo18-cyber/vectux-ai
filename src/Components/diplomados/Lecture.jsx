"use client"
import React from 'react'
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
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${lectureData.right.image})` }}
        >
            {/* Color Overlay - Blue */}
            <div className="absolute inset-0 bg-[#4895ef]/75" />

            {/* Top Gradient - from HeroSection (Cyan-Blue) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#4cc9f0_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to Promotion (Light Blue) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5a9cf5_50%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16">
                        {/* Left - Text Content */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            className="flex flex-col justify-center gap-6 min-[860px]:w-[55%] bg-black/30 backdrop-blur-sm p-6 rounded-[16px]"
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lecture

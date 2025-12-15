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
        <div className="relative overflow-hidden">
            {/* Color Overlay - Purple Gradient */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #343ec2 0%, #5a3db8 50%, #8d4aed 100%)' }} />

            {/* Top Gradient - from HeroSection (Deep Blue-Purple) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to Promotion (Light Purple) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    <div className="flex flex-col min-[860px]:flex-row items-center gap-10 lg:gap-16">
                        {/* Left - Text Content */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            className="group relative flex flex-col justify-center gap-6 min-[860px]:w-[55%] backdrop-blur-md p-6 rounded-[6px] overflow-hidden"
                        >
                            {/* Shimmer effect on hover */}
                            <div
                                className="absolute top-0 left-0 w-full h-full pointer-events-none"
                                style={{
                                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                                    transform: 'translateX(-100%)',
                                    transition: 'transform 0.8s ease-out'
                                }}
                                ref={(el) => {
                                    if (el) {
                                        const parent = el.parentElement;
                                        parent.addEventListener('mouseenter', () => {
                                            el.style.transform = 'translateX(100%)';
                                        });
                                        parent.addEventListener('mouseleave', () => {
                                            el.style.transform = 'translateX(-100%)';
                                        });
                                    }
                                }}
                            />

                            <p className="relative z-10 text-white font-Manrope text-[17px] sm:text-[18px] font-[500] leading-[30px]">
                                {lectureData.left.title}
                            </p>

                            <button
                                onClick={() => router.push('#diplomados')}
                                className="relative z-10 inline-block w-max bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                            >
                                {lectureData.left.button}
                            </button>

                            <p className="relative z-10 text-[#6f6] text-center font-Manrope text-[14px] sm:text-[15px] font-[600]">
                                {lectureData.left.text}
                            </p>
                        </div>

                        {/* Right - Image */}
                        <div
                            data-aos="fade-left"
                            data-aos-duration="800"
                            className="min-[860px]:w-[45%]"
                        >
                            <Image
                                src={lectureData.right.image}
                                alt="Diploma"
                                width={500}
                                height={400}
                                unoptimized
                                className="w-full h-auto rounded-[12px] object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Lecture

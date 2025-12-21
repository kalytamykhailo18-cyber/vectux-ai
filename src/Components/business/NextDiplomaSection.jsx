"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

const nextDiplomaData = {
    title: "Próximo Diplomado:",
    details: [
        "🗓️ Inicio: Martes 17 de febrero 2026",
        "📍 Modalidad: Online en vivo",
        "🕕 Martes y jueves, 6:00–9:00 pm (CDMX)",
        "💳 Inversión: $39,900 MXN ($2,220 USD)",
        "🎓 Becas disponibles y planes a meses sin intereses"
    ],
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985867/Picture2_lw1qho.jpg",
    button: "Contáctanos"
}

const NextDiplomaSection = () => {
    const nextDiplomaRef = useRef(null)

    const handle3DMouseMove = (e) => {
        if (!nextDiplomaRef.current) return
        const rect = nextDiplomaRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 12
        const rotateY = (centerX - x) / 12

        const shadowX = (centerX - x) / 5
        const shadowY = (centerY - y) / 5

        nextDiplomaRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
        nextDiplomaRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.4), ${shadowX * 0.5}px ${shadowY * 0.5}px 20px rgba(76, 201, 240, 0.2)`
    }

    const handle3DMouseLeave = () => {
        if (!nextDiplomaRef.current) return
        nextDiplomaRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        nextDiplomaRef.current.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5078e0 0%, #4a60d4 35%, #4550cc 65%, #3a50cc 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#5078e0_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to ContactSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#3a50cc_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-16">
                    {/* Left Content */}
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2">
                        <h2 className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-6">
                            {nextDiplomaData.title}
                        </h2>
                        <div className="space-y-3">
                            {nextDiplomaData.details.map((detail, index) => (
                                <p
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="text-white font-Manrope text-md md:text-md font-[500] leading-relaxed"
                                >
                                    {detail}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Right Image with 3D effect */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        className="md:w-2/3"
                        onMouseMove={handle3DMouseMove}
                        onMouseLeave={handle3DMouseLeave}
                    >
                        <div
                            ref={nextDiplomaRef}
                            className="transition-all duration-200 ease-out rounded-[16px] overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                src={nextDiplomaData.image}
                                alt="Next Diploma"
                                width={600}
                                height={400}
                                unoptimized
                                className="w-full h-auto object-cover shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-40">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {nextDiplomaData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default NextDiplomaSection

"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

const promotionData = {
    title: "La experiencia ya no es suficiente.",
    subtitle: "Los datos son el nuevo lenguaje de la dirección.",
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765886248/Picture2_ltqzm6.jpg",
    bottomText: "Tienes la visión de negocio, pero te faltan las herramientas para ejecutarla en la era digital. No dejes que la brecha técnica frene tu crecimiento.",
    finalText: "¡Aprende Data Analytics!"
}

const Promotion = () => {
    const imageRef = useRef(null)

    const handleMouseMove = (e) => {
        if (!imageRef.current) return
        const rect = imageRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 12
        const rotateY = (centerX - x) / 12

        const shadowX = (centerX - x) / 5
        const shadowY = (centerY - y) / 5

        imageRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
        imageRef.current.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.4), ${shadowX * 0.5}px ${shadowY * 0.5}px 20px rgba(141, 74, 237, 0.2)`
    }

    const handleMouseLeave = () => {
        if (!imageRef.current) return
        imageRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        imageRef.current.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }

    return (
        <div className="relative overflow-hidden">
            {/* Color Overlay - starts where HeroSection ends */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #3a40c5 0%, #4045c8 50%, #4550cc 100%)' }} />

            {/* Bottom Gradient - blend into Lecture */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#4550cc_0%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    {/* Title Section */}
                    <div className="text-center mb-12">
                        <h2
                            data-aos="fade-up"
                            className="text-white font-bold text-3xl md:text-4xl lg:text-[52px] leading-[40px] md:leading-[60px] mb-4"
                        >
                            {promotionData.title}
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="text-[#fa0] font-Manrope text-xl md:text-2xl lg:text-[28px] font-[600]"
                        >
                            {promotionData.subtitle}
                        </p>
                    </div>

                    {/* Image with 3D effect */}
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="800"
                        className="flex justify-center mb-12"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div
                            ref={imageRef}
                            className="transition-all duration-200 ease-out rounded-[16px] overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                src={promotionData.image}
                                alt="Data Analytics"
                                width={800}
                                height={450}
                                unoptimized
                                className="w-full max-w-[800px] h-auto object-cover"
                            />
                        </div>
                    </div>

                    {/* Bottom Text */}
                    <div className="text-center max-w-[900px] mx-auto">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="300"
                            className="text-white/90 font-Manrope text-[17px] md:text-[19px] font-[500] leading-[32px] mb-8"
                        >
                            {promotionData.bottomText}
                        </p>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className="text-[#4cc9f0] font-bold text-2xl md:text-3xl lg:text-[36px]"
                        >
                            {promotionData.finalText}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Promotion

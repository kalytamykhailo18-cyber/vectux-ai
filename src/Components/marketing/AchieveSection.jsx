"use client"
import React, { useRef } from 'react'
import Image from 'next/image'

const achieveData = {
    leftImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1766150860/e8543972-dafa-4037-9a9d-b6ab5a5bf99f_removalai_preview_p6g9oh.png",
    title: "¿Qué lograrás al finalizar el programa?",
    list: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226661/vectux-academy/raw/technology.png",
            text: "Crear segmentaciones de clientes avanzadas con machine learning"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226660/vectux-academy/raw/storytelling.png",
            text: "Optimizar campañas digitales con A/B testing y atribución multicanal"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226658/vectux-academy/raw/start-up.png",
            text: "Predecir el comportamiento del consumidor y el lifetime value"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765226656/vectux-academy/raw/searching.png",
            text: "Medir y demostrar el ROI de cada acción de marketing"
        }
    ],
    rightImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221271/vectux-academy/assets/insight.jpg"
}

const AchieveSection = () => {
    const achieveRightRef = useRef(null)

    const handle3DMouseMove = (e, ref) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        const rotateX = (y - centerY) / 12
        const rotateY = (centerX - x) / 12

        const shadowX = (centerX - x) / 5
        const shadowY = (centerY - y) / 5

        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
        ref.current.style.boxShadow = `${shadowX}px ${shadowY}px 40px rgba(0, 0, 0, 0.4), ${shadowX * 0.5}px ${shadowY * 0.5}px 20px rgba(76, 201, 240, 0.2)`
    }

    const handle3DMouseLeave = (ref) => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        ref.current.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
    }

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #6478e0 0%, #5f70dc 35%, #5a68d8 65%, #5058d2 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#6478e0_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to WhoIsSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5058d2_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-18 text-center">
                    {achieveData.title}
                </h2>
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Image with fade edges */}
                    <div
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="lg:w-3/10"
                    >
                        <Image
                            src={achieveData.leftImage}
                            alt="Marketing Analytics"
                            width={300}
                            height={300}
                            unoptimized
                            className="w-full h-auto"
                            style={{
                                maskImage: 'linear-gradient(to right, transparent 0%, black 15%), linear-gradient(to top, transparent 0%, black 35%)',
                                WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 15%), linear-gradient(to top, transparent 0%, black 35%)',
                                maskComposite: 'intersect',
                                WebkitMaskComposite: 'source-in'
                            }}
                        />
                    </div>

                    {/* Center Content */}
                    <div className="lg:w-1/2 lg:-ml-16">
                        <div className="">
                            {achieveData.list.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-left"
                                    data-aos-delay={index * 100}
                                    className="flex items-center gap-4 py-4 px-6 border-l-4 border-[#4cc9f0] hover:border-[#ffaa00] transition-all duration-300 rounded-lg"
                                >
                                    <Image
                                        src={item.image}
                                        alt={item.text}
                                        width={60}
                                        height={60}
                                        unoptimized
                                        className="w-14 h-14 object-contain flex-shrink-0"
                                    />
                                    <p className="text-white font-Manrope text-base md:text-lg">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image with 3D effect */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        className="lg:w-1/4"
                        onMouseMove={(e) => handle3DMouseMove(e, achieveRightRef)}
                        onMouseLeave={() => handle3DMouseLeave(achieveRightRef)}
                    >
                        <div
                            ref={achieveRightRef}
                            className="transition-all duration-200 ease-out rounded-sm overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                src={achieveData.rightImage}
                                alt="Marketing Analytics Team"
                                width={300}
                                height={400}
                                unoptimized
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AchieveSection

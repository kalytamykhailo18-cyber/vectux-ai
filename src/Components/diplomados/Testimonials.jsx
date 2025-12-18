"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const testimonialsBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221798/vectux-academy/assets/sample-1.jpg"

const testimonials = [
    {
        id: 1,
        name: "Ricardo Reyes",
        role: "Gerente de Auditoría Interna Latam en American Express",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221027/vectux-academy/assets/blog-1.webp",
        text: "El Diplomado en Business Analytics transformó mi carrera. Pasé de generar reportes históricos a construir análisis predictivos con herramientas como Power BI y RapidMiner. Ese conocimiento me permitió cambiar de empresa y mejorar mi compensación en solo un año. Hoy aplico lo aprendido en la implementación de soluciones de inteligencia artificial, usando bases sólidas en data quality, machine learning y storytelling para impulsar el futuro analítico de mi organización.",
        aos: "fade-right",
        duration: "800"
    },
    {
        id: 2,
        name: "Samantha Vélez",
        role: "CX Executive en Phillip Morris",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221066/vectux-academy/assets/blog-2.webp",
        text: "El diplomado fortaleció por completo mi trabajo en Customer Experience. El enfoque en pensamiento crítico, Power BI y storytelling me ayudó a entender patrones del journey del cliente con más claridad y comunicar insights de forma mucho más estratégica. Además, las bases de machine learning y de IA me dieron nuevas herramientas para anticipar necesidades y proponer soluciones con mayor impacto.",        aos: "zoom-in",
        duration: "600"
    },
    {
        id: 3,
        name: "Eduardo Albarrán",
        role: "Gerente de Contabilidad en Dell Technologies",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221072/vectux-academy/assets/blog-3.webp",
        text: "El programa de Business Analytics me ayudó a conectar los números con decisiones reales. Antes veía los datos solo como reportes financieros; ahora entiendo cómo analizarlos, visualizarlos y anticipar escenarios con modelos predictivos. Power BI y Python se convirtieron en herramientas clave de mi gestión. Hoy puedo presentar insights a la dirección con claridad y enfoque estratégico.",
        aos: "fade-left",
        duration: "800"
    }
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 4000) // 4 seconds per slide

        return () => clearInterval(interval)
    }, [])

    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${testimonialsBackgroundImage})` }}
        >
            {/* Color Overlay - semi-transparent to show fixed background */}
            {/* <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(85, 96, 216, 0.88) 0%, rgba(96, 104, 220, 0.82) 50%, rgba(101, 112, 224, 0.88) 100%)' }} /> */}

            {/* Top Gradient - blend from Bussiness */}
            <div className="absolute top-0 left-0 w-full h-[70%] z-10 bg-[linear-gradient(to_bottom,_#5560d8_40%,_transparent_70%)]" />

            {/* Bottom Gradient - blend into MasterclassSection */}
            <div className="absolute bottom-0 left-0 w-full h-[70%] z-10 bg-[linear-gradient(to_top,_#6570e0_15%,_transparent_70%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-4xl lg:text-[48px] leading-[45px] sm:leading-[58px] mb-6"
                    >
                        Testimonios con impacto
                    </h2>
                    <p
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="text-white/70 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[28px] max-w-[800px] mx-auto"
                    >
                        Ellos no solo tomaron un diplomado. Transformaron su forma de pensar, decidir y liderar.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative w-full overflow-hidden">
                    {/* Cards Container */}
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="w-full flex-shrink-0 flex-grow-0 basis-full"
                            >
                                <div className="w-full bg-blue/80 backdrop-blur-lg rounded-[6px] p-8 md:p-10 border border-[#e3e3e330]">
                                    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                                        {/* Avatar */}
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-3 border-[#4cc9f0]">
                                                <Image
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    width={96}
                                                    height={96}
                                                    unoptimized
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center md:text-center pl-20">
                                            {/* Quote */}
                                            <p className="text-white/90 font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[26px] mb-6 italic">
                                                "{testimonial.text}"
                                            </p>

                                            {/* Author */}
                                            <div>
                                                <p className="text-[#4cc9f0] font-Manrope font-[700] text-[16px]">
                                                    {testimonial.name}
                                                </p>
                                                <p className="text-white font-Manrope text-[14px]">
                                                    {testimonial.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-3 mt-10">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? 'bg-[#4cc9f0] w-8'
                                        : 'bg-white/30 hover:bg-white/50'
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </section>
        </div>
    )
}

export default Testimonials

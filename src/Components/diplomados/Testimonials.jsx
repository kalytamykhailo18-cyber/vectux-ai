"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const testimonialsBackgroundImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221798/vectux-academy/assets/sample-1.jpg"

const testimonials = [
    {
        id: 1,
        name: "Carlos Mendoza",
        role: "Director de Operaciones",
        company: "Banco Nacional",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221027/vectux-academy/assets/blog-1.webp",
        text: "El diplomado transformó mi manera de ver los datos. Ahora tomo decisiones estratégicas con confianza y mi equipo ha mejorado significativamente sus indicadores.",
        aos: "fade-right",
        duration: "800"
    },
    {
        id: 2,
        name: "María González",
        role: "Gerente de Marketing",
        company: "RetailMax",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221066/vectux-academy/assets/blog-2.webp",
        text: "Gracias a Vectux, pude implementar modelos predictivos en nuestras campañas. El ROI aumentó un 40% en solo tres meses.",
        aos: "zoom-in",
        duration: "600"
    },
    {
        id: 3,
        name: "Roberto Sánchez",
        role: "CFO",
        company: "TechSolutions",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221072/vectux-academy/assets/blog-3.webp",
        text: "La mentoría personalizada fue clave. Los instructores realmente entienden los desafíos del mundo corporativo y te guían paso a paso.",
        aos: "fade-left",
        duration: "800"
    },
    {
        id: 4,
        name: "Ana Lucía Torres",
        role: "Directora de RRHH",
        company: "Grupo Industrial",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221077/vectux-academy/assets/blog-4.webp",
        text: "No tenía background técnico, pero el programa está diseñado para líderes como yo. Ahora lidero proyectos de analítica en toda la organización.",
        aos: "fade-right",
        duration: "600"
    },
    {
        id: 5,
        name: "Fernando Ruiz",
        role: "Gerente de Ventas",
        company: "Distribuidora Central",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221090/vectux-academy/assets/blog-5.webp",
        text: "El certificado blockchain le dio credibilidad a mi perfil. Ya recibí ofertas de empresas en Estados Unidos gracias a las nuevas competencias.",
        aos: "zoom-in",
        duration: "800"
    },
    {
        id: 6,
        name: "Patricia Vega",
        role: "Analista Senior",
        company: "Consultora Global",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221094/vectux-academy/assets/blog-6.webp",
        text: "Vectux no solo enseña herramientas, enseña a pensar estratégicamente. Mi carrera dio un giro de 180 grados después del diplomado.",
        aos: "fade-left",
        duration: "600"
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
            {/* Color Overlay - Blue */}
            <div className="absolute inset-0 bg-[#4895ef]/75" />

            {/* Top Gradient - from HowWeLearn (Green-ish Pink) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#d9bfcc_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to DiplomadosCards (Light Blue) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#7caef0_50%,_transparent_100%)]" />

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
                                <div className="w-full bg-black/10 backdrop-blur-sm rounded-[20px] p-8 md:p-10 border border-[#e3e3e330]">
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
                                                <p className="text-white/60 font-Manrope text-[14px]">
                                                    {testimonial.role}
                                                </p>
                                                <p className="text-white/40 font-Manrope text-[13px]">
                                                    {testimonial.company}
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

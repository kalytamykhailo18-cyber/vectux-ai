"use client"
import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const learningData = {
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765228087/vectux-academy/svg/learning-by-doing-logo.svg",
    text: "Nuestra metodología se basa en casos reales de campañas de marketing digital. Trabajarás con datos de Google Ads, Meta Ads, CRM y plataformas de e-commerce para desarrollar estrategias que puedas implementar inmediatamente.\n\nAprenderás las mismas técnicas que utilizan las agencias de marketing más exitosas y los equipos de growth de startups unicornio.",
    benefitsTitle: "Beneficios clave",
}

const benefitData = {
    benefitsTitle: "Beneficios clave",
    benefits_flex_wrap: [
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985229/3-removebg-preview_fvj1fb.png",
            text: "Docentes en activo en multinacionales"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985228/1-removebg-preview_kznghi.png",
            text: "Aprendizaje 100 % práctico y aplicable desde el día 1"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985228/2-removebg-preview_u02nvn.png",
            text: "Clases online en vivo"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985230/4-removebg-preview_w6zuw6.png",
            text: "Red profesional LATAM"
        },
        {
            image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765985521/innovation-1_cdzqsc.png",
            text: "Certificado Vectux en Blockchain con reconocimiento en empresas líderes"
        }
    ]
}

const finalProject = {
    left: {
        title: "🚀 Proyecto Final",
        subtitle: "Caso real de tu organización o marca:",
        text: "Durante el programa, desarrollarás un análisis completo —desde diagnóstico hasta propuesta de acción— sobre una campaña, canal o iniciativa comercial real de tu entorno.Recibirás mentoría ejecutiva para lograr impacto y presentación final estilo boardroom."
    },
    right: {
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221133/vectux-academy/assets/cursos-2.webp"
    },
    button: "Contáctanos"
}


const LearningSection = () => {
    const router = useRouter()
    const imageRef = useRef(null)

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
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5a68d8 0%, #5f70dc 35%, #6478e0 65%, #5078e0 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#5a68d8_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary - connects to ContactSection */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#5078e0_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                {/* Image with text block */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2 p-10">
                        <Image
                            src={learningData.image}
                            alt="Marketing Learning"
                            width={500}
                            height={400}
                            unoptimized
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div data-aos="fade-left" data-aos-duration="800" className="md:w-1/2">
                        <p className="text-white font-Manrope text-lg md:text-xl leading-relaxed whitespace-pre-line">
                            {learningData.text}
                        </p>
                    </div>
                </div>

                {/* Benefits */}
                <h2 data-aos="fade-up" className="text-white font-bold text-3xl md:text-4xl lg:text-[42px] leading-tight mb-12 text-center">
                    {benefitData.benefitsTitle}
                </h2>

                <div className="flex flex-wrap mb-12">
                    {benefitData.benefits_flex_wrap.map((benefit, index) => (
                        <div
                            key={index}
                            data-aos="flip-up"
                            data-aos-delay={index * 100}
                            data-aos-duration="600"
                            className="flex-1 min-w-[150px] group hover:border-[#4cc9f0]/30 transition-all duration-300 rounded-[16px] p-6 flex flex-col items-center gap-4 text-center"
                        >
                            <Image
                                src={benefit.image}
                                alt={benefit.text}
                                width={80}
                                height={80}
                                unoptimized
                                className="w-1/3 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className="h-full text-white font-Manrope text-base md:text-lg group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Final Project */}
                <div className="flex flex-col md:flex-row items-center gap-10 mt-16 mb-12">
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2">
                        <h3 className="text-white font-bold text-2xl md:text-3xl mb-4">
                            {finalProject.left.title}
                        </h3>
                        <p className="text-[#ffaa00] font-Manrope text-lg md:text-xl font-[600] mb-4">
                            {finalProject.left.subtitle}
                        </p>
                        <p className="text-white font-Manrope text-base md:text-lg leading-relaxed">
                            {finalProject.left.text}
                        </p>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        className="md:w-1/2"
                        onMouseMove={(e) => handle3DMouseMove(e, imageRef)}
                        onMouseLeave={() => handle3DMouseLeave(imageRef)}
                    >
                        <div
                            ref={imageRef}
                            className="transition-all duration-200 ease-out rounded-[6px] overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                src={finalProject.right.image}
                                alt="Proyecto Final"
                                width={500}
                                height={400}
                                unoptimized
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {finalProject.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LearningSection

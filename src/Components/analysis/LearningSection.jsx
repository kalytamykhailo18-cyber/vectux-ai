"use client"
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const learningData = {
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765984576/Picture2-removebg-preview_gvjdkh.png",
    text: "Nuestra innovadora metodología learning by doing te sumergirá en proyectos prácticos y casos reales, donde aplicarás directamente las técnicas de machine learning y análisis de datos aprendidas en el aula.\n\nPrepárate para experimentar el aprendizaje interactivo y dinámico que te llevará más allá de las aulas y directamente al corazón de la acción empresarial.",
    benefitsTitle: "Beneficios clave",
    benefits: [
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
    ],
    button: "Contáctanos"
}

const LearningSection = () => {
    const router = useRouter()

    return (
        <section className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5a67d8 0%, #6b4bb0 50%, #8d4aed 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#5a67d8_50%,_transparent_100%)]" />

            {/* Bottom gradient boundary */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                {/* Image with text block */}
                <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
                    <div data-aos="fade-right" data-aos-duration="800" className="md:w-1/2">
                        <Image
                            src={learningData.image}
                            alt="Learning by doing"
                            width={500}
                            height={400}
                            unoptimized
                            className="w-full h-auto rounded-tl-[0px] rounded-tr-[40px] rounded-bl-[40px] rounded-br-[0px] object-cover"
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
                    {learningData.benefitsTitle}
                </h2>

                <div className="flex flex-wrap mb-12">
                    {learningData.benefits.map((benefit, index) => (
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
                                className="w-20 h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <p className=" h-full text-white font-Manrope text-base md:text-lg group-hover:text-[#4cc9f0] transition-colors duration-300">
                                {benefit.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <button
                        data-aos="fade-up"
                        onClick={() => router.push('#contact')}
                        className="bg-[#ffaa00] font-Manrope uppercase hover:bg-[#e09500] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        {learningData.button}
                    </button>
                </div>
            </div>
        </section>
    )
}

export default LearningSection

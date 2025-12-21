"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const visionData = {
    title: "Visión.",
    description: [
        "Ser el proveedor líder de formación en analítica de negocios ",
        { text: "accesible y continua", bold: true },
        " para empresas y profesionales, ofreciendo herramientas prácticas en analítica avanzada, IA y ",
        { text: "transformación digital", bold: true },
        " que transformen los ",
        { text: "conocimientos profundos de datos en soluciones empresariales accionables", bold: true },
        ". Aspiramos a liderar la creación de una ",
        { text: "red global de empresas y talento capacitado,", bold: true },
        " fomentando la ",
        { text: "innovación estratégica", bold: true },
        " y el ",
        { text: "crecimiento sostenible.", bold: true },
        " Nuestro objetivo es facilitar el acceso a la formación para que cualquier organización, independientemente de su tamaño o ",
        { text: "nivel de madurez analítica,", bold: true },
        " pueda adaptarse y prosperar en un entorno competitivo y digitalizado desbloqueando el ",
        { text: "valor oculto de sus datos.", bold: true }
    ],
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221126/vectux-academy/assets/course-1.jpg"
}

const renderText = (textArray) => {
    return textArray.map((item, index) => {
        if (typeof item === 'string') {
            return <span key={index}>{item}</span>
        }
        if (item.bold) {
            return <strong key={index}>{item.text}</strong>
        }
        return <span key={index}>{item.text}</span>
    })
}

const VisionSection = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <section id="vision" className="relative px-8 sm:px-14 py-20 md:py-28" style={{ background: 'linear-gradient(to bottom, #5058d2 0%, #5a68d8 35%, #5f70dc 65%, #6478e0 100%)' }}>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col min-[860px]:flex-row-reverse items-center gap-10 lg:gap-16">
                    {/* Text Content */}
                    <div className="flex flex-col justify-center gap-4 min-[860px]:w-[55%]">
                        <h2
                            data-aos="fade-up"
                            className="text-[#fa0] font-bold text-[32px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px]"
                        >
                            {visionData.title}
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px]"
                        >
                            {renderText(visionData.description)}
                        </p>
                    </div>

                    {/* Image with Card Flip 3D effect */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="min-[860px]:w-[45%] p-4"
                        style={{ perspective: '1000px' }}
                    >
                        <div
                            className="relative aspect-[16/10] w-full cursor-pointer"
                            style={{
                                transformStyle: 'preserve-3d',
                                transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                            }}
                            onClick={() => setIsFlipped(!isFlipped)}
                            onMouseEnter={() => setIsFlipped(true)}
                            onMouseLeave={() => setIsFlipped(false)}
                        >
                            {/* Front side - Image */}
                            <div
                                className="absolute inset-0 rounded-[6px] overflow-hidden"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
                                }}
                            >
                                <Image
                                    alt="Vision"
                                    fill
                                    src={visionData.image}
                                    unoptimized
                                    className="object-cover"
                                />
                                {/* Subtle overlay hint */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-70">
                                    Hover para más información
                                </div>
                            </div>

                            {/* Back side - Content */}
                            <div
                                className="absolute inset-0 rounded-[6px] overflow-hidden flex flex-col justify-center items-center p-6 text-center"
                                style={{
                                    backfaceVisibility: 'hidden',
                                    transform: 'rotateY(180deg)',
                                    background: 'linear-gradient(135deg, #4cc9f0 0%, #3a45c5 50%, #343ec2 100%)',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.4)'
                                }}
                            >
                                <h3 className="text-white font-bold text-xl mb-3">Nuestra Visión</h3>
                                <p className="text-white/90 text-sm leading-relaxed">
                                    Liderar la transformación digital a través de la educación en analítica avanzada e inteligencia artificial.
                                </p>
                                <div className="mt-4 flex gap-2">
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">IA</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Analytics</span>
                                    <span className="px-3 py-1 bg-white/20 rounded-full text-white text-xs">Digital</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionSection

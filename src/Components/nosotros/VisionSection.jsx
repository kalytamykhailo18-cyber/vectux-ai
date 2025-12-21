"use client"
import React, { useRef } from 'react'
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
        ref.current.style.boxShadow = `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.3)`
    }

    const handle3DMouseLeave = (ref) => {
        if (!ref.current) return
        ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        ref.current.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)'
    }

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

                    {/* Image with 3D effect */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className="min-[860px]:w-[45%]"
                        onMouseMove={(e) => handle3DMouseMove(e, imageRef)}
                        onMouseLeave={() => handle3DMouseLeave(imageRef)}
                    >
                        <div
                            ref={imageRef}
                            className="relative aspect-[16/10] w-full overflow-hidden rounded-[16px] cursor-pointer transition-all duration-200 ease-out"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                alt="Vision"
                                fill
                                src={visionData.image}
                                unoptimized
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisionSection

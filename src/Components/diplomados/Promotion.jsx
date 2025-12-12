"use client"
import React from 'react'
import Image from 'next/image'

const promotionData = {
    title: "La experiencia ya no es suficiente. Los datos son el nuevo lenguaje de la dirección.",
    left: {
        leftSubContainer: "Tienes la visión de negocio, pero te faltan las herramientas para ejecutarla en la era digital. No dejes que la brecha técnica frene tu crecimiento.",
        rightSubContainer: [
            {
                title: "Antes de Vectux:",
                text: 'Dependes de otros para obtener reportes, usas Excel manual, tomas decisiones basadas en "lo que creemos".'
            },
            {
                title: "Después de Vectux:",
                text: "Creas tus propios modelos, automatizas tareas aburridas y presentas hallazgos irrefutables a la dirección."
            }
        ]
    },
    images: [
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765528974/promotion-1_trsdb9.jpg",
        "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765246143/lecture-1_a77h3w.jpg"
    ]
}

const Promotion = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#8d4aed]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                {/* Title */}
                <h2
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[36px] md:leading-[50px] text-center mb-12"
                >
                    {promotionData.title}
                </h2>

                <div className="flex flex-col min-[860px]:flex-row items-stretch gap-10 lg:gap-16">
                    {/* Left - Content */}
                    <div className="flex flex-col min-[860px]:w-[65%] gap-8">
                        {/* Left Sub Container - Description */}
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            className="bg-black/20 backdrop-blur-sm rounded-[16px] p-6 border border-[#e3e3e330]"
                        >
                            <p className="text-white font-Manrope text-[16px] sm:text-[17px] font-[500] leading-[28px]">
                                {promotionData.left.leftSubContainer}
                            </p>
                        </div>

                        {/* Right Sub Container - Before/After (Vertical) */}
                        <div className="flex flex-col gap-6">
                            {promotionData.left.rightSubContainer.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="800"
                                    data-aos-delay={index * 100}
                                    className={`p-6 rounded-[16px] border ${index === 0 ? 'bg-red-900/20 border-red-500/30' : 'bg-green-900/20 border-green-500/30'}`}
                                >
                                    <h3 className={`font-bold text-[18px] mb-3 ${index === 0 ? 'text-red-400' : 'text-green-400'}`}>
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 font-Manrope text-[14px] sm:text-[15px] leading-[24px]">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Stacked Images (no gap) */}
                    <div
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="min-[860px]:w-[35%] flex flex-col"
                    >
                        <div className="relative overflow-hidden rounded-tl-none rounded-tr-[48px] rounded-bl-none rounded-br-none">
                            <Image
                                src={promotionData.images[0]}
                                alt="Promotion 1"
                                width={400}
                                height={200}
                                unoptimized
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-tl-none rounded-tr-none rounded-bl-[48px] rounded-br-none">
                            <Image
                                src={promotionData.images[1]}
                                alt="Promotion 2"
                                width={400}
                                height={200}
                                unoptimized
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#8d4aed] blur-xl" />
        </section>
    )
}

export default Promotion

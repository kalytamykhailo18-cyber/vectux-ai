"use client"
import React from 'react'

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
    backgroundImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765528974/promotion-1_trsdb9.jpg"
}

const Promotion = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${promotionData.backgroundImage})` }}
        >
            {/* Top Gradient - from Lecture (Light Purple) */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            {/* Bottom Gradient - transition to Bussiness (Cyan-Blue) */}
            <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-20 md:py-28">
                <div className="max-w-[1200px] mx-auto relative z-20">
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
                        <div className="flex flex-col min-[860px]:w-full gap-8">
                            {/* Left Sub Container - Description */}
                            <div
                                data-aos="fade-right"
                                data-aos-duration="800"
                                className="bg-black/50 backdrop-blur-sm rounded-[6px] p-6 border border-[#e3e3e330]"
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
                                        className={`p-6 rounded-[6px] border backdrop-blur-sm bg-black/50 border-red-500/10`}
                                    >
                                        <h3 className={`font-bold text-[18px] mb-3 ${index === 0 ? 'text-red-400' : 'text-green-400'}`}>
                                            {item.title}
                                        </h3>
                                        <p className="text-white font-Manrope text-[14px] sm:text-[15px] leading-[24px]">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Promotion

"use client"
import React from 'react'
import { FaUserTie, FaRocket, FaUsers } from "react-icons/fa"

const howWeLearnData = {
    backgroundImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221174/vectux-academy/assets/financial-bg.jpg"
}

const benefitsItems = [
    {
        title: "Aprende haciendo, no solo entendiendo",
        text: "100 % práctico y aplicado a tu rol actual",
        icon: "✨", aos: "fade-up", duration: "600", delay: 0
    },
    {
        title: "Potencia tu carrera profesional",
        text: "Te abrimos las puertas a puestos mejor pagados",
        icon: "🎓", aos: "fade-up", duration: "600", delay: 100
    },
    {
        title: "Conecta con mentores y pares de alto nivel",
        text: "Nuestros mentores son altos ejecutivos de empresas Fortune 500",
        icon: "🤝", aos: "fade-up", duration: "600", delay: 200
    },
    {
        title: "La analítica avanzada abre tus puertas en otros países como EE.UU. y Canadá",
        text: "Certificado en Blockchain respaldado por Vectux, firma de referencia en analítica avanzada",
        icon: "🌍", aos: "fade-up", duration: "600", delay: 300
    }
]

const targetAudienceItems = [
    {
        text: "Analistas, gerentes y directivos de cualquier industria",
        icon: FaUsers, aos: "fade-up", duration: "600", delay: 0
    },
    {
        text: "Líderes funcionales que no son técnicos, pero toman decisiones clave",
        icon: FaUserTie, aos: "fade-up", duration: "800", delay: 100
    },
    {
        text: "Profesionales que quieren impulsar su carrera o prepararse para mercados globales",
        icon: FaRocket, aos: "fade-up", duration: "600", delay: 200
    }
]

const HowWeLearn = () => {
    return (
        <div
            className="relative overflow-hidden bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${howWeLearnData.backgroundImage})` }}
        >

            {/* Top Gradient - hero-like blue blend from DiplomadosCards */}
            <div className="absolute top-0 left-0 w-full h-[90%] z-10 bg-[linear-gradient(to_bottom,_#343ec2_20%,_transparent_50%)]" />

            {/* Bottom Gradient - hero-like blue blend into Bussiness */}
            <div className="absolute bottom-0 left-0 w-full h-[60%] z-10 bg-[linear-gradient(to_top,_#343ec2_60%,_transparent_100%)]" />

            <section className="relative px-8 sm:px-14 py-4 md:py-8 mb-40">
                <div className="max-w-[1200px] mx-auto relative z-20">
                    <h2
                        data-aos="fade-up"
                        data-aos-duration="600"
                        className="text-white font-bold text-3xl md:text-[36px] leading-[44px] mb-12 text-center"
                    >
                        ¿A quién están dirigidos?
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-72">
                        {targetAudienceItems.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <div
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group flex flex-col items-start gap-4 py-4 px-6 border-l-4 border-[#4cc9f0] hover:border-[#fa0] transition-all duration-300 rounded-lg"
                                >
                                    <IconComponent className="text-[#4cc9f0] w-10 h-10 flex-shrink-0 group-hover:rotate-[360deg] transition-transform duration-500" />
                                    <p className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[26px] group-hover:text-[#fa0] transition-colors duration-300">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })}

                    </div>

                    {/* Target Audience Section */}
                    <div className="pt-48">
                        <h2
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="text-white font-bold text-3xl md:text-[36px] leading-[44px] mb-12 text-center"
                        >
                            Beneficios diferenciales
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {benefitsItems.map((item, index) => (
                                <div
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group flex flex-col items-start gap-4 py-4 px-6 border-l-4 border-[#4cc9f0] hover:border-[#fa0] transition-all duration-300 rounded-lg"
                                >
                                    <span className="text-[32px] flex-shrink-0 group-hover:rotate-[360deg] transition-transform duration-500">{item.icon}</span>
                                    <div>
                                        <h3 className="text-[#4cc9f0] font-bold text-[18px] md:text-[20px] leading-[28px] mb-2 group-hover:text-[#fa0] transition-colors duration-300">
                                            {item.title}
                                        </h3>
                                        <p className="text-white font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] group-hover:text-white transition-colors duration-300">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="absolute flex justify-center items-center w-full h-[260px]">
                        <button className='px-4 py-2 bg-[#fa0] hover:bg-[#e80] text-[#fff] cursor-pointer rounded-[3px]'>
                            Contáctanos
                        </button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default HowWeLearn

"use client"
import React from 'react'

const howWeLearnItems = [
    { text: "100 % práctico y aplicado a tu rol actual", icon: "✔️", aos: "fade-right", duration: "600", delay: 0 },
    { text: "Mentores en activo, trabajando en el mundo de la analítica con empresas top Mundiales", icon: "✔️", aos: "fade-left", duration: "800", delay: 100 },
    { text: "Proyectos reales: cada participante desarrolla durante el programa un caso con impacto en su área", icon: "✔️", aos: "fade-right", duration: "600", delay: 200 },
    { text: "Mentoría personalizada y acompañamiento estratégico", icon: "✔️", aos: "fade-left", duration: "800", delay: 300 },
    { text: "Certificado en Blockchain respaldado por Vectux, firma de referencia en analítica avanzada", icon: "✔️", aos: "zoom-in", duration: "600", delay: 400 }
]

const targetAudienceItems = [
    { text: "Analistas, gerentes y directivos de cualquier industria", aos: "fade-up", duration: "600", delay: 0 },
    { text: "Líderes funcionales que no son técnicos, pero toman decisiones clave", aos: "fade-up", duration: "800", delay: 100 },
    { text: "Profesionales que quieren impulsar su carrera o prepararse para mercados globales", aos: "fade-up", duration: "600", delay: 200 },
    { text: "Equipos internos de empresas que buscan mejorar su capacidad analítica", aos: "fade-up", duration: "1000", delay: 300 }
]

const benefitsItems = [
    { text: "Aprende haciendo, no solo entendiendo", icon: "✨", aos: "zoom-in", duration: "600", delay: 0 },
    { text: "Aplica en tu trabajo desde el primer módulo", icon: "🎓", aos: "fade-right", duration: "800", delay: 100 },
    { text: "Conecta con mentores y pares de alto nivel en Latinoamérica", icon: "🤝", aos: "fade-left", duration: "600", delay: 200 },
    { text: "La analítica avanzada abre tus puertas en otros países como EE.UU. y Canadá", icon: "🌍", aos: "zoom-in", duration: "800", delay: 300 }
]

const HowWeLearn = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#8d4aed] via-[#6b3fa0] to-[#343ec2]">
            {/* Top Gradient Blur for section transition */}
            <div className="absolute -top-20 left-0 w-full h-40 bg-gradient-to-t from-transparent to-[#8d4aed] blur-xl" />

            <div className="max-w-[1200px] mx-auto">
                <div className="grid md:grid-cols-3 gap-10">
                    {/* Column 1 - How We Learn */}
                    <div>
                        <h3
                            data-aos="fade-up"
                            data-aos-duration="600"
                            className="text-white font-bold text-2xl md:text-[28px] leading-[36px] mb-8"
                        >
                            ¿Cómo se aprende en Vectux?
                        </h3>
                        <ul className="space-y-4">
                            {howWeLearnItems.map((item, index) => (
                                <li
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group flex items-start gap-3 p-4 bg-black/20 backdrop-blur-sm rounded-lg border-l-4 border-[#4cc9f0] hover:border-white transition-colors duration-300"
                                >
                                    <span className="text-[18px] flex-shrink-0">{item.icon}</span>
                                    <span className="text-white/80 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 - Target Audience */}
                    <div>
                        <h3
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="100"
                            className="text-white font-bold text-2xl md:text-[28px] leading-[36px] mb-8"
                        >
                            ¿A quién están dirigidos?
                        </h3>
                        <ul className="space-y-4">
                            {targetAudienceItems.map((item, index) => (
                                <li
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-[#e3e3e330] hover:border-[#4cc9f0] transition-all duration-300"
                                >
                                    <span className="text-white/80 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] group-hover:text-[#4cc9f0] transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Benefits */}
                    <div>
                        <h3
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-delay="200"
                            className="text-white font-bold text-2xl md:text-[28px] leading-[36px] mb-8"
                        >
                            Beneficios diferenciales
                        </h3>
                        <ul className="space-y-4">
                            {benefitsItems.map((item, index) => (
                                <li
                                    key={index}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="group flex items-start gap-3 p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-[#e3e3e330] hover:bg-[#4cc9f0]/10 hover:border-[#4cc9f0] transition-all duration-300"
                                >
                                    <span className="text-[20px] flex-shrink-0">{item.icon}</span>
                                    <span className="text-white/80 font-Manrope text-[14px] sm:text-[15px] font-[500] leading-[24px] group-hover:text-white transition-colors duration-300">
                                        {item.text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Blur for section transition */}
            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#343ec2] blur-xl" />
        </section>
    )
}

export default HowWeLearn

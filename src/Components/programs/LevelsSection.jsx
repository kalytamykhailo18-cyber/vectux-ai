import Image from 'next/image'
import React from 'react'

const LevelsData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220972/vectux-academy/assets/benefits1.jpg",
        title: "Aplicación Real desde el Inicio",
        text: "Aprendizaje práctico con problemas de negocio de tu industria",
        alt: "benefit-card1",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765246143/lecture-1_a77h3w.jpg",
        title: "Mentores, no instructores",
        text: "Expertos en datos, tecnología y negocios que comparten experiencias reales de proyectos multinacionales.",
        alt: "benefit-card2",
        aos: "fade-left",
        duration: "800",
        delay: 100
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765246172/lecture-2_q72wah.jpg",
        title: "Liderazgo Adaptativo",
        text: "Fomentamos una visión estratégica mediante técnicas de storytelling y trabajo en equipo.",
        alt: "benefit-card3",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220984/vectux-academy/assets/benefits4.jpg",
        title: "Enfoque personalizado",
        text: "Programas adaptados al rol, nivel y necesidades de cada equipo.",
        alt: "benefit-card4",
        aos: "fade-up",
        duration: "1000",
        delay: 300
    }
];

const LevelsSection = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2] py-20 pb-32 px-7 md:px-10 min-[860px]:!px-16">
            <div className="max-w-[1200px]">
                <div className="flex flex-col justify-center items-center gap-3 text-center">
                    <h1 data-aos="zoom-in" data-aos-duration="800" className="text-white font-bold text-4xl md:text-5xl lg:text-[48px] leading-[56px]">
                        Generamos resultados de Alto Impacto
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-white font-Manrope text-[16px] font-[500] leading-[28px] md:w-[60%]">
                        No somos escuela, somos consultoria en IA con formacion aplicada.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                    {LevelsData.map((item) => (
                        <div key={item.id} data-aos={item.aos} data-aos-duration={item.duration} data-aos-delay={item.delay} className="w-full">
                            <div className="group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105">
                                <div className="relative w-full h-[180px]">
                                    <Image
                                        alt={item.alt}
                                        width={300}
                                        height={200}
                                        src={item.image}
                                        unoptimized
                                        className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
                                    />
                                </div>
                                <div className="pt-4">
                                    <h3 className="text-white font-Manrope font-semibold text-lg mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-white font-Manrope text-sm leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LevelsSection

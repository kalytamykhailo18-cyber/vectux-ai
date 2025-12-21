"use client"
import { useRef } from "react";
import Image from "next/image";
import { GiBrain, GiArtificialIntelligence, GiBookmarklet, GiPuzzle, GiLightBulb, GiSpeaker } from 'react-icons/gi';
import { PiListPlus, PiUsersThree } from "react-icons/pi";

const SkillsData = [
    {
        id: 1,
        icon: GiArtificialIntelligence,
        title: "Inteligencia Artificial y Aprendizaje Automático",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        id: 2,
        icon: GiBrain,
        title: "Inteligencia Artificial Generativa",
        aos: "fade-right",
        duration: "800",
        delay: 100
    },
    {
        id: 3,
        icon: PiListPlus,
        title: "Análisis de Datos Avanzado",
        aos: "zoom-in",
        duration: "600",
        delay: 150
    },
    {
        id: 4,
        icon: GiBookmarklet,
        title: "Narrativa de Datos",
        aos: "fade-left",
        duration: "800",
        delay: 200
    },
    {
        id: 5,
        icon: GiPuzzle,
        title: "Resolución de Problemas",
        aos: "fade-up",
        duration: "1000",
        delay: 250
    },
    {
        id: 6,
        icon: PiUsersThree,
        title: "Pensamiento Creativo",
        aos: "zoom-in",
        duration: "600",
        delay: 300
    },
    {
        id: 7,
        icon: GiLightBulb,
        title: "Estrategia",
        aos: "fade-right",
        duration: "800",
        delay: 350
    },
    {
        id: 8,
        icon: GiSpeaker,
        title: "Comunicación Efectiva",
        aos: "fade-up",
        duration: "1000",
        delay: 400
    }
];

export default function WhyAttend() {
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
        <section className="relative px-8 pt-4 sm:px-7 md:px-10 min-[860px]:!px-10 lg:!px-14 sm:pt-10 pb-24 sm:pb-16 md:pb-24 flex justify-center items-center overflow-hidden">
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #5a68d8 0%, #5f70dc 50%, #6478e0 100%)' }} />

            {/* Bottom Gradient - blend into Skills */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#6478e0_0%,_transparent_100%)]" />

            <div className="max-w-[1200px] relative z-20 mt-40">
                <div className="flex flex-col min-[860px]:flex-row">
                    <div className="flex flex-col justify-center gap-6 md:w-[60%] lg:w-[65%]">
                        <h1 data-aos="fade-right" data-aos-duration="800" className="text-[#fa0] font-bold text-[38px] md:text-5xl lg:text-[43px] leading-[45px] sm:leading-[56px]">
                            Desarrollamos
                            <br />
                            <span className="">habilidades analíticas</span>
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-white font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-full min-[860px]:!w-[80%]">
                            Nuestros programas están diseñados a medida y enfocados en potenciar las habilidades analíticas "blandas" y "duras" de tus colaboradores, necesarias para mantener tu negocio a la vanguardia en la era de la Inteligencia Artificial.
                        </p>
                        <div data-aos="zoom-in" data-aos-delay="200" data-aos-duration="600" className="flex flex-col mt-2 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-[#fa0] cursor-pointer w-max font-Manrope uppercase hover:bg-[#e80] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none">
                                Más información
                            </button>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-duration="1000"
                        className="flex justify-end pt-12 md:pt-0 lg:pr-2 min-[860px]:w-[40%] lg:!w-[35%]"
                        onMouseMove={(e) => handle3DMouseMove(e, imageRef)}
                        onMouseLeave={() => handle3DMouseLeave(imageRef)}
                    >
                        <div
                            ref={imageRef}
                            className="cursor-pointer transition-all duration-200 ease-out rounded-tl-none rounded-tr-[72px] rounded-bl-[72px] rounded-br-none overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <Image
                                alt="services"
                                width={750}
                                height={360}
                                src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221176/vectux-academy/assets/frame40.jpg"
                                unoptimized
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-1">
                        {SkillsData.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={skill.id}
                                    data-aos={skill.aos}
                                    data-aos-duration={skill.duration}
                                    data-aos-delay={skill.delay}
                                    className="flex flex-col gap-2 justify-center items-center py-9 px-8 rounded-[8px] border border-[#e3e3e349] bg-[#444d5a19] group"
                                >
                                    <IconComponent
                                        size={45}
                                        className={`text-white group-hover:scale-125 group-hover:rotate-12 cursor-pointer transition-all duration-700 ease-out icon-float icon-float-delay-${skill.id}`}
                                    />
                                    <h3 className="font-Manrope text-center font-semibold text-[19px] tracking-[0.4px] text-white">
                                        {skill.title}
                                    </h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

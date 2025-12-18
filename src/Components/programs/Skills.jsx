"use client"
import React from 'react'
import { FaUsersGear } from "react-icons/fa6";
import { TbAdjustmentsSearch } from "react-icons/tb";
import { LuChartNoAxesCombined } from "react-icons/lu";

const SkillsData = [
    {
        id: 1,
        icon: FaUsersGear,
        title: "Nivel Ejecutivo o Gerencial",
        description: "Programa de Liderazgo en Analítica Avanzada: Talleres enfocados en liderazgo estratégico y transformación digital.",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        icon: LuChartNoAxesCombined,
        title: "Nivel Intermedio o Gerencia Departamental",
        description: "Certificación en Análisis de Datos para Gerentes: Mejorando habilidades de análisis de datos para la toma de decisiones.",
        aos: "zoom-in",
        duration: "600",
        delay: 150
    },
    {
        id: 3,
        icon: TbAdjustmentsSearch,
        title: "Nivel de Empleados Operativos o Base",
        description: "Fundamentos de Análisis de Datos: Introducción a conceptos básicos y aplicaciones prácticas.",
        aos: "fade-left",
        duration: "800",
        delay: 300
    }
];

const Skills = () => {
    return (
        <section className="relative flex justify-center items-center px-7 md:px-10 lg:px-16 py-20 overflow-hidden">
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #6478e0 0%, #5f70dc 50%, #5a68d8 100%)' }} />

            {/* Bottom Gradient - blend into LevelsSection */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#5a68d8_0%,_transparent_100%)]" />

            <div className="max-w-[1200px] relative z-20">
                <div>
                    <div className="flex flex-col justify-center items-center gap-3 text-center">
                        <h1 data-aos="zoom-in" data-aos-duration="800" className="text-white font-bold text-4xl md:text-5xl lg:text-[48px] leading-[56px]">
                            Niveles
                        </h1>
                        <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-white font-Manrope text-[16px] font-[500] leading-[28px] sm:w-[80%] md:w-[60%]">
                            Nuestros cursos de inteligencia artificial y analítica avanzada para empresas están enfocados en tres diferentes niveles de la organización:
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-8 px-2 min-[860px]:px-6">
                        {SkillsData.map((skill) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={skill.id}
                                    data-aos={skill.aos}
                                    data-aos-duration={skill.duration}
                                    data-aos-delay={skill.delay}
                                    className="rounded-[14px] group border border-white/30"
                                >
                                    <div className="px-9 py-10 flex justify-between flex-col gap-7">
                                        <div className="flex items-center group-hover:scale-120 cursor-pointer transition-all duration-700 ease-out w-max scale-100">
                                            <IconComponent size={70} className="text-white sm:w-[80px]" />
                                        </div>
                                        <div>
                                            <h1 className="text-[#ebebeb] font-bold mb-3 text-[20.5px] leading-[28px] sm:text-[24px] sm:leading-[32px] tracking-[0.4px]">
                                                {skill.title}
                                            </h1>
                                            <p className="text-[#ebebeb] font-Manrope text-[15px] sm:text-[15.5px] tracking-[0.5px] font-[500] leading-[22px]">
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills

"use client"
import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5'
import { FaGraduationCap, FaBriefcase, FaChartLine } from 'react-icons/fa'

const AccordionData = [
    {
        id: 1,
        title: "Formación práctica",
        icon: FaGraduationCap,
        description: "Enseñamos con tus datos, tus casos, tus indicadores y la realidad de tu industria, para que cada aprendizaje se traduzca en impacto inmediato.",
        aos: "fade-left",
        duration: "600",
        delay: 0
    },
    {
        id: 2,
        title: "Diseñamos con propósito empresarial",
        icon: FaBriefcase,
        description: "Nuestros programas están directamente conectados a proyectos de impacto real (generación de ROI para el empleador).",
        aos: "fade-up",
        duration: "800",
        delay: 150
    },
    {
        id: 3,
        title: "Basado en datos y centrado en el humano",
        icon: FaChartLine,
        description: "Análisis interactivo, pensamiento crítico, liderazgo, storytelling y tecnología (Inteligencia Artificial e IA generativa), con enfoque en el ser humano y liderazgo ético.",
        aos: "zoom-in",
        duration: "600",
        delay: 300
    }
];

const ServiceSection = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <section className="relative overflow-hidden px-8 sm:px-20 py-20 flex justify-center items-center">
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #4550cc 0%, #5058d2 50%, #5a68d8 100%)' }} />

            {/* Bottom Gradient - blend into WhyAttend */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#5a68d8_0%,_transparent_100%)]" />

            <div className="w-full flex flex-col lg:flex-row max-w-[1200px] relative z-20">
                <div data-aos="fade-right" data-aos-duration="800" className="lg:w-3/5 flex items-center justify-start pl-8 lg:pl-16">
                    <div className="text-left">
                        <div data-aos="zoom-in" data-aos-duration="600" data-aos-delay="100" className="text-white mb-6">
                            <p className='text-[120px]'>The AI</p>
                            <p className='text-4xl -mt-10 mb-10'>
                                <span className='text-[#ea0]'> + </span> <span className='text-[#4cc9f0]'>Shift </span><span className='text-[#4cc9f0]'>program</span>
                            </p>
                        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300" className="text-3xl lg:text-4xl xl:text-3xl leading-tight">
                            <span className="text-white">Data.</span>
                            <span className="text-[#4cc9f0]"> Thinking.</span>
                            <span className="text-white"> Action</span>
                        </div>
                        </div>
                        <p data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" className="text-white text-lg lg:text-xl max-w-lg mb-8 leading-relaxed border-l-4 border-[#00acf4] pl-4">
                            El Programa IA Shift no es un curso más.
                            <span className="font-bold"> Es un programa de capacitación en inteligencia artificial y analítica avanzada</span> con mentoría de proyectos reales, diseñado para que tus líderes generen resultados desde el primer día.
                        </p>
                        <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="300" className="text-3xl lg:text-4xl xl:text-5xl leading-tight">
                            <span className="text-white">Datos.</span>
                            <span className="text-[#4cc9f0]"> Pensamiento.</span>
                            <span className="text-white"> Acción.</span>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="1000" className="lg:w-2/5 lg:pl-8 mt-20">
                    <div className="space-y-4">
                        {AccordionData.map((item) => {
                            const IconComponent = item.icon;
                            const isOpen = openAccordion === item.id;
                            return (
                                <div
                                    key={item.id}
                                    data-aos={item.aos}
                                    data-aos-duration={item.duration}
                                    data-aos-delay={item.delay}
                                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                                >
                                    <button
                                        onClick={() => toggleAccordion(item.id)}
                                        className="w-full flex items-center gap-3 p-4 text-left cursor-pointer"
                                    >
                                        <IoChevronDown
                                            className={`w-5 h-5 transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''}`}
                                        />
                                        <h3 className="font-Manrope font-medium text-lg text-white">{item.title}</h3>
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                                        <div className="p-4 flex items-center gap-4">
                                            <IconComponent className="w-12 h-12 text-white flex-shrink-0" />
                                            <div className="flex-1">
                                                <p className="text-white/90 font-Manrope text-base leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
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

export default ServiceSection

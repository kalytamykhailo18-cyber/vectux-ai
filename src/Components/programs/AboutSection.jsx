"use client"
import React from 'react';
import { IoTrendingUp, IoPeople, IoBulb, IoList } from 'react-icons/io5'
import { PiBookOpenTextLight } from "react-icons/pi";

const CardData = [
    {
        id: 1,
        icon: IoTrendingUp,
        title: "Crecimiento sostenible",
        highlight: "+23% de crecimiento en ventas:",
        desc: "mayor expansión impulsada por decisiones basadas en datos.",
        aos: "fade-up",
        duration: "600",
        delay: 0
    },
    {
        id: 2,
        icon: PiBookOpenTextLight,
        title: "Eficiencia financiera",
        highlight: "+19% en rentabilidad:",
        desc: "menos costos, mejores márgenes y uso inteligente del capital.",
        aos: "fade-right",
        duration: "800",
        delay: 100
    },
    {
        id: 3,
        icon: IoPeople,
        title: "Fidelidad fortalecida",
        highlight: "2.5x mayor retención:",
        desc: "Clientes más satisfechos, más leales y más recurrentes.",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        id: 4,
        icon: IoBulb,
        title: "Agilidad estratégica",
        highlight: "3x más velocidad:",
        desc: "Decisiones rápidas, precisas y mejor sincronizadas con el negocio.",
        aos: "fade-left",
        duration: "800",
        delay: 300
    },
    {
        id: 5,
        icon: IoList,
        title: "Impacto comprobado",
        highlight: "5–10x más ROI:",
        desc: "Proyectos de IA y analítica que generan valor real y medible.",
        aos: "fade-up",
        duration: "1000",
        delay: 400
    }
];

const AboutSection = () => {
    return (
        <section className="relative py-20 flex flex-col items-center justify-center px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#343ec2]">

            {/* Benefits Content */}
            <div className="max-w-[1200px] mt-20">
                <h2 data-aos="fade-right" data-aos-duration="800" className="text-center text-white font-bold text-[32px] leading-[38px] md:text-4xl lg:text-[48px] sm:leading-[56px] mb-12">
                    <span className="font-bold text-blue-400">Data-driven:&nbsp;</span>
                    <span className="text-[18px] sm:text-[20px] md:text-4xl lg:text-[34px]">la ventaja competitiva del futuro</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {CardData.map((card) => {
                        const IconComponent = card.icon;
                        return (
                            <div
                                key={card.id}
                                data-aos={card.aos}
                                data-aos-duration={card.duration}
                                data-aos-delay={card.delay}
                                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:bg-white/20 group"
                            >
                                <div className="w-2/5 mb-4">
                                    <IconComponent size={40} className="text-white animate-pulse-scale group-hover:animate-none group-hover:rotate-360 transition-transform duration-700" />
                                </div>
                                <h3 className="text-white font-Manrope font-semibold text-xl mb-2">{card.title}</h3>
                                <p className="text-white/80 font-Manrope text-sm">
                                    <strong className='text-md text-[16px] text-white'>{card.highlight}</strong> {card.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutSection;

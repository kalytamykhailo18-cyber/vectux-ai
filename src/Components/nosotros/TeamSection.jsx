"use client"
import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa"

const teamMembers = [
    {
        name: "Ana Mireya López",
        role: "CEO, MBA",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220965/vectux-academy/assets/Ana.png",
        linkedin: "https://www.linkedin.com/in/ana-mireya-lopez/",
        description: "+21 años de experiencia gerencial en finanzas, planificación estratégica, planificación de negocios y analítica avanzada en empresas multinacionales como Dell, Microsoft, Megablocks, General Electric, Thermo Fisher y Ericsson Telecom.",
        credentials: "Certificado en Diseño y Desarrollo de Productos de Inteligencia Artificial, MIT MBA, IPADE Business School.",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        name: "Gerzo Morales Gallardo",
        role: "CAO, Director de Analítica y Fundador",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221239/vectux-academy/assets/Gerzo.png",
        linkedin: "https://www.linkedin.com/in/gerzogallardo/",
        description: "Más de 300 proyectos de analítica avanzada e inteligencia artificial, ex socio en MetricArts (adquirida por EY), fundador del Instituto de Ciencia de Datos. Asesor del FMI y Banco Mundial, profesor de Inteligencia de Negocios, IA y Marketing Analytics en INCAE.",
        credentials: "Ciencia de Datos y Big Data, MIT Maestría; Métodos Estadísticos, Universidad de La Rioja",
        aos: "fade-left",
        duration: "800",
        delay: 100
    },
    {
        name: "Horacio Sepúlveda",
        role: "Director Asociado de Ventas y Promoción IPADE Business School",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221266/vectux-academy/assets/horacio.png",
        linkedin: "https://www.linkedin.com/in/hsepulv/",
        description: "+30 años de experiencia profesional y +24 años de experiencia gerencial en empresas transnacionales como P&G, Unilever y América Móvil. Creador de múltiples productos y soluciones para el negocio de telecomunicaciones e integrador de grandes equipos de trabajo.",
        credentials: "Ingeniero Químico de la Universidad La Salle, MBA con honores de la Universidad Internacional de La Rioja, y certificado en el programa de desarrollo gerencial D-1 por IPADE Business School.",
        aos: "fade-right",
        duration: "1000",
        delay: 200
    },
    {
        name: "Luis Fernando González Lara",
        role: "Maestro, colaborador",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221316/vectux-academy/assets/Luis.png",
        linkedin: "https://www.linkedin.com/in/luisfernandogonzalezlara/",
        description: "10+ años de experiencia en análisis de datos e inteligencia de negocios en empresas como AstraZeneca, Coca Cola y Femsa. Actualmente es el Líder de Commercial Insights & Advanced Analytics para Johnson & Johnson.",
        credentials: "Licenciatura en Ingeniería en Computación, especializado en Análisis de Datos e Inteligencia de Negocios, certificado en Tableau y Power BI. Egresado del Instituto Politécnico Nacional (UPIICSA).",
        aos: "fade-left",
        duration: "800",
        delay: 300
    },
    {
        name: "Francisco Vargas Esparza",
        role: "Director de Datos, colaborador",
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221219/vectux-academy/assets/Francisco.png",
        linkedin: "https://www.linkedin.com/in/fvargase/",
        description: "13+ años de experiencia en Inteligencia de Negocios, Analítica Avanzada y Ciencia de Datos en empresas como Santander, Accenture y Grupo Bimbo. Actualmente es Director de Datos en BimboNet, liderando proyectos en Gobernanza de Datos, BI e infraestructura en la nube.",
        credentials: "Egresado en ciencias actuariales de la Universidad Anáhuac, con Diplomado en Ingeniería de Negocios del ITAM.",
        aos: "fade-right",
        duration: "1000",
        delay: 400
    }
]

const TeamSection = () => {
    return (
        <section id="team-vectux" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#343ec2]">
            <div className="max-w-[1200px] mx-auto">
                <h2
                    data-aos="fade-up"
                    className="text-[#fa0] font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] text-center mb-16"
                >
                    Conoce a nuestro equipo.
                </h2>

                <div className="space-y-12">
                    {teamMembers.map((member, index) => (
                        <a
                            key={index}
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-aos={member.aos}
                            data-aos-duration={member.duration}
                            data-aos-delay={member.delay}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 p-16 rounded-[16px] border border-[#e3e3e330] bg-black/20 backdrop-blur-sm cursor-pointer hover:border-[#4cc9f0] hover:bg-black/30 transition-all duration-300 group`}
                        >
                            {/* Image */}
                            <div className="w-[200px] h-[200px] flex-shrink-0">
                                <div className="relative w-full h-full rounded-full overflow-hidden hover:border-1 border-transparent group-hover:border-[#4cc9f0] transition-all duration-300">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        unoptimized
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-white font-bold text-[24px] mb-1 group-hover:text-[#4cc9f0] transition-colors duration-300">
                                    {member.name}
                                </h3>
                                <p className="text-[#4cc9f0] font-Manrope font-semibold text-[14px] uppercase tracking-[1px] mb-4">
                                    {member.role}
                                </p>
                                <p className="text-white/80 font-Manrope text-[15px] leading-[26px] mb-3">
                                    {member.description}
                                </p>
                                <p className="text-white font-Manrope font-semibold text-[14px] leading-[24px]">
                                    {member.credentials}
                                </p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TeamSection

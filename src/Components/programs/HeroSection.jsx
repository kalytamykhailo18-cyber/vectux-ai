'use client';
import React from 'react';

const HeroSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.querySelector(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className="relative min-h-screen pb-52 pt-36 w-full flex justify-center items-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="https://res.cloudinary.com/dcfjvxt5h/video/upload/v1765231165/vectux-academy/video/2.mp4" type="video/mp4" />
            </video>

            {/* Color Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(52,62,194,0.6)_0%,rgba(52,62,194,0.8)_50%,rgba(58,64,197,0.9)_100%)]" />

            <div className="relative z-30 flex flex-col items-center justify-center text-center gap-10 h-full px-4">
                <h1 className="text-white font-semibold text-[37px] sm:text-[42px] md:text-5xl lg:text-[72px] leading-tight">
                    <span
                        data-aos="fade-down"
                        data-aos-duration="800"
                        data-aos-delay="200"
                        className="font-bold text-blue-500 inline-block"
                    >
                        Desbloquea
                    </span>
                    <div
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-delay="400"
                        className="text-[18px] sm:text-[20px] md:text-4xl lg:text-[34px]"
                    >
                        el poder de la IA
                    </div>
                </h1>
                <div
                    data-aos="zoom-in"
                    data-aos-duration="600"
                    data-aos-delay="600"
                    className="flex flex-col mt-5 md:flex-row space-y-4 md:space-y-0 md:space-x-4"
                >
                    <button
                        onClick={() => scrollToSection('#section-tickets')}
                        className="bg-[#fa0] font-Manrope uppercase hover:bg-[#e80] transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
                    >
                        Más información
                    </button>
                </div>
                <h1
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="800"
                    className="text-white font-semibold text-[27px] sm:text-[32px] uppercase md:text-2xl lg:text-[54px] mb-3 leading-tight"
                >
                    Formamos Organizaciones Data Driven
                </h1>
                <p
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="1000"
                    className="text-white text-center font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[28px] w-full sm:w-[70%] md:w-[50%]"
                >
                    En Vectux Academy, impartimos certificaciones y cursos de inteligencia artificial y analítica avanzada para empresas, con formación de alto impacto liderada por expertos certificados de prestigiosas instituciones como el MIT, Harvard, Kellogg, IPADE, ITAM y la Universidad Católica de Chile. Una combinación de excelencia académica y experiencia práctica adaptada a las necesidades de tu negocio.
                </p>
            </div>

            {/* Bottom Gradient - blends with AboutSection */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_#343ec2_0%,_transparent_100%)]" />
        </section>
    );
};

export default HeroSection;

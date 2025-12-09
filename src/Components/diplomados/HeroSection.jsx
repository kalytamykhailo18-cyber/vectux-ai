"use client"
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const HeroSection = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://res.cloudinary.com/dcfjvxt5h/video/upload/v1765231165/vectux-academy/video/2.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#4895ef80,#343ec2a0,#8d4aeda0)]" />

            {/* Network Particles */}
            <Particles
                id="tsparticles-network-diplomados"
                init={particlesInit}
                className="absolute inset-0 z-[5]"
                options={{
                    fullScreen: false,
                    background: {
                        color: { value: "transparent" },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: { value: "#ffffff" },
                        links: {
                            color: "#ffffff",
                            distance: 150,
                            enable: true,
                            opacity: 0.3,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 0.4,
                            direction: "none",
                            outModes: { default: "bounce" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 50,
                        },
                        opacity: { value: 0.5 },
                        shape: { type: "circle" },
                        size: { value: { min: 1, max: 3 } },
                    },
                    interactivity: {
                        events: {
                            onHover: { enable: true, mode: "grab" },
                            onClick: { enable: true, mode: "push" },
                        },
                        modes: {
                            grab: { distance: 140, links: { opacity: 0.5 } },
                            push: { quantity: 4 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Snowflake Particles */}
            <Particles
                id="tsparticles-snow-diplomados"
                init={particlesInit}
                className="absolute inset-0 z-[6]"
                options={{
                    fullScreen: false,
                    background: {
                        color: { value: "transparent" },
                    },
                    fpsLimit: 60,
                    particles: {
                        color: { value: ["#ffffff", "#e0f7ff", "#c9eeff"] },
                        move: {
                            enable: true,
                            speed: { min: 0.3, max: 1 },
                            direction: "bottom",
                            random: true,
                            straight: false,
                            outModes: { default: "out" },
                        },
                        number: {
                            density: { enable: true, area: 800 },
                            value: 30,
                        },
                        opacity: {
                            value: { min: 0.2, max: 0.6 },
                            animation: {
                                enable: true,
                                speed: 0.8,
                                minimumValue: 0.1,
                                sync: false,
                            },
                        },
                        shape: { type: "star" },
                        size: {
                            value: { min: 1, max: 4 },
                            animation: {
                                enable: true,
                                speed: 2,
                                minimumValue: 0.5,
                                sync: false,
                            },
                        },
                        twinkle: {
                            particles: {
                                enable: true,
                                frequency: 0.1,
                                opacity: 1,
                            },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-[1200px] px-8 sm:px-14 py-20 text-white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Block 1 */}
                    <div data-aos="fade-right" data-aos-duration="800">
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-[48px] leading-[40px] sm:leading-[55px] mb-6">
                            Prepárate para liderar en la era de los datos.
                        </h1>
                        <p className="font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px]">
                            Transforma tu carrera con analítica, inteligencia artificial y habilidades de storytelling.
                        </p>
                    </div>

                    {/* Block 2 */}
                    <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-[40px] leading-[35px] sm:leading-[50px] mb-6">
                            Diplomados ejecutivos para líderes que toman decisiones, no excusas.
                        </h2>
                        <p className="font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px]">
                            Aprende a usar la analítica como tu ventaja competitiva en la era digital.
                        </p>
                    </div>
                </div>

                {/* Contact Button */}
                <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="400" className="mt-12 text-center">
                    <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[14px] tracking-[1.3px] px-8 py-3.5 rounded-md select-none">
                        Contactar
                    </button>
                </div>
            </div>

            {/* Bottom Gradient Blur */}
            <div className="absolute -bottom-28 -left-20 w-[140%] h-[20%] z-20 bg-gradient-to-b blur-2xl from-[#343ec2] to-[#343ec2]" />
        </section>
    )
}

export default HeroSection

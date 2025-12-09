"use client"
import React, { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'

const HeroSection = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine)
    }, [])

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#4895ef] via-[#343ec2] to-[#343ec2]">

            {/* Network Particles */}
            <Particles
                id="tsparticles-network"
                init={particlesInit}
                className="absolute inset-0 z-[5]"
                options={{
                    fullScreen: false,
                    background: {
                        color: { value: "transparent" },
                    },
                    fpsLimit: 60,
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                area: 962,
                            },
                        },
                        color: { value: "#fff" },
                        shape: { type: "circle" },
                        opacity: { value: 0.1 },
                        size: {
                            value: { min: 1, max: 3 },
                            random: true,
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.1,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: { default: "out" },
                            bounce: false,
                        },
                    },
                    interactivity: {
                        detectsOn: "window",
                        events: {
                            onHover: { enable: true, mode: "attract" },
                            onClick: { enable: true, mode: "push" },
                            resize: true,
                        },
                        modes: {
                            attract: {
                                distance: 200,
                                duration: 0.1,
                                easing: "ease-out-quad",
                                factor: 1,
                                maxSpeed: 50,
                                speed: 10,
                            },
                            push: { quantity: 10 },
                            remove: { quantity: 8 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {/* Snowflake Particles */}
            <Particles
                id="tsparticles-snow"
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
                            value: 100,
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
                            value: { min: 1, max: 3 },
                            animation: {
                                enable: true,
                                speed: 1,
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
            <div className="relative z-10 max-w-[1200px] text-center px-8 sm:px-14">
                <h1 data-aos="fade-up" className="text-white font-bold text-4xl md:text-5xl lg:text-[56px] leading-[50px] sm:leading-[65px]">
                    Cursos y Diplomados
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className="text-white font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mt-6 max-w-[800px] mx-auto">
                    Descubre nuestra oferta académica en inteligencia artificial, analítica de datos y habilidades del futuro.
                </p>
            </div>

            {/* Bottom Gradient Blur */}
            <div className="absolute -bottom-28 -left-20 w-[140%] h-[20%] z-20 bg-gradient-to-b blur-2xl from-[#343ec2] to-[#343ec2]" />
        </section>
    )
}

export default HeroSection

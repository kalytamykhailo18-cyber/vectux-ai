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
            {/* Background Image */}
            <div
                className="absolute inset-0 w-full h-full"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221003/vectux-academy/assets/bg-3.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#4895ef80,#343ec2a0,#8d4aeda0)]" />

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
                            value: 197,
                            density: {
                                enable: true,
                                area: 962,
                            },
                        },
                        color: { value: "#aaa" },
                        shape: { type: "circle" },
                        opacity: { value: 0.5 },
                        size: {
                            value: { min: 1, max: 3 },
                            random: true,
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#ffffff",
                            opacity: 0.4,
                            width: 1,
                        },
                        move: {
                            enable: true,
                            speed: 6,
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
                            onHover: { enable: true, mode: "repulse" },
                            onClick: { enable: true, mode: "push" },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 400,
                                links: { opacity: 1 },
                            },
                            bubble: {
                                distance: 400,
                                size: 40,
                                duration: 2,
                                opacity: 0.8,
                                speed: 3,
                            },
                            repulse: {
                                distance: 150,
                                duration: 0.4,
                            },
                            push: { quantity: 4 },
                            remove: { quantity: 2 },
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

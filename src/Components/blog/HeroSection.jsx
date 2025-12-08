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
                    backgroundImage: "url('https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220995/vectux-academy/assets/bg-2.webp')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(180deg,#4895ef80,#343ec2a0,#8d4aeda0)]" />

            {/* Network Particles */}
            <Particles
                id="tsparticles-blog-network"
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
                id="tsparticles-blog-snow"
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
            <div className="relative z-10 max-w-[1200px] text-center px-8 sm:px-14">
                <h1 data-aos="fade-up" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-[56px] leading-[50px] sm:leading-[65px]">
                    Blog
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className="text-white/80 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mt-6 max-w-[800px] mx-auto">
                    Articles, news and resources on artificial intelligence, data analytics and technology trends.
                </p>
            </div>

            {/* Bottom Gradient Blur */}
            <div className="absolute -bottom-28 -left-20 w-[140%] h-[20%] z-20 bg-gradient-to-b blur-2xl from-[#343ec2] to-[#343ec2]" />
        </section>
    )
}

export default HeroSection

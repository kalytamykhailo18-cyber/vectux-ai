"use client"
import React from 'react'

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="https://res.cloudinary.com/dcfjvxt5h/video/upload/v1765223665/vectux-academy/video/videovectux.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,#4895ef80,#343ec2a0,#8d4aeda0)]" /> */}

            {/* Content */}
            <div className="relative z-10 max-w-[1200px] text-center px-8 sm:px-14 py-12 bg-black/20 backdrop-blur-sm rounded-[16px]">
                <h1 data-aos="fade-up" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-[56px] leading-[50px] sm:leading-[65px]">
                    About Us
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className="text-white/80 font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mt-6 max-w-[800px] mx-auto">
                    Meet the team of experts leading digital transformation and artificial intelligence training.
                </p>
            </div>

            {/* Bottom Gradient Blur */}
            <div className="absolute -bottom-28 -left-20 w-[140%] h-[20%] z-20 bg-gradient-to-b blur-2xl from-[#343ec2] to-[#343ec2]" />
        </section>
    )
}

export default HeroSection

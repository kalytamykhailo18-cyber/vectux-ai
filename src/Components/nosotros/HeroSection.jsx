"use client"
import React from 'react'
import Image from 'next/image'

const bgImage = "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1766306965/f8537d04-d90d-46cf-83f9-1bd491b17074.png"

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-end overflow-hidden">
            {/* Background Image */}
            <Image
                src={bgImage}
                alt="Nosotros Background"
                fill
                unoptimized
                className="object-cover"
                priority
            />

            {/* Content */}
            <div className="relative z-10 max-w-[500px] text-center mr-40">
                <h1 data-aos="fade-up" className="text-white font-bold text-4xl md:text-5xl lg:text-[56px] leading-[50px] sm:leading-[65px]">
                    Sobre Nosotros
                </h1>
                <p data-aos="fade-up" data-aos-delay="300" className="text-white font-Manrope text-[16px] sm:text-[18px] font-[500] leading-[30px] mt-6 max-w-[800px] mx-auto">
                    Conoce al equipo de expertos que lidera la transformación digital y la formación en inteligencia artificial.
                </p>
            </div>

            {/* Bottom Gradient - seamless blend into WhoIs */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] z-20 bg-gradient-to-t from-[#343ec2] via-[#343ec2]/80 to-transparent" />
        </section>
    )
}

export default HeroSection

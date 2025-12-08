'use client';
import React from 'react';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen pb-52 pt-36 w-full flex justify-center items-center overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="/video/2.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,#4895ef60,#343ec280,#8d4aed90)]" />

            <div data-aos="zoom-out" data-aos-duration="2000" data-aos-delay="1000" className="relative z-30 flex flex-col items-center justify-center text-center gap-2 sm:gap-0 h-full px-4">
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-[37px] sm:text-[42px] md:text-5xl lg:text-[72px] mb-3 leading-tight">
                    <span className="font-bold text-blue-500">Unlock</span>
                    <div className="text-[18px] sm:text-[20px] md:text-4xl lg:text-[34px]">the power of AI</div>
                </h1>
                <div className="flex flex-col mt-5 md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <a
                        href="#section-tickets"
                        className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none"
                    >
                        Más información
                    </a>
                </div>
                <h1 className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-semibold text-[27px] sm:text-[32px] uppercase md:text-2xl lg:text-[54px] mb-3 leading-tight">
                    Formamos Organizaciones Data Driven
                </h1>
            </div>

            {/* Bottom Gradient Blur - blends with Marquee */}
            <div className="absolute -bottom-28 -left-20 w-[140%] h-[20%] z-50 bg-gradient-to-b blur-2xl from-[#4895ef] to-[#4895ef]" />
        </section>
    );
};

export default HeroSection;

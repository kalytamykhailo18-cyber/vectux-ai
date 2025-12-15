"use client"
import Image from 'next/image';
import React from 'react';

const heroData = {
  backgroundImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765529687/bussiness-2_hpheyc.jpg"
}

const HeroSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div
      className="relative overflow-hidden bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${heroData.backgroundImage})` }}
    >
      {/* Color Overlay - Blue */}
      <div className="absolute inset-0 bg-[#4895ef]/75" />

      {/* Bottom Gradient - transition to Lecture (Cyan-Blue) */}
      <div className="absolute bottom-[-100px] left-0 w-full h-[200px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#4cc9f0_50%,_transparent_100%)]" />

      <section className='relative min-h-screen flex items-center px-8 sm:px-14 min-[860px]:!px-10 lg:!px-14 py-20 z-20'>
        <div className='grid grid-cols-1 min-[860px]:grid-cols-2 place-content-center gap-12 sm:gap-8 max-w-[1200px] mx-auto w-full'>
          {/* Text Content */}
          <div className='flex flex-col justify-center items-center gap-6 order-2 min-[860px]:order-1'>
            <p data-aos="fade-up" className="text-white font-Manrope text-center font-semibold text-lg md:text-[15px] tracking-[0.2px]">
              <span className='text-skyBlue'>{"["}</span> Para profesionistas no-técnicos que quieren liderar la era de la IA. <span className='text-skyBlue'>{"]"}</span>
            </p>
            <h1 data-aos="fade-up" data-aos-delay="300" className="text-center text-white font-bold text-4xl leading-[45px] md:text-5xl lg:text-[56px] sm:leading-[64px]">
              Deja de intuir, empieza a predecir.
            </h1>
            <p data-aos="fade-up" data-aos-delay="500" className='text-center text-[#fff] font-Manrope text-[18px] sm:text-[20px] font-[500] leading-[30px] w-full sm:w-[95%]'>
              Domina Business Analytics e IA sin ser ingeniero o programador.
            </p>
            <div data-aos="fade-up" data-aos-delay="600" className="mt-4">
              <button
                onClick={() => scrollToSection('#section-tickets')}
                className="bg-skyBlue w-max font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none cursor-pointer"
              >
                Contáctanos
              </button>
            </div>
          </div>

          {/* Image */}
          <div data-aos="big-zoom" data-aos-duration="2000" className='flex justify-center items-center order-1 min-[860px]:order-2'>
            <Image
              src="https://res.cloudinary.com/dcfjvxt5h/image/upload/f_auto,q_auto,w_450/v1765414817/c1_nlnzf2.webp"
              alt="Logo"
              width={450}
              height={450}
              priority
              unoptimized
              className="rotate w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[450px] lg:h-[450px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;

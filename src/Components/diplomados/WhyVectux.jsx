"use client"
import Image from 'next/image'

const WhyVectux = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#343ec2] via-[#5a3db8] to-[#8d4aed]">
            <div className="grid grid-cols-1 min-[1100px]:grid-cols-4 gap-8 lg:gap-12 max-w-[1200px] lg:max-w-[1400px] mx-auto">
                {/* Left Text */}
                    <p className="text-white/90 font-Manrope font-[600] text-[16px] sm:text-[18px] leading-[28px] text-center min-[1100px]:text-left">
                        No estamos aquí solo para enseñarte a usar datos. Estamos aquí para ayudarte a seguir siendo relevante en la era de la Inteligencia Artificial.<br /><br />
                        <span className="text-[#4cc9f0] text-[14px] sm:text-[15px]">Academia Vectux...</span><br />
                        <span className="text-[14px] sm:text-[15px]">tu salto hacia la analítica avanzada e inteligencia artificial.</span>
                    </p>

                {/* Center Image */}
                <div data-aos="fade-up" data-aos-duration="800" className="flex justify-center min-[1100px]:col-span-2">
                    <Image
                        src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765418747/Ana-1-fotor-20251209234527_dmami0.png"
                        alt="Ana Mireya López - Fundadora & CEO Vectux Academy"
                        width={400}
                        height={350}
                        unoptimized
                        className="w-full h-auto object-cover rounded-tr-[72px] rounded-bl-[72px]"
                        style={{ maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)' }}
                    />
                </div>

                {/* Right Quote */}
                <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="200" className="p-6 relative">
                    <span className="text-[#4cc9f0] text-4xl font-serif absolute top-2 left-3">"</span>
                    <p className="pt-4 text-white/90 font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[26px] mb-4 italic text-center min-[1100px]:text-right">
                        Quiero ayudarte a pensar con claridad en la era digital y a tomar decisiones con visión.
                    </p>
                    <p className="text-white/90 font-Manrope text-[15px] sm:text-[16px] font-[500] leading-[26px] mb-4 italic text-center min-[1100px]:text-right">
                        Que tengas las herramientas de analítica, modelos predictivos con inteligencia artificial y storytelling para liderar, influir y adaptarte a un mundo que ya cambió.
                    </p>
                    <span className="text-[#4cc9f0] flex justify-end text-4xl font-serif">"</span>
                    <p className="mt-4 text-[#4cc9f0] font-Manrope font-[700] text-[15px] text-center min-[1100px]:text-right">
                        — Ana Mireya López
                    </p>
                    <p className="text-white/60 font-Manrope text-[13px] mt-1 text-center min-[1100px]:text-right">
                        Fundadora & CEO Vectux Academy
                    </p>
                </div>
            </div>

            <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#8d4aed] blur-xl" />
        </section>
    )
}

export default WhyVectux

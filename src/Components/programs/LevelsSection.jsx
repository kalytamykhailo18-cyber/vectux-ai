import Image from 'next/image'
import React from 'react'

const LevelsData = [
    {
        id: 1,
        bgImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220972/vectux-academy/assets/benefits1.jpg",
        cardImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220973/vectux-academy/assets/benefits1_card.jpg",
        alt: "benefit-card1",
        aos: "fade-right",
        duration: "800",
        delay: 0
    },
    {
        id: 2,
        bgImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220976/vectux-academy/assets/benefits2.jpg",
        cardImage: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220979/vectux-academy/assets/benefits2_card.jpg",
        alt: "benefit-card2",
        aos: "fade-left",
        duration: "800",
        delay: 100
    },
    {
        id: 3,
        bgImage: "/assets/benefits3.jpg",
        cardImage: "/assets/benefits3_card.jpg",
        alt: "benefit-card3",
        aos: "zoom-in",
        duration: "600",
        delay: 200
    },
    {
        id: 4,
        bgImage: "/assets/benefits4.jpg",
        cardImage: "/assets/benefits4_card.jpg",
        alt: "benefit-card4",
        aos: "fade-up",
        duration: "1000",
        delay: 300
    }
];

const LevelsSection = () => {
    return (
        <section className="flex flex-col justify-center items-center bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2] py-20 pb-32 px-7 md:px-10 min-[860px]:!px-16">
            <div className="max-w-[1200px]">
                <div className="flex flex-col justify-center items-center gap-3 text-center">
                    <h1 data-aos="zoom-in" data-aos-duration="800" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-[48px] leading-[56px]">
                        Generamos resultados de Alto Impacto
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="600" className="text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] md:w-[60%]">
                        No somos escuela, somos consultoria en IA con formacion aplicada.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-6 md:gap-10 place-content-center mt-10">
                    {LevelsData.map((item) => (
                        <div key={item.id} data-aos={item.aos} data-aos-duration={item.duration} data-aos-delay={item.delay} className="w-full">
                            <div className="relative border-[1px] border-[#aab] group w-full h-[320px] min-[860px]:!h-[370px] overflow-hidden rounded-[12px] cursor-pointer">
                                <Image
                                    alt={item.alt}
                                    width={570}
                                    height={600}
                                    src={item.bgImage}
                                    unoptimized
                                    className="w-full h-full object-cover rounded-[12px] transition-all duration-700 ease-out group-hover:scale-110 z-0"
                                />
                                <div className="absolute inset-0 bg-[#0000005d] blur-3xl shadow-inner-blue transition-all duration-500 group-hover:opacity-100 opacity-0" />
                                <div className="absolute left-1/2 w-[35%] max-w-[200px] rounded-xl shadow-lg transition-all duration-500 ease-out top-[10px] opacity-0 scale-75 group-hover:bottom-6 group-hover:opacity-100 group-hover:scale-100 transform -translate-x-1/2">
                                    <Image
                                        alt={item.alt}
                                        width={250}
                                        height={150}
                                        src={item.cardImage}
                                        unoptimized
                                        className="w-full h-auto rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default LevelsSection

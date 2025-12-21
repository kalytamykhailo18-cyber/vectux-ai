"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const TestimonialsData = [
    {
        id: 1,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221831/vectux-academy/assets/testimonial-1.jpg",
        quote: "La inteligencia artificial está avanzando rápidamente, y aunque ofrece una inmensa oportunidad, también plantea riesgos significativos. Si no se regula adecuadamente y se alinea con los valores humanos, la IA podría convertirse en una amenaza fundamental para la civilización.",
        author: "Elon Musk",
        role: "CEO, Tesla y SpaceX"
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1766305722/4364d424-c55f-48f3-83f2-442ae6849f21.png",
        quote: "El desarrollo de una inteligencia artificial completa podría significar el fin de la raza humana. Despegaría por sí sola y se rediseñaría a un ritmo cada vez mayor. Los humanos, limitados por la lenta evolución biológica, no podrían competir.",
        author: "Stephen Hawking",
        role: "Físico Teórico"
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1766305681/109eedd0-00db-4746-915d-8cc530e328e0.png",
        quote: "La IA es probablemente lo más importante en lo que la humanidad ha trabajado. Lo considero algo más profundo que la electricidad o el fuego. Cualquier tecnología lo suficientemente poderosa para ayudar también puede usarse para hacer daño.",
        author: "Sundar Pichai",
        role: "CEO, Google"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % TestimonialsData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % TestimonialsData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + TestimonialsData.length) % TestimonialsData.length);
    };

    return (
        <section
            id='bg_1'
            className="relative overflow-hidden px-8 sm:px-12 min-[860px]:px-20 py-20 min-[860px]:!py-40 flex justify-center flex-col items-center bg-cover bg-center bg-fixed"
        >
            {/* Color Overlay */}
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(69, 96, 212, 0.55) 0%, rgba(64, 88, 208, 0.5) 50%, rgba(58, 80, 204, 0.55) 100%)' }} />

            {/* Top Gradient - blend from Marquee */}
            <div className="absolute top-0 left-0 w-full h-[50%] z-10 bg-[linear-gradient(to_bottom,_#4560d4_20%,_transparent_60%)]" />

            {/* Bottom Gradient - blend into Letstalk */}
            <div className="absolute bottom-0 left-0 w-full h-[50%] z-10 bg-[linear-gradient(to_top,_#3a50cc_20%,_transparent_60%)]" />

            <div className="relative z-50 py-10 max-w-[1200px] w-full overflow-hidden">
                <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {TestimonialsData.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex flex-col min-[860px]:flex-row min-w-full"
                        >
                            <div className="relative sm:block sm:w-[50%] md:w-[42%] min-[860px]:!w-[32%] lg:!w-[36%]">
                                <div data-aos="img-gutter-only" data-aos-duration="1000">
                                    <Image
                                        alt={testimonial.author}
                                        width={310}
                                        height={450}
                                        src={testimonial.image}
                                        unoptimized
                                        className="rounded-[9px] w-[320px] sm:w-[360px]"
                                    />
                                </div>
                            </div>

                            <div className="min-[860px]:w-[64%] flex flex-col justify-center mt-8 min-[860px]:pl-10 min-[860px]:mt-0">
                                <p className="font-Manrope font-[700] text-[22.5px] leading-[33px] sm:text-[27px] min-[860px]:text-[32px] sm:leading-[37px] min-[860px]:leading-[48px] text-white">
                                    "{testimonial.quote}"
                                </p>
                                <h4 className="font-Manrope mt-5 text-[17.5px] text-white font-semibold">
                                    {testimonial.author}
                                </h4>
                                <p className="font-Manrope text-[14px] text-white/70">
                                    {testimonial.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-4 mt-8 min-[860px]:ml-[36%] min-[860px]:pl-10">
                    <button
                        onClick={prevSlide}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                        &#8249;
                    </button>
                    <div className="flex gap-2">
                        {TestimonialsData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                    index === currentIndex ? 'bg-[#fa0] w-6' : 'bg-white/40 hover:bg-white/60'
                                }`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white text-xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
                    >
                        &#8250;
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Testimonials

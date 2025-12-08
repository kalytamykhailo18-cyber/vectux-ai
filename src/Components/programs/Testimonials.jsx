"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const TestimonialsData = [
    {
        id: 1,
        image: "/assets/testimonial-1.jpg",
        quote: "Artificial intelligence is advancing rapidly, and while it offers immense opportunity, it also poses significant risks. If not properly regulated and aligned with human values, AI could become a fundamental threat to civilization.",
        author: "Elon Musk",
        role: "CEO, Tesla & SpaceX"
    },
    {
        id: 2,
        image: "/assets/testimonial-2.jpg",
        quote: "The development of full artificial intelligence could spell the end of the human race. It would take off on its own, and re-design itself at an ever increasing rate. Humans, who are limited by slow biological evolution, couldn't compete.",
        author: "Stephen Hawking",
        role: "Theoretical Physicist"
    },
    {
        id: 3,
        image: "/assets/testimonial-3.jpg",
        quote: "AI is probably the most important thing humanity has ever worked on. I think of it as something more profound than electricity or fire. Any technology that is powerful enough to help can also be used to harm.",
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
            {/* Top Gradient Blur - blends with Skills section */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />

            <div className="absolute inset-0 bg-black opacity-50 transition-all duration-500" />

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
                                <p className="font-Manrope font-[700] text-[22.5px] leading-[33px] sm:text-[27px] min-[860px]:text-[32px] sm:leading-[37px] min-[860px]:leading-[48px] bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent">
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
                                    index === currentIndex ? 'bg-skyBlue w-6' : 'bg-white/40 hover:bg-white/60'
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

            {/* Bottom Gradient Blur - blends with Letstalk section */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />
        </section>
    )
}

export default Testimonials

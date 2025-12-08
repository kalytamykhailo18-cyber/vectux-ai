"use client"
import Image from 'next/image'
import React from 'react'

const Letstalk = () => {
    return (
        <section className="bg-gradient-to-b from-[#8d4aed] via-[#5a3db8] to-[#343ec2] relative overflow-hidden flex justify-center px-7.5 sm:px-10 min-[860px]:px-16">
            <div className="py-16 sm:py-20 pt-28 flex flex-col min-[860px]:flex-row max-w-[1200px] w-full justify-center">
                <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-lg pr-4">
                    <h1 data-aos="fade-up" data-aos-duration="1500" className="text-white text-[42px] font-bold leading-tight mb-5">
                        Is your business ready for the age of Artificial Intelligence?
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="300" className="text-white text-lg lg:text-xl leading-relaxed mb-6 border-l-4 border-[#00acf4] pl-4">
                        Transforming culture, processes, and results begins with changing the way we train our teams.
                    </p>
                    <p data-aos="fade-up" data-aos-delay="600" className="text-white text-sm lg:text-base font-bold">
                        Vectux Academy | Decisions that transform
                    </p>
                </div>
                <div className="hidden min-[860px]:block w-0.5 bg-[#3e7ef5] mx-4" />
                <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-md pl-4">
                    <h2 data-aos="fade-up" data-aos-duration="1500" className="text-white text-2xl lg:text-3xl font-bold mb-1">
                        Let's talk.
                    </h2>
                    <div data-aos="fade-up" data-aos-delay="300" className="text-white mb-2">
                        <h3 className="text-xl lg:text-2xl font-bold">
                            Mercedes Paez
                        </h3>
                        <p className="text-sm lg:text-base mb-1">
                            Head of Growth and Strategic Partnerships
                        </p>
                        <p className="text-sm lg:text-base mb-1">
                            mpaez@vectuxanalytics.com
                        </p>
                        <p className="text-sm lg:text-base">
                            +52 56 1195-5405
                        </p>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col p-1">
                        <Image
                            alt="QR Code"
                            width={128}
                            height={128}
                            src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221777/vectux-academy/assets/qrcode.jpg"
                            unoptimized
                            className="mb-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Letstalk

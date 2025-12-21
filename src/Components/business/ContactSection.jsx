"use client"
import React from 'react'
import Image from 'next/image'
import { FaWhatsapp } from 'react-icons/fa'

const contactData = {
    title: "Prepárate para los próximos 3 años.",
    text: "Si no lideras con datos, alguien más lo hará.",
    subtitle: "Piensa, actúa y decide con datos.",
    contactTitle: "Hablemos.",
    name: "Mercedes Paez",
    position: "Directora de Crecimiento y Alianzas Estratégicas",
    email: "mpaez@vectuxanalytics.com",
    phone: "+52 56 1195-5405",
    qrCode: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221777/vectux-academy/assets/qrcode.jpg"
}

const ContactSection = () => {
    return (
        <section id="contact" className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #3a50cc 0%, #3745c8 35%, #343ec2 65%, #343ec2 100%)' }}>
            {/* Top gradient boundary */}
            <div className="absolute top-0 left-0 w-full h-[200px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#3a50cc_50%,_transparent_100%)]" />

            <div className="relative z-20 max-w-[1200px] mx-auto px-8 sm:px-14 py-20 md:py-28">
                <div className="flex flex-col min-[860px]:flex-row gap-8">
                    {/* Left Content */}
                    <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-lg">
                        <h2 data-aos="fade-up" data-aos-duration="1500" className="text-white text-[42px] font-bold leading-tight mb-5">
                            {contactData.title}
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="300" className="text-white text-lg lg:text-xl leading-relaxed mb-6 border-l-4 border-[#ffaa00] pl-4">
                            {contactData.text}
                        </p>
                        <p data-aos="fade-up" data-aos-delay="600" className="text-[#4cc9f0] text-2xl lg:text-3xl font-bold">
                            {contactData.subtitle}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden min-[860px]:block w-0.5 bg-[#4cc9f0] mx-4" />

                    {/* Right Content */}
                    <div className="min-[860px]:w-1/2 flex flex-col justify-center max-w-md">
                        <h2 data-aos="fade-up" data-aos-duration="1500" className="text-white text-2xl lg:text-3xl font-bold mb-4">
                            {contactData.contactTitle}
                        </h2>
                        <div data-aos="fade-up" data-aos-delay="300" className="text-white mb-4">
                            <h3 className="text-xl lg:text-2xl font-bold">
                                {contactData.name}
                            </h3>
                            <p className="text-sm lg:text-base mb-1">
                                {contactData.position}
                            </p>
                            <p className="text-sm lg:text-base mb-1">
                                {contactData.email}
                            </p>
                            <p className="text-sm lg:text-base flex items-center gap-2">
                                <FaWhatsapp className="bg-[#25D366] text-white w-7 h-7 p-[2px] rounded-[3px]" />
                                {contactData.phone}
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" className="flex flex-col bg-white p-3 rounded-[12px]">
                            <Image
                                alt="QR Code"
                                width={128}
                                height={128}
                                src={contactData.qrCode}
                                unoptimized
                                className="mb-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection

"use client"
import React from 'react'

const requestData = {
    title: "Solicita Información Personalizada",
    description: "Déjanos tus datos y un asesor académico te contactará en menos de 24 horas.",
    buttonText: "¡Quiero más información!",
    email: "mpaez@vectuxanalytics.com",
    subject: "Información People Analytics"
}

const Request = () => {
    return (
        <section className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#02c] via-[#1a1a6e] to-[#0a0a1a]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h2 data-aos="fade-up" className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] mb-6">
                        {requestData.title}
                    </h2>
                    <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 font-Manrope text-[16px] md:text-[18px] leading-[28px] max-w-[600px] mb-8">
                        {requestData.description}
                    </p>
                    <a
                        data-aos="fade-up"
                        data-aos-delay="200"
                        href={`mailto:${requestData.email}?subject=${encodeURIComponent(requestData.subject)}`}
                        className="bg-[#4cc9f0] hover:bg-[#3ab8df] text-[#0a0a1a] font-Manrope font-bold text-[13px] uppercase tracking-[1.5px] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#4cc9f0]/30"
                    >
                        {requestData.buttonText}
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Request

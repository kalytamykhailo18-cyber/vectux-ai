"use client"
import React from 'react'
import Link from 'next/link'

const ctaData = {
    title: "Descubre nuestros programas",
    buttonText: "Ver programas",
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221023/vectux-academy/assets/bg-6.webp",
    link: "/cursos"
}

const BlogCTA = () => {
    return (
        <section
            className="relative overflow-hidden px-8 sm:px-14 py-20 md:py-28 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url('${ctaData.image}')` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black opacity-50" />

            {/* Top Gradient - blends with Blogs section */}
            <div className="absolute top-0 left-0 w-full h-[600px] z-10 -translate-y-1/2 bg-[linear-gradient(to_top,_transparent_0%,_#8d4aed_50%,_transparent_100%)]" />

            <div className="max-w-[1200px] mx-auto relative z-20">
                {/* Content */}
                <div data-aos="fade-up" className="text-center py-16">
                    <h2 className="text-white font-bold text-[28px] md:text-4xl lg:text-[42px] leading-[40px] md:leading-[50px] mb-6">
                        {ctaData.title}
                    </h2>
                    <Link
                        href={ctaData.link}
                        className="inline-block bg-[#4cc9f0] hover:bg-[#3ab8df] text-[#0a0a1a] font-Manrope font-bold text-[13px] uppercase tracking-[1px] px-8 py-4 rounded-full transition-all duration-300"
                    >
                        {ctaData.buttonText}
                    </Link>
                </div>
            </div>

            {/* Bottom Gradient - blends with Footer */}
            <div className="absolute bottom-[-300px] left-0 w-full h-[600px] z-10 bg-[linear-gradient(to_top,_transparent_0%,_#343ec2_50%,_transparent_100%)]" />
        </section>
    )
}

export default BlogCTA

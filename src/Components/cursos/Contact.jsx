"use client"
import React, { useState } from 'react'
import Image from 'next/image'

const contactData = {
    title: "Empower your team!",
    description: "Contact us today to learn about our programs and how we can boost your company's operations.",
    image: "https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765220951/vectux-academy/assets/aibusiness.webp"
}

const formFields = [
    { name: "name", label: "Name", type: "text", placeholder: "Name", required: true, colSpan: "half" },
    { name: "lastName", label: "Last name", type: "text", placeholder: "Last name", required: true, colSpan: "half" },
    { name: "email", label: "E-mail", type: "email", placeholder: "E-mail", required: true, colSpan: "half" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "Phone", required: true, colSpan: "half" },
    { name: "company", label: "Company", type: "text", placeholder: "Company", required: false, colSpan: "half" },
    { name: "position", label: "Position", type: "text", placeholder: "Position", required: false, colSpan: "half" },
    { name: "message", label: "Message", type: "textarea", placeholder: "Write your message here", required: false, colSpan: "full" }
]

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        position: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <section id="contact" className="relative px-8 sm:px-14 py-20 md:py-28 bg-gradient-to-b from-[#0a0a1a] via-[#1a1a6e] to-[#343ec2]">
            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Column - Image and Text */}
                    <div className="flex flex-col">
                        <div data-aos="zoom-in" className="mb-8 overflow-hidden rounded-[16px]">
                            <Image
                                src={contactData.image}
                                alt="Empower your team"
                                width={800}
                                height={422}
                                unoptimized
                                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <h2 data-aos="fade-up" className="text-white font-bold text-[32px] md:text-4xl lg:text-[48px] leading-[40px] md:leading-[56px] mb-4">
                            {contactData.title}
                        </h2>
                        <p data-aos="fade-up" data-aos-delay="100" className="text-white/80 font-Manrope text-[16px] md:text-[18px] leading-[28px]">
                            {contactData.description}
                        </p>
                    </div>

                    {/* Right Column - Form */}
                    <div data-aos="fade-up" data-aos-delay="200">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {formFields.map((field, index) => (
                                    <div
                                        key={field.name}
                                        className={field.colSpan === "full" ? "md:col-span-2" : ""}
                                    >
                                        <label className="block text-white font-Manrope text-[14px] font-semibold mb-2">
                                            {field.label}
                                            {field.required && <span className="text-[#4cc9f0] ml-1">*</span>}
                                        </label>
                                        {field.type === "textarea" ? (
                                            <textarea
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                rows={4}
                                                className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white font-Manrope text-[15px] placeholder:text-white/50 focus:outline-none focus:border-[#4cc9f0] focus:bg-white/15 transition-all duration-300 resize-none"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                value={formData[field.name]}
                                                onChange={handleChange}
                                                placeholder={field.placeholder}
                                                required={field.required}
                                                className="w-full bg-white/10 border border-white/20 rounded-[8px] px-4 py-3 text-white font-Manrope text-[15px] placeholder:text-white/50 focus:outline-none focus:border-[#4cc9f0] focus:bg-white/15 transition-all duration-300"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#4cc9f0] hover:bg-[#3ab8df] text-[#0a0a1a] font-Manrope font-bold text-[14px] uppercase tracking-[1.5px] px-8 py-4 rounded-full transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#4cc9f0]/30 mt-6"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 border-t border-white/20"></div>
            </div>
        </section>
    )
}

export default Contact

"use client"
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { IoClose, IoCheckmarkCircle } from 'react-icons/io5'

const Modal = ({ isOpen, onClose, moduleData }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        if (isOpen) {
            document.addEventListener('keydown', handleEscape)
        }
        return () => document.removeEventListener('keydown', handleEscape)
    }, [isOpen, onClose])

    if (!isOpen || !moduleData || !mounted) return null

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/20 backdrop-blur-sm animate-fadeIn"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-3xl max-h-[80vh] overflow-y-auto mx-4 bg-[#0a1a2a]/70 backdrop-blur-md rounded-[16px] border border-[#4cc9f0]/30 shadow-2xl shadow-[#4cc9f0]/20 animate-modalSlideIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-white/50 hover:text-white transition-colors duration-300 cursor-pointer z-20"
                    aria-label="Close"
                >
                    <IoClose size={24} />
                </button>

                {/* Header */}
                <div className="px-6 pt-5 pb-0">
                    <span className="text-[#4cc9f0] font-Manrope font-semibold text-xs tracking-[2px] uppercase">
                        {moduleData.moduleLabel}
                    </span>
                    <h1 className="text-[#fa0] font-bold text-xl md:text-2xl mt-1 leading-tight">
                        {moduleData.title}
                    </h1>
                    <p className="text-white/60 font-Manrope text-xs mt-1">
                        {moduleData.duration}
                    </p>
                </div>

                {/* Content Sections */}
                <div className="px-6 py-5 space-y-5">
                    {/* Learning Objectives */}
                    {moduleData.learningObjectives && moduleData.learningObjectives.length > 0 && (
                        <div>
                            <h2 className="text-[#4cc9f0] font-bold text-base mb-2">
                                Objetivos de aprendizaje
                            </h2>
                            <ul className="space-y-1.5">
                                {moduleData.learningObjectives.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <IoCheckmarkCircle className="text-[#4cc9f0] flex-shrink-0 mt-0.5" size={16} />
                                        <span className="text-white/80 font-Manrope text-[13px] leading-snug">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Key Contents */}
                    {moduleData.keyContents && moduleData.keyContents.length > 0 && (
                        <div>
                            <h2 className="text-[#4cc9f0] font-bold text-base mb-2">
                                Contenidos clave
                            </h2>
                            <ul className="space-y-1.5">
                                {moduleData.keyContents.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <IoCheckmarkCircle className="text-[#4cc9f0] flex-shrink-0 mt-0.5" size={16} />
                                        <span className="text-white/80 font-Manrope text-[13px] leading-snug">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Practice */}
                    {moduleData.practice && moduleData.practice.length > 0 && (
                        <div>
                            <h2 className="text-[#4cc9f0] font-bold text-base mb-2">
                                Práctica
                            </h2>
                            <ul className="space-y-1.5">
                                {moduleData.practice.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <IoCheckmarkCircle className="text-[#4cc9f0] flex-shrink-0 mt-0.5" size={16} />
                                        <span className="text-white/80 font-Manrope text-[13px] leading-snug">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Deliverable */}
                    {moduleData.deliverable && moduleData.deliverable.length > 0 && (
                        <div>
                            <h2 className="text-[#4cc9f0] font-bold text-base mb-2">
                                Entregable
                            </h2>
                            <ul className="space-y-1.5">
                                {moduleData.deliverable.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <IoCheckmarkCircle className="text-[#4cc9f0] flex-shrink-0 mt-0.5" size={16} />
                                        <span className="text-white/80 font-Manrope text-[13px] leading-snug">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* CTA Button */}
                    <div className="pt-2">
                        <a
                            href={moduleData.ctaLink || "mailto:mpaez@vectuxanalytics.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-skyBlue hover:bg-sky-700 transition-all duration-300 text-white font-Manrope font-bold text-xs tracking-[1px] uppercase px-6 py-3 rounded-full"
                        >
                            {moduleData.ctaText || "Inscríbete ahora"}
                        </a>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Modal

import React from "react"
import Image from "next/image"

const Mqrcode = () => {
    return (
        <div
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-delay="400"
            className="flex items-center gap-6"
        >
            <div className="bg-white p-2 rounded-[12px]">
                <Image
                    src="https://res.cloudinary.com/dcfjvxt5h/image/upload/v1765221777/vectux-academy/assets/qrcode.jpg"
                    alt="QR Code - Contacto"
                    width={120}
                    height={120}
                    unoptimized
                    className="w-[120px]"
                />
            </div>
            <div>
                <p className="text-white/90 font-Manrope text-[14px]">
                    Escanea el código QR para contactarnos directamente por WhatsApp
                </p>
            </div>
        </div>

    )
}

export default Mqrcode

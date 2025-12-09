"use client";
import React from "react";

const MarqueeList = [
    "Próxima Inteligencia",
    "El Futuro Ahora",
    "Impulsando la Innovación",
    "Un Mañana Más Inteligente",
    "Piensa en el Futuro",
    "Cambio Cognitivo"
];

const RotatedMarquee = () => {
    return (
        <div className="relative overflow-hidden bg-gradient-to-b from-[#343ec2] via-[#4a45c9] to-[#4895ef]">
            <div className="relative py-5 whitespace-nowrap flex">
                <div className="marquee-track">
                    {MarqueeList.concat(MarqueeList).map((item, i) => (
                        <React.Fragment key={i}>
                            <span
                                className="font-Manrope text-white font-semibold text-4xl md:text-5xl min-[860px]:!text-6xl tracking-[0.4px] mx-4"
                            >
                                {item}
                            </span>
                            <span className="font-Manrope text-white font-semibold text-4xl md:text-5xl min-[860px]:!text-6xl tracking-[0.4px] mx-4">/</span>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RotatedMarquee;

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
        <div className="relative overflow-hidden" style={{ background: 'linear-gradient(to bottom, #5078e0 0%, #4b70dc 50%, #4560d4 100%)' }}>
            <div className="relative py-5 whitespace-nowrap flex z-20">
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

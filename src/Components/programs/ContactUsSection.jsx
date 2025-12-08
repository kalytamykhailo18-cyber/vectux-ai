import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

const ContactUsSection = () => {
    return (
        <>
            <section className='bg-blue relative overflow-hidden flex justify-center px-7.5 sm:px-10 min-[860px]:px-16'>
                <div className='py-16 sm:py-20 pt-28 grid min-[860px]:grid-cols-2  max-w-[1200px] 
                '>
                    <div className='flex flex-col justify-center gap-6 '>
                        <div className='flex flex-col justify-center gap-6'>
                            <p data-aos="fade-up"  className="text-white font-Manrope font-semibold text-lg md:text-[15px] tracking-[0.2px]">
                                <span className='text-skyBlue'>{"["}</span> Get In Touch  <span className='text-skyBlue'>{"]"}</span>
                            </p>
                            <h1 data-aos="fade-up" data-aos-delay="300" className="bg-[linear-gradient(0deg,#888888_0%,#ffffff_55%)] bg-clip-text text-transparent font-bold text-4xl md:text-5xl lg:text-[48px] leading-[45px]  sm:leading-[56px]">
                                ¡Empodera
                                <br /> a tu equipo!
                            </h1>

                            <p  data-aos="fade-up" data-aos-delay="600" className='text-[#ffffffda] font-Manrope text-[16px] font-[500] leading-[28px] sm:w-[80%] '>
                                Contáctanos hoy mismo y conoce nuestros programas y cómo podemos potenciar la operación de tu empresa
                            </p>

                        </div>
                        <div  className='mt-5 flex flex-col gap-4'>
                            <div  data-aos="fade-up" data-aos-delay="800" className='flex gap-6 w-full items-center'>
                                <div  className='bg-skyBlue p-3 w-max rounded-[7px]'>
                                    < MapPin  className='size-7 sm:size-8 text-white' />
                                </div>
                                <div>
                                    <h4 className="text-[#f3f3f3] tracking-[.2px] font-Manrope font-bold text-[22px]  md:text-[24px] lg:text-[23px]"> Location
                                    </h4>
                                    <p className='text-[#ffffffda] font-Manrope text-[15px] font-[500] leading-[28px] '>Your Address
                                    </p>
                                </div>
                            </div>
                            <div  data-aos="fade-up" data-aos-delay="1100" className='flex gap-6 w-full items-center'>
                                <div className='bg-skyBlue p-3 w-max rounded-[7px]'>
                                    <Mail className='size-7 sm:size-8 text-white' />
                                </div>
                                <div>
                                    <h4 className="text-[#f3f3f3] tracking-[.2px] font-Manrope font-bold text-[22px]  md:text-[24px] lg:text-[23px]"> Email
                                    </h4>
                                    <p className='text-[#ffffffda] font-Manrope text-[15px] font-[500] leading-[28px] '>info@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div  data-aos="fade-up" data-aos-delay="1400" className='flex gap-6 w-full items-center'>
                                <div className='bg-skyBlue p-3.5 w-max rounded-[7px]'>
                                    <Phone className='size-7 sm:size-8 text-white' />
                                </div>
                                <div>
                                    <h4 className="text-[#f3f3f3] tracking-[.2px] font-Manrope font-bold text-[22px]  md:text-[24px] lg:text-[23px]"> Call Us Directly

                                    </h4>
                                    <p className='text-[#ffffffda] font-Manrope text-[15px] font-[500] leading-[28px] '>123 456 789
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='min-[860px]:px-5 mt-10 min-[860px]:mt-0'>

                        <form data-aos="zoom-out-down" className='bg-[#5676f617] rounded-[7px] px-7 sm:px-10 py-20' action="">
                            <div className='grid grid-cols-2  gap-8'>
                                <input type="text" placeholder='Nombre 
' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' />
                                <input type="text" placeholder='Nombre 
' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' />
                                <input type="text" placeholder='Email ' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' />
                                <input type="text" placeholder='Teléfono' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' />
                                <input type="text" placeholder='Empresa' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' /> 
                                 <input type="text" placeholder='Posición
' className='border-b-[1px] border-[#cccccc] pb-3 tracking-[0.6px] w-full font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' />
                                
                            </div>
                            <textarea rows={4} placeholder='Mensaje' className='border-b-[1px] border-[#cccccc] tracking-[0.6px] w-full mt-7 font-Manrope text-[#f1f1f1] placeholder:text-white text-[15px]' name="" id=""></textarea>
                            <button className="bg-skyBlue font-Manrope uppercase hover:bg-sky-700 transition text-white font-[700] mt-10 sm:mt-6 text-[12.5px] tracking-[1.3px] px-8 py-4 rounded-full select-none">Enviar Mensaje</button>
                        </form>

                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUsSection
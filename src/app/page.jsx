import React from 'react'
import HeroSection from '@/Components/programs/HeroSection'
import RotatedMarquee from '@/Components/Marquee'
import AboutSection from '@/Components/programs/AboutSection'
import ServiceSection from '@/Components/programs/ServiceSection'
import LevelsSection from '@/Components/programs/LevelsSection'
import WhyAttend from '@/Components/programs/WhyAttend'
import Skills from '@/Components/programs/Skills'
import Testimonials from '@/Components/programs/Testimonials'
import Letstalk from '@/Components/programs/Letstalk'

const ProgramasPage = () => {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <LevelsSection />
            <RotatedMarquee />
            <WhyAttend />
            <Skills />
            <Testimonials />
            <Letstalk />
        </>
    )
}

export default ProgramasPage

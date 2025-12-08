import React from 'react'
import HeroSection from '@/Components/diplomados/HeroSection'
import WhyVectux from '@/Components/diplomados/WhyVectux'
import HowWeLearn from '@/Components/diplomados/HowWeLearn'
import Testimonials from '@/Components/diplomados/Testimonials'
import DiplomadosCards from '@/Components/diplomados/DiplomadosCards'
import MasterclassSection from '@/Components/diplomados/MasterclassSection'
import ContactSection from '@/Components/diplomados/ContactSection'

export const metadata = {
    title: 'Diplomados Ejecutivos | Vectux Academy',
    description: 'Diplomados ejecutivos en Business Analytics, Financial Analytics y Marketing Analytics. Transforma tu carrera con analítica e inteligencia artificial.',
}

const DiplomadosPage = () => {
    return (
        <>
            <HeroSection />
            <WhyVectux />
            <HowWeLearn />
            <Testimonials />
            <DiplomadosCards />
            <MasterclassSection />
            <ContactSection />
        </>
    )
}

export default DiplomadosPage

import React from 'react'
import HeroSection from '@/Components/diplomados/HeroSection'
import HowWeLearn from '@/Components/diplomados/HowWeLearn'
import Testimonials from '@/Components/diplomados/Testimonials'
import DiplomadosCards from '@/Components/diplomados/DiplomadosCards'
import MasterclassSection from '@/Components/diplomados/MasterclassSection'
import ContactSection from '@/Components/diplomados/ContactSection'
import Lecture from '@/Components/diplomados/Lecture'
import Promotion from '@/Components/diplomados/Promotion'
import Bussiness from '@/Components/diplomados/Bussiness'

export const metadata = {
    title: 'Diplomados Ejecutivos | Vectux Academy',
    description: 'Diplomados ejecutivos en Business Analytics, Financial Analytics y Marketing Analytics. Transforma tu carrera con analítica e inteligencia artificial.',
}

const DiplomadosPage = () => {
    return (
        <>
            <HeroSection />
            <Promotion />
            <Lecture />
            <DiplomadosCards />
            <HowWeLearn />
            <Bussiness />
            <Testimonials />
            <MasterclassSection />
            <ContactSection />
        </>
    )
}

export default DiplomadosPage

import React from 'react'
import HeroSection from '@/Components/business/HeroSection'
import AchieveSection from '@/Components/business/AchieveSection'
import WhoIsSection from '@/Components/business/WhoIsSection'
import StructureSection from '@/Components/business/StructureSection'
import LearningSection from '@/Components/business/LearningSection'
import NextDiplomaSection from '@/Components/business/NextDiplomaSection'
import ContactSection from '@/Components/business/ContactSection'

export const metadata = {
    title: 'Diplomado en Business Analytics | Vectux Academy',
    description: 'Domina el idioma de los datos. Lidera con inteligencia. Programa ejecutivo para líderes que quieren dominar el ciclo analítico completo.',
}

const BusinessAnalyticsPage = () => {
    return (
        <>
            <HeroSection />
            <AchieveSection />
            <WhoIsSection />
            <StructureSection />
            <LearningSection />
            <NextDiplomaSection />
            <ContactSection />
        </>
    )
}

export default BusinessAnalyticsPage

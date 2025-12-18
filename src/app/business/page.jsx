import React from 'react'
import HeroSection from '@/Components/analysis/HeroSection'
import AchieveSection from '@/Components/analysis/AchieveSection'
import WhoIsSection from '@/Components/analysis/WhoIsSection'
import StructureSection from '@/Components/analysis/StructureSection'
import LearningSection from '@/Components/analysis/LearningSection'
import NextDiplomaSection from '@/Components/analysis/NextDiplomaSection'
import ContactSection from '@/Components/analysis/ContactSection'

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

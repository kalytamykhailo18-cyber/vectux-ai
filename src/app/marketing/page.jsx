import React from 'react'
import HeroSection from '@/Components/marketing/HeroSection'
import AchieveSection from '@/Components/marketing/AchieveSection'
import WhoIsSection from '@/Components/marketing/WhoIsSection'
import StructureSection from '@/Components/marketing/StructureSection'
import LearningSection from '@/Components/marketing/LearningSection'
import ContactSection from '@/Components/diplomados/ContactSection'

export const metadata = {
    title: 'Diplomado en Marketing Analytics | Vectux Academy',
    description: 'Convierte datos en estrategias que impulsan el crecimiento. Programa ejecutivo para profesionales de marketing que buscan dominar la analítica digital y la optimización de campañas.',
}

const MarketingAnalyticsPage = () => {
    return (
        <>
            <HeroSection />
            <AchieveSection />
            <WhoIsSection />
            <StructureSection />
            <LearningSection />
            <ContactSection />
        </>
    )
}

export default MarketingAnalyticsPage

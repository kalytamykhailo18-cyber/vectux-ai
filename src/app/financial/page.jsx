import React from 'react'
import HeroSection from '@/Components/financial/HeroSection'
import AchieveSection from '@/Components/financial/AchieveSection'
import WhoIsSection from '@/Components/financial/WhoIsSection'
import StructureSection from '@/Components/financial/StructureSection'
import LearningSection from '@/Components/financial/LearningSection'
import ContactSection from '@/Components/financial/ContactSection'

export const metadata = {
    title: 'Diplomado en Financial Analytics | Vectux Academy',
    description: 'Transforma los números en decisiones estratégicas. Programa ejecutivo para profesionales financieros que buscan dominar el análisis predictivo y la modelación financiera avanzada.',
}

const FinancialAnalyticsPage = () => {
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

export default FinancialAnalyticsPage

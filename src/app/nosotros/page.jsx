import React from 'react'
import HeroSection from '@/Components/nosotros/HeroSection'
import MissionSection from '@/Components/nosotros/MissionSection'
import ValuesSection from '@/Components/nosotros/ValuesSection'
import VisionSection from '@/Components/nosotros/VisionSection'
import SDGsSection from '@/Components/nosotros/SDGsSection'
import TeamSection from '@/Components/nosotros/TeamSection'
import WhyVectux from '@/Components/diplomados/WhyVectux'

const NosotrosPage = () => {
    return (
        <>
            <HeroSection />
            <WhyVectux />
            <MissionSection />
            <SDGsSection />
            <ValuesSection />
            <VisionSection />
            <TeamSection />
        </>
    )
}

export default NosotrosPage

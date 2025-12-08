import React from 'react'
import HeroSection from '@/Components/cursos/HeroSection'
import Exclusive from '@/Components/cursos/Exclusive'
import WhyUs from '@/Components/cursos/WhyUs'
import Request from '@/Components/cursos/Request'
import Contact from '@/Components/cursos/Contact'
import Courses from '@/Components/cursos/Courses'
import Keys from '@/Components/cursos/Keys'
import Financial from '@/Components/cursos/Financial'

const CursosPage = () => {
    return (
        <>
            <HeroSection />
            <Exclusive />
            <Courses />
            <Financial />
            <Keys />
            <WhyUs />
            <Request />
            <Contact />
        </>
    )
}

export default CursosPage

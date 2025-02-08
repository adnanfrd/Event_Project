import AboutSection from '@/components/AboutPage/AboutSection'
import CTASectionAbout from '@/components/AboutPage/CTASectionAbout'
import MissionSection from '@/components/AboutPage/MissionSection'
import TeamMembers from '@/components/AboutPage/TeamMembers'
import TestimonialsSection from '@/components/AboutPage/TestimonialsSection'
import WhyChooseUs from '@/components/AboutPage/WhyChooseUs'
import React from 'react'

const page = () => {
  return (
    <div>
        <AboutSection/>
        <MissionSection/>
        <WhyChooseUs/>
        <TeamMembers/>
        <TestimonialsSection/>
        <CTASectionAbout/> 
    </div>
  )
}

export default page
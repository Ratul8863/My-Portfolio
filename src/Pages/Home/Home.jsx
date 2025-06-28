import React from 'react'
import HeroSection from './HeroSection'
import SpecializationSection from './SpecializationSection'
import About from '../About'
import AboutSection from './AboutSection'
import ToolsSection from './ToolsSection'
import ProjectsSection from './ProjectsSection'
import EducationWorkSection from './EducationWorkSection'
import ContactSection from './ContactSection'
import Skills from '../Skills/Skills'
import ToolsSliderSection from './ToolsSliderSection'

function Home() {
  return (
    <div>
        <HeroSection></HeroSection>
        <SpecializationSection></SpecializationSection>
   <AboutSection></AboutSection>
   <Skills></Skills>
   <ToolsSection></ToolsSection>
   <ToolsSliderSection></ToolsSliderSection>
   <ProjectsSection></ProjectsSection>
   <EducationWorkSection></EducationWorkSection>
   <ContactSection></ContactSection>
    </div>
  )
}

export default Home
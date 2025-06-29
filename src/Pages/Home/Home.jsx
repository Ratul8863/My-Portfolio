import React from 'react'
import HeroSection from './HeroSection'
import SpecializationSection from './SpecializationSection'
import AboutSection from './AboutSection'
import Skills from '../Skills/Skills'
import ToolsSection from './ToolsSection'
import ToolsSliderSection from './ToolsSliderSection'
import ProjectsSection from './ProjectsSection'
import EducationWorkSection from './EducationWorkSection'
import ContactSection from './ContactSection'

function Home() {
  return (
    <div>
      <section id="home"><HeroSection /></section>
      <section id="specialization"><SpecializationSection /></section>
      <section id="about"><AboutSection /></section>
      {/* <section id="skills"><Skills /></section> */}
      <section id="tools"><ToolsSection /></section>
      <section id="tools-slider"><ToolsSliderSection /></section>
      <section id="projects"><ProjectsSection /></section>
      <section id="education"><EducationWorkSection /></section>
      <section id="contact"><ContactSection /></section>
    </div>
  );
}

export default Home;

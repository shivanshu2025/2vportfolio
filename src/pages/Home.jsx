import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ValuesSection from '../components/Home/ValuesSection';
import SkillsSection from '../components/Home/SkillsSection';
import Project from '../components/Home/Project';
import TestimonialSection from '../components/Home/TestimonialCard';
import ContactSection from '../components/Home/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <SkillsSection />
      <Project />
      <TestimonialSection />
      <ContactSection />
    </>
  );
};

export default Home;

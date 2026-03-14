import React from 'react';
import HeroSection from '../components/Home/HeroSection';
import AboutSection from '../components/Home/AboutSection';
import ValuesSection from '../components/Home/ValuesSection';
import SkillsSection from '../components/Home/SkillsSection';
import Interactive3DSection from '../components/Home/Interactive3DSection';
import { OpenSourceSection } from '../components/Home/OpenSourceSection';
import TestimonialSection from '../components/Home/TestimonialCard';
import ContactSection from '../components/Home/ContactSection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <ValuesSection/>
      <SkillsSection/>
      <Interactive3DSection/>
      <OpenSourceSection/>
      <TestimonialSection/>
      <ContactSection/>

    </>
  );
};

export default Home;
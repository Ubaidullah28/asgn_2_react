// src/Yummy.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import StatsSection from './components/StatsSection';
import MenuSection from './components/MenuSection';

const Yummy = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <WhyUsSection />
      <StatsSection />
      <MenuSection />
    </div>
  );
};

export default Yummy;

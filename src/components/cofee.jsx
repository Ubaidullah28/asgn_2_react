// src/Coffee.js
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import VideoSection from './components/VideoSection';
import CoffeeMenu from './components/CoffeeMenu';
import Gallery from './components/Gallery';
import Review from './components/Review';
import BlogSection from './components/BlogSection';

const Coffee = () => {
  return (
    <div>
      <Header />
      <Banner />
      <VideoSection />
      <CoffeeMenu />
      <Gallery />
      <Review />
      <BlogSection />
    </div>
  );
};

export default Coffee;

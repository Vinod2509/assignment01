import React from 'react';
import './App.css'; // Import your CSS file for styling

// Import your custom components
import HeroSection from './HeroSection';
import WhatWeOfferSection from './WhatWeOfferSection';
import BlogsSection from './BlogsSection';
import LetsConnectSection from './LetsConnectSection';
import FooterSection from './FooterSection';

function App() {
  return (
    <div className="App">
      {/* Render each section component */}
      <HeroSection />
      <WhatWeOfferSection />
      <BlogsSection />
      <LetsConnectSection />
      <FooterSection />
    </div>
  );
}

export default App;

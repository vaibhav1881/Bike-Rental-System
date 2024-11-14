import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedBikes from '../components/FeaturedBikes';
import HowItWorks from '../components/HowItWorks';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedBikes />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;

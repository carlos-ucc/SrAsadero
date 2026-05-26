import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedDishes from './components/FeaturedDishes';
import MenuSection from './components/MenuSection';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import MobileBottomBar from './components/MobileBottomBar';

function App() {
  return (
    <div className="bg-[#111111] text-[#f5f5f5] relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FeaturedDishes />
      <MenuSection />
      <WhyChooseUs />
      <Gallery />
      <Testimonials />
      <Location />
      <FAQ />
      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </div>
  );
}

export default App;
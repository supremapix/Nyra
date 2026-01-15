
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import Stats from './components/Stats.tsx';
import Portfolio from './components/Portfolio.tsx';
import Sustainability from './components/Sustainability.tsx';
import FAQ from './components/FAQ.tsx';
import Blog from './components/Blog.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import Watermark from './components/Watermark.tsx';

const HomePage: React.FC = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Stats />
      <Services />
      <About />
      <Sustainability />
      <Portfolio />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative flex flex-col min-h-screen bg-[#1A1C22] text-white selection:bg-tech-cyan selection:text-white">
        <Watermark />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;

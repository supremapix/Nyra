
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Portfolio from './components/Portfolio';
import Sustainability from './components/Sustainability';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

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
      <div className="flex flex-col min-h-screen bg-[#1A1C22] text-white selection:bg-tech-cyan selection:text-white">
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


import React, { useState } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import ProblemSolution from './components/ProblemSolution';
import WhatsAppButton from './components/WhatsAppButton';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from './constants';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>(Page.Home);

  const renderContent = () => {
    switch (activePage) {
      case Page.Home:
        return (
          <>
            <Hero onNav={setActivePage} />
            <ProblemSolution />
            <ServicesGrid />
            <HowItWorks />
            <TrustSection />
          </>
        );
      case Page.Services:
        return <ServicesPage />;
      case Page.HowItWorks:
        return <HowItWorks />;
      case Page.ForCenters:
        return <ForCentersPage />;
      case Page.About:
        return <AboutPage />;
      default:
        return <Hero onNav={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen selection:bg-[#0F7C5C]/20 selection:text-[#0F7C5C]">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={activePage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.main>
      </AnimatePresence>

      <Footer onNav={setActivePage} />
      <WhatsAppButton />
    </div>
  );
};

// --- Specialized Pages (defined locally for simplicity but with production quality) ---

const ServicesPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Explore Our Services</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          Detailed typing services tailored for Dubai residents and businesses.
        </p>
      </div>
      <ServicesGrid />
      <div className="mt-12 bg-[#E6F4EF] p-8 rounded-[32px] border border-[#0F7C5C]/10 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Don't see what you need?</h3>
        <p className="text-gray-600 mb-8">We handle complex and custom typing requirements. Chat with our advisors.</p>
        <a href={WHATSAPP_LINK} className="inline-block bg-[#0F7C5C] text-white px-8 py-4 rounded-xl font-bold">Inquire for Custom Service</a>
      </div>
    </div>
  </div>
);

const ForCentersPage = () => (
  <div className="pt-32 pb-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Register Your Typing Center</h1>
      <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-16">
        Join the LetaaX network and gain access to a steady stream of customers looking for professional typing services in Dubai.
      </p>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { title: "Increase Revenue", text: "Tap into our large user base looking for daily services." },
          { title: "Digital Management", text: "Modernize how you receive and track customer requests." },
          { title: "Verified Status", text: "Enhance your reputation with a LetaaX verified badge." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-10 rounded-[40px] shadow-sm">
            <h3 className="text-xl font-bold text-[#0F7C5C] mb-4">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
      <a href={WHATSAPP_LINK} className="inline-block bg-[#0F7C5C] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-[#0F7C5C]/20">Register Now via WhatsApp</a>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
        <div className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">About LetaaX</h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            LetaaX was founded with a clear mission: to simplify access to typing and government-related services in the UAE. We believe that professional documentation should be transparent, accessible, and fast.
          </p>
          <div className="p-8 border-l-4 border-[#0F7C5C] bg-gray-50 rounded-r-3xl">
            <h3 className="font-bold text-xl text-gray-900 mb-2">Our Vision</h3>
            <p className="text-gray-600">To become the most trusted and efficient typing service platform in the UAE, bridging the gap between citizens and government requirements.</p>
          </div>
        </div>
        <div className="rounded-[60px] overflow-hidden shadow-2xl">
          <img src="https://picsum.photos/seed/about-letaax/800/600" alt="Office" className="w-full h-auto" />
        </div>
      </div>
    </div>
  </div>
);

export default App;

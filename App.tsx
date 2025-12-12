import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-50 selection:bg-violet-500/30 selection:text-violet-200">
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Process />
        <Services />
        <Contact />
      </main>
      <Footer />
      {/* <ChatWidget /> */}
    </div>
  );
};

export default App;
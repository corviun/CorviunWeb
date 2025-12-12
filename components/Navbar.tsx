import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Icon } from './Icons';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-1 hover:drop-shadow-[0_0_15px_rgba(124,58,237,0.7)] transition-all">
          <div className="w-14 h-14 filter drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(124,58,237,0.8)] transition-all">
            <Icon name="logo-long" className="w-full h-full" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">CORVIUN</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollTo('why-us')}
            className="text-sm text-slate-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            Why Corviun
          </button>
           {/* Process link kept as placeholder/future expansion */}
          <button 
             onClick={() => scrollTo('process')} // Fallback or placeholder behavior
             className="text-sm text-slate-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            Process
          </button>
          <button 
            onClick={() => scrollTo('services')}
            className="text-sm text-slate-300 hover:text-white transition-colors uppercase tracking-wider font-medium"
          >
            Services
          </button>
          <button onClick={() => scrollTo('contact')}>
            <Button variant="outline" className="px-4 py-2 text-sm">
              GET SECURED
            </Button>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          <button 
            onClick={() => scrollTo('services')}
            className="text-left text-slate-300 hover:text-white block py-2"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo('why-us')}
            className="text-left text-slate-300 hover:text-white block py-2"
          >
            Why Corviun
          </button>
           <button onClick={() => scrollTo('contact')} className="w-full">
             <Button variant="primary" fullWidth>
              Get Secured
            </Button>
           </button>
        </div>
      )}
    </nav>
  );
};
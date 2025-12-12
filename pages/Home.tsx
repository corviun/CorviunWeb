import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { WhyUs } from '../components/WhyUs';
import { Contact } from '../components/Contact';
import { useLocation } from 'react-router-dom';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling when navigating from another page
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <Contact />
    </>
  );
};
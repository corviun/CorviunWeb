import React, { useEffect, useState } from 'react';
import { Button } from './Button';
import { Icon } from './Icons';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "SECURING YOUR BUSINESS";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const TICKER_ITEMS = [
    "SYSTEM STATUS: NORMAL",
    "THREAT LEVEL: LOW",
    "ACTIVE MONITORING: ENABLED",
    "LAST SCAN: 00:01:24",
    "ENCRYPTION: AES-256",
    "NETWORK INTEGRITY: 100%",
    "AI AGENTS: ONLINE",
    "FIREWALL: ACTIVE",
    "ZERO TRUST: ENFORCED"
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-slate-950 pt-32 pb-24 lg:pt-40 lg:pb-32">
      
      {/* 3D Perspective Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-1/2 -left-[50%] -right-[50%] h-[200%] bg-[linear-gradient(rgba(124,58,237,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.3)_1px,transparent_1px)] bg-[size:40px_40px] perspective-grid animate-pulse-slow"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-20">
        <div className="flex-1 text-center lg:text-left space-y-3 -mt-16">
           {/* Terminal Header */}
           <div className="mt-10 font-mono text-xs md:text-sm text-green-400 mb-2 inline-flex items-center gap-2 bg-slate-900/50 px-3 py-1 rounded border border-green-900/50">
             <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
             {text}
             <span className="animate-pulse">_</span>
           </div>

           {/* Title with Full Gradient */}
           <div className='mt-0'>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-violet-400 to-fuchsia-500 pb-2">
              SECURE THE <br /> FUTURE
            </h1>
           </div>
           
           <p className="text-lg text-slate-400 max-w-xl leading-relaxed lg:border-l-2 lg:border-violet-500 lg:pl-6 mx-auto lg:mx-0">
             We protect your infrastructure, train your team, and neutralize threats 24/7 with advanced autonomous systems—keeping sensitive data safe, compliant, and your firm fully operational.
             {/* Corviun delivers enterprise-grade managed security built for highly regulated environments. We harden your infrastructure, enforce strict compliance controls, and elevate your workforce’s security readiness. Our autonomous defense systems monitor, detect, and neutralize threats 24/7—protecting privileged information, maintaining regulatory compliance, and ensuring your firm remains fully operational. */}
           </p>

           <div className="flex flex-col sm:flex-row gap-4 pt-4 items-center sm:justify-center lg:justify-start">
             <Button variant="primary" onClick={() => scrollTo('why-us')}>
               Why Corviun
             </Button>
             <Button variant="outline" onClick={() => scrollTo('contact')}>
               Request Assessment
             </Button>
           </div>
        </div>

        {/* Visual Graphic: Radar / Shield Concept */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Sizing adjusted for better responsiveness - "Happy Medium" */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[34rem] xl:h-[34rem] transition-all duration-500">
            {/* Spinning Radar Rings */}
            <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-8 lg:inset-12 rounded-full border border-blue-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-16 lg:inset-24 rounded-full border border-slate-500/20 animate-[spin_8s_linear_infinite]"></div>
            
            {/* Core Shield / Logo Center */}
            <div className="absolute inset-[30%] bg-slate-900 rounded-full border border-violet-500 shadow-[0_0_30px_rgba(124,58,237,0.4)] flex items-center justify-center z-20 overflow-hidden">
               {/* Logo scales with container */}
               {/* HERE RIGHT HERE */}
               {/* <div className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 filter drop-shadow-[0_0_20px_rgba(124,58,237,0.8)]">
                  <Icon name="logo" className="w-full h-full" />
               </div> */}
               <div className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36 filter drop-shadow-[0_0_20px_rgba(124,58,237,0.8)]">
                <Icon name="logo" className="w-full h-full" />
              </div>
            </div>

            {/* Orbiting Nodes - Adjusted offset for new sizes */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 lg:-translate-y-6 bg-slate-900 border border-violet-500/50 px-3 py-1 lg:px-4 lg:py-2 text-[10px] lg:text-xs text-violet-300 rounded font-mono uppercase tracking-widest shadow-lg whitespace-nowrap">
              Endpoint
            </div>
             <div className="absolute bottom-10 right-0 lg:bottom-16 lg:-right-4 bg-slate-900 border border-blue-500/50 px-3 py-1 lg:px-4 lg:py-2 text-[10px] lg:text-xs text-blue-300 rounded font-mono uppercase tracking-widest shadow-lg whitespace-nowrap">
              Compliance
            </div>
             <div className="absolute bottom-10 left-0 lg:bottom-16 lg:-left-4 bg-slate-900 border border-fuchsia-500/50 px-3 py-1 lg:px-4 lg:py-2 text-[10px] lg:text-xs text-fuchsia-300 rounded font-mono uppercase tracking-widest shadow-lg whitespace-nowrap">
              Identity
            </div>

            {/* Scanner Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent h-[20%] w-full animate-scan pointer-events-none"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom Ticker - Seamless Marquee */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-slate-900/80 border-t border-white/5 flex items-center overflow-hidden z-20">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {/* Content duplicated for seamless loop */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-12 whitespace-nowrap px-4">
              {TICKER_ITEMS.map((item, idx) => (
                <span key={idx} className="font-mono text-xs text-slate-500 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span>
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
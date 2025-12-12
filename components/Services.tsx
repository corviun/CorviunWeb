import { useState } from 'react';
import React from 'react';
import { ServiceItem } from '../types';
// import { Icons } from './Icons';
import { Icon } from './ServicesIcon';

const SERVICES: ServiceItem[] = [
  {
    id: 'edr',
    title: 'Autonomous Endpoint Defense',
    description: 'AI-driven detection that neutralizes ransomware and malware at the device level before it executes.',
    icon: 'shield'
  },
  {
    id: 'monitoring',
    title: '24/7 Threat Watchtower',
    description: 'Round-the-clock Security Operations Center (SOC) monitoring to catch anomalies while you sleep.',
    icon: 'eye'
  },
  {
    id: 'training',
    title: 'Human Firewall Training',
    description: 'Phishing simulations and engaging security awareness training to turn your employees into your strongest defense.',
    icon: 'users'
  },
  {
    id: 'email',
    title: 'Email Fortress',
    description: 'Advanced hardening for Microsoft 365/Google Workspace to block phishing, spoofing, and business email compromise.',
    icon: 'mail'
  },
  {
    id: 'vuln',
    title: 'Vulnerability Intelligence',
    description: 'Continuous scanning of your entire digital footprint to identify and patch weak points before attackers find them.',
    icon: 'activity'
  },
  {
    id: 'backup',
    title: 'Constant Backup',
    description: 'Immutable, encrypted cloud backups ensuring you can recover from any disaster in minutes, not days.',
    icon: 'database'
  },
  {
    id: 'rmm',
    title: 'Global Fleet Command',
    description: 'Secure remote management allowing us to patch, update, and troubleshoot your team\'s devices anywhere on Earth.',
    icon: 'server'
  },
  {
    id: 'network',
    title: 'Infrastructure Hardening',
    description: 'Zero-trust configuration for your physical networks, AWS, and Azure environments.',
    icon: 'cloud'
  },
  {
    id: 'mfa',
    title: 'Identity Assurance (MFA)',
    description: 'Complete overhaul of Multi-Factor Authentication to ensure only the right people access your critical data.',
    icon: 'key'
  }
];

export const Services: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  // Determine which services to display based on state
  const displayedServices = showAll ? SERVICES : SERVICES.slice(0, 3);

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background ambient effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-900 to-transparent"></div>
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-left">
             <h4 className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">Capabilities Matrix</h4>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Full-Spectrum Protection</h2>
          </div>
          <p className="text-slate-400 max-w-md text-center md:text-right leading-relaxed border-l-0 md:border-l border-slate-800 pl-0 md:pl-6">
            From the endpoint to the cloud, our integrated stack leaves no gaps for attackers to exploit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, idx) => (
            <div 
              key={service.id} 
              className="
                group relative p-8 rounded-xl transition-all duration-300
                bg-slate-900/40 backdrop-blur-sm border border-slate-800
                hover:border-violet-500/30 hover:shadow-[0_0_30px_-5px_rgba(124,58,237,0.15)]
                hover:-translate-y-1
              "
            >
              {/* Corner accent for tech feel */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-violet-500 to-transparent"></div>
                <div className="absolute top-0 right-0 h-[1px] w-full bg-gradient-to-l from-violet-500 to-transparent"></div>
              </div>

              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-violet-400 group-hover:bg-violet-900/20 group-hover:text-violet-300 group-hover:border-violet-500/30 transition-all duration-300">
                  <Icon name={service.icon} />
                </div>
                <span className="font-mono text-slate-700 text-xs group-hover:text-violet-500/50 transition-colors">
                  0{idx + 1}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-violet-200 transition-colors">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* View All / Show Less Button Container */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="
              group flex items-center gap-2 px-8 py-3 
              bg-transparent hover:bg-violet-900/10 
              border border-slate-700 hover:border-violet-500/50 
              rounded-full transition-all duration-300
            "
          >
            <span className="text-slate-300 font-medium text-sm tracking-wide group-hover:text-white">
              {showAll ? 'Collapse Services' : 'View All Capabilities'}
            </span>
            <span className="text-violet-400 group-hover:text-violet-300 transition-transform duration-300 group-hover:translate-y-0.5">
              <Icon name={showAll ? "chevronUp" : "chevronDown"} className="w-4 h-4" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};
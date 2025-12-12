import React, { useEffect } from 'react';
import { Icon } from '../components/Icons';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

const DETAILED_SERVICES = [
  {
    id: 'edr',
    title: 'Autonomous Endpoint Defense',
    subtitle: 'Endpoint Detection & Response (EDR)',
    description: 'Traditional antivirus is obsolete. We deploy AI-driven agents to every workstation and server in your fleet. These agents utilize behavioral analysis to detect anomalies in real-time, instantly freezing malicious processes—like ransomware encryption—before damage occurs.',
    features: [
      'Behavioral AI Analysis (Not just signatures)',
      'Instant Network Isolation of infected hosts',
      'Automated Ransomware Rollback',
      '24/7 Security Operations Review'
    ],
    icon: 'shield',
    color: 'violet'
  },
  {
    id: 'network',
    title: 'Infrastructure Hardening',
    subtitle: 'Zero-Trust Architecture',
    description: 'Your network perimeter has dissolved. We rebuild it around your data. Whether on-premise or in the cloud (AWS/Azure), we enforce strict Zero Trust policies. Every user and device is verified before accessing critical resources, minimizing lateral movement by attackers.',
    features: [
      'Firewall Configuration & Management',
      'Segmentation of Critical Assets',
      'VPN & SD-WAN Encryption',
      'Intrusion Detection Systems (IDS)'
    ],
    icon: 'cloud',
    color: 'blue'
  },
  {
    id: 'vuln',
    title: 'Vulnerability Intelligence',
    subtitle: 'Continuous Risk Scanning',
    description: 'Attackers scan your network daily; we scan it hourly. Our vulnerability management engine identifies unpatched software, misconfigurations, and weak entry points across your entire digital footprint, prioritizing fixes based on real-world exploitability.',
    features: [
      'Automated Daily Vulnerability Scans',
      'Patch Management Automation',
      'Dark Web Credential Monitoring',
      'Compliance Reporting (HIPAA/NIST)'
    ],
    icon: 'activity',
    color: 'emerald'
  },
  {
    id: 'email',
    title: 'Email Fortress',
    subtitle: 'Anti-Phishing & BEC Protection',
    description: '90% of breaches start with email. We harden your Microsoft 365 or Google Workspace environment against advanced threats. Our API-based defense layer catches spear-phishing and Business Email Compromise (BEC) attempts that bypass native filters.',
    features: [
      'AI-Based Phishing Detection',
      'Malicious Link Rewriting',
      'Impersonation Protection',
      'Automated Incident Remediation'
    ],
    icon: 'mail',
    color: 'fuchsia'
  },
  {
    id: 'backup',
    title: 'Resilient Cloud Anchors',
    subtitle: 'Disaster Recovery (BCDR)',
    description: 'When all else fails, backups are your lifeline. We implement immutable, air-gapped cloud backups that cannot be encrypted by ransomware. In the event of a catastrophe, we can spin up your servers in the cloud, reducing downtime from days to minutes.',
    features: [
      'Immutable (WORM) Storage',
      'Hourly Snapshots',
      'Instant Cloud Virtualization',
      'Annual Disaster Recovery Drills'
    ],
    icon: 'database',
    color: 'orange'
  },
  {
    id: 'mfa',
    title: 'Identity Assurance',
    subtitle: 'Access Control & MFA',
    description: 'Identity is the new perimeter. We enforce rigorous Multi-Factor Authentication (MFA) and Single Sign-On (SSO) policies. By ensuring only authorized personnel can access your data, we eliminate the risk of stolen passwords leading to a full breach.',
    features: [
      'Adaptive Multi-Factor Authentication',
      'Conditional Access Policies',
      'Privileged Access Management (PAM)',
      'Suspicious Login Alerts'
    ],
    icon: 'key',
    color: 'indigo'
  }
];

export const ServicesPage: React.FC = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 bg-slate-950 -z-20"></div>
      <div className="fixed inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20 -z-10 pointer-events-none"></div>

      {/* Header */}
      <section className="relative py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-300 font-mono text-xs mb-6">
            <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
            SYSTEM ARCHITECTURE v2.0
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Defense <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-500">Matrix</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Corviun deploys a layered security stack designed to identify, protect, detect, respond, and recover. This is not just software; it is a military-grade defense strategy for your business.
          </p>
        </div>
      </section>

      {/* Services Spine Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative">
        {/* Central Spine Line (Desktop) */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/0 via-violet-500/30 to-violet-500/0 -translate-x-1/2"></div>

        <div className="space-y-12 lg:space-y-24">
          {DETAILED_SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Visual / Icon Side */}
                <div className="flex-1 flex justify-center lg:justify-end relative group">
                  <div className={`w-full max-w-md aspect-video lg:aspect-square relative rounded-2xl overflow-hidden glass-panel border border-${service.color}-500/20 shadow-[0_0_30px_rgba(0,0,0,0.3)] flex items-center justify-center`}>
                    {/* Animated Background in Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 z-0"></div>
                    <div className={`absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-${service.color}-500 via-transparent to-transparent group-hover:opacity-20 transition-opacity duration-500`}></div>
                    
                    {/* Icon */}
                    <div className={`relative z-10 w-24 h-24 lg:w-32 lg:h-32 text-${service.color}-400 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon name={service.icon} className="w-full h-full drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-4 right-4 font-mono text-[10px] text-slate-500 flex flex-col items-end gap-1">
                      <span>MOD: {service.id.toUpperCase()}</span>
                      <span>STATUS: <span className="text-emerald-500">ACTIVE</span></span>
                    </div>
                  </div>
                  
                  {/* Connector Line for Spine (Desktop) */}
                  <div className={`hidden lg:block absolute top-1/2 w-8 h-px bg-${service.color}-500/50 ${isEven ? '-right-12' : '-left-12'}`}>
                    <div className={`absolute w-2 h-2 rounded-full bg-${service.color}-500 top-1/2 -translate-y-1/2 ${isEven ? 'right-0' : 'left-0'} shadow-[0_0_10px_currentColor]`}></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className={`text-${service.color}-400 font-mono text-sm tracking-widest uppercase mb-2`}>{service.subtitle}</h3>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 text-left ${isEven ? 'lg:mr-auto' : 'lg:ml-auto'}`}>
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900/50 border border-slate-800 rounded px-3 py-2">
                         <span className={`w-1.5 h-1.5 rounded-full bg-${service.color}-500`}></span>
                         {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})} className="mx-auto lg:mx-0">
                    Deploy Capability
                  </Button>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden border-t border-white/10">
         <div className="absolute inset-0 bg-violet-950/20 flex items-center justify-center opacity-30 pointer-events-none">
           <div className="w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px]"></div>
         </div>
         
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
           <h2 className="text-4xl font-bold text-white mb-6">Ready to Fortify Your Business?</h2>
           <p className="text-slate-300 mb-8 text-lg">
             Stop relying on luck. Start relying on Corviun. Our architects are standing by to design your custom security roadmap.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link to="/#contact">
               <Button variant="primary" className="w-full sm:w-auto">
                 Begin Consultation
               </Button>
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
};
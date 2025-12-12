import React from 'react';
import { Button } from './Button';
import { Phone, Scan, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      icon: <Phone className="w-8 h-8 text-brand-accent" />,
      title: "Discovery Call",
      description: "A brief 15-minute consultation to map your environment and understand your specific operational needs.",
      delay: "0ms"
    },
    {
      icon: <Scan className="w-8 h-8 text-brand-glow" />,
      title: "Free Vulnerability Scan",
      description: "We deploy our non-intrusive scanners to generate a comprehensive vulnerability report—completely free of charge.",
      delay: "100ms"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Zero-Touch Integration",
      description: "Little to no work for you. We handle the configuration and deployment while you focus on your business.",
      delay: "200ms"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      title: "Rapid Security",
      description: "Immediate activation. We have your systems hardened, monitored, and compliant in record time.",
      delay: "300ms"
    }
  ];

  return (
    <section id="process" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-cyber-grid bg-[length:40px_40px] opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          {/* <h2 className="text-sm font-mono text-brand-accent uppercase tracking-wider mb-2">Onboarding Protocol</h2> */}
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Secured in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-glow">Record Time</span>
          </h3>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg">
            We've streamlined the path to protection. No complex setups, no downtime, just rapid, effective security deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-slate-800 via-brand-accent/50 to-slate-800 -z-10" />

          {steps.map((step, index) => (
            <div 
              key={index} 
              className="group relative"
              style={{ animationDelay: step.delay }}
            >
              {/* Card */}
              <div className="glass-panel p-8 h-full rounded-sm hover-tech tech-border transition-transform duration-300 hover:-translate-y-2 flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-slate-900 border border-brand-accent/30 rounded flex items-center justify-center font-mono text-xs text-brand-accent font-bold">
                  0{index + 1}
                </div>

                {/* Icon Container */}
                <div className="w-16 h-16 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(124,58,237,0.2)] group-hover:shadow-[0_0_25px_rgba(124,58,237,0.4)] transition-all duration-300 relative bg-slate-950">
                  {step.icon}
                </div>

                <h4 className="text-xl font-bold mb-3 text-white group-hover:text-brand-accent transition-colors">
                  {step.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Mobile Arrow (Visual guide for flow on mobile) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden mt-6 text-slate-700">
                    <ArrowRight className="w-6 h-6 rotate-90 md:rotate-0" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            {/* <Button className="px-8 py-4 bg-brand-accent/10 border border-brand-accent/50 text-brand-accent font-mono uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-all duration-300 relative group overflow-hidden" variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                    <span className="relative z-10">Start Your Free Scan</span>
                    <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button> */}
            <div className="mt-16 flex justify-center">
                <Button
                    className="px-8 py-4 bg-brand-accent/10 border border-brand-accent/50 text-brand-accent font-mono uppercase tracking-wider hover:bg-brand-accent hover:text-white transition-all duration-300 relative group overflow-hidden"
                    variant="secondary"
                    onClick={() =>
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }
                >
                    <span className="relative z-10">Start Your Free Scan</span>
                    <div className="absolute inset-0 bg-brand-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                </Button>
            </div>

          <p className="mt-4 text-xs text-slate-500 font-mono">
            * No commitment required. Receive your report within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
};
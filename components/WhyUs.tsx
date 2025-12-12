import React from 'react';
import { Button } from './Button';
import { ShieldAlert, Activity, Bot, ShieldCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Security that <br />
              <span className="text-violet-400">Means Business</span>
            </h2>
            <div className="space-y-6 text-slate-300">
              <p>
                Generic solutions leave gaps. Corviun stops threats before they reach your clients with AI-driven monitoring and expert threat hunting tailored to your firm.
              </p>
              <p>
                Compliance is effortless with clear reports, a dedicated security partner, and predictable flat-rate pricing—elite protection made simple, fast, and reliable.
              </p>
              
              <ul className="space-y-4 mt-8">
                {[
                  '24/7 Alerting and Backup',
                  'A Security Partner Who Understands Your Firm',
                  'Compliance Made Effortless',
                  'Predictable Costs, Zero Surprises'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs">✓</span>
                    <span className="text-slate-200 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <Button variant="secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}>
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
      {/* Abstract visual representation of security */}
      <div className="aspect-square rounded-3xl bg-gradient-to-br from-violet-500/10 to-blue-500/10 border border-white/10 backdrop-blur-xl p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
        {/* Background texture overlay */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay rounded-3xl pointer-events-none"></div>
        
        {/* Central glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-2 gap-6 w-full h-full">
          {/* Card 1: Threats Neutralized (Red) */}
          <div 
            className="group bg-slate-900/80 border border-slate-700/50 hover:border-red-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between animate-float relative overflow-hidden" 
            style={{ animationDelay: '0s' }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <ShieldAlert size={80} className="text-red-500" />
            </div>
            
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
               <ShieldAlert className="text-red-400 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" size={28} />
            </div>
            
            <div>
               <div className="text-sm font-medium text-slate-400 mb-1">Threats Neutralized</div>
               <div className="text-3xl font-bold text-white tracking-tight group-hover:text-red-100 transition-colors">4,291</div>
            </div>
          </div>

          {/* Card 2: System Health (Green) */}
          <div 
            className="group bg-slate-900/80 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between animate-float relative overflow-hidden" 
            style={{ animationDelay: '1s', marginTop: '2rem' }}
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Activity size={80} className="text-emerald-500" />
            </div>

            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
               <Activity className="text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]" size={28} />
            </div>

            <div>
               <div className="text-sm font-medium text-slate-400 mb-1">System Health</div>
               <div className="text-3xl font-bold text-white tracking-tight group-hover:text-emerald-100 transition-colors">Optimal</div>
            </div>
          </div>

          {/* Card 3: Active Agents (Blue) */}
          <div 
            className="group bg-slate-900/80 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between animate-float relative overflow-hidden" 
            style={{ animationDelay: '0.5s', marginTop: '-2rem' }}
          >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bot size={80} className="text-blue-500" />
                  </div>

                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                    <Bot className="text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" size={28} />
                  </div>

                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-1">Active Agents</div>
                    <div className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">142</div>
                  </div>
                </div>

                {/* Card 4: Compliance (Violet) */}
                <div 
                  className="group bg-slate-900/80 border border-slate-700/50 hover:border-violet-500/50 hover:bg-slate-900/90 hover:shadow-[0_0_30px_-5px_rgba(139,92,246,0.3)] transition-all duration-500 rounded-2xl p-6 flex flex-col justify-between animate-float relative overflow-hidden" 
                  style={{ animationDelay: '1.5s' }}
                >
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <ShieldCheck size={80} className="text-violet-500" />
                  </div>

                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <ShieldCheck className="text-violet-400 drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]" size={28} />
                  </div>

                  <div>
                    <div className="text-sm font-medium text-slate-400 mb-1">Compliance</div>
                    <div className="text-3xl font-bold text-white tracking-tight group-hover:text-violet-100 transition-colors">100%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
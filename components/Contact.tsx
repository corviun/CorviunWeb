// import React, { useRef } from 'react';
// import { Button } from './Button';

// export const Contact: React.FC = () => {
//   const formRef = useRef<HTMLFormElement>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!formRef.current) return;

//     const formData = new FormData(formRef.current);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch('http://localhost:5001/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       // const res = await fetch('https://www.corviun.com:5001/api/contact', {
//       //   method: 'POST',
//       //   headers: { 'Content-Type': 'application/json' },
//       //   body: JSON.stringify(data),
//       // });

//       const result = await res.json(); // read JSON response

//       if (!res.ok) {
//         console.error('Backend error:', result);
//         throw new Error(result.error || 'Failed to send message.');
//       }

//       alert('Thank you! We received your request.');
//       formRef.current.reset();
//     } catch (err) {
//       console.error('Fetch error:', err);
//       alert('Oops! Something went wrong.');
//     }
//   };

//   return (
//     <section id="contact" className="py-24 bg-slate-900/50">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="glass-panel rounded-2xl p-8 md:p-12 border border-violet-500/20 shadow-[0_0_50px_rgba(124,58,237,0.1)]">
//           <div className="text-center mb-10">
//             <h2 className="text-3xl font-bold text-white mb-2">Start Protecting Your Firm Today</h2>
//             <p className="text-slate-400">Get a free, tailored security consultation in minutes.</p>
//           </div>

//           <form ref={formRef} className="space-y-6" autoComplete="off" onSubmit={handleSubmit}>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-2">First Name</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-slate-400 mb-2">Last Name</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-400 mb-2">Work Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-slate-400 mb-2">Company Size</label>
//               <select
//                 name="companySize"
//                 className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white"
//               >
//                 <option>1 - 10 Employees</option>
//                 <option>11 - 50 Employees</option>
//                 <option>51 - 200 Employees</option>
//                 <option>200+ Employees</option>
//               </select>
//             </div>

//             <Button fullWidth variant="primary" type="submit">
//               Get Free Security Review
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };











import React, { useState } from 'react';
import { Send, ShieldCheck, AlertTriangle, Loader2, Server } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

//  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   setStatus('submitting');
//   setErrorMessage('');

//   const formData = new FormData(e.currentTarget);
//   const data = Object.fromEntries(formData.entries());

//   try {
//     // Simple fetch call; if it throws, go to catch
//     await fetch('http://localhost:5001/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     });

//     // If fetch succeeds, show the success popup
//     setStatus('success');
//   } catch (err: any) {
//     console.error('Submission error:', err);
//     setErrorMessage(err.message || 'Uplink failed. Retrying handshake...');
//     setStatus('error');
//   }
// };

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch(`${BACKEND_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Secure connection failed.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(err.message || "Uplink failed. Retrying handshake...");
      setStatus("error");
    }
  };

  
  if (status === 'success') {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto glass-panel p-12 rounded tech-border text-center animate-float-in">
          <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
            <ShieldCheck className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Transmission Secure</h2>
          <p className="text-slate-400 text-lg mb-8">
            Your profile has been successfully encrypted and uploaded to our secure server. 
            A security specialist will analyze your parameters and establish contact shortly.
          </p>
          <div className="flex justify-center space-x-2 text-xs font-mono text-green-500/70 mb-8">
            <span>STATUS: DELIVERED</span>
          </div>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand-accent hover:text-white font-mono uppercase tracking-widest text-sm transition-colors"
          >
            Submit Additional Query
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Secure Your Assets</h2>
        <p className="text-slate-400">Request a confidential infrastructure review. No commitment required.</p>
      </div>

      <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded tech-border relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
          {/* <Server className="w-24 h-24 text-brand-accent" /> */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10" autoComplete="off">
          
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/40 p-4 rounded flex items-start gap-3 animate-float-in">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <h4 className="text-red-400 font-bold text-sm">Transmission Failed</h4>
                <p className="text-red-300/70 text-xs mt-1">{errorMessage}. Please check your connection and try again.</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-xs font-mono text-brand-accent uppercase">First Name</label>
              <input
                required
                type="text"
                name="firstName"
                id="firstName"
                disabled={status === 'submitting'}
                className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Jane"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-xs font-mono text-brand-accent uppercase">Last Name</label>
              <input
                required
                type="text"
                name="lastName"
                id="lastName"
                disabled={status === 'submitting'}
                className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Doe"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-mono text-brand-accent uppercase">Work Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              disabled={status === 'submitting'}
              className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="jane@company.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="companySize" className="text-xs font-mono text-brand-accent uppercase">Company Size</label>
            <div className="relative">
              <select
                required
                name="companySize"
                id="companySize"
                disabled={status === 'submitting'}
                defaultValue=""
                className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="" disabled>Select deployment scale</option>
                <option>1 - 10 Employees</option>
                <option>11 - 50 Employees</option>
                <option>51 - 200 Employees</option>
                <option>200+ Employees</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full py-4 bg-brand-accent hover:bg-violet-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] flex items-center justify-center gap-2 group relative overflow-hidden"
          >
            {status === 'submitting' ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>ESTABLISHING CONNECTION...</span>
              </>
            ) : (
              <>
                <span className="relative z-10 flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  INITIATE SECURITY REVIEW
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};
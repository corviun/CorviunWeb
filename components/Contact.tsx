// import React, { useState } from 'react';
// import { Send, ShieldCheck, AlertTriangle, Loader2, Server } from 'lucide-react';

// export const Contact: React.FC = () => {
//   const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
//   const [errorMessage, setErrorMessage] = useState('');

//   const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setStatus("submitting");
//     setErrorMessage("");

//     const formData = new FormData(e.currentTarget);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch(`${BACKEND_URL}/api/contact`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });

//       if (!res.ok) {
//         const result = await res.json();
//         throw new Error(result.error || "Secure connection failed.");
//       }

//       setStatus("success");
//     } catch (err: any) {
//       console.error("Submission error:", err);
//       setErrorMessage(err.message || "Uplink failed. Retrying handshake...");
//       setStatus("error");
//     }
//   };

  
//   if (status === 'success') {
//     return (
//       <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
//         <div className="max-w-2xl mx-auto glass-panel p-12 rounded tech-border text-center animate-float-in">
//           <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30 shadow-[0_0_40px_rgba(34,197,94,0.2)]">
//             <ShieldCheck className="w-12 h-12 text-green-400" />
//           </div>
//           <h2 className="text-3xl font-bold text-white mb-4">Transmission Secure</h2>
//           <p className="text-slate-400 text-lg mb-8">
//             Your profile has been successfully encrypted and uploaded to our secure server. 
//             A security specialist will analyze your parameters and establish contact shortly.
//           </p>
//           <div className="flex justify-center space-x-2 text-xs font-mono text-green-500/70 mb-8">
//             <span>STATUS: DELIVERED</span>
//           </div>
//           <button 
//             onClick={() => setStatus('idle')}
//             className="text-brand-accent hover:text-white font-mono uppercase tracking-widest text-sm transition-colors"
//           >
//             Submit Additional Query
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-3xl mx-auto text-center mb-12">
//         <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Secure Your Assets</h2>
//         <p className="text-slate-400">Request a confidential infrastructure review. No commitment required.</p>
//       </div>

//       <div className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded tech-border relative overflow-hidden">
//         {/* Decorative background elements */}
//         <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
//           {/* <Server className="w-24 h-24 text-brand-accent" /> */}
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6 relative z-10" autoComplete="off">
          
//           {status === 'error' && (
//             <div className="bg-red-500/10 border border-red-500/40 p-4 rounded flex items-start gap-3 animate-float-in">
//               <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
//               <div className="text-left">
//                 <h4 className="text-red-400 font-bold text-sm">Transmission Failed</h4>
//                 <p className="text-red-300/70 text-xs mt-1">{errorMessage}. Please check your connection and try again.</p>
//               </div>
//             </div>
//           )}

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-2">
//               <label htmlFor="firstName" className="text-xs font-mono text-brand-accent uppercase">First Name</label>
//               <input
//                 required
//                 type="text"
//                 name="firstName"
//                 id="firstName"
//                 disabled={status === 'submitting'}
//                 className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 placeholder="Jane"
//               />
//             </div>
//             <div className="space-y-2">
//               <label htmlFor="lastName" className="text-xs font-mono text-brand-accent uppercase">Last Name</label>
//               <input
//                 required
//                 type="text"
//                 name="lastName"
//                 id="lastName"
//                 disabled={status === 'submitting'}
//                 className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//                 placeholder="Doe"
//               />
//             </div>
//           </div>
          
//           <div className="space-y-2">
//             <label htmlFor="email" className="text-xs font-mono text-brand-accent uppercase">Work Email</label>
//             <input
//               required
//               type="email"
//               name="email"
//               id="email"
//               disabled={status === 'submitting'}
//               className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               placeholder="jane@company.com"
//             />
//           </div>

//           <div className="space-y-2">
//             <label htmlFor="companySize" className="text-xs font-mono text-brand-accent uppercase">Company Size</label>
//             <div className="relative">
//               <select
//                 required
//                 name="companySize"
//                 id="companySize"
//                 disabled={status === 'submitting'}
//                 defaultValue=""
//                 className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all appearance-none disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 <option value="" disabled>Select deployment scale</option>
//                 <option>1 - 10 Employees</option>
//                 <option>11 - 50 Employees</option>
//                 <option>51 - 200 Employees</option>
//                 <option>200+ Employees</option>
//               </select>
//               <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
//               </div>
//             </div>
//           </div>

//           <button 
//             type="submit" 
//             disabled={status === 'submitting'}
//             className="w-full py-4 bg-brand-accent hover:bg-violet-700 disabled:bg-slate-800 disabled:text-slate-500 text-white font-bold tracking-wide transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] flex items-center justify-center gap-2 group relative overflow-hidden"
//           >
//             {status === 'submitting' ? (
//               <>
//                 <Loader2 className="w-4 h-4 animate-spin" />
//                 <span>ESTABLISHING CONNECTION...</span>
//               </>
//             ) : (
//               <>
//                 <span className="relative z-10 flex items-center gap-2">
//                   <Send className="w-4 h-4" />
//                   INITIATE SECURITY REVIEW
//                 </span>
//                 <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
//               </>
//             )}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };







import React, { useState } from 'react';
import { Send, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // We are bypassing the env variable to point directly to your AWS n8n instance for the demo
  const WEBHOOK_URL = "https://rich-unforested-sulfureously.ngrok-free.dev/webhook/contact-form";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    
    // Construct the payload to match what we tested in the terminal
    const payload = {
      name: `${formData.get('firstName')} ${formData.get('lastName')}`,
      email: formData.get('email'),
      company: formData.get('company'), 
      company_size: formData.get('companySize'), // Mapping size to 'company' context,
      lead_source: "Website"
    };

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "true", // <--- THIS IS THE MAGIC KEY
        },
        body: JSON.stringify(payload),
      });

      // n8n returns a 200 OK text response usually, not always JSON
      if (!res.ok) {
        throw new Error("Secure connection refused by remote host.");
      }

      setStatus("success");
    } catch (err: any) {
      console.error("Submission error:", err);
      // For the interview demo, if this is a mixed content error (HTTPS -> HTTP), 
      // we want a specific message.
      if (err.message === "Failed to fetch") {
        setErrorMessage("Network Blocked: Ensure you are testing on Localhost (HTTP) not HTTPS.");
      } else {
        setErrorMessage(err.message || "Uplink failed. Retrying handshake...");
      }
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
            <span>•</span>
            <span>ID: {Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
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
        <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
          {/* Decorative Element */}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10" autoComplete="off">
          
          {status === 'error' && (
            <div className="bg-red-500/10 border border-red-500/40 p-4 rounded flex items-start gap-3 animate-float-in">
              <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              <div className="text-left">
                <h4 className="text-red-400 font-bold text-sm">Transmission Failed</h4>
                <p className="text-red-300/70 text-xs mt-1">{errorMessage}</p>
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
            <label htmlFor="company" className="text-xs font-mono text-brand-accent uppercase">Company</label>
            <input
              required
              type="text"
              name="company"
              id="company"
              disabled={status === 'submitting'}
              className="w-full bg-slate-900/50 border border-slate-700 rounded p-3 text-white focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Corviun Cyber"
            />
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
              placeholder="jane@corviuncyber.com"
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
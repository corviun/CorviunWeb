import React from 'react';
import { Icon } from './Icons';

// export const Footer: React.FC = () => {
//   return (
//     <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center gap-1 mb-4">
//                <div className="w-14 h-14">
//                  <Icon name="logo-long" className="w-full h-full" />
//                </div>
//               <span className="text-xl font-bold text-white">CORVIUN</span>
//             </div>
//           </div>
//         </div>
        
//         <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
//           <p className="text-slate-600 text-xs">
//             © {new Date().getFullYear()} Corviun Cybersecurity. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };



export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* <div className="flex items-center space-x-2 text-white font-bold text-2xl tracking-tighter">
            <Shield className="w-8 h-8 text-brand-accent" />
            <span>CORVIUN<span className="text-brand-accent">.</span></span>
          </div> */}

          <div className="flex items-center gap-1 mb-4">
              <div className="w-14 h-14">
                <Icon name="logo-long" className="w-full h-full" />
              </div>
            <span className="text-xl font-bold text-white">CORVIUN</span>
          </div>

          <p className="text-slate-600 text-xs font-mono text-center md:text-right">
            © {new Date().getFullYear()} Corviun Cybersecurity. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};
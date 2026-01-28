
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CheckCircle, Clock, Users, Star } from 'lucide-react';

const TrustSection: React.FC = () => {
  const points = [
    { icon: <Shield className="w-6 h-6" />, title: "Verified Centers", desc: "Only licensed and vetted centers." },
    { icon: <CheckCircle className="w-6 h-6" />, title: "Secure Data", desc: "Your privacy is our top priority." },
    { icon: <Clock className="w-6 h-6" />, title: "Fast Turnaround", desc: "Express processing by experts." },
    { icon: <Users className="w-6 h-6" />, title: "Expert Support", desc: "Guidance for complex legalities." }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#0F7C5C] rounded-[60px] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl">
          {/* Bespoke Background Patterns */}
          <div className="absolute inset-0 opacity-[0.05] bg-mashrabiya pointer-events-none" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full -mr-48 -mt-48 blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#C9A24D]/20 rounded-full -ml-32 -mb-32 blur-[60px]" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div className="space-y-10 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white/90 text-[10px] font-black uppercase tracking-[0.2em]">
                <Star className="w-3 h-3 text-[#C9A24D] fill-[#C9A24D]" />
                <span>Excellence Standard</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight text-balance">
                Built on Global <br /> <span className="text-[#C9A24D]">Trust & Standards.</span>
              </h2>
              
              <p className="text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                LetaaX bridges the gap between complex legal requirements and efficient execution. We ensure every center on our platform meets the highest standards of service and integrity.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 min-w-[140px]">
                  <span className="text-4xl font-black text-white block mb-1">4.9/5</span>
                  <p className="text-[#C9A24D] text-[10px] font-black uppercase tracking-widest">Customer Score</p>
                </div>
                <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 min-w-[140px]">
                  <span className="text-4xl font-black text-white block mb-1">10k+</span>
                  <p className="text-[#C9A24D] text-[10px] font-black uppercase tracking-widest">Monthly Apps</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, ease: "backOut" }}
                  className="bg-white p-8 rounded-[40px] border border-white shadow-xl hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="text-[#0F7C5C] mb-6 w-12 h-12 bg-[#E6F4EF] rounded-2xl flex items-center justify-center group-hover:bg-[#0F7C5C] group-hover:text-white transition-all duration-500 shadow-sm">
                    {p.icon}
                  </div>
                  <h4 className="text-gray-900 font-bold text-xl mb-3">{p.title}</h4>
                  <p className="text-gray-500 text-sm font-medium leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

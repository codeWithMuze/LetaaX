
import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ShieldAlert, Sparkles } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  const problems = [
    "Endless queues at physical centers",
    "Hidden fees and pricing confusion",
    "Complex government terminology",
    "Missing application updates"
  ];

  const solutions = [
    "Submit your request from anywhere",
    "Upfront, transparent flat rates",
    "Clear, simplified requirements",
    "Direct WhatsApp status alerts"
  ];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-0 bg-gray-50/50 rounded-[40px] lg:rounded-[60px] overflow-hidden border border-gray-100 shadow-sm">
          
          {/* Problem Side */}
          <div className="lg:w-[45%] p-8 lg:p-16 space-y-10 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-[50px] rounded-full" />
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-red-600 font-bold text-xs uppercase tracking-widest">
                <ShieldAlert className="w-4 h-4" />
                <span>The Traditional Struggle</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                Documentation <br /> Shouldn't be a <span className="text-red-600">Hassle.</span>
              </h2>
            </div>
            
            <div className="grid gap-6">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-2xl bg-white shadow-sm border border-gray-100"
                >
                  <XCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Solution Side */}
          <div className="lg:w-[55%] bg-[#0F7C5C] p-8 lg:p-16 space-y-10 relative text-white">
            {/* Subtle Arabic Motif overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-mashrabiya pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center space-x-3 text-[#C9A24D] font-bold text-xs uppercase tracking-widest">
                <Sparkles className="w-4 h-4" />
                <span>The LetaaX Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
                The Smart Way to <br /> <span className="text-[#C9A24D]">Get it Done.</span>
              </h2>
            </div>

            <div className="grid gap-4 relative z-10">
              {solutions.map((s, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center space-x-5 p-5 rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 group hover:bg-white/15 transition-all"
                >
                  <div className="bg-[#C9A24D] p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-black/10">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-bold text-lg sm:text-xl">{s}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-6 relative z-10">
              <div className="h-px w-full bg-white/20 mb-8" />
              <p className="font-arabic text-white/80 leading-relaxed text-right">
                حلول ذكية مصممة خصيصاً لتسهيل معاملاتكم الحكومية في دبي بضغطة زر واحدة
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

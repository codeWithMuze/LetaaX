
import React from 'react';
import { motion } from 'framer-motion';
import { HOW_IT_WORKS_STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-[#E6F4EF]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-bold text-gray-900">How It Works</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Experience a seamless transition from your needs to official results in four easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 hidden lg:block" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow z-10"
              >
                <div className="w-12 h-12 bg-[#0F7C5C] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#0F7C5C]/20">
                  {step.number}
                </div>
                <div className="text-[#0F7C5C] mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

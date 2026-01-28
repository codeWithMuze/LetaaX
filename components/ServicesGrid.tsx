
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, WHATSAPP_LINK } from '../constants';
import { ArrowRight, Star } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#E6F4EF]/50 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Licensed <span className="text-[#0F7C5C]">Services</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium leading-relaxed">
              We connect you with specialized centers for every government procedure, ensuring accuracy and speed for your peace of mind.
            </p>
          </div>
          <div className="hidden lg:flex items-center space-x-2 text-[#C9A24D]">
             <span className="text-sm font-black uppercase tracking-widest">ISO Standards</span>
             <Star className="w-4 h-4 fill-current" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="group relative bg-white p-10 rounded-[40px] border border-gray-100 hover:border-[#0F7C5C]/20 hover:shadow-2xl hover:shadow-[#0F7C5C]/5 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Card Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6F4EF]/50 rounded-bl-[100px] transition-transform group-hover:scale-125 duration-500" />
              
              <div className="relative z-10 flex-grow space-y-6">
                <div className="w-16 h-16 bg-[#F8FBFA] rounded-2xl flex items-center justify-center text-[#0F7C5C] group-hover:bg-[#0F7C5C] group-hover:text-white transition-colors duration-500 shadow-sm border border-gray-100">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#0F7C5C] transition-colors">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="relative z-10 pt-10">
                <a
                  href={WHATSAPP_LINK}
                  className="inline-flex items-center space-x-2 text-[#0F7C5C] font-black uppercase tracking-widest text-[11px] group/btn"
                >
                  <span>Chat with expert</span>
                  <div className="w-8 h-8 rounded-full bg-[#E6F4EF] flex items-center justify-center group-hover/btn:bg-[#0F7C5C] group-hover/btn:text-white transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

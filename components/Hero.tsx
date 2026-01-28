
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WHATSAPP_LINK } from '../constants';
import { Page } from '../types';
import { ShieldCheck, ArrowRight, Star, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface HeroProps {
  onNav: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNav }) => {
  const [heroImageUrl, setHeroImageUrl] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const generateHeroImage = async () => {
      try {
        // Initialize Gemini API
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // Generate a professional image tailored to LetaaX's brand and Dubai location
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{
              text: "A professional, ultra-high-quality photograph of a modern Dubai government service center interior. Minimalist and elegant design with large windows. A high-end wooden desk with a sleek modern laptop and official-looking document folders. In the background, a very subtle, slightly blurred view of the Burj Khalifa and Dubai financial district skyline. The color palette is clean, dominated by professional white, deep emerald green (#0F7C5C), and subtle gold accents (#C9A24D). The atmosphere is trustworthy, efficient, and premium. Cinematic lighting, photorealistic, 8k resolution."
            }]
          },
          config: {
            imageConfig: {
              aspectRatio: "4:5"
            }
          }
        });

        // Extract the generated image from response parts
        const candidate = response.candidates?.[0];
        if (candidate?.content?.parts) {
          for (const part of candidate.content.parts) {
            if (part.inlineData) {
              setHeroImageUrl(`data:image/png;base64,${part.inlineData.data}`);
              break;
            }
          }
        }
      } catch (error) {
        console.error("AI Image Generation failed:", error);
        // Professional fallback if generation fails
        setHeroImageUrl("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800");
      } finally {
        setIsLoadingImage(false);
      }
    };

    generateHeroImage();
  }, []);

  return (
    <div className="relative min-h-[100vh] lg:min-h-[90vh] flex items-center pt-24 lg:pt-32 pb-16 overflow-hidden">
      {/* Organic Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-[#E6F4EF] rounded-[150px] rotate-[12deg] -z-10 hidden lg:block shadow-2xl shadow-[#0F7C5C]/5" />
      <div className="absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] bg-[#C9A24D]/5 rounded-full blur-[100px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-16 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8 text-center lg:text-left"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#0F7C5C]/10 rounded-full shadow-sm">
            <div className="flex -space-x-1">
              {[1, 2, 3].map(i => <Star key={i} className="w-3 h-3 text-[#C9A24D] fill-[#C9A24D]" />)}
            </div>
            <span className="text-[11px] font-bold text-[#0F7C5C] uppercase tracking-widest">Premium Documentation Services</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight text-balance">
            LetaaX — <br className="hidden md:block" />
            <span className="text-[#0F7C5C] italic">Smart</span> Typing <br />
            Centers for <span className="relative inline-block">
              Dubai
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" fill="none" stroke="#C9A24D" strokeWidth="3" opacity="0.6" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Bridging the gap between you and licensed typing centers. Your gateway to seamless Visa, Emirates ID, and Labour services in the UAE.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <motion.a
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={WHATSAPP_LINK}
              className="group relative bg-[#0F7C5C] text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[#0F7C5C]/20 hover:bg-[#0B5E46] transition-all flex items-center justify-center space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              <span>Get Started Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "#f9fafb" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNav(Page.ForCenters)}
              className="bg-white text-gray-800 border-2 border-gray-100 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-sm flex items-center justify-center"
            >
              Partner Centers
            </motion.button>
          </div>

          {/* Social Proof with Arabic Touch */}
          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://i.pravatar.cc/150?u=${i + 42}`}
                  alt="Verified User"
                  className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-sm"
                />
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-[#0F7C5C] text-white flex items-center justify-center text-xs font-bold shadow-sm">+10k</div>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold text-gray-900">Verified Professional Service</p>
              <p className="text-xs text-[#0F7C5C] font-semibold font-arabic mt-0.5">موثوق من قبل آلاف العملاء</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Visual Component with AI Generated Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:col-span-5 relative hidden md:block"
        >
          <div className="relative group">
            {/* Main Image with bespoke frame */}
            <div className="relative z-10 rounded-[60px] lg:rounded-[100px] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white ring-1 ring-gray-100 bg-gray-100 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {isLoadingImage ? (
                  <motion.div
                    key="loader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center space-y-4"
                  >
                    <Loader2 className="w-10 h-10 text-[#0F7C5C] animate-spin" />
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Generating Visual...</p>
                  </motion.div>
                ) : (
                  <motion.img 
                    key="hero-image"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    src={heroImageUrl || ""} 
                    alt="Dubai Professional Documentation" 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                )}
              </AnimatePresence>
              {!isLoadingImage && <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />}
            </div>

            {/* Floating Glassmorphism Labels */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-12 glass-card p-5 rounded-3xl shadow-xl z-20 hidden xl:flex items-center space-x-4 max-w-xs"
            >
              <div className="bg-[#C9A24D] p-3 rounded-2xl text-white shadow-lg">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Licensed in UAE</p>
                <p className="text-sm font-bold text-gray-900">Official Partner Centers</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 -right-8 glass-card p-5 rounded-3xl shadow-xl z-20 hidden xl:flex items-center space-x-4 max-w-xs"
            >
              <div className="bg-[#0F7C5C] p-3 rounded-2xl text-white shadow-lg">
                <span className="font-arabic font-bold text-lg">ثقة</span>
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Dubai Government</p>
                <p className="text-sm font-bold text-gray-900">Standards Compliant</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

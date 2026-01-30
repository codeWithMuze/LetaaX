
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNav: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ onNav }) => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => onNav(Page.Home)}
            >
              <div className="w-10 h-10 bg-[#0F7C5C] flex items-center justify-center rounded-xl shadow-sm">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <div className="ml-3 flex flex-col leading-none">
                <span className="text-xl font-bold tracking-tight text-gray-900 font-poppins">LetaaX</span>
                <span className="text-[9px] font-medium font-arabic mt-1 text-[#0F7C5C]">ليتاكس للخدمات</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              LetaaX is Dubai's premier technology platform connecting individuals and businesses with certified typing experts for all government documentation.
            </p>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-[#C9A24D] rounded-full" />
              <div className="text-sm font-bold text-gray-900 font-poppins">Dubai, United Arab Emirates</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 font-poppins">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><button onClick={() => onNav(Page.Home)} className="hover:text-[#0F7C5C] transition-colors font-medium">Home</button></li>
              <li><button onClick={() => onNav(Page.About)} className="hover:text-[#0F7C5C] transition-colors font-medium">About LetaaX</button></li>
              <li><button onClick={() => onNav(Page.Services)} className="hover:text-[#0F7C5C] transition-colors font-medium">Services</button></li>
              <li><button onClick={() => onNav(Page.ForCenters)} className="hover:text-[#0F7C5C] transition-colors font-medium">For Typing Centers</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 font-poppins">Support & Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#" className="hover:text-[#0F7C5C] transition-colors font-medium">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0F7C5C] transition-colors font-medium">Terms & Conditions</a></li>
              <li><a href="https://wa.me/918089922373" className="hover:text-[#0F7C5C] transition-colors font-medium">Contact Support</a></li>
              <li><a href="#" className="hover:text-[#0F7C5C] transition-colors font-medium">FAQ</a></li>
            </ul>
          </div>

          <div className="bg-[#F8FBFA] p-8 rounded-[32px] border border-[#E6F4EF]">
            <h4 className="font-bold text-[#0F7C5C] mb-3 font-poppins text-lg">Partner with Us</h4>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Register your typing center and start receiving digital requests from thousands of users across Dubai.
            </p>
            <button
              onClick={() => onNav(Page.ForCenters)}
              className="w-full bg-[#0F7C5C] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0B5E46] transition-colors shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 text-center md:text-left">
          <div className="text-xs text-gray-400 max-w-2xl leading-relaxed">
            <span className="font-bold text-gray-500 block mb-2 uppercase tracking-widest text-[10px]">Important Disclaimer</span>
            LetaaX is a technology platform connecting users with licensed typing centers. LetaaX does not process or guarantee government approvals. We are not a government entity, nor do we represent one.
          </div>
          <div className="text-sm font-medium text-gray-500 whitespace-nowrap font-poppins">
            &copy; {new Date().getFullYear()} LetaaX Technology.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

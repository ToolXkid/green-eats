import React from 'react';
import { Page } from '../App';

interface HeroProps {
  onNavigate: (page: Page) => void;
}


const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-gradient-to-t from-slate-900 to-slate-800 pt-20 pb-24 sm:pt-28 sm:pb-32">
       <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('https://picsum.photos/seed/hero-bg/1920/1080?blur=5')" }}
      ></div>
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Premium Cannabis, <span className="text-primary">Delivered Fast.</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-300">
          Explore curated strains, accessories, and our exclusive GreenBox subscription. Your journey to relaxation starts here.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('shop')}
            className="w-full sm:w-auto inline-block bg-primary text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg shadow-primary/30 hover:bg-primary-600 transform hover:-translate-y-1 transition-all duration-300"
          >
            Shop All Products
          </button>
          <button
            onClick={() => onNavigate('greenbox')}
            className="w-full sm:w-auto inline-block bg-slate-700 text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-slate-600 transition-colors duration-300"
          >
            Learn About GreenBox
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
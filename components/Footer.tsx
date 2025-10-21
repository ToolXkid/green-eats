
import React from 'react';
import LeafIcon from './icons/LeafIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950/50 border-t border-slate-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <LeafIcon className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg">GreenEats</span>
          </div>
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} GreenEats. All rights reserved. For medicinal purposes only. Must be 21+ to order.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Privacy Policy</a>
            <a href="#" className="text-slate-400 hover:text-primary text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

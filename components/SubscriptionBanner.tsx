
import React from 'react';
import BoxIcon from './icons/BoxIcon';

const SubscriptionBanner: React.FC = () => {
  return (
    <div className="bg-slate-800/50 my-16">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 rounded-2xl shadow-2xl shadow-primary/20 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8">
          <div className="flex-shrink-0 text-white/50">
             <BoxIcon className="w-32 h-32 lg:w-48 lg:h-48" />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Join the GreenBox Club
            </h2>
            <p className="mt-4 text-lg text-primary-200 max-w-2xl">
              Get a curated selection of our finest cannabis and accessories delivered to your door every month. Plus, enjoy exclusive member perks and freebies!
            </p>
            <ul className="mt-6 space-y-2 text-primary-100 list-inside list-disc text-left inline-block">
              <li>Customizable monthly weed delivery</li>
              <li>Free complimentary bud (2 joints worth!)</li>
              <li>Exclusive discounts & early access</li>
              <li>Free accessories bundle</li>
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-white text-primary-700 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-slate-200 transform hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionBanner;

import React from 'react';
import LeafIcon from './icons/LeafIcon';
import ShoppingCartIcon from './icons/ShoppingCartIcon';
import { Page } from '../App';

interface HeaderProps {
  cartCount: number;
  onCartClick: () => void;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ cartCount, onCartClick, currentPage, onNavigate }) => {
  const navItems: { key: Page; label: string }[] = [
    { key: 'shop', label: 'Shop' },
    { key: 'greenbox', label: 'GreenBox' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
  ];
  
  return (
    <header className="sticky top-0 bg-slate-900/80 backdrop-blur-lg z-40 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-lg p-1">
            <LeafIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-white tracking-wider">GreenEats</span>
          </button>
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => onNavigate(item.key)}
                className={`transition-colors text-lg font-medium ${
                  currentPage === item.key ? 'text-primary' : 'text-slate-300 hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center">
            <button 
              onClick={onCartClick}
              className="relative text-slate-300 hover:text-primary transition-colors"
              aria-label={`Open shopping cart with ${cartCount} items`}
            >
              <ShoppingCartIcon className="h-7 w-7" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
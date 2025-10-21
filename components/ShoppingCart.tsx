
import React from 'react';
import { CartItem } from '../types';
import XMarkIcon from './icons/XMarkIcon';
import TrashIcon from './icons/TrashIcon';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (cartItemId: string, newQuantity: number) => void;
  onRemoveItem: (cartItemId: string) => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const subtotal = React.useMemo(() => {
    return cartItems.reduce((total, item) => total + item.selectedPrice.price * item.quantity, 0);
  }, [cartItems]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Cart Panel */}
      <div
        className={`absolute right-0 top-0 bottom-0 w-full max-w-md bg-slate-900 shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700 flex-shrink-0">
          <h2 className="text-xl font-bold text-white">Your Cart</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white" aria-label="Close cart">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Body */}
        {cartItems.length === 0 ? (
          <div className="flex-grow flex flex-col items-center justify-center text-center p-6">
            <p className="text-lg text-slate-300">Your cart is empty.</p>
            <p className="text-sm text-slate-400 mt-2">Find something green to add!</p>
          </div>
        ) : (
          <div className="flex-grow overflow-y-auto p-5 space-y-4">
            {cartItems.map(item => (
              <div key={item.cartItemId} className="flex items-center gap-4 bg-slate-800/50 p-3 rounded-lg">
                <img src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-grow">
                  <h3 className="font-bold text-white">{item.name}</h3>
                  <p className="text-sm text-slate-400">{item.selectedPrice.weight}</p>
                  <p className="text-md font-semibold text-primary mt-1">R {item.selectedPrice.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                   <div className="flex items-center border border-slate-600 rounded-md">
                     <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)} className="px-2 py-1 text-slate-300 hover:bg-slate-700 rounded-l-md">-</button>
                     <span className="px-3 py-1 text-white text-sm">{item.quantity}</span>
                     <button onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)} className="px-2 py-1 text-slate-300 hover:bg-slate-700 rounded-r-md">+</button>
                   </div>
                   <button onClick={() => onRemoveItem(item.cartItemId)} className="text-slate-500 hover:text-red-500" aria-label={`Remove ${item.name}`}>
                     <TrashIcon className="w-5 h-5" />
                   </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-slate-700 flex-shrink-0">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg text-slate-300">Subtotal</span>
              <span className="text-2xl font-bold text-white">R {subtotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-600 transition-colors duration-300">
              Proceed to Checkout
            </button>
             <p className="text-xs text-slate-500 mt-3 text-center">Free "Surprise Munchies Package" with this order!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;

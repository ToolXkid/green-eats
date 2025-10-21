
import React, { useState, useMemo } from 'react';
import { Product, ProductPrice } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedPrice: ProductPrice) => void;
}

const StrainBadge: React.FC<{ type: string }> = ({ type }) => {
  const colorClasses = useMemo(() => {
    switch (type.toLowerCase()) {
      case 'sativa': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'indica': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      case 'hybrid': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  }, [type]);

  return (
    <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full border ${colorClasses}`}>
      {type}
    </span>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const initialPrice = product.prices ? product.prices[0] : { weight: 'item', price: product.price || 0 };
  const [selectedPrice, setSelectedPrice] = useState<ProductPrice>(initialPrice);

  const handleAddToCart = () => {
    onAddToCart(product, selectedPrice);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPrice = product.prices?.find(p => p.weight === e.target.value);
    if (newPrice) {
      setSelectedPrice(newPrice);
    }
  };

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg border border-slate-700 flex flex-col group transition-all duration-300 hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2">
      <div className="relative">
        <img src={product.imageUrl} alt={product.name} className="w-full h-56 object-cover" />
        <div className="absolute top-3 right-3">
          {product.strain && <StrainBadge type={product.strain} />}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
        <p className="text-slate-400 text-sm flex-grow mb-4">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto mb-4">
          <span className="text-2xl font-extrabold text-white">
            R {selectedPrice.price.toFixed(2)}
          </span>
          {product.prices && product.prices.length > 0 && (
            <select
              value={selectedPrice.weight}
              onChange={handlePriceChange}
              className="bg-slate-700 border border-slate-600 text-white text-sm rounded-lg focus:ring-primary focus:border-primary p-2"
            >
              {product.prices.map(p => (
                <option key={p.weight} value={p.weight}>
                  {p.weight}
                </option>
              ))}
            </select>
          )}
        </div>
        
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-600 transition-colors duration-300 transform group-hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

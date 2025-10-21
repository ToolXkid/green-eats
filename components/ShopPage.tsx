import React, { useState, useMemo } from 'react';
import { Product, ProductCategory, ProductPrice } from '../types';
import ProductCard from './ProductCard';
import SparklesIcon from './icons/SparklesIcon';

interface ShopPageProps {
  products: Product[];
  onAddToCart: (product: Product, selectedPrice: ProductPrice) => void;
}

const ShopPage: React.FC<ShopPageProps> = ({ products, onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('Flower');

  const categories: ProductCategory[] = useMemo(() => 
    // This order is intentional for better UX
    ['Flower', 'Accessories', 'Seeds'], 
    []
  );
  
  const filteredProducts = useMemo(() => {
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory, products]);

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24" style={{ animation: 'fadeIn 0.5s ease-in-out' }}>
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
          <SparklesIcon className="w-10 h-10 text-primary" />
          Our Collection
        </h1>
        <p className="mt-4 text-lg text-slate-400">Browse our full range of premium products.</p>
      </div>

      <div className="sticky top-[79px] bg-slate-900/80 backdrop-blur-lg z-30 mb-12 flex justify-center border-b border-slate-700">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 sm:px-6 py-4 -mb-px text-sm sm:text-base font-medium transition-colors duration-200 ease-in-out border-b-2 ${
              activeCategory === category
                ? 'border-primary text-primary'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
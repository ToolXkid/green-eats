import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import SubscriptionBanner from './components/SubscriptionBanner';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';
import ShopPage from './components/ShopPage';
import { PRODUCTS } from './constants';
import { Product, CartItem, ProductCategory, ProductPrice } from './types';
import SparklesIcon from './components/icons/SparklesIcon';

export type Page = 'home' | 'shop' | 'greenbox' | 'about' | 'contact';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showNotification, setShowNotification] = useState<string>('');
  const [page, setPage] = useState<Page>('home');

  const navigateTo = (targetPage: Page) => {
    setPage(targetPage);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = useCallback((product: Product, selectedPrice: ProductPrice) => {
    setCart(prevCart => {
      const cartItemId = `${product.id}-${selectedPrice.weight}`;
      const existingItem = prevCart.find(item => item.cartItemId === cartItemId);
      
      if (existingItem) {
        return prevCart.map(item =>
          item.cartItemId === cartItemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prevCart,
          { 
            cartItemId: cartItemId,
            productId: product.id,
            name: product.name,
            quantity: 1, 
            selectedPrice: selectedPrice,
            imageUrl: product.imageUrl,
          }
        ];
      }
    });

    setShowNotification(`${product.name} (${selectedPrice.weight}) added to cart!`);
    setTimeout(() => {
      setShowNotification('');
    }, 3000);
  }, []);
  
  const updateCartQuantity = (cartItemId: string, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.cartItemId !== cartItemId);
      }
      return prevCart.map(item => 
        item.cartItemId === cartItemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const removeFromCart = (cartItemId: string) => {
    setCart(prevCart => prevCart.filter(item => item.cartItemId !== cartItemId));
  };


  const cartItemCount = useMemo(() => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  }, [cart]);

  const featuredFlowerProducts = useMemo(() => {
    return PRODUCTS.filter(p => p.category === 'Flower');
  }, []);
  
  return (
    <div className="bg-slate-900 min-h-screen font-sans">
      <Header 
        cartCount={cartItemCount} 
        onCartClick={toggleCart}
        currentPage={page}
        onNavigate={navigateTo}
      />
      <ShoppingCart 
        isOpen={isCartOpen}
        onClose={toggleCart}
        cartItems={cart}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />
      <main>
        {page === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            
            <div className="container mx-auto px-4 py-16 sm:py-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-3">
                  <SparklesIcon className="w-8 h-8 text-primary" />
                  Featured Flower
                </h2>
                <p className="mt-4 text-lg text-slate-400">Curated selections just for you. Every order includes a Surprise Munchies Package!</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {featuredFlowerProducts.map(product => (
                  <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
                ))}
              </div>
            </div>

            <SubscriptionBanner />
          </>
        )}
        
        {page === 'shop' && (
          <ShopPage products={PRODUCTS} onAddToCart={addToCart} />
        )}

        {(page === 'greenbox' || page === 'about' || page === 'contact') && (
           <div className="container mx-auto px-4 py-32 text-center">
             <h1 className="text-4xl font-bold capitalize">{page} Page</h1>
             <p className="mt-4 text-slate-400">This page is under construction.</p>
           </div>
        )}
      </main>
      <Footer />
      
      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-primary text-white py-3 px-6 rounded-lg shadow-2xl animate-fade-in-up z-50">
          {showNotification}
        </div>
      )}
    </div>
  );
};

export default App;
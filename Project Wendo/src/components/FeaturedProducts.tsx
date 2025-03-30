import React, { useEffect, useState } from 'react';
import { ProductCard } from './ProductCard';
const featuredProducts = [{
  id: 1,
  name: 'Handwoven Basket Bag',
  price: 89.99,
  category: 'Bags',
  image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  rating: 5,
  isNew: true
}, {
  id: 2,
  name: 'Moroccan Berber Rug',
  price: 249.99,
  category: 'Rugs',
  image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  rating: 4
}, {
  id: 3,
  name: 'Embroidered Curtain Set',
  price: 129.99,
  category: 'Curtains',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  rating: 4
}, {
  id: 4,
  name: 'Leather Beaded Sandals',
  price: 79.99,
  category: 'Shoes',
  image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
  rating: 5,
  isNew: true
}];
export const FeaturedProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('featured-products');
      if (!element) return;
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section id="featured-products" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Featured Treasures
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our handpicked selection of authentic African merchandise,
            each piece telling a unique story of heritage and craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product, index) => <div key={product.id} className={`transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <ProductCard {...product} />
            </div>)}
        </div>
        <div className={`text-center mt-12 transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
            View All Products
          </button>
        </div>
      </div>
    </section>;
};
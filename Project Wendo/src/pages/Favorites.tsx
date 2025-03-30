import React from 'react';
import { useFavorites } from '../context/FavoritesContext';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
export function Favorites() {
  const {
    favorites
  } = useFavorites();
  if (favorites.length === 0) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Your Favorites List is Empty
        </h2>
        <p className="text-amber-700 mb-8">
          Browse our products and add some favorites!
        </p>
        <Link to="/shop" className="bg-amber-800 text-white px-8 py-3 rounded-full inline-block hover:bg-amber-900 transition-colors">
          Browse Products
        </Link>
      </div>;
  }
  return <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-amber-900 mb-8">Your Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {favorites.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>;
}
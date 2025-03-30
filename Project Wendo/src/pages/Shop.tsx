import React from 'react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
export function Shop() {
  return <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          All Products
        </h2>
        <p className="text-amber-700 max-w-2xl mx-auto">
          Discover our complete collection of authentic African merchandise
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>;
}
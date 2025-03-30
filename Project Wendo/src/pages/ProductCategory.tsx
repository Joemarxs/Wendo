import React from 'react';
import { useParams } from 'react-router-dom';
import { products, categories } from '../data/products';
import { ProductCard } from '../components/ProductCard';
export function ProductCategory() {
  const {
    categoryName
  } = useParams<{
    categoryName: string;
  }>();
  const category = categories.find(cat => cat.name === categoryName);
  const categoryProducts = products.filter(product => product.category === categoryName);
  if (!category) return null;
  return <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          {category.displayName}
        </h2>
        <p className="text-amber-700 max-w-2xl mx-auto">
          {category.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categoryProducts.map(product => <ProductCard key={product.id} {...product} />)}
      </div>
    </div>;
}
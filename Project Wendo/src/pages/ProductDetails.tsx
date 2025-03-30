import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShoppingBagIcon, HeartIcon, StarIcon } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
export function ProductDetails() {
  const {
    productId
  } = useParams<{
    productId: string;
  }>();
  const navigate = useNavigate();
  const {
    addToCart
  } = useCart();
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite
  } = useFavorites();
  const product = products.find(p => p.id === Number(productId));
  if (!product) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Product Not Found
        </h2>
        <button onClick={() => navigate('/shop')} className="bg-amber-800 text-white px-8 py-3 rounded-full inline-block hover:bg-amber-900 transition-colors">
          Back to Shop
        </button>
      </div>;
  }
  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };
  const handleFavoriteClick = () => {
    if (isFavorite(product.id)) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };
  return <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <div className="aspect-square rounded-xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-amber-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <StarIcon key={i} size={20} className={i < product.rating ? 'text-amber-500 fill-current' : 'text-gray-300'} />)}
            </div>
            <span className="text-amber-600">{product.rating} out of 5</span>
          </div>
          <p className="text-2xl font-bold text-amber-800 mb-6">
            ${product.price.toFixed(2)}
          </p>
          <div className="space-y-4 mb-8">
            <button onClick={handleAddToCart} className="w-full bg-amber-800 text-white px-8 py-3 rounded-full hover:bg-amber-900 transition-colors flex items-center justify-center gap-2">
              <ShoppingBagIcon size={20} />
              Add to Cart
            </button>
            <button onClick={handleFavoriteClick} className={`w-full border-2 px-8 py-3 rounded-full transition-colors flex items-center justify-center gap-2
                ${isFavorite(product.id) ? 'border-amber-800 text-amber-800 hover:bg-amber-50' : 'border-amber-300 text-amber-600 hover:border-amber-800 hover:text-amber-800'}`}>
              <HeartIcon size={20} className={isFavorite(product.id) ? 'fill-current' : ''} />
              {isFavorite(product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
          <div className="prose prose-amber max-w-none">
            <h3 className="text-lg font-medium text-amber-900 mb-2">
              Product Details
            </h3>
            <p className="text-amber-700">
              This authentic {product.category.toLowerCase()} is handcrafted by
              skilled artisans using traditional techniques. Each piece is
              unique and tells a story of African heritage and craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </div>;
}
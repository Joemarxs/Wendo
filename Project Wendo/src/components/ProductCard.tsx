import React, { useState } from 'react';
import { ShoppingBagIcon, HeartIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  isNew?: boolean;
}
export const ProductCard = ({
  id,
  name,
  price,
  category,
  image,
  rating,
  isNew = false
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const {
    addToCart
  } = useCart();
  const {
    addToFavorites,
    removeFromFavorites,
    isFavorite
  } = useFavorites();
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image
    });
  };
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!user) {
      navigate('/signin');
      return;
    }
    const product = {
      id,
      name,
      price,
      category,
      image,
      rating
    };
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(product);
    }
  };
  const favorited = isFavorite(id);
  return <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={() => navigate(`/product/${id}`)}>
      <div className="relative overflow-hidden aspect-square">
        <img src={image || '/placeholder.svg'} alt={name} className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110" />
        {isNew && <div className="absolute top-3 left-3 bg-amber-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            NEW
          </div>}
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button onClick={handleAddToCart} className="bg-white text-amber-800 p-2 rounded-full hover:bg-amber-100 transition-colors">
            <ShoppingBagIcon size={18} />
          </button>
          <button onClick={handleFavoriteClick} className={`${favorited ? 'bg-amber-600 text-white' : 'bg-white text-amber-800'} p-2 rounded-full hover:bg-amber-500 hover:text-white transition-colors`}>
            <HeartIcon size={18} className={favorited ? 'fill-white' : ''} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="text-xs text-amber-600 font-medium mb-1">
          {category}
        </div>
        <h3 className="font-medium text-amber-900 mb-1">{name}</h3>
        <div className="flex items-center justify-between">
          <p className="font-bold text-amber-800">${price.toFixed(2)}</p>
          <div className="flex">
            {[...Array(5)].map((_, i) => <span key={i} className={`text-sm ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}>
                ★
              </span>)}
          </div>
        </div>
      </div>
    </div>;
};
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useAuth } from './AuthContext';
interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}
interface FavoritesContextType {
  favorites: FavoriteItem[];
  addToFavorites: (product: FavoriteItem) => void;
  removeFromFavorites: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
}
const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);
export function FavoritesProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const {
    user
  } = useAuth();
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    const savedFavorites = localStorage.getItem(`favorites_${user?.id || 'guest'}`);
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  useEffect(() => {
    localStorage.setItem(`favorites_${user?.id || 'guest'}`, JSON.stringify(favorites));
  }, [favorites, user]);
  const addToFavorites = (product: FavoriteItem) => {
    setFavorites(current => [...current, product]);
  };
  const removeFromFavorites = (productId: number) => {
    setFavorites(current => current.filter(item => item.id !== productId));
  };
  const isFavorite = (productId: number) => {
    return favorites.some(item => item.id === productId);
  };
  return <FavoritesContext.Provider value={{
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }}>
      {children}
    </FavoritesContext.Provider>;
}
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
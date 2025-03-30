import React, { useState, createContext, useContext } from 'react';
import { products } from '../data/products';
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  searchResults: typeof products;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
}
const SearchContext = createContext<SearchContextType | undefined>(undefined);
export function SearchProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchResults = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase()));
  return <SearchContext.Provider value={{
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearchOpen,
    setIsSearchOpen
  }}>
      {children}
    </SearchContext.Provider>;
}
export function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
}
import React, { useEffect } from 'react';
import { XIcon, SearchIcon } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { Link } from 'react-router-dom';
export function SearchModal() {
  const {
    searchTerm,
    setSearchTerm,
    searchResults,
    isSearchOpen,
    setIsSearchOpen
  } = useSearch();
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    if (isSearchOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isSearchOpen, setIsSearchOpen]);
  if (!isSearchOpen) return null;
  return <div className="fixed inset-0 bg-black/50 z-50">
      <div className="fixed inset-x-0 top-0 bg-white p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <SearchIcon className="text-amber-800" />
            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search products..." className="flex-1 px-4 py-2 border-b-2 border-amber-200 focus:border-amber-600 outline-none" autoFocus />
            <button onClick={() => setIsSearchOpen(false)} className="p-2 hover:bg-amber-100 rounded-full">
              <XIcon className="text-amber-800" />
            </button>
          </div>
          {searchTerm && <div className="max-h-[60vh] overflow-y-auto">
              {searchResults.length === 0 ? <p className="text-center text-amber-800 py-4">
                  No products found
                </p> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {searchResults.map(product => <Link key={product.id} to={`/product/${product.id}`} onClick={() => setIsSearchOpen(false)} className="flex items-center gap-4 p-2 hover:bg-amber-50 rounded">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <h3 className="font-medium text-amber-900">
                          {product.name}
                        </h3>
                        <p className="text-sm text-amber-600">
                          ${product.price}
                        </p>
                      </div>
                    </Link>)}
                </div>}
            </div>}
        </div>
      </div>
    </div>;
}
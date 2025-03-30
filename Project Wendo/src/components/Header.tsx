import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBagIcon, SearchIcon, MenuIcon, XIcon, UserIcon, LogOutIcon, HeartIcon, PackageIcon } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useSearch } from '../context/SearchContext';
import { useAuth } from '../context/AuthContext';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const {
    totalItems
  } = useCart();
  const {
    setIsSearchOpen
  } = useSearch();
  const {
    user,
    signOut
  } = useAuth();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleSearchClick = () => {
    setIsSearchOpen(true);
  };
  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };
  const handleSignOut = () => {
    signOut();
    setUserMenuOpen(false);
  };
  const navItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Shop',
    path: '/shop'
  }, {
    name: 'Collections',
    path: '/collections'
  }, {
    name: 'About',
    path: '/about'
  }, {
    name: 'Contact',
    path: '/contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <h1 className={`text-2xl md:text-3xl font-bold ${isScrolled ? 'text-amber-800' : 'text-amber-900'}`}>
            <span className="transition-transform inline-block hover:rotate-3 duration-300">
              W
            </span>
            <span className="transition-transform inline-block hover:-rotate-3 duration-300">
              e
            </span>
            <span className="transition-transform inline-block hover:rotate-3 duration-300">
              n
            </span>
            <span className="transition-transform inline-block hover:-rotate-3 duration-300">
              d
            </span>
            <span className="transition-transform inline-block hover:rotate-3 duration-300">
              o
            </span>
          </h1>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium transition-colors ${location.pathname === item.path ? 'text-amber-600' : isScrolled ? 'text-amber-800 hover:text-amber-600' : 'text-amber-900 hover:text-amber-600'}`}>
              {item.name}
            </Link>)}
        </nav>

        <div className="flex items-center space-x-4">
          <button onClick={handleSearchClick} className={`p-1 rounded-full hover:bg-amber-100 transition-colors ${isScrolled ? 'text-amber-800' : 'text-amber-900'}`} aria-label="Search">
            <SearchIcon size={20} />
          </button>

          <div className="relative">
            <button onClick={toggleUserMenu} className={`p-1 rounded-full hover:bg-amber-100 transition-colors ${isScrolled ? 'text-amber-800' : 'text-amber-900'}`} aria-label="User menu">
              <UserIcon size={20} />
            </button>

            {userMenuOpen && <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 animate-fadeIn">
                {user ? <>
                    <div className="px-4 py-2 border-b border-amber-100">
                      <p className="text-sm font-medium text-amber-900">
                        {user.name}
                      </p>
                      <p className="text-xs text-amber-600">{user.email}</p>
                    </div>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50" onClick={() => setUserMenuOpen(false)}>
                      <div className="flex items-center">
                        <UserIcon size={16} className="mr-2" />
                        Profile
                      </div>
                    </Link>
                    <Link to="/orders" className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50" onClick={() => setUserMenuOpen(false)}>
                      <div className="flex items-center">
                        <PackageIcon size={16} className="mr-2" />
                        Orders
                      </div>
                    </Link>
                    <Link to="/favorites" className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50" onClick={() => setUserMenuOpen(false)}>
                      <div className="flex items-center">
                        <HeartIcon size={16} className="mr-2" />
                        Favorites
                      </div>
                    </Link>
                    <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 text-sm text-amber-700 hover:bg-amber-50">
                      <div className="flex items-center">
                        <LogOutIcon size={16} className="mr-2" />
                        Sign out
                      </div>
                    </button>
                  </> : <>
                    <Link to="/signin" className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50" onClick={() => setUserMenuOpen(false)}>
                      Sign in
                    </Link>
                    <Link to="/signup" className="block px-4 py-2 text-sm text-amber-700 hover:bg-amber-50" onClick={() => setUserMenuOpen(false)}>
                      Create account
                    </Link>
                  </>}
              </div>}
          </div>

          <Link to="/cart" className={`p-1 rounded-full hover:bg-amber-100 transition-colors relative ${isScrolled ? 'text-amber-800' : 'text-amber-900'}`}>
            <ShoppingBagIcon size={20} />
            {totalItems > 0 && <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>}
          </Link>

          <button className="md:hidden p-1 rounded-full hover:bg-amber-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t border-amber-200 py-4 px-4 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {navItems.map(item => <Link key={item.name} to={item.path} className={`font-medium py-2 px-4 rounded ${location.pathname === item.path ? 'bg-amber-100 text-amber-800' : 'text-amber-800 hover:bg-amber-50'}`} onClick={() => setMobileMenuOpen(false)}>
                {item.name}
              </Link>)}
          </nav>
        </div>}
    </header>;
};
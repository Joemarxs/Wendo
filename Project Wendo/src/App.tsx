import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { Collections } from './pages/Collections';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Cart } from './pages/Cart';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Favorites } from './pages/Favorites';
import { ProductDetails } from './pages/ProductDetails';
import { SearchModal } from './components/SearchModal';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';
import { SearchProvider } from './context/SearchContext';
import { ProductCategory } from './pages/ProductCategory';
export function App() {
  return <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <FavoritesProvider>
            <SearchProvider>
              <div className="min-h-screen bg-amber-50 flex flex-col">
                <Header />
                <SearchModal />
                <main className="flex-grow w-full">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/product/:productId" element={<ProductDetails />} />
                    <Route path="/category/:categoryName" element={<ProductCategory />} />
                  </Routes>
                </main>
                <Footer />
              </div>
            </SearchProvider>
          </FavoritesProvider>
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>;
}
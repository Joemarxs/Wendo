import React from 'react';
import { useCart } from '../context/CartContext';
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalPrice,
    totalItems
  } = useCart();
  if (items.length === 0) {
    return <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Your Cart is Empty
        </h2>
        <p className="text-amber-700 mb-8">
          Start shopping to add items to your cart!
        </p>
        <Link to="/shop" className="bg-amber-800 text-white px-8 py-3 rounded-full inline-block hover:bg-amber-900 transition-colors">
          Browse Products
        </Link>
      </div>;
  }
  return <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-amber-900 mb-8">Shopping Cart</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {items.map(item => <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-lg mb-4 shadow-sm">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-medium text-amber-900">{item.name}</h3>
                <p className="text-amber-600">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full hover:bg-amber-100">
                  <MinusIcon size={20} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full hover:bg-amber-100">
                  <PlusIcon size={20} />
                </button>
                <button onClick={() => removeFromCart(item.id)} className="p-1 rounded-full hover:bg-red-100 text-red-500 ml-2">
                  <TrashIcon size={20} />
                </button>
              </div>
            </div>)}
        </div>
        <div className="w-full lg:w-80">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-amber-900 mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-amber-700">
                <span>Items ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-amber-700">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t border-amber-200 pt-2 mt-2">
                <div className="flex justify-between font-bold text-amber-900">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-amber-800 text-white py-3 rounded-full hover:bg-amber-900 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>;
}
import React, { useEffect, useState } from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-amber-100 to-amber-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className={`w-full md:w-1/2 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 mb-4 leading-tight">
              Authentic African <br />
              <span className="text-amber-600">Craftsmanship</span>
            </h1>
            <p className="text-lg md:text-xl text-amber-800 mb-8 max-w-lg">
              Discover handcrafted treasures that bring the rich heritage and
              vibrant spirit of Africa into your home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-800 hover:bg-amber-900 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Shop Now <ArrowRightIcon size={18} className="ml-2" />
              </button>
              <button className="border-2 border-amber-800 text-amber-800 px-8 py-3 rounded-full font-medium hover:bg-amber-800 hover:text-white transition-all duration-300">
                Our Story
              </button>
            </div>
          </div>
          <div className={`w-full md:w-1/2 mt-10 md:mt-0 transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-amber-500 rounded-full opacity-10 animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1603298518996-539847c98d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="African handcrafted goods" className="w-full h-auto object-cover rounded-xl shadow-2xl relative z-10" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg z-20">
                <p className="font-medium text-amber-900">
                  Handcrafted with love and tradition
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 w-full h-64 -z-10 transform -translate-y-1/2 opacity-10">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/african-pattern.png')] bg-repeat"></div>
      </div>
    </section>;
};
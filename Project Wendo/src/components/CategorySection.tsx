import React, { useEffect, useState } from 'react';
const categories = [{
  name: 'Bags',
  image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  description: 'Handwoven bags made from natural fibers using traditional techniques'
}, {
  name: 'Rugs',
  image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  description: 'Authentic handmade rugs featuring traditional patterns and motifs'
}, {
  name: 'Curtains',
  image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  description: 'Beautifully crafted curtains with intricate embroidery and patterns'
}, {
  name: 'Shoes',
  image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
  description: 'Handmade leather shoes featuring traditional beadwork and designs'
}];
export const CategorySection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('categories-section');
      if (!element) return;
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight * 0.75) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return <section id="categories-section" className="py-16 bg-amber-100">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Explore Our Categories
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Each category represents a unique aspect of African craftsmanship,
            bringing together tradition and modern design.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className={`w-full lg:w-1/2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
              {categories.map((category, index) => <div key={category.name} className={`absolute inset-0 transition-all duration-700 ease-in-out ${activeCategory === index ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                  <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-white text-3xl font-bold mb-2">
                      {category.name}
                    </h3>
                    <p className="text-white/90 mb-4">{category.description}</p>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white w-max px-6 py-2 rounded-full transition-colors">
                      Shop {category.name}
                    </button>
                  </div>
                </div>)}
            </div>
          </div>
          <div className={`w-full lg:w-1/2 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-xl shadow-lg p-6 h-full">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">
                Browse Categories
              </h3>
              <div className="space-y-4">
                {categories.map((category, index) => <button key={category.name} className={`block w-full text-left p-4 rounded-lg transition-all duration-300 ${activeCategory === index ? 'bg-amber-800 text-white' : 'bg-amber-50 text-amber-800 hover:bg-amber-100'}`} onClick={() => setActiveCategory(index)}>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{category.name}</span>
                      <span className={`h-2 w-2 rounded-full ${activeCategory === index ? 'bg-amber-200' : 'bg-amber-300'}`}></span>
                    </div>
                  </button>)}
              </div>
              <div className="mt-8">
                <h4 className="font-medium text-amber-900 mb-2">
                  Why choose our {categories[activeCategory].name.toLowerCase()}
                  ?
                </h4>
                <ul className="space-y-2 text-amber-700">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                    Hand-crafted by skilled artisans
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                    Authentic materials and techniques
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                    Supporting local communities
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                    Unique designs with cultural significance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
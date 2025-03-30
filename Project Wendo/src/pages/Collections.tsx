import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const collections = [{
  id: 1,
  name: 'Desert Nomad',
  description: 'Inspired by the Saharan traditions, featuring earth tones and traditional patterns',
  image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  categories: ['Rugs', 'Bags', 'Curtains']
}, {
  id: 2,
  name: 'Tribal Heritage',
  description: 'Celebrating the rich cultural heritage of African tribal artistry',
  image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  categories: ['Bags', 'Shoes', 'Notebooks']
}, {
  id: 3,
  name: 'Modern Africa',
  description: 'Contemporary interpretations of traditional African designs',
  image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  categories: ['Shoes', 'Bags', 'Notebooks']
}, {
  id: 4,
  name: "Artisan's Pride",
  description: 'Showcasing the finest examples of African craftsmanship',
  image: 'https://images.unsplash.com/photo-1589203832113-de6c1d9a40c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  categories: ['Notebooks', 'Bags', 'Curtains']
}];
export function Collections() {
  const [activeCollection, setActiveCollection] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="bg-amber-50 min-h-screen">
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Collections
            </h1>
            <p className="text-lg text-amber-800 max-w-2xl mx-auto">
              Discover our carefully curated collections, each telling a unique
              story of African heritage and craftsmanship.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection, index) => <div key={collection.id} className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} onMouseEnter={() => setActiveCollection(index)}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={collection.image} alt={collection.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {collection.name}
                      </h3>
                      <p className="text-white/90 mb-4">
                        {collection.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {collection.categories.map(category => <Link key={category} to={`/category/${category.toLowerCase()}`} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm hover:bg-white/30 transition-colors">
                            {category}
                          </Link>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>
      {/* Featured Collection */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
              Featured Collection: {collections[activeCollection].name}
            </h2>
            <div className="bg-amber-50 rounded-xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/2">
                  <img src={collections[activeCollection].image} alt={collections[activeCollection].name} className="rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    About this Collection
                  </h3>
                  <p className="text-amber-700 mb-6">
                    {collections[activeCollection].description}
                  </p>
                  <div className="space-y-4">
                    {collections[activeCollection].categories.map(category => <Link key={category} to={`/category/${category.toLowerCase()}`} className="block bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition-colors text-center">
                          Shop {category}
                        </Link>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
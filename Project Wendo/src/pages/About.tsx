import React, { useEffect, useState } from 'react';
import { Users2Icon, HeartIcon, LeafIcon, AwardIcon } from 'lucide-react';
const values = [{
  icon: <Users2Icon className="h-8 w-8" />,
  title: 'Community Impact',
  description: 'Supporting local artisans and their families through fair trade practices and sustainable partnerships.'
}, {
  icon: <HeartIcon className="h-8 w-8" />,
  title: 'Authentic Craftsmanship',
  description: 'Preserving traditional techniques passed down through generations of skilled African artisans.'
}, {
  icon: <LeafIcon className="h-8 w-8" />,
  title: 'Sustainability',
  description: 'Committed to eco-friendly practices and sustainable material sourcing to protect our environment.'
}, {
  icon: <AwardIcon className="h-8 w-8" />,
  title: 'Quality Assurance',
  description: 'Every piece is carefully inspected to ensure the highest standards of quality and authenticity.'
}];
export function About() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  return <div className="bg-amber-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">
              Our Story
            </h1>
            <p className="text-lg text-amber-800 mb-8">
              Founded in 2010, Wendo began with a simple mission: to bring
              authentic African craftsmanship to the global market while
              supporting local artisans and preserving traditional techniques.
            </p>
          </div>
        </div>
      </section>
      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => <div key={value.title} className={`bg-amber-50 p-6 rounded-xl transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-amber-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-amber-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-amber-700">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* Journey Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
              Our Journey
            </h2>
            <div className="space-y-12">
              <div className={`flex flex-col md:flex-row gap-8 items-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                <div className="w-full md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Artisan crafting" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    Supporting Local Artisans
                  </h3>
                  <p className="text-amber-700 mb-4">
                    We work directly with over 200 artisans across Africa,
                    ensuring fair wages and sustainable practices while
                    preserving traditional crafting techniques.
                  </p>
                  <p className="text-amber-700">
                    Each product in our collection tells a unique story of
                    cultural heritage and skilled craftsmanship.
                  </p>
                </div>
              </div>
              <div className={`flex flex-col md:flex-row-reverse gap-8 items-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="w-full md:w-1/2">
                  <img src="https://images.unsplash.com/photo-1591203300097-391e5aeace82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Traditional crafts" className="rounded-lg shadow-lg" />
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4">
                    Preserving Traditions
                  </h3>
                  <p className="text-amber-700 mb-4">
                    We're committed to preserving and promoting traditional
                    African crafting techniques, ensuring these valuable skills
                    are passed down to future generations.
                  </p>
                  <p className="text-amber-700">
                    Every piece in our collection is a testament to
                    centuries-old traditions meeting contemporary design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}
import React, { useEffect, useState } from 'react';
import { TruckIcon, GlobeIcon, ShieldCheckIcon, ClockIcon } from 'lucide-react';
const shippingFeatures = [{
  icon: <TruckIcon className="h-8 w-8" />,
  title: 'Worldwide Shipping',
  description: 'We ship to over 180 countries with tracking provided for every order.'
}, {
  icon: <GlobeIcon className="h-8 w-8" />,
  title: 'Customs Friendly',
  description: 'All packages are properly declared to avoid customs issues.'
}, {
  icon: <ShieldCheckIcon className="h-8 w-8" />,
  title: 'Insured Delivery',
  description: 'Every shipment is insured against loss or damage during transit.'
}, {
  icon: <ClockIcon className="h-8 w-8" />,
  title: 'Fast Processing',
  description: 'Orders are processed within 1-2 business days of purchase.'
}];
export const ShippingSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('shipping-section');
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
  return <section id="shipping-section" className="py-16 bg-amber-800 text-white">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Shipping & Delivery
          </h2>
          <p className="text-amber-100 max-w-2xl mx-auto">
            We ensure that our authentic African merchandise reaches you safely,
            no matter where you are in the world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {shippingFeatures.map((feature, index) => <div key={feature.title} className={`bg-amber-700 rounded-xl p-6 transition-all duration-700 delay-${index * 100} transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-amber-300 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-amber-100">{feature.description}</p>
            </div>)}
        </div>
        <div className={`mt-12 bg-amber-700 rounded-xl overflow-hidden shadow-lg transition-all duration-700 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-2/3 mb-6 md:mb-0 md:pr-6">
                <h3 className="text-2xl font-bold mb-4">Shipping Rates</h3>
                <div className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-amber-600">
                    <span>Domestic (US)</span>
                    <span className="font-medium">$5.99 (Free over $75)</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-600">
                    <span>Canada & Mexico</span>
                    <span className="font-medium">$12.99</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-600">
                    <span>Europe</span>
                    <span className="font-medium">$19.99</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-amber-600">
                    <span>Rest of World</span>
                    <span className="font-medium">$24.99</span>
                  </div>
                </div>
                <p className="mt-4 text-amber-100 text-sm">
                  Delivery times vary by destination. Typically 3-5 business
                  days for domestic orders and 7-14 business days for
                  international orders.
                </p>
              </div>
              <div className="w-full md:w-1/3 bg-amber-600 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-center">Have a question?</h4>
                <p className="text-amber-100 text-sm mb-4 text-center">
                  Our customer service team is ready to assist you with any
                  shipping inquiries.
                </p>
                <button className="w-full bg-white text-amber-800 font-medium py-2 rounded hover:bg-amber-100 transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
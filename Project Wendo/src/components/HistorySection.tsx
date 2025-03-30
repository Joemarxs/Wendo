import React, { useEffect, useState } from 'react';
const historyContent = [{
  title: 'The Art of Bag Weaving',
  content: 'African bag weaving is an ancient craft dating back thousands of years. Traditional weavers use natural materials like raffia, sisal, and grasses to create intricate patterns that tell stories of community and culture. Each region has its own distinctive style, from the vibrant market bags of West Africa to the fine sisal weaving of East Africa. These techniques have been passed down through generations, preserving cultural heritage while adapting to contemporary designs.',
  image: 'https://images.unsplash.com/photo-1591203300097-391e5aeace82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  title: 'The Legacy of African Rugs',
  content: "Rug making in Africa represents one of the continent's oldest textile traditions. From the geometric patterns of Berber rugs in North Africa to the symbolic motifs of West African designs, each piece reflects the cultural identity of its makers. These rugs were traditionally created for both practical use and ceremonial purposes, with patterns and symbols carrying deep cultural significance. Today's artisans blend these ancient techniques with contemporary designs, creating pieces that honor tradition while embracing modern aesthetics.",
  image: 'https://images.unsplash.com/photo-1576188973526-0e5d7047b0cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  title: 'The Story Behind African Curtains',
  content: 'African textile arts have always been a form of cultural expression, and curtains represent an important aspect of this tradition. From the mud cloth (bogolanfini) techniques of Mali to the colorful appliqué work of East Africa, curtain making combines practical function with artistic expression. These textiles often feature symbols that represent proverbs, historical events, or spiritual beliefs. The vibrant colors and patterns not only beautify homes but also serve as visual storytelling that connects people to their heritage.',
  image: 'https://images.unsplash.com/photo-1620574387735-3624d75b2dbc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}, {
  title: 'The Craft of African Footwear',
  content: 'Traditional African footwear represents the perfect blend of functionality and artistic expression. From the leather sandals of the Maasai warriors to the embroidered slippers of North Africa, each style reflects environmental adaptation and cultural identity. Leather work has been refined over centuries, with techniques for tanning, dyeing, and decorating passed down through generations. Beadwork and embroidery add both beauty and cultural significance, with patterns often indicating social status, age group, or tribal affiliation.',
  image: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
}];
export const HistorySection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('history-section');
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
  return <section id="history-section" className="py-16 bg-amber-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/african-pattern.png')] bg-repeat"></div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            The Rich History of Our Merchandise
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Each product category carries centuries of tradition and cultural
            significance. Learn about the fascinating stories behind our
            collections.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-wrap border-b border-amber-200">
            {historyContent.map((item, index) => <button key={index} className={`px-4 py-3 font-medium transition-colors ${activeTab === index ? 'text-amber-800 border-b-2 border-amber-600' : 'text-amber-600 hover:text-amber-800'}`} onClick={() => setActiveTab(index)}>
                {item.title.split(' ').pop()}
              </button>)}
          </div>
          <div className="p-6 md:p-8">
            {historyContent.map((item, index) => <div key={index} className={`transition-opacity duration-500 ${activeTab === index ? 'block opacity-100' : 'hidden opacity-0'}`}>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-amber-700 mb-6 leading-relaxed">
                      {item.content}
                    </p>
                    <button className="text-amber-600 font-medium hover:text-amber-800 transition-colors flex items-center">
                      Learn more about our craftsmanship
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="w-full md:w-1/2">
                    <div className="relative overflow-hidden rounded-lg shadow-md">
                      <img src={item.image} alt={item.title} className="w-full h-auto object-cover aspect-video" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end">
                        <div className="p-4">
                          <p className="text-white text-sm">
                            Traditional{' '}
                            {item.title.split(' ').pop().toLowerCase()} making
                            process
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
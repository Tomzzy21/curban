
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import Categories from './components/Categories';
import Promo from './components/Promo';
import Men from './components/Men';
import Women from './components/Women';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <div className="bg-brand-bg rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-5 lg:-mt-10 relative z-10 pt-8 md:pt-12 lg:pt-16 text-brand-dark">
          <BestSellers />
          <Categories />
        </div>
        
        <div className="relative z-0">
          <Promo 
            subtitle="The Men's Edit"
            title="For the modern man"
            buttonText="Discover Men's"
            imageUrl="/men promo.jpg"
            imageAlt="Stylish man in modern outfit"
          />
        </div>
        <div className="bg-brand-bg rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-10 lg:-mt-20 relative z-10 pt-12 md:pt-16 lg:pt-24 text-brand-dark">
          <Men />
        </div>
        
        <div className="relative z-0">
           <Promo 
            subtitle="The Women's Edit"
            title="Effortless elegance for every occasion."
            buttonText="Discover Women's"
            imageUrl="/women promo.jpg"
            imageAlt="Stylish woman in modern outfit"
          />
        </div>
        <div className="bg-brand-bg rounded-t-[40px] md:rounded-t-[60px] lg:rounded-t-[80px] -mt-10 lg:-mt-20 relative z-10 pt-12 md:pt-16 lg:pt-24 text-brand-dark">
          <Women />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
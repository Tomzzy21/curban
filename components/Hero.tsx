import React from 'react';
import { ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
    return (
        <section className="relative h-[80vh] min-h-[600px] lg:h-screen flex items-center text-white">
            <div className="absolute inset-0 z-0">
                <img
                    src="/public/hero.jpg"
                    alt="Stylish clothing on display"
                    className="w-full h-full object-cover"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-transparent"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center">
                    <div className="lg:w-2/3 text-center">
                        <p className="font-semibold text-brand-cream uppercase tracking-widest text-xl mb-4">Art, Minimalism, Culture</p>
                        <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
                            Explore our curated collection where minimalism, culture, and functional design converge. Progressive, contemporary apparel for the modern lifestyle.
                        </p>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
                        >
                            Shop The Collection
                            <ArrowRightIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
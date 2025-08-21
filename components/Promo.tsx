
import React from 'react';
import { ArrowRightIcon } from './Icons';

interface PromoProps {
  subtitle: string;
  title: string;
  buttonText: string;
  imageUrl: string;
  imageAlt: string;
}

const Promo: React.FC<PromoProps> = ({ subtitle, title, buttonText, imageUrl, imageAlt }) => {
    return (
        <section className="relative bg-brand-dark py-24 sm:py-32 lg:py-40">
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-brand-dark/50"></div>
            </div>
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <p className="font-semibold uppercase tracking-widest text-brand-cream">{subtitle}</p>
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold my-4 max-w-4xl mx-auto leading-tight">
                    {title}
                </h2>
                <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300 mt-6"
                >
                    {buttonText}
                    <ArrowRightIcon className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default Promo;

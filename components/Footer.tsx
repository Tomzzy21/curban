import React from 'react';
import { LogoIcon } from './Icons';

const Footer: React.FC = () => {
    const companyLinks = ['About Us', 'Journal', 'Careers', 'Sustainability'];
    const serviceLinks = ['FAQ', 'Contact', 'Shipping & Returns', 'Size Guide', 'Track Order'];

    return (
        <footer className="bg-brand-dark text-white pt-16 lg:pt-24 pb-8">
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0"></div>
                 <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div>
                        <LogoIcon className="h-16 w-16 mb-4 -ml-4" />
                        <h3 className="font-bold text-lg mb-2">Join the curbanpalace community</h3>
                        <p className="text-gray-400 mb-4 text-sm">Be the first to know about new collections, special offers, and style news.</p>
                        <form className="flex">
                            <input type="email" placeholder="Email" className="bg-white/10 text-white placeholder-gray-400 py-3 px-4 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-brand-yellow w-full"/>
                            <button type="submit" className="bg-brand-yellow text-brand-dark font-bold py-3 px-6 rounded-r-lg hover:bg-opacity-90 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 font-serif">Shop</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">New Releases</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Best Sellers</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Men</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Women</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                     <div>
                        <h3 className="font-bold text-xl mb-4 font-serif">Customer Service</h3>
                        <ul className="space-y-2">
                             {serviceLinks.map(link => (
                                <li key={link}>
                                    <a href="#" className="text-gray-300 hover:text-brand-yellow transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} curbanpalace. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
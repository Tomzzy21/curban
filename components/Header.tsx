import React, { useState } from 'react';
import { LogoIcon, SearchIcon, UserIcon, CartIcon } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['New Releases', 'Best Sellers', 'Men', 'Women', 'Accessories'];

    return (
        <header className="absolute top-0 left-0 right-0 z-20 py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <a href="#" aria-label="Home" className="block">
                        <img 
                            src="/logo.PNG" 
                            alt="C Urban Palace Logo" 
                            className="h-20 w-20 sm:h-28 sm:w-28 object-contain" 
                        />
                    </a>
                    
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link} href="#" className="text-white hover:text-brand-yellow transition-colors duration-300 font-medium">
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 rounded-full py-2 pl-10 pr-4 w-48 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
                            />
                            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-300" />
                        </div>
                        <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                            <UserIcon className="h-6 w-6 text-white" />
                        </a>
                        <a href="#" className="p-2 rounded-full bg-brand-yellow hover:bg-opacity-80 transition-colors duration-300">
                            <CartIcon className="h-6 w-6 text-brand-dark" />
                        </a>
                    </div>
                    
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
                 {isMenuOpen && (
                    <div className="lg:hidden mt-4 bg-black/50 backdrop-blur-md rounded-lg p-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map(link => (
                                <a key={link} href="#" className="text-white hover:text-brand-yellow transition-colors duration-300 font-medium text-center">
                                    {link}
                                </a>
                            ))}
                            <div className="flex justify-center items-center space-x-4 pt-4 border-t border-gray-700">
                                <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300">
                                    <UserIcon className="h-6 w-6 text-white" />
                                </a>
                                <a href="#" className="p-2 rounded-full bg-brand-yellow hover:bg-opacity-80 transition-colors duration-300">
                                    <CartIcon className="h-6 w-6 text-brand-dark" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
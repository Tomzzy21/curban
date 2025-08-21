import React, { useRef } from 'react';
import { TshirtIcon, JacketIcon, DressIcon, PantsIcon, AccessoryIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from './Icons';

const categories = [
    { name: 'T-Shirts', icon: TshirtIcon },
    { name: 'Outerwear', icon: JacketIcon },
    { name: 'Dresses', icon: DressIcon },
    { name: 'Pants', icon: PantsIcon },
    { name: 'Accessories', icon: AccessoryIcon },
    { name: 'Best Sellers', icon: TshirtIcon },
];

const CategoryCard: React.FC<{ category: typeof categories[0] }> = ({ category }) => (
    <div className="bg-brand-cream hover:bg-opacity-80 transition-colors duration-300 p-6 rounded-3xl flex items-center justify-between w-full h-full cursor-pointer">
        <div className="flex items-center gap-4">
            <category.icon className="w-10 h-10 text-brand-dark" />
            <h3 className="font-bold text-lg text-brand-dark">{category.name}</h3>
        </div>
        <div className="bg-white rounded-full p-2">
            <ArrowRightIcon className="w-5 h-5 text-brand-dark" />
        </div>
    </div>
);

const Categories: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <p className="font-semibold text-brand-gray uppercase tracking-widest mb-2">Collection</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">Shop By Category</h2>
                </div>
                <div className="hidden md:flex items-center gap-4 mt-4 md:mt-0">
                    <button onClick={() => scroll('left')} className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-100 transition-colors">
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    <button onClick={() => scroll('right')} className="bg-white border border-gray-200 rounded-full p-3 hover:bg-gray-100 transition-colors">
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div ref={scrollContainerRef} className="flex gap-4 md:gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {categories.map((category) => (
                    <div key={category.name} className="snap-start flex-shrink-0 w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/5">
                        <CategoryCard category={category} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;
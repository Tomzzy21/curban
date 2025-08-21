
import React, { useRef } from 'react';
import { CartIcon, ChevronLeftIcon, ChevronRightIcon, ArrowRightIcon } from './Icons';
import { getImageUrl } from '../utils/imageUtils';

interface Product {
    id: number;
    category: string;
    name: string;
    price: number;
    originalPrice: number;
    imageUrl: string;
}

const products: Product[] = [
    {
        id: 1,
        category: 'Dresses',
        name: 'Curban Elegant White Gown',
        price: 297000,
        originalPrice: 350000,
        imageUrl: '/441290730_752636596953239_8484300481466014957_n.jpg'
    },
    {
        id: 2,
        category: 'Trousers',
        name: 'Curban High-Waisted Linen Pants',
        price: 217500,
        originalPrice: 250000,
        imageUrl: '/468538528_924249185853888_2422612676110172046_n.jpg'
    },
    {
        id: 3,
        category: 'Tops',
        name: 'Curban Satin Blouse with Bow',
        price: 187500,
        originalPrice: 225000,
        imageUrl: '/470973336_18480103753005441_7751824896487466936_n.jpg'
    },
    {
        id: 4,
        category: 'Accessories',
        name: 'Curban Designer Handbag',
        price: 442500,
        originalPrice: 500000,
        imageUrl: '/468556955_18474536842005441_9048099850671763629_n.jpg'
    },
    {
        id: 5,
        category: 'Footwear',
        name: 'Curban Leather Ankle Strap Heels',
        price: 350000,
        originalPrice: 415000,
        imageUrl: '/489814099_18387788620115642_2907338156853625598_n (1).jpg'
    }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white rounded-3xl p-4 flex flex-col h-full border border-gray-100 shadow-sm md:hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img 
                src={getImageUrl(product.imageUrl)} 
                alt={product.name} 
                className="w-full h-80 object-cover rounded-2xl" 
            />
            <button className="absolute top-3 right-3 bg-white/50 backdrop-blur-sm text-brand-dark rounded-full p-2.5 hover:bg-white transition-colors">
                <CartIcon className="w-5 h-5" />
            </button>
        </div>
        <div className="mt-4 flex flex-col flex-grow">
            <p className="text-sm text-brand-gray uppercase tracking-wider">{product.category}</p>
            <h3 className="font-bold text-lg text-brand-dark mt-1 flex-grow">{product.name}</h3>
            <div className="flex items-baseline gap-2 mt-2">
                <span className="text-xl font-bold text-brand-dark">₦{product.price.toLocaleString()}</span>
                <span className="text-md line-through text-gray-400">₦{product.originalPrice.toLocaleString()}</span>
            </div>
        </div>
    </div>
);


const Women: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <p className="font-semibold text-brand-gray uppercase tracking-widest mb-2">For Her</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">Explore The Women's Collection</h2>
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
            <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
                {products.map((product) => (
                    <div key={product.id} className="snap-start flex-shrink-0 w-4/5 sm:w-1/3 md:w-1/4 lg:w-1/5">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <div className="text-center mt-12">
                <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
                >
                    Shop All Women's
                    <ArrowRightIcon className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default Women;
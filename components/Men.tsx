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
        category: 'Shirts',
        name: 'Curban Classic White Dress Shirt',
        price: 132000,
        originalPrice: 165000,
        imageUrl: '/322285450_676625784117049_7821060576710252280_n.jpg'
    },
    {
        id: 2,
        category: 'Trousers',
        name: 'Curban Slim-Fit Tailored Pants',
        price: 172500,
        originalPrice: 210000,
        imageUrl: '/336353679_1580464265788145_369852420405585723_n.jpg'
    },
    {
        id: 3,
        category: 'Outerwear',
        name: 'Curban Distressed Denim Jacket',
        price: 262500,
        originalPrice: 330000,
        imageUrl: '/345798211_1623716774773589_111700024056150214_n.jpg'
    },
    {
        id: 4,
        category: 'Footwear',
        name: 'Curban Leather Chelsea Boots',
        price: 315000,
        originalPrice: 375000,
        imageUrl: '/386177952_1088123992173423_3339922311590925547_n.jpg'
    },
    {
        id: 5,
        category: 'Accessories',
        name: 'Curban Minimalist Leather Belt',
        price: 42000,
        originalPrice: 52500,
        imageUrl: '/396196726_3639327329676014_91158986546847493_n.jpg'
    }
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className="bg-white rounded-3xl p-4 flex flex-col h-full border border-gray-100 shadow-sm md:hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
            <img src={getImageUrl(product.imageUrl)} alt={product.name} className="w-full h-80 object-cover rounded-2xl" />
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

const Men: React.FC = () => {
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
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <p className="font-semibold text-brand-gray uppercase tracking-widest mb-2">For Him</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">Explore The Men's Collection</h2>
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
                    Shop All Men's
                    <ArrowRightIcon className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default Men;
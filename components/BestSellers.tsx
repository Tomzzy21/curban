
import React from 'react';
import { ArrowRightIcon } from './Icons';
import { getImageUrl } from '../utils/imageUtils';

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

const newProducts: Product[] = [
    { id: 1, name: 'Curban Minimalist Knit Top', price: 165000, imageUrl: '/322285450_676625784117049_7821060576710252280_n.jpg' },
    { id: 2, name: 'Curban Flowy Wide-Leg Pants', price: 232500, imageUrl: '/336353679_1580464265788145_369852420405585723_n.jpg' },
    { id: 3, name: 'Curban Structured Crossbody Bag', price: 345000, imageUrl: '/345798211_1623716774773589_111700024056150214_n.jpg' },
    { id: 4, name: 'Curban Linen Utility Jumpsuit', price: 420000, imageUrl: '/386177952_1088123992173423_3339922311590925547_n.jpg' },
    { id: 5, name: 'Curban Architectural Hoop Earrings', price: 142500, imageUrl: '/396196726_3639327329676014_91158986546847493_n.jpg' },
    { id: 6, name: 'Curban City Loafer', price: 315000, imageUrl: '/396483707_343655461671110_2241197779907392891_n.jpg' },
    { id: 7, name: 'Curban Essential Tote', price: 412500, imageUrl: '/441290730_752636596953239_8484300481466014957_n.jpg' },
    { id: 8, name: 'Curban Statement Necklace', price: 187500, imageUrl: '/468538528_924249185853888_2422612676110172046_n.jpg' },
];


const ProductCard: React.FC<{ product: Product; index: number }> = ({ product, index }) => {
    // Create a consistent pattern: every 3rd item is slightly taller
    // This creates a nice rhythm in the masonry layout
    const isTallItem = index % 3 === 0; // Every 3rd item is taller
    const mobileHeight = isTallItem ? 'h-[360px]' : 'h-[300px]';
    const desktopHeight = 'h-80';

    return (
        <div className="group cursor-pointer mb-6 break-inside-avoid">
            <div className="rounded-3xl overflow-hidden">
                <img 
                    src={getImageUrl(product.imageUrl)} 
                    alt={product.name} 
                    className={`w-full ${mobileHeight} md:h-72 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-500 ${
                        product.name.includes('Architectural Hoop') ? 'object-left' : 'object-center'
                    }`}
                    style={{
                        ...(product.name.includes('Architectural Hoop') ? { objectPosition: '20% 50%' } : {}),
                        maxWidth: '100%'
                    }}
                />
            </div>
            <div className="mt-4">
                <h3 className="font-bold text-lg text-brand-dark">{product.name}</h3>
                <p className="text-brand-gray mt-1">₦{product.price.toLocaleString()}</p>
            </div>
        </div>
    );
};


const BestSellers: React.FC = () => {
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 lg:pt-3 pb-12 lg:pb-20">
            <div className="text-center mb-4">
                 <p className="font-semibold text-brand-gray uppercase tracking-widest mb-2">New Releases</p>
                    <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark leading-tight">
                        Fresh Off The Press
                    </h2>
            </div>
            
            <div className="columns-2 md:columns-3 lg:columns-4 gap-6 [&>div]:mb-6">
                 {newProducts.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                ))}
            </div>

            <div className="text-center mt-12">
                 <a
                    href="#"
                    className="inline-flex items-center gap-2 bg-brand-yellow text-brand-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-opacity-90 transition-all duration-300"
                >
                    Shop New Releases
                    <ArrowRightIcon className="w-5 h-5" />
                </a>
            </div>
        </section>
    );
};

export default BestSellers;

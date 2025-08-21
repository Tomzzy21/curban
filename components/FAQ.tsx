import React, { useState } from 'react';
import { ChevronDownIcon } from './Icons';

interface FaqData {
    question: string;
    answer: string;
}

const faqData: FaqData[] = [
    {
        question: 'What is your return policy?',
        answer: 'We offer a 30-day return policy for all unworn items with tags attached. Please visit our returns portal to initiate a return or exchange. Final sale items are not eligible for return.'
    },
    {
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by location. All applicable duties and taxes are the responsibility of the customer.'
    },
    {
        question: 'How do I find the right size?',
        answer: 'You can find a detailed size guide on each product page, which includes measurements and fit recommendations. If you have further questions, our customer service team is happy to help.'
    },
    {
        question: 'How should I care for my garments?',
        answer: 'To ensure the longevity of your curbanpalace pieces, we recommend following the care instructions on the garment\'s label. Generally, we suggest gentle machine washing or hand washing in cold water and laying flat to dry.'
    },
    {
        question: 'Where are your products made?',
        answer: 'Our products are designed in our studio in Los Angeles and ethically crafted by our trusted partners in Portugal and Vietnam. We are committed to responsible and sustainable manufacturing practices.'
    }
];

const FaqItem: React.FC<{ item: FaqData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left py-5 px-6"
            >
                <h3 className="font-semibold text-lg text-brand-dark">{item.question}</h3>
                <ChevronDownIcon className={`w-6 h-6 text-brand-dark transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
            >
                <p className="px-6 pb-5 text-brand-gray leading-relaxed">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleClick = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="text-center mb-12">
                <p className="font-semibold text-brand-gray uppercase tracking-widest mb-2">Help</p>
                <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">Frequently Asked Questions</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                <img
                    src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
                    alt="Customer shopping for clothes"
                    className="w-full h-auto object-cover rounded-4xl"
                />
                <div className="bg-brand-cream/50 rounded-3xl overflow-hidden">
                    {faqData.map((item, index) => (
                        <FaqItem
                            key={index}
                            item={item}
                            isOpen={openIndex === index}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
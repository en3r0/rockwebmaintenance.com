
import React, { useState } from 'react';
import { FAQS } from '../constants';
import type { FAQ } from '../types';

const FaqItem: React.FC<{ faq: FAQ }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-neutral-300">
      <button
        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold text-neutral-900"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{faq.question}</span>
        <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
        <div className="overflow-hidden">
            <p className="pb-5 pr-4 text-neutral-700">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
};


const FaqSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, index) => (
            <FaqItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

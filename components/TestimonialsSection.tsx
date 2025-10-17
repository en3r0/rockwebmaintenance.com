import React from 'react';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <svg className="absolute top-4 left-4 h-16 w-16 text-neutral-100" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.333 7C6.387 7 4 9.387 4 12.333v8C4 23.28 6.387 25.667 9.333 25.667H14v-9.333H9.333V7zM22.667 7c-2.946 0-5.333 2.387-5.333 5.333v8c0 2.946 2.387 5.334 5.333 5.334H28v-9.333h-4.667V7h.001z" />
        </svg>
        <p className="relative text-neutral-700 text-lg italic">"{testimonial.quote}"</p>
        <div className="flex items-center mt-6">
            <img className="h-14 w-14 rounded-full ring-2 ring-primary ring-offset-2" src={testimonial.avatar} alt={testimonial.name} />
            <div className="ml-4">
                <p className="font-bold text-neutral-900">{testimonial.name}</p>
                <p className="text-neutral-500">{testimonial.title}</p>
            </div>
        </div>
    </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            The Partner Our Clients Rely On.
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
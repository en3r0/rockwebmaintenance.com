
import React from 'react';
import { CORE_SERVICES, ADVANCED_SERVICES } from '../constants';
import type { Service } from '../types';

const CheckIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ServiceList: React.FC<{ title: string; services: Service[] }> = ({ title, services }) => (
    <div className="bg-neutral-100 p-8 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-primary mb-6">{title}</h3>
        <ul className="space-y-4">
            {services.map((service, index) => (
                <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                        <CheckIcon />
                    </div>
                    <span className="ml-3 text-neutral-700 text-lg">{service.name}</span>
                </li>
            ))}
        </ul>
    </div>
);


const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What We Handle For You
          </h2>
          <p className="mt-4 text-lg text-neutral-500">The "ingredients" for your peace of mind.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ServiceList title="Core Maintenance" services={CORE_SERVICES} />
            <ServiceList title="Advanced & E-commerce Support" services={ADVANCED_SERVICES} />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

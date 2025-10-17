import React from 'react';
import { PAIN_POINTS } from '../constants';
import type { PainPoint } from '../types';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            Stop Letting Website Issues Slow You Down.
          </h2>
          <p className="mt-4 text-lg text-neutral-500">Is this you?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PAIN_POINTS.map((point: PainPoint, index: number) => (
            <div key={index} className="text-center p-6 bg-neutral-100 rounded-lg shadow-sm">
              <div className="flex justify-center items-center mb-4">
                 <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary/10">
                  {point.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{point.title}</h3>
              <p className="text-neutral-700">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
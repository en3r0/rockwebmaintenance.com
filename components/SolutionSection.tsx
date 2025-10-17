import React from 'react';

const Step: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-24 w-24 rounded-full bg-primary text-white mb-4 shadow-lg">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
        <p className="text-neutral-700">{description}</p>
    </div>
);

const SolutionSection: React.FC = () => {
  const steps = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      title: '1. Onboard & Secure',
      description: 'We start with a full site audit and implement foundational security, backups, and monitoring from day one.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V7a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: '2. Monitor & Maintain',
      description: 'Our team proactively handles all updates, optimizations, and scans, providing you with monthly reports on your site\'s health.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: '3. Support & Grow',
      description: 'Need a change or have a question? Submit unlimited tasks to our team for quick fixes and on-demand expert support.',
    },
  ];

  return (
    <section id="solution" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                Your Dedicated Tech Partner, On-Demand.
            </h2>
            <p className="mt-6 text-lg text-neutral-700">
               Our process is simple, transparent, and designed for your peace of mind. Here's how we keep your site fast, secure, and profitable.
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {steps.map(step => (
                <Step key={step.title} icon={step.icon} title={step.title} description={step.description} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
import React from 'react';

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <section 
      className="relative text-white bg-no-repeat bg-cover bg-center"
      >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-secondary/80 to-primary/90"></div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Your Website, <span className="text-accent">Always On.</span>
            <br />
            We Handle the Rest.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-blue-100">
            Proactive maintenance and on-demand support for WordPress & E-commerce sites. We offer clear plans for every business, from local shops to mission-critical online stores.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={onGetStartedClick}
              className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg shadow-lg hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get a Free Site Health Check
            </button>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-left sm:text-center">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="font-semibold text-blue-100">24/7 Uptime Monitoring</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="font-semibold text-blue-100">Performance Optimization</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-accent mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <span className="font-semibold text-blue-100">Expert On-Demand Support</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

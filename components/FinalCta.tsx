import React from 'react';

interface FinalCtaProps {
  onGetStartedClick: () => void;
}

const FinalCta: React.FC<FinalCtaProps> = ({ onGetStartedClick }) => {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
            <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="none">
                <path fill="currentColor" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,149.3C672,149,768,203,864,218.7C960,235,1056,213,1152,192C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
        </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ready to Put Your Website on Autopilot?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-blue-100">
            Your website is your most important digital asset. Let's make sure it's always secure, fast, and working for you.
          </p>
          <div className="mt-8">
            <button
              onClick={onGetStartedClick}
              className="inline-block px-8 py-4 bg-accent text-primary font-bold rounded-lg shadow-lg hover:bg-yellow-300 transform hover:-translate-y-1 transition-all duration-300"
            >
              Get Your Free Site Health Check Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
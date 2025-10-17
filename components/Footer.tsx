import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Rock Web Maintenance. All rights reserved.</p>
          </div>
          <div>
            <p>
              Or email us at{' '}
              <a href="mailto:hello@rockwebmaintenance.com" className="font-semibold text-accent hover:text-yellow-300 transition-colors">
                hello@rockwebmaintenance.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
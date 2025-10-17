import React, { useState, useEffect } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    website: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Reset form state when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(false);
        setFormData({ name: '', email: '', website: '', message: '' });
        setErrors({ name: '', email: '', website: '' });
      }, 300); // match transition duration
    }
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear validation error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', website: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website URL is required.';
      isValid = false;
    } else {
        try {
            // Prepend protocol if missing for robust validation by URL constructor
            const url = formData.website.startsWith('http') ? formData.website : `https://${formData.website}`;
            new URL(url);
        } catch (_) {
            newErrors.website = 'Please enter a valid URL (e.g., https://example.com).';
            isValid = false;
        }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000); // Close modal after 2 seconds
    }, 1500);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg shadow-xl w-full max-w-lg p-8 relative transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
        style={{ animation: 'fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-neutral-500 hover:text-neutral-900 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 id="modal-title" className="text-2xl font-bold text-neutral-900">Thank You!</h2>
            <p className="mt-2 text-neutral-700">We've received your request and will be in touch shortly.</p>
          </div>
        ) : (
          <>
            <h2 id="modal-title" className="text-3xl font-bold text-neutral-900 mb-2">Get Your Free Site Health Check</h2>
            <p className="text-neutral-500 mb-6">Fill out the form below and we'll get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.name ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary ${errors.name ? 'focus:border-red-500' : 'focus:border-primary'} sm:text-sm`}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                  {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.email ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary ${errors.email ? 'focus:border-red-500' : 'focus:border-primary'} sm:text-sm`}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                  {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-neutral-700">Website URL</label>
                  <input 
                    type="url" 
                    name="website" 
                    id="website" 
                    value={formData.website}
                    onChange={handleChange}
                    required 
                    placeholder="https://example.com" 
                    className={`mt-1 block w-full px-3 py-2 bg-white border ${errors.website ? 'border-red-500' : 'border-neutral-300'} rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary ${errors.website ? 'focus:border-red-500' : 'focus:border-primary'} sm:text-sm`}
                    aria-invalid={!!errors.website}
                    aria-describedby={errors.website ? 'website-error' : undefined}
                  />
                  {errors.website && <p id="website-error" className="mt-1 text-sm text-red-600">{errors.website}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Tell us about your needs (optional)</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-md shadow-sm placeholder-neutral-400 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" disabled={isSubmitting} className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:bg-neutral-300 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : 'Send Request'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
       <style>{`
        @keyframes fade-in-scale {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-fade-in-scale {
          animation: fade-in-scale 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default ContactModal;



import React, { useEffect } from 'react';
import { PRICING_PLANS } from '../constants';
import type { Plan } from '../types';

interface PlanCardProps {
  plan: Plan;
  onGetStartedClick: () => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onGetStartedClick }) => {
  const popularClass = plan.isMostPopular ? 'border-primary border-2 scale-105 shadow-2xl shadow-primary/20' : 'border-neutral-300 border';
  const buttonClass = plan.isMostPopular
    ? 'bg-primary text-white hover:bg-secondary'
    : 'bg-secondary text-white hover:bg-primary';
  const customButtonClass = plan.isCustom ? 'bg-accent text-primary hover:bg-yellow-400' : buttonClass;
  const paypalButtonContainerId = `paypal-button-container-${plan.paypalPlanId}`;

  useEffect(() => {
    if (plan.paypalPlanId) {
      const renderButton = () => {
        const paypal = (window as any).paypal;
        if (paypal && paypal.Buttons) {
          const container = document.getElementById(paypalButtonContainerId);
          // Ensure the container exists and is empty before rendering
          if (container && container.innerHTML === '') {
            paypal.Buttons({
              style: {
                shape: 'rect',
                color: 'blue',
                layout: 'vertical',
                label: 'subscribe'
              },
              createSubscription: function(data: any, actions: any) {
                return actions.subscription.create({
                  plan_id: plan.paypalPlanId
                });
              },
              onApprove: function(data: any, actions: any) {
                alert(`Subscription successful! Your ID is ${data.subscriptionID}`);
              },
              onError: function(err: any) {
                console.error('PayPal button error:', err);
              }
            }).render(`#${paypalButtonContainerId}`);
          }
        }
      };

      // The PayPal script might not be loaded immediately.
      // We'll use an interval to check for the paypal object's availability.
      const intervalId = setInterval(() => {
        if ((window as any).paypal && (window as any).paypal.Buttons) {
          clearInterval(intervalId);
          renderButton();
        }
      }, 100);

      // Cleanup function to clear the interval if the component unmounts.
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [plan.paypalPlanId, paypalButtonContainerId]);


  return (
    <div className={`relative flex flex-col bg-white rounded-lg p-8 transform transition-transform duration-300 ${popularClass}`}>
      {plan.isMostPopular && (
        <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
          <span className="bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}
      <h3 className="text-2xl font-bold text-neutral-900 text-center">{plan.name}</h3>
      <p className="text-neutral-500 text-center mt-2 h-12">{plan.subtitle}</p>
      
      <div className="mt-6 text-center text-neutral-900">
        <span className="text-4xl font-extrabold">{plan.price}</span>
        {!plan.isCustom && <span className="text-base font-medium text-neutral-500">/ month</span>}
      </div>

      <ul className="mt-8 space-y-4 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="http://www.w3.org/2000/svg" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="ml-3 text-neutral-700">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        {plan.isCustom ? (
          <button onClick={onGetStartedClick} className={`block w-full text-center py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 ${customButtonClass}`}>
            Request a Quote
          </button>
        ) : plan.paypalPlanId ? (
          <div className="relative group">
            <button
              disabled
              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 ${plan.isMostPopular ? 'bg-primary text-white group-hover:bg-secondary' : 'bg-secondary text-white group-hover:bg-primary'}`}
            >
              Get Started
            </button>
            <div
              id={paypalButtonContainerId}
              className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
            ></div>
          </div>
        ) : (
          <button onClick={onGetStartedClick} className={`block w-full text-center py-3 px-6 rounded-lg font-semibold shadow-md transition-all duration-300 ${buttonClass}`}>
            Get Started
          </button>
        )}
      </div>
    </div>
  );
};

interface PricingSectionProps {
  onGetStartedClick: () => void;
}

const PricingSection: React.FC<PricingSectionProps> = ({ onGetStartedClick }) => {
  return (
    <section id="plans" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Simple, Predictable Pricing.</h2>
          <p className="mt-4 text-lg text-neutral-500">Choose the plan that's right for you. No hidden fees, ever.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {PRICING_PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} onGetStartedClick={onGetStartedClick} />
          ))}
        </div>
        <div className="text-center mt-12">
             <div className="inline-block bg-accent text-primary font-bold px-4 py-2 rounded-lg">
                Save 15% with an annual plan!
            </div>
          <p className="mt-6 text-neutral-700 italic">
            "An expert tech partner for less than the cost of one freelance emergency fix."
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
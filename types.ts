import type React from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface PainPoint {
  // Fix: Use React.ReactNode instead of JSX.Element for component types in .ts files to avoid JSX namespace error.
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Service {
  name: string;
}

export interface Plan {
  name: string;
  subtitle: string;
  price: string;
  features: string[];
  isMostPopular: boolean;
  isCustom: boolean;
  paypalPlanId?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
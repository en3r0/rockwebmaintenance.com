

import type { NavLink, PainPoint, Service, Plan, Testimonial, FAQ } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { name: 'Services', href: '#services' },
  { name: 'How It Works', href: '#solution' },
  { name: 'Plans', href: '#plans' },
  { name: 'Why Us?', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
];

export const PAIN_POINTS: PainPoint[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Worrying About Updates?',
    description: 'You hold your breath every time you click "update," hoping nothing breaks.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Losing Customers?',
    description: 'Slow load times and surprise errors are costing you sales and leads.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Wasting Your Time?',
    description: 'You\'re spending hours on tech problems instead of growing your business.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Feeling Stuck?',
    description: 'You don\'t have a reliable tech expert to call for quick fixes or advice.',
  },
];

export const CORE_SERVICES: Service[] = [
  { name: 'Daily Cloud Backups' },
  { name: 'Security Monitoring & Malware Scans' },
  { name: 'Core, Plugin & Theme Updates' },
  { name: 'Performance & Speed Optimization' },
  { name: '24/7 Uptime Monitoring' },
  { name: 'Database Optimization' },
];

export const ADVANCED_SERVICES: Service[] = [
  { name: 'All Core Maintenance features, plus:' },
  { name: 'Product & Inventory Updates' },
  { name: 'Payment Gateway & Checkout Testing' },
  { name: 'Advanced Bug Fixes & Troubleshooting' },
  { name: 'E-commerce Plugin Management' },
  { name: 'Priority Support Channels' },
];

export const PRICING_PLANS: Plan[] = [
  {
    name: 'Essential Care',
    subtitle: 'For foundational security & peace of mind.',
    price: '$149',
    features: [
      'Core Maintenance Features',
      '24/7 Uptime Monitoring',
      'Monthly Health Reports',
      'Up to 3 Maintenance Actions/mo',
    ],
    isMostPopular: false,
    isCustom: false,
    paypalPlanId: 'P-80R41507JJ8545636NDYV7BY',
  },
  {
    name: 'Growth',
    subtitle: 'For sites that actively generate leads & revenue.',
    price: '$399',
    features: [
      'Everything in Essential, plus:',
      'Advanced & E-commerce Support',
      'Advanced Performance Tuning',
      'Up to 10 Maintenance Actions/mo',
    ],
    isMostPopular: true,
    isCustom: false,
    paypalPlanId: 'P-3J975565617065919NDYWASY',
  },
  {
    name: 'Pro Partner',
    subtitle: 'A dedicated partnership for mission-critical sites.',
    price: 'Custom Pricing',
    features: [
      'Everything in Growth, plus:',
      'Priority Support Queue & Response Time',
      'Developer Hours for New Features',
      'Custom Task Allotment',
    ],
    isMostPopular: false,
    isCustom: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Dustin is amazing! He went above and beyond what I was expecting – and quickly! We are ranking higher on Google and have had more e-mails coming in through our website! The investment has definitely paid off!',
    name: 'Ashley K.',
    title: 'Business Owner',
    avatar: '/images/AshleyK.jpg',
  },
  {
    quote: 'The team has an incredible track record and working with them has been nothing short or amazing!',
    name: 'Alex M.',
    title: 'Marketing Manager',
    avatar: '/images/AlexM.jpg',
  },
];

export const FAQS: FAQ[] = [
    {
      question: 'What exactly counts as a "maintenance action"?',
      answer: 'A single, discrete task that takes our team under 30 minutes to complete. Examples include updating text/images, installing a plugin, a CSS adjustment, or investigating a minor bug.',
    },
    {
      question: 'Which plan is right for me?',
      answer: 'Our Essential Care plan is perfect for informational sites and blogs. If your website is a key part of your sales or marketing (like an e-commerce store), we recommend the Growth plan. For agencies or businesses needing a higher level of support, our Pro Partner plan is the best fit.',
    },
    {
      question: 'What if I need more actions than my plan allows?',
      answer: 'No problem! We can handle additional tasks at a simple hourly rate, or we can discuss upgrading you to a more suitable plan.',
    },
    {
      question: 'Why is the Pro Partner plan a custom quote?',
      answer: 'Pro Partner clients have unique needs that go beyond a standard package. The custom quote allows us to build a tailored solution that includes dedicated resources, specific response times, and developer hours, ensuring a perfect fit for your business goals.',
    },
    {
      question: 'Is there a long-term contract?',
      answer: 'All our plans are month-to-month and you can cancel anytime. We believe in earning your business every single month.',
    },
];

import React from 'react';
import { Search, Shield, Calendar, Heart } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      number: "01",
      title: "Find the Right Care",
      description: "Tell us who needs care and where. We'll show you qualified caregivers in your area ready to help.",
      highlights: ["Child, elderly, or special care", "Search by location", "Quick & easy"]
    },
    {
      icon: Shield,
      number: "02",
      title: "Choose a Trusted Caregiver",
      description: "Browse verified profiles with real reviews. Every caregiver is background-checked for your safety.",
      highlights: ["Verified & background-checked", "See experience & skills", "Read real reviews"]
    },
    {
      icon: Calendar,
      number: "03",
      title: "Book & Schedule",
      description: "Pick your date and time with flexible scheduling. See clear pricing upfront—no surprises.",
      highlights: ["Choose your schedule", "Transparent pricing", "No hidden fees"]
    },
    {
      icon: Heart,
      number: "04",
      title: "Receive Quality Care",
      description: "Relax knowing your loved one is in good hands. We're here to support you every step of the way.",
      highlights: ["Professional in-home care", "24/7 customer support", "Stay connected"]
    }
  ];

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Getting the care you need is simple. Follow these four easy steps to find trusted caregivers.
          </p>
        </div>

        {/* Desktop: Horizontal Layout */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-200 z-0" 
                     style={{ transform: 'translateX(50%)' }}></div>
              )}
              
              {/* Step Card */}
              <div className="relative z-10 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 h-full border-t-4 border-blue-500">
                {/* Icon Circle */}
                <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" 
                     style={{ backgroundColor: '#3490c5' }}>
                  <step.icon className="w-10 h-10 text-white" strokeWidth={2} />
                </div>

                {/* Step Number */}
                <div className="text-center mb-3">
                  <span className="text-6xl font-bold text-blue-100">{step.number}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {step.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <span className="text-blue-500 mr-2">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Connector */}
              {index < steps.length - 1 && (
                <div className="absolute left-10 top-24 w-0.5 h-full bg-gradient-to-b from-blue-300 to-blue-200"></div>
              )}

              {/* Step Card */}
              <div className="relative flex gap-4">
                {/* Icon Circle */}
                <div className="flex-shrink-0 z-10">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg" 
                       style={{ backgroundColor: '#3490c5' }}>
                    <step.icon className="w-9 h-9 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                  {/* Step Number */}
                  <span className="text-5xl font-bold text-blue-100 block mb-2">{step.number}</span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {step.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-blue-500 mr-2">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button 
            className="px-8 py-4 text-lg font-semibold text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            style={{ backgroundColor: '#3490c5' }}
          >
            Get Started Today
          </button>
          <p className="mt-4 text-gray-600">
            Join thousands of families who trust CareHaven
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import Image from "next/image";

export default function Testimonials({ testimonials }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Families Are Saying
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied families who trust CareHaven for their
            childcare needs
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Stars */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    {testimonial.verified && (
                      <svg
                        className="w-5 h-5 text-[#3490c5] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              {/* Stars */}
              <div className="flex mb-6 justify-center">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-8 leading-relaxed italic text-center">
                "{testimonials[activeIndex].text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-center">
                <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="font-semibold text-gray-900">
                      {testimonials[activeIndex].name}
                    </div>
                    {testimonials[activeIndex].verified && (
                      <svg
                        className="w-5 h-5 text-[#3490c5] ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonials[activeIndex].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-[#3490c5] rounded-full flex items-center justify-center hover:bg-[#2d7db3] transition-colors"
              >
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-[#3490c5]"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-3xl font-bold text-[#3490c5] mb-2">98%</div>
            <div className="text-sm text-gray-700">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
            <div className="text-sm text-gray-700">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">10K+</div>
            <div className="text-sm text-gray-700">Happy Families</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
            <div className="text-sm text-gray-700">Return Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

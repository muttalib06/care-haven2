"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Trusted Care for Your Loved Ones",
      description:
        "Find verified and compassionate caretakers for children, elderly, and family members. Your peace of mind is our priority.",
      image:
        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&h=600&fit=crop",
      alt: "Caretaker with elderly person",
    },
    {
      id: 2,
      title: "Professional Childcare Services",
      description:
        "Expert babysitters and nannies ready to provide safe, nurturing care for your children. Book with confidence, anytime.",
      image:
        "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=1200&h=600&fit=crop",
      alt: "Caretaker playing with children",
    },
    {
      id: 3,
      title: "Specialized Elderly Care at Home",
      description:
        "Compassionate and trained professionals providing personalized care for seniors in the comfort of their own home.",
      image:
        "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&h=600&fit=crop",
      alt: "Elderly care at home",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <div className="relative w-full h-125 md:h-150 lg:h-175 overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className="w-full h-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30"></div>
          </div>

          {/* Content */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight animate-fadeInUp">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-200 leading-relaxed animate-fadeInUp">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp">
                <Link href={"/caregivers"}
                  className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: "#3490c5" }}
                >
                  Get Started
                </Link>
                <Link href={"aboutUs"} className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white border-2 border-white rounded-lg transition-all duration-300 hover:bg-white hover:text-gray-900">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/30 hover:bg-white/50 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-8 md:w-10 h-2 md:h-3"
                : "w-2 md:w-3 h-2 md:h-3 bg-white/50 hover:bg-white/70"
            }`}
            style={index === currentSlide ? { backgroundColor: "#3490c5" } : {}}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeInUp:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0;
        }

        .animate-fadeInUp:nth-child(3) {
          animation-delay: 0.4s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

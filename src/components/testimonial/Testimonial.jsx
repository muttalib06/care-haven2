"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const Testimonial= () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Parent of 2",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "CareHaven has been a lifesaver for our family. Finding a trustworthy babysitter used to be so stressful, but now I can book reliable caregivers with just a few clicks. The peace of mind is priceless!",
      service: "Babysitting Services",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Son of Elderly Parent",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "My father needs daily care, and CareHaven connected us with an amazing caregiver. The platform made it easy to find someone experienced and compassionate. Highly recommend!",
      service: "Elderly Care",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Working Professional",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "As a busy professional, I needed flexible childcare solutions. CareHaven's platform is intuitive and the caregivers are thoroughly vetted. It's made balancing work and family so much easier.",
      service: "Childcare Services",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Husband & Caregiver",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "When my wife needed post-surgery care, CareHaven helped us find a professional nurse quickly. The booking process was seamless and the quality of care exceeded our expectations.",
      service: "Special Care at Home",
    },
    {
      id: 5,
      name: "Lisa Williams",
      role: "Grandmother",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "I wanted to spend quality time with my grandchildren but needed help. CareHaven connected me with wonderful caregivers who feel like part of the family now. Truly grateful!",
      service: "Family Support",
    },
    {
      id: 6,
      name: "James Martinez",
      role: "Single Father",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Being a single dad is challenging, but CareHaven has made it manageable. The caregivers are reliable, professional, and my kids love them. This service is a game-changer!",
      service: "Babysitting Services",
    },
  ];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              What Our <span style={{ color: "#3490c5" }}> Families Say</span>
            </span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>
              {" "}
              Trusted by thousands of families across the country. Read what
              they have to say about their CareHaven experience.
            </span>
            <span
              className="w-20 md:w-24 h-1 mx-auto mt-6 rounded-full"
              style={{ backgroundColor: "#3490c5" }}
            ></span>
          </motion.p>
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            {/* Decorative Quote Icon */}
            <motion.div
              className="absolute top-6 left-6 opacity-10"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Quote size={80} className="text-[#3490c5]" />
            </motion.div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Avatar */}
                  <motion.img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#3490c5] mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  />

                  {/* Rating */}
                  <motion.div
                    className="flex gap-1 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                        >
                          <Star
                            size={20}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        </motion.div>
                      )
                    )}
                  </motion.div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-lg sm:text-xl text-gray-700 mb-6 max-w-3xl leading-relaxed italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Name and Role */}
                  <motion.h4
                    className="text-xl font-bold text-gray-900"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {testimonials[currentIndex].name}
                  </motion.h4>
                  <motion.p
                    className="text-gray-600 mb-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    {testimonials[currentIndex].role}
                  </motion.p>
                  <motion.span
                    className="inline-block px-4 py-1 bg-[#3490c5] bg-opacity-10 text-[#3490c5] rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    {testimonials[currentIndex].service}
                  </motion.span>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-[#3490c5]" />
            </motion.button>
            <motion.button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-200"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-[#3490c5]" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-[#3490c5]"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Testimonial Grid - Hidden on Mobile, Visible on Tablet+ */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full border-2 border-[#3490c5]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h5 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h5>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1 + i * 0.05,
                    }}
                  >
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {testimonial.text}
              </p>

              <motion.span
                className="inline-block px-3 py-1 bg-[#3490c5] bg-opacity-10 text-[#3490c5] rounded-full text-xs font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {testimonial.service}
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star size={20} className="fill-yellow-400 text-yellow-400" />
            </motion.div>
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from 2,500+ reviews</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;

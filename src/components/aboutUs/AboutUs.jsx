"use client";
import React, { useRef } from "react";
import { Heart, Shield, Users, Clock } from "lucide-react";
import Image from "next/image";
import Count from "@/components/sharedComponents/Count";
import { useInView } from "framer-motion";

export default function AboutUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const features = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "Our carefully vetted caretakers provide loving, professional care tailored to your family's unique needs.",
    },
    {
      icon: Shield,
      title: "Trusted & Verified",
      description:
        "Every caretaker undergoes thorough background checks and verification to ensure your family's safety.",
    },
    {
      icon: Users,
      title: "Diverse Services",
      description:
        "From babysitting to elderly care and special needs support, we cover all aspects of family caregiving.",
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description:
        "Book care services anytime, anywhere with our easy-to-use platform and flexible scheduling.",
    },
  ];

  const stats = [
    { number: 10000, sign: "+", label: "Families Served" },
    { number: 5000, sign: "+", label: "Verified Caretakers" },
    { number: 98, sign: "%", label: "Satisfaction Rate" },
    { number: 24, sign: "/7", label: "Support Available" },
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-linear-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span style={{ color: "#3490c5" }}>CareHaven</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Making caregiving easy, secure, and accessible for everyone
          </p>

          <div
            className="w-20 md:w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: "#3490c5" }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16">
          {/* Left Side - Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Your Trusted Partner in Family Care
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At CareHaven, we understand that finding reliable care for your
              loved ones is one of life's most important decisions. That's why
              we've created a platform that connects families with
              compassionate, qualified caretakers who truly care.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you need a babysitter for date night, ongoing elderly
              care, or specialized support for family members with unique needs,
              CareHaven makes it simple to find, book, and manage quality care
              services—all from the comfort of your home.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to provide peace of mind to families while
              empowering caretakers to build meaningful careers in the
              caregiving profession.
            </p>
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: "#3490c5" }}
            >
              Learn More About Us
            </button>
          </div>

          {/* Right Side - Image Placeholder */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/aboutUs.avif"
                alt="This is about us image"
                width={400}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating Card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border-t-4 hidden sm:block"
              style={{ borderColor: "#3490c5" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#3490c5" }}
                >
                  <Heart className="text-white" />
                </div>
                <div>
                  <p className="font-bold text-2xl text-gray-900">10,000+</p>
                  <p className="text-sm text-gray-600">Happy Families</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: "#3490c5" }}
              >
                <feature.icon className="text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          ref={sectionRef}
          className="rounded-2xl p-8 md:p-12"
          style={{ backgroundColor: "#3490c5" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {isInView ? <Count number={stat.number}></Count> : 0}
                  </div>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    {stat.sign}
                  </p>
                </div>
                <p className="text-blue-100 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            To revolutionize the caregiving industry by creating a trustworthy,
            accessible platform that connects families with exceptional
            caretakers, ensuring every child, elderly person, and family member
            receives the compassionate care they deserve.
          </p>
        </div>
      </div>
    </section>
  );
}

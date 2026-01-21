"use client";

import { Baby, Heart, Stethoscope } from "lucide-react";
import Link from "next/link";

export default function OurService() {
  const services = [
    {
      id: "baby-care",
      icon: <Baby className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Baby Care",
      description:
        "Professional and caring specialists to look after your babies and children with love, attention, and ensure their safety and development.",
      features: [
        "Trained Professionals",
        "Background Verified",
        "Flexible Hours",
      ],
    },
    {
      id: "elderly-care",
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Elderly Service",
      description:
        "Compassionate care for seniors including companionship, daily assistance, and monitoring to ensure comfort and well-being.",
      features: ["24/7 Support", "Medical Assistance", "Personalized Care"],
    },
    {
      id: "sick-care",
      icon: <Stethoscope className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Sick People Service",
      description:
        "Dedicated care for sick individuals including medication management, health monitoring, recovery support, and compassionate assistance.",
      features: ["Licensed Caregivers", "Medical Support", "Recovery Focus"],
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Care <span style={{ color: "#3490c5" }}>Services</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive care solutions tailored to meet your family's unique
            needs. We're here to provide support when you need it most.
          </p>
          <div
            className="w-20 md:w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ backgroundColor: "#3490c5" }}
          ></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 md:p-8 group hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: "#3490c5" }}
              >
                <div className="text-white">{service.icon}</div>
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                style={{ color: "#1b3a4c" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5 md:mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm md:text-base text-gray-700"
                  >
                    <svg
                      className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0"
                      fill="currentColor"
                      style={{ color: "#3490c5" }}
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <Link href={`/services/${service.id}`}>
                <button
                  className="w-full py-2.5 md:py-3 text-sm md:text-base font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                  style={{ backgroundColor: "#3490c5" }}
                >
                  View Detail
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 md:mt-16 text-center">
          <div
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 lg:p-12 max-w-4xl mx-auto"
            style={{ borderTop: `4px solid #3490c5` }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ color: "#1b3a4c" }}
            >
              Can't Find What You're Looking For?
            </h3>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
              We offer customized care solutions to meet your specific needs.
              Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90 shadow-md hover:shadow-lg"
                style={{ backgroundColor: "#3490c5" }}
              >
                Contact Us
              </button>
              <Link
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100 border-2"
                style={{ borderColor: "#3490c5", color: "#3490c5" }}
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

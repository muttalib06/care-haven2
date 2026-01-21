import { getIcon } from "@/utils/icons";

export default function HowItWorks({ steps }) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Getting started with CareHaven is simple. Find the perfect caregiver
            in just four easy steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div
            className="hidden lg:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#3490c5] via-[#3490c5] to-[#3490c5] opacity-20"
            style={{ width: "calc(100% - 120px)", marginLeft: "60px" }}
          ></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Step Card */}
                <div className="bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-[#3490c5] transition-all duration-300 hover:shadow-xl relative z-10">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-gradient-to-br from-[#3490c5] to-[#2d7db3] rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>

                    {/* Arrow for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2">
                        <svg
                          className="w-8 h-8 text-[#3490c5] opacity-30"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 text-[#3490c5]">
                    {getIcon(step.icon)}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <svg
                      className="w-6 h-6 text-[#3490c5] opacity-30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="bg-[#3490c5] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2d7db3] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
}

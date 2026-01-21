export default function PricingSection({ pricing }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Transparent, Affordable Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for your family. No hidden fees,
            ever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricing.pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                index === 1
                  ? "md:scale-105 border-2 border-[#3490c5]"
                  : "border border-gray-200"
              }`}
            >
              {/* Popular Badge */}
              {index === 1 && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#3490c5] to-[#2d7db3] text-white px-6 py-2 text-sm font-semibold rounded-bl-xl">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tier Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tier.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <div className="text-4xl font-bold text-[#3490c5] mb-1">
                    {tier.price}
                  </div>
                  {index === 0 && (
                    <div className="text-sm text-gray-500">
                      Minimum 3-hour booking
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    index === 1
                      ? "bg-[#3490c5] text-white hover:bg-[#2d7db3] shadow-lg hover:shadow-xl"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 text-center">
          <div className="flex items-center justify-center mb-2">
            <svg
              className="w-5 h-5 text-[#3490c5] mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="font-semibold text-gray-900">
              Pricing Information
            </span>
          </div>
          <p className="text-gray-700">{pricing.additionalInfo}</p>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3490c5] mb-2">500+</div>
            <div className="text-gray-600">Caregivers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3490c5] mb-2">4.9★</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3490c5] mb-2">10K+</div>
            <div className="text-gray-600">Families Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#3490c5] mb-2">250K+</div>
            <div className="text-gray-600">Hours of Care</div>
          </div>
        </div>
      </div>
    </section>
  );
}

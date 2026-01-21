export default function CTASection({ title, ctaText }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[#3490c5] via-[#2d7db3] to-[#236b96] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-48 -translate-x-48 blur-3xl"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Find Your Perfect Caregiver?
          </h2>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-blue-50 mb-10 max-w-3xl mx-auto leading-relaxed">
            Join thousands of families who trust CareHaven for safe, reliable,
            and loving baby care. Get matched with qualified caregivers in
            minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-[#3490c5] px-10 py-5 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 transform">
              {ctaText}
            </button>
            <button className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
              See How It Works
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-white">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-50">No commitment required</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-50">Instant matching</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-50">Cancel anytime</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                500+
              </div>
              <div className="text-blue-100 text-sm lg:text-base">
                Verified Caregivers
              </div>
            </div>
            <div className="text-center border-l border-r border-white/30">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                4.9★
              </div>
              <div className="text-blue-100 text-sm lg:text-base">
                Average Rating
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                24/7
              </div>
              <div className="text-blue-100 text-sm lg:text-base">
                Support Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

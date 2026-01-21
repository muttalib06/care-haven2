import Image from "next/image";

export default function ServiceHero({ hero, title }) {
  return (
    <div className="relative bg-gradient-to-br from-[#3490c5] to-[#2d7db3] overflow-hidden">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-12 lg:py-20">
          {/* Left Content */}
          <div className="relative z-10 text-white order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">{hero.trustBadge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {hero.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-blue-50 mb-8 leading-relaxed">
              {hero.subheadline}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#3490c5] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
                {hero.ctaText}
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Quick Stats */}
            <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              <div>
                <div className="text-3xl sm:text-4xl font-bold">500+</div>
                <div className="text-sm text-blue-100 mt-1">Caregivers</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">4.9★</div>
                <div className="text-sm text-blue-100 mt-1">Avg Rating</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">10K+</div>
                <div className="text-sm text-blue-100 mt-1">Families</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={hero.image}
                  alt={title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating badges */}
            <div className="hidden lg:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Verified Safe
                  </div>
                  <div className="text-sm text-gray-600">
                    Background Checked
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceOverview({
  description,
  targetAudience,
  servicesIncluded,
}) {
  const paragraphs = description.split("\n\n");

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              About Our Baby Care Services
            </h2>

            <div id="detail" className="scroll-mt-35 prose prose-lg max-w-none">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-700 mb-6 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Sidebar - Target Audience & Services */}
          <div className="space-y-8">
            {/* Target Audience */}
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <svg
                  className="w-6 h-6 text-[#3490c5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                Who We Serve
              </h3>

              <div className="mb-4">
                <div className="text-sm font-semibold text-gray-700 mb-2">
                  Age Range
                </div>
                <div className="bg-white rounded-lg px-4 py-2 text-[#3490c5] font-semibold">
                  {targetAudience.ageRange}
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold text-gray-700 mb-3">
                  Ideal For
                </div>
                <ul className="space-y-2">
                  {targetAudience.idealFor.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-[#3490c5] mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Quick List */}
            <div className="bg-gradient-to-br from-[#3490c5] to-[#2d7db3] rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg
                  className="w-6 h-6 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Services Included
              </h3>

              <ul className="space-y-2">
                {servicesIncluded.slice(0, 6).map((service, index) => (
                  <li key={index} className="flex items-start text-sm">
                    <svg
                      className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {service}
                  </li>
                ))}
              </ul>

              {servicesIncluded.length > 6 && (
                <div className="mt-3 text-sm text-blue-100">
                  + {servicesIncluded.length - 6} more services
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

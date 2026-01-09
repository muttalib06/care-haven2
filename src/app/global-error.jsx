"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw, Home, Mail } from "lucide-react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the critical error to an error reporting service
    console.error("Global error boundary caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
          <div className="max-w-lg w-full">
            {/* Critical Error Icon with Animation */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative">
                {/* Outer pulsing ring */}
                <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-75"></div>

                {/* Middle ring */}
                <div className="absolute inset-2 bg-orange-100 rounded-full animate-pulse"></div>

                {/* Main icon container */}
                <div className="relative bg-white rounded-full p-5 sm:p-7 shadow-2xl border-4 border-orange-200">
                  <AlertTriangle
                    className="w-14 h-14 sm:w-20 sm:h-20 text-orange-600"
                    strokeWidth={2}
                  />
                </div>
              </div>
            </div>

            {/* Error Content */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
                Critical Error
              </h1>
              <p className="text-base sm:text-lg text-gray-700 font-medium mb-3 px-2">
                We're experiencing a system-wide issue
              </p>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                The application encountered a critical error and needs to
                restart. We apologize for the inconvenience.
              </p>

              {/* Error details for development */}
              {process.env.NODE_ENV === "development" && error?.message && (
                <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-orange-50 border-2 border-orange-300 rounded-lg text-left mx-2">
                  <p className="text-xs font-semibold text-orange-900 mb-2 uppercase tracking-wide">
                    Development Error Details:
                  </p>
                  <p className="text-xs sm:text-sm font-mono text-orange-800 break-words whitespace-pre-wrap">
                    {error.message}
                  </p>
                  {error?.digest && (
                    <p className="text-xs text-orange-700 mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
              {/* Reload Application Button */}
              <button
                onClick={reset}
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#3490c5] hover:bg-[#2c7ab8] text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
              >
                <RefreshCcw className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Reload Application</span>
              </button>

              {/* Return Home Button */}
              <a
                href="/"
                className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 text-gray-800 font-bold py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 border-2 border-gray-300 hover:border-[#3490c5] shadow-md hover:shadow-lg"
              >
                <Home className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Return to Homepage</span>
              </a>
            </div>

            {/* Emergency Contact Section */}
            <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-gray-300">
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3 text-center">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center mb-4">
                  Our technical team has been automatically notified. If this is
                  urgent, please contact us directly.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a
                    href="mailto:support@carehaven.com"
                    className="flex-1 flex items-center justify-center gap-2 text-[#3490c5] hover:text-[#2c7ab8] font-semibold text-sm sm:text-base py-2 px-4 border-2 border-[#3490c5] hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Email Support
                  </a>

                  <a
                    href="tel:+1234567890"
                    className="flex-1 flex items-center justify-center gap-2 text-[#3490c5] hover:text-[#2c7ab8] font-semibold text-sm sm:text-base py-2 px-4 border-2 border-[#3490c5] hover:bg-blue-50 rounded-lg transition-all duration-200"
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Us
                  </a>
                </div>
              </div>
            </div>

            {/* CareHaven Branding */}
            <div className="mt-8 sm:mt-10 text-center">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200">
                <div className="w-2 h-2 bg-[#3490c5] rounded-full"></div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700">
                  CareHaven
                </p>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Trusted Care, Anytime, Anywhere
              </p>
            </div>
          </div>
        </div>

        {/* Inline Tailwind styles to ensure they work even if CSS fails to load */}
        <style jsx global>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, sans-serif;
          }
        `}</style>
      </body>
    </html>
  );
}

"use client";

import { useEffect } from "react";
import { AlertCircle, RefreshCcw, Home, HeadphonesIcon } from "lucide-react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error boundary caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {/* Error Icon with Animation */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            {/* Pulsing background circle */}
            <div className="absolute inset-0 bg-red-100 rounded-full animate-ping opacity-75"></div>

            {/* Main icon container */}
            <div className="relative bg-white rounded-full p-4 sm:p-6 shadow-lg border-4 border-red-100">
              <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
            </div>
          </div>
        </div>

        {/* Error Content */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Oops! Something went wrong
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-2 px-2">
            We encountered an unexpected error while loading this page. Don't
            worry, our team has been notified.
          </p>

          {/* Error details for development */}
          {process.env.NODE_ENV === "development" && error?.message && (
            <div className="mt-4 p-3 sm:p-4 bg-red-50 border border-red-200 rounded-lg text-left">
              <p className="text-xs sm:text-sm font-mono text-red-800 break-words">
                {error.message}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 sm:space-y-4">
          {/* Try Again Button */}
          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-[#3490c5] hover:bg-[#2c7ab8] text-white font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
          >
            <RefreshCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Try Again</span>
          </button>

          {/* Go Home Button */}
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 sm:py-4 px-6 rounded-lg transition-all duration-200 border-2 border-gray-200 hover:border-[#3490c5] shadow-sm hover:shadow-md"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Go to Homepage</span>
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
              Need help? Our support team is here for you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-[#3490c5] hover:text-[#2c7ab8] font-medium text-sm sm:text-base transition-colors"
            >
              <HeadphonesIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Contact Support
            </a>
          </div>
        </div>

        {/* CareHaven Branding */}
        <div className="mt-6 sm:mt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-400">
            CareHaven - Trusted Care, Anytime, Anywhere
          </p>
        </div>
      </div>
    </div>
  );
}

"use client"
import Link from "next/link";
import {
  Home,
  Search,
  ArrowLeft,
  HeartHandshake,
  Users,
  Phone,
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br mt-10 from-blue-50 via-white to-cyan-50 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* 404 Illustration */}
          <div className="mb-6 sm:mb-8 lg:mb-10">
            <div className="relative inline-block">
              {/* Animated background circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-70 lg:h-70 bg-[#3490c5] opacity-5 rounded-full animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-[#3490c5] opacity-10 rounded-full animate-ping"></div>
              </div>

              {/* 404 Text */}
              <div className="relative">
                <h1 className="text-8xl sm:text-9xl lg:text-[180px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3490c5] to-cyan-500 drop-shadow-sm">
                  404
                </h1>

                {/* Caring hands icon in the middle of 404 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-white rounded-full p-3 sm:p-4 lg:p-6 shadow-lg border-4 border-[#3490c5]/20">
                    <HeartHandshake
                      className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-[#3490c5]"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="mb-8 sm:mb-10 lg:mb-12 px-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Page Not Found
            </h2>
            <p className="text-base sm:text-lg lg:text-lg text-gray-600 mb-2 max-w-2xl mx-auto">
              We couldn't find the page you're looking for. It might have been
              moved, deleted, or never existed.
            </p>
            <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
              Don't worry! Let's help you find the care you need.
            </p>
          </div>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 justify-center px-4 max-w-2xl mx-auto">
            <Link
              href="/"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#3490c5] hover:bg-[#2c7ab8] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Go to Homepage</span>
            </Link>

            <Link
              href="/caregivers"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 sm:gap-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-200 border-2 border-gray-200 hover:border-[#3490c5] shadow-sm hover:shadow-md"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">Find Caregivers</span>
            </Link>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-8 sm:pt-10 px-4">
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-4 sm:mb-6">
              Popular Pages
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
              {/* Find Caregivers */}
              <Link
                href="/find-caregivers"
                className="group p-4 sm:p-5 bg-white hover:bg-blue-50 rounded-lg border-2 border-gray-100 hover:border-[#3490c5] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#3490c5] transition-colors">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#3490c5] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                      Find Caregivers
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Browse verified professionals
                    </p>
                  </div>
                </div>
              </Link>

              {/* How It Works */}
              <Link
                href="/aboutUs"
                className="group p-4 sm:p-5 bg-white hover:bg-blue-50 rounded-lg border-2 border-gray-100 hover:border-[#3490c5] transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#3490c5] transition-colors">
                    <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-[#3490c5] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                     About Us
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Learn about our platform
                    </p>
                  </div>
                </div>
              </Link>

              {/* Contact Support */}
              <Link
                href="/contact"
                className="group p-4 sm:p-5 bg-white hover:bg-blue-50 rounded-lg border-2 border-gray-100 hover:border-[#3490c5] transition-all duration-200 shadow-sm hover:shadow-md sm:col-span-2 lg:col-span-1"
              >
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-[#3490c5] transition-colors">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#3490c5] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-left flex-1">
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base mb-1">
                      Contact Support
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      We're here to help you
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 sm:mt-10">
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-[#3490c5] hover:text-[#2c7ab8] font-medium text-sm sm:text-base transition-colors"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              Go Back to Previous Page
            </button>
          </div>

          {/* CareHaven Branding */}
          <div className="mt-10 sm:mt-12 lg:mt-16 pt-8 border-t border-gray-200">
            <div className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-gray-200 mb-3">
              <div className="w-2 h-2 bg-[#3490c5] rounded-full"></div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">
                CareHaven
              </p>
            </div>
            <p className="text-xs sm:text-sm text-gray-500">
              Trusted Care, Anytime, Anywhere
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

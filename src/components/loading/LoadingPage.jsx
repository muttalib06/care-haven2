export default function LoadingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="text-center">
        {/* Logo/Icon Animation */}
        <div className="relative mb-8">
          <div className="w-24 h-24 mx-auto relative">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 border-4 border-transparent border-t-[#3490c5] rounded-full animate-spin"></div>

            {/* Inner pulsing circle */}
            <div className="absolute inset-2 bg-[#3490c5] rounded-full opacity-20 animate-pulse"></div>

            {/* Heart icon in center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-12 h-12 text-[#3490c5] animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          <span className="bg-gradient-to-r from-[#3490c5] to-[#2563eb] bg-clip-text text-transparent">
            CareHaven
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-600 text-sm sm:text-base mb-8 px-4">
          Connecting families with trusted caregivers
        </p>

        {/* Loading dots */}
        <div className="flex justify-center items-center space-x-2">
          <div
            className="w-3 h-3 bg-[#3490c5] rounded-full animate-bounce"
            style={{ animationDelay: "0ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#3490c5] rounded-full animate-bounce"
            style={{ animationDelay: "150ms" }}
          ></div>
          <div
            className="w-3 h-3 bg-[#3490c5] rounded-full animate-bounce"
            style={{ animationDelay: "300ms" }}
          ></div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-gray-500 text-sm animate-pulse">
          Loading your experience...
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#3490c5] opacity-5 rounded-full blur-xl animate-pulse"></div>
      <div
        className="absolute bottom-10 right-10 w-32 h-32 bg-[#3490c5] opacity-5 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 right-20 w-16 h-16 bg-[#3490c5] opacity-5 rounded-full blur-lg animate-pulse"
        style={{ animationDelay: "500ms" }}
      ></div>
    </div>
  );
}

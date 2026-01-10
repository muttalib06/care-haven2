export default function DataFetchError({
  error,
  onRetry,
  showHomeButton = true,
}) {
  const handleRetry = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        {/* Error Icon */}
        <div className="relative mb-8 inline-block">
          <div className="w-32 h-32 mx-auto relative">
            {/* Outer circle with pulse */}
            <div className="absolute inset-0 bg-red-100 rounded-full animate-pulse"></div>

            {/* Alert icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-16 h-16 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Error Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
          Oops! Something Went Wrong
        </h1>

        {/* Error Message */}
        <p className="text-gray-600 mb-2 px-4">
          We couldn't fetch the data you requested.
        </p>

        {/* Technical Error Details */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 mx-4">
            <p className="text-sm text-red-700 font-mono break-words">
              {error}
            </p>
          </div>
        )}

        {/* Suggestions */}
        <div className="bg-blue-50 border border-[#3490c5] border-opacity-20 rounded-lg p-4 mb-8 mx-4 text-left">
          <h3 className="text-sm font-semibold text-gray-700 mb-2 flex items-center">
            <svg
              className="w-4 h-4 mr-2 text-[#3490c5]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            Try the following:
          </h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li className="flex items-start">
              <span className="text-[#3490c5] mr-2">•</span>
              <span>Check your internet connection</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#3490c5] mr-2">•</span>
              <span>Refresh the page</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#3490c5] mr-2">•</span>
              <span>Try again in a few moments</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 px-4">
          <button
            onClick={handleRetry}
            className="flex-1 bg-[#3490c5] hover:bg-[#2563eb] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Try Again
          </button>

          {showHomeButton && (
            <button
              onClick={handleGoHome}
              className="flex-1 bg-white hover:bg-gray-50 text-[#3490c5] font-semibold py-3 px-6 rounded-lg border-2 border-[#3490c5] transition-all duration-200 transform hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </button>
          )}
        </div>

        {/* Support Link */}
        <p className="mt-8 text-sm text-gray-500">
          Need help?{" "}
          <a
            href="/support"
            className="text-[#3490c5] hover:underline font-medium"
          >
            Contact Support
          </a>
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-100 opacity-30 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#3490c5] opacity-5 rounded-full blur-2xl"></div>
    </div>
  );
}

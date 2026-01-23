
export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <div className="bg-gradient-to-r from-[#3490c5] to-[#2c7aa8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="h-12 bg-white/20 rounded-lg max-w-md mx-auto mb-4 animate-pulse" />
            <div className="h-6 bg-white/20 rounded-lg max-w-2xl mx-auto mb-8 animate-pulse" />
            <div className="h-12 bg-white/20 rounded-lg max-w-2xl mx-auto animate-pulse" />
          </div>
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-200 rounded-lg" />
                <div className="flex-1">
                  <div className="h-8 bg-gray-200 rounded mb-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Guide Skeleton */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl mb-12 animate-pulse">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="h-64 md:h-96 bg-gray-200" />
            <div className="p-8 md:p-12 space-y-4">
              <div className="h-6 bg-gray-200 rounded w-1/3" />
              <div className="h-10 bg-gray-200 rounded" />
              <div className="h-20 bg-gray-200 rounded" />
              <div className="h-12 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>

        {/* Filters and Grid Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filter Skeleton */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 space-y-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded" />
              <div className="space-y-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-12 bg-gray-200 rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Cards Skeleton */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-200" />
                  <div className="p-5 space-y-3">
                    <div className="flex gap-2">
                      <div className="h-6 bg-gray-200 rounded w-20" />
                      <div className="h-6 bg-gray-200 rounded w-20" />
                    </div>
                    <div className="h-6 bg-gray-200 rounded" />
                    <div className="h-16 bg-gray-200 rounded" />
                    <div className="h-4 bg-gray-200 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
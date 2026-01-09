export default function CaregiverCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-full">
      <div className="p-4 sm:p-6">
        {/* Header: Image, Name, Verification Badge, Save Button */}
        <div className="flex items-start justify-between mb-3 sm:mb-4">
          <div className="flex items-start gap-2 sm:gap-3 flex-1 min-w-0">
            {/* Profile Image Skeleton */}
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-200 animate-pulse"></div>
            </div>

            {/* Name and Verification Skeleton */}
            <div className="space-y-1.5 sm:space-y-2 flex-1 min-w-0">
              <div className="h-4 sm:h-5 w-24 sm:w-32 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 sm:h-4 w-16 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>

          {/* Save Button Skeleton */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gray-200 rounded-full animate-pulse flex-shrink-0 ml-2"></div>
        </div>

        {/* Rating Section Skeleton */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className="h-3 sm:h-4 w-10 sm:w-12 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Experience Skeleton */}
        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gray-200 rounded animate-pulse"></div>
          <div className="h-3 sm:h-4 w-24 sm:w-28 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Service Types Skeleton */}
        <div className="mb-2 sm:mb-3">
          <div className="flex flex-wrap gap-1">
            <div className="h-4 sm:h-5 w-16 sm:w-20 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 sm:h-5 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>

        {/* Skills Skeleton */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <div className="h-5 sm:h-6 w-16 sm:w-20 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-5 sm:h-6 w-20 sm:w-24 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-5 sm:h-6 w-14 sm:w-16 bg-gray-200 rounded-full animate-pulse"></div>
          <div className="h-5 sm:h-6 w-12 sm:w-14 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Bio Skeleton */}
        <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
          <div className="h-2.5 sm:h-3 w-full bg-gray-200 rounded animate-pulse"></div>
          <div className="h-2.5 sm:h-3 w-4/5 sm:w-3/4 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Footer: Price and CTA Skeleton */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-3 sm:pt-4 border-t border-gray-200">
          <div className="space-y-1.5 sm:space-y-2 w-full sm:w-auto">
            {/* Hourly Rate Skeleton */}
            <div className="h-6 sm:h-7 w-20 sm:w-24 bg-gray-200 rounded animate-pulse"></div>

            {/* Availability Status Skeleton */}
            <div className="h-3 w-24 sm:w-28 bg-gray-200 rounded animate-pulse"></div>
          </div>

          {/* Book Now Button Skeleton */}
          <div className="h-9 sm:h-10 w-full sm:w-24 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}

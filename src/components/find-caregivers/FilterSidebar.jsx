
import { useEffect } from "react";

export default function FilterSidebar({
  selectedServices,
  toggleService,
  priceRange,
  setPriceRange,
  experienceLevel,
  toggleExperience,
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
}) {

 const SERVICE_TYPES = ["Child", "Elderly", "Special Needs"];

// Experience levels for filtering (matching your hook's logic)
 const EXPERIENCE_LEVELS = ["1-3", "4-6", "7-9", "10+"];
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [
    selectedServices,
    toggleService,
    priceRange,
    setPriceRange,
    experienceLevel,
    toggleExperience,
    showAvailableOnly,
    setShowAvailableOnly,
    showVerifiedOnly,
    setShowVerifiedOnly,
    activeFiltersCount,
    clearAllFilters,
  ]);

  return (
    <div className="space-y-6">
      {/* Service Type */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Service Type</h3>
        <div className="space-y-2">
          {SERVICE_TYPES.map((service) => (
            <label key={service} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={selectedServices.includes(service)}
                onChange={() => toggleService(service)}
                className="w-4 h-4 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5]"
              />
              <span className="ml-2 text-gray-700">{service} Care</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-3">
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}/hr</span>
            <span>${priceRange[1]}/hr</span>
          </div>
          <input
            type="range"
            min="15"
            max="35"
            value={priceRange[0]}
            onChange={(e) =>
              setPriceRange([parseInt(e.target.value), priceRange[1]])
            }
            className="w-full accent-[#3490c5]"
          />
          <input
            type="range"
            min="15"
            max="35"
            value={priceRange[1]}
            onChange={(e) =>
              setPriceRange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full accent-[#1b3a4c]"
          />
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Experience</h3>
        <div className="space-y-2">
          {EXPERIENCE_LEVELS.map((level) => (
            <label key={level} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={experienceLevel.includes(level)}
                onChange={() => toggleExperience(level)}
                className="w-4 h-4 rounded border-gray-300 text-[#1b3a4c] focus:ring-[#1b3a4c]"
              />
              <span className="ml-2 text-gray-700">
                {level === "10+" ? "10+ years" : `${level} years`}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Availability</h3>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showAvailableOnly}
            onChange={(e) => setShowAvailableOnly(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-[#1b3a4c] focus:ring-[#1b3a4c]"
          />
          <span className="ml-2 text-gray-700">Available Today</span>
        </label>
      </div>

      {/* Verification */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Trust & Safety</h3>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={showVerifiedOnly}
            onChange={(e) => setShowVerifiedOnly(e.target.checked)}
            className="w-4 h-4 rounded border-gray-300 text-[#1b3a4c] focus:ring-[#1b3a4c]"
          />
          <span className="ml-2 text-gray-700">Verified Only</span>
        </label>
      </div>

      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="w-full px-4 py-2 text-sm font-medium text-[#3490c5] border border-[#3490c5] rounded-lg hover:bg-[#3490c5] hover:text-white transition-colors"
        >
          Clear All Filters ({activeFiltersCount})
        </button>
      )}
    </div>
  );
}
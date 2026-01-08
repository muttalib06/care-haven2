// components/find-caregivers/QuickFilters.js
"use client";

import {
  CheckCircle,
  X,
  Clock,
  Shield,
  Star,
  DollarSign,
  Award,
  Sparkles,
} from "lucide-react";

export default function QuickFilters({
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      {/* Label */}
      <span className="text-xs text-white/90 font-medium drop-shadow-sm hidden sm:inline">
        Quick filters:
      </span>

      {/* Available Now Filter */}
      <button
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
          showAvailableOnly
            ? "bg-white text-[#3490c5] shadow-md scale-105"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
        aria-pressed={showAvailableOnly}
        aria-label="Filter by available now"
      >
        <Clock size={12} />
        Available Now
      </button>

      {/* Verified Only Filter */}
      <button
        onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
        className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
          showVerifiedOnly
            ? "bg-white text-[#3490c5] shadow-md scale-105"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
        aria-pressed={showVerifiedOnly}
        aria-label="Filter by verified only"
      >
        <CheckCircle size={12} />
        Verified Only
      </button>

      {/* Clear All Button (only show when filters are active) */}
      {activeFiltersCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 flex items-center gap-1.5 hover:scale-105"
          aria-label={`Clear all ${activeFiltersCount} filters`}
        >
          <X size={12} />
          Clear ({activeFiltersCount})
        </button>
      )}
    </div>
  );
}

// Alternative: Extended Quick Filters with More Options
export function QuickFiltersExtended({
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  showTopRatedOnly,
  setShowTopRatedOnly,
  showBudgetFriendly,
  setShowBudgetFriendly,
  activeFiltersCount,
  clearAllFilters,
}) {
  const filters = [
    {
      id: "available",
      label: "Available Now",
      icon: Clock,
      active: showAvailableOnly,
      onClick: () => setShowAvailableOnly(!showAvailableOnly),
    },
    {
      id: "verified",
      label: "Verified",
      icon: CheckCircle,
      active: showVerifiedOnly,
      onClick: () => setShowVerifiedOnly(!showVerifiedOnly),
    },
    {
      id: "top-rated",
      label: "Top Rated",
      icon: Star,
      active: showTopRatedOnly,
      onClick: () => setShowTopRatedOnly(!showTopRatedOnly),
    },
    {
      id: "budget",
      label: "Budget Friendly",
      icon: DollarSign,
      active: showBudgetFriendly,
      onClick: () => setShowBudgetFriendly(!showBudgetFriendly),
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <span className="text-xs text-white/90 font-medium drop-shadow-sm hidden sm:inline">
        Quick filters:
      </span>

      {filters.map((filter) => {
        const Icon = filter.icon;
        return (
          <button
            key={filter.id}
            onClick={filter.onClick}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              filter.active
                ? "bg-white text-[#3490c5] shadow-md scale-105"
                : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
            }`}
            aria-pressed={filter.active}
          >
            <Icon size={12} />
            {filter.label}
          </button>
        );
      })}

      {activeFiltersCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="px-3 py-1 rounded-lg text-xs font-medium bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-all duration-200 flex items-center gap-1.5 hover:scale-105"
        >
          <X size={12} />
          Clear ({activeFiltersCount})
        </button>
      )}
    </div>
  );
}

// Alternative: Chip-Style Quick Filters (Different Visual Style)
export function QuickFiltersChips({
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
}) {
  return (
    <div className="mt-3">
      <div className="flex flex-wrap items-center gap-2">
        {/* Available Filter Chip */}
        <div
          onClick={() => setShowAvailableOnly(!showAvailableOnly)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
            showAvailableOnly
              ? "bg-green-500 text-white shadow-lg"
              : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full ${
              showAvailableOnly ? "bg-white" : "bg-green-400"
            }`}
          ></div>
          Available Now
          {showAvailableOnly && (
            <X
              size={14}
              className="ml-1 hover:scale-110 transition-transform"
            />
          )}
        </div>

        {/* Verified Filter Chip */}
        <div
          onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all duration-200 ${
            showVerifiedOnly
              ? "bg-blue-500 text-white shadow-lg"
              : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
          }`}
        >
          <Shield size={12} />
          Verified
          {showVerifiedOnly && (
            <X
              size={14}
              className="ml-1 hover:scale-110 transition-transform"
            />
          )}
        </div>

        {/* Clear All Chip */}
        {activeFiltersCount > 0 && (
          <div
            onClick={clearAllFilters}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer bg-red-500/80 text-white hover:bg-red-500 transition-all duration-200 shadow-md"
          >
            <X size={12} />
            Clear All ({activeFiltersCount})
          </div>
        )}
      </div>
    </div>
  );
}

// Alternative: Minimal Quick Filters (Text-Based)
export function QuickFiltersMinimal({
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
}) {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-4 text-sm">
      {/* Available Toggle */}
      <label className="flex items-center gap-2 cursor-pointer text-white/90 hover:text-white transition-colors">
        <input
          type="checkbox"
          checked={showAvailableOnly}
          onChange={(e) => setShowAvailableOnly(e.target.checked)}
          className="w-4 h-4 rounded border-white/30 bg-white/10 text-[#3490c5] focus:ring-white/50"
        />
        <span className="text-xs font-medium">Available Now</span>
      </label>

      {/* Verified Toggle */}
      <label className="flex items-center gap-2 cursor-pointer text-white/90 hover:text-white transition-colors">
        <input
          type="checkbox"
          checked={showVerifiedOnly}
          onChange={(e) => setShowVerifiedOnly(e.target.checked)}
          className="w-4 h-4 rounded border-white/30 bg-white/10 text-[#3490c5] focus:ring-white/50"
        />
        <span className="text-xs font-medium">Verified Only</span>
      </label>

      {/* Clear Link */}
      {activeFiltersCount > 0 && (
        <>
          <span className="text-white/50">|</span>
          <button
            onClick={clearAllFilters}
            className="text-xs font-medium text-white/90 hover:text-white underline"
          >
            Clear all ({activeFiltersCount})
          </button>
        </>
      )}
    </div>
  );
}

// Alternative: Badge-Style Quick Filters with Animation
export function QuickFiltersBadges({
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
}) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-3">
      <span className="text-xs text-white/90 font-medium drop-shadow-sm">
        Quick filters:
      </span>

      {/* Available Badge */}
      <button
        onClick={() => setShowAvailableOnly(!showAvailableOnly)}
        className={`group relative px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 overflow-hidden ${
          showAvailableOnly
            ? "bg-white text-[#3490c5]"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
      >
        {showAvailableOnly && (
          <span className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent animate-pulse"></span>
        )}
        <Clock size={12} className="relative z-10" />
        <span className="relative z-10">Available Now</span>
      </button>

      {/* Verified Badge */}
      <button
        onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
        className={`group relative px-3 py-1 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 overflow-hidden ${
          showVerifiedOnly
            ? "bg-white text-[#3490c5]"
            : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        }`}
      >
        {showVerifiedOnly && (
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent animate-pulse"></span>
        )}
        <CheckCircle size={12} className="relative z-10" />
        <span className="relative z-10">Verified</span>
        {showVerifiedOnly && (
          <Sparkles size={10} className="relative z-10 animate-spin-slow" />
        )}
      </button>

      {/* Clear Badge */}
      {activeFiltersCount > 0 && (
        <button
          onClick={clearAllFilters}
          className="px-3 py-1 rounded-lg text-xs font-medium bg-red-500/80 backdrop-blur-sm text-white hover:bg-red-500 transition-all duration-200 flex items-center gap-1.5 animate-bounce-subtle"
        >
          <X size={12} />
          Clear ({activeFiltersCount})
        </button>
      )}
    </div>
  );
}

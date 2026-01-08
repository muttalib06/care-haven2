// components/find-caregivers/EmptyState.js
"use client";

import { Search, Filter, RefreshCw, Heart, AlertCircle } from "lucide-react";

export default function EmptyState({
  onClearFilters,
  activeFiltersCount = 0,
  variant = "no-results", // "no-results" | "no-saved" | "error"
}) {
  // Different empty state configurations
  const configs = {
    "no-results": {
      icon: Search,
      iconColor: "text-gray-400",
      iconBg: "bg-gray-100",
      title: "No caregivers found",
      description:
        "We couldn't find any caregivers matching your criteria. Try adjusting your filters or search terms.",
      primaryAction: {
        label: "Clear All Filters",
        show: activeFiltersCount > 0,
        onClick: onClearFilters,
      },
      secondaryAction: {
        label: "Browse All Caregivers",
        show: activeFiltersCount > 0,
        onClick: onClearFilters,
      },
      suggestions: [
        "Try using different keywords",
        "Expand your location radius",
        "Adjust your price range",
        "Remove some filter criteria",
      ],
    },
    "no-saved": {
      icon: Heart,
      iconColor: "text-red-400",
      iconBg: "bg-red-50",
      title: "No saved caregivers yet",
      description:
        "Start building your list of favorite caregivers. Click the heart icon on any caregiver card to save them for later.",
      primaryAction: {
        label: "Browse Caregivers",
        show: true,
        onClick: () => (window.location.href = "/find-caregivers"),
      },
      suggestions: [],
    },
    error: {
      icon: AlertCircle,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-50",
      title: "Something went wrong",
      description:
        "We're having trouble loading caregivers right now. Please try again in a moment.",
      primaryAction: {
        label: "Retry",
        show: true,
        onClick: () => window.location.reload(),
      },
      suggestions: [
        "Check your internet connection",
        "Refresh the page",
        "Try again in a few minutes",
      ],
    },
  };

  const config = configs[variant] || configs["no-results"];
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
      <div className="max-w-md mx-auto text-center">
        {/* Icon */}
        <div
          className={`w-20 h-20 ${config.iconBg} rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse`}
        >
          <Icon size={40} className={config.iconColor} />
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          {config.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {config.description}
        </p>

        {/* Active Filters Badge (if applicable) */}
        {activeFiltersCount > 0 && variant === "no-results" && (
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg mb-6">
            <Filter size={16} />
            <span className="text-sm font-medium">
              {activeFiltersCount}{" "}
              {activeFiltersCount === 1 ? "filter" : "filters"} active
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          {/* Primary Action */}
          {config.primaryAction.show && (
            <button
              onClick={config.primaryAction.onClick}
              className="px-6 py-3 bg-[#3490c5] text-white rounded-lg font-medium hover:bg-[#2c7ab8] transition-colors shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              {config.primaryAction.label}
            </button>
          )}

          {/* Secondary Action (if exists) */}
          {config.secondaryAction?.show && (
            <button
              onClick={config.secondaryAction.onClick}
              className="px-6 py-3 bg-white text-[#3490c5] border-2 border-[#3490c5] rounded-lg font-medium hover:bg-[#3490c5] hover:text-white transition-colors"
            >
              {config.secondaryAction.label}
            </button>
          )}
        </div>

        {/* Suggestions List */}
        {config.suggestions.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm font-semibold text-gray-700 mb-4">
              Try these suggestions:
            </p>
            <ul className="space-y-2 text-left">
              {config.suggestions.map((suggestion, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-gray-600"
                >
                  <span className="text-[#3490c5] mt-1">•</span>
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Alternative CTA */}
        {variant === "no-results" && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-3">
              Need help finding the right caregiver?
            </p>
            <button className="text-[#3490c5] hover:text-[#2c7ab8] font-medium text-sm underline">
              Contact our support team
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Alternative: Compact Empty State (for smaller spaces)
export function EmptyStateCompact({ onClearFilters, message }) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 text-center">
      <Search size={32} className="text-gray-400 mx-auto mb-3" />
      <p className="text-gray-600 mb-4">{message || "No results found"}</p>
      {onClearFilters && (
        <button
          onClick={onClearFilters}
          className="text-[#3490c5] hover:text-[#2c7ab8] font-medium text-sm"
        >
          Clear filters
        </button>
      )}
    </div>
  );
}

// Alternative: Empty State with Illustration (if you have custom images)
export function EmptyStateWithIllustration({
  onClearFilters,
  activeFiltersCount,
  illustrationUrl = "/images/empty-search.svg",
}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-12">
      <div className="max-w-lg mx-auto text-center">
        {/* Custom Illustration */}
        <img
          src={illustrationUrl}
          alt="No results"
          className="w-64 h-64 mx-auto mb-6"
        />

        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          No caregivers found
        </h3>

        <p className="text-gray-600 mb-6">
          We couldn't find any caregivers matching your search criteria.
        </p>

        <button
          onClick={onClearFilters}
          className="px-6 py-3 bg-[#3490c5] text-white rounded-lg font-medium hover:bg-[#2c7ab8] transition-colors"
        >
          Clear All Filters{" "}
          {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </button>
      </div>
    </div>
  );
}

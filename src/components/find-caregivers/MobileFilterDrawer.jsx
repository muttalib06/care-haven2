// components/find-caregivers/MobileFilterDrawer.js
"use client";

import { useEffect } from "react";
import { X, Filter, CheckCircle } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

export default function MobileFilterDrawer({ isOpen, onClose, filterProps }) {
  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle ESC key press to close
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleApplyFilters = () => {
    onClose();
  };

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-[#3490c5]" />
              <h2 id="drawer-title" className="text-lg font-bold text-gray-900">
                Filters
              </h2>
              {filterProps.activeFiltersCount > 0 && (
                <span className="px-2 py-0.5 bg-[#3490c5] text-white text-xs font-bold rounded-full">
                  {filterProps.activeFiltersCount}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Close filters"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)] p-4">
          <FilterSidebar {...filterProps} />
        </div>

        {/* Sticky Footer with Actions */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 p-4 shadow-lg">
          <div className="flex gap-3">
            {/* Clear All Button */}
            {filterProps.activeFiltersCount > 0 && (
              <button
                onClick={filterProps.clearAllFilters}
                className="flex-1 px-4 py-3 bg-white text-[#3490c5] border-2 border-[#3490c5] rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Clear All
              </button>
            )}

            {/* Apply Filters Button */}
            <button
              onClick={handleApplyFilters}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-[#3490c5] to-[#2b7a9e] text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle size={18} />
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// Alternative: Drawer with Results Count
export function MobileFilterDrawerWithCount({
  isOpen,
  onClose,
  filterProps,
  resultsCount = 0,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="lg:hidden fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between p-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900">Filters</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {resultsCount} {resultsCount === 1 ? "result" : "results"} found
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto h-[calc(100vh-140px)] p-4">
          <FilterSidebar {...filterProps} />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-gray-200 p-4">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-[#3490c5] text-white rounded-lg font-semibold hover:bg-[#2c7ab8] transition-colors"
          >
            View {resultsCount}{" "}
            {resultsCount === 1 ? "Caregiver" : "Caregivers"}
          </button>
        </div>
      </div>
    </>
  );
}

// Alternative: Drawer from Bottom (Mobile-First)
export function MobileFilterDrawerBottom({ isOpen, onClose, filterProps }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="lg:hidden fixed inset-0 z-50 bg-black/50"
        onClick={onClose}
      />

      {/* Bottom Drawer */}
      <div
        className={`lg:hidden fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[90vh] transform transition-transform duration-300 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-3 border-b border-gray-200">
          <h2 className="text-lg font-bold text-gray-900">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-4">
          <FilterSidebar {...filterProps} />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button
            onClick={onClose}
            className="w-full px-4 py-3 bg-[#3490c5] text-white rounded-lg font-semibold"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </>
  );
}

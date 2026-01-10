"use client";

// app/find-caregivers/page.js
import {useState } from "react";
import { Filter } from "lucide-react";
import { useCaregiversFilter } from "@/hooks/useCaregiversFilter";
import SearchHeader from "@/components/find-caregivers/SearchHeader";
import FilterSidebar from "@/components/find-caregivers/FilterSidebar";
import MobileFilterDrawer from "@/components/find-caregivers/MobileFilterDrawer";
import CaregiverGrid from "@/components/find-caregivers/CaregiverGrid";
import { useCaregivers } from "@/hooks/caregivers/useCaregivers";

export default function FindCaregiversPage() {
  const [location, setLocation] = useState("");
  const [savedCaregivers, setSavedCaregivers] = useState(new Set());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const { data: caregivers = [], isLoading, error } = useCaregivers();
  const caregiversData = caregivers?.data;
  // console.log(caregiversData);

  // Use custom filter hook
  const filterState = useCaregiversFilter(caregiversData);
  // console.log(filterState)

  const toggleSave = (id) => {
    setSavedCaregivers((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Props for FilterSidebar
  const filterProps = {
    selectedServices: filterState.selectedServices,
    toggleService: filterState.toggleService,
    priceRange: filterState.priceRange,
    setPriceRange: filterState.setPriceRange,
    experienceLevel: filterState.experienceLevel,
    toggleExperience: filterState.toggleExperience,
    showAvailableOnly: filterState.showAvailableOnly,
    setShowAvailableOnly: filterState.setShowAvailableOnly,
    showVerifiedOnly: filterState.showVerifiedOnly,
    setShowVerifiedOnly: filterState.setShowVerifiedOnly,
    activeFiltersCount: filterState.activeFiltersCount,
    clearAllFilters: filterState.clearAllFilters,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <SearchHeader
        searchQuery={filterState.searchQuery}
        setSearchQuery={filterState.setSearchQuery}
        location={location}
        setLocation={setLocation}
        selectedServices={filterState.selectedServices}
        toggleService={filterState.toggleService}
        showAvailableOnly={filterState.showAvailableOnly}
        setShowAvailableOnly={filterState.setShowAvailableOnly}
        showVerifiedOnly={filterState.showVerifiedOnly}
        setShowVerifiedOnly={filterState.setShowVerifiedOnly}
        activeFiltersCount={filterState.activeFiltersCount}
        clearAllFilters={filterState.clearAllFilters}
        savedCount={savedCaregivers.size}
      />

      {/* Mobile Filter Button */}
      <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center justify-center w-full px-4 py-2 bg-[#3490c5] text-white rounded-lg font-medium"
        >
          <Filter size={20} className="mr-2" />
          More Filters{" "}
          {filterState.activeFiltersCount > 0 &&
            `(${filterState.activeFiltersCount})`}
        </button>
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={mobileFiltersOpen}
        onClose={() => setMobileFiltersOpen(false)}
        filterProps={filterProps}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Advanced Filters
              </h2>
              <FilterSidebar {...filterProps} />
            </div>
          </aside>

          {/* Caregiver Grid */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filterState.filteredCaregivers.length}
                </span>{" "}
                caregivers found
              </p>
            </div>

            <CaregiverGrid
              caregivers={filterState.filteredCaregivers}
              savedCaregivers={savedCaregivers}
              loading={isLoading}
              error={error}
              onToggleSave={toggleSave}
              onClearFilters={filterState.clearAllFilters}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

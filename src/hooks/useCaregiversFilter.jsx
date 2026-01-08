// hooks/useCaregiversFilter.js
"use client";

import { useState, useMemo, useCallback } from "react";

/**
 * Custom hook for managing caregiver filtering logic
 * @param {Array} caregivers - Array of caregiver objects
 * @param {Object} options - Configuration options
 * @returns {Object} Filter state and methods
 */
export function useCaregiversFilter(caregivers, options = {}) {
  // Configuration
  const {
    initialSearchQuery = "",
    initialLocation = "",
    initialPriceRange = [15, 35],
    enableLocalStorage = false,
    storageKey = "caregiver-filters",
  } = options;

  // Load from localStorage if enabled
  const loadFromStorage = () => {
    if (enableLocalStorage && typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem(storageKey);
        return saved ? JSON.parse(saved) : null;
      } catch (error) {
        console.error("Error loading filters from storage:", error);
        return null;
      }
    }
    return null;
  };

  const savedFilters = loadFromStorage();

  // State Management
  const [searchQuery, setSearchQuery] = useState(
    savedFilters?.searchQuery || initialSearchQuery
  );
  const [location, setLocation] = useState(
    savedFilters?.location || initialLocation
  );
  const [selectedServices, setSelectedServices] = useState(
    savedFilters?.selectedServices || []
  );
  const [priceRange, setPriceRange] = useState(
    savedFilters?.priceRange || initialPriceRange
  );
  const [experienceLevel, setExperienceLevel] = useState(
    savedFilters?.experienceLevel || []
  );
  const [showAvailableOnly, setShowAvailableOnly] = useState(
    savedFilters?.showAvailableOnly || false
  );
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(
    savedFilters?.showVerifiedOnly || false
  );
  const [sortBy, setSortBy] = useState(savedFilters?.sortBy || "relevance"); // relevance, rating, price-low, price-high, experience

  // Save to localStorage whenever filters change
  const saveToStorage = useCallback(() => {
    if (enableLocalStorage && typeof window !== "undefined") {
      try {
        const filters = {
          searchQuery,
          location,
          selectedServices,
          priceRange,
          experienceLevel,
          showAvailableOnly,
          showVerifiedOnly,
          sortBy,
        };
        localStorage.setItem(storageKey, JSON.stringify(filters));
      } catch (error) {
        console.error("Error saving filters to storage:", error);
      }
    }
  }, [
    searchQuery,
    location,
    selectedServices,
    priceRange,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    sortBy,
    enableLocalStorage,
    storageKey,
  ]);

  // Filter Logic
  const filteredCaregivers = useMemo(() => {
    let results = [...caregivers];

    // Service type filter
    if (selectedServices.length > 0) {
      results = results.filter((caregiver) =>
        selectedServices.some((service) =>
          caregiver.serviceTypes?.includes(service)
        )
      );
    }

    // Price range filter
    results = results.filter(
      (caregiver) =>
        caregiver.hourlyRate >= priceRange[0] &&
        caregiver.hourlyRate <= priceRange[1]
    );

    // Experience level filter
    if (experienceLevel.length > 0) {
      results = results.filter((caregiver) => {
        const exp = caregiver.experience;
        return experienceLevel.some((level) => {
          if (level === "1-3") return exp >= 1 && exp <= 3;
          if (level === "4-6") return exp >= 4 && exp <= 6;
          if (level === "7-9") return exp >= 7 && exp <= 9;
          if (level === "10+") return exp >= 10;
          return false;
        });
      });
    }

    // Availability filter
    if (showAvailableOnly) {
      results = results.filter((caregiver) => caregiver.available);
    }

    // Verification filter
    if (showVerifiedOnly) {
      results = results.filter((caregiver) => caregiver.verified);
    }

    // Search query filter (name, skills, bio)
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      results = results.filter((caregiver) => {
        const nameMatch = caregiver.name?.toLowerCase().includes(query);
        const skillsMatch = caregiver.skills?.some((skill) =>
          skill.toLowerCase().includes(query)
        );
        const bioMatch = caregiver.bio?.toLowerCase().includes(query);
        const serviceMatch = caregiver.serviceTypes?.some((type) =>
          type.toLowerCase().includes(query)
        );
        return nameMatch || skillsMatch || bioMatch || serviceMatch;
      });
    }

    // Location filter (basic - can be enhanced with geolocation)
    if (location.trim()) {
      const locationQuery = location.toLowerCase().trim();
      results = results.filter((caregiver) => {
        // Assuming caregivers have a location field
        return (
          caregiver.location?.toLowerCase().includes(locationQuery) ||
          caregiver.city?.toLowerCase().includes(locationQuery) ||
          caregiver.zipCode?.includes(locationQuery)
        );
      });
    }

    return results;
  }, [
    caregivers,
    selectedServices,
    priceRange,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    searchQuery,
    location,
  ]);

  // Sorting Logic
  const sortedCaregivers = useMemo(() => {
    const sorted = [...filteredCaregivers];

    switch (sortBy) {
      case "rating":
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));

      case "price-low":
        return sorted.sort((a, b) => a.hourlyRate - b.hourlyRate);

      case "price-high":
        return sorted.sort((a, b) => b.hourlyRate - a.hourlyRate);

      case "experience":
        return sorted.sort((a, b) => b.experience - a.experience);

      case "reviews":
        return sorted.sort(
          (a, b) => (b.reviewCount || 0) - (a.reviewCount || 0)
        );

      case "relevance":
      default:
        // Keep original order or implement relevance scoring
        return sorted;
    }
  }, [filteredCaregivers, sortBy]);

  // Action Methods
  const toggleService = useCallback((service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  }, []);

  const toggleExperience = useCallback((level) => {
    setExperienceLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  }, []);

  const clearAllFilters = useCallback(() => {
    setSelectedServices([]);
    setPriceRange(initialPriceRange);
    setExperienceLevel([]);
    setShowAvailableOnly(false);
    setShowVerifiedOnly(false);
    setSearchQuery("");
    setLocation("");
    setSortBy("relevance");
  }, [initialPriceRange]);

  const resetToDefaults = useCallback(() => {
    clearAllFilters();
    if (enableLocalStorage && typeof window !== "undefined") {
      localStorage.removeItem(storageKey);
    }
  }, [clearAllFilters, enableLocalStorage, storageKey]);

  // Calculate active filters count
  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (selectedServices.length > 0) count += selectedServices.length;
    if (experienceLevel.length > 0) count += experienceLevel.length;
    if (showAvailableOnly) count += 1;
    if (showVerifiedOnly) count += 1;
    if (
      priceRange[0] !== initialPriceRange[0] ||
      priceRange[1] !== initialPriceRange[1]
    )
      count += 1;
    return count;
  }, [
    selectedServices,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    priceRange,
    initialPriceRange,
  ]);

  // Filter statistics
  const filterStats = useMemo(() => {
    return {
      total: caregivers.length,
      filtered: filteredCaregivers.length,
      available: filteredCaregivers.filter((c) => c.available).length,
      verified: filteredCaregivers.filter((c) => c.verified).length,
      avgRate:
        filteredCaregivers.length > 0
          ? (
              filteredCaregivers.reduce((sum, c) => sum + c.hourlyRate, 0) /
              filteredCaregivers.length
            ).toFixed(2)
          : 0,
      avgRating:
        filteredCaregivers.length > 0
          ? (
              filteredCaregivers.reduce((sum, c) => sum + (c.rating || 0), 0) /
              filteredCaregivers.length
            ).toFixed(1)
          : 0,
    };
  }, [caregivers, filteredCaregivers]);

  // Check if any filters are active
  const hasActiveFilters = useMemo(() => {
    return (
      selectedServices.length > 0 ||
      experienceLevel.length > 0 ||
      showAvailableOnly ||
      showVerifiedOnly ||
      searchQuery.trim() !== "" ||
      location.trim() !== "" ||
      priceRange[0] !== initialPriceRange[0] ||
      priceRange[1] !== initialPriceRange[1]
    );
  }, [
    selectedServices,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    searchQuery,
    location,
    priceRange,
    initialPriceRange,
  ]);

  // Save filters when they change
  useMemo(() => {
    if (hasActiveFilters) {
      saveToStorage();
    }
  }, [hasActiveFilters, saveToStorage]);

  // Return all state and methods
  return {
    // State
    searchQuery,
    location,
    selectedServices,
    priceRange,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    sortBy,

    // Results
    filteredCaregivers: sortedCaregivers,
    caregiverCount: sortedCaregivers.length,

    // Statistics
    filterStats,
    activeFiltersCount,
    hasActiveFilters,

    // Setters
    setSearchQuery,
    setLocation,
    setSelectedServices,
    setPriceRange,
    setExperienceLevel,
    setShowAvailableOnly,
    setShowVerifiedOnly,
    setSortBy,

    // Actions
    toggleService,
    toggleExperience,
    clearAllFilters,
    resetToDefaults,
  };
}

// Export default
export default useCaregiversFilter;

"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Star,
  Heart,
  CheckCircle,
  Briefcase,
  Clock,
  Filter,
  X,
  DollarSign,
} from "lucide-react";

// Mock caregiver data
const CAREGIVERS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    verified: true,
    rating: 4.9,
    reviewCount: 47,
    experience: 8,
    hourlyRate: 25,
    available: true,
    serviceTypes: ["Child", "Elderly"],
    skills: ["CPR Certified", "Alzheimer's Care", "Meal Prep"],
    bio: "Experienced caregiver with a passion for elderly care",
  },
  {
    id: 2,
    name: "Michael Chen",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    verified: true,
    rating: 4.8,
    reviewCount: 32,
    experience: 5,
    hourlyRate: 22,
    available: true,
    serviceTypes: ["Child", "Special Needs"],
    skills: ["First Aid", "Autism Spectrum", "Activities Planning"],
    bio: "Dedicated professional with special needs expertise",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    verified: true,
    rating: 5.0,
    reviewCount: 61,
    experience: 12,
    hourlyRate: 30,
    available: false,
    serviceTypes: ["Elderly", "Special Needs"],
    skills: ["Nursing Assistant", "Physical Therapy", "Dementia Care"],
    bio: "Certified nursing assistant with extensive experience",
  },
  {
    id: 4,
    name: "James Wilson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    verified: false,
    rating: 0,
    reviewCount: 0,
    experience: 2,
    hourlyRate: 18,
    available: true,
    serviceTypes: ["Child"],
    skills: ["Homework Help", "Sports Activities", "Meal Prep"],
    bio: "New member eager to help families",
  },
  {
    id: 5,
    name: "Amanda Taylor",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
    verified: true,
    rating: 4.7,
    reviewCount: 28,
    experience: 6,
    hourlyRate: 24,
    available: true,
    serviceTypes: ["Child", "Elderly"],
    skills: ["CPR Certified", "Light Housekeeping", "Transportation"],
    bio: "Reliable caregiver with flexible schedule",
  },
  {
    id: 6,
    name: "David Park",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
    verified: true,
    rating: 4.9,
    reviewCount: 53,
    experience: 10,
    hourlyRate: 28,
    available: true,
    serviceTypes: ["Special Needs", "Elderly"],
    skills: ["Sign Language", "Mobility Assistance", "Medication Management"],
    bio: "Compassionate care for individuals with special needs",
  },
];

export default function FindCaregiversPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);
  const [priceRange, setPriceRange] = useState([15, 35]);
  const [experienceLevel, setExperienceLevel] = useState([]);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);
  const [savedCaregivers, setSavedCaregivers] = useState(new Set());
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter caregivers based on all criteria
  const filteredCaregivers = useMemo(() => {
    return CAREGIVERS.filter((caregiver) => {
      // Service type filter
      if (selectedServices.length > 0) {
        const hasMatchingService = selectedServices.some((service) =>
          caregiver.serviceTypes.includes(service)
        );
        if (!hasMatchingService) return false;
      }

      // Price range filter
      if (
        caregiver.hourlyRate < priceRange[0] ||
        caregiver.hourlyRate > priceRange[1]
      ) {
        return false;
      }

      // Experience level filter
      if (experienceLevel.length > 0) {
        const exp = caregiver.experience;
        const matchesExperience = experienceLevel.some((level) => {
          if (level === "1-3" && exp >= 1 && exp <= 3) return true;
          if (level === "4-6" && exp >= 4 && exp <= 6) return true;
          if (level === "7-9" && exp >= 7 && exp <= 9) return true;
          if (level === "10+" && exp >= 10) return true;
          return false;
        });
        if (!matchesExperience) return false;
      }

      // Availability filter
      if (showAvailableOnly && !caregiver.available) return false;

      // Verified filter
      if (showVerifiedOnly && !caregiver.verified) return false;

      // Search query filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          caregiver.name.toLowerCase().includes(query) ||
          caregiver.skills.some((skill) =>
            skill.toLowerCase().includes(query)
          ) ||
          caregiver.bio.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      return true;
    });
  }, [
    selectedServices,
    priceRange,
    experienceLevel,
    showAvailableOnly,
    showVerifiedOnly,
    searchQuery,
  ]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleExperience = (level) => {
    setExperienceLevel((prev) =>
      prev.includes(level) ? prev.filter((l) => l !== level) : [...prev, level]
    );
  };

  const clearAllFilters = () => {
    setSelectedServices([]);
    setPriceRange([15, 35]);
    setExperienceLevel([]);
    setShowAvailableOnly(false);
    setShowVerifiedOnly(false);
    setSearchQuery("");
  };

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

  const activeFiltersCount =
    selectedServices.length +
    experienceLevel.length +
    (showAvailableOnly ? 1 : 0) +
    (showVerifiedOnly ? 1 : 0);

  const FilterSidebar = () => (
    <div className="space-y-6">
      {/* Service Type */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Service Type</h3>
        <div className="space-y-2">
          {["Child", "Elderly", "Special Needs"].map((service) => (
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
          {["1-3", "4-6", "7-9", "10+"].map((level) => (
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header
        className=" text-white shadow-lg"
        style={{
          background:
            "linear-gradient(135deg, #2b7a9e 0%, #3490c5 50%, #4ba3d1 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold mb-4">
            Find Your Perfect Caregiver
          </h1>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name, skills, or experience..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full lg:w-2/4 pl-10 pr-3 py-2 rounded-lg text-slate-50 focus:outline-none focus:ring-1 focus:ring-white"
              />
            </div>
            <div className="relative sm:w-64">
              <MapPin
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Enter location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Filter Button */}
      <div className="lg:hidden sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="flex items-center justify-center w-full px-4 py-2 bg-[#3490c5] text-white rounded-lg font-medium"
        >
          <Filter size={20} className="mr-2" />
          Filters {activeFiltersCount > 0 && `(${activeFiltersCount})`}
        </button>
      </div>

      {/* Mobile Filter Overlay */}
      {mobileFiltersOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-xl overflow-y-auto">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setMobileFiltersOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-4">
              <FilterSidebar />
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Filters</h2>
              <FilterSidebar />
            </div>
          </aside>

          {/* Caregiver Grid */}
          <main className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredCaregivers.length}
                </span>{" "}
                caregivers found
              </p>
            </div>

            {filteredCaregivers.length === 0 ? (
              /* Zero Results State */
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search size={32} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    No caregivers found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find any caregivers matching your criteria. Try
                    adjusting your filters or search terms.
                  </p>
                  <button
                    onClick={clearAllFilters}
                    className="px-6 py-3 bg-[#3490c5] text-white rounded-lg font-medium hover:bg-[#2c7ab8] transition-colors"
                  >
                    Clear All Filters
                  </button>

                  {/* Suggested Caregivers */}
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                      Suggested Caregivers
                    </h4>
                    <p className="text-sm text-gray-600">
                      Based on your location and preferences
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Caregiver Cards Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCaregivers.map((caregiver) => (
                  <div
                    key={caregiver.id}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer overflow-hidden group"
                  >
                    <div className="p-6">
                      {/* Header: Image, Name, Badge, Save */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-3">
                          <img
                            src={caregiver.image}
                            alt={caregiver.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3490c5] transition-colors">
                              {caregiver.name}
                            </h3>
                            {caregiver.verified ? (
                              <div className="flex items-center gap-1 mt-1">
                                <CheckCircle
                                  size={16}
                                  className="text-blue-600"
                                />
                                <span className="text-sm text-blue-600 font-medium">
                                  Verified
                                </span>
                              </div>
                            ) : (
                              <span className="inline-block mt-1 px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded">
                                New Member
                              </span>
                            )}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSave(caregiver.id);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Heart
                            size={20}
                            className={
                              savedCaregivers.has(caregiver.id)
                                ? "fill-red-500 text-red-500"
                                : "text-gray-400"
                            }
                          />
                        </button>
                      </div>

                      {/* Rating */}
                      {caregiver.reviewCount > 0 ? (
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex items-center gap-1">
                            <Star
                              size={16}
                              className="fill-yellow-400 text-yellow-400"
                            />
                            <span className="font-semibold text-gray-900">
                              {caregiver.rating}
                            </span>
                          </div>
                          <span className="text-sm text-gray-500">
                            ({caregiver.reviewCount} reviews)
                          </span>
                        </div>
                      ) : (
                        <div className="mb-3 text-sm text-gray-500">
                          No reviews yet
                        </div>
                      )}

                      {/* Experience */}
                      <div className="flex items-center gap-2 mb-3 text-gray-700">
                        <Briefcase size={16} className="text-gray-400" />
                        <span className="text-sm">
                          {caregiver.experience} years experience
                        </span>
                      </div>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {caregiver.skills.slice(0, 3).map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Price and Availability */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div>
                          <div className="flex items-center gap-1 text-2xl font-bold text-[#3490c5]">
                            <DollarSign size={20} />
                            {caregiver.hourlyRate}
                            <span className="text-sm text-gray-500 font-normal">
                              /hour
                            </span>
                          </div>
                          <div className="flex items-center gap-1 mt-1">
                            <Clock
                              size={14}
                              className={
                                caregiver.available
                                  ? "text-green-500"
                                  : "text-gray-400"
                              }
                            />
                            <span
                              className={`text-xs font-medium ${
                                caregiver.available
                                  ? "text-green-600"
                                  : "text-gray-500"
                              }`}
                            >
                              {caregiver.available
                                ? "Available Now"
                                : "Not Available"}
                            </span>
                          </div>
                        </div>
                        <button className="px-4 py-2 bg-[#3490c5] text-white font-medium rounded-lg hover:bg-[#2c7ab8] transition-colors">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

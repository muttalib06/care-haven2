// components/find-caregivers/SearchHeader.js
"use client";

import { Search, MapPin, Heart, Menu } from "lucide-react";
// import ServiceTypeDropdown from "./ServiceTypeDropdown";
import QuickFilters from "./QuickFilters";
import { RiFindReplaceLine } from "react-icons/ri";

export default function SearchHeader({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  selectedServices,
  showAvailableOnly,
  setShowAvailableOnly,
  showVerifiedOnly,
  setShowVerifiedOnly,
  activeFiltersCount,
  clearAllFilters,
  savedCount = 0,
  onMenuClick,
  onNotificationsClick,
}) {
  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Implement search logic
    console.log("Searching...", { searchQuery, location, selectedServices });
  };

  return (
    <header
      className="relative overflow-hidden"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2b7a9e]/95 via-[#3490c5]/90 to-[#4ba3d1]/95 backdrop-blur-sm"></div> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between py-3">
          {/* Left: Logo & Brand */}
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Open menu"
            >
              <Menu className="text-white" size={20} />
            </button>

            {/* Logo
            <div className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center shadow-lg">
              <Heart className="text-white" size={18} fill="white" />
            </div> */}

            {/* Brand Name */}
            <div className="flex items-center gap-2">
              {/* <h1 className="text-lg font-bold text-white leading-tight">
                CareConnect
              </h1> */}
              <RiFindReplaceLine  className="text-white"/>
              <p className="text-[10px] text-white/80 leading-tight">
                Find Your Perfect Caregiver
              </p>
            </div>
          </div>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Notifications Button (Desktop) */}
            <button
              onClick={onNotificationsClick}
              className="hidden md:flex relative p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Notifications"
            >
              {/* <Bell className="text-white" size={18} /> */}
              {/* Notification Badge */}
              {/* <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                3
              </span> */}
            </button>

            {/* Saved Button */}
            <button
              onClick={() => (window.location.href = "/saved-caregivers")}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-lg transition-all duration-200 shadow-sm"
            >
              <Heart size={14} />
              <span className="text-xs font-medium">Saved</span>
              {savedCount > 0 && (
                <span className="ml-1 px-1.5 py-0.5 bg-white text-[#3490c5] text-[10px] font-bold rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            {/* Profile Button */}
            {/* <button
              onClick={onProfileClick}
              className="p-2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-lg transition-colors"
              aria-label="Profile"
            >
              <User className="text-white" size={18} />
            </button> */}
          </div>
        </div>

        {/* Search Section */}
        <div className="pb-4 pt-2">
          {/* Tagline */}
          <h2 className="text-sm font-semibold text-white mb-3 drop-shadow-sm">
            Find compassionate care for your loved ones
          </h2>

          {/* Main Search Bar */}
          <form onSubmit={handleSearch}>
            <div className="bg-white/95 backdrop-blur-lg rounded-xl shadow-lg p-2">
              <div className="flex flex-col lg:flex-row gap-2">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="Search by name, skills, or experience..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3490c5]/30 focus:bg-white transition-all duration-200"
                    aria-label="Search caregivers"
                  />
                  {/* Clear Search Button */}
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Clear search"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Location Input */}
                <div className="lg:w-56 relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={16}
                  />
                  <input
                    type="text"
                    placeholder="City or ZIP code"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50/50 border-0 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3490c5]/30 focus:bg-white transition-all duration-200"
                    aria-label="Location"
                  />
                  {/* Clear Location Button */}
                  {location && (
                    <button
                      type="button"
                      onClick={() => setLocation("")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 rounded transition-colors"
                      aria-label="Clear location"
                    >
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Service Type Dropdown */}
                {/* <ServiceTypeDropdown
                  selectedServices={selectedServices}
                  toggleService={toggleService}
                /> */}

                {/* Search Button */}
                <button
                  type="submit"
                  className="px-5 py-2 text-sm bg-gradient-to-r from-[#3490c5] to-[#2b7a9e] text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200 whitespace-nowrap"
                >
                  Search
                </button>
              </div>
            </div>
          </form>

          {/* Quick Filters */}
          <QuickFilters
            showAvailableOnly={showAvailableOnly}
            setShowAvailableOnly={setShowAvailableOnly}
            showVerifiedOnly={showVerifiedOnly}
            setShowVerifiedOnly={setShowVerifiedOnly}
            activeFiltersCount={activeFiltersCount}
            clearAllFilters={clearAllFilters}
          />

          {/* Search Stats (Optional) */}
          {(searchQuery || location || selectedServices.length > 0) && (
            <div className="mt-3 flex items-center gap-2 text-xs text-white/80">
              <span>Searching in:</span>
              {location && (
                <span className="px-2 py-1 bg-white/20 rounded">
                  📍 {location}
                </span>
              )}
              {selectedServices.length > 0 && (
                <span className="px-2 py-1 bg-white/20 rounded">
                  {selectedServices.join(", ")} Care
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

// Alternative: Compact Header (for sub-pages)
export function SearchHeaderCompact({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <header className="bg-linear-to-r from-[#3490c5] to-[#2b7a9e] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
            <Heart className="text-white" size={20} fill="white" />
          </div>
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search caregivers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && onSearch()}
              className="w-full pl-10 pr-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-white/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

// Alternative: Hero Header (for landing page)
export function SearchHeaderHero({
  searchQuery,
  setSearchQuery,
  location,
  setLocation,
  onSearch,
}) {
  return (
    <header className="relative min-h-100 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1920&q=80")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#2b7a9e]/90 to-[#3490c5]/90"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Find Your Perfect Caregiver
        </h1>
        <p className="text-lg text-white/90 mb-8">
          Connect with verified, professional caregivers in your area
        </p>

        {/* Hero Search Box */}
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="What type of care do you need?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border-0 rounded-lg focus:ring-2 focus:ring-[#3490c5]"
              />
            </div>
            <div className="md:w-48 relative">
              <MapPin
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 text-base border-0 rounded-lg focus:ring-2 focus:ring-[#3490c5]"
              />
            </div>
            <button
              onClick={onSearch}
              className="px-8 py-3 bg-gradient-to-r from-[#3490c5] to-[#2b7a9e] text-white font-semibold rounded-lg hover:shadow-lg transition-all"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

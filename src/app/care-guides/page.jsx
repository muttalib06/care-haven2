"use client";

import { useState, useMemo, useEffect, useLayoutEffect } from "react";
import FeaturedGuide from "@/components/care-guides/FeaturedGuide";
import GuideCard from "@/components/care-guides/GuideCard";
import GuideFilters from "@/components/care-guides/GuideFilters";
import GuideSearch from "@/components/care-guides/GuideSearch";
import GuideStats from "@/components/care-guides/GuideStats";
import { getCareGuides } from "@/data-handling/getCareGuides";
import { usePathname } from "next/navigation";

export default function CareGuidesPage() {
  const [guidesData, setGuidesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCareType, setSelectedCareType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const pathname = usePathname();

  useEffect(() => {
    const dataLoad = async () => {
      const response = await getCareGuides();
      setGuidesData(response?.data || []); // Fixed: Added fallback to empty array
    };

    dataLoad();
  }, []);

  // Filter and search guides
  const filteredGuides = useMemo(() => {
    if (!guidesData || guidesData.length === 0) return []; // Fixed: Added length check
    let filtered = guidesData; // Fixed: Added space after 'filtered ='

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (guide) =>
          guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          guide.searchText.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Care type filter
    if (selectedCareType !== "all") {
      filtered = filtered.filter(
        (guide) => guide.careType === selectedCareType,
      );
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter((guide) =>
        guide.categories.includes(selectedCategory),
      );
    }

    // Difficulty filter
    if (selectedDifficulty !== "all") {
      filtered = filtered.filter(
        (guide) => guide.difficulty === selectedDifficulty,
      );
    }

    // Sort guides
    if (sortBy === "popular") {
      filtered = [...filtered].sort((a, b) => b.stats.views - a.stats.views);
    } else if (sortBy === "rating") {
      filtered = [...filtered].sort(
        (a, b) => b.ratings.average - a.ratings.average,
      );
    } else if (sortBy === "recent") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt),
      );
    }

    return filtered;
  }, [
    guidesData, // Fixed: Added missing dependency
    searchTerm,
    selectedCareType,
    selectedCategory,
    selectedDifficulty,
    sortBy,
  ]);

  // Calculate stats
  const stats = useMemo(() => {
    // Fixed: Added safety checks
    if (!guidesData || guidesData.length === 0) {
      return { totalGuides: 0, totalViews: 0, averageRating: 0 };
    }

    const totalViews = guidesData.reduce(
      (sum, guide) => sum + guide.stats.views,
      0,
    );
    const averageRating =
      guidesData.reduce((sum, guide) => sum + guide.ratings.average, 0) /
      guidesData.length;
    return { totalGuides: guidesData.length, totalViews, averageRating };
  }, [guidesData]); // Fixed: Added missing dependency

  const featuredGuide = guidesData?.find((guide) => guide.isFeatured); // Fixed: Added optional chaining

useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-linear-to-r from-[#3490c5] to-[#2c7aa8] text-white">
        {" "}
        {/* Fixed: corrected className */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Care Guides & Resources
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Expert guidance and practical advice for families navigating
              caregiving challenges. Trusted resources reviewed by healthcare
              professionals.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <GuideSearch onSearch={setSearchTerm} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats */}
        <GuideStats
          totalGuides={stats.totalGuides}
          totalViews={stats.totalViews}
          averageRating={stats.averageRating}
        />

        {/* Featured Guide */}
        {featuredGuide && <FeaturedGuide guide={featuredGuide} />}

        {/* Filters and Guides Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <GuideFilters
                selectedCareType={selectedCareType}
                onCareTypeChange={setSelectedCareType}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={setSelectedDifficulty}
              />
            </div>
          </div>

          {/* Guides Grid */}
          <div className="lg:col-span-3">
            {/* Sort and Results Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-gray-600">
                Showing{" "}
                <span className="font-semibold text-gray-900">
                  {filteredGuides.length}
                </span>{" "}
                guide{filteredGuides.length !== 1 ? "s" : ""}
                {searchTerm && (
                  <span>
                    {" "}
                    for "
                    <span className="font-semibold text-[#3490c5]">
                      {searchTerm}
                    </span>
                    "
                  </span>
                )}
              </p>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="recent">Most Recent</option>
              </select>
            </div>

            {/* Guides Grid */}
            {filteredGuides.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredGuides.map((guide) => (
                  <GuideCard key={guide._id} guide={guide} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <svg
                  className="w-24 h-24 mx-auto text-gray-300 mb-4"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No guides found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCareType("all");
                    setSelectedCategory("all");
                    setSelectedDifficulty("all");
                  }}
                  className="px-6 py-3 bg-[#3490c5] text-white rounded-lg hover:bg-[#2c7aa8] transition-colors"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-gradient-to-r from-[#3490c5] to-[#2c7aa8] rounded-2xl p-8 md:p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated with Care Tips
            </h2>
            <p className="text-lg text-white/90 mb-6">
              Subscribe to our newsletter for expert caregiving advice, new
              guides, and helpful resources delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="button"
                className="px-6 py-3 bg-white text-[#3490c5] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

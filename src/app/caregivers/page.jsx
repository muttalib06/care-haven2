"use client";
import React, { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  MapPin,
  Award,
  X,
  CheckCircle,
  Shield,
  MessageCircle,
} from "lucide-react";

export default function FindCaregivers() {
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);

  const caregivers = [
    {
      id: 1,
      name: "Sarah Johnson",
      age: 32,
      photo: "SJ",
      rating: 4.9,
      reviews: 127,
      experience: 8,
      hourlyRate: 25,
      availability: "Available Now",
      skills: ["CPR Certified", "Child Care"],
      languages: "English, Spanish",
      verified: true,
      responseTime: "1 hour",
      completedJobs: 340,
      location: "2.3 mi",
    },
    {
      id: 2,
      name: "Michael Chen",
      age: 45,
      photo: "MC",
      rating: 4.8,
      reviews: 94,
      experience: 12,
      hourlyRate: 30,
      availability: "Available Today",
      skills: ["Registered Nurse", "Elderly Care"],
      languages: "English, Mandarin",
      verified: true,
      responseTime: "30 min",
      completedJobs: 520,
      location: "1.8 mi",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      age: 28,
      photo: "ER",
      rating: 5.0,
      reviews: 156,
      experience: 6,
      hourlyRate: 22,
      availability: "Available Now",
      skills: ["Special Needs", "First Aid"],
      languages: "English, Spanish",
      verified: true,
      responseTime: "2 hours",
      completedJobs: 280,
      location: "3.1 mi",
    },
    {
      id: 4,
      name: "David Thompson",
      age: 38,
      photo: "DT",
      rating: 4.7,
      reviews: 83,
      experience: 10,
      hourlyRate: 28,
      availability: "This Week",
      skills: ["Physical Therapy", "Mobility"],
      languages: "English",
      verified: true,
      responseTime: "3 hours",
      completedJobs: 410,
      location: "4.5 mi",
    },
    {
      id: 5,
      name: "Lisa Patel",
      age: 35,
      photo: "LP",
      rating: 4.9,
      reviews: 142,
      experience: 9,
      hourlyRate: 26,
      availability: "Available Today",
      skills: ["Pediatric Care", "Autism Support"],
      languages: "English, Hindi",
      verified: true,
      responseTime: "1 hour",
      completedJobs: 390,
      location: "2.7 mi",
    },
    {
      id: 6,
      name: "James Wilson",
      age: 50,
      photo: "JW",
      rating: 4.8,
      reviews: 108,
      experience: 15,
      hourlyRate: 32,
      availability: "This Week",
      skills: ["Post-Surgery", "Hospice Care"],
      languages: "English, French",
      verified: true,
      responseTime: "2 hours",
      completedJobs: 650,
      location: "5.2 mi",
    },
  ];

  const availabilityColors = {
    "Available Now": "bg-emerald-50 text-emerald-700",
    "Available Today": "bg-blue-50 text-blue-700",
    "This Week": "bg-amber-50 text-amber-700",
  };

  const quickFilters = [
    { label: "Available Now", icon: Clock },
    { label: "Top Rated", icon: Star },
    { label: "Nearby", icon: MapPin },
    { label: "Verified", icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Banner with Linear Background */}
      <div
        className="relative overflow-hidden bg-linear-to-r from-blue-500 to-blue-400"
        style={{
          background:
            "linear-gradient(135deg, #2b7a9e 0%, #3490c5 50%, #4ba3d1 100%)",
        }}
      >
        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-6 md:py-8">
          {/* Top Row: Title and Image */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Find Your Perfect Caregiver
              </h1>
              <p className="text-blue-50 text-sm md:text-base">
                Trusted professionals ready to help
              </p>
            </div>

            {/* Compact Image Badge */}
            <div className="hidden md:block shrink-0 ml-4">
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop"
                  alt="Caregiver"
                  className="w-20 h-20 object-cover rounded-2xl shadow-lg border-2 border-white border-opacity-30 group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                  <CheckCircle className="w-3 h-3 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Search Box - Compact */}
          <div className="rounded-xl p-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search caregivers..."
                  className="w-full lg:w-2/3 pl-12 pr-4 py-2 rounded-lg text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <button className="px-6 py-2 bg-white text-black rounded-lg font-semibold hover:shadow-md transition-all duration-300 text-sm whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {/* Compact Stats - Below Search */}
          <div className="flex items-center justify-center gap-6 mt-4 text-white">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">500+</div>
              <div className="text-xs text-blue-100">Caregivers</div>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">4.9★</div>
              <div className="text-xs text-blue-100">Rating</div>
            </div>
            <div className="w-px h-8 bg-white bg-opacity-30"></div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">10K+</div>
              <div className="text-xs text-blue-100">Families</div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {quickFilters.map((item, idx) => (
                <button
                  key={idx}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white border border-gray-300 hover:border-blue-400 transition-colors whitespace-nowrap"
                >
                  <item.icon className="w-3 h-3" />
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-sm font-medium ml-2"
              style={{ backgroundColor: "#3490c5" }}
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex gap-4">
          {/* Compact Sidebar */}
          <div
            className={`${
              showFilters ? "block" : "hidden"
            } lg:block fixed lg:sticky inset-0 lg:inset-auto top-0 lg:top-4 z-50 lg:z-0 bg-black bg-opacity-40 lg:bg-transparent lg:w-64 lg:h-fit`}
          >
            <div className="bg-white h-full lg:h-auto lg:rounded-xl lg:shadow-md p-4 overflow-y-auto">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold text-gray-900">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Compact Filter Sections */}
              <div className="space-y-4">
                {/* Care Type */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Care Type
                  </label>
                  <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
                    <option>All Types</option>
                    <option>Child Care</option>
                    <option>Elderly Care</option>
                    <option>Special Needs</option>
                  </select>
                </div>

                {/* Price */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Price Range
                  </label>
                  <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
                    <option>Any Price</option>
                    <option>$15-$20</option>
                    <option>$20-$25</option>
                    <option>$25-$30</option>
                    <option>$30+</option>
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Experience
                  </label>
                  <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
                    <option>Any Experience</option>
                    <option>1-3 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Minimum Rating
                  </label>
                  <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
                    <option>Any Rating</option>
                    <option>4+ Stars</option>
                    <option>4.5+ Stars</option>
                    <option>4.8+ Stars</option>
                  </select>
                </div>

                {/* Languages */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-2">
                    Languages
                  </label>
                  <select className="w-full p-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400">
                    <option>Any Language</option>
                    <option>English</option>
                    <option>Spanish</option>
                    <option>Mandarin</option>
                  </select>
                </div>
              </div>

              {/* Compact Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="flex-1 py-2 text-xs rounded-lg border border-gray-300 font-medium hover:bg-gray-50">
                  Clear
                </button>
                <button
                  className="flex-1 py-2 text-xs rounded-lg text-white font-medium"
                  style={{ backgroundColor: "#3490c5" }}
                  onClick={() => setShowFilters(false)}
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Compact Cards Grid */}
          <div className="flex-1">
            {/* Results Bar */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  {caregivers.length}
                </span>{" "}
                caregivers
              </p>
              <select className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-medium">
                <option>Best Match</option>
                <option>Highest Rated</option>
                <option>Lowest Price</option>
              </select>
            </div>

            {/* Compact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caregivers.map((caregiver) => (
                <div
                  key={caregiver.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="p-4">
                    {/* Top Section */}
                    <div className="flex gap-3 mb-3">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <div
                          className="w-14 h-14 rounded-xl flex items-center justify-center text-white text-lg font-bold"
                          style={{ backgroundColor: "#3490c5" }}
                        >
                          {caregiver.photo}
                        </div>
                        {caregiver.verified && (
                          <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>

                      {/* Name & Rating */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-bold text-gray-900 truncate">
                          {caregiver.name}
                        </h3>
                        <p className="text-xs text-gray-600">
                          {caregiver.age} yrs • {caregiver.experience} yrs exp
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-semibold text-gray-900">
                            {caregiver.rating}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({caregiver.reviews})
                          </span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <div
                          className="text-xl font-bold"
                          style={{ color: "#3490c5" }}
                        >
                          ${caregiver.hourlyRate}
                        </div>
                        <div className="text-xs text-gray-500">per hour</div>
                      </div>
                    </div>

                    {/* Trust Badges - Compact */}
                    <div className="grid grid-cols-3 gap-2 mb-3 text-xs">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Shield className="w-3 h-3 text-green-600" />
                        <span>Verified</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Award className="w-3 h-3 text-blue-600" />
                        <span>{caregiver.completedJobs} jobs</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-3 h-3 text-purple-600" />
                        <span>{caregiver.location}</span>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {caregiver.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Bottom Info */}
                    <div className="flex items-center justify-between text-xs text-gray-600 mb-3">
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>{caregiver.responseTime}</span>
                      </div>
                      <span className="truncate ml-2">
                        {caregiver.languages}
                      </span>
                    </div>

                    {/* Availability & Button */}
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex items-center gap-1 px-2 py-1 rounded-md text-xs font-semibold ${
                          availabilityColors[caregiver.availability]
                        }`}
                      >
                        <Clock className="w-3 h-3" />
                        <span className="hidden sm:inline">
                          {caregiver.availability}
                        </span>
                        <span className="sm:hidden">Now</span>
                      </div>
                      <button
                        className="flex-1 py-2 rounded-lg text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: "#3490c5" }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More - Compact */}
            <div className="mt-6 text-center">
              <button className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-colors">
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

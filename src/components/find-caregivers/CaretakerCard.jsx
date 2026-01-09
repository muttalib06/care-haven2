
"use client";

import { Star, Heart, CheckCircle, Briefcase, Clock, DollarSign } from "lucide-react";
import Image from "next/image";

export default function CaretakerCard({ caregiver, isSaved, onToggleSave }) {
  const handleBookNow = () => {
    // TODO: Implement booking logic
    console.log("Book caregiver:", caregiver.id);
  };

  const handleCardClick = () => {
    // TODO: Navigate to caregiver profile page
    console.log("View profile:", caregiver.id);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      <div className="p-6">
        {/* Header: Image, Name, Verification Badge, Save Button */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            {/* Profile Image */}
            <div className="relative">
              <Image
                src={caregiver.image}
                alt={caregiver.name}
                width={400}
                height={400}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200 group-hover:border-[#3490c5] transition-colors"
              />
              {/* Online Status Indicator (optional) */}
              {caregiver.available && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>

            {/* Name and Verification */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#3490c5] transition-colors">
                {caregiver.name}
              </h3>
              
              {/* Verification Badge */}
              {caregiver.verified ? (
                <div className="flex items-center gap-1 mt-1">
                  <CheckCircle size={16} className="text-blue-600" />
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

          {/* Save/Favorite Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              onToggleSave(caregiver.id);
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label={isSaved ? "Remove from saved" : "Save caregiver"}
          >
            <Heart
              size={20}
              className={`transition-colors ${
                isSaved ? "fill-red-500 text-red-500" : "text-gray-400 hover:text-red-400"
              }`}
            />
          </button>
        </div>

        {/* Rating Section */}
        {caregiver.reviewCount > 0 ? (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="font-semibold text-gray-900">
                {caregiver.rating.toFixed(1)}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              ({caregiver.reviewCount} {caregiver.reviewCount === 1 ? 'review' : 'reviews'})
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
            {caregiver.experience} {caregiver.experience === 1 ? 'year' : 'years'} experience
          </span>
        </div>

        {/* Service Types (optional - can be added) */}
        {caregiver.serviceTypes && caregiver.serviceTypes.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {caregiver.serviceTypes.map((type, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Skills/Specializations */}
        <div className="flex flex-wrap gap-2 mb-4">
          {caregiver.skills.slice(0, 3).map((skill, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-gray-200 transition-colors"
            >
              {skill}
            </span>
          ))}
          {caregiver.skills.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-full">
              +{caregiver.skills.length - 3} more
            </span>
          )}
        </div>

        {/* Bio (optional preview) */}
        {caregiver.bio && (
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">
            {caregiver.bio}
          </p>
        )}

        {/* Footer: Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div>
            {/* Hourly Rate */}
            <div className="flex items-center gap-1 text-2xl font-bold text-[#3490c5]">
              <DollarSign size={20} />
              {caregiver.hourlyRate}
              <span className="text-sm text-gray-500 font-normal">/hour</span>
            </div>
            
            {/* Availability Status */}
            <div className="flex items-center gap-1 mt-1">
              <Clock
                size={14}
                className={caregiver.available ? "text-green-500" : "text-gray-400"}
              />
              <span
                className={`text-xs font-medium ${
                  caregiver.available ? "text-green-600" : "text-gray-500"
                }`}
              >
                {caregiver.available ? "Available Now" : "Not Available"}
              </span>
            </div>
          </div>

          {/* Book Now Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              handleBookNow();
            }}
            disabled={!caregiver.available}
            className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ${
              caregiver.available
                ? "bg-[#3490c5] text-white hover:bg-[#2c7ab8] hover:shadow-md"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            {caregiver.available ? "Book Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
}
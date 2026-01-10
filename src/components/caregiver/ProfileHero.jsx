import { Star, MapPin, Clock } from 'lucide-react';
import TrustBadges from './TrustBadges';

export default function ProfileHero({ caregiver }) {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Avatar with status */}
          <div className="relative">
            <img 
              src={caregiver.image} 
              alt={caregiver.name}
              className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white shadow-lg"
            />
            {caregiver.status === "Active" && (
              <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 border-4 border-white rounded-full"></div>
            )}
          </div>

          {/* Name and details */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {caregiver.name}
              </h1>
              {caregiver.status === "Active" && (
                <span className="text-emerald-600 text-sm font-medium">
                  Active Now
                </span>
              )}
            </div>

            {/* Rating and location */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-gray-900">
                  {caregiver.rating}
                </span>
                <span className="text-gray-600">
                  ({caregiver.reviewCount} reviews)
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>
                  {caregiver.location.city}, {caregiver.location.state}
                </span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-4 h-4" />
                <span>{caregiver.experience} years experience</span>
              </div>
            </div>

            {/* Trust badges */}
            <TrustBadges 
              verified={caregiver.verified}
              backgroundCheck={caregiver.backgroundCheck}
              certificates={caregiver.certificates}
            />

            {/* Bio */}
            <p className="mt-4 text-gray-700 max-w-3xl">
              {caregiver.bio}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
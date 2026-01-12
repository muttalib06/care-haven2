import { Phone, Mail, Globe } from "lucide-react";
import BookingActions from "./BookingActions";

export default function BookingCard({ caregiver }) {
  return (
    <div className="lg:sticky lg:top-6">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        {/* Price header */}
        <div className="bg-gradient-to-r from-[#3490c5] to-[#5cb3e0] text-white p-6">
          <div className="text-center">
            <div className="text-4xl font-bold">${caregiver.hourlyRate}</div>
            <div className="text-blue-100 mt-1">per hour</div>
          </div>
        </div>

        {/* Statistics */}
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {caregiver.statistics.totalBookings}
              </div>
              <div className="text-sm text-gray-600">Total Bookings</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {caregiver.statistics.responseTime}m
              </div>
              <div className="text-sm text-gray-600">Response Time</div>
            </div>
          </div>
        </div>

        {/* Action buttons - Now using client component */}
        <div className="p-6">
          <BookingActions caregiver={caregiver} />
        </div>

        {/* Contact info */}
        <div className="p-6 bg-gray-50 space-y-3 text-sm">
          <div className="flex items-center gap-3 text-gray-700">
            <Phone className="w-4 h-4 text-[#3490c5]" />
            <span>{caregiver.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="w-4 h-4 text-[#3490c5]" />
            <span className="truncate">{caregiver.email}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Globe className="w-4 h-4 text-[#3490c5]" />
            <span>{caregiver.languages.join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

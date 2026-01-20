import { Calendar } from "lucide-react";
import Image from "next/image";

const RecentBookings = () => {
  const recentBookings = [
    {
      id: 1,
      caregiver: "Michael Chen",
      service: "Child Care",
      date: "Jan 15, 2025",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      caregiver: "Emily Rodriguez",
      service: "Elderly Care",
      date: "Jan 10, 2025",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      caregiver: "David Kim",
      service: "Special Needs",
      date: "Jan 8, 2025",
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
        <Calendar className="w-6 h-6 text-[#3490c5]" />
        Recent Bookings
      </h3>

      <div className="space-y-4">
        {recentBookings.map((booking) => (
          <div
            key={booking.id}
            className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
          >
            <Image
              src={booking.image}
              width={128}
              height={128}
              alt={booking.caregiver}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">
                {booking.caregiver}
              </h4>
              <p className="text-sm text-gray-600">{booking.service}</p>
              <p className="text-xs text-gray-500 mt-1">{booking.date}</p>
            </div>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
              {booking.status}
            </span>
          </div>
        ))}
      </div>

      <button className="w-full mt-4 py-3 border border-[#3490c5] text-[#3490c5] rounded-lg hover:bg-blue-50 transition-colors font-medium">
        View All Bookings
      </button>
    </div>
  );
};

export default RecentBookings;

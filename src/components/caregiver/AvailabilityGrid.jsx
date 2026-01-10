export default function AvailabilityGrid({ availability }) {
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = ["Morning", "Afternoon", "Evening"];

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Weekly Availability
      </h2>

      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Day headers */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayLabels.map((day, index) => (
              <div
                key={index}
                className="text-center font-semibold text-gray-700 text-sm"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Time slot rows */}
          {timeSlots.map((slot, slotIndex) => (
            <div key={slotIndex} className="mb-3">
              <div className="text-xs text-gray-600 mb-1 font-medium">
                {slot}
              </div>
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, dayIndex) => {
                  const dayAvailability = availability[day];
                  const isAvailable =
                    dayAvailability.available &&
                    dayAvailability.timeSlots.includes(slot);

                  return (
                    <div
                      key={dayIndex}
                      className={`h-12 rounded-lg flex items-center justify-center text-xs font-medium transition-colors ${
                        isAvailable
                          ? "bg-emerald-100 text-emerald-700 border border-emerald-300"
                          : "bg-gray-100 text-gray-400 border border-gray-200"
                      }`}
                    >
                      {isAvailable ? "✓" : "—"}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-6 mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-emerald-100 border border-emerald-300 rounded"></div>
          <span className="text-sm text-gray-600">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
          <span className="text-sm text-gray-600">Not Available</span>
        </div>
      </div>
    </div>
  );
}

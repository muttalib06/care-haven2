"use client";

import { useState } from "react";
import { Calendar, MessageCircle, X, Check } from "lucide-react";

export default function BookingActions({ caregiver }) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState(false);

  // Booking form state
  const [bookingData, setBookingData] = useState({
    date: "",
    timeSlot: "",
    duration: "3",
    notes: "",
  });

  // Message form state
  const [messageData, setMessageData] = useState({
    subject: "",
    message: "",
  });

  // Handle booking submission
  const handleBooking = (e) => {
    e.preventDefault();

    // Here you would typically send data to your API
    console.log("Booking submitted:", {
      caregiverId: caregiver._id,
      caregiverName: caregiver.name,
      ...bookingData,
    });

    // Show success state
    setBookingSuccess(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setBookingSuccess(false);
      setShowBookingModal(false);
      setBookingData({
        date: "",
        timeSlot: "",
        duration: "3",
        notes: "",
      });
    }, 2000);
  };

  // Handle message submission
  const handleMessage = (e) => {
    e.preventDefault();

    // Here you would typically send data to your API
    console.log("Message sent:", {
      caregiverId: caregiver.id,
      caregiverName: caregiver.name,
      ...messageData,
    });

    // Show success state
    setMessageSuccess(true);

    // Reset after 2 seconds
    setTimeout(() => {
      setMessageSuccess(false);
      setShowMessageModal(false);
      setMessageData({
        subject: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      {/* Action Buttons */}
      <div className="space-y-3">
        <button
          onClick={() => setShowBookingModal(true)}
          className="w-full bg-[#3490c5] hover:bg-[#2d7ba8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <Calendar className="w-5 h-5" />
          Book Now
        </button>
        <button
          onClick={() => setShowMessageModal(true)}
          className="w-full border-2 border-[#3490c5] text-[#3490c5] hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          Send Message
        </button>
      </div>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed mt-15 inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-linear-to-r from-[#3490c5] to-[#5cb3e0] text-white p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Book {caregiver.name}</h3>
              <button
                onClick={() => setShowBookingModal(false)}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Success State */}
            {bookingSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Booking Request Sent!
                </h4>
                <p className="text-gray-600">
                  {caregiver.name} will respond within{" "}
                  {caregiver.statistics.responseTime} minutes.
                </p>
              </div>
            ) : (
              /* Booking Form */
              <form onSubmit={handleBooking} className="p-6 space-y-4">
                {/* Date Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingData.date}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, date: e.target.value })
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                  />
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Time Slot *
                  </label>
                  <select
                    required
                    value={bookingData.timeSlot}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        timeSlot: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                  >
                    <option value="">Choose a time slot</option>
                    <option value="Morning">Morning (8 AM - 12 PM)</option>
                    <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="Evening">Evening (5 PM - 9 PM)</option>
                  </select>
                </div>

                {/* Duration Selection */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Duration (hours) *
                  </label>
                  <select
                    required
                    value={bookingData.duration}
                    onChange={(e) =>
                      setBookingData({
                        ...bookingData,
                        duration: e.target.value,
                      })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                  >
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="5">5 hours</option>
                    <option value="6">6 hours</option>
                    <option value="8">8 hours</option>
                    <option value="10">10 hours</option>
                  </select>
                </div>

                {/* Price Calculation */}
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Hourly Rate:</span>
                    <span className="font-semibold text-gray-900">
                      ${caregiver.hourlyRate}/hour
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">
                      {bookingData.duration} hours
                    </span>
                  </div>
                  <div className="border-t border-blue-200 mt-2 pt-2 flex items-center justify-between">
                    <span className="font-semibold text-gray-900">Total:</span>
                    <span className="text-2xl font-bold text-[#3490c5]">
                      $
                      {caregiver.hourlyRate *
                        parseInt(bookingData.duration || 0)}
                    </span>
                  </div>
                </div>

                {/* Special Notes */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Notes (Optional)
                  </label>
                  <textarea
                    value={bookingData.notes}
                    onChange={(e) =>
                      setBookingData({ ...bookingData, notes: e.target.value })
                    }
                    rows="3"
                    placeholder="Any special requirements or information..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#3490c5] hover:bg-[#2d7ba8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Confirm Booking
                </button>

                <p className="text-xs text-gray-500 text-center">
                  This is a booking request. {caregiver.name} will confirm
                  availability.
                </p>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Message Modal */}
      {showMessageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-[#3490c5] to-[#5cb3e0] text-white p-6 flex items-center justify-between">
              <h3 className="text-xl font-bold">Message {caregiver.name}</h3>
              <button
                onClick={() => setShowMessageModal(false)}
                className="hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Success State */}
            {messageSuccess ? (
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Message Sent!
                </h4>
                <p className="text-gray-600">
                  {caregiver.name} typically responds within{" "}
                  {caregiver.statistics.responseTime} minutes.
                </p>
              </div>
            ) : (
              /* Message Form */
              <form onSubmit={handleMessage} className="p-6 space-y-4">
                {/* Caregiver Info */}
                <div className="bg-gray-50 rounded-lg p-4 flex items-center gap-3">
                  <img
                    src={caregiver.image}
                    alt={caregiver.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {caregiver.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      Responds in ~{caregiver.statistics.responseTime}m
                    </p>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={messageData.subject}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        subject: e.target.value,
                      })
                    }
                    placeholder="e.g., Inquiry about availability"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    value={messageData.message}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        message: e.target.value,
                      })
                    }
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#3490c5] hover:bg-[#2d7ba8] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

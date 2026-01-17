"use client";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit2,
  Camera,
  Save,
  X,
  Lock,
  Bell,
  Shield,
  Heart,
  LogOut,
  Settings,
  CreditCard,
  Clock,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
import { getSpecificUser } from "@/data-handling/getSpecificUser";

const ProfilePage = () => {
  const { user } = useAuth();
  // console.log(user?.email)
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [profileData, setProfileData] = useState({
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, Vancouver, BC",
    dateOfBirth: "1990-05-15",
    emergencyContact: "+1 (555) 987-6543",
    bio: "Caring parent looking for trusted caregivers for my family.",
  });

  const loggedInUser = getSpecificUser(user?.email);
  console.log(loggedInUser);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log("Profile updated:", profileData);
    setIsEditing(false);
    // Add Firebase update logic here
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data
  };

  const stats = [
    { label: "Total Bookings", value: "24", icon: Calendar },
    { label: "Active Care", value: "3", icon: Heart },
    { label: "Reviews Given", value: "18", icon: Star },
    { label: "Member Since", value: "2023", icon: Clock },
  ];

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
    <div className="min-h-screen bg-gray-50">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-[#3490c5] to-[#5cb3e0] h-32 lg:h-40"></div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Profile Image Section */}
              <div className="relative pt-6 pb-8 px-6 text-center">
                <div className="relative inline-block">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                      alt="Profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#3490c5] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2d7ba8] transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-gray-900">
                  {profileData.fullName}
                </h2>
                <p className="text-gray-600 text-sm mt-1">User</p>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-[#3490c5]">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="border-t border-gray-200">
                <button
                  onClick={() => setActiveTab("personal")}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
                    activeTab === "personal"
                      ? "bg-blue-50 text-[#3490c5] border-l-4 border-[#3490c5]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <User className="w-5 h-5" />
                  <span className="font-medium">Personal Info</span>
                </button>
                <button
                  onClick={() => setActiveTab("billing")}
                  className={`w-full flex items-center gap-3 px-6 py-4 text-left transition-colors ${
                    activeTab === "billing"
                      ? "bg-blue-50 text-[#3490c5] border-l-4 border-[#3490c5]"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <CreditCard className="w-5 h-5" />
                  <span className="font-medium">Billing</span>
                </button>
              </div>

              {/* Logout Button */}
              <div className="border-t border-gray-200 p-6">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
                  <LogOut className="w-5 h-5" />
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats Cards - Mobile */}
            <div className="grid grid-cols-2 lg:hidden gap-4">
              {stats.slice(2).map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-[#3490c5] mx-auto mb-2" />
                  <div className="text-xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Personal Information Tab */}
            {activeTab === "personal" && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <User className="w-6 h-6 text-[#3490c5]" />
                    Personal Information
                  </h3>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#3490c5] text-white rounded-lg hover:bg-[#2d7ba8] transition-colors text-sm font-medium"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                      >
                        <Save className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                      >
                        <X className="w-4 h-4" />
                        Cancel
                      </button>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          name="fullName"
                          value={profileData.fullName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-gray-900">
                          <User className="w-4 h-4 text-gray-400" />
                          {profileData.fullName}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          name="email"
                          value={profileData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-gray-900">
                          <Mail className="w-4 h-4 text-gray-400" />
                          {profileData.email}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          name="phone"
                          value={profileData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-gray-900">
                          <Phone className="w-4 h-4 text-gray-400" />
                          {profileData.phone}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Date of Birth
                      </label>
                      {isEditing ? (
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={profileData.dateOfBirth}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                        />
                      ) : (
                        <div className="flex items-center gap-2 text-gray-900">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          {new Date(
                            profileData.dateOfBirth
                          ).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    {isEditing ? (
                      <input
                        type="text"
                        name="address"
                        value={profileData.address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        {profileData.address}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emergency Contact
                    </label>
                    {isEditing ? (
                      <input
                        type="tel"
                        name="emergencyContact"
                        value={profileData.emergencyContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                      />
                    ) : (
                      <div className="flex items-center gap-2 text-gray-900">
                        <Phone className="w-4 h-4 text-gray-400" />
                        {profileData.emergencyContact}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bio
                    </label>
                    {isEditing ? (
                      <textarea
                        name="bio"
                        value={profileData.bio}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
                      />
                    ) : (
                      <div className="text-gray-900">{profileData.bio}</div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === "billing" && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-6">
                  <CreditCard className="w-6 h-6 text-[#3490c5]" />
                  Billing & Payments
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Payment Methods
                    </h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border-2 border-[#3490c5] bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white font-bold text-xs">
                            VISA
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">
                              •••• •••• •••• 4242
                            </p>
                            <p className="text-sm text-gray-600">
                              Expires 12/25
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-medium text-[#3490c5]">
                          Default
                        </span>
                      </div>
                      <button className="w-full py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-[#3490c5] hover:text-[#3490c5] transition-colors font-medium">
                        + Add New Payment Method
                      </button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Billing History
                    </h4>
                    <div className="space-y-2">
                      {[
                        {
                          date: "Jan 15, 2025",
                          amount: "$150.00",
                          status: "Paid",
                        },
                        {
                          date: "Dec 28, 2024",
                          amount: "$120.00",
                          status: "Paid",
                        },
                        {
                          date: "Dec 10, 2024",
                          amount: "$180.00",
                          status: "Paid",
                        },
                      ].map((transaction, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">
                              {transaction.date}
                            </p>
                            <p className="text-sm text-gray-600">
                              Care Services
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              {transaction.amount}
                            </p>
                            <span className="text-xs text-emerald-600 font-medium">
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Recent Bookings */}
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
                    <img
                      src={booking.image}
                      alt={booking.caregiver}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {booking.caregiver}
                      </h4>
                      <p className="text-sm text-gray-600">{booking.service}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {booking.date}
                      </p>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

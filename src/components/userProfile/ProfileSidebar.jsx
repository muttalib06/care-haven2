import { useAuth } from "@/context/AuthContext";
import {
  User,
  CreditCard,
  LogOut,
  Camera,
  Calendar,
  Heart,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ProfileSidebar = ({ loggedInUser, activeTab, setActiveTab }) => {
  const { logout } = useAuth();
  const router = useRouter();
  const stats = [
    { label: "Total Bookings", value: "24", icon: Calendar },
    { label: "Active Care", value: "3", icon: Heart },
  ];

  const handleLogout = async () => {
    await logout();
    Swal.fire({
      title: "Logout successfully",
      icon: "success",
      draggable: true,
    });
    router.push("/login")
  };

  return (
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
            {loggedInUser?.name}
          </h2>
          <p className="text-gray-600 text-sm mt-1">{loggedInUser?.role}</p>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-[#3490c5]">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
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
          <button onClick={() => handleLogout()} className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium">
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;

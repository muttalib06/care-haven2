"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { getSpecificUser } from "@/data-handling/getSpecificUser";
// import ProfileHeader from "./ProfileHeader";
// import ProfileSidebar from "./ProfileSidebar";
// import PersonalInfoTab from "./PersonalInfoTab";
// import BillingTab from "./BillingTab";
// import RecentBookings from "./RecentBookings";
// import StatsCards from "./StatsCards";
import BillingTab from "@/components/userProfile/BillingTab";
import PersonalInfoTab from "@/components/userProfile/PersonalInfoTab";
import ProfileHeader from "@/components/userProfile/ProfileHeader";
import ProfileSidebar from "@/components/userProfile/ProfileSidebar";
import RecentBookings from "@/components/userProfile/RecentBookings";
import StatsCards from "@/components/userProfile/StatsCards";
import { userUpdateByEmail } from "@/data-handling/user-update-by-email";
import Swal from "sweetalert2";

const ProfilePage = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      if (!user?.email) return;
      const result = await getSpecificUser(user?.email);
      setLoggedInUser(result?.data);
    }

    loadUser();
  }, [user?.email]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoggedInUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      const updatedInfo = {
        email: loggedInUser.email,
        name: loggedInUser.name,
        phone: loggedInUser.phone,
        dateOfBirth: loggedInUser.dateOfBirth,
        address: loggedInUser.address,
        emergencyContact: loggedInUser.emergencyContact,
        bio: loggedInUser.bio,
      };

      // axios patch request;

      const response =await userUpdateByEmail(user?.email, updatedInfo);
      if (response.status === 200) {
        Swal.fire({
          title: "Update successfully",
          icon: "success",
          draggable: true,
        });

        setLoggedInUser(loggedInUser);
        setIsEditing(false);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset to original data - you might want to store original data in a separate state
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProfileHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 lg:-mt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProfileSidebar
            loggedInUser={loggedInUser}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <div className="lg:col-span-2 space-y-6">
            <StatsCards />

            {activeTab === "personal" && (
              <PersonalInfoTab
                loggedInUser={loggedInUser}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                handleInputChange={handleInputChange}
                handleSave={handleSave}
                handleCancel={handleCancel}
              />
            )}

            {activeTab === "billing" && <BillingTab />}

            <RecentBookings />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

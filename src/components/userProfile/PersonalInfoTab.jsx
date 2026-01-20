import { User, Edit2, Save, X } from "lucide-react";
import InputField from "./InputField";
// import InputField from "../ui/InputField";

const PersonalInfoTab = ({
  loggedInUser,
  isEditing,
  setIsEditing,
  handleInputChange,
  handleSave,
  handleCancel,
}) => {
  return (
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
          <InputField
            label="Full Name"
            name="name"
            type="text"
            value={loggedInUser?.name}
            onChange={handleInputChange}
            isEditing={isEditing}
            iconType="user"
          />

          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={loggedInUser?.email}
            onChange={handleInputChange}
            isEditing={isEditing}
            iconType="mail"
          />

          <InputField
            label="Phone Number"
            name="phone"
            type="tel"
            value={loggedInUser?.phone}
            onChange={handleInputChange}
            isEditing={isEditing}
            iconType="phone"
          />

          <InputField
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            value={loggedInUser?.dateOfBirth}
            onChange={handleInputChange}
            isEditing={isEditing}
            iconType="calendar"
            displayValue={
              loggedInUser?.dateOfBirth
                ? new Date(loggedInUser.dateOfBirth).toLocaleDateString()
                : ""
            }
          />
        </div>

        <InputField
          label="Address"
          name="address"
          type="text"
          value={loggedInUser?.address}
          onChange={handleInputChange}
          isEditing={isEditing}
          iconType="mapPin"
        />

        <InputField
          label="Emergency Contact"
          name="emergencyContact"
          type="tel"
          value={loggedInUser?.emergencyContact}
          onChange={handleInputChange}
          isEditing={isEditing}
          iconType="phone"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bio
          </label>
          {isEditing ? (
            <textarea
              name="bio"
              value={loggedInUser?.bio || ""}
              onChange={handleInputChange}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent"
            />
          ) : (
            <div className="text-gray-900">{loggedInUser?.bio}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoTab;

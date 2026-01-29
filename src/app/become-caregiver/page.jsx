"use client";

import { saveCaregiver } from "@/data-handling/saveCaregiver";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function CaregiverApplicationForm() {
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    latitude: "",
    longitude: "",

    // Professional
    yearsOfExperience: "",
    hourlyRate: "",
    bio: "",
    aboutMe: "",

    // Preferences
    minHours: "",
    maxDistance: "",
    liveIn: false,
    overnight: false,

    // Bank Details
    accountHolderName: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    accountType: "checking",

    // Consent
    backgroundCheckConsent: false,
  });

  const [serviceTypes, setServiceTypes] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [education, setEducation] = useState([]);
  const [availability, setAvailability] = useState({
    monday: { available: false, timeSlots: [] },
    tuesday: { available: false, timeSlots: [] },
    wednesday: { available: false, timeSlots: [] },
    thursday: { available: false, timeSlots: [] },
    friday: { available: false, timeSlots: [] },
    saturday: { available: false, timeSlots: [] },
    sunday: { available: false, timeSlots: [] },
  });

  const [profileImage, setProfileImage] = useState(null);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const serviceTypeOptions = [
    "Elder Care",
    "Child Care",
    "Special Needs",
    "Companion Care",
    "Medical Care",
    "Dementia Care",
  ];

  const skillOptions = [
    "CPR Certified",
    "First Aid",
    "Meal Preparation",
    "Medication Management",
    "Physical Therapy Support",
    "Mobility Assistance",
    "Alzheimer's Care",
    "Autism Support",
    "Behavioral Therapy",
  ];

  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "Mandarin",
    "Cantonese",
    "Arabic",
    "Hindi",
  ];

  const timeSlotOptions = ["Morning", "Afternoon", "Evening", "Night"];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleMultiSelect = (option, setter, current) => {
    if (current.includes(option)) {
      setter(current.filter((item) => item !== option));
    } else {
      setter([...current, option]);
    }
  };

  const handleAvailabilityChange = (day, field, value) => {
    setAvailability((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }));
  };

  const handleTimeSlotToggle = (day, timeSlot) => {
    setAvailability((prev) => {
      const currentSlots = prev[day].timeSlots || [];
      const newSlots = currentSlots.includes(timeSlot)
        ? currentSlots.filter((slot) => slot !== timeSlot)
        : [...currentSlots, timeSlot];

      return {
        ...prev,
        [day]: {
          ...prev[day],
          timeSlots: newSlots,
        },
      };
    });
  };

  const addEducation = () => {
    setEducation([...education, { degree: "", institution: "", year: "" }]);
  };

  const updateEducation = (index, field, value) => {
    const updated = [...education];
    updated[index][field] = value;
    setEducation(updated);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Create FormData
      const data = new FormData();

      // Add all text fields
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      // Add arrays as JSON strings
      data.append("serviceTypes", JSON.stringify(serviceTypes));
      data.append("skills", JSON.stringify(skills));
      data.append("languages", JSON.stringify(languages));
      data.append("education", JSON.stringify(education));
      data.append("availability", JSON.stringify(availability));

      // Add profile image
      if (profileImage) {
        data.append("profileImage", profileImage);
      }

      // Add certificates
      certificates.forEach((cert, index) => {
        data.append("certificates", cert.file);
        // Optionally add certificate metadata
        if (cert.name) data.append(`cert_${index}_name`, cert.name);
        if (cert.issuer) data.append(`cert_${index}_issuer`, cert.issuer);
        if (cert.issuedDate)
          data.append(`cert_${index}_issuedDate`, cert.issuedDate);
        if (cert.expiryDate)
          data.append(`cert_${index}_expiryDate`, cert.expiryDate);
      });

      // Submit to API
      const result = await saveCaregiver(data);
      console.log(result);

      if (result && result.data.success) {
        setSuccess(true);
        Swal.fire({
          title: "Application submitted successfully",
          icon: "success",
        });
        router.push("/application-success");
      } else {
        throw new Error(result.error || "Submission failed");
      }
    } catch (err) {
      setError(err.message);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error("Submission error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-green-50 border border-green-200 rounded-lg">
        <h2 className="text-2xl font-bold text-green-800 mb-4">
          Application Submitted Successfully!
        </h2>
        <p className="text-green-700">
          Thank you for applying. We'll review your application and get back to
          you within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold mb-8">Become a Caregiver</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded">
          {error}
        </div>
      )}

      {/* Personal Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Personal Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="address"
          placeholder="Street Address"
          value={formData.address}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="state"
            placeholder="State/Province"
            value={formData.state}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="zipCode"
            placeholder="ZIP/Postal Code"
            value={formData.zipCode}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
        </div>

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
          className="border p-2 rounded w-full"
        />
      </section>

      {/* Profile Image */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Profile Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setProfileImage(e.target.files[0])}
          className="border p-2 rounded w-full"
        />
        {profileImage && (
          <p className="text-sm text-gray-600">Selected: {profileImage.name}</p>
        )}
      </section>

      {/* Professional Experience */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Professional Experience</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="yearsOfExperience"
            placeholder="Years of Experience *"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
            min="0"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="hourlyRate"
            placeholder="Hourly Rate (USD) *"
            value={formData.hourlyRate}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
            className="border p-2 rounded"
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Service Types *</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {serviceTypeOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={serviceTypes.includes(option)}
                  onChange={() =>
                    handleMultiSelect(option, setServiceTypes, serviceTypes)
                  }
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Skills</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {skillOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={skills.includes(option)}
                  onChange={() => handleMultiSelect(option, setSkills, skills)}
                />
                <span className="text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium mb-2">Languages</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {languageOptions.map((option) => (
              <label key={option} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={languages.includes(option)}
                  onChange={() =>
                    handleMultiSelect(option, setLanguages, languages)
                  }
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <textarea
          name="bio"
          placeholder="Short Bio (2-3 sentences)"
          value={formData.bio}
          onChange={handleInputChange}
          rows="3"
          className="border p-2 rounded w-full"
        />

        <textarea
          name="aboutMe"
          placeholder="About Me (Detailed description of your experience and approach)"
          value={formData.aboutMe}
          onChange={handleInputChange}
          rows="6"
          className="border p-2 rounded w-full"
        />
      </section>

      {/* Education */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Education</h2>

        {education.map((edu, index) => (
          <div key={index} className="border p-4 rounded space-y-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(index, "degree", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) =>
                  updateEducation(index, "institution", e.target.value)
                }
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Year"
                value={edu.year}
                onChange={(e) => updateEducation(index, "year", e.target.value)}
                className="border p-2 rounded"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}

        <button
          type="button"
          onClick={addEducation}
          className="bg-[#3490c5] text-white px-4 py-2 rounded hover:bg-[#3490c5]"
        >
          Add Education
        </button>
      </section>

      {/* Certificates */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Certificates</h2>
        <input
          type="file"
          accept="image/*,.pdf"
          multiple
          onChange={(e) => {
            const files = Array.from(e.target.files).map((file) => ({
              file,
              name: "",
              issuer: "",
              issuedDate: "",
              expiryDate: "",
            }));
            setCertificates(files);
          }}
          className="border p-2 rounded w-full"
        />
        {certificates.length > 0 && (
          <p className="text-sm text-gray-600">
            Selected {certificates.length} certificate(s)
          </p>
        )}
      </section>

      {/* Availability */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Availability</h2>

        {Object.keys(availability).map((day) => (
          <div key={day} className="border p-4 rounded">
            <div className="flex items-center space-x-4 mb-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={availability[day].available}
                  onChange={(e) =>
                    handleAvailabilityChange(day, "available", e.target.checked)
                  }
                />
                <span className="font-medium capitalize">{day}</span>
              </label>
            </div>

            {availability[day].available && (
              <div className="ml-6 flex flex-wrap gap-2">
                {timeSlotOptions.map((slot) => (
                  <label key={slot} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={availability[day].timeSlots.includes(slot)}
                      onChange={() => handleTimeSlotToggle(day, slot)}
                    />
                    <span className="text-sm">{slot}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Preferences */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Preferences</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="minHours"
            placeholder="Minimum Hours per Shift"
            value={formData.minHours}
            onChange={handleInputChange}
            min="0"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="maxDistance"
            placeholder="Maximum Distance (miles)"
            value={formData.maxDistance}
            onChange={handleInputChange}
            min="0"
            className="border p-2 rounded"
          />
        </div>

        <div className="space-y-2">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="liveIn"
              checked={formData.liveIn}
              onChange={handleInputChange}
            />
            <span>Available for Live-in Care</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="overnight"
              checked={formData.overnight}
              onChange={handleInputChange}
            />
            <span>Available for Overnight Care</span>
          </label>
        </div>
      </section>

      {/* Bank Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Bank Details</h2>
        <p className="text-sm text-gray-600">
          For payment purposes. All information is encrypted and secure.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="accountHolderName"
            placeholder="Account Holder Name"
            value={formData.accountHolderName}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="bankName"
            placeholder="Bank Name"
            value={formData.bankName}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="accountNumber"
            placeholder="Account Number"
            value={formData.accountNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="routingNumber"
            placeholder="Routing Number"
            value={formData.routingNumber}
            onChange={handleInputChange}
            className="border p-2 rounded"
          />
          <select
            name="accountType"
            value={formData.accountType}
            onChange={handleInputChange}
            className="border p-2 rounded"
          >
            <option value="checking">Checking</option>
            <option value="savings">Savings</option>
          </select>
        </div>
      </section>

      {/* Background Check Consent */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Background Check</h2>

        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            name="backgroundCheckConsent"
            checked={formData.backgroundCheckConsent}
            onChange={handleInputChange}
            required
            className="mt-1"
          />
          <span>
            I consent to a background check as required for caregiver
            verification. *
          </span>
        </label>
      </section>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#3490c5] text-white py-3 px-6 rounded-lg font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
}

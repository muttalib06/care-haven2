"use client";
import AboutSection from "@/components/caregiver/AboutSection";
import ProfileHero from "@/components/caregiver/ProfileHero";
import SkillsSection from "@/components/caregiver/SkillsSection";
import AvailabilityGrid from "@/components/caregiver/AvailabilityGrid";
import EducationSection from "@/components/caregiver/EducationSection";
import CertificatesSection from "@/components/caregiver/CertificatesSection";
import BookingCard from "@/components/caregiver/BookingCard";
import { use } from "react";
import useCaregiverDetails from "@/hooks/caregivers/useCaregiverDetails";
// import { useRouter } from "next/router";
// import { caregivers } from "../../data/caregivers";

export default function CaregiverProfilePage({ params }) {
  //   const router = useRouter();

  const resolvedParams = use(params);
  const id = resolvedParams.caregiverId;
  console.log(id);

  // Find caregiver by ID
  const { data: caregiver } =useCaregiverDetails(id);
  console.log(caregiver);

  // Handle loading state
  if (!id) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3490c5] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle not found
  if (!caregiver) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-6">Caregiver not found</p>
          <button
            onClick={() => router.push("/caregivers")}
            className="bg-[#3490c5] text-white px-6 py-3 rounded-lg hover:bg-[#2d7ba8] transition-colors"
          >
            Back to Caregivers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <ProfileHero caregiver={caregiver} />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content (70%) */}
          <div className="lg:col-span-2 space-y-6">
            <AboutSection aboutMe={caregiver.aboutMe} />
            <SkillsSection
              skills={caregiver.skills}
              serviceTypes={caregiver.serviceTypes}
            />
            <AvailabilityGrid availability={caregiver.availability} />
            <EducationSection education={caregiver.education} />
            <CertificatesSection certificates={caregiver.certificates} />
          </div>

          {/* Right Column - Booking Card (30%) */}
          <div className="lg:col-span-1">
            <BookingCard caregiver={caregiver} />
          </div>
        </div>
      </div>
    </div>
  );
}

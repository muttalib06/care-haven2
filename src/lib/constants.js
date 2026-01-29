/**
 * Application Constants
 */

import {
  User,
  Briefcase,
  Award,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";

export const STEPS = [
  {
    id: 0,
    title: "Personal Details",
    icon: User,
    description: "Tell us about yourself",
  },
  {
    id: 1,
    title: "Experience",
    icon: Briefcase,
    description: "Your professional background",
  },
  {
    id: 2,
    title: "Certifications",
    icon: Award,
    description: "Upload your credentials",
  },
  {
    id: 3,
    title: "Background Check",
    icon: Shield,
    description: "Verification consent",
  },
  {
    id: 4,
    title: "Availability",
    icon: Calendar,
    description: "Set your schedule",
  },
  {
    id: 5,
    title: "Payment Info",
    icon: CreditCard,
    description: "Bank account details",
  },
];

export const SERVICE_TYPE_OPTIONS = ["Child", "Elderly", "Special Needs"];

export const SKILL_OPTIONS = [
  "First Aid",
  "CPR",
  "Meal Preparation",
  "Medication Management",
  "Mobility Assistance",
  "Dementia Care",
  "Autism Support",
  "Behavioral Therapy",
  "Educational Activities",
  "Physical Therapy Support",
  "Companionship",
  "Light Housekeeping",
  "Transportation",
];

export const LANGUAGE_OPTIONS = [
  "English",
  "Spanish",
  "French",
  "Mandarin",
  "Cantonese",
  "Hindi",
  "Arabic",
  "Portuguese",
];

export const TIME_SLOTS = ["Morning", "Afternoon", "Evening", "Night"];

'use client';

import { useState } from 'react';
import { 
  User, 
  Briefcase, 
  Award, 
  Shield, 
  Calendar, 
  CreditCard,
  Upload,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Clock,
  FileText,
  Heart,
  Star,
  Users,
  Home
} from 'lucide-react';

export default function BecomeCaregiver() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    profileImage: null,
    
    // Professional Experience
    yearsOfExperience: '',
    serviceTypes: [],
    skills: [],
    languages: [],
    bio: '',
    aboutMe: '',
    hourlyRate: '',
    
    // Education
    education: [{ degree: '', institution: '', year: '' }],
    
    // Certifications
    certificates: [],
    certificateFiles: [],
    
    // Background Check
    backgroundCheckConsent: false,
    
    // Availability
    availability: {
      monday: { available: false, timeSlots: [] },
      tuesday: { available: false, timeSlots: [] },
      wednesday: { available: false, timeSlots: [] },
      thursday: { available: false, timeSlots: [] },
      friday: { available: false, timeSlots: [] },
      saturday: { available: false, timeSlots: [] },
      sunday: { available: false, timeSlots: [] }
    },
    minHours: '',
    maxDistance: '',
    liveIn: false,
    overnight: false,
    
    // Bank Details
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    routingNumber: '',
    accountType: 'checking'
  });

  const steps = [
    { id: 0, title: 'Personal Details', icon: User, description: 'Tell us about yourself' },
    { id: 1, title: 'Experience', icon: Briefcase, description: 'Your professional background' },
    { id: 2, title: 'Certifications', icon: Award, description: 'Upload your credentials' },
    { id: 3, title: 'Background Check', icon: Shield, description: 'Verification consent' },
    { id: 4, title: 'Availability', icon: Calendar, description: 'Set your schedule' },
    { id: 5, title: 'Payment Info', icon: CreditCard, description: 'Bank account details' }
  ];

  const serviceTypeOptions = ['Child', 'Elderly', 'Special Needs'];
  const skillOptions = [
    'First Aid', 'CPR', 'Meal Preparation', 'Medication Management',
    'Mobility Assistance', 'Dementia Care', 'Autism Support', 
    'Behavioral Therapy', 'Educational Activities', 'Physical Therapy Support',
    'Companionship', 'Light Housekeeping', 'Transportation'
  ];
  const languageOptions = ['English', 'Spanish', 'French', 'Mandarin', 'Cantonese', 'Hindi', 'Arabic', 'Portuguese'];
  const timeSlots = ['Morning', 'Afternoon', 'Evening', 'Night'];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleArrayToggle = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleAvailabilityToggle = (day) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          available: !prev.availability[day].available,
          timeSlots: !prev.availability[day].available ? [] : prev.availability[day].timeSlots
        }
      }
    }));
  };

  const handleTimeSlotToggle = (day, slot) => {
    setFormData(prev => ({
      ...prev,
      availability: {
        ...prev.availability,
        [day]: {
          ...prev.availability[day],
          timeSlots: prev.availability[day].timeSlots.includes(slot)
            ? prev.availability[day].timeSlots.filter(s => s !== slot)
            : [...prev.availability[day].timeSlots, slot]
        }
      }
    }));
  };

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === 'profile') {
      handleInputChange('profileImage', files[0]);
    } else if (type === 'certificates') {
      setFormData(prev => ({
        ...prev,
        certificateFiles: [...prev.certificateFiles, ...files]
      }));
    }
  };

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { degree: '', institution: '', year: '' }]
    }));
  };

  const updateEducation = (index, field, value) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const removeEducation = (index) => {
    setFormData(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
    alert('Application submitted successfully! We will review your application and get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#3490c5] to-[#2563eb] text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">Join Our Caring Community</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Become a Caregiver
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Make a meaningful difference in people's lives while building a flexible career you'll love
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Flexible Schedule</h3>
                <p className="text-blue-100 text-sm">Work when it suits you best</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Verified Families</h3>
                <p className="text-blue-100 text-sm">Safe, trusted connections</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="bg-white/20 w-12 h-12 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Competitive Pay</h3>
                <p className="text-blue-100 text-sm">Earn what you deserve</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between overflow-x-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === currentStep;
              const isCompleted = index < currentStep;
              
              return (
                <div key={step.id} className="flex items-center flex-shrink-0">
                  <div className="flex flex-col items-center">
                    <div className={`
                      w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
                      ${isActive ? 'bg-[#3490c5] text-white scale-110 shadow-lg' : 
                        isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'}
                    `}>
                      {isCompleted ? <CheckCircle2 className="w-6 h-6" /> : <Icon className="w-6 h-6" />}
                    </div>
                    <div className="mt-2 text-center min-w-[100px]">
                      <p className={`text-xs sm:text-sm font-medium ${isActive ? 'text-[#3490c5]' : 'text-gray-600'}`}>
                        {step.title}
                      </p>
                      <p className="text-xs text-gray-500 hidden sm:block">{step.description}</p>
                    </div>
                  </div>
                  
                  {index < steps.length - 1 && (
                    <div className={`
                      w-12 sm:w-24 h-1 mx-2 transition-all duration-300
                      ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}
                    `} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-8 sm:p-12">
            
            {/* Step 0: Personal Details */}
            {currentStep === 0 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Personal Information</h2>
                  <p className="text-gray-600">Let's start with your basic details</p>
                </div>

                {/* Profile Image Upload */}
                <div className="flex flex-col items-center">
                  <div className="relative group">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#3490c5] to-[#2563eb] flex items-center justify-center overflow-hidden">
                      {formData.profileImage ? (
                        <img 
                          src={URL.createObjectURL(formData.profileImage)} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <User className="w-16 h-16 text-white" />
                      )}
                    </div>
                    <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors border-2 border-gray-100">
                      <Upload className="w-5 h-5 text-[#3490c5]" />
                      <input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => handleFileUpload(e, 'profile')}
                        className="hidden" 
                      />
                    </label>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Upload your profile photo</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="john.doe@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" />
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="+1-555-0123"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="Vancouver"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">State/Province *</label>
                    <input
                      type="text"
                      required
                      value={formData.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="British Columbia"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">ZIP/Postal Code *</label>
                    <input
                      type="text"
                      required
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="V6B 1A1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Country *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="Canada"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 1: Professional Experience */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Professional Experience</h2>
                  <p className="text-gray-600">Share your expertise and background</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.yearsOfExperience}
                      onChange={(e) => handleInputChange('yearsOfExperience', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="5"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hourly Rate (USD) *
                    </label>
                    <input
                      type="number"
                      required
                      min="0"
                      value={formData.hourlyRate}
                      onChange={(e) => handleInputChange('hourlyRate', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="25"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Service Types * <span className="text-gray-500 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {serviceTypeOptions.map(type => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handleArrayToggle('serviceTypes', type)}
                        className={`
                          px-4 py-3 rounded-xl border-2 font-medium transition-all text-sm
                          ${formData.serviceTypes.includes(type)
                            ? 'border-[#3490c5] bg-[#3490c5] text-white shadow-md'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                        `}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Skills * <span className="text-gray-500 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {skillOptions.map(skill => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleArrayToggle('skills', skill)}
                        className={`
                          px-3 py-2 rounded-lg border font-medium transition-all text-xs sm:text-sm
                          ${formData.skills.includes(skill)
                            ? 'border-[#3490c5] bg-blue-50 text-[#3490c5]'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                        `}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Languages Spoken * <span className="text-gray-500 font-normal">(Select all that apply)</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {languageOptions.map(lang => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => handleArrayToggle('languages', lang)}
                        className={`
                          px-3 py-2 rounded-lg border font-medium transition-all text-sm
                          ${formData.languages.includes(lang)
                            ? 'border-[#3490c5] bg-blue-50 text-[#3490c5]'
                            : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                        `}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Professional Bio * <span className="text-gray-500 font-normal">(Brief summary, 2-3 sentences)</span>
                  </label>
                  <textarea
                    required
                    value={formData.bio}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="I am a dedicated caregiver with extensive experience in child care and special needs support..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    About Me * <span className="text-gray-500 font-normal">(Detailed description)</span>
                  </label>
                  <textarea
                    required
                    value={formData.aboutMe}
                    onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell families about your experience, approach to caregiving, what makes you special..."
                  />
                </div>

                {/* Education */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Education
                  </label>
                  {formData.education.map((edu, index) => (
                    <div key={index} className="mb-4 p-4 border border-gray-200 rounded-xl bg-gray-50">
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                          placeholder="Degree"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                        />
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                          placeholder="Institution"
                          className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                        />
                        <div className="flex gap-2">
                          <input
                            type="number"
                            value={edu.year}
                            onChange={(e) => updateEducation(index, 'year', e.target.value)}
                            placeholder="Year"
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none"
                          />
                          {formData.education.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeEducation(index)}
                              className="px-3 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addEducation}
                    className="mt-2 px-4 py-2 border-2 border-dashed border-[#3490c5] text-[#3490c5] rounded-xl hover:bg-blue-50 transition-colors font-medium"
                  >
                    + Add Education
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Certifications */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Certifications & Credentials</h2>
                  <p className="text-gray-600">Upload your professional certifications</p>
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-2xl p-8 text-center hover:border-[#3490c5] transition-colors">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-[#3490c5]" />
                  </div>
                  <label className="cursor-pointer">
                    <span className="text-[#3490c5] font-semibold hover:underline">Click to upload</span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input 
                      type="file" 
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileUpload(e, 'certificates')}
                      className="hidden" 
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG up to 10MB each</p>
                </div>

                {formData.certificateFiles.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Uploaded Files:</h3>
                    {formData.certificateFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#3490c5] rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              certificateFiles: prev.certificateFiles.filter((_, i) => i !== index)
                            }));
                          }}
                          className="text-red-600 hover:text-red-800 font-medium"
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3490c5]" />
                    Recommended Certifications
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3490c5] mt-0.5 flex-shrink-0" />
                      CPR & First Aid Certification
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3490c5] mt-0.5 flex-shrink-0" />
                      Background Check Clearance
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3490c5] mt-0.5 flex-shrink-0" />
                      Specialized Care Certifications (if applicable)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#3490c5] mt-0.5 flex-shrink-0" />
                      Relevant Degrees or Diplomas
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 3: Background Check */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Background Verification</h2>
                  <p className="text-gray-600">Help us ensure safety for all families</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#3490c5] rounded-full flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">Why We Need This</h3>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        CareHaven is committed to creating a safe, trusted platform for families and caregivers. 
                        A comprehensive background check helps us verify your identity and ensure the safety of 
                        the families you'll be working with.
                      </p>
                      <div className="bg-white rounded-xl p-4 space-y-3">
                        <h4 className="font-semibold text-gray-900">What We'll Check:</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#3490c5] rounded-full"></div>
                            Criminal record check
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#3490c5] rounded-full"></div>
                            Identity verification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#3490c5] rounded-full"></div>
                            Reference verification
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#3490c5] rounded-full"></div>
                            Sex offender registry check
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-2 border-gray-200 rounded-2xl p-6">
                  <label className="flex items-start gap-4 cursor-pointer group">
                    <div className="relative flex items-center justify-center mt-1">
                      <input
                        type="checkbox"
                        checked={formData.backgroundCheckConsent}
                        onChange={(e) => handleInputChange('backgroundCheckConsent', e.target.checked)}
                        className="w-6 h-6 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5] cursor-pointer"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 mb-2 group-hover:text-[#3490c5] transition-colors">
                        I consent to a background check *
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        I authorize CareHaven and its designated agents to conduct a comprehensive background 
                        check, including but not limited to criminal records, identity verification, and reference 
                        checks. I understand that this information will be used solely for the purpose of ensuring 
                        platform safety and will be handled in accordance with applicable privacy laws.
                      </p>
                    </div>
                  </label>
                </div>

                {!formData.backgroundCheckConsent && (
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                    <div className="text-amber-600 mt-0.5">⚠️</div>
                    <p className="text-sm text-amber-800">
                      Background check consent is required to proceed with your application and ensure the safety of our community.
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Availability */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Availability</h2>
                  <p className="text-gray-600">Set your working schedule and preferences</p>
                </div>

                <div className="space-y-4">
                  {Object.keys(formData.availability).map(day => (
                    <div key={day} className="border border-gray-200 rounded-xl p-5 hover:border-[#3490c5] transition-colors">
                      <div className="flex items-center justify-between mb-4">
                        <label className="flex items-center gap-3 cursor-pointer flex-1">
                          <input
                            type="checkbox"
                            checked={formData.availability[day].available}
                            onChange={() => handleAvailabilityToggle(day)}
                            className="w-5 h-5 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5]"
                          />
                          <span className="font-semibold text-gray-900 capitalize">{day}</span>
                        </label>
                        {formData.availability[day].available && (
                          <span className="text-sm text-[#3490c5] font-medium">
                            {formData.availability[day].timeSlots.length} slot(s) selected
                          </span>
                        )}
                      </div>
                      
                      {formData.availability[day].available && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 ml-8">
                          {timeSlots.map(slot => (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => handleTimeSlotToggle(day, slot)}
                              className={`
                                px-3 py-2 rounded-lg border font-medium transition-all text-sm
                                ${formData.availability[day].timeSlots.includes(slot)
                                  ? 'border-[#3490c5] bg-[#3490c5] text-white'
                                  : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                              `}
                            >
                              <Clock className="w-3 h-3 inline mr-1" />
                              {slot}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Minimum Hours per Booking *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.minHours}
                      onChange={(e) => handleInputChange('minHours', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="3"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Maximum Travel Distance (miles) *
                    </label>
                    <input
                      type="number"
                      required
                      min="1"
                      value={formData.maxDistance}
                      onChange={(e) => handleInputChange('maxDistance', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="20"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-[#3490c5] transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.liveIn}
                      onChange={(e) => handleInputChange('liveIn', e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5]"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Live-in Care Available</p>
                      <p className="text-sm text-gray-600">I'm available for live-in caregiving positions</p>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:border-[#3490c5] transition-colors">
                    <input
                      type="checkbox"
                      checked={formData.overnight}
                      onChange={(e) => handleInputChange('overnight', e.target.checked)}
                      className="w-5 h-5 rounded border-gray-300 text-[#3490c5] focus:ring-[#3490c5]"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">Overnight Care Available</p>
                      <p className="text-sm text-gray-600">I'm available for overnight shifts</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {/* Step 5: Bank Details */}
            {currentStep === 5 && (
              <div className="space-y-8 animate-fadeIn">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Payment Information</h2>
                  <p className="text-gray-600">Secure bank details for receiving payments</p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-green-900 mb-1">Your Information is Secure</p>
                    <p className="text-sm text-green-800">
                      All payment information is encrypted and securely stored. We use bank-level security to protect your data.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Holder Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.accountHolderName}
                    onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bank Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.bankName}
                    onChange={(e) => handleInputChange('bankName', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                    placeholder="Bank of America"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Type *
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => handleInputChange('accountType', 'checking')}
                      className={`
                        px-4 py-3 rounded-xl border-2 font-medium transition-all
                        ${formData.accountType === 'checking'
                          ? 'border-[#3490c5] bg-[#3490c5] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                      `}
                    >
                      Checking Account
                    </button>
                    <button
                      type="button"
                      onClick={() => handleInputChange('accountType', 'savings')}
                      className={`
                        px-4 py-3 rounded-xl border-2 font-medium transition-all
                        ${formData.accountType === 'savings'
                          ? 'border-[#3490c5] bg-[#3490c5] text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-[#3490c5]'}
                      `}
                    >
                      Savings Account
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Account Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="123456789"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Routing Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.routingNumber}
                      onChange={(e) => handleInputChange('routingNumber', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3490c5] focus:border-transparent outline-none transition-all"
                      placeholder="011000015"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-[#3490c5]" />
                    Payment Schedule
                  </h3>
                  <p className="text-sm text-gray-700">
                    Payments are processed weekly via direct deposit. You'll receive your earnings every Friday 
                    for work completed in the previous week. It typically takes 2-3 business days for funds to 
                    appear in your account.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="bg-gray-50 px-8 sm:px-12 py-6 border-t border-gray-200 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`
                flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
                ${currentStep === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-[#3490c5] hover:text-[#3490c5]'}
              `}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden sm:inline">Previous</span>
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={nextStep}
                className="flex items-center gap-2 px-6 py-3 bg-[#3490c5] text-white rounded-xl font-semibold hover:bg-[#2980b5] transition-all shadow-lg hover:shadow-xl"
              >
                <span className="hidden sm:inline">Next Step</span>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!formData.backgroundCheckConsent}
                className={`
                  flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all shadow-lg
                  ${formData.backgroundCheckConsent
                    ? 'bg-green-600 text-white hover:bg-green-700 hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
                `}
              >
                <CheckCircle2 className="w-5 h-5" />
                Submit Application
              </button>
            )}
          </div>
        </form>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-2xl shadow-md p-6 border border-gray-100">
          <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#3490c5]" />
            Need Help?
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Our team is here to support you through the application process.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="mailto:support@carehaven.com"
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#3490c5] rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
            >
              <Mail className="w-4 h-4" />
              support@carehaven.com
            </a>
            <a
              href="tel:+1-800-CARE-NOW"
              className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-[#3490c5] rounded-lg hover:bg-blue-100 transition-colors font-medium text-sm"
            >
              <Phone className="w-4 h-4" />
              1-800-CARE-NOW
            </a>
          </div>
        </div>
      </div>


      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
    </div>
  );
}

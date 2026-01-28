// utils/formValidation.js
// Validation utilities for the caregiver application form

/**
 * Validates email format
 */
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validates phone number (supports multiple formats)
 */
export const validatePhone = (phone) => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Validates that user is at least 18 years old
 */
export const validateAge = (dateOfBirth) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    return age - 1 >= 18;
  }
  
  return age >= 18;
};

/**
 * Validates ZIP/Postal code
 */
export const validateZipCode = (zipCode, country = 'US') => {
  const patterns = {
    US: /^\d{5}(-\d{4})?$/,
    CA: /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/,
    UK: /^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i,
  };
  
  const pattern = patterns[country] || patterns.US;
  return pattern.test(zipCode);
};

/**
 * Validates file type for uploads
 */
export const validateFileType = (file, allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'application/pdf']) => {
  return allowedTypes.includes(file.type);
};

/**
 * Validates file size (default max 10MB)
 */
export const validateFileSize = (file, maxSizeMB = 10) => {
  const maxSizeBytes = maxSizeMB * 1024 * 1024;
  return file.size <= maxSizeBytes;
};

/**
 * Validates bank account number (basic check)
 */
export const validateAccountNumber = (accountNumber) => {
  // Remove spaces and dashes
  const cleaned = accountNumber.replace(/[\s-]/g, '');
  // Check if it's numeric and between 8-17 digits (typical range)
  return /^\d{8,17}$/.test(cleaned);
};

/**
 * Validates routing number (US format)
 */
export const validateRoutingNumber = (routingNumber) => {
  // Must be exactly 9 digits
  const cleaned = routingNumber.replace(/[\s-]/g, '');
  return /^\d{9}$/.test(cleaned);
};

/**
 * Validates specific form steps
 */
export const validateStep = (step, formData) => {
  const errors = [];
  
  switch (step) {
    case 0: // Personal Details
      if (!formData.firstName?.trim()) errors.push('First name is required');
      if (!formData.lastName?.trim()) errors.push('Last name is required');
      if (!formData.email?.trim()) errors.push('Email is required');
      else if (!validateEmail(formData.email)) errors.push('Invalid email format');
      if (!formData.phone?.trim()) errors.push('Phone number is required');
      else if (!validatePhone(formData.phone)) errors.push('Invalid phone number format');
      if (!formData.dateOfBirth) errors.push('Date of birth is required');
      else if (!validateAge(formData.dateOfBirth)) errors.push('You must be at least 18 years old');
      if (!formData.address?.trim()) errors.push('Address is required');
      if (!formData.city?.trim()) errors.push('City is required');
      if (!formData.state?.trim()) errors.push('State/Province is required');
      if (!formData.zipCode?.trim()) errors.push('ZIP/Postal code is required');
      if (!formData.country?.trim()) errors.push('Country is required');
      break;
      
    case 1: // Professional Experience
      if (!formData.yearsOfExperience || formData.yearsOfExperience < 0) {
        errors.push('Years of experience is required');
      }
      if (!formData.serviceTypes || formData.serviceTypes.length === 0) {
        errors.push('At least one service type is required');
      }
      if (!formData.skills || formData.skills.length === 0) {
        errors.push('At least one skill is required');
      }
      if (!formData.languages || formData.languages.length === 0) {
        errors.push('At least one language is required');
      }
      if (!formData.bio?.trim() || formData.bio.length < 50) {
        errors.push('Bio must be at least 50 characters');
      }
      if (!formData.aboutMe?.trim() || formData.aboutMe.length < 100) {
        errors.push('About Me must be at least 100 characters');
      }
      if (!formData.hourlyRate || formData.hourlyRate <= 0) {
        errors.push('Valid hourly rate is required');
      }
      // Validate education entries
      if (formData.education && formData.education.length > 0) {
        formData.education.forEach((edu, index) => {
          if (edu.degree || edu.institution || edu.year) {
            if (!edu.degree) errors.push(`Education ${index + 1}: Degree is required`);
            if (!edu.institution) errors.push(`Education ${index + 1}: Institution is required`);
            if (!edu.year) errors.push(`Education ${index + 1}: Year is required`);
          }
        });
      }
      break;
      
    case 2: // Certifications
      // Optional but recommended
      if (!formData.certificateFiles || formData.certificateFiles.length === 0) {
        // Just a warning, not an error
        console.warn('No certificates uploaded');
      } else {
        // Validate each file
        formData.certificateFiles.forEach((file, index) => {
          if (!validateFileType(file)) {
            errors.push(`Certificate ${index + 1}: Invalid file type`);
          }
          if (!validateFileSize(file)) {
            errors.push(`Certificate ${index + 1}: File too large (max 10MB)`);
          }
        });
      }
      break;
      
    case 3: // Background Check
      if (!formData.backgroundCheckConsent) {
        errors.push('Background check consent is required to proceed');
      }
      break;
      
    case 4: // Availability
      const hasAvailability = Object.values(formData.availability || {}).some(
        day => day.available && day.timeSlots.length > 0
      );
      if (!hasAvailability) {
        errors.push('Please select at least one day and time slot');
      }
      if (!formData.minHours || formData.minHours < 1) {
        errors.push('Minimum hours per booking is required');
      }
      if (!formData.maxDistance || formData.maxDistance < 1) {
        errors.push('Maximum travel distance is required');
      }
      break;
      
    case 5: // Payment Info
      if (!formData.accountHolderName?.trim()) {
        errors.push('Account holder name is required');
      }
      if (!formData.bankName?.trim()) {
        errors.push('Bank name is required');
      }
      if (!formData.accountNumber?.trim()) {
        errors.push('Account number is required');
      } else if (!validateAccountNumber(formData.accountNumber)) {
        errors.push('Invalid account number format');
      }
      if (!formData.routingNumber?.trim()) {
        errors.push('Routing number is required');
      } else if (!validateRoutingNumber(formData.routingNumber)) {
        errors.push('Invalid routing number (must be 9 digits)');
      }
      if (!formData.accountType) {
        errors.push('Account type is required');
      }
      break;
      
    default:
      break;
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Validates entire form before final submission
 */
export const validateCompleteForm = (formData) => {
  const allErrors = [];
  
  for (let step = 0; step <= 5; step++) {
    const { isValid, errors } = validateStep(step, formData);
    if (!isValid) {
      allErrors.push({
        step,
        errors
      });
    }
  }
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors
  };
};

/**
 * Format error messages for display
 */
export const formatErrors = (errors) => {
  if (!Array.isArray(errors) || errors.length === 0) {
    return '';
  }
  
  return errors.map(err => `• ${err}`).join('\n');
};

/**
 * Sanitize string input
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .slice(0, 1000); // Limit length
};

/**
 * Format phone number for display
 */
export const formatPhoneNumber = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11 && cleaned[0] === '1') {
    return `+1 (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phone;
};

/**
 * Check password strength (if you add password field)
 */
export const checkPasswordStrength = (password) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  
  const strength = {
    length: password.length >= minLength,
    hasUpperCase,
    hasLowerCase,
    hasNumbers,
    hasSpecialChar,
  };
  
  const score = Object.values(strength).filter(Boolean).length;
  
  return {
    ...strength,
    score,
    isStrong: score >= 4,
    label: score <= 2 ? 'Weak' : score === 3 ? 'Medium' : 'Strong'
  };
};

export default {
  validateEmail,
  validatePhone,
  validateAge,
  validateZipCode,
  validateFileType,
  validateFileSize,
  validateAccountNumber,
  validateRoutingNumber,
  validateStep,
  validateCompleteForm,
  formatErrors,
  sanitizeInput,
  formatPhoneNumber,
  checkPasswordStrength
};

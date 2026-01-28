

import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // Extract all form fields
    const applicationData = {
      // Personal Details
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      dateOfBirth: formData.get('dateOfBirth'),
      address: formData.get('address'),
      city: formData.get('city'),
      state: formData.get('state'),
      zipCode: formData.get('zipCode'),
      country: formData.get('country'),
      
      // Professional Experience
      yearsOfExperience: parseInt(formData.get('yearsOfExperience')),
      serviceTypes: JSON.parse(formData.get('serviceTypes')),
      skills: JSON.parse(formData.get('skills')),
      languages: JSON.parse(formData.get('languages')),
      bio: formData.get('bio'),
      aboutMe: formData.get('aboutMe'),
      hourlyRate: parseFloat(formData.get('hourlyRate')),
      education: JSON.parse(formData.get('education')),
      
      // Availability
      availability: JSON.parse(formData.get('availability')),
      minHours: parseInt(formData.get('minHours')),
      maxDistance: parseInt(formData.get('maxDistance')),
      liveIn: formData.get('liveIn') === 'true',
      overnight: formData.get('overnight') === 'true',
      
      // Background Check
      backgroundCheckConsent: formData.get('backgroundCheckConsent') === 'true',
      
      // Bank Details (encrypt these in production!)
      accountHolderName: formData.get('accountHolderName'),
      bankName: formData.get('bankName'),
      accountNumber: formData.get('accountNumber'), // Should be encrypted
      routingNumber: formData.get('routingNumber'), // Should be encrypted
      accountType: formData.get('accountType'),
      
      // Metadata
      appliedDate: new Date().toISOString(),
      status: 'Pending Review',
      verified: false,
    };
    
    // Validation
    if (!applicationData.backgroundCheckConsent) {
      return NextResponse.json(
        { error: 'Background check consent is required' },
        { status: 400 }
      );
    }
    
    if (!applicationData.email || !applicationData.firstName || !applicationData.lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Handle profile image upload
    const profileImage = formData.get('profileImage');
    let profileImagePath = null;
    
    if (profileImage && profileImage.size > 0) {
      const bytes = await profileImage.arrayBuffer();
      const buffer = Buffer.from(bytes);
      
      // Generate unique filename
      const fileName = `profile_${Date.now()}_${profileImage.name}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profiles');
      profileImagePath = `/uploads/profiles/${fileName}`;
      
      // Save file (ensure directory exists first)
      await writeFile(path.join(uploadDir, fileName), buffer);
    }
    
    // Handle certificate uploads
    const certificates = formData.getAll('certificates');
    const certificatePaths = [];
    
    for (const cert of certificates) {
      if (cert && cert.size > 0) {
        const bytes = await cert.arrayBuffer();
        const buffer = Buffer.from(bytes);
        
        const fileName = `cert_${Date.now()}_${cert.name}`;
        const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'certificates');
        const certPath = `/uploads/certificates/${fileName}`;
        
        await writeFile(path.join(uploadDir, fileName), buffer);
        certificatePaths.push({
          name: cert.name,
          path: certPath,
          uploadedAt: new Date().toISOString()
        });
      }
    }
    
    // Add file paths to application data
    applicationData.profileImage = profileImagePath;
    applicationData.certificateFiles = certificatePaths;
    
    // In production, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Trigger background check process
    // 4. Notify admin team
    
    // Example database save (pseudo-code):
    // const caregiver = await db.caregivers.create({
    //   data: applicationData
    // });
    
    // Example email notification (pseudo-code):
    // await sendEmail({
    //   to: applicationData.email,
    //   subject: 'Application Received - CareHaven',
    //   template: 'application-received',
    //   data: applicationData
    // });
    
    // For now, return success
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      data: {
        applicantName: `${applicationData.firstName} ${applicationData.lastName}`,
        email: applicationData.email,
        applicationId: `APP-${Date.now()}`, // Generate proper ID in production
      }
    }, { status: 201 });
    
  } catch (error) {
    console.error('Application submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve application status
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const applicationId = searchParams.get('id');
  
  if (!applicationId) {
    return NextResponse.json(
      { error: 'Application ID required' },
      { status: 400 }
    );
  }
  
  // In production, query database:
  // const application = await db.caregivers.findUnique({
  //   where: { id: applicationId }
  // });
  
  // Example response
  return NextResponse.json({
    applicationId: applicationId,
    status: 'Pending Review',
    submittedAt: new Date().toISOString(),
    message: 'Your application is under review. We will contact you within 3-5 business days.'
  });
}

import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";
import { getCollection } from "@/lib/db";

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Extract all form fields
    const applicationData = {
      // Personal Details
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      dateOfBirth: formData.get("dateOfBirth"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipCode: formData.get("zipCode"),
      country: formData.get("country"),

      // Professional Experience
      yearsOfExperience: parseInt(formData.get("yearsOfExperience") || "0"),
      serviceTypes: JSON.parse(formData.get("serviceTypes") || "[]"),
      skills: JSON.parse(formData.get("skills") || "[]"),
      languages: JSON.parse(formData.get("languages") || "[]"),
      bio: formData.get("bio") || "",
      aboutMe: formData.get("aboutMe") || "",
      hourlyRate: parseFloat(formData.get("hourlyRate") || "0"),
      education: JSON.parse(formData.get("education") || "[]"),

      // Availability
      availability: JSON.parse(formData.get("availability") || "{}"),
      minHours: parseInt(formData.get("minHours") || "0"),
      maxDistance: parseInt(formData.get("maxDistance") || "0"),
      liveIn: formData.get("liveIn") === "true",
      overnight: formData.get("overnight") === "true",

      // Background Check
      backgroundCheckConsent: formData.get("backgroundCheckConsent") === "true",

      // Bank Details (encrypt these in production!)
      accountHolderName: formData.get("accountHolderName") || "",
      bankName: formData.get("bankName") || "",
      accountNumber: formData.get("accountNumber") || "", // Should be encrypted
      routingNumber: formData.get("routingNumber") || "", // Should be encrypted
      accountType: formData.get("accountType") || "checking",

      // Metadata
      appliedDate: new Date().toISOString(),
      status: "Pending Review",
      verified: false,
    };

    // Validation
    if (!applicationData.backgroundCheckConsent) {
      return NextResponse.json(
        { error: "Background check consent is required" },
        { status: 400 },
      );
    }

    if (
      !applicationData.email ||
      !applicationData.firstName ||
      !applicationData.lastName
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(applicationData.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Handle profile image upload
    const profileImage = formData.get("profileImage");
    let profileImagePath = null;

    if (profileImage && profileImage.size > 0) {
      try {
        const bytes = await profileImage.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const timestamp = Date.now();
        const randomString = Math.random().toString(36).substring(7);
        const fileExtension = path.extname(profileImage.name);
        const fileName = `profile_${timestamp}_${randomString}${fileExtension}`;

        const uploadDir = path.join(
          process.cwd(),
          "public",
          "uploads",
          "profiles",
        );

        // Create directory if it doesn't exist
        await mkdir(uploadDir, { recursive: true });

        profileImagePath = `/uploads/profiles/${fileName}`;

        // Save file
        await writeFile(path.join(uploadDir, fileName), buffer);

        console.log(`Profile image saved: ${profileImagePath}`);
      } catch (fileError) {
        console.error("Profile image upload error:", fileError);
        return NextResponse.json(
          {
            error: "Failed to upload profile image",
            details: fileError.message,
          },
          { status: 500 },
        );
      }
    }

    // Handle certificate uploads
    const certificates = formData.getAll("certificates");
    const certificatePaths = [];

    if (certificates && certificates.length > 0) {
      for (const cert of certificates) {
        if (cert && cert.size > 0) {
          try {
            const bytes = await cert.arrayBuffer();
            const buffer = Buffer.from(bytes);

            const timestamp = Date.now();
            const randomString = Math.random().toString(36).substring(7);
            const fileExtension = path.extname(cert.name);
            const fileName = `cert_${timestamp}_${randomString}${fileExtension}`;

            const uploadDir = path.join(
              process.cwd(),
              "public",
              "uploads",
              "certificates",
            );

            // Create directory if it doesn't exist
            await mkdir(uploadDir, { recursive: true });

            const certPath = `/uploads/certificates/${fileName}`;

            // Save file
            await writeFile(path.join(uploadDir, fileName), buffer);

            certificatePaths.push({
              name: cert.name,
              path: certPath,
              uploadedAt: new Date().toISOString(),
            });

            console.log(`Certificate saved: ${certPath}`);
          } catch (certError) {
            console.error("Certificate upload error:", certError);
            // Continue with other certificates even if one fails
          }
        }
      }
    }

    // Add file paths to application data
    applicationData.profileImage = profileImagePath;
    applicationData.certificateFiles = certificatePaths;

    // Database operations
    let caregiverCollection;
    try {
      caregiverCollection = await getCollection("caregivers");

      if (!caregiverCollection) {
        throw new Error("Failed to connect to database");
      }
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed", details: dbError.message },
        { status: 500 },
      );
    }

    // Check for duplicate email
    try {
      const existingCaregiver = await caregiverCollection.findOne({
        email: applicationData.email,
      });

      if (existingCaregiver) {
        return NextResponse.json(
          { error: "A caregiver with this email already exists" },
          { status: 400 },
        );
      }
    } catch (findError) {
      console.error("Error checking for existing caregiver:", findError);
      return NextResponse.json(
        {
          error: "Error checking email availability",
          details: findError.message,
        },
        { status: 500 },
      );
    }

    // Insert data into database
    let result;
    try {
      result = await caregiverCollection.insertOne(applicationData);

      if (!result.insertedId) {
        throw new Error("Failed to insert caregiver data");
      }

      console.log(`Caregiver application saved with ID: ${result.insertedId}`);
    } catch (insertError) {
      console.error("Error inserting caregiver:", insertError);
      return NextResponse.json(
        { error: "Failed to save application", details: insertError.message },
        { status: 500 },
      );
    }

    // Generate application ID
    const applicationId = `APP-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`;

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          id: result.insertedId.toString(),
          applicationId: applicationId,
          applicantName: `${applicationData.firstName} ${applicationData.lastName}`,
          email: applicationData.email,
          status: applicationData.status,
          appliedDate: applicationData.appliedDate,
        },
      },
      { status: 201 },
    );
  } catch (error) {
    // Global error handler
    console.error("Application submission error:", {
      message: error.message,
      stack: error.stack,
      name: error.name,
    });

    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
        details:
          process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 },
    );
  }
}

// GET method to retrieve application status
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const applicationId = searchParams.get("id");
    const email = searchParams.get("email");

    if (!applicationId && !email) {
      return NextResponse.json(
        { error: "Application ID or email is required" },
        { status: 400 },
      );
    }

    // Get database collection
    let caregiverCollection;
    try {
      caregiverCollection = await getCollection("caregivers");

      if (!caregiverCollection) {
        throw new Error("Failed to connect to database");
      }
    } catch (dbError) {
      console.error("Database connection error:", dbError);
      return NextResponse.json(
        { error: "Database connection failed" },
        { status: 500 },
      );
    }

    // Build query
    const query = {};
    if (applicationId) {
      // If searching by MongoDB ID
      try {
        const { ObjectId } = require("mongodb");
        query._id = new ObjectId(applicationId);
      } catch {
        return NextResponse.json(
          { error: "Invalid application ID format" },
          { status: 400 },
        );
      }
    } else if (email) {
      query.email = email;
    }

    // Find application
    const application = await caregiverCollection.findOne(query);

    if (!application) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    // Return application data (exclude sensitive information)
    return NextResponse.json({
      success: true,
      data: {
        id: application._id.toString(),
        applicantName: `${application.firstName} ${application.lastName}`,
        email: application.email,
        status: application.status,
        verified: application.verified,
        appliedDate: application.appliedDate,
        serviceTypes: application.serviceTypes,
        yearsOfExperience: application.yearsOfExperience,
        // Don't return bank details or other sensitive info
      },
    });
  } catch (error) {
    console.error("GET application error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 },
    );
  }
}

// Optional: DELETE method for testing (remove in production)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const caregiverCollection = await getCollection("caregivers");
    const result = await caregiverCollection.deleteOne({ email });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Application not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Application deleted successfully",
    });
  } catch (error) {
    console.error("DELETE application error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 },
    );
  }
}

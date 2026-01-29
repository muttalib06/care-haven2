import { NextResponse } from "next/server";
import { getCollection } from "@/lib/db";

// ImageBB Upload Function
async function uploadToImageBB(file) {
  try {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.IMAGEBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await response.json();

    if (data.success) {
      return data.data.url; // Returns the direct image URL
    } else {
      throw new Error("ImageBB upload failed");
    }
  } catch (error) {
    console.error("ImageBB upload error:", error);
    throw error;
  }
}

export async function POST(request) {
  try {
    const formData = await request.formData();

    // Handle profile image upload to ImageBB
    let profileImageUrl = null;
    const profileImage = formData.get("profileImage");

    if (profileImage && profileImage.size > 0) {
      try {
        profileImageUrl = await uploadToImageBB(profileImage);
        console.log(`Profile image uploaded to ImageBB: ${profileImageUrl}`);
      } catch (error) {
        return NextResponse.json(
          { error: "Failed to upload profile image", details: error.message },
          { status: 500 },
        );
      }
    }

    // Handle certificate uploads to ImageBB
    const certificates = formData.getAll("certificates");
    const certificateData = [];

    if (certificates && certificates.length > 0) {
      for (const cert of certificates) {
        if (cert && cert.size > 0) {
          try {
            const certUrl = await uploadToImageBB(cert);

            // Extract certificate metadata from form
            const certName = formData.get(
              `cert_${certificates.indexOf(cert)}_name`,
            );
            const certIssuer = formData.get(
              `cert_${certificates.indexOf(cert)}_issuer`,
            );
            const certIssuedDate = formData.get(
              `cert_${certificates.indexOf(cert)}_issuedDate`,
            );
            const certExpiryDate = formData.get(
              `cert_${certificates.indexOf(cert)}_expiryDate`,
            );

            certificateData.push({
              name: certName || cert.name,
              issuedBy: certIssuer || "",
              issuedDate:
                certIssuedDate || new Date().toISOString().split("T")[0],
              expiryDate: certExpiryDate || null,
              fileUrl: certUrl,
            });

            console.log(`Certificate uploaded to ImageBB: ${certUrl}`);
          } catch (error) {
            console.error("Certificate upload error:", error);
            // Continue with other certificates
          }
        }
      }
    }

    // Parse education data
    const educationRaw = formData.get("education");
    let education = [];
    if (educationRaw) {
      try {
        education = JSON.parse(educationRaw);
      } catch (e) {
        education = [];
      }
    }

    // Parse availability data
    const availabilityRaw = formData.get("availability");
    let availability = {
      monday: { available: false, timeSlots: [] },
      tuesday: { available: false, timeSlots: [] },
      wednesday: { available: false, timeSlots: [] },
      thursday: { available: false, timeSlots: [] },
      friday: { available: false, timeSlots: [] },
      saturday: { available: false, timeSlots: [] },
      sunday: { available: false, timeSlots: [] },
    };

    if (availabilityRaw) {
      try {
        availability = { ...availability, ...JSON.parse(availabilityRaw) };
      } catch (e) {
        console.error("Error parsing availability:", e);
      }
    }

    // Extract location data
    const locationData = {
      city: formData.get("city") || "",
      state: formData.get("state") || "",
      country: formData.get("country") || "",
      coordinates: {
        lat: parseFloat(formData.get("latitude") || "0"),
        lng: parseFloat(formData.get("longitude") || "0"),
      },
    };

    // Build application data according to schema
    const applicationData = {
      // Personal Details
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      phone: formData.get("phone"),
      image: profileImageUrl, // ImageBB URL

      // Verification Status
      verified: false, // New applications are not verified

      // Rating & Reviews (defaults for new caregivers)
      rating: 0,
      reviewCount: 0,

      // Location
      location: locationData,

      // Professional Experience
      experience: parseInt(formData.get("yearsOfExperience") || "0"),
      hourlyRate: parseFloat(formData.get("hourlyRate") || "0"),
      available: true, // New caregivers are available by default

      serviceTypes: JSON.parse(formData.get("serviceTypes") || "[]"),
      skills: JSON.parse(formData.get("skills") || "[]"),
      languages: JSON.parse(formData.get("languages") || "[]"),

      bio: formData.get("bio") || "",
      aboutMe: formData.get("aboutMe") || "",

      // Certificates
      certificates: certificateData,

      // Education
      education: education,

      // Availability
      availability: availability,

      // Background Check
      backgroundCheck: {
        completed: false, // Pending background check
        completedDate: null,
        status: "Pending",
      },
      backgroundCheckConsent: formData.get("backgroundCheckConsent") === "true",

      // Preferences
      preferences: {
        minHours: parseInt(formData.get("minHours") || "0"),
        maxDistance: parseInt(formData.get("maxDistance") || "0"),
        liveIn: formData.get("liveIn") === "true",
        overnight: formData.get("overnight") === "true",
      },

      // Statistics (defaults for new caregivers)
      statistics: {
        totalBookings: 0,
        completedBookings: 0,
        cancelledBookings: 0,
        responseTime: 0,
      },

      // Bank Details (these should be encrypted in production!)
      bankDetails: {
        accountHolderName: formData.get("accountHolderName") || "",
        bankName: formData.get("bankName") || "",
        accountNumber: formData.get("accountNumber") || "", // ENCRYPT THIS!
        routingNumber: formData.get("routingNumber") || "", // ENCRYPT THIS!
        accountType: formData.get("accountType") || "checking",
      },

      // Metadata
      joinedDate: new Date().toISOString(),
      lastActive: new Date().toISOString(),
      status: "Pending Review", // Application status

      // Additional fields for internal use
      dateOfBirth: formData.get("dateOfBirth"),
      address: formData.get("address"),
      zipCode: formData.get("zipCode"),
    };

    // Validation
    if (!applicationData.backgroundCheckConsent) {
      return NextResponse.json(
        { error: "Background check consent is required" },
        { status: 400 },
      );
    }

    if (!applicationData.email || !applicationData.name) {
      return NextResponse.json(
        { error: "Missing required fields: name and email" },
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

    // Phone validation (basic)
    if (
      applicationData.phone &&
      !applicationData.phone.match(/^[\d\s\-\+\(\)]+$/)
    ) {
      return NextResponse.json(
        { error: "Invalid phone format" },
        { status: 400 },
      );
    }

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

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        data: {
          id: result.insertedId.toString(),
          name: applicationData.name,
          email: applicationData.email,
          status: applicationData.status,
          joinedDate: applicationData.joinedDate,
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

// GET method to retrieve application/caregiver data
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const caregiverId = searchParams.get("id");
    const email = searchParams.get("email");
    const status = searchParams.get("status"); // Filter by status

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

    // If specific ID or email provided, return single caregiver
    if (caregiverId || email) {
      const query = {};

      if (caregiverId) {
        try {
          const { ObjectId } = require("mongodb");
          query._id = new ObjectId(caregiverId);
        } catch {
          return NextResponse.json(
            { error: "Invalid caregiver ID format" },
            { status: 400 },
          );
        }
      } else if (email) {
        query.email = email;
      }

      const caregiver = await caregiverCollection.findOne(query);

      if (!caregiver) {
        return NextResponse.json(
          { error: "Caregiver not found" },
          { status: 404 },
        );
      }

      // Return caregiver data (exclude sensitive bank details)
      const { bankDetails, ...safeData } = caregiver;

      return NextResponse.json({
        success: true,
        data: {
          ...safeData,
          id: caregiver._id.toString(),
        },
      });
    }

    // Otherwise, return list of caregivers (with optional status filter)
    const query = {};
    if (status) {
      query.status = status;
    }

    const caregivers = await caregiverCollection
      .find(query)
      .project({ bankDetails: 0 }) // Exclude sensitive data
      .toArray();

    return NextResponse.json({
      success: true,
      count: caregivers.length,
      data: caregivers.map((c) => ({
        ...c,
        id: c._id.toString(),
      })),
    });
  } catch (error) {
    console.error("GET caregiver error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 },
    );
  }
}

// PATCH method to update caregiver status (for admin approval)
export async function PATCH(request) {
  try {
    const body = await request.json();
    const { id, email, updates } = body;

    if (!id && !email) {
      return NextResponse.json(
        { error: "Caregiver ID or email is required" },
        { status: 400 },
      );
    }

    if (!updates) {
      return NextResponse.json(
        { error: "Updates object is required" },
        { status: 400 },
      );
    }

    const caregiverCollection = await getCollection("caregivers");

    // Build query
    const query = {};
    if (id) {
      const { ObjectId } = require("mongodb");
      query._id = new ObjectId(id);
    } else {
      query.email = email;
    }

    // Prevent updating sensitive fields directly
    const allowedUpdates = {
      status: updates.status,
      verified: updates.verified,
      rating: updates.rating,
      reviewCount: updates.reviewCount,
      available: updates.available,
      lastActive: new Date().toISOString(),
    };

    // Remove undefined values
    Object.keys(allowedUpdates).forEach(
      (key) => allowedUpdates[key] === undefined && delete allowedUpdates[key],
    );

    // Update background check if provided
    if (updates.backgroundCheck) {
      allowedUpdates.backgroundCheck = updates.backgroundCheck;
    }

    const result = await caregiverCollection.updateOne(query, {
      $set: allowedUpdates,
    });

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: "Caregiver not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Caregiver updated successfully",
      modifiedCount: result.modifiedCount,
    });
  } catch (error) {
    console.error("PATCH caregiver error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 },
    );
  }
}

// DELETE method (for testing only - remove in production or add proper auth)
export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const email = searchParams.get("email");

    if (!id && !email) {
      return NextResponse.json(
        { error: "ID or email is required" },
        { status: 400 },
      );
    }

    const caregiverCollection = await getCollection("caregivers");

    const query = {};
    if (id) {
      const { ObjectId } = require("mongodb");
      query._id = new ObjectId(id);
    } else {
      query.email = email;
    }

    const result = await caregiverCollection.deleteOne(query);

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Caregiver not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Caregiver deleted successfully",
    });
  } catch (error) {
    console.error("DELETE caregiver error:", error);
    return NextResponse.json(
      { error: "Internal server error", message: error.message },
      { status: 500 },
    );
  }
}

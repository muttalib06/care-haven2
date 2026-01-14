"use server";
import { getCollection } from "@/lib/db";
import { signupSchema } from "@/lib/validation/auth";
import bcrypt from "bcryptjs";

export async function signupAction(formData) {
  try {
    // parse formdata
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      confirmPassword: formData.get("confirmPassword"),
    };

    // server side validation (very important for security)
    const validatedFields = signupSchema.safeParse(data);

    if (!validatedFields.success) {
      return {
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Validation failed",
      };
    }

    const { name, email, password } = validatedFields.data;

    //     user collection

    const userCollection = await getCollection("users");

    //     check if the user already exists;
    const existingUser = await userCollection.findOne({
      email: email.toLowerCase(),
    });

    if (existingUser) {
      return {
        success: false,
        message: "There is already an account with this email",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //     create user in the database
    const result = await userCollection.insertOne({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return {
      success: true,
      message: "Account created successfully",
      userId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log("Signup error", error);
    return {
      success: false,
      message: "Something went wrong. Try again",
    };
  }
}

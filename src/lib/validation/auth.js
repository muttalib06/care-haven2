import z from "zod";

export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters long")
      .max(50, "Name can be maximum of 50 characters"),

    email: z
      .string()
      .min(1, "Email required")
      .email("Please enter valid email"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "At least one uppercase letter is required")
      .regex(/[a-z]/, "At least one lowercase letter is required")
      .regex(/[0-9]/, "At least one number is required"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message:"password does not match",
    path:["confirmPassword"],
  });

// login schema 

export const loginSchema = z.object({
  email: z.string().min(1, "Email required").email("please enter valid email"),

  password: z.string().min(1, "Password required"),
});

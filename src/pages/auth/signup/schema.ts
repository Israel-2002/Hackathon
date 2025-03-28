import { z } from "zod";

export const signUpSchema = z.object({
  first_name: z
    .string()
    .min(1, "First name is required")
    .max(255, "Max length is 255 characters"),

  last_name: z
    .string()
    .min(1, "Last name is required")
    .max(255, "Max length is 255 characters"),

  email: z
    .string()
    .min(1, "Email is required.")
    .max(255, "Max length is 255 characters")
    .email({ message: "Your email is invalid" }),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(255, "Max length is 255 characters"),
});

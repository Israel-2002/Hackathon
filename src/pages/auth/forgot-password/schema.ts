import { z } from "zod";

export const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required.")
    .max(255, "Max length is 255 characters")
    .email({ message: "Your email is invalid" }),
});

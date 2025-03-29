import { z } from "zod";

export const aboutSchema = z.object({
  business_name: z
    .string()
    .min(1, "Business name is required")
    .max(255, "Max length is 255 characters"),

  business_type: z
    .string({ message: "Business type is required" })
    .max(255, "Max length is 255 characters"),

  industry: z.string({ message: "Industry sector is required" }),

  registration_date: z.string({ message: "Established date is required" }),
  location: z.string().optional(),
  no_of_employees: z.string().optional(),
});

export const financesSchema = z
  .object({
    revenue_range: z
      .string({ message: "Revenue range is required" })
      .max(255, "Max length is 255 characters"),
    in_debt: z.boolean({
      required_error: "Required",
      invalid_type_error: "Must be true or false",
    }),
    debt_range: z.string().max(255, "Max length is 255 characters").optional(),
  })
  .refine(
    (data) => {
      if (data.in_debt) {
        return !!data.debt_range;
      }
      return true;
    },
    {
      message: "Debt range is required when in debt",
      path: ["debt_range"],
    },
  );

// export const fileSchema = z.object({
//   files: z
//     .array(z.instanceof(File))
//     .min(1, "You must upload at least one file."),
// });

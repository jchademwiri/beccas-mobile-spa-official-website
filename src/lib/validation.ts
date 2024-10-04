import { z } from "zod";

const massageBookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Email must be a valid email address.",
  }),

  preferredDate: z.date(),
  preferredTime: z.string().min(1, {
    message: "Preferred time is required.",
  }),
  duration: z.enum(["30 Minutes", "60 Minutes", "90 Minutes", "120 Minutes"], {
    errorMap: () => ({
      message: "Duration must be 30, 60, 90, or 120 minutes.",
    }),
  }),
  massageType: z.enum(["Swedish", "Deep Tissue"], {
    errorMap: () => ({
      message: "Choose a massage type. Swedish or deep tissue.",
    }),
  }),
});

export type TMassageBookingFormSchema = z.infer<
  typeof massageBookingFormSchema
>;

export { massageBookingFormSchema };

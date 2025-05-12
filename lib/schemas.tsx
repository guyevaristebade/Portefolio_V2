import { z } from "zod";

export const formSchema = z.object({
  FirstName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Lastname: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  Email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  Phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  Service: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  Message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

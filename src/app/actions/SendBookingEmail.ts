"use server";
import { Resend } from "resend";
import MassageBookingEmail from "@/emails/MassageBookingEmail";
import { TMassageBookingFormSchema } from "@/lib/validation";

export const SendBookingEmail = async ({
  name,
  phone,
  email,
  preferredDate,
  preferredTime,
  duration,
  massageType,
}: TMassageBookingFormSchema) => {
  try {
    const resend: any = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: `Becca's Mobile Spa <bookings@beccasmobilespa.co.za>`,
      to: `info@beccasmobilespa.co.za`,
      cc: `${email}`,
      reply_to: `info@dyondzisanicommerce.co.za`,
      subject: "Massage Booking Appointemnt",
      react: MassageBookingEmail({
        name,
        phone,
        email,
        preferredDate,
        preferredTime,
        duration,
        massageType,
      }),
    });

    return console.log("Booking Email Sent");
  } catch (error) {
    return console.log(error);
  }
};

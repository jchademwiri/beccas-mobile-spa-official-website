import { MassageBookingForm } from "@/components/forms";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

const BookAnAppointmentPage = () => {
  return (
    <section className="mx-auto max-w-2xl px-2 py-6">
      <Card>
        <CardHeader>
          <Link href="/" className="flex items-center gap-1 text-destructive">
            <MoveLeft className="" />
            Go Back
          </Link>
          <h2 className="text-2xl">Massage Booking Form</h2>
          <p>Please fill out the form below.</p>
        </CardHeader>

        <CardContent>
          <MassageBookingForm />
        </CardContent>
      </Card>
    </section>
  );
};

export default BookAnAppointmentPage;

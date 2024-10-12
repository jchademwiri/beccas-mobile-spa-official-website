import { MassageBookingForm } from "@/components/forms";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const BookPage = () => {
  return (
    <section className="mx-auto max-w-2xl px-2 py-6">
      <Card>
        <CardHeader>
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

export default BookPage;

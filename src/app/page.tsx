import Hero from '@/components/Hero';
import { MassageServices } from '@/components/massage-services';
import { Testimonials } from '@/components/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <MassageServices />
      <Testimonials />
      {/* <BookAppointment /> */}
    </>
  );
}

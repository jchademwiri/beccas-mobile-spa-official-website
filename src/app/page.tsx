import { BookAppointment } from '@/components/book-appointment';
import { WelcomeText } from '@/components/coming-soon/Welcome';
import Hero from '@/components/Hero';
import { MassageServices } from '@/components/massage-services';

import { SocialMediaFooter } from '@/components/social-media-footer';
import { Testimonials } from '@/components/testimonials';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Hero />
      <MassageServices />
      <Testimonials />
      {/* <BookAppointment /> */}
      <SocialMediaFooter />
    </>
  );
}

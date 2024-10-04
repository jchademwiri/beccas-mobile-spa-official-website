import Link from "next/link";
import { Button } from "./ui/button";
import { whatsappLink } from "@/lib/contactDetails";

const Hero = () => {
  return (
    <section className="relative bg-[url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-gray-900/75 bg-gradient-to-r sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold text-accent sm:text-5xl">
            Welcome to Becca&apos;s
            <strong className="block font-extrabold text-destructive">
              Mobile Spa.{" "}
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-accent sm:text-xl/relaxed">
            Discover the path to wellness with Becca&apos;s Mobile Spa, where
            relaxation and rejuvenation come to you. Indulge in a tailored spa
            experience designed to restore balance to your body and mind.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Button variant={"secondary"} size={"lg"} className="bg-accent">
              <Link href="#services" className="">
                Our Services
              </Link>
            </Button>
            <Button variant={"destructive"} size={"lg"}>
              {/* <span className='mr-2'>L</span> */}
              <Link href={whatsappLink} className="">
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;

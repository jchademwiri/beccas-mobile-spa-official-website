import Link from 'next/link';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className='relative bg-[url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center bg-no-repeat'>
      <div className='absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 bg-gradient-to-r '></div>

      <div className='relative mx-auto  max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8'>
        <div className='max-w-xl text-center sm:text-left '>
          <h1 className='text-3xl font-extrabold  sm:text-5xl text-accent'>
            Welcome to Becca's
            <strong className='block font-extrabold text-destructive'>
              Mobile Spa.{' '}
            </strong>
          </h1>

          <p className='mt-4 max-w-lg  sm:text-xl/relaxed text-accent'>
            Discover the path to wellness with Becca's Mobile Spa, where
            relaxation and rejuvenation come to you. Indulge in a tailored spa
            experience designed to restore balance to your body and mind.
          </p>

          <div className='mt-8 flex flex-wrap gap-4 text-center'>
            <Button variant={'destructive'} size={'lg'}>
              <Link href='#' className=''>
                Learn More
              </Link>
            </Button>
            <Button size={'lg'}>
              {/* <span className='mr-2'>L</span> */}
              <Link href='#' className=''>
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

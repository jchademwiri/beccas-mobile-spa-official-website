import Link from 'next/link';

export function WelcomeText() {
  return (
    <div>
      <div className='max-w-3xl mx-auto text-center'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl '>
          Escape to Serenity at Becca's Mobile Spa.
        </h1>
        <hr className='w-full text-primary my-10 border-primary' />
        <p className='text-xl text-muted-foreground '>
          Indulge in our expertly crafted treatments, designed to melt away
          stress and leave you feeling refreshed and renewed.
        </p>
      </div>
      <div className='mt-10 text-center'>
        <h2 className='text-2xl font-bold mb-4'>Get in Touch</h2>
        <p className='text-lg text-muted-foreground mb-2'>
          Phone:{' '}
          <Link href='tel:+27671360276' className='text-primary'>
            067-136-0276
          </Link>
        </p>
        <p className='text-lg text-muted-foreground mb-2'>
          Email:{' '}
          <a href='mailto:info@beccasmobilespa.com' className='text-primary'>
            info@beccasmobilespa.co.za
          </a>
        </p>
      </div>
      <footer className='mt-20 text-center text-muted-foreground'>
        <p>&copy; 2023 Becca's Mobile Spa. All rights reserved.</p>
        <p className='text-primary italic'>
          This website is still under construction. We'll be launching soon!
        </p>
      </footer>
    </div>
  );
}

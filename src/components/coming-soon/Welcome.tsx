import { LeadText } from './Lead';

export function WelcomeText() {
  return (
    <div>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Welcome to Becca&apos;s Mobile Spar.
      </h1>
      <hr className='w-full text-primary my-10 border-primary' />
      <p className='text-xl text-muted-foreground text-center'>
        Your reluxation is our priority.
      </p>
    </div>
  );
}

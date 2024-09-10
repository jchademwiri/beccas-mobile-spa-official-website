import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const SociaMedia = () => {
  return (
    <div>
      <section className='my-10'>
        <h2 className='text-2xl font-bold text-center mb-6 text-primary'>
          Follow Us
        </h2>
        <p className='text-center mb-6 text-secondary-foreground'>
          Follow us on social media for updates, promotions, and wellness tips:
        </p>
        {/* Social Media  */}
        <div className='flex justify-center space-x-4'>
          <Button
            variant='outline'
            size='icon'
            asChild
            className='hover:bg-primary hover:text-primary-foreground'
          >
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Facebook'
            >
              <Facebook className='h-5 w-5' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            asChild
            className='hover:bg-primary hover:text-primary-foreground'
          >
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Instagram'
            >
              <Instagram className='h-5 w-5' />
            </a>
          </Button>
          <Button
            variant='outline'
            size='icon'
            asChild
            className='hover:bg-primary hover:text-primary-foreground'
          >
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Follow us on Twitter'
            >
              <Twitter className='h-5 w-5' />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default SociaMedia;

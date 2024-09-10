'use client';

import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  MessageSquare,
  Mail,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SociaMedia from './social-media';

let phone: number | string = '067 834 5805';
let numberLink: string = 'tel:+270678345805';
let whatsappLink: string =
  'https://wa.me/+27671360276/?text=hello there, i would like to book a massage. ';
let email: string = 'info@beccasmobilespa.co.za';
let emailLink: string = 'mailto:info@beccasmobilespa.co.za';

export function Footer() {
  return (
    <div className='w-full bg-secondary'>
      <div className='max-w-4xl mx-auto px-4 py-12'>
        {/* Social Media Section  */}
        <SociaMedia />
        <hr className='border-primary/50' />
        <footer className='text-center my-10'>
          <p className='mb-4 text-secondary-foreground'>
            © 2024 Becca's Mobile Spa. All rights reserved.
          </p>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4'>
            <div className='flex items-center text-secondary-foreground'>
              <Link href={numberLink} className='flex gap-1 items-center'>
                <Phone className='h-4 w-4 mr-2 text-primary' />
                {phone}
              </Link>
            </div>
            <div className='flex items-center text-secondary-foreground'>
              <Link href={whatsappLink} className='flex gap-1 items-center'>
                <MessageSquare className='h-4 w-4 mr-2 text-primary' />
                WhatsApp: 067 136 0276
              </Link>
            </div>
            <div className='flex items-center text-secondary-foreground'>
              <Link href={emailLink} className='flex gap-1 items-center'>
                <Mail className='h-4 w-4 mr-2 text-primary' />
                {email}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

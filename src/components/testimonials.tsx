'use client';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "The best massage experience I've ever had! Becca's team is professional and the convenience of having them come to my home is unbeatable.",
      author: 'Satisfied Client',
    },
    {
      quote:
        "After a session with Becca's Mobile Spa, I feel completely rejuvenated. Highly recommend!",
      author: 'Happy Client',
    },
  ];

  return (
    <div className='w-full bg-background'>
      <div className='max-w-5xl mx-auto px-4 py-12'>
        <h2 className='text-3xl font-bold text-center mb-2 text-primary'>
          Testimonials
        </h2>
        <h3 className='text-xl text-center text-muted-foreground mb-8'>
          What Our Clients Say
        </h3>

        <div className='grid gap-6 md:grid-cols-2'>
          {testimonials.map((testimonial, index) => (
            <Card key={index} className='bg-secondary'>
              <CardHeader>
                <Quote className='w-8 h-8 text-primary mb-2' />
              </CardHeader>
              <CardContent>
                <blockquote className='text-lg italic mb-4 text-secondary-foreground'>
                  {testimonial.quote}
                </blockquote>
                <footer className='text-right text-sm text-accent italic'>
                  – {testimonial.author}
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

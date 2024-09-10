'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function MassageServices() {
  const services = [
    {
      name: 'Neck, Shoulder, and Back Massage',
      duration: '30 mins',
      description: 'Ease tension and soothe sore muscles in targeted areas.',
      swedish: 'R350',
      deepTissue: 'R400',
    },
    {
      name: 'Foot and Calves Massage or Reflexology',
      duration: '45 mins',
      description:
        'Revitalize tired feet or experience the benefits of reflexology.',
      swedish: 'R450',
      deepTissue: 'R500',
    },
    {
      name: 'Full Body Massage',
      duration: '60 mins',
      description:
        'Indulge in a comprehensive relaxation experience for the entire body.',
      swedish: 'R600',
      deepTissue: 'R650',
    },
    {
      name: 'Full Body & Reflexology',
      duration: '90 mins',
      description:
        'Combine full-body massage with reflexology for ultimate relaxation.',
      swedish: 'R750',
      deepTissue: 'R800',
    },
    {
      name: 'Ultimate Relaxation Experience',
      duration: '2 hours',
      description:
        'Enjoy a thorough treatment addressing head, neck, back, shoulders, legs, reflexology, and stomach.',
      swedish: 'R960',
      deepTissue: 'R960',
    },
  ];

  return (
    <section id='services' className='py-10 px-4 bg-muted'>
      <Card className='w-full max-w-5xl mx-auto'>
        <CardHeader>
          <CardTitle className='text-3xl font-bold text-center text-primary'>
            Our Massage Services
          </CardTitle>
          <CardDescription className='text-center text-lg'>
            Choose from our range of relaxing treatments
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue='table' className='w-full'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='table'>Table View</TabsTrigger>
              <TabsTrigger value='cards'>Card View</TabsTrigger>
            </TabsList>
            <TabsContent value='table' className='w-full overflow-auto'>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='w-[40%]'>Service</TableHead>
                    <TableHead>Swedish Massage</TableHead>
                    <TableHead>Deep Tissue</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {services.map((service, index) => (
                    <TableRow key={index}>
                      <TableCell className='font-medium'>
                        <span className='font-semibold'>{service.name}</span>
                        <p className='text-sm text-accent'>
                          {service.duration}
                        </p>
                        <p className='mb-4 text-secondary-foreground'>
                          {service.description}
                        </p>
                      </TableCell>
                      <TableCell>{service.swedish}</TableCell>
                      <TableCell>{service.deepTissue}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
            <TabsContent value='cards' className='w-full'>
              <div className='grid gap-6 sm:grid-cols-2'>
                {services.map((service, index) => (
                  <Card key={index} className=''>
                    <CardHeader>
                      <CardTitle className='font-semibold'>
                        {service.name}
                      </CardTitle>
                      <CardDescription>{service.duration}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='mb-4 text-secondary-foreground'>
                        {service.description}
                      </p>
                      <div className='flex justify-between text-sm'>
                        <div>
                          <p className='font-semibold text-primary'>
                            Swedish Massage
                          </p>
                          <p>{service.swedish}</p>
                        </div>
                        <div>
                          <p className='font-semibold text-primary'>
                            Deep Tissue
                          </p>
                          <p>{service.deepTissue}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { services } from "@/lib/data";

export function MassageServices() {
  return (
    <section id="services" className="w-full bg-secondary px-4">
      <div className="mx-auto max-w-5xl py-12">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-bold text-primary">
            Our Massage Services
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Choose from our range of relaxing treatments
          </CardDescription>
        </CardHeader>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="bg-accent/20 hover:border-primary">
              <CardHeader>
                <CardTitle className="font-semibold">{service.name}</CardTitle>
                <hr className="border-accent/70" />
                <CardDescription className="">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-secondary-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { phone, whatsappLink } from "@/lib/contactDetails";

import { services } from "@/lib/data";
import Link from "next/link";

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
          <Card className="cursor-pointer bg-accent/50 hover:border-primary">
            <Link href={whatsappLink} className="h-full w-full text-3xl">
              <CardHeader>
                <CardTitle className="font-semibold">
                  Let's Chat on WhatsApp
                </CardTitle>
                <hr className="border-accent/70" />
              </CardHeader>
              <CardContent>{phone}</CardContent>
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}

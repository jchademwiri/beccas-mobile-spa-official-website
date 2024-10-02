"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  massageBookingFormSchema,
  TMassageBookingFormSchema,
} from "@/lib/validation";
import Spinner from "../Spinner";
import { SendBookingEmail } from "@/app/actions/SendBookingEmail";

export function MassageBookingForm() {
  // 1. Define your form.
  const form = useForm<TMassageBookingFormSchema>({
    resolver: zodResolver(massageBookingFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: new Date(),
      preferredTime: "10:00",
      massageType: undefined,
      duration: undefined,
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  // 2. Define a submit handler.
  async function onSubmit(massageFormData: TMassageBookingFormSchema) {
    // Do something with the form massageFormData.
    // ✅ This will be type-safe and validated.
    setIsSubmitting(true);

    SendBookingEmail(massageFormData);
    // Do something with the form massageFormData.
    // ✅ This will be type-safe and validated.
    // await SendBasicEducationEmail(data);
    // toast({
    //   title: `Thank You ${massageFormData.name}`,
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">
    //         Your email for {massageFormData.name} has been sent successfully.
    //       </code>
    //     </pre>
    //   ),
    // });
    console.log("Booking Details: ", massageFormData);

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mx-auto max-w-2xl px-4 py-6">
          <div className="grid gap-2 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="065 723 6771" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl className="w-full">
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="my-2 grid grid-cols-2 gap-2 md:grid-cols-3">
            <FormField
              control={form.control}
              name="massageType"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Massage Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"Swedish"} />
                        </FormControl>
                        <FormLabel className="font-normal">Swedish</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"Deep Tissue"} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          Deep Tissue
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl className="flex gap-1">
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"30 Minutes"} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          30 minutes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"60 Minutes"} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          60 minutes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"90 Minutes"} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          90 minutes
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={"120 Minutes"} />
                        </FormControl>
                        <FormLabel className="font-normal">
                          90 minutes
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="preferredTime"
              render={({ field }) => (
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel>Preferred Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-4 w-full md:w-auto"
            // onClick={() =>
            //   sendGAEvent({ event: "buttonClicked", value: "Form Submited" })
            // }
          >
            Submit {isSubmitting && <Spinner />}
          </Button>
        </section>
      </form>
    </Form>
  );
}

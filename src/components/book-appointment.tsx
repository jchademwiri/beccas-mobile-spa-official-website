'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageSquare } from "lucide-react"

export function BookAppointment() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Book Your Appointment</h2>
      <h3 className="text-xl text-center text-muted-foreground mb-8">Book Your Appointment Today!</h3>
      
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Reach out to us directly</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-primary" />
              <span>067 834 5805</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              <span>WhatsApp: 067 136 0276</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-primary" />
              <span>[Insert Email Address]</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Booking Form</CardTitle>
            <CardDescription>Fill out the form to book your appointment</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" placeholder="Your Phone Number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Any special requests or preferred date/time?" />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Book Now!</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { Facebook, Instagram, Twitter, Phone, MessageSquare, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SocialMediaFooter() {
  return (
    <div className="w-full bg-secondary">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-primary">Follow Us</h2>
          <p className="text-center mb-6 text-secondary-foreground">
            Follow us on social media for updates, promotions, and wellness tips:
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild className="hover:bg-primary hover:text-primary-foreground">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </section>
        
        <footer className="text-center">
          <p className="mb-4 text-secondary-foreground">© 2024 Becca's Mobile Spa. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex items-center text-secondary-foreground">
              <Phone className="h-4 w-4 mr-2 text-primary" />
              <span>067 834 5805</span>
            </div>
            <div className="flex items-center text-secondary-foreground">
              <MessageSquare className="h-4 w-4 mr-2 text-primary" />
              <span>WhatsApp: 067 136 0276</span>
            </div>
            <div className="flex items-center text-secondary-foreground">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span>info@beccasmobilespa.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
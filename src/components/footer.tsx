import {
  numberLink,
  phone,
  whatsappLink,
  emailLink,
  email,
} from "@/lib/contactDetails";
import { Phone, MessageSquare, Mail } from "lucide-react";

import Link from "next/link";
export function Footer() {
  return (
    <div className="w-full bg-secondary">
      <div className="mx-auto max-w-5xl py-12">
        {/* px-4 */}
        {/* Social Media Section  */}
        {/* <SociaMedia /> */}
        <hr className="border-primary/50" />
        <footer className="my-10 text-center">
          <p className="mb-4 text-secondary-foreground">
            © 2024 Becca&apos;s Mobile Spa. All rights reserved.
          </p>
          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="flex items-center text-secondary-foreground">
              <Link href={numberLink} className="flex items-center gap-1">
                <Phone className="mr-2 h-4 w-4 text-primary" />
                {phone}
              </Link>
            </div>
            <div className="flex items-center text-secondary-foreground">
              <Link href={whatsappLink} className="flex items-center gap-1">
                <MessageSquare className="mr-2 h-4 w-4 text-primary" />
                WhatsApp: {phone}
              </Link>
            </div>
            <div className="flex items-center text-secondary-foreground">
              <Link href={emailLink} className="flex items-center gap-1">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                {email}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

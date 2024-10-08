import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Row,
  Column,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

interface MassageBookingEmailProps {
  name: string;
  phone: string;
  email: string;
  preferredDate: Date;
  preferredTime: string; // HH:mm format
  duration: "30 Minutes" | "60 Minutes" | "90 Minutes" | "120 Minutes";
  massageType: "Swedish" | "Deep Tissue"; // Only Swedish and Deep Tissue remain
}

export const MassageBookingEmail = ({
  name = "John Doe",
  phone = "065 723 6771",
  email = "info@beccasmobilespa.co.za",
  preferredDate = new Date(),
  preferredTime = "10:00",
  duration = "30 Minutes",
  massageType = "Swedish",
}: MassageBookingEmailProps) => (
  <Html>
    <Head />
    <Preview>Becca's Mobile Spa Booking Confirmation</Preview>
    <Tailwind>
      <Body className="bg-gray-100 font-sans text-gray-600">
        <Container className="my-6 rounded-md bg-white shadow-sm">
          <Img
            src={`https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
            width="100%"
            height="200px"
            className="rounded-t-md bg-cover object-cover"
            alt="Becca's Mobile Spa Email banner Image"
          />
          <Section className="px-6 text-[16px] leading-6">
            <Section>
              <Heading as="h3" className="text-[#da0b73]">
                Contact Details
              </Heading>
              <Text>Full Name: {name}</Text>
              <Text>Email Address: {email}</Text>
              <Text>Phone Number: {phone}</Text>
              <Hr className="border-[#F26222]" />
              <Heading as="h3" className="text-[#da0b73]">
                Booking Details
              </Heading>
              <Text>
                Date:{" "}
                {preferredDate.toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Text>
              <Text>Time: {preferredTime}</Text>
              <Text>Duration: {duration} minutes</Text>
              <Text>Massage Type: {massageType}</Text>
            </Section>
          </Section>
          <Section className="relative bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-[#e4e4f9]"></div>
            <Container className="relative flex justify-between px-6 text-black">
              <Text>
                065 723 6771 | info@beccasmobilespa.co.za | Becca's Mobile Spa
              </Text>
            </Container>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default MassageBookingEmail;

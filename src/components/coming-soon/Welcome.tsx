import Link from "next/link";

export function WelcomeText() {
  return (
    <div>
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Escape to Serenity at Becca&apos;s Mobile Spa.
        </h1>
        <hr className="my-10 w-full border-primary text-primary" />
        <p className="text-xl text-muted-foreground">
          Indulge in our expertly crafted treatments, designed to melt away
          stress and leave you feeling refreshed and renewed.
        </p>
      </div>
      <div className="mt-10 text-center">
        <h2 className="mb-4 text-2xl font-bold">Get in Touch</h2>
        <p className="mb-2 text-lg text-muted-foreground">
          Phone:{" "}
          <Link href="tel:+27671360276" className="text-primary">
            067-136-0276
          </Link>
        </p>
        <p className="mb-2 text-lg text-muted-foreground">
          Email:{" "}
          <a href="mailto:info@beccasmobilespa.com" className="text-primary">
            info@beccasmobilespa.co.za
          </a>
        </p>
      </div>
      <footer className="mt-20 text-center text-muted-foreground">
        <p>&copy; 2023 Becca&apos;s Mobile Spa. All rights reserved.</p>
        <p className="italic text-primary">
          This website is still under construction. We&apos;ll be launching soon!
        </p>
      </footer>
    </div>
  );
}

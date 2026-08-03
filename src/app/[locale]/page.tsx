import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Booking />
      <Contact />
    </>
  );
}

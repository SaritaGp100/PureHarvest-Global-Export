import Hero from "@/components/sections/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ExportProcess from "@/components/sections/ExportProcess";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedProducts />
      <WhyChooseUs />
      <ExportProcess />
      <CTA />
    </>
  );
}
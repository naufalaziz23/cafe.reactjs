import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MenuSection from "@/components/MenuSection";
import GallerySection from "@/components/GallerySection";
import LocationSection from "@/components/LocationSection";
import TestimonialSection from "@/components/TestimonialSection";
import ReservationSection from "@/components/ReservationSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Hero />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <LocationSection />
      <TestimonialSection />
      <ReservationSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

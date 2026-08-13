import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import MobileBar from '@/components/MobileBar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ReservationForm from '@/components/ReservationForm';
import Newsletter from '@/components/Newsletter';
import {
  DiscoverySection, SignatureSection, MenuSection, GallerySection,
  WhySection, ReviewsSection, LocationSection, SocialSection,
  FaqSection, FinalCTA, FidelityStrip,
} from '@/components/sections';

export default function Page() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <DiscoverySection />
        <SignatureSection />
        <MenuSection />
        <FidelityStrip />
        <GallerySection />
        <WhySection />
        <ReviewsSection />
        <ReservationForm />
        <LocationSection />
        <SocialSection />
        <Newsletter />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
      <MobileBar />
      <WhatsAppButton />
    </>
  );
}
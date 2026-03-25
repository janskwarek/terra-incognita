import { useEffect, useState } from 'react';
import { useLenis } from './hooks/useLenis';
import Nav          from './components/Nav/Nav';
import Hero         from './components/Hero/Hero';
import Ticker       from './components/Ticker/Ticker';
import Destinations from './components/Destinations/Destinations';
import Stats        from './components/Stats/Stats';
import Tours        from './components/Tours/Tours';
import Testimonials from './components/Testimonials/Testimonials';
import CTA          from './components/CTA/CTA';
import Footer       from './components/Footer/Footer';
import BookingModal from './components/BookingModal/BookingModal';

export default function App() {
  useLenis(); // initialise smooth scroll globally
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 5) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav onBook={() => setIsBookingOpen(true)} />
      {/* Hero becomes sticky in its CSS and sits behind the content curtain */}
      <Hero />
      
      {/* Content curtain that slides over the sticky Hero */}
      <div className="content-curtain">
        <main>
          <Ticker />
          <Destinations />
          <Stats />
          <Tours />
          <Testimonials />
          <CTA onBook={() => setIsBookingOpen(true)} />
        </main>
        <Footer />
      </div>

      {/* Spacer to show Hero again at the bottom for an invisible infinite scroll loop */}
      <div style={{ height: '100vh', minHeight: '700px', pointerEvents: 'none' }} aria-hidden="true" />

      {/* Modal Curtain rendering above everything via CSS z-index */}
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
}

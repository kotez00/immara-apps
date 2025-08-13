import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import Portfolio from '@/components/landing/portfolio';
import Transformations from '@/components/landing/transformations';
import Testimonials from '@/components/landing/testimonials';
import Recommender from '@/components/landing/recommender';
import CallToAction from '@/components/landing/cta';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Portfolio />
        <Transformations />
        <Testimonials />
        <Recommender />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

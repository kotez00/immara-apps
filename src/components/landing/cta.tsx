import { Button } from '@/components/ui/button';

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Have an idea? Let's make it a reality.
          </h2>
          <p className="mt-6 text-xl leading-8 text-muted-foreground">
            We are passionate about collaborating with entrepreneurs and businesses to turn innovative ideas into powerful digital solutions. Don't let your vision wait.
          </p>
          <div className="mt-10">
            <a href="#contact">
              <Button size="lg" className="font-bold text-lg py-7 px-10 shadow-lg">
                Schedule a Consultation
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

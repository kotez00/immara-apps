import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Build, Modernize, and Scale with ImmaraApps
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          From innovative app design to strategic IT consultancy, we are your partners in digital transformation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#recommender">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline">
              Learn More &rarr;
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

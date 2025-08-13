import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="relative py-20 sm:py-32 bg-background overflow-hidden">
      <div className="dot-pattern"></div>
      <div className="glow-effect"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl font-headline">
          Crafting Digital Excellence
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
          We build beautiful, high-performance web and mobile applications that drive results. From initial concept to final launch, we are your dedicated partners in innovation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">Start a Project</Button>
          </a>
          <a href="#services">
            <Button size="lg" variant="outline" className="shadow-sm">
              Explore Services
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

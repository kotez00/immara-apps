import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="hero" className="relative py-24 sm:py-40 bg-background overflow-hidden">
      <div className="dot-pattern"></div>
      <div className="glow-effect"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl font-headline">
          We Build Digital Products That Drive Growth
        </h1>
        <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-3xl mx-auto">
          ImmaraApps is a results-driven digital agency that combines innovative design with cutting-edge technology to help startups and businesses achieve their goals.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6">
          <a href="#contact">
            <Button size="lg" className="font-bold text-lg py-7 px-8 shadow-lg">Start Your Project</Button>
          </a>
          <a href="#portfolio">
            <Button size="lg" variant="outline" className="font-bold text-lg py-7 px-8 shadow-sm">
              View Our Work
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 sm:py-32 bg-primary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
           <Rocket className="h-12 w-12 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Partner with ImmaraApps to turn your ideas into reality. Let's build something amazing together.
          </p>
          <div className="mt-10">
            <a href="#contact">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                Discuss Your Project
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

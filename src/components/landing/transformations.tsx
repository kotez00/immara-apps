import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const transformations = [
  {
    title: 'Corporate Website Revamp',
    beforeUrl: 'https://placehold.co/600x400.png',
    beforeHint: 'outdated website design',
    afterUrl: 'https://placehold.co/600x400.png',
    afterHint: 'modern corporate website',
  },
  {
    title: 'E-commerce Store Upgrade',
    beforeUrl: 'https://placehold.co/600x400.png',
    beforeHint: 'cluttered e-commerce store',
    afterUrl: 'https://placehold.co/600x400.png',
    afterHint: 'clean modern e-commerce',
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Digital Makeovers</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">From Outdated to Outstanding</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We specialize in breathing new life into digital platforms, transforming them into modern, high-performing assets that drive results.</p>
        </div>
        <div className="space-y-16">
          {transformations.map((trans, index) => (
            <Card key={index} className="overflow-hidden shadow-2xl bg-card border-border/50">
              <CardHeader className="p-6 sm:p-8">
                <CardTitle className="text-center font-headline text-2xl tracking-tight">{trans.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-8 items-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Before</h3>
                    <div className="aspect-video relative">
                      <Image
                        src={trans.beforeUrl}
                        alt="Before design"
                        fill
                        data-ai-hint={trans.beforeHint}
                        className="rounded-lg shadow-md border object-cover"
                      />
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center text-primary">
                    <ArrowRight className="w-12 h-12" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-primary">After</h3>
                    <div className="aspect-video relative">
                      <Image
                        src={trans.afterUrl}
                        alt="After design"
                        fill
                        data-ai-hint={trans.afterHint}
                        className="rounded-lg shadow-md border-2 border-primary/50 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

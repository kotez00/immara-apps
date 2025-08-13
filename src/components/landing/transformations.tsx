import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const transformations = [
  {
    title: 'Corporate Website Revamp',
    beforeUrl: 'https://placehold.co/600x400.png',
    beforeHint: 'old website',
    afterUrl: 'https://placehold.co/600x400.png',
    afterHint: 'modern website',
  },
  {
    title: 'E-commerce Store Upgrade',
    beforeUrl: 'https://placehold.co/600x400.png',
    beforeHint: 'outdated shop',
    afterUrl: 'https://placehold.co/600x400.png',
    afterHint: 'sleek storefront',
  },
];

export default function Transformations() {
  return (
    <section id="transformations" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Digital Makeovers</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Before & After</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We specialize in breathing new life into outdated digital presences, transforming them into modern, engaging experiences.</p>
        </div>
        <div className="space-y-12">
          {transformations.map((trans, index) => (
            <Card key={index} className="overflow-hidden shadow-lg bg-card">
              <CardHeader>
                <CardTitle className="text-center font-headline text-2xl">{trans.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-muted-foreground">Before</h3>
                    <Image
                      src={trans.beforeUrl}
                      alt="Before"
                      width={600}
                      height={400}
                      data-ai-hint={trans.beforeHint}
                      className="rounded-lg shadow-md border"
                    />
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <ArrowRight className="w-10 h-10 text-primary" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-4 text-primary">After</h3>
                    <Image
                      src={trans.afterUrl}
                      alt="After"
                      width={600}
                      height={400}
                      data-ai-hint={trans.afterHint}
                      className="rounded-lg shadow-md border-2 border-primary/50"
                    />
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

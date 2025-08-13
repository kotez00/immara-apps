import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Website Transformations</h2>
          <p className="mt-4 text-lg text-muted-foreground">Breathing new life into outdated digital presences.</p>
        </div>
        <div className="space-y-12">
          {transformations.map((trans, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <CardHeader>
                <CardTitle className="text-center">{trans.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-muted-foreground">Before</h3>
                    <Image
                      src={trans.beforeUrl}
                      alt="Before"
                      width={600}
                      height={400}
                      data-ai-hint={trans.beforeHint}
                      className="rounded-lg shadow-md border"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold mb-4 text-primary">After</h3>
                    <Image
                      src={trans.afterUrl}
                      alt="After"
                      width={600}
                      height={400}
                      data-ai-hint={trans.afterHint}
                      className="rounded-lg shadow-md border border-primary/50"
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

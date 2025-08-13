import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Fintech Mobile App',
    description: 'A sleek and secure mobile banking application with intuitive financial management tools.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'mobile banking',
    tags: ['Mobile App', 'UI/UX Design'],
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A powerful web-based dashboard for visualizing complex business intelligence data.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'data dashboard',
    tags: ['Web App', 'Data Viz'],
  },
  {
    title: 'Healthcare Patient Portal',
    description: 'A HIPAA-compliant portal for patients to access medical records and communicate with providers.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'medical portal',
    tags: ['Web App', 'Security'],
  },
  {
    title: 'Travel Booking Platform',
    description: 'An engaging mobile app that simplifies the process of booking flights and hotels.',
    imageUrl: 'https://placehold.co/600x400.png',
    hint: 'travel app',
    tags: ['Mobile App', 'E-commerce'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Design Portfolio</h2>
          <p className="mt-4 text-lg text-muted-foreground">A glimpse into our passion for creating exceptional digital products.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={600}
                    height={400}
                    data-ai-hint={item.hint}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{item.title}</CardTitle>
                <CardDescription className="mb-4">{item.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const portfolioItems = [
  {
    title: 'Fintech Mobile App for Startups',
    description: 'A sleek, secure mobile banking application designed to provide intuitive financial management tools for emerging businesses, focusing on user experience and rapid deployment.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1728586228949-fc0b5697fa57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmludGVjaCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    hint: 'finance app',
    tags: ['Mobile App', 'UI/UX Design', 'Fintech', 'iOS & Android'],
  },
  {
    title: 'SaaS Analytics & BI Dashboard',
    description: 'A powerful, data-rich web application for a SaaS company, enabling users to visualize complex business intelligence data and make informed decisions with interactive charts.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1732165698164-8e2bf22cc6df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fFNhYVMlMjBBbmFseXRpY3MlMjBEYXNoYm9hcmR8ZW58MHx8MHx8fDA%3D',
    hint: 'analytics dashboard',
    tags: ['Web App', 'Data Visualization', 'SaaS', 'React'],
  },
  {
    title: 'E-commerce Platform for Artisans',
    description: 'An engaging and visually-rich e-commerce platform that empowers local artisans to sell their products online, featuring a seamless checkout process and inventory management.',
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    hint: 'e-commerce website',
    tags: ['Web App', 'E-commerce', 'UX Strategy', 'Small Business'],
  },
  {
    title: 'Travel & Adventure Booking App',
    description: 'A captivating mobile app that simplifies booking flights, hotels, and unique local experiences, designed to inspire wanderlust and streamline travel planning for adventurers.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1747187551836-e118776287fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRyYXZlbCUyMEJvb2tpbmclMjBQbGF0Zm9ybXxlbnwwfHwwfHx8MA%3D%3Ds',
    hint: 'booking app',
    tags: ['Mobile App', 'User Experience', 'Travel Tech'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Our Work</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Proven by Results</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We partner with ambitious clients to create digital products that are not only beautiful but also deliver measurable business outcomes.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1 bg-card">
              <CardHeader className="p-0">
                <div className="overflow-hidden aspect-video relative">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    data-ai-hint={item.hint}
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <CardTitle className="mb-2 font-headline text-2xl">{item.title}</CardTitle>
                <div className="flex flex-wrap gap-2 my-4">
                  {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardDescription className="flex-1 text-base">{item.description}</CardDescription>
                <Button variant="link" className="p-0 h-auto mt-6 text-primary font-bold self-start">
                  View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

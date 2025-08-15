import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const portfolioItems = [
  {
    title: 'Fintech Mobile App',
    description: 'A sleek and secure mobile banking application with intuitive financial management tools.',
    imageUrl: 'https://plus.unsplash.com/premium_vector-1728586228949-fc0b5697fa57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmludGVjaCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    hint: 'finance app',
    tags: ['Mobile App', 'UI/UX Design', 'Fintech'],
  },
  {
    title: 'SaaS Analytics Dashboard',
    description: 'A powerful web-based dashboard for visualizing complex business intelligence data.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFzaGJvYXJkc3xlbnwwfHwwfHx8MA%3D%3D',
    hint: 'analytics dashboard',
    tags: ['Web App', 'Data Viz', 'SaaS'],
  },
  {
    title: 'Healthcare Patient Portal',
    description: 'A HIPAA-compliant portal for patients to access medical records and communicate with providers.',
    imageUrl: 'https://images.unsplash.com/photo-1646861108770-d645014b8f48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGhlYWx0aGNhcmUlMjBwb3J0YWwlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D',
    hint: 'healthcare app',
    tags: ['Web App', 'Security', 'Healthcare'],
  },
  {
    title: 'Travel Booking Platform',
    description: 'An engaging mobile app that simplifies the process of booking flights and hotels.',
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    hint: 'booking app',
    tags: ['Mobile App', 'E-commerce', 'Travel'],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Our Work</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Proven by Results</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">A glimpse into our passion for creating exceptional digital products that delight users and drive growth.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {portfolioItems.map((item, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-xl border-border/50 hover:border-primary/30">
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-lg">
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
              <CardContent className="p-6 bg-card">
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <CardTitle className="mb-2 font-headline text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

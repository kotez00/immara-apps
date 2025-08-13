import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Palette, ShoppingCart, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: 'Web & Mobile App Development',
    description: 'Crafting beautiful, user-friendly, and high-performance applications for all platforms.',
  },
  {
    icon: <ShoppingCart className="w-8 h-8 text-primary" />,
    title: 'E-commerce Solutions',
    description: 'Building robust and scalable e-commerce platforms that drive sales and customer engagement.',
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: 'IT Consultancy',
    description: 'Providing expert strategic advice to optimize your technology infrastructure and processes.',
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: 'Website Modernization',
    description: 'Revamping outdated websites into modern, responsive, and visually stunning digital experiences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold mb-2">Our Expertise</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">What We Do</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">We offer a comprehensive suite of services to meet your digital needs and empower your business.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="text-left p-6 shadow-md hover:shadow-xl transition-all duration-300 border-transparent hover:border-primary/20 bg-card">
                <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">{service.icon}</div>
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <CardDescription>{service.description}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

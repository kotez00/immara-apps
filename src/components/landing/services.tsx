import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Palette, ShoppingCart, Briefcase, Sparkles } from 'lucide-react';

const services = [
  {
    icon: <Palette className="w-10 h-10 text-primary" />,
    title: 'Web & Mobile App Development',
    description: 'Crafting beautiful, user-friendly, and high-performance applications for all platforms.',
  },
  {
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    title: 'E-commerce Solutions',
    description: 'Building robust and scalable e-commerce platforms that drive sales and customer engagement.',
  },
  {
    icon: <Briefcase className="w-10 h-10 text-primary" />,
    title: 'IT Consultancy',
    description: 'Providing expert strategic advice to optimize your technology infrastructure and processes.',
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: 'Website Modernization',
    description: 'Revamping outdated websites into modern, responsive, and visually stunning digital experiences.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground">We offer a comprehensive suite of services to meet your digital needs.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardDescription>{service.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

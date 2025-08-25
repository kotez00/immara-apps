import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { MonitorSmartphone, LayoutTemplate } from 'lucide-react';

const services = [
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: 'Website Design & Development',
    description: 'We create beautiful, high-performance websites that are tailored to your brand and optimized for conversion. From marketing sites to complex web applications, we build solutions that work.',
  },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
    title: 'Mobile App Design & Development',
    description: 'We design and build intuitive, engaging mobile apps for iOS and Android. Our agile process ensures we deliver a product that your users will love and that meets your business objectives.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Our Core Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">What We Do Best</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">We focus on what we are experts at: creating exceptional websites and mobile applications that solve problems and drive success for your business.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="text-left p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-transparent hover:border-primary/20 bg-card hover:-translate-y-1">
                <div className="mb-5 flex items-center justify-start w-14 h-14 rounded-full bg-primary/10">{service.icon}</div>
                <CardHeader className="p-0">
                    <CardTitle className="font-headline text-2xl mb-3">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

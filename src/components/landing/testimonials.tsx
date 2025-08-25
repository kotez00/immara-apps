import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    title: 'Founder, Nova Capital',
    quote:
      "ImmaraApps delivered a flawless mobile app that exceeded our expectations. Their agility and commitment to quality are what sets them apart. They are a true partner, not just a vendor.",
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'female founder portrait',
  },
  {
    name: 'Michael Rodriguez',
    title: 'CMO, FreshBloom Goods',
    quote:
      'The e-commerce site they built for us is fast, beautiful, and converts like crazy. Our online sales have doubled, and the team was a pleasure to work with from start to finish.',
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'male marketing director',
  },
  {
    name: 'David Lee',
    title: 'CEO, Healthify',
    quote:
      'The website revamp has been a huge success. We\'ve seen a significant increase in user engagement and lead generation. ImmaraApps understood our vision and executed it perfectly.',
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'male ceo portrait',
  },
];

const StarRating = ({ rating = 5 }: { rating?: number }) => (
  <div className="flex items-center gap-1 text-yellow-400">
    {[...Array(rating)].map((_, i) => (
      <Star key={i} className="h-5 w-5 fill-current" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Don't just take our word for it</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Trusted by Innovators and Founders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our clients are our biggest advocates. Here's what they have to say
            about their experience partnering with ImmaraApps.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-2xl transition-all duration-300 bg-card border-border/50 hover:border-primary/20">
                    <CardContent className="p-8 flex flex-col items-center text-center flex-1">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.hint}
                        width={80}
                        height={80}
                        className="rounded-full mb-6 border-2 border-primary/20"
                      />
                      <p className="text-muted-foreground text-base italic flex-1 mb-6">
                        "{testimonial.quote}"
                      </p>
                      <StarRating />
                    </CardContent>
                    <div className="bg-secondary/50 p-6 text-center rounded-b-lg border-t">
                      <p className="font-bold font-headline text-lg text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.title}
                      </p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

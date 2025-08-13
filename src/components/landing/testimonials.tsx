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
    name: 'Sarah L.',
    title: 'CEO, FinTech Startup',
    quote:
      "ImmaraApps transformed our vision into a stunning, functional mobile app. Their team's expertise and dedication were evident in every step. We couldn't be happier with the outcome.",
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'ceo portrait',
  },
  {
    name: 'Michael B.',
    title: 'Marketing Director, E-commerce Brand',
    quote:
      'The new e-commerce platform built by ImmaraApps has been a game-changer. Our sales have increased by 40%, and customer feedback has been overwhelmingly positive. A truly professional team.',
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'marketing director',
  },
  {
    name: 'Dr. Emily Carter',
    title: 'Clinic Administrator',
    quote:
      'Modernizing our patient portal was a massive undertaking, but ImmaraApps handled it with exceptional skill and attention to detail. Their IT consultancy was invaluable.',
    avatarUrl: 'https://placehold.co/100x100.png',
    hint: 'doctor portrait',
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
          <p className="text-primary font-semibold mb-2">Client Stories</p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Trusted by Innovators
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about their experience with us.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Image
                        src={testimonial.avatarUrl}
                        alt={testimonial.name}
                        data-ai-hint={testimonial.hint}
                        width={80}
                        height={80}
                        className="rounded-full mb-4 border-2 border-primary/20"
                      />
                      <p className="text-muted-foreground italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <StarRating />
                    </CardContent>
                    <div className="bg-secondary/50 p-4 text-center rounded-b-lg">
                      <p className="font-bold font-headline text-foreground">
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

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 shadow-2xl shadow-primary/10">
            <CardHeader className="text-center p-8">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">Get in Touch</p>
              <CardTitle className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Ready to Start Your Project?</CardTitle>
              <CardDescription className="mt-4 text-lg text-muted-foreground">
                Let's build something amazing together. Fill out the form below to get a quote.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" placeholder="e.g. Jane Doe" className="bg-secondary/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" type="email" placeholder="e.g. jane@example.com" className="bg-secondary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Tell us about your project</Label>
                  <Textarea id="message" placeholder="Describe your vision, goals, and any specific requirements..." className="min-h-[140px] bg-secondary/50" />
                </div>
                <Button type="submit" size="lg" className="w-full font-bold text-lg py-6">Get a Quote</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

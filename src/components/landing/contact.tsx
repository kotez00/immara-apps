'use client';

import { useActionState, useEffect, useRef } from 'react';
import { useFormStatus } from 'react-dom';
import { sendContactMessage, type ContactActionState } from '@/lib/actions';
import { useToast } from '@/hooks/use-toast';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full font-bold text-lg py-6">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </>
      ) : (
        'Get a Quote'
      )}
    </Button>
  );
}

export default function Contact() {
  const initialState: ContactActionState = {};
  const [state, formAction] = useActionState(sendContactMessage, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      toast({
        title: 'Message Sent!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state?.message && !state.success) {
      toast({
        variant: 'destructive',
        title: 'Oops! Something went wrong.',
        description: state.message,
      });
    }
  }, [state, toast]);

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
              <form ref={formRef} action={formAction} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Name</Label>
                    <Input id="name" name="name" placeholder="e.g. Jane Doe" className="bg-secondary/50" />
                    {state?.errors?.name && <p className="text-sm font-medium text-destructive">{state.errors.name[0]}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="e.g. jane@example.com" className="bg-secondary/50" />
                    {state?.errors?.email && <p className="text-sm font-medium text-destructive">{state.errors.email[0]}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Tell us about your project</Label>
                  <Textarea id="message" name="message" placeholder="Describe your vision, goals, and any specific requirements..." className="min-h-[140px] bg-secondary/50" />
                  {state?.errors?.message && <p className="text-sm font-medium text-destructive">{state.errors.message[0]}</p>}
                </div>
                <SubmitButton />
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

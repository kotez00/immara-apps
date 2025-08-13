"use client";

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { getRecommendation, type RecommenderActionState } from '@/lib/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, Loader2, Bot } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-4 w-4" />
          Get Recommendation
        </>
      )}
    </Button>
  );
}

export default function Recommender() {
  const initialState: RecommenderActionState = {};
  const [state, formAction] = useActionState(getRecommendation, initialState);

  return (
    <section id="recommender" className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">Need Help Deciding?</h2>
          <p className="mt-4 text-lg text-muted-foreground">Describe your project and let our AI assistant recommend the best service for you.</p>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <form action={formAction} className="space-y-4">
                <Textarea
                  name="projectNeeds"
                  placeholder="e.g., 'I want to build an online store to sell handmade crafts, with a blog and customer accounts.' or 'My company's website looks dated and doesn't work well on phones. I need a modern refresh.'"
                  className="min-h-[120px] text-base"
                  required
                />
                <SubmitButton />
                {state?.message && <p className="text-sm font-medium text-destructive pt-2">{state.message}</p>}
              </form>
            </CardContent>
          </Card>

          {state?.recommendation && (
            <Card className="mt-8 bg-accent/20 border-accent/50 animate-in fade-in-50 duration-500">
              <CardHeader>
                <div className="flex items-start gap-4">
                   <div className="p-2 bg-primary/10 rounded-full">
                      <Bot className="h-6 w-6 text-primary" />
                   </div>
                   <div>
                    <CardTitle>Our Recommendation</CardTitle>
                    <CardDescription>Based on your needs, we suggest:</CardDescription>
                   </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-semibold text-primary mb-2">{state.recommendation.recommendedService}</h3>
                <p className="text-muted-foreground">{state.recommendation.reason}</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}

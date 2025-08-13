'use server';

/**
 * @fileOverview A service recommendation AI agent.
 *
 * - recommendService - A function that recommends a service based on project needs.
 * - RecommendServiceInput - The input type for the recommendService function.
 * - RecommendServiceOutput - The return type for the recommendService function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendServiceInputSchema = z.object({
  projectNeeds: z
    .string()
    .describe('A detailed description of the client\'s project needs.'),
});
export type RecommendServiceInput = z.infer<typeof RecommendServiceInputSchema>;

const RecommendServiceOutputSchema = z.object({
  recommendedService: z.string().describe('The most suitable service for the client\'s needs from ImmaraApps.'),
  reason: z.string().describe('The detailed reason why the service is recommended.'),
});
export type RecommendServiceOutput = z.infer<typeof RecommendServiceOutputSchema>;

export async function recommendService(input: RecommendServiceInput): Promise<RecommendServiceOutput> {
  return recommendServiceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendServicePrompt',
  input: {schema: RecommendServiceInputSchema},
  output: {schema: RecommendServiceOutputSchema},
  prompt: `You are an expert consultant at ImmaraApps, specializing in recommending the best service based on client needs.

  Given the following project needs, determine the most suitable service from ImmaraApps (web and mobile app design and development, e-commerce platform development, IT consultancy, and modernizing and revamping old Website) and provide a detailed reason for the recommendation.

Project Needs: {{{projectNeeds}}}`,
});

const recommendServiceFlow = ai.defineFlow(
  {
    name: 'recommendServiceFlow',
    inputSchema: RecommendServiceInputSchema,
    outputSchema: RecommendServiceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

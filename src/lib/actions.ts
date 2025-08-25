'use server';

import { recommendService } from '@/ai/flows/service-recommender';
import { z } from 'zod';

const RecommendationSchema = z.object({
  recommendedService: z.string(),
  reason: z.string(),
});

const RecommenderActionStateSchema = z.object({
  message: z.string().optional(),
  recommendation: RecommendationSchema.optional(),
});

export type RecommenderActionState = z.infer<typeof RecommenderActionStateSchema>;

const RecommenderSchema = z.object({
  projectNeeds: z.string().min(20, { message: 'Please describe your project needs in at least 20 characters.' }),
});

export async function getRecommendation(
  prevState: RecommenderActionState,
  formData: FormData
): Promise<RecommenderActionState> {
  const validatedFields = RecommenderSchema.safeParse({
    projectNeeds: formData.get('projectNeeds'),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.projectNeeds?.[0],
    };
  }

  try {
    const result = await recommendService({ projectNeeds: validatedFields.data.projectNeeds });
    return { recommendation: result };
  } catch (error) {
    console.error('Error getting recommendation:', error);
    return {
      message: 'An unexpected error occurred. Our AI is currently offline, please try again later.',
    };
  }
}

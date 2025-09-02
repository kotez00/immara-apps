'use server';

import { recommendService } from '@/ai/flows/service-recommender';
import { z } from 'zod';
import { Resend } from 'resend';
import ContactFormEmail from '@/components/emails/contact-form-email';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

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

const ContactFormSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters.'),
    email: z.string().email('Please enter a valid email address.'),
    message: z.string().min(10, 'Message must be at least 10 characters.'),
});

export type ContactActionState = {
    message?: string;
    success?: boolean;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
};

export async function sendContactMessage(
    prevState: ContactActionState,
    formData: FormData
): Promise<ContactActionState> {
    const validatedFields = ContactFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Please correct the errors below.',
        };
    }

    const { name, email, message } = validatedFields.data;

    try {
        await resend.emails.send({
            from: 'ImmaraApps Inquiry <onboarding@resend.dev>',
            to: 'your-email@example.com', // CHANGE THIS to your actual email
            subject: `New message from ${name}`,
            reply_to: email,
            react: React.createElement(ContactFormEmail, { name, email, message }),
        });

        return { success: true, message: "Thank you! Your message has been sent successfully." };
    } catch (error) {
        console.error('Resend error:', error);
        return {
            message: 'An unexpected error occurred. Please try again later.',
        };
    }
}

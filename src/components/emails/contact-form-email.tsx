import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactFormEmail({ name, email, message }: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Message from ImmaraApps Contact Form</Heading>
          <Section style={section}>
            <Text style={paragraph}>You have received a new message from your website contact form.</Text>
            <Hr style={hr} />
            <Text style={label}>From:</Text>
            <Text style={value}>{name}</Text>
            <Text style={label}>Email:</Text>
            <Text style={value}>{email}</Text>
            <Hr style={hr} />
            <Text style={label}>Message:</Text>
            <Text style={messageStyle}>{message}</Text>
            <Hr style={hr} />
            <Text style={footer}>This email was sent from the contact form on immaraapps.com</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  border: '1px solid #e6ebf1',
  borderRadius: '8px',
};

const heading = {
  color: '#333',
  fontSize: '24px',
  fontWeight: 'bold',
  textAlign: 'center' as const,
  margin: '30px 0',
};

const section = {
  padding: '0 48px',
};

const label = {
    color: '#525f7f',
    fontSize: '14px',
    fontWeight: 'bold',
    margin: '0',
};

const value = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    margin: '0 0 20px 0',
}

const paragraph = {
  color: '#525f7f',
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'left' as const,
};

const messageStyle = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '24px',
    padding: '12px',
    backgroundColor: '#f6f9fc',
    borderRadius: '4px',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  lineHeight: '16px',
};

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works | Briella Health',
  description: 'From signup to results in 5 days. Learn how Briella Health\'s physician-supervised biomarker testing works through Quest Diagnostics\' 2,000+ locations.',
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

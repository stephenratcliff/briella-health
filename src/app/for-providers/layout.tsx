import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Providers & Partners | Briella Health',
  description: 'Partner with Briella Health to offer 100+ biomarker panels to your clients. Revenue sharing, branded dashboards, and zero upfront costs.',
};

export default function ForProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

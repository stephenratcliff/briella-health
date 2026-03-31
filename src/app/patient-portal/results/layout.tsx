import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Results | Briella Health Patient Portal',
  description: 'View your complete biomarker results organized by category with optimal ranges and status indicators.',
};

export default function ResultsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

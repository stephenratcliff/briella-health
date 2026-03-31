import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Journal — Health Insights | Briella Health',
  description: 'Physician-written articles on biomarkers, functional medicine, hormones, metabolic health, and longevity from Dr. Stephen Ratcliff.',
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

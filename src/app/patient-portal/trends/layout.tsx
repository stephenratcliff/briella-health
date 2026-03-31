import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Biomarker Trends | Briella Health Patient Portal',
  description: 'Track your biomarker progress over time with interactive charts and trend analysis. Monitor improvements and declining markers.',
};

export default function TrendsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

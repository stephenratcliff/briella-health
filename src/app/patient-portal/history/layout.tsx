import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lab History | Briella Health Patient Portal',
  description: 'View your complete lab history and past biomarker results. Track changes over time and download your lab data for records or sharing with providers.',
};

export default function HistoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

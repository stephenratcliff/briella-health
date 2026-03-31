import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Health Report | Patient Portal | Briella Health',
  description: 'View your AI-generated personalized health report powered by OptimalDX functional blood chemistry analysis.',
};

export default function HealthReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

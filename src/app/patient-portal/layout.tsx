import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Dashboard | Briella Health',
  description: 'View your biomarker results, health trends, and physician insights.',
};

export default function PatientPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Find Draw Site | Briella Health Patient Portal',
  description: 'Find a Quest Diagnostics patient service center near you and schedule your lab draw. Access our appointment scheduler to book your biomarker testing.',
};

export default function DrawSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

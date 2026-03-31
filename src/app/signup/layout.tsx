import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account | Briella Health',
  description: 'Join Briella Health for comprehensive biomarker testing. 100+ markers, physician-reviewed, less than $1/day.',
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

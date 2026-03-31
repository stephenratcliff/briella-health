import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Membership — $365/Year | Briella Health',
  description: 'Comprehensive biomarker testing for less than $1/day. No insurance needed. HSA/FSA eligible. Includes physician review and personalized health dashboard.',
};

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

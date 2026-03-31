import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Log In | Briella Health',
  description: 'Access your Briella Health patient dashboard or provider portal.',
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

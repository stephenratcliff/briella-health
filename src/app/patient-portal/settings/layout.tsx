import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Patient Portal | Briella Health',
  description: 'Manage your account, security settings, and provider authorizations.',
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

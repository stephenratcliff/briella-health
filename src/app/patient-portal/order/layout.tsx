import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Order Lab Panel | Briella Health Patient Portal',
  description: 'Order your annual biomarker panel or add-on specialty testing. Choose from comprehensive panels and optional add-ons for deeper health insights.',
};

export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

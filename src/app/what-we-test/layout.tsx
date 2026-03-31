import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Test — 100+ Biomarkers | Briella Health',
  description: 'Explore the full panel of 100+ biomarkers including cardiovascular, hormones, metabolic, thyroid, immune, and nutrient markers with functional medicine reference ranges.',
};

export default function WhatWeTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

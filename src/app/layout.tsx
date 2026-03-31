import type { Metadata } from "next";
import "./globals.css";
import PasswordGate from "@/components/PasswordGate";

export const metadata: Metadata = {
  title: "Briella Health — Comprehensive Biomarker Testing",
  description:
    "100+ biomarkers tested annually. Physician-reviewed results. Less than $1/day. No insurance needed. HSA/FSA eligible. Available through Quest Diagnostics.",
  metadataBase: new URL("https://briella.health"),
  openGraph: {
    title: "Briella Health — Comprehensive Biomarker Testing",
    description:
      "100+ biomarkers. Physician-reviewed. $365/year. Know every number that matters.",
    url: "https://briella.health",
    siteName: "Briella Health",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Briella Health — Comprehensive Biomarker Testing",
    description:
      "100+ biomarkers. Physician-reviewed. $365/year. Know every number that matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">
        <PasswordGate>{children}</PasswordGate>
      </body>
    </html>
  );
}

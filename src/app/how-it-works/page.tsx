import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "How It Works | Briella Health",
  description: "Simple, thorough, physician-supervised blood testing from home. Learn our step-by-step process.",
};

export default function HowItWorks() {
  const processSteps = [
    {
      number: 1,
      title: "Join as a Member",
      description: "Create your account, select your tier, and complete a comprehensive health intake form.",
      tags: ["5 min signup", "$365/year", "HIPAA-secure"],
    },
    {
      number: 2,
      title: "Schedule Your Lab Visit",
      description: "Book an appointment at one of Quest Diagnostics' 2,000+ convenient nationwide locations.",
      tags: ["2,000+ locations", "Appointments in days", "10-12 hr fast"],
    },
    {
      number: 3,
      title: "Get Your Blood Drawn",
      description: "Visit your scheduled appointment for a quick, professional blood draw by certified phlebotomists.",
      tags: ["15-20 min", "CLIA-certified", "Critical value protocol"],
    },
    {
      number: 4,
      title: "Results in Your Dashboard",
      description: "Access your results in 3-5 business days in your personal dashboard, organized by organ system.",
      tags: ["3-5 days", "Plain-language", "Organized by system"],
    },
    {
      number: 5,
      title: "Clinically-Reviewed Insights",
      description: "Get optimal vs. reference ranges with clear next-step guidance from our physician team.",
      tags: ["Optimal ranges", "Plain-language", "Clear guidance"],
    },
    {
      number: 6,
      title: "Track Your Health Over Time",
      description: "Re-test annually to see longitudinal trends, understand year-over-year changes, and own your data forever.",
      tags: ["Longitudinal tracking", "Annual re-testing", "Year-over-year"],
    },
  ];

  const timelineEvents = [
    {
      day: "Day 0",
      event: "Schedule appointment",
    },
    {
      day: "Day 1",
      event: "Fast & blood draw (15-20 min)",
    },
    {
      day: "Day 2-3",
      event: "Samples processed",
    },
    {
      day: "Day 3-5",
      event: "All results delivered, physician review complete",
    },
    {
      day: "Day 5+",
      event: "Review dashboard, data yours forever",
    },
  ];

  const questFeatures = [
    "CLIA-certified labs",
    "2,000+ locations nationwide",
    "3-5 business day results",
    "Real phlebotomy expertise",
  ];

  return (
    <div className="bg-bg-dark">
      <Nav />

      {/* Hero Section */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-teal">The Process</p>
            <h1 className="mt-4 font-heading text-5xl font-extrabold text-white sm:text-6xl">
              Simple, thorough, physician-supervised.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              From signup to insights, our step-by-step process guides you through comprehensive health
              testing. Get your blood drawn at a convenient location, receive physician-reviewed results
              organized by organ system, and track your health trends over time.
            </p>
          </div>
        </div>
      </section>

      {/* 6-Step Process Cards */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-border bg-bg-card p-8"
              >
                <div className="mb-4 inline-block rounded-lg bg-bg-teal-dim px-3 py-2">
                  <p className="font-heading text-2xl font-bold text-teal">{step.number}</p>
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-4 text-gray-400">{step.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-border bg-bg-dark px-3 py-1 text-xs text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section - Blood Draw */}
      <section className="bg-bg-dark px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <img
            src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600"
            alt="Blood draw procedure"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-white">Your typical visit timeline</h2>
          <div className="mt-12 space-y-8">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="h-4 w-4 rounded-full bg-teal"></div>
                  {idx < timelineEvents.length - 1 && (
                    <div className="mt-2 h-12 w-0.5 bg-teal"></div>
                  )}
                </div>
                <div className="pb-4">
                  <p className="font-heading text-lg font-bold text-teal">{event.day}</p>
                  <p className="mt-1 text-gray-400">{event.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quest Section */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-4xl font-bold text-white">Quest Diagnostics. The gold standard.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {questFeatures.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <span className="mt-1 text-2xl text-teal">✓</span>
                <p className="text-gray-400">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl font-bold text-white">
            Your most comprehensive health panel. Simplified.
          </h2>
          <p className="mt-4 text-lg text-white">$365/year · 100+ biomarkers · Physician-reviewed results</p>
          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-body font-semibold text-teal transition-colors hover:bg-gray-100">
            Join the Waitlist
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

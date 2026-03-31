'use client';

import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function ForProvidersPage() {
  useScrollReveal();

  const handlePartnerApply = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector(
      'button[type="submit"]'
    ) as HTMLButtonElement;
    if (btn) {
      btn.textContent =
        "✓ Application received — we'll be in touch within 48 hours.";
      btn.style.background = "#22c55e";
      btn.disabled = true;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Nav />

      {/* HERO */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/8 to-transparent pointer-events-none"></div>
        <div className="max-w-4xl mx-auto relative z-10 fade-up">
          <div className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-6">
            For Providers &amp; Practices
          </div>
          <h1 className="font-heading font-extrabold text-fluid-section text-white mb-6 leading-tight">
            Your clients want
            <br />
            <span style={{ color: "var(--gold)", fontStyle: "normal" }}>
              the full picture.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Add physician-ordered comprehensive lab testing to your practice.
            Briella Health handles the infrastructure — ordering, lab network,
            results delivery, and patient portal. You add a new revenue stream
            and a service your clients can't get anywhere else.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#partner"
              className="inline-block bg-gold hover:bg-gold/90 text-bg-dark px-8 py-3 rounded-xl font-semibold transition"
            >
              Apply to Partner
            </a>
            <a
              href="/login"
              className="inline-block border border-border hover:border-teal-border text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Provider Login
            </a>
          </div>
        </div>
      </section>

      {/* STAT BAR */}
      <section className="bg-bg-card py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading text-white mb-2">
                100<span style={{ fontSize: "1.5rem", color: "var(--gold)" }}>+</span>
              </div>
              <div className="text-gray-400 text-sm">Biomarkers per patient panel</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading text-white mb-2">
                <span style={{ color: "var(--gold)" }}>$</span>0
              </div>
              <div className="text-gray-400 text-sm">Upfront infrastructure cost</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading text-white mb-2">
                2,000<span style={{ fontSize: "1.5rem" }}>+</span>
              </div>
              <div className="text-gray-400 text-sm">
                Quest draw locations nationwide
              </div>
            </div>
            <div>
              <div
                className="text-4xl md:text-5xl font-heading mb-2"
                style={{ color: "var(--gold)" }}
              >
                20%
              </div>
              <div className="text-gray-400 text-sm">
                Revenue share on every membership
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS FOR PROVIDERS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="uppercase tracking-[0.16em] text-xs font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              The Partnership Model
            </div>
            <h2 className="font-heading font-extrabold text-fluid-section text-white mb-4">
              Everything you need.
              <br />
              Nothing you don't.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Briella Health operates as the full backend. You focus on your
              clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
            {[
              {
                step: "1",
                title: "You join as a Briella affiliate",
                desc: "Complete a simple onboarding process. You receive a branded co-branded subdomain (e.g., yourmedspa.briellahealth.com), affiliate tracking, and access to your clinic dashboard. No licensing fees or infrastructure costs.",
              },
              {
                step: "2",
                title: "Your clients enroll through your branded link",
                desc: "Clients sign up through your branded Briella page. They complete a digital intake form, consent to lab result sharing with your clinic, and receive their panel order automatically. You see every patient who enrolls under your affiliate.",
              },
              {
                step: "3",
                title: "Results route directly to your dashboard",
                desc: "When a client's labs are complete, you and your NP are notified in real time. Their full 100+ biomarker panel appears in your clinic dashboard — organized, interpreted, and ready for follow-up consultation. The patient sees their own portal simultaneously.",
              },
            ].map((item, idx) => (
              <div key={item.step} className="text-center delay-{idx}">
                <div
                  className="w-12 h-12 rounded-lg border mx-auto mb-6 flex items-center justify-center font-heading text-2xl"
                  style={{
                    background: "rgba(212, 168, 83, 0.12)",
                    borderColor: "rgba(212, 168, 83, 0.3)",
                    color: "var(--gold)",
                  }}
                >
                  {item.step}
                </div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVIDER DASHBOARD */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-border"
        style={{ background: "var(--bg-card)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div
                className="uppercase tracking-[0.16em] text-xs font-bold mb-4"
                style={{ color: "var(--gold)" }}
              >
                Provider Dashboard
              </div>
              <h2 className="font-heading font-extrabold text-4xl text-white mb-6">
                Your entire client panel — at a glance.
              </h2>
              <p className="text-gray-300 mb-8">
                One dashboard shows every client, their lab status, and any
                results that need clinical attention. Filter by pending,
                complete, or flagged. Click any patient to see their full 100+
                biomarker panel alongside longitudinal history.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: "📊",
                    title: "Real-time lab status",
                    desc: "See exactly which clients have labs pending, drawn, or resulted — and get notified the moment results land.",
                  },
                  {
                    icon: "🚩",
                    title: "Flagged markers highlighted automatically",
                    desc: "Out-of-optimal values are surfaced immediately — no hunting through 100 lines of results.",
                  },
                  {
                    icon: "📈",
                    title: "Longitudinal trends for every client",
                    desc: "See how each biomarker has moved over time — a clinical context that a single snapshot cannot provide.",
                  },
                  {
                    icon: "💰",
                    title: "Revenue reporting built in",
                    desc: "See your affiliate revenue, active memberships, and pending renewals in one place.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div
                      className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(212, 168, 83, 0.12)",
                        border: "1px solid rgba(212, 168, 83, 0.3)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-white mb-1">
                        {item.title}
                      </div>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg-dark rounded-xl border border-border p-6 card-hover card-glow fade-up">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-white">
                  Patient Overview
                </span>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(13, 148, 136, 0.2)",
                    color: "var(--teal)",
                  }}
                >
                  Live
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { label: "Active Members", value: "24" },
                  {
                    label: "Results Pending",
                    value: "6",
                    valueColor: "var(--teal)",
                  },
                  { label: "Panels Complete", value: "17", valueColor: "#22c55e" },
                  { label: "Revenue This Month", value: "$1,752", valueColor: "var(--gold)" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    style={{ background: "var(--bg-dark)" }}
                    className="rounded-lg p-4 border border-border"
                  >
                    <div
                      className="text-lg font-bold"
                      style={{ color: stat.valueColor || "white" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                <div
                  className="text-xs font-bold uppercase tracking-wider mb-3"
                  style={{ color: "var(--gray-500)" }}
                >
                  Recent Results
                </div>
                <div className="space-y-2">
                  {[
                    {
                      name: "Sarah M.",
                      status: "1 Flagged",
                      subtext: "Completed today",
                      statusColor: "#ef4444",
                    },
                    {
                      name: "James T.",
                      status: "All Optimal",
                      subtext: "Completed Mar 28",
                      statusColor: "#22c55e",
                    },
                    {
                      name: "Rachel K.",
                      status: "Pending",
                      subtext: "Awaiting draw",
                      statusColor: "var(--teal)",
                    },
                  ].map((result, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center p-3 bg-bg-dark rounded border border-border"
                    >
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {result.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {result.subtext}
                        </div>
                      </div>
                      <span
                        className="text-xs font-bold px-2 py-1 rounded"
                        style={{
                          background: `${result.statusColor}20`,
                          color: result.statusColor,
                        }}
                      >
                        {result.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="uppercase tracking-[0.16em] text-xs font-bold mb-4 text-gray-400">
              Physician-Ordered. Fully Compliant.
            </div>
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
              We handle the regulatory complexity.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Offering lab testing involves CPOM restrictions, HIPAA compliance,
              and physician oversight. Briella Health manages all of it — so you
              don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-up">
            {[
              {
                emoji: "⚕️",
                title: "Physician-ordered panels",
                desc: "Every panel is ordered by a licensed physician through Aurora Health's network. You do not need a medical director or NP to place lab orders — that infrastructure is ours.",
              },
              {
                emoji: "🔒",
                title: "HIPAA-compliant throughout",
                desc: "Patient data is handled under a full HIPAA-compliant infrastructure. Patient consent to share results with your clinic is captured at intake. BAAs are in place at every layer of the stack.",
              },
              {
                emoji: "🗺️",
                title: "Available in TX, PA, NC — expanding",
                desc: "Briella Health is licensed to operate in Texas, Pennsylvania, and North Carolina at launch, with additional states being added through 2026. Ask about your state.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card rounded-xl border border-border p-8 text-center card-hover card-glow delay-{idx}"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-heading font-bold text-xl text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section
        id="pricing"
        className="py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-border"
        style={{ background: "var(--bg-card)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div
              className="uppercase tracking-[0.16em] text-xs font-bold mb-4"
              style={{ color: "var(--gold)" }}
            >
              Partnership Pricing
            </div>
            <h2 className="font-heading font-extrabold text-fluid-section text-white mb-4">
              Simple, transparent revenue share.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              No setup fees. No monthly platform costs. You earn a percentage of
              every membership your clients purchase.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto fade-up">
            {/* Starter */}
            <div className="bg-bg-dark rounded-xl border border-border p-8 card-hover card-glow delay-1">
              <div
                className="uppercase tracking-[0.16em] text-xs font-bold mb-6"
              >
                Starter Partner
              </div>
              <div className="mb-2">
                <div className="font-heading text-4xl text-white">15%</div>
                <div className="text-gray-400 text-sm mt-1">
                  of every membership sold
                </div>
              </div>
              <div className="border-t border-border my-6"></div>
              <div className="space-y-3 mb-8">
                {[
                  "Branded co-branded subdomain",
                  "Patient dashboard access",
                  "Up to 25 active members",
                  "Quarterly revenue payouts",
                  "Briella onboarding support",
                ].map((feature, idx) => (
                  <div key={idx} className="text-gray-300 text-sm">
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#partner"
                className="block w-full text-center border border-border hover:border-teal-border text-white px-8 py-3 rounded-xl font-semibold transition btn-secondary"
              >
                Apply
              </a>
            </div>

            {/* Growth - Featured */}
            <div
              className="bg-bg-dark rounded-xl border-2 p-8 relative card-hover card-glow delay-2"
              style={{ borderColor: "var(--gold)" }}
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span
                  className="inline-block text-xs font-bold px-4 py-1 rounded-full"
                  style={{
                    background: "var(--gold)",
                    color: "var(--bg-dark)",
                  }}
                >
                  Growth Partner
                </span>
              </div>
              <div
                className="uppercase tracking-[0.16em] text-xs font-bold mb-6"
                style={{ color: "var(--gold)" }}
              >
                Most Popular
              </div>
              <div className="mb-2">
                <div className="font-heading text-4xl" style={{ color: "var(--gold)" }}>
                  20%
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  of every membership sold
                </div>
              </div>
              <div className="border-t border-border my-6"></div>
              <div className="space-y-3 mb-8">
                {[
                  "Everything in Starter",
                  "Up to 100 active members",
                  "Full clinic dashboard suite",
                  "Monthly revenue payouts",
                  "Priority partner support",
                  "Co-marketing opportunities",
                ].map((feature, idx) => (
                  <div key={idx} className="text-gray-300 text-sm">
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#partner"
                className="block w-full text-center bg-gold hover:bg-gold/90 text-bg-dark px-8 py-3 rounded-xl font-semibold transition btn-primary"
              >
                Apply — Most Popular
              </a>
            </div>

            {/* Enterprise */}
            <div className="bg-bg-dark rounded-xl border border-border p-8 card-hover card-glow delay-3">
              <div
                className="uppercase tracking-[0.16em] text-xs font-bold mb-6"
              >
                Enterprise
              </div>
              <div className="mb-2">
                <div className="font-heading text-4xl text-white">Custom</div>
                <div className="text-gray-400 text-sm mt-1">
                  for high-volume practices
                </div>
              </div>
              <div className="border-t border-border my-6"></div>
              <div className="space-y-3 mb-8">
                {[
                  "Unlimited active members",
                  "Custom revenue share",
                  "White-label options",
                  "Dedicated account manager",
                  "API access for EHR integration",
                  "Multi-location support",
                ].map((feature, idx) => (
                  <div key={idx} className="text-gray-300 text-sm">
                    {feature}
                  </div>
                ))}
              </div>
              <a
                href="#partner"
                className="block w-full text-center border border-border hover:border-teal-border text-white px-8 py-3 rounded-xl font-semibold transition btn-secondary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / APPLY FORM */}
      <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-6xl mx-auto fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div
                className="uppercase tracking-[0.16em] text-xs font-bold mb-4"
                style={{ color: "var(--gold)" }}
              >
                Apply to Partner
              </div>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-4">
                Ready to add lab testing to your practice?
              </h2>
              <p className="text-gray-300 mb-8">
                We are selectively onboarding practice partners in Texas,
                Pennsylvania, and North Carolina. Applications take under five
                minutes. Our team will follow up within 48 hours.
              </p>
              <div className="space-y-3">
                {[
                  "No setup fees",
                  "Live within 2 weeks",
                  "Full onboarding support",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-400"
                  >
                    <span style={{ color: "var(--gold)" }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={handlePartnerApply}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Business Email
                </label>
                <input
                  type="email"
                  placeholder="jane@yourclinic.com"
                  className="w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Practice Name
                </label>
                <input
                  type="text"
                  placeholder="Elite Practice — Austin, TX"
                  className="w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-teal-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  State
                </label>
                <select className="w-full bg-bg-dark border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-border">
                  <option>Texas</option>
                  <option>Pennsylvania</option>
                  <option>North Carolina</option>
                  <option>Other (contact us)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-bg-dark px-8 py-3 rounded-xl font-semibold transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

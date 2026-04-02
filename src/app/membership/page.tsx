'use client';

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function MembershipPage() {
  useScrollReveal();

  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [waitlistMessage, setWaitlistMessage] = useState<string | null>(null);
  const [helpPanelOpen, setHelpPanelOpen] = useState(false);

  const handleWaitlist = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    if (email) {
      setWaitlistMessage(
        "You're on the list! We'll be in touch when we launch."
      );
      (e.target as HTMLFormElement).reset();
      setTimeout(() => setWaitlistMessage(null), 5000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Nav />

      {/* ===== TICKER BAR ===== */}
      <div className="bg-bg-dark border-b border-border overflow-hidden">
        <div className="flex whitespace-nowrap animate-scroll">
          {[
            "Results in 3–5 Days",
            "100+ Biomarkers Tested",
            "Quest Diagnostics Network",
            "$365 / Year — All Inclusive",
            "2,000+ Lab Locations",
            "No Insurance Required",
            "Results in 3–5 Days",
            "100+ Biomarkers Tested",
            "Quest Diagnostics Network",
            "$365 / Year — All Inclusive",
            "2,000+ Lab Locations",
            "No Insurance Required",
          ].map((item, idx) => (
            <div
              key={idx}
              className="px-6 py-3 flex items-center gap-3 text-sm text-gray-400 flex-shrink-0"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 bg-gray-600 rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* ===== PAGE HERO ===== */}
      <section className="bg-bg-dark pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center fade-up">
          <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-6">
            Membership
          </p>
          <h1 className="font-heading font-extrabold text-fluid-section text-white mb-8 leading-tight">
            One price.<br />
            Complete clarity.
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            No per-test fees. No insurance paperwork. No surprise bills. One
            annual membership covers everything.
          </p>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-up">
            {/* DTC Annual - Featured */}
            <div className="bg-bg-card border-2 border-teal-border rounded-xl p-8 flex flex-col card-hover card-glow delay-1">
              <div className="mb-6">
                <span className="inline-block bg-teal text-pure-white text-xs font-bold rounded-full px-3 py-1">
                  Most Popular
                </span>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">Annual Membership</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading font-extrabold text-5xl text-white">
                    $365
                  </span>
                  <span className="text-lg text-gray-400">/year</span>
                </div>
                <p className="text-gray-400 text-sm">
                  That's less than $1/day for a complete annual picture of your
                  health.
                </p>
              </div>

              <div className="border-t border-border mb-6"></div>

              <ul className="mb-8 flex-grow space-y-4">
                {[
                  {
                    label: "100+ biomarkers",
                    desc: "comprehensive annual panel covering every major organ system",
                  },
                  {
                    label: "Quest Diagnostics",
                    desc: "schedule at any of 2,000+ locations nationwide",
                  },
                  {
                    label: "Physician-reviewed results",
                    desc: "not just lab ranges, but clinical context",
                  },
                  {
                    label: "Personalized action plan",
                    desc: "what to address, track, and follow up on",
                  },
                  {
                    label: "Member dashboard",
                    desc: "your results, trends, and history in one place",
                  },
                  {
                    label: "Plain-language explanations",
                    desc: "understand every result, not just the numbers",
                  },
                  {
                    label: "Critical value monitoring",
                    desc:
                      "physician-designed escalation if anything urgent appears",
                  },
                  {
                    label: "Year-over-year trending",
                    desc: "your data stays with you, building over time",
                  },
                  {
                    label: "HIPAA-secure platform",
                    desc: "your health data is private and protected",
                  },
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-teal font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      <strong>{feature.label}</strong> — {feature.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="bg-teal hover:border-teal-border text-pure-white w-full py-3 rounded-xl font-semibold text-center transition btn-primary"
              >
                Join the Waitlist
              </Link>
            </div>

            {/* Practice / B2B */}
            <div className="bg-bg-card border border-border rounded-xl p-8 flex flex-col card-hover card-glow delay-2">
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">
                  Practice Partner Access
                </p>
                <div className="font-heading font-extrabold text-3xl text-white">
                  Partner
                </div>
              </div>

              <p className="text-gray-400 text-sm mb-6">
                For practice and wellness clinic partners. Offer your clients
                comprehensive health testing as a natural extension of your
                services.
              </p>

              <div className="border-t border-border mb-6"></div>

              <ul className="mb-8 flex-grow space-y-4">
                {[
                  "Everything in the Annual Membership for your clients",
                  {
                    label: "Wholesale pricing",
                    desc: "bulk rates for partner locations",
                  },
                  {
                    label: "White-glove onboarding",
                    desc: "staff training and enrollment support",
                  },
                  {
                    label: "Referral and enrollment tools",
                    desc: "easy client sign-up flow for your front desk",
                  },
                  {
                    label: "Clinical protocol coordination",
                    desc:
                      "works alongside your existing practice services",
                  },
                  "Co-branded client materials",
                  "Dedicated partner support",
                ].map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-teal font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>
                      {typeof feature === "string" ? (
                        feature
                      ) : (
                        <>
                          <strong>{feature.label}</strong> — {feature.desc}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/for-providers"
                className="border border-border text-gray-300 hover:border-teal hover:text-teal w-full py-3 rounded-xl font-semibold text-center transition btn-secondary"
              >
                Contact Us for Partner Pricing
              </Link>
            </div>
          </div>

          {/* Value Callout */}
          <div className="mt-8 bg-bg-card border border-border rounded-xl p-8 flex gap-6 items-start card-hover card-glow fade-up">
            <div className="text-3xl flex-shrink-0">💡</div>
            <div>
              <h4 className="font-heading font-bold text-lg text-white mb-2">
                How is $365 possible?
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We partner directly with Quest Diagnostics at volume rates.
                Because we order comprehensive panels in bulk, we access lab
                pricing that individual patients simply can't. Your $365
                membership covers what would otherwise cost $1,500–$3,000+ if
                ordered à la carte through your doctor's office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-bg-dark border-t border-border"></div>

      {/* ===== WHAT'S INCLUDED DETAIL ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">
              Everything Included
            </p>
            <h2 className="font-heading font-extrabold text-fluid-section text-white mb-4">
              More than just labs.
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Your membership is an annual health system — not a one-time test.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {[
              {
                emoji: "🔬",
                title: "The Panel",
                desc: "100+ biomarkers across 11 organ systems, drawn once a year at any Quest Diagnostics location. Processed by CLIA-certified labs.",
              },
              {
                emoji: "📊",
                title: "Your Dashboard",
                desc: "Every result organized, explained, and tracked year over year. See trends. Share with your doctor. Download your full report.",
              },
              {
                emoji: "👨‍⚕️",
                title: "Physician Review",
                desc: "Results reviewed through a clinical lens — not just lab ranges. Flagged findings, contextual notes, and a personalized action plan.",
              },
              {
                emoji: "🚨",
                title: "Critical Value Protocol",
                desc: "If anything requires immediate attention, our physician-designed escalation system ensures you're notified and supported — not left to figure it out alone.",
              },
              {
                emoji: "📈",
                title: "Longitudinal Tracking",
                desc: "Your data builds year over year. A single data point tells you where you are. Years of data tell you where you're going.",
              },
              {
                emoji: "🔒",
                title: "Privacy & Security",
                desc: "HIPAA-compliant platform with bank-grade encryption. Your health data is yours — we never sell it, share it, or use it for advertising.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border rounded-xl p-8 text-center card-hover card-glow delay-{idx % 3}"
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

      <div className="bg-bg-dark border-t border-border"></div>

      {/* ===== FAQ ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">
              FAQ
            </p>
            <h2 className="font-heading font-extrabold text-fluid-section text-white">
              Common questions.
            </h2>
          </div>

          <div className="space-y-4 fade-up">
            {[
              {
                question: "Does insurance cover this?",
                answer:
                  "Briella Health is a cash-pay membership — we do not bill insurance. This is intentional: it keeps costs low, eliminates claim denials, and means you get the full comprehensive panel we recommend rather than what insurance approves. Many members use FSA or HSA funds to pay for their membership.",
              },
              {
                question: "Can I use my HSA or FSA?",
                answer:
                  "In most cases, yes. Lab testing is generally an eligible HSA/FSA expense. We recommend confirming with your plan administrator, but most members are able to use pre-tax health dollars for their Briella Health membership.",
              },
              {
                question: "Do I need a doctor's order to get tested?",
                answer:
                  "No. Briella Health is a physician-ordered service — your membership includes physician authorization for testing through our affiliated medical practice. You don't need to see your own doctor first.",
              },
              {
                question: "What if something looks abnormal?",
                answer:
                  "Abnormal results are flagged in your dashboard with clear context about what they mean and what next steps may be appropriate. For critical values — results that require immediate medical attention — our physician-designed escalation protocol ensures you are contacted promptly. For non-urgent findings, your action plan will guide you on whether and how to follow up with your primary care physician.",
              },
              {
                question: "How is this different from my annual physical?",
                answer:
                  "A typical annual physical checks 10–20 biomarkers, often limited to what insurance will cover. Briella Health tests 100+ — including advanced cardiovascular markers, full thyroid panels, hormones, micronutrients, cancer screening markers, and heavy metals that standard physicals never check. It's a fundamentally more comprehensive picture of your health.",
              },
              {
                question: "Can I share my results with my own doctor?",
                answer:
                  "Absolutely — and we encourage it. Your dashboard lets you download a full PDF report of all results to share with any healthcare provider. Briella Health is designed to complement your existing care, not replace it.",
              },
              {
                question: "Is there a commitment or can I cancel?",
                answer:
                  "Membership is annual. You can choose not to renew at the end of your membership year. Your historical data remains accessible even after your membership lapses.",
              },
              {
                question: "Where are you available?",
                answer:
                  "We are launching initially in Texas, leveraging our existing physician infrastructure. We will expand to additional states in 2026–2027. Join the waitlist to be notified when we launch in your area.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-bg-dark/50 transition"
                >
                  <span className="font-semibold text-white">
                    {item.question}
                  </span>
                  <span
                    className={`text-gray-400 transition transform ${
                      expandedFAQ === idx ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <div className="border-t border-border px-6 py-4">
                    <p className="text-gray-400 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center fade-up">
          <div className="bg-bg-card border border-border rounded-xl p-12 card-hover card-glow">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">
              Founding Member Access
            </p>
            <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6 leading-tight">
              Join the waitlist.<br />
              Get priority access.
            </h2>
            <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
              We're launching soon. Founding members get early access, priority
              scheduling, and exclusive pricing locked in for life.
            </p>

            <form onSubmit={handleWaitlist} className="flex gap-3 max-w-sm mx-auto mb-4 flex-col sm:flex-row">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-bg-dark border border-border text-white placeholder-gray-500 focus:outline-none focus:border-teal transition"
              />
              <button
                type="submit"
                className="bg-teal hover:bg-teal-light text-pure-white px-6 py-3 rounded-xl font-semibold transition whitespace-nowrap btn-primary"
              >
                Join the Waitlist
              </button>
            </form>

            {waitlistMessage && (
              <p className="text-teal font-semibold text-center">
                ✓ {waitlistMessage}
              </p>
            )}

            <p className="text-gray-400 text-sm mt-4">
              No spam. No commitment. Just early access when we launch.
            </p>
          </div>
        </div>
      </section>

      {/* ===== FLOATING HELP BUTTON ===== */}
      <button
        onClick={() => setHelpPanelOpen(!helpPanelOpen)}
        className="fixed bottom-7 right-7 w-14 h-14 rounded-full bg-teal hover:bg-teal-light text-pure-white flex items-center justify-center shadow-lg transition z-50"
        aria-label="Chat with us"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Help Panel */}
      {helpPanelOpen && (
        <div className="fixed bottom-24 right-7 w-80 bg-bg-card border border-border rounded-xl p-6 shadow-2xl z-50">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-white">How can we help?</h3>
            <button
              onClick={() => setHelpPanelOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <Link
              href="/how-it-works"
              className="block text-sm text-gray-300 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              How does Briella Health work?
            </Link>
            <Link
              href="/biomarkers"
              className="block text-sm text-gray-300 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              What biomarkers do you test?
            </Link>
            <Link
              href="/membership"
              className="block text-sm text-gray-300 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              What's included in my membership?
            </Link>
            <Link
              href="/signup"
              className="block text-sm text-gray-300 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              Create a new account
            </Link>
            <Link
              href="/login"
              className="block text-sm text-gray-300 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              Log in to my account
            </Link>
          </div>

          <div className="border-t border-border my-4"></div>

          <p className="text-xs text-gray-500 text-center mb-3">
            Still have a question?
          </p>
          <a
            href="mailto:hello@briellahealth.com"
            className="block w-full bg-teal hover:bg-teal-light text-pure-white text-center text-sm font-semibold py-2 rounded-lg transition"
          >
            Email Us
          </a>
          <p className="text-xs text-gray-500 text-center mt-2">
            We typically respond within 1 business day.
          </p>
        </div>
      )}

      <Footer />

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

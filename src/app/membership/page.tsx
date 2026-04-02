'use client';

import { useState } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Check, Star, MapPin, Shield, BarChart3, Lock } from 'lucide-react';

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

      {/* ===== PAGE HERO ===== */}
      <section className="bg-bg-dark pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center fade-up">
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-8 leading-tight">
            One price.<br />
            Complete clarity.
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
            Everything you need to understand your health at a deeper level. No surprise fees. No insurance headaches. Just comprehensive lab intelligence, interpreted by physicians who care.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-white">
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0" />
              HSA/FSA eligible
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5 text-teal flex-shrink-0" />
              Physician-supervised
            </span>
          </div>
        </div>
      </section>

      {/* ===== PRICING TIERS ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch fade-up">
            {/* Essential */}
            <div className="bg-bg-mid p-10 rounded-2xl border border-border flex flex-col card-hover card-glow delay-1">
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Essential
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-4xl text-white">
                    $249
                  </span>
                  <span className="text-white/60">/year</span>
                </div>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>60+ biomarkers</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Functional ranges (Optimal vs Normal)</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Personalized digital report</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Trend tracking over time</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Access to 2,000+ Quest locations</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="w-full py-4 border-2 border-teal text-teal hover:bg-teal hover:text-pure-white font-bold rounded-xl transition-all"
              >
                Choose Essential
              </Link>
            </div>

            {/* Complete - Featured */}
            <div className="bg-bg-mid p-10 rounded-2xl border-2 border-teal flex flex-col card-hover card-glow delay-2 relative lg:-translate-y-4 shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-teal text-pure-white px-6 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase">
                Most Popular
              </div>

              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Complete
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-4xl text-white">
                    $365
                  </span>
                  <span className="text-white/60">/year</span>
                </div>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                <li className="flex items-start gap-3 text-white font-semibold">
                  <Star className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Everything in Essential</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>100+ biomarkers analyzed</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Full Hormonal + Thyroid panels</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Early detection cancer markers</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Detailed Physician Insights</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Personalized supplement plan</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Priority lab processing</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="w-full py-4 bg-teal hover:bg-teal-light text-pure-white font-bold rounded-xl transition-all shadow-lg"
              >
                Choose Complete
              </Link>
            </div>

            {/* Complete + Consult */}
            <div className="bg-bg-mid p-10 rounded-2xl border border-border flex flex-col card-hover card-glow delay-3">
              <div className="mb-8">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  Complete + Consult
                </h3>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-4xl text-white">
                    $549
                  </span>
                  <span className="text-white/60">/year</span>
                </div>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                <li className="flex items-start gap-3 text-white font-semibold">
                  <Star className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Everything in Complete</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>30-min Physician Consultation</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Custom Health Action Plan</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Integrated follow-up protocol</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Direct messaging with clinical team</span>
                </li>
                <li className="flex items-start gap-3 text-white">
                  <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                  <span>Priority scheduling</span>
                </li>
              </ul>

              <Link
                href="/signup"
                className="w-full py-4 border-2 border-teal text-teal hover:bg-teal hover:text-pure-white font-bold rounded-xl transition-all"
              >
                Choose Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="bg-bg-mid py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-4xl text-white mb-16 text-center">
            Compare our plans
          </h2>

          <div className="overflow-x-auto fade-up">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-6 px-4 font-heading text-lg text-white">Key Features</th>
                  <th className="py-6 px-4 font-heading text-lg text-white text-center">Essential</th>
                  <th className="py-6 px-4 font-heading text-lg text-white text-center bg-bg-dark/40 rounded-t-xl">Complete</th>
                  <th className="py-6 px-4 font-heading text-lg text-white text-center">Consult</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">Biomarkers Tracked</td>
                  <td className="py-6 px-4 text-center text-white">60+</td>
                  <td className="py-6 px-4 text-center font-bold text-white bg-bg-dark/40">100+</td>
                  <td className="py-6 px-4 text-center text-white">100+</td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">Hormonal & Thyroid Panels</td>
                  <td className="py-6 px-4 text-center text-white/40">—</td>
                  <td className="py-6 px-4 text-center bg-bg-dark/40"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">Physician Insights Report</td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center font-bold bg-bg-dark/40"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">Supplement Recommendations</td>
                  <td className="py-6 px-4 text-center text-white/40">—</td>
                  <td className="py-6 px-4 text-center bg-bg-dark/40"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">1:1 Physician Consultation</td>
                  <td className="py-6 px-4 text-center text-white/40">—</td>
                  <td className="py-6 px-4 text-center bg-bg-dark/40 text-white/40">—</td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                </tr>
                <tr>
                  <td className="py-6 px-4 font-semibold text-white">Quest Lab Access</td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center bg-bg-dark/40 rounded-b-xl"><Check className="w-5 h-5 text-teal inline" /></td>
                  <td className="py-6 px-4 text-center"><Check className="w-5 h-5 text-teal inline" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== EVERY MEMBERSHIP INCLUDES ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-white mb-12 text-center">
            Every membership includes
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
            {[
              {
                icon: MapPin,
                title: "Quest Network",
                desc: "2,000+ national locations for easy blood draws.",
              },
              {
                icon: Shield,
                title: "CLIA-Certified",
                desc: "The highest gold standard in clinical laboratory testing.",
              },
              {
                icon: BarChart3,
                title: "Optimal Ranges",
                desc: "We test for peak function, not just absence of disease.",
              },
              {
                icon: Lock,
                title: "HSA/FSA Eligible",
                desc: "Use your pre-tax health savings for all memberships.",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-16 h-16 bg-bg-mid rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-dim transition-colors">
                  <item.icon className="w-8 h-8 text-teal" />
                </div>
                <h4 className="font-heading font-bold text-lg text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-white/70">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-4xl text-white mb-12 text-center">
            Common questions
          </h2>

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
                className="bg-bg-mid p-6 rounded-xl cursor-pointer hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() =>
                    setExpandedFAQ(expandedFAQ === idx ? null : idx)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">
                    {item.question}
                  </span>
                  <span
                    className={`text-white transition transform ${
                      expandedFAQ === idx ? "rotate-180" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-white/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="dark-section px-4 sm:px-6 lg:px-8 py-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 fade-up">
          <h2 className="font-heading font-bold text-4xl text-white mb-6">
            Still have questions? We are here to help.
          </h2>
          <p className="text-lg text-white/80 mb-10">
            Email our clinical team at{" "}
            <a href="mailto:hello@briellahealth.com" className="underline decoration-gold hover:text-gold transition">
              hello@briellahealth.com
            </a>
          </p>
          <Link
            href="/signup"
            className="inline-block bg-warm hover:opacity-90 text-pure-white px-10 py-4 rounded-xl font-bold text-lg transition shadow-lg"
          >
            Get Started
          </Link>
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
              className="text-white/60 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 mb-4">
            <Link
              href="/how-it-works"
              className="block text-sm text-white/80 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              How does Briella Health work?
            </Link>
            <Link
              href="/what-we-test"
              className="block text-sm text-white/80 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              What biomarkers do you test?
            </Link>
            <Link
              href="/membership"
              className="block text-sm text-white/80 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              What's included in my membership?
            </Link>
            <Link
              href="/signup"
              className="block text-sm text-white/80 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              Create a new account
            </Link>
            <Link
              href="/login"
              className="block text-sm text-white/80 hover:text-teal transition p-2 rounded hover:bg-bg-dark/50"
            >
              Log in to my account
            </Link>
          </div>

          <div className="border-t border-border my-4"></div>

          <p className="text-xs text-white/60 text-center mb-3">
            Still have a question?
          </p>
          <a
            href="mailto:hello@briellahealth.com"
            className="block w-full bg-teal hover:bg-teal-light text-pure-white text-center text-sm font-semibold py-2 rounded-lg transition"
          >
            Email Us
          </a>
          <p className="text-xs text-white/60 text-center mt-2">
            We typically respond within 1 business day.
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
}

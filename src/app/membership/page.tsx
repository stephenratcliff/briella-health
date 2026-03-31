import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Membership — Briella Health",
};

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-cream-light flex flex-col">
      <Nav />

      {/* Hero Section */}
      <section className="bg-cream-light pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-terracotta uppercase tracking-wide text-sm font-semibold mb-4">
            Membership
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl text-charcoal mb-6 leading-tight">
            One price. Complete clarity.
          </h1>
          <p className="text-lg sm:text-xl text-warm-gray-dark max-w-2xl mx-auto">
            No per-test fees. No insurance paperwork. No surprise bills. One annual membership covers everything.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Annual Membership Card - Featured */}
          <div className="bg-cream-light border-2 border-terracotta rounded-2xl p-8 shadow-lg flex flex-col">
            <div className="mb-6">
              <span className="inline-block bg-terracotta text-cream-light text-xs font-semibold rounded-full px-3 py-1">
                Most Popular
              </span>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl text-charcoal">$365</span>
                <span className="text-lg text-warm-gray-dark">/year</span>
              </div>
              <p className="text-warm-gray-dark mt-2">
                Less than $1/day for your complete annual picture
              </p>
            </div>

            <ul className="mb-8 flex-grow space-y-3">
              {[
                "100+ biomarkers across 11 organ systems",
                "Quest Diagnostics at 2,000+ locations",
                "Physician-reviewed results",
                "Personalized action plan",
                "Member dashboard with trends",
                "Plain-language explanations",
                "Critical value monitoring",
                "Year-over-year trending",
                "HIPAA-secure platform",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal">
                  <svg
                    className="w-5 h-5 text-olive flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-terracotta text-cream-light w-full py-3 rounded-xl font-semibold hover:bg-terracotta-dark transition">
              Join the Waitlist
            </button>
          </div>

          {/* Practice Partner Access Card */}
          <div className="bg-cream-light border border-sand-light rounded-2xl p-8 flex flex-col">
            <div className="mb-6">
              <span className="font-serif text-4xl text-charcoal">Partner</span>
            </div>

            <ul className="mb-8 flex-grow space-y-3">
              {[
                "Everything in Annual for your clients",
                "Wholesale pricing",
                "White-glove onboarding",
                "Referral & enrollment tools",
                "Clinical protocol coordination",
                "Co-branded materials",
                "Dedicated partner support",
              ].map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-charcoal">
                  <svg
                    className="w-5 h-5 text-olive flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="border border-charcoal text-charcoal w-full py-3 rounded-xl font-semibold hover:bg-charcoal hover:text-cream-light transition">
              Contact Us for Pricing
            </button>
          </div>
        </div>
      </section>

      {/* Value Callout */}
      <section className="bg-sand-light px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto bg-sand-light rounded-2xl p-8">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            How is $365 possible?
          </h2>
          <p className="text-lg text-warm-gray-dark">
            We partner directly with Quest Diagnostics at volume rates. What would cost $1,500–$3,000+ ordered individually, we deliver annually for $365.
          </p>
        </div>
      </section>

      {/* Everything Included Grid */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal text-center mb-12">
            Everything Included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🔬",
                title: "The Panel",
                description: "100+ biomarkers, once yearly",
              },
              {
                emoji: "📊",
                title: "Your Dashboard",
                description: "Results organized, trended",
              },
              {
                emoji: "👨‍⚕️",
                title: "Physician Review",
                description: "Clinical lens, not just ranges",
              },
              {
                emoji: "🚨",
                title: "Critical Value Protocol",
                description: "Escalation if urgent",
              },
              {
                emoji: "📈",
                title: "Longitudinal Tracking",
                description: "Data builds year over year",
              },
              {
                emoji: "🔒",
                title: "Privacy & Security",
                description: "HIPAA-compliant, encrypted",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-cream-light border border-sand-light rounded-xl p-6"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-serif text-xl text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="text-warm-gray-dark">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-cream px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-charcoal text-center mb-12">
            Questions?
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "Does insurance cover this?",
                answer:
                  "No, direct-pay model keeps costs low and eliminates insurance bureaucracy.",
              },
              {
                question: "Can I use HSA/FSA?",
                answer: "Yes, lab testing is eligible for HSA and FSA funds.",
              },
              {
                question: "Do I need a doctor's order?",
                answer:
                  "No, a physician in our network orders the panel for you at no extra cost.",
              },
              {
                question: "What if something is abnormal?",
                answer:
                  "Our critical value protocol ensures physician notification and appropriate follow-up.",
              },
              {
                question: "How is this different from an annual physical?",
                answer:
                  "We measure 100+ biomarkers across 11 organ systems, versus the typical 10-15 tested at a standard physical.",
              },
              {
                question: "Can I share results with my doctor?",
                answer:
                  "Yes, reports are downloadable and easily shareable with any healthcare provider.",
              },
              {
                question: "Any commitment or cancellation policy?",
                answer:
                  "Annual membership with the ability to cancel anytime. No long-term lock-in.",
              },
              {
                question: "Where is this available?",
                answer:
                  "Launching in Texas, with expansion to additional states planned for 2026-2027.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="bg-cream-light rounded-lg border border-sand-light p-4 group cursor-pointer"
              >
                <summary className="font-semibold text-charcoal flex items-center justify-between">
                  {item.question}
                  <span className="text-warm-gray transition group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="text-warm-gray-dark mt-3 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-terracotta text-cream-light py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl sm:text-5xl mb-8">
            Join the waitlist. Get priority access.
          </h2>
          <button className="bg-cream-light text-terracotta px-8 py-3 rounded-xl font-semibold hover:bg-cream transition mb-4 inline-block">
            Join the Waitlist
          </button>
          <p className="text-cream-light/80 text-sm mt-6">
            No spam. No commitment. Just early access.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

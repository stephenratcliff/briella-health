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
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <div className="text-teal uppercase tracking-[0.16em] font-bold text-xs mb-6 fade-up">
            Partner with Briella
          </div>
          <h1 className="font-heading font-extrabold text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-4xl mb-8 fade-up">
            Give your patients the full picture — without the clinical complexity
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed fade-up">
            A white-label functional medicine platform offering 100+ biomarkers, physician-grade insights, and zero infrastructure requirements for your practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 fade-up">
            <a
              href="#partner"
              className="bg-gold hover:bg-gold/90 text-bg-dark px-8 py-4 rounded-xl text-lg font-semibold transition active:scale-95 btn-primary"
            >
              Apply to Partner
            </a>
            <a
              href="#sample-report"
              className="border-2 border-gold text-gold hover:bg-gold/5 px-8 py-4 rounded-xl text-lg font-semibold transition active:scale-95"
            >
              See a Sample Report
            </a>
          </div>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-1/2 -right-24 w-[30rem] h-[30rem] bg-bg-light/40 rounded-full blur-3xl -z-10"></div>
      </section>

      {/* STATS BAR */}
      <section className="bg-bg-mid py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          <div className="flex flex-col gap-1">
            <span className="text-teal font-heading text-4xl font-bold">100+</span>
            <span className="text-white text-sm uppercase tracking-wider font-medium">Biomarkers</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-teal font-heading text-4xl font-bold">$0</span>
            <span className="text-white text-sm uppercase tracking-wider font-medium">Upfront Cost</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-teal font-heading text-4xl font-bold">2,000+</span>
            <span className="text-white text-sm uppercase tracking-wider font-medium">Quest Locations</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-teal font-heading text-4xl font-bold">20%</span>
            <span className="text-white text-sm uppercase tracking-wider font-medium">Revenue Share</span>
          </div>
        </div>
      </section>

      {/* VALUE PROP CARDS */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-dark max-w-7xl mx-auto w-full">
        <div className="text-center mb-16 fade-up">
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
            A new revenue stream.
            <br className="hidden md:block" />
            A better patient experience.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 fade-up">
          {[
            {
              title: "Premium Reports",
              desc: "Editorial-quality lab visualizations that translate complex data into actionable lifestyle interventions.",
              icon: "📄",
            },
            {
              title: "White-Label Ready",
              desc: "Your practice logo, your brand voice, our back-end intelligence. Maintain the primary clinical relationship.",
              icon: "✓",
            },
            {
              title: "Zero Overhead",
              desc: "No equipment to buy, no phlebotomists to hire. We handle the logistics, lab networking, and portal management.",
              icon: "☁",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-bg-mid p-10 rounded-xl flex flex-col gap-6 card-hover card-glow delay-{idx}"
            >
              <div className="w-12 h-12 rounded-full bg-bg-card flex items-center justify-center text-2xl">
                {card.icon}
              </div>
              <div>
                <h3 className="font-heading text-2xl text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed italic">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* THREE STEPS TO LAUNCH */}
      <section className="py-24 bg-bg-dark px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <h2 className="font-heading text-4xl text-center mb-20 text-white fade-up">
          Three steps to launch
        </h2>
        <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 fade-up">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px border-t-2 border-dotted border-teal/40 -z-0"></div>

          {/* Step 1 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-24 h-24 rounded-full bg-bg-card border-2 border-teal flex items-center justify-center mb-6 shadow-sm card-glow delay-1">
              <span className="font-heading text-3xl font-bold text-teal">01</span>
            </div>
            <h4 className="font-heading text-xl text-white mb-2">
              Apply &amp; Onboard
            </h4>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Verify your credentials and set up your custom practice portal in minutes.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-24 h-24 rounded-full bg-bg-card border-2 border-teal flex items-center justify-center mb-6 shadow-sm card-glow delay-2">
              <span className="font-heading text-3xl font-bold text-teal">02</span>
            </div>
            <h4 className="font-heading text-xl text-white mb-2">
              Enroll Patients
            </h4>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Invite patients to order tests directly through your white-labeled interface.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex flex-col items-center text-center flex-1">
            <div className="w-24 h-24 rounded-full bg-bg-card border-2 border-teal flex items-center justify-center mb-6 shadow-sm card-glow delay-3">
              <span className="font-heading text-3xl font-bold text-teal">03</span>
            </div>
            <h4 className="font-heading text-xl text-white mb-2">
              Earn &amp; Grow
            </h4>
            <p className="text-gray-400 text-sm max-w-[200px]">
              Receive revenue share automatically while providing superior health insights.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-dark max-w-5xl mx-auto w-full">
        <div className="bg-bg-mid border-l-8 border-teal p-12 md:p-20 rounded-xl card-glow fade-up">
          <div className="flex flex-col gap-8">
            <div className="text-teal text-5xl">❝</div>
            <p className="font-heading text-3xl md:text-4xl text-white leading-snug italic">
              Briella Health has fundamentally transformed how I serve my longevity patients. The reports provide the quiet authority of a physician's oversight with the beautiful, readable design of a high-end publication. It's the platform the functional medicine space has been waiting for.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-bg-card">
                <img
                  alt="Dr. Michael Torres"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWoDixa_to30etOKpFO5qFcEc_zrEH2XH-STQYqxlMqn2UIDSxWQm83jc8yRF7DE_ZEQAXPxEKsgMDJNhWvSVY5mFzBbv_CjEDZDXrvaXOiejrAdPAMqVoFOlYG98vMFv5PBH2Ku-6uASSh9W9OPI_Vnrb0yxgPvti6bJ9inIM6QnhOKRbDet3V2HQjnbkWdDgya2JZbAChbfGb5q3vMX9PFLBK65sT5ROvIcTUVNyAEbtEJjO5W9iwoQhXsye1HZFc5hwLSg"
                />
              </div>
              <div>
                <p className="font-bold text-white">Dr. Michael Torres, MD</p>
                <p className="text-gray-400 text-sm italic">
                  Director of Longevity, Torres Integrative Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY GRID */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-dark max-w-7xl mx-auto w-full">
        <h2 className="font-heading text-4xl text-center mb-16 text-white fade-up">
          Built for practices that take health seriously
        </h2>
        <div className="grid md:grid-cols-2 gap-px bg-border rounded-xl overflow-hidden fade-up">
          {[
            {
              title: "Physician-Supervised",
              desc: "Every test requisition is reviewed and signed off by our licensed clinical network.",
              icon: "⚕",
            },
            {
              title: "CLIA-Certified Labs",
              desc: "Processing through top-tier diagnostic centers like Quest and Labcorp for clinical accuracy.",
              icon: "🔬",
            },
            {
              title: "HIPAA Compliant",
              desc: "Bank-grade encryption and strict privacy protocols to ensure patient data security.",
              icon: "🔒",
            },
            {
              title: "Functional Medicine Standards",
              desc: "Reference ranges optimized for vitality and longevity, not just the absence of disease.",
              icon: "⭐",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-card p-12 flex items-start gap-6 card-hover delay-{idx}"
            >
              <span className="text-4xl flex-shrink-0">{item.icon}</span>
              <div>
                <h5 className="font-heading text-xl text-white mb-2">
                  {item.title}
                </h5>
                <p className="text-gray-400 text-sm">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / APPLY FORM */}
      <section id="partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-6xl mx-auto fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="uppercase tracking-[0.16em] text-xs font-bold mb-4 text-gold">
                Apply to Partner
              </div>
              <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
                Ready to add lab testing to your practice?
              </h2>
              <p className="text-gray-400 mb-8">
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
                    <span className="text-gold">✓</span>
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
                    className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-border"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-border"
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
                  className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  Practice Name
                </label>
                <input
                  type="text"
                  placeholder="Elite Practice — Austin, TX"
                  className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-teal-border"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                  State
                </label>
                <select className="w-full bg-bg-card border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-border">
                  <option>Texas</option>
                  <option>Pennsylvania</option>
                  <option>North Carolina</option>
                  <option>Other (contact us)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold/90 text-bg-dark px-8 py-3 rounded-xl font-semibold transition btn-primary"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA — DARK SECTION */}
      <section className="dark-section py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 fade-up">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Ready to elevate your practice?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Join the elite network of providers redefining preventative care through lab intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#partner"
                className="bg-teal hover:bg-teal-light text-pure-white px-8 py-3 rounded-lg font-medium transition active:scale-95 btn-primary text-center"
              >
                Apply to Partner
              </a>
              <a
                href="#sample-report"
                className="border border-gray-400 text-pure-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition active:scale-95 text-center"
              >
                Schedule a Demo
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-8 border border-gray-300 rounded-xl bg-white/5 backdrop-blur-sm min-w-[320px] card-glow">
            <div className="flex items-center gap-4">
              <span className="text-teal">✉</span>
              <span className="text-white">partnerships@briellahealth.com</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-teal">☎</span>
              <span className="text-white">+1 (888) BRIELLA</span>
            </div>
            <div className="pt-6 border-t border-gray-300 text-sm opacity-60 text-white">
              <p>Available Mon-Fri, 9am-6pm EST</p>
            </div>
          </div>
        </div>
        {/* Background Decoration */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-warm/10 rounded-full blur-3xl -z-0"></div>
      </section>

      <Footer />
    </div>
  );
}

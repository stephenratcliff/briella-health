'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// export const metadata: Metadata = {
//   title: 'How It Works — Briella Health',
//   description: 'See exactly how Briella Health works — from joining to your first comprehensive lab panel and physician-reviewed results.',
// };

export default function HowItWorks() {
  useScrollReveal();

  return (
    <div className="bg-bg-dark">
      <Nav />

      {/* ===== TICKER BAR ===== */}
      <div className="overflow-hidden border-b border-border bg-bg-dark">
        <div className="flex animate-scroll whitespace-nowrap space-x-8 py-3 px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Results in 3–5 Days <span className="mx-2 text-teal">•</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            100+ Biomarkers Tested <span className="mx-2 text-teal">•</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Quest Diagnostics Network <span className="mx-2 text-teal">•</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            $365 / Year — All Inclusive <span className="mx-2 text-teal">•</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            2,000+ Lab Locations <span className="mx-2 text-teal">•</span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
            No Insurance Required <span className="mx-2 text-teal">•</span>
          </span>
        </div>
      </div>

      {/* ===== PAGE HERO ===== */}
      <section className="bg-bg-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">The Process</p>
          <h1 className="mt-6 font-heading text-fluid-section font-extrabold text-white">
            Simple, thorough,<br />
            physician-supervised.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-300">
            From sign-up to results, every step is designed to be as seamless as possible — without sacrificing clinical rigor.
          </p>
        </div>
      </section>

      {/* ===== PROCESS STEPS ===== */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {/* Step 1 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">1</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Join as a Member</h3>
                <p className="mt-3 text-gray-300">
                  Create your account and select your membership tier. Your annual membership covers your comprehensive panel, physician review, results platform, and year-round access to your data. No surprise fees, no per-test charges.
                </p>
                <p className="mt-3 text-gray-300">
                  After joining, you'll complete a short health intake so your results can be contextualized meaningfully — not just against lab reference ranges, but against your personal health history.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    5 minutes to sign up
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    $365/year all-in
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    HIPAA-secure platform
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">2</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Schedule Your Lab Visit</h3>
                <p className="mt-3 text-gray-300">
                  Use your member dashboard to find and book a time at any Quest Diagnostics Patient Service Center near you — there are 2,000+ locations nationwide. Most appointments are available within a few days.
                </p>
                <p className="mt-3 text-gray-300">
                  We'll send you everything you need to know before your appointment: any fasting requirements (most panels require a 10–12 hour fast), what to bring, and what to expect.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    2,000+ Quest locations
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Appointments in days, not weeks
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    10–12 hr fast for most tests
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">3</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Get Your Blood Drawn</h3>
                <p className="mt-3 text-gray-300">
                  Your visit is a simple blood draw — typically 15–20 minutes at the Quest location. A certified phlebotomist collects your samples, which are then processed at Quest's CLIA-certified labs.
                </p>
                <p className="mt-3 text-gray-300">
                  If any result requires immediate attention, our physician-designed critical value protocol ensures you're notified and connected with care — not left waiting to discover a problem on your own.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    15–20 min appointment
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    CLIA-certified processing
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Critical value protocol active
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">4</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Results in Your Dashboard</h3>
                <p className="mt-3 text-gray-300">
                  Within 3–5 business days, your complete results are available in your member portal. Every biomarker is presented with its value, the optimal range, and a plain-language explanation of what it means.
                </p>
                <p className="mt-3 text-gray-300">
                  Results are organized by organ system, so you can quickly understand the full picture of your metabolic health, cardiovascular risk, hormone balance, thyroid function, nutrient status, and more.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Results in 3–5 days
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Plain-language explanations
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Organized by organ system
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">5</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Clinically-Reviewed Insights</h3>
                <p className="mt-3 text-gray-300">
                  This is where Briella Health is fundamentally different. Every result is evaluated not just against standard population reference ranges, but against optimal functional ranges used by leading preventive medicine practitioners — so you see the full picture, not just "normal" vs. "abnormal."
                </p>
                <p className="mt-3 text-gray-300">
                  Your dashboard includes clear next-step guidance: specific findings that warrant follow-up, lifestyle factors to address, and which results to track at your next annual panel. We recommend sharing your results with your primary care physician for personalized medical advice.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Optimal vs. lab reference ranges
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Plain-language explanations
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Clear next-step guidance
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 6 */}
          <div className="animate-fade-up">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal text-bg-dark">
                  <span className="font-heading font-bold text-lg">6</span>
                </div>
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-white">Track Your Health Over Time</h3>
                <p className="mt-3 text-gray-300">
                  Your annual membership keeps your data year over year. The most valuable insight in preventive health isn't a single data point — it's the trend. Watch your biomarkers improve (or catch early warning signs) as you make changes to your diet, exercise, sleep, and supplementation.
                </p>
                <p className="mt-3 text-gray-300">
                  Your membership renews annually, with a new comprehensive panel each year — building a longitudinal health record that becomes more valuable with every passing year.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Longitudinal trend tracking
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Annual re-testing included
                  </span>
                  <span className="inline-block rounded-full border border-border bg-transparent px-3 py-1 text-xs font-medium text-gray-300">
                    Year-over-year comparison
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIVIDER ===== */}
      <div className="mx-auto max-w-6xl border-t border-border"></div>

      {/* ===== ABOUT THE LABS ===== */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center fade-up">
            {/* Left column */}
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Lab Partner</p>
              <h2 className="mt-6 font-heading text-fluid-section font-extrabold text-white">
                Quest Diagnostics.<br />
                The gold standard.
              </h2>
              <p className="mt-6 text-gray-300">
                We partner exclusively with Quest Diagnostics — the nation's largest clinical laboratory network. Quest processes 10+ million tests per week across CLIA-certified labs with the highest standards of accuracy and reliability.
              </p>
              <p className="mt-4 text-gray-300">
                With 2,000+ patient service centers nationwide, there's almost certainly a Quest location within a reasonable distance of where you live or work. No mail-in test kits. No finger pricks. Real venous blood draws processed by real labs.
              </p>

              {/* Checkmarks */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-teal text-lg">✓</span>
                  <p className="text-sm text-gray-300">CLIA-certified labs — the highest standard</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal text-lg">✓</span>
                  <p className="text-sm text-gray-300">2,000+ convenient locations</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal text-lg">✓</span>
                  <p className="text-sm text-gray-300">Results typically in 3–5 business days</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal text-lg">✓</span>
                  <p className="text-sm text-gray-300">No mail-in kits — real phlebotomy</p>
                </div>
              </div>
            </div>

            {/* Right column - Timeline card */}
            <div className="rounded-xl border border-border bg-bg-card p-8 card-hover card-glow">
              <h3 className="text-sm font-semibold text-gray-300">Your typical visit timeline</h3>
              <div className="mt-6 space-y-0 divide-y divide-border">
                <div className="flex gap-5 py-4 first:pt-0">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">Day 0</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Schedule your appointment in your member dashboard. Choose any Quest location.</p>
                  </div>
                </div>
                <div className="flex gap-5 py-4">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">Day 1</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Fast from midnight. Arrive at Quest. Blood draw takes 15–20 minutes.</p>
                  </div>
                </div>
                <div className="flex gap-5 py-4">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">Day 2–3</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">Samples processed at Quest's CLIA lab. Initial results begin returning.</p>
                  </div>
                </div>
                <div className="flex gap-5 py-4">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">Day 3–5</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">All results delivered to your portal. Physician review complete.</p>
                  </div>
                </div>
                <div className="flex gap-5 py-4">
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="text-xs font-bold uppercase tracking-widest text-teal">Day 5+</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-300">You review your dashboard, action plan, and trends. Your health data is yours, forever.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="bg-bg-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">Ready to Get Started?</p>
          <h2 className="mt-6 font-heading text-fluid-section font-extrabold text-white">
            Your most comprehensive<br />
            health panel. Simplified.
          </h2>
          <p className="mt-6 text-gray-300">
            Join the waitlist for founding member access and priority scheduling at launch.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-lg bg-teal px-8 py-3 font-heading font-bold text-white transition-colors hover:bg-teal-light btn-primary"
          >
            Join the Waitlist
          </Link>
          <p className="mt-6 text-xs text-gray-400">
            $365/year · 100+ biomarkers · Physician-reviewed results
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

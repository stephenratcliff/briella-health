'use client';

import { useState } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMouseGlow } from '@/hooks/useMouseGlow';

export default function Home() {
  useScrollReveal();
  useMouseGlow();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const biomarkerCategories = [
    { emoji: '❤️', name: 'Heart & Cardiovascular', count: 18 },
    { emoji: '⚡', name: 'Hormones & Metabolism', count: 22 },
    { emoji: '🛡️', name: 'Immune & Inflammation', count: 14 },
    { emoji: '🦋', name: 'Thyroid Function', count: 8 },
    { emoji: '✨', name: 'Nutrients & Vitamins', count: 16 },
    { emoji: '📊', name: '6 more categories', count: '25+' },
  ];

  const stats = [
    { number: '100+', label: 'Biomarkers tested annually' },
    { number: '$365', label: 'Per year — all-inclusive' },
    { number: '2,000+', label: 'Quest lab locations nationwide' },
    { number: '11', label: 'Organ systems covered' },
  ];

  const problemCards = [
    {
      emoji: '🩺',
      title: 'Incomplete Testing',
      description: 'Standard panels miss advanced cardiac markers, full thyroid function, hormones, micronutrients, and early cancer screening markers — the very tests that catch problems early.',
    },
    {
      emoji: '🕐',
      title: 'Reactive, Not Proactive',
      description: 'The conventional model waits for symptoms before testing. But heart disease, metabolic dysfunction, and hormonal decline often progress silently for years.',
    },
    {
      emoji: '💸',
      title: 'Fragmented & Expensive',
      description: 'Ordering comprehensive labs yourself means multiple doctor visits, insurance battles, and bills that can easily exceed $1,500–$3,000+ per year.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Join & Schedule',
      description: 'Create your membership and book a visit at any of 2,000+ Quest Diagnostics locations nationwide — at a time that fits your schedule.',
    },
    {
      number: '2',
      title: 'Get Tested',
      description: 'A simple blood draw at your local Quest lab. Most visits take 15–20 minutes. Samples are processed by CLIA-certified labs.',
    },
    {
      number: '3',
      title: 'Review Your Results',
      description: 'Results delivered to your dashboard in 3–5 days — organized by organ system, explained in plain language, with clear next-step guidance.',
    },
  ];

  const photoStrip = [
    {
      src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=620&fit=crop&q=80',
      alt: 'Health-focused woman',
      label: 'Health Optimizer',
      caption: 'Tracking performance, inside and out.',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=620&fit=crop&q=80',
      alt: 'Man focused on health and longevity',
      label: 'Longevity-Focused',
      caption: 'Building a foundation for the long game.',
    },
    {
      src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=620&fit=crop&q=80',
      alt: 'Professional woman',
      label: 'Busy Professional',
      caption: 'One blood draw. Complete picture.',
    },
    {
      src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=620&fit=crop&q=80',
      alt: 'Active lifestyle',
      label: 'Active & Aware',
      caption: "Know what's driving your results.",
    },
  ];

  const fullBiomarkerCategories = [
    { emoji: '❤️', name: 'Heart & Cardiovascular', count: '18 biomarkers', description: 'Lipids, ApoB, Lp(a), hsCRP, homocysteine, and advanced cardiac risk markers.' },
    { emoji: '⚡', name: 'Hormones & Metabolism', count: '22 biomarkers', description: 'Testosterone, estrogen, cortisol, insulin, HbA1c, fasting glucose, and more.' },
    { emoji: '🦋', name: 'Thyroid', count: '8 biomarkers', description: 'TSH, Free T3, Free T4, Reverse T3, TPO antibodies — full thyroid function.' },
    { emoji: '✨', name: 'Nutrients & Vitamins', count: '16 biomarkers', description: 'Vitamin D, B12, folate, iron panel, magnesium, zinc, omega-3 index.' },
    { emoji: '🛡️', name: 'Immune & Inflammation', count: '14 biomarkers', description: 'hsCRP, ESR, ferritin, CBC with differential, autoimmune markers.' },
    { emoji: '🫁', name: 'Liver & Kidney', count: '12 biomarkers', description: 'Comprehensive metabolic panel, GFR, liver enzymes, bilirubin, uric acid.' },
    { emoji: '🩸', name: 'Blood & Hematology', count: '10 biomarkers', description: 'CBC, red and white blood cell analysis, platelet function, anemia markers.' },
    { emoji: '🔬', name: 'Cancer Screening Markers', count: '8 biomarkers', description: 'PSA, CA-125, CEA, AFP — early-warning markers for proactive screening.' },
  ];

  const comparisonRows = [
    { feature: 'Biomarkers tested', briella: '100+', typical: '10–20', dtc: '50–100' },
    { feature: 'Lab network', briella: 'Quest Diagnostics (2,000+ locations)', typical: 'Varies', dtc: 'Varies' },
    { feature: 'Results dashboard', briella: '✓ Plain-language insights', typical: '✗ PDF only', dtc: '✓' },
    { feature: 'Year-over-year tracking', briella: '✓ Longitudinal trends', typical: '✗', dtc: '✓ Some' },
    { feature: 'Insurance required', briella: '✓ No insurance needed', typical: 'Yes', dtc: 'No' },
    { feature: 'Annual cost', briella: '$365/year', typical: '$0–$500+ (with insurance)', dtc: '$199–$499/year' },
    { feature: 'HSA / FSA eligible', briella: '✓', typical: '✓', dtc: '✓ Most' },
  ];

  const platformFeatures = [
    { emoji: '📊', title: 'Personal Dashboard', description: 'Every result organized by organ system, with clear explanations and optimal vs. standard reference ranges — not just raw numbers.' },
    { emoji: '📈', title: 'Longitudinal Tracking', description: 'Your data builds year over year. A single snapshot tells you where you are. Years of data tell you where you\'re heading.' },
    { emoji: '🚨', title: 'Critical Value Alerts', description: 'If any result requires urgent attention, our clinical escalation protocol ensures you\'re notified promptly — not left to discover a problem on your own.' },
    { emoji: '📱', title: 'Share with Your Doctor', description: 'Download a full PDF report to share with any healthcare provider. We\'re designed to complement your existing care — not replace it.' },
    { emoji: '🔒', title: 'Privacy & Security', description: 'HIPAA-compliant platform with bank-grade encryption. Your health data is yours — we never sell, share, or use it for advertising.' },
    { emoji: '💳', title: 'HSA / FSA Eligible', description: 'Lab testing is generally an eligible health expense. Most members use pre-tax health dollars. Check with your plan administrator for details.' },
  ];

  const peopleCards = [
    { src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop&q=80', alt: 'Woman running outdoors', title: 'Health Optimizers', description: 'You track your fitness, nutrition, and sleep — but have limited insight into what\'s actually happening inside your body.' },
    { src: 'https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=600&h=400&fit=crop&q=80', alt: 'Parent carrying child on shoulders outdoors', title: 'Family-Focused Adults', description: 'You have people counting on you. Annual comprehensive testing gives you the data to catch problems early — before they become serious.' },
    { src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&h=400&fit=crop&q=80', alt: 'Woman practicing yoga', title: 'Longevity-Minded', description: 'You\'ve read the research. You understand that early detection and longitudinal data are the foundation of preventive health.' },
    { src: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=600&h=400&fit=crop&q=80', alt: 'Professional woman working at laptop', title: 'Busy Professionals', description: 'You don\'t have time for multiple doctor visits and insurance paperwork. One membership, one blood draw, complete picture.' },
    { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=400&fit=crop&q=80', alt: 'Woman looking thoughtful', title: 'Frustrated Patients', description: 'Your doctor says everything looks "normal" — but you know something\'s off. We test what standard panels miss.' },
    { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop&q=80', alt: 'Healthcare professional with modern technology', title: 'Practice & Wellness Partners', description: 'Offer your clients comprehensive health testing as a natural extension of your services. Partner pricing available.' },
  ];

  const faqItems = [
    { question: 'Is Briella Health a medical provider?', answer: 'Briella Health is a healthcare technology company. We are not a laboratory or medical provider. All laboratory services are provided by independent, CLIA-certified laboratories through Quest Diagnostics. We facilitate easy access to comprehensive lab testing on your behalf. If you have questions about your results, we recommend discussing them with your primary care physician or other licensed provider.' },
    { question: 'Does this replace my doctor?', answer: 'No. Briella Health is designed to complement your existing healthcare — not replace it. Your results are yours to share with any healthcare provider. We encourage you to review your results with your primary care physician for personalized medical advice, diagnosis, or treatment.' },
    { question: 'Do I need a doctor\'s order?', answer: 'No. Your membership includes the necessary physician authorization for testing through our affiliated medical practice. You don\'t need to visit your own doctor first.' },
    { question: 'Can I use my HSA or FSA?', answer: 'Lab testing is generally an eligible HSA/FSA expense. We recommend confirming with your plan administrator. Please note that HSA/FSA eligibility, contribution amounts, and provisions may change annually and differ between plans.' },
    { question: 'How is $365 possible for 100+ tests?', answer: 'We partner directly with Quest Diagnostics at volume rates. Because we order comprehensive panels in bulk, we access pricing that individual patients cannot. Your $365 membership covers what would otherwise cost $1,500–$3,000+ if ordered individually through a doctor\'s office.' },
    { question: 'Where is this available?', answer: 'We are launching initially in Texas, with expansion to additional states planned for 2026–2027. Quest Diagnostics has 2,000+ locations nationwide, which will support our expansion. Join the waitlist to be notified when we launch in your area.' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark">
      <Nav />

      {/* Ticker Bar */}
      <div className="bg-teal overflow-hidden py-2.5 sticky top-[70px] z-40">
        <div className="ticker-track flex whitespace-nowrap">
          {[0, 1].map((i) => (
            <div key={i} className="flex items-center gap-6 shrink-0 pr-6">
              {['100+ Biomarkers Tested', 'Quest Diagnostics Network', '$365/Year — All Inclusive', 'No Insurance Required', 'Results in 3–5 Days', '2,000+ Lab Locations'].map((text) => (
                <span key={`${i}-${text}`} className="flex items-center gap-6">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{text}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1">
        {/* ===== HERO ===== */}
        <section className="bg-bg-dark relative pt-20 pb-24">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
              {/* Left */}
              <div className="flex flex-col gap-8">
                <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold">Comprehensive Health Testing</p>
                <h1 className="font-heading font-extrabold text-fluid-hero tracking-tight leading-[1.08]">
                  <span className="text-white">Know every number</span><br />
                  <em className="text-teal not-italic">that matters.</em>
                </h1>
                <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                  100+ biomarkers tested annually through Quest Diagnostics. Clear results. Actionable insights. One membership covers everything — for less than $1 a day.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link href="/signup" className="btn-primary bg-teal text-white uppercase font-bold px-8 py-4 rounded-md hover:bg-teal-light text-center text-sm tracking-wide">
                    Join the Waitlist
                  </Link>
                  <Link href="/how-it-works" className="btn-secondary border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal text-center text-sm tracking-wide">
                    How It Works
                  </Link>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-4 pt-7 border-t border-border">
                  {[
                    { bold: '100+', sub: 'biomarkers' },
                    { bold: 'Quest', sub: 'Diagnostics labs' },
                    { bold: '$365', sub: '/year' },
                    { bold: 'All 50', sub: 'states*' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-white font-bold text-sm">{item.bold}</span>
                      <span className="text-gray-400 text-xs">{item.sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Biomarker Card */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="card-hover card-glow bg-bg-card border border-border-strong rounded-[20px] p-7 shadow-[0_2px_4px_rgba(0,0,0,0.5),0_12px_40px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-xs font-bold uppercase">Your Annual Panel</span>
                    <span className="bg-teal-dim border border-border-teal rounded-full px-3 py-1 text-xs font-bold text-teal">100+ tests</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    {biomarkerCategories.map((cat) => (
                      <div key={cat.name} className="bg-bg-dark border border-border rounded-md px-3.5 py-2.5 hover:border-teal transition-colors flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded flex items-center justify-center bg-teal-dim">
                            <span className="text-sm">{cat.emoji}</span>
                          </div>
                          <span className="text-white text-sm font-medium">{cat.name}</span>
                        </div>
                        <span className="bg-teal-dim border border-border-teal text-teal rounded-full px-2 py-0.5 text-xs font-bold">{cat.count}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-gray-400 text-xs text-center">Includes metabolic panels, lipids, hormones, nutrients, immune markers, and more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STAT BAR ===== */}
        <section className="bg-bg-card border-y border-border py-10">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center py-4 px-4">
                  <p className="font-heading text-3xl md:text-4xl font-extrabold text-white">{stat.number}</p>
                  <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== THE PROBLEM ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">The Problem</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                Your annual physical<br /><em className="text-teal not-italic">isn&apos;t enough.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Most annual physicals check 10–20 biomarkers — limited to what insurance approves, not what matters. By the time something shows up, the window for early action may have already closed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemCards.map((card, idx) => (
                <div key={card.title} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-8 text-center delay-${idx + 1}`}>
                  <div className="text-4xl mb-4">{card.emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== HOW IT WORKS ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Simple by Design</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                From sign-up to insights<br /><em className="text-teal not-italic">in three steps.</em>
              </h2>
              <p className="text-gray-300 text-lg">We handle the complexity. You get clarity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={step.number} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-8 delay-${idx + 1}`}>
                  <div className="w-[42px] h-[42px] bg-teal-dim border border-border-teal rounded-[10px] flex items-center justify-center font-heading font-extrabold text-teal mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/how-it-works" className="inline-flex items-center gap-2 text-teal hover:text-teal-light font-bold transition-colors">
                See the Full Process →
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== LIFESTYLE PHOTO STRIP ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">For Every Body</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white">
                People who take<br /><em className="text-teal not-italic">their health seriously.</em>
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {photoStrip.map((photo) => (
                <div key={photo.label} className="relative rounded-xl overflow-hidden aspect-[4/5] group">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.style.background = 'linear-gradient(135deg, #2C2420 0%, #6B8B6F 100%)';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-white font-heading font-bold text-sm mb-1">{photo.label}</p>
                    <p className="text-gray-300 text-xs">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== BIOMARKER CATEGORIES (Full 8-card grid) ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Comprehensive Coverage</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                What others skip,<br /><em className="text-teal not-italic">we test.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your panel covers 11 organ systems and 100+ biomarkers — including advanced markers most annual physicals never check.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fullBiomarkerCategories.map((cat, idx) => (
                <div key={cat.name} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-6 delay-${(idx % 6) + 1}`}>
                  <div className="text-3xl mb-4">{cat.emoji}</div>
                  <h4 className="font-heading font-bold text-white text-base mb-2">{cat.name}</h4>
                  <p className="bg-teal-dim border border-border-teal text-teal rounded-full px-2.5 py-0.5 text-xs font-bold inline-block mb-3">{cat.count}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{cat.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link href="/what-we-test" className="btn-secondary inline-flex items-center gap-2 border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal text-sm tracking-wide">
                View Full Biomarker List →
              </Link>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== VALUE COMPARISON ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Value</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                $365/year for what would cost<br /><em className="text-teal not-italic">$1,500–$3,000+ elsewhere.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                We partner directly with Quest Diagnostics at volume rates. One membership. No hidden fees. No insurance required.
              </p>
            </div>

            {/* Savings Visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              <div className="card-hover card-glow bg-bg-card border border-border rounded-xl p-8 text-center">
                <h4 className="text-gray-400 text-sm font-bold uppercase mb-4">Ordering through your doctor</h4>
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">$1,500–$3,000<span className="text-xl text-gray-400">+</span></div>
                <p className="text-gray-400 text-sm leading-relaxed">Multiple office visits, insurance pre-approvals, copays, limited biomarker coverage, and weeks of waiting.</p>
              </div>
              <div className="card-hover card-glow bg-bg-card border-2 border-teal rounded-xl p-8 text-center relative">
                <span className="bg-teal text-white text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 absolute -top-3 left-1/2 -translate-x-1/2">Briella Health</span>
                <h4 className="text-teal text-sm font-bold uppercase mb-4 mt-2">All-inclusive membership</h4>
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">$365<span className="text-xl text-gray-400">/yr</span></div>
                <p className="text-gray-400 text-sm leading-relaxed">100+ biomarkers, Quest Diagnostics, results in days, dashboard access, year-over-year tracking — everything included.</p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-bg-card">
                    <th className="px-6 py-4 text-gray-400 text-xs font-bold uppercase">Feature</th>
                    <th className="px-6 py-4 text-teal text-xs font-bold uppercase">Briella Health</th>
                    <th className="px-6 py-4 text-gray-400 text-xs font-bold uppercase">Typical Annual Physical</th>
                    <th className="px-6 py-4 text-gray-400 text-xs font-bold uppercase">Other DTC Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-b-0 hover:bg-bg-card/50 transition-colors">
                      <td className="px-6 py-4 text-white text-sm font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-teal text-sm font-semibold">{row.briella}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{row.typical}</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">{row.dtc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== PLATFORM FEATURES ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Your Health Platform</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                More than lab results.<br /><em className="text-teal not-italic">A complete health system.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your membership includes the tools to understand, track, and act on your health data year after year.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platformFeatures.map((feature, idx) => (
                <div key={feature.title} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-8 text-center delay-${(idx % 3) + 1}`}>
                  <div className="text-3xl mb-4">{feature.emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== WHO IT'S FOR ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Who It&apos;s For</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white">
                Built for people who take<br /><em className="text-teal not-italic">their health seriously.</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {peopleCards.map((person, idx) => (
                <div key={person.title} className={`card-hover card-glow bg-bg-card border border-border rounded-xl overflow-hidden delay-${(idx % 6) + 1}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={person.src}
                      alt={person.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.style.background = 'linear-gradient(135deg, #2C2420 0%, #6B8B6F 100%)';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading font-bold text-white text-base mb-2">{person.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== FAQ ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Questions</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white">Common questions.</h2>
            </div>
            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <div key={i} className="card-hover card-glow bg-bg-card border border-border rounded-xl overflow-hidden transition-all">
                  <button
                    className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className="text-white font-semibold text-sm">{item.question}</span>
                    <span className={`text-teal text-xl shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/membership" className="btn-secondary inline-flex items-center gap-2 border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal text-sm tracking-wide">
                See All FAQs →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== B2B SPLIT SECTION ===== */}
        <section className="bg-bg-card border-y border-border py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Two Ways to Access Briella Health</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                Built for patients.<br /><em className="text-teal not-italic">Designed for providers.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re taking control of your own health or you run a practice serving health-conscious clients — Briella Health has a platform built for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* For Patients */}
              <div className="card-hover card-glow bg-bg-dark border border-border rounded-xl p-9 delay-1">
                <div className="text-3xl mb-4">🧬</div>
                <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-2">For Patients</p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Own your biology</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Order your comprehensive panel, visit any Quest location nationwide, and log in to see your results, track trends over time, and understand what every number means — in plain language.
                </p>
                <Link href="/membership" className="btn-primary inline-flex bg-teal text-white uppercase font-bold px-6 py-3 rounded-md hover:bg-teal-light text-sm tracking-wide">
                  See Membership Plans
                </Link>
              </div>
              {/* For Providers */}
              <div className="card-hover card-glow bg-bg-dark border border-teal-border rounded-xl p-9 delay-2">
                <div className="text-3xl mb-4">🏥</div>
                <p className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-2">For Providers & Practices</p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Elevate your practice</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Offer physician-ordered comprehensive lab testing under your brand. Your clients get Briella Health&apos;s full platform — you get a branded dashboard, lab visibility for every patient, and a new revenue stream.
                </p>
                <Link href="/for-providers" className="btn-secondary inline-flex border border-teal text-teal uppercase font-bold px-6 py-3 rounded-md hover:bg-teal hover:text-white text-sm tracking-wide">
                  Learn About Partnership
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SIGNUP CTA ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal/10 via-bg-card to-bg-card border border-teal-border rounded-2xl p-12 md:p-16 text-center">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">Now Enrolling</p>
              <h2 className="font-heading font-extrabold text-fluid-hero text-white mb-6">
                Be among the first<br />to know your numbers.
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join as a founding member — early access, priority scheduling, and exclusive founding pricing when we launch in Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/signup" className="btn-primary bg-teal text-white uppercase font-bold px-8 py-4 rounded-md hover:bg-teal-light text-sm tracking-wide">
                  Create My Account
                </Link>
                <Link href="/what-we-test" className="btn-secondary border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal text-sm tracking-wide">
                  See What We Test
                </Link>
              </div>
              <p className="text-gray-400 text-xs">$365/year · 100+ biomarkers · HSA/FSA eligible · No insurance required</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

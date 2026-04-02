'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useMouseGlow } from '@/hooks/useMouseGlow';

/* ── Animated Counter Hook ── */
function useCountUp(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration, startOnView]);

  return { count, ref };
}

export default function Home() {
  useScrollReveal();
  useMouseGlow();

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Animated counters for hero stats
  const biomarkerCount = useCountUp(100, 2000);
  const labCount = useCountUp(2000, 2500);
  const costCount = useCountUp(365, 1800);

  const biomarkerCategories = [
    { emoji: '❤️', name: 'Heart & Cardiovascular', count: 18 },
    { emoji: '⚡', name: 'Hormones & Metabolism', count: 22 },
    { emoji: '🛡️', name: 'Immune & Inflammation', count: 14 },
    { emoji: '🦋', name: 'Thyroid Function', count: 8 },
    { emoji: '✨', name: 'Nutrients & Vitamins', count: 16 },
    { emoji: '📊', name: '6 more categories', count: '25+' },
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
    { number: '1', title: 'Join & Schedule', description: 'Create your membership and book a visit at any of 2,000+ Quest Diagnostics locations nationwide — at a time that fits your schedule.' },
    { number: '2', title: 'Get Tested', description: 'A simple blood draw at your local Quest lab. Most visits take 15–20 minutes. Samples are processed by CLIA-certified labs.' },
    { number: '3', title: 'Review Your Results', description: 'Results delivered to your dashboard in 3–5 days — organized by organ system, explained in plain language, with clear next-step guidance.' },
  ];

  const photoStrip = [
    { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=620&fit=crop&q=80', alt: 'Health-focused woman', label: 'Health Optimizer', caption: 'Tracking performance, inside and out.' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=620&fit=crop&q=80', alt: 'Man focused on health and longevity', label: 'Longevity-Focused', caption: 'Building a foundation for the long game.' },
    { src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500&h=620&fit=crop&q=80', alt: 'Professional woman', label: 'Busy Professional', caption: 'One blood draw. Complete picture.' },
    { src: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=500&h=620&fit=crop&q=80', alt: 'Active lifestyle', label: 'Active & Aware', caption: "Know what's driving your results." },
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
                  <span className="text-pure-white text-xs font-bold uppercase tracking-wider">{text}</span>
                  <span className="w-1 h-1 bg-white/40 rounded-full shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1">
        {/* ===== FULL-BLEED HERO ===== */}
        <section className="hero-image-section relative min-h-[85vh] flex items-end">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1920&h=1080&fit=crop&q=80&crop=center"
            alt="Active healthy lifestyle"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420]/90 via-[#2C2420]/40 to-transparent" />

          {/* Hero Content — positioned at bottom like Function Health */}
          <div className="relative z-10 w-full pb-16 pt-40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* HSA Badge */}
              <div className="mb-6">
                <span className="inline-flex items-center bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-xs font-bold text-white/90 uppercase tracking-wider">
                  HSA/FSA Eligible
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading font-extrabold text-[clamp(2.5rem,6vw+1rem,4.5rem)] leading-[1.05] tracking-tight text-[#F5EDE3] max-w-3xl mb-6">
                Check your health.<br />
                <em className="not-italic" style={{ fontStyle: 'italic' }}>Every year.</em>
              </h1>

              <p className="text-[#F5EDE3]/80 text-lg max-w-xl leading-relaxed mb-8">
                Starting with 100+ lab tests detecting 1000+ conditions. Just $365 per year — $1 per day.
              </p>

              <Link href="/signup" className="btn-primary inline-flex bg-teal text-pure-white uppercase font-bold px-8 py-4 rounded-lg hover:bg-teal-light text-sm tracking-wide">
                Start testing
              </Link>

              {/* Animated Stats Bar */}
              <div className="flex flex-wrap gap-0 mt-14 border-t border-white/15 pt-8">
                <div className="pr-8 mr-8 border-r border-white/15">
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-[#F5EDE3]">
                    <span ref={biomarkerCount.ref}>{biomarkerCount.count}</span>+
                  </p>
                  <p className="text-[#F5EDE3]/60 text-sm mt-1">lab tests</p>
                  <p className="text-[#F5EDE3]/40 text-xs">Total each year</p>
                </div>
                <div className="pr-8 mr-8 border-r border-white/15">
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-[#F5EDE3]">Whole body</p>
                  <p className="text-[#F5EDE3]/60 text-sm mt-1">Tested 2x per year</p>
                </div>
                <div>
                  <p className="font-heading font-extrabold text-3xl md:text-4xl text-[#F5EDE3]">
                    $<span ref={costCount.ref}>{costCount.count}</span>
                  </p>
                  <p className="text-[#F5EDE3]/60 text-sm mt-1">per year</p>
                  <p className="text-[#F5EDE3]/40 text-xs">$1 per day</p>
                </div>
              </div>
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
              <p className="text-gray-400 text-lg leading-relaxed">
                Most annual physicals check 10–20 biomarkers — limited to what insurance approves, not what matters. By the time something shows up, the window for early action may have already closed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemCards.map((card, idx) => (
                <div key={card.title} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-8 text-center delay-${idx + 1}`}>
                  <div className="text-4xl mb-4">{card.emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{card.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{card.description}</p>
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
              <p className="text-gray-400 text-lg">We handle the complexity. You get clarity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step, idx) => (
                <div key={step.number} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-8 delay-${idx + 1}`}>
                  <div className="w-[42px] h-[42px] bg-teal-dim border border-border-teal rounded-[10px] flex items-center justify-center font-heading font-extrabold text-teal mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
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
                    <p className="text-[#F5EDE3] font-heading font-bold text-sm mb-1">{photo.label}</p>
                    <p className="text-[#F5EDE3]/70 text-xs">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== BIOMARKER CATEGORIES ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Comprehensive Coverage</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                What others skip,<br /><em className="text-teal not-italic">we test.</em>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your panel covers 11 organ systems and 100+ biomarkers — including advanced markers most annual physicals never check.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fullBiomarkerCategories.map((cat, idx) => (
                <div key={cat.name} className={`card-hover card-glow bg-bg-card border border-border rounded-xl p-6 delay-${(idx % 6) + 1}`}>
                  <div className="text-3xl mb-4">{cat.emoji}</div>
                  <h4 className="font-heading font-bold text-white text-base mb-2">{cat.name}</h4>
                  <p className="bg-teal-dim border border-border-teal text-teal rounded-full px-2.5 py-0.5 text-xs font-bold inline-block mb-3">{cat.count}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{cat.description}</p>
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
              <p className="text-gray-400 text-lg leading-relaxed">
                We partner directly with Quest Diagnostics at volume rates. One membership. No hidden fees. No insurance required.
              </p>
            </div>

            {/* Savings Visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              <div className="card-hover card-glow bg-bg-card border border-border rounded-xl p-8 text-center">
                <h4 className="text-gray-500 text-sm font-bold uppercase mb-4">Ordering through your doctor</h4>
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">$1,500–$3,000<span className="text-xl text-gray-500">+</span></div>
                <p className="text-gray-500 text-sm leading-relaxed">Multiple office visits, insurance pre-approvals, copays, limited biomarker coverage, and weeks of waiting.</p>
              </div>
              <div className="card-hover card-glow bg-bg-card border-2 border-teal rounded-xl p-8 text-center relative">
                <span className="bg-teal text-pure-white text-xs font-bold uppercase tracking-wider rounded-full px-3 py-1 absolute -top-3 left-1/2 -translate-x-1/2">Briella Health</span>
                <h4 className="text-teal text-sm font-bold uppercase mb-4 mt-2">All-inclusive membership</h4>
                <div className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">$365<span className="text-xl text-gray-500">/yr</span></div>
                <p className="text-gray-500 text-sm leading-relaxed">100+ biomarkers, Quest Diagnostics, results in days, dashboard access, year-over-year tracking — everything included.</p>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-border bg-bg-card">
                    <th className="px-6 py-4 text-gray-500 text-xs font-bold uppercase">Feature</th>
                    <th className="px-6 py-4 text-teal text-xs font-bold uppercase">Briella Health</th>
                    <th className="px-6 py-4 text-gray-500 text-xs font-bold uppercase">Typical Annual Physical</th>
                    <th className="px-6 py-4 text-gray-500 text-xs font-bold uppercase">Other DTC Platforms</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-border last:border-b-0 hover:bg-bg-card/50 transition-colors">
                      <td className="px-6 py-4 text-white text-sm font-medium">{row.feature}</td>
                      <td className="px-6 py-4 text-teal text-sm font-semibold">{row.briella}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.typical}</td>
                      <td className="px-6 py-4 text-gray-500 text-sm">{row.dtc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== THE BRIELLA DIFFERENCE — Range Visualization ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <div className="lg:col-span-5">
                <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">The Methodology</p>
                <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6 leading-tight">
                  Standard ranges vs.<br /><em className="text-teal not-italic">functional optimal.</em>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-4">
                  Standard clinical ranges detect disease after it manifests. Briella uses <em>functional ranges</em> — tighter boundaries that represent peak physiological health.
                </p>
                <p className="text-gray-500 leading-relaxed italic">
                  &ldquo;Standard labs mark both patients as normal. Briella shows you the difference between surviving and thriving.&rdquo;
                </p>
              </div>
              <div className="lg:col-span-7 bg-bg-card border border-border p-8 md:p-12 rounded-xl">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-white">Vitamin D, 25-OH</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Example Biomarker</p>
                  </div>
                  <span className="text-xl font-heading text-teal font-bold">ng/mL</span>
                </div>
                {/* Range Visualization */}
                <div className="relative h-20 w-full mb-10">
                  {/* Gradient track */}
                  <div className="absolute inset-0 rounded-full overflow-hidden" style={{ background: 'linear-gradient(90deg, rgba(184,115,65,0.3) 0%, rgba(107,139,111,0.6) 45%, rgba(107,139,111,0.6) 55%, rgba(184,115,65,0.3) 100%)' }} />
                  {/* Standard Range indicator */}
                  <div className="absolute top-1/2 -translate-y-1/2 h-12 border-x border-white/20" style={{ left: '20%', right: '0%' }}>
                    <span className="absolute -top-8 left-0 text-[10px] uppercase tracking-wider text-gray-500 font-bold whitespace-nowrap">Standard Range (30–100)</span>
                  </div>
                  {/* Functional Optimal highlight */}
                  <div className="absolute top-0 bottom-0 bg-teal/25 border-x-2 border-teal/40" style={{ left: '55%', width: '20%' }}>
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-wider text-teal font-bold whitespace-nowrap">Functional Optimal (60–80)</span>
                  </div>
                  {/* Patient A marker */}
                  <div className="absolute top-0 bottom-0 flex flex-col items-center" style={{ left: '30%' }}>
                    <div className="w-0.5 h-full bg-white relative z-10" />
                    <div className="bg-bg-card shadow-md px-3 py-1.5 rounded border border-border text-[11px] absolute -bottom-12 whitespace-nowrap">
                      <span className="font-bold text-white">Patient A: 35</span><br />
                      <span className="text-gray-500">Standard says: </span><span className="text-white">Normal</span>
                    </div>
                  </div>
                  {/* Patient B marker */}
                  <div className="absolute top-0 bottom-0 flex flex-col items-center" style={{ left: '68%' }}>
                    <div className="w-0.5 h-full bg-teal relative z-10" />
                    <div className="bg-teal-dim shadow-md px-3 py-1.5 rounded border border-teal/20 text-[11px] absolute -bottom-12 whitespace-nowrap">
                      <span className="font-bold text-white">Patient B: 72</span><br />
                      <span className="text-gray-500">Functional says: </span><span className="text-teal font-bold">Optimal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><hr className="divider-gradient" /></div>

        {/* ===== PLATFORM FEATURES — Bento Grid ===== */}
        <section className="bg-bg-dark py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">Your Health Platform</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                More than lab results.<br /><em className="text-teal not-italic">A complete health system.</em>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your membership includes the tools to understand, track, and act on your health data year after year.
              </p>
            </div>
            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Large card — Dashboard */}
              <div className="md:col-span-8 card-hover card-glow bg-bg-card border border-border rounded-xl p-10 min-h-[280px] flex flex-col justify-end relative overflow-hidden delay-1">
                <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-2 absolute top-8 right-8">Clinical Intelligence</p>
                <div className="text-4xl mb-4">{platformFeatures[0].emoji}</div>
                <h3 className="font-heading font-bold text-white text-2xl mb-3">{platformFeatures[0].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-lg">{platformFeatures[0].description}</p>
              </div>
              {/* Stacked right cards */}
              <div className="md:col-span-4 flex flex-col gap-6">
                <div className="card-hover card-glow bg-teal-dim border border-teal-border rounded-xl p-8 flex-1 delay-2">
                  <div className="text-3xl mb-4">{platformFeatures[1].emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{platformFeatures[1].title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{platformFeatures[1].description}</p>
                </div>
                <div className="dark-section card-hover card-glow bg-bg-dark rounded-xl p-8 flex-1 delay-3">
                  <div className="text-3xl mb-4">{platformFeatures[2].emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-2">{platformFeatures[2].title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{platformFeatures[2].description}</p>
                </div>
              </div>
              {/* Bottom row — 3 equal cards */}
              {platformFeatures.slice(3).map((feature, idx) => (
                <div key={feature.title} className={`md:col-span-4 card-hover card-glow bg-bg-card border border-border rounded-xl p-8 delay-${idx + 4}`}>
                  <div className="text-3xl mb-4">{feature.emoji}</div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
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
                    <p className="text-gray-500 text-sm leading-relaxed">{person.description}</p>
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
                    <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{item.answer}</p>
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

        {/* ===== B2B SPLIT — DARK SECTION ===== */}
        <section className="dark-section bg-bg-dark border-y border-border py-24">
          <div className="fade-up max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <p className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-3">Two Ways to Access Briella Health</p>
              <h2 className="font-heading font-extrabold text-fluid-section text-white mb-6">
                Built for patients.<br /><em className="text-teal not-italic">Designed for providers.</em>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Whether you&apos;re taking control of your own health or you run a practice serving health-conscious clients — Briella Health has a platform built for you.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* For Patients */}
              <div className="card-hover card-glow bg-bg-card border border-border rounded-xl p-9 delay-1">
                <div className="text-3xl mb-4">🧬</div>
                <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-2">For Patients</p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Own your biology</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Order your comprehensive panel, visit any Quest location nationwide, and log in to see your results, track trends over time, and understand what every number means — in plain language.
                </p>
                <Link href="/membership" className="btn-primary inline-flex bg-teal text-pure-white uppercase font-bold px-6 py-3 rounded-md hover:bg-teal-light text-sm tracking-wide">
                  See Membership Plans
                </Link>
              </div>
              {/* For Providers */}
              <div className="card-hover card-glow bg-bg-card border border-teal-border rounded-xl p-9 delay-2">
                <div className="text-3xl mb-4">🏥</div>
                <p className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-2">For Providers & Practices</p>
                <h3 className="font-heading font-bold text-white text-xl mb-3">Elevate your practice</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Offer physician-ordered comprehensive lab testing under your brand. Your clients get Briella Health&apos;s full platform — you get a branded dashboard, lab visibility for every patient, and a new revenue stream.
                </p>
                <Link href="/for-providers" className="btn-secondary inline-flex border border-teal text-teal uppercase font-bold px-6 py-3 rounded-md hover:bg-teal hover:text-pure-white text-sm tracking-wide">
                  Learn About Partnership
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SIGNUP CTA — DARK SECTION ===== */}
        <section className="dark-section bg-bg-dark py-24">
          <div className="fade-up max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-teal/10 via-bg-card to-bg-card border border-teal-border rounded-2xl p-12 md:p-16 text-center">
              <p className="text-gold uppercase tracking-[0.16em] text-xs font-bold mb-4">Now Enrolling</p>
              <h2 className="font-heading font-extrabold text-fluid-hero text-white mb-6">
                Be among the first<br />to know your numbers.
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Join as a founding member — early access, priority scheduling, and exclusive founding pricing when we launch in Texas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link href="/signup" className="btn-primary bg-teal text-pure-white uppercase font-bold px-8 py-4 rounded-md hover:bg-teal-light text-sm tracking-wide">
                  Create My Account
                </Link>
                <Link href="/what-we-test" className="btn-secondary border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal text-sm tracking-wide">
                  See What We Test
                </Link>
              </div>
              <p className="text-gray-500 text-xs">$365/year · 100+ biomarkers · HSA/FSA eligible · No insurance required</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

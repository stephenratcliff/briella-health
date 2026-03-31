'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const biomarkerCategories = [
    { emoji: '❤️', name: 'Heart & Cardiovascular', count: 18 },
    { emoji: '⚡', name: 'Hormones & Metabolism', count: 22 },
    { emoji: '🛡️', name: 'Immune & Inflammation', count: 14 },
    { emoji: '🦋', name: 'Thyroid Function', count: 8 },
    { emoji: '✨', name: 'Nutrients & Vitamins', count: 16 },
    { emoji: '📊', name: '6 more categories', count: '25+' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Join as a Member',
      description: 'Create account, complete intake, 5 min setup',
    },
    {
      number: '2',
      title: 'Visit a Quest Lab',
      description: '2,000+ locations, 15-20 min draw',
    },
    {
      number: '3',
      title: 'Get Your Results',
      description: '3-5 days, physician-reviewed, plain-language',
    },
  ];

  const stats = [
    { number: '100+', label: 'Biomarkers' },
    { number: '$365', label: 'Per Year' },
    { number: '2,000+', label: 'Quest Locations' },
    { number: '11', label: 'Organ Systems' },
  ];

  const providerFeatures = [
    'White-label enrollment',
    'Real-time patient dashboard',
    '20% revenue share',
  ];

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark">
      <Nav />

      {/* Ticker Bar */}
      <div className="bg-teal overflow-hidden py-2.5 sticky top-16 z-40">
        <div className="flex animate-marquee whitespace-nowrap">
          <div className="flex items-center gap-6">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              100+ Biomarkers Tested
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Quest Diagnostics Network
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              $365/Year — All Inclusive
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              No Insurance Required
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Results in 3-5 Days
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              2,000+ Lab Locations
            </span>
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex items-center gap-6 ml-6">
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              100+ Biomarkers Tested
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Quest Diagnostics Network
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              $365/Year — All Inclusive
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              No Insurance Required
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              Results in 3-5 Days
            </span>
            <span className="w-1 h-1 bg-teal-light rounded-full" />
            <span className="text-white text-xs font-bold uppercase tracking-wider">
              2,000+ Lab Locations
            </span>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-bg-dark relative pt-[80px] pb-24">
          {/* Subtle teal glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8">
                {/* Eyebrow */}
                <div>
                  <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold">
                    Comprehensive Health Testing
                  </p>
                </div>

                {/* H1 */}
                <h1 className="font-heading font-extrabold text-5xl md:text-6xl tracking-tight">
                  <span className="text-white">Know every number</span>
                  <br />
                  <span className="text-teal">that matters.</span>
                </h1>

                {/* Lead Paragraph */}
                <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
                  100+ biomarkers tested annually through Quest Diagnostics. Physician-reviewed results with functional medicine reference ranges. $365/year — all-inclusive.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-teal text-white uppercase font-bold px-8 py-4 rounded-md hover:bg-teal-light transition-colors">
                    Join the Waitlist
                  </button>
                  <button className="border border-border-strong text-white uppercase font-bold px-8 py-4 rounded-md hover:border-teal hover:text-teal transition-colors">
                    How It Works
                  </button>
                </div>

                {/* Trust Bar */}
                <div className="flex flex-col sm:flex-row gap-6 pt-7 border-t border-border">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">100+</span>
                    <span className="text-gray-400 text-xs">biomarkers</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full mt-2" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">Quest Diagnostics</span>
                    <span className="text-gray-400 text-xs">trusted network</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full mt-2" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">$365/year</span>
                    <span className="text-gray-400 text-xs">all inclusive</span>
                  </div>
                  <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full mt-2" />
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm">All 50 States</span>
                    <span className="text-gray-400 text-xs">nationwide</span>
                  </div>
                </div>
              </div>

              {/* Biomarker Card - Right Side */}
              <div className="sticky top-32 h-fit">
                <div className="bg-bg-card border border-border-strong rounded-[20px] p-7 shadow-[0_2px_4px_rgba(0,0,0,0.5),0_12px_40px_rgba(0,0,0,0.35)]">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-gray-400 text-xs font-bold uppercase">Your Annual Panel</span>
                    <span className="bg-teal-dim border border-border-teal rounded-full px-3 py-1 text-xs font-bold text-teal">100+ tests</span>
                  </div>

                  <div className="space-y-2 mb-6">
                    {biomarkerCategories.map((category) => (
                      <div
                        key={category.name}
                        className="bg-bg-dark border border-border rounded-md px-3.5 py-2.5 hover:border-teal transition-colors flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-7 h-7 rounded flex items-center justify-center bg-teal-dim">
                            <span className="text-sm">{category.emoji}</span>
                          </div>
                          <span className="text-white text-sm font-medium">{category.name}</span>
                        </div>
                        <span className="bg-teal-dim border border-border-teal text-teal rounded-full px-2 py-0.5 text-xs font-bold">
                          {category.count}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-gray-300 text-xs text-center">
                      Includes metabolic panels, lipids, hormones, nutrients, immune markers, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image Section */}
        <section className="bg-bg-dark py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=600&fit=crop"
                alt="Healthcare professional with tablet"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </div>
        </section>

        {/* Stat Bar Section */}
        <section className="bg-bg-card border-y border-border py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center py-6 px-4 ${
                    index < stats.length - 1 ? 'border-r border-border hidden lg:block' : ''
                  } ${index < 2 && index < stats.length - 1 ? 'border-b border-border' : ''}`}
                >
                  <p className="font-heading text-4xl font-extrabold text-white">
                    {stat.number}
                  </p>
                  <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="bg-bg-dark py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="mb-16">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">
                The Process
              </p>
              <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
                How It Works
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl">
                Get comprehensive lab testing in three simple steps. From signup to results, we handle the complexity.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-bg-card border border-border rounded-xl p-8 hover:border-teal-border hover:-translate-y-1 transition-all"
                >
                  <div className="w-[42px] h-[42px] bg-teal-dim border border-border-teal rounded-[10px] flex items-center justify-center font-heading font-extrabold text-teal mb-6">
                    {step.number}
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-teal hover:text-teal-light font-bold transition-colors"
              >
                See All 6 Steps →
              </a>
            </div>
          </div>
        </section>

        {/* Provider Image Section */}
        <section className="bg-bg-dark py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&h=600&fit=crop"
                alt="Physician providing oversight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent flex items-center">
                <div className="max-w-md px-8">
                  <p className="text-teal text-xs font-bold uppercase tracking-[0.16em] mb-3">
                    Physician Oversight
                  </p>
                  <h3 className="text-white font-heading font-extrabold text-2xl">
                    Expert Review, Plain Language Results
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Providers Section */}
        <section className="bg-bg-card border-y border-border py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-3">
                Partnership
              </p>
              <h2 className="font-heading font-extrabold text-5xl md:text-6xl text-white mb-6">
                Built for Providers
              </h2>
              <p className="text-gray-300 text-lg">
                Add comprehensive lab panels to your practice. No infrastructure. No upfront costs. Revenue share from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {providerFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-bg-dark border border-border rounded-xl p-8"
                >
                  <h3 className="font-heading font-bold text-white text-lg">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            <div>
              <a
                href="/for-providers"
                className="inline-flex items-center gap-2 text-teal hover:text-teal-light font-bold transition-colors"
              >
                Learn About Partnership →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-teal py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-white mb-6">
              Your most comprehensive health panel. Simplified.
            </h2>
            <p className="text-white/80 text-lg mb-8">
              $365/year · 100+ biomarkers · Physician-reviewed results
            </p>
            <button className="bg-bg-dark text-white px-8 py-4 rounded-md font-bold uppercase hover:bg-bg-card transition-colors">
              Join the Waitlist
            </button>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

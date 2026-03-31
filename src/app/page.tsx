import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  const biomarkerCategories = [
    { emoji: '❤️', name: 'Heart & Cardiovascular', count: 18 },
    { emoji: '⚡', name: 'Hormones & Metabolism', count: 22 },
    { emoji: '🛡️', name: 'Immune & Inflammation', count: 14 },
    { emoji: '🦋', name: 'Thyroid Function', count: 8 },
    { emoji: '✨', name: 'Nutrients & Vitamins', count: 16 },
    { emoji: '📊', name: '+ 6 more categories', count: '25+' },
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

  const trustItems = [
    '100+ Biomarkers',
    'Quest Diagnostics',
    'All 50 States',
    '$365/year',
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
    <div className="flex flex-col min-h-screen bg-cream-light">
      <Nav />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-cream-light pt-16 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-8">
                {/* Eyebrow */}
                <div>
                  <p className="text-terracotta uppercase tracking-wide text-sm font-semibold">
                    Functional Medicine Lab Intelligence
                  </p>
                </div>

                {/* H1 */}
                <h1 className="font-serif text-charcoal text-5xl md:text-6xl leading-tight">
                  Know every number that matters.
                </h1>

                {/* Subtext */}
                <p className="text-warm-gray-dark max-w-2xl text-lg leading-relaxed">
                  100+ biomarkers tested annually through Quest Diagnostics. Physician-reviewed results with functional medicine reference ranges. $365/year — all-inclusive.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="bg-terracotta text-cream-light px-8 py-3 rounded-xl hover:bg-terracotta-dark transition-colors font-semibold font-sans">
                    Join the Waitlist
                  </button>
                  <button className="border border-charcoal text-charcoal px-8 py-3 rounded-xl hover:bg-linen transition-colors font-semibold font-sans">
                    How It Works
                  </button>
                </div>

                {/* Trust Bar */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 pt-8 border-t border-sand-light">
                  {trustItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 py-4"
                    >
                      <span className="text-warm-gray-dark font-sans text-sm">
                        {item}
                      </span>
                      {index < trustItems.length - 1 && (
                        <div className="hidden sm:block w-px h-4 bg-sand-light" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Annual Panel Preview Card - Right Side */}
              <div className="sticky top-24 h-fit">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-sand-light">
                  <h3 className="font-serif text-charcoal text-2xl mb-6">
                    Your Annual Panel
                  </h3>

                  <ul className="space-y-4 mb-6">
                    {biomarkerCategories.map((category) => (
                      <li key={category.name} className="flex items-center justify-between py-3 border-b border-sand-light last:border-b-0">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{category.emoji}</span>
                          <div>
                            <p className="font-sans font-semibold text-charcoal">
                              {category.name}
                            </p>
                          </div>
                        </div>
                        <span className="font-serif font-bold text-terracotta">
                          {category.count} tests
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-cream-light rounded-lg p-4 text-center border border-sand-light">
                    <p className="font-semibold text-charcoal font-sans">
                      100+ total biomarkers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Bar Section */}
        <section className="bg-charcoal text-cream-light py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center lg:items-start gap-2 py-4"
                >
                  <p className="font-serif text-3xl md:text-4xl font-bold">
                    {stat.number}
                  </p>
                  <p className="font-sans text-sm text-cream-light/80">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Preview */}
        <section className="bg-cream py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="font-serif text-charcoal text-4xl md:text-5xl">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="bg-cream-light border border-sand-light rounded-xl p-6 flex flex-col gap-4"
                >
                  <p className="font-serif text-terracotta text-2xl font-bold">
                    Step {step.number}
                  </p>
                  <h3 className="font-serif text-charcoal text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="text-warm-gray-dark font-sans">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="/how-it-works"
                className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold font-sans transition-colors"
              >
                See All 6 Steps →
              </a>
            </div>
          </div>
        </section>

        {/* For Providers Section */}
        <section className="bg-linen py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <h2 className="font-serif text-charcoal text-4xl md:text-5xl mb-6">
                Built for Providers & Practices
              </h2>
              <p className="text-warm-gray-dark text-lg font-sans leading-relaxed">
                Add comprehensive lab panels to your practice. No infrastructure. No upfront costs. Revenue share from day one.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {providerFeatures.map((feature) => (
                <div
                  key={feature}
                  className="bg-white rounded-xl p-6 border border-sand-light"
                >
                  <h3 className="font-semibold text-charcoal font-sans text-lg">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>

            <div>
              <a
                href="/for-providers"
                className="inline-flex items-center gap-2 text-terracotta hover:text-terracotta-dark font-semibold font-sans transition-colors"
              >
                Learn About Partnership →
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-terracotta text-cream-light py-20 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 leading-tight">
              Your most comprehensive health panel. Simplified.
            </h2>
            <p className="text-lg font-sans mb-8 text-cream-light/90">
              $365/year · 100+ biomarkers · Physician-reviewed results
            </p>
            <button className="bg-cream-light text-terracotta px-8 py-3 rounded-xl hover:bg-cream transition-colors font-semibold font-sans">
              Join the Waitlist
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

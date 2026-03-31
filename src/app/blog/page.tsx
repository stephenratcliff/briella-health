import { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Briella Health Journal',
};

export default function BlogPage() {
  const categories = [
    'All',
    'Cardiovascular',
    'Hormones',
    'Metabolic',
    'Thyroid',
    'Longevity',
    'Lab Literacy',
  ];

  const articles = [
    {
      id: 1,
      title: 'Why ApoB Matters More Than LDL',
      category: 'Cardiovascular',
      date: 'March 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      role: 'Medical Director',
      excerpt: 'ApoB is emerging as a superior marker for cardiovascular risk assessment, providing more accurate stratification than traditional LDL measurements alone.',
      gradient: 'from-terracotta to-warm-clay',
      featured: true,
    },
    {
      id: 2,
      title: 'The TSH Trap',
      category: 'Thyroid',
      date: 'Feb 2026',
      excerpt: 'Why TSH alone isn\'t enough to assess thyroid function and what additional markers you need to consider.',
      gradient: 'from-olive to-warm-gray-dark',
      featured: false,
    },
    {
      id: 3,
      title: 'Fasting Insulin: The Number Your Physical Misses',
      category: 'Metabolic',
      date: 'Feb 2026',
      excerpt: 'Fasting insulin reveals metabolic dysfunction years before glucose abnormalities appear. Here\'s why your doctor should be checking it.',
      gradient: 'from-warm-clay to-terracotta',
      featured: false,
    },
    {
      id: 4,
      title: 'Total vs. Free Testosterone',
      category: 'Hormones',
      date: 'Jan 2026',
      excerpt: 'Total testosterone tells only half the story. Learn why free testosterone is the metric that matters for health and performance.',
      gradient: 'from-sand-light to-linen',
      featured: false,
    },
    {
      id: 5,
      title: 'The Vitamin D Standard That\'s Wrong',
      category: 'Lab Literacy',
      date: 'Jan 2026',
      excerpt: 'Most reference ranges for vitamin D were established decades ago. Current science suggests optimal levels are significantly higher.',
      gradient: 'from-linen to-sand-light',
      featured: false,
    },
    {
      id: 6,
      title: 'Reading Your Trends',
      category: 'Longevity',
      date: 'Dec 2025',
      excerpt: 'Static lab values are useful, but trends tell a richer story about your health trajectory. Learn to read the narrative in your numbers.',
      gradient: 'from-warm-gray to-warm-clay',
      featured: false,
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <>
      <Nav />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-cream-light py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-warm-gray-dark text-sm uppercase tracking-widest mb-4 font-medium">
              Briella Health Journal
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              The science behind knowing your numbers.
            </h1>
            <p className="text-warm-gray-dark text-lg">
              Physician-written insights on biomarkers, lab testing, and preventive health.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="bg-cream-light border-b border-sand-light sticky top-20 md:top-0 z-30">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    category === 'All'
                      ? 'bg-terracotta text-cream-light'
                      : 'bg-sand-light text-warm-gray-dark hover:bg-sand'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {featuredArticle && (
          <section className="bg-cream py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-6">
              <div className="bg-cream-light border border-sand-light rounded-2xl overflow-hidden flex flex-col lg:flex-row">
                {/* Gradient Placeholder */}
                <div
                  className={`w-full lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br ${featuredArticle.gradient}`}
                />

                {/* Content */}
                <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-terracotta text-cream-light text-xs font-medium rounded-full px-3 py-1">
                      {featuredArticle.category}
                    </span>
                    <span className="text-warm-gray text-sm">{featuredArticle.date}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-warm-gray-dark mb-6">
                    {featuredArticle.author} · <span className="font-medium">{featuredArticle.role}</span>
                  </p>

                  <p className="text-warm-gray-dark text-sm leading-relaxed mb-6">
                    {featuredArticle.excerpt}
                  </p>

                  <a href="#" className="text-terracotta font-medium inline-flex items-center gap-2 hover:gap-3 transition">
                    Read Article <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Article Grid */}
        <section className="bg-cream py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherArticles.map((article) => (
                <article
                  key={article.id}
                  className="bg-cream-light border border-sand-light rounded-xl overflow-hidden hover:border-terracotta transition flex flex-col"
                >
                  {/* Gradient Placeholder */}
                  <div
                    className={`h-40 bg-gradient-to-br ${article.gradient}`}
                  />

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-sand-light text-warm-gray-dark text-xs font-medium rounded-full px-3 py-1">
                        {article.category}
                      </span>
                      <span className="text-warm-gray text-xs">{article.date}</span>
                    </div>

                    <h3 className="font-serif text-lg text-charcoal mb-3 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-warm-gray-dark text-sm line-clamp-2 mb-4 flex-grow">
                      {article.excerpt}
                    </p>

                    <a href="#" className="text-terracotta text-sm font-medium inline-flex items-center gap-1 hover:gap-2 transition">
                      Read <span>→</span>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-linen py-16 md:py-20">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-3">
              Health insights, delivered monthly.
            </h2>
            <p className="text-warm-gray-dark mb-8">
              Physician-written. No hype, no spam.
            </p>

            <form className="flex flex-col md:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-cream-light border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
              />
              <button
                type="submit"
                className="bg-terracotta text-cream-light px-6 md:px-8 py-3 rounded-xl font-medium hover:bg-terracotta-dark transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

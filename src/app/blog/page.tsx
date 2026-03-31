'use client';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function BlogPage() {
  useScrollReveal();
  const [activeCategory, setActiveCategory] = useState('All');
  const [newsLetterState, setNewsletterState] = useState<'form' | 'success'>('form');

  const categories = [
    'All',
    'Cardiovascular',
    'Hormones',
    'Metabolic Health',
    'Thyroid',
    'Longevity',
    'Lab Literacy',
  ];

  const articles = [
    {
      id: 1,
      title: "Why ApoB Matters More Than LDL — and Why Your Doctor Probably Isn't Checking It",
      category: 'Cardiovascular',
      date: 'March 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      role: 'Medical Director, Briella Health',
      authorInitials: 'SR',
      excerpt: 'For decades, LDL cholesterol has been the central target of cardiovascular risk management. But a growing body of evidence points to ApoB — the protein that coats every atherogenic particle — as a far more accurate predictor of heart attack risk. Here\'s why the distinction matters, and what optimal levels actually look like.',
      featured: true,
    },
    {
      id: 2,
      title: 'The TSH Trap: How Millions of People Have "Normal" Thyroid Labs and Still Feel Terrible',
      category: 'Thyroid',
      date: 'February 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      authorInitials: 'SR',
      excerpt: 'TSH is the most common thyroid test ordered — and the most commonly misinterpreted. Learn why a normal TSH can coexist with significant thyroid dysfunction, and what a complete thyroid panel actually looks like.',
      featured: false,
    },
    {
      id: 3,
      title: 'Fasting Insulin: The Number Your Annual Physical Never Checks — But Should',
      category: 'Metabolic Health',
      date: 'February 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      authorInitials: 'SR',
      excerpt: 'Insulin resistance can be present for a decade before blood sugar becomes abnormal. Fasting insulin is the earliest warning signal available — and it\'s absent from virtually every standard lab panel.',
      featured: false,
    },
    {
      id: 4,
      title: 'Total vs. Free Testosterone: Why the Number on Your Lab Report Might Be Misleading You',
      category: 'Hormones',
      date: 'January 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      authorInitials: 'SR',
      excerpt: 'Up to 98% of testosterone is bound and biologically unavailable. Understanding free testosterone — and the SHBG that controls it — changes how you interpret your results entirely.',
      featured: false,
    },
    {
      id: 5,
      title: "The Vitamin D Standard That's Wrong: Why 30 ng/mL Isn't Enough and Optimal Is 60–80",
      category: 'Lab Literacy',
      date: 'January 2026',
      author: 'Dr. Stephen Ratcliff, MD',
      authorInitials: 'SR',
      excerpt: 'The conventional "sufficient" cutoff for Vitamin D was set to prevent rickets — not to optimize immune function, bone density, and hormone signaling. Here\'s what the functional medicine literature shows about where you actually want to be.',
      featured: false,
    },
    {
      id: 6,
      title: 'Reading Your Trends: Why a Single Lab Result Is Far Less Valuable Than Three Years of Data',
      category: 'Longevity',
      date: 'December 2025',
      author: 'Dr. Stephen Ratcliff, MD',
      authorInitials: 'SR',
      excerpt: 'A ferritin of 85 ng/mL tells you one thing. A ferritin trend from 120 → 97 → 85 over three years tells you something entirely different. Longitudinal data is the foundation of meaningful preventive health.',
      featured: false,
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  const handleNewsletterSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewsletterState('success');
  };

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-bg-dark">
        {/* Hero Section */}
        <section className="border-b border-border py-16 md:py-28">
          <div className="max-w-7xl mx-auto px-6 fade-up">
            <p className="text-teal text-xs uppercase tracking-[0.16em] font-bold mb-3">
              Briella Health Journal
            </p>
            <h1 className="font-heading font-extrabold text-fluid-section text-white mb-4 max-w-2xl">
              The science behind<br /><span style={{ color: 'var(--teal-light)' }}>knowing your numbers.</span>
            </h1>
            <p className="text-gray-400 text-base max-w-xl">
              Physician-written insights on the biomarkers that matter most, what your lab results actually mean, and how to act on your data before problems develop.
            </p>
          </div>
        </section>

        {/* Category Filter Bar */}
        <section className="bg-bg-dark">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.1em] transition ${
                    activeCategory === category
                      ? 'bg-teal text-white border border-teal'
                      : 'bg-bg-card text-gray-400 border border-border hover:bg-teal hover:border-teal hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section */}
        <section className="bg-bg-dark py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 fade-up">
              {/* Featured Article */}
              {featuredArticle && (
                <a
                  href="#"
                  className="lg:col-span-3 bg-bg-card border border-border rounded-2xl overflow-hidden transition hover:border-teal-border hover:shadow-lg hover:shadow-teal/10 flex flex-col lg:flex-row card-hover card-glow"
                >
                  {/* Image Placeholder */}
                  <div className="w-full lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-blue-900 via-teal-600 to-teal-700 flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=800&h=500&fit=crop&q=80"
                      alt="Cardiovascular risk"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-teal-dim text-teal-light text-xs font-bold uppercase tracking-[0.1em] px-3 py-1.5 rounded-full border border-teal-border">
                        {featuredArticle.category}
                      </span>
                      <span className="text-gray-600 text-xs">{featuredArticle.date}</span>
                    </div>

                    <h3 className="font-heading font-extrabold text-xl lg:text-2xl text-white mb-3 leading-snug">
                      {featuredArticle.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {featuredArticle.excerpt}
                    </p>

                    <div className="flex items-center gap-2.5 mt-2">
                      <div className="w-8 h-8 rounded-full bg-teal-dim border border-teal-border flex items-center justify-center">
                        <span className="text-teal-light text-xs font-bold">{featuredArticle.authorInitials}</span>
                      </div>
                      <span className="text-gray-400 text-xs">{featuredArticle.author} · {featuredArticle.role}</span>
                    </div>

                    <span className="text-teal-light text-xs font-bold mt-5 flex items-center gap-1.5">
                      Read article <span>→</span>
                    </span>
                  </div>
                </a>
              )}

              {/* Other Articles */}
              {otherArticles.map((article, idx) => (
                <a
                  key={article.id}
                  href="#"
                  className={`bg-bg-card border border-border rounded-xl overflow-hidden transition hover:border-teal-border hover:shadow-lg hover:shadow-teal/10 flex flex-col card-hover card-glow ${idx % 3 === 0 ? 'delay-1' : idx % 3 === 1 ? 'delay-2' : 'delay-3'}`}
                >
                  {/* Image Placeholder */}
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src={
                        article.id === 2
                          ? 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?w=600&h=340&fit=crop&q=80'
                          : article.id === 3
                          ? 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&h=340&fit=crop&q=80'
                          : article.id === 4
                          ? 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=600&h=340&fit=crop&q=80'
                          : article.id === 5
                          ? 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=340&fit=crop&q=80'
                          : 'https://images.unsplash.com/photo-1559757148-5f89ebc0f23e?w=600&h=340&fit=crop&q=80'
                      }
                      alt={article.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-teal-dim text-teal-light text-xs font-bold uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border border-teal-border">
                        {article.category}
                      </span>
                      <span className="text-gray-600 text-xs">{article.date}</span>
                    </div>

                    <h3 className="font-heading font-bold text-sm text-white mb-2.5 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-8 h-8 rounded-full bg-teal-dim border border-teal-border flex items-center justify-center flex-shrink-0">
                        <span className="text-teal-light text-xs font-bold">{article.authorInitials}</span>
                      </div>
                      <span className="text-gray-500 text-xs">{article.author}</span>
                    </div>

                    <span className="text-teal-light text-xs font-bold mt-4 flex items-center gap-1">
                      Read article <span>→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-bg-dark py-16 fade-up">
          <div className="max-w-2xl mx-auto px-6">
            <div className="bg-bg-card border border-border rounded-3xl p-12 text-center card-hover card-glow">
              <p className="text-teal text-xs uppercase tracking-[0.16em] font-bold mb-3">
                Stay Informed
              </p>
              <h2 className="font-heading font-extrabold text-3xl text-white mb-3">
                Health insights, delivered monthly.
              </h2>
              <p className="text-gray-400 text-sm mb-8">
                Physician-written articles on the biomarkers that matter — no hype, no spam. Unsubscribe anytime.
              </p>

              {newsLetterState === 'form' ? (
                <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="flex-grow bg-white/5 border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-600 text-sm font-body outline-none transition focus:border-teal focus:bg-white/8"
                  />
                  <button
                    type="submit"
                    className="bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap transition hover:bg-teal-light btn-primary"
                  >
                    Subscribe
                  </button>
                </form>
              ) : (
                <p className="text-teal-light text-xs font-bold">
                  ✓ You&apos;re subscribed. First issue arriving soon.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

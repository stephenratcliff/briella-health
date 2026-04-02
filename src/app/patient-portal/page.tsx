'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function PatientPortalPage() {
  useScrollReveal();
  const router = useRouter();
  const [user, setUser] = useState<{ firstName: string; lastName: string; email: string; memberId: string; sex: string; state: string; createdAt: string } | null>(null);

  useEffect(() => {
    // Check for session
    const session = sessionStorage.getItem('briella-session');
    if (!session) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(session));
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('briella-session');
    router.push('/login');
  };

  const biomarkers = [
    { name: 'Vitamin D', subtitle: '25-Hydroxyvitamin D', value: '42', unit: 'ng/mL', status: 'Borderline', fill: 42, minStd: '30', optimalMin: '60', optimalMax: '80', maxVal: '100', description: 'Your level supports basic bone health but falls below the functional optimal range for immune function and mood regulation.' },
    { name: 'TSH', subtitle: 'Thyroid Stimulating Hormone', value: '2.8', unit: 'mIU/L', status: 'Optimal', fill: 62, minStd: '0.4', optimalMin: '1.0', optimalMax: '2.5', maxVal: '4.0', description: 'Within standard range. Functional practitioners prefer values between 1.0-2.5 for optimal thyroid function.' },
    { name: 'hsCRP', subtitle: 'High-Sensitivity C-Reactive Protein', value: '2.1', unit: 'mg/L', status: 'Flagged', fill: 68, minStd: '<1.0', optimalMin: 'Functional', optimalMax: '', maxVal: '<3.0', description: 'Elevated inflammatory marker. While within standard limits, this level suggests chronic low-grade inflammation worth addressing.' },
    { name: 'Ferritin', subtitle: 'Iron Stores', value: '38', unit: 'ng/mL', status: 'Borderline', fill: 26, minStd: '12', optimalMin: '50', optimalMax: '100', maxVal: '150', description: 'Your iron stores are adequate but suboptimal. Functional ranges suggest 50-100 ng/mL for optimal energy and cellular function.' },
  ];

  const summaryStats = [
    { dot: 'teal', count: '78', label: 'Optimal Range' },
    { dot: 'gold', count: '19', label: 'Borderline' },
    { dot: 'warm', count: '7', label: 'Needs Attention' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Optimal':
        return { bg: 'bg-teal-dim', text: 'text-teal' };
      case 'Borderline':
        return { bg: 'bg-gold-dim', text: 'text-gold' };
      case 'Flagged':
        return { bg: 'bg-[rgba(184,115,65,0.15)]', text: 'text-warm' };
      default:
        return { bg: 'bg-teal-dim', text: 'text-teal' };
    }
  };

  const getDotColor = (status: string) => {
    switch (status) {
      case 'Optimal':
        return 'bg-teal';
      case 'Borderline':
        return 'bg-gold';
      case 'Flagged':
        return 'bg-warm';
      default:
        return 'bg-teal';
    }
  };

  const getDotColorSummary = (dot: string) => {
    switch (dot) {
      case 'teal':
        return 'bg-teal';
      case 'gold':
        return 'bg-gold';
      case 'warm':
        return 'bg-warm';
      default:
        return 'bg-teal';
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Portal Navigation */}
      <nav className="bg-bg-card border-b border-border sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-4">
              <div className="w-7 h-7 bg-teal rounded-lg text-pure-white font-heading font-bold text-sm flex items-center justify-center">B</div>
              <span className="font-heading text-base text-white">Briella <span className="text-teal">Health</span></span>
            </a>
            <span className="text-xs font-bold text-teal uppercase tracking-wider bg-teal/10 border border-teal/30 rounded-full px-3 py-1">
              Patient Portal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{user?.firstName} {user?.lastName?.charAt(0)}.</span>
            <div className="w-8 h-8 bg-teal text-pure-white rounded-full flex items-center justify-center text-sm font-bold">
              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 bg-bg-card border-r border-border min-h-screen p-6">
          <nav className="space-y-6">
            {/* Overview Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
                Overview
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>📊</span> Dashboard
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/results" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>🧬</span> My Results
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/trends" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>📈</span> Trends
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/health-report" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>📋</span> Health Report
                  </a>
                </li>
              </ul>
            </div>

            {/* Labs Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
                Labs
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal/order" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>🔬</span> Order Lab Panel
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/draw-site" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>📍</span> Find Draw Site
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/history" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>📅</span> Lab History
                  </a>
                </li>
              </ul>
            </div>

            {/* Provider Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
                Provider
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#provider-cta" className="flex items-center gap-3 px-3 py-2 rounded-lg border border-teal/30 bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>📅</span> Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-400 font-bold mb-4">
                Account
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal/settings" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition">
                    <span>⚙️</span> Settings
                  </a>
                </li>
                <li>
                  <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-mid rounded-lg transition w-full text-left">
                    <span>↩️</span> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-12">
          {/* Header */}
          <header className="flex justify-between items-end gap-8 mb-12 fade-up">
            <div>
              <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Good morning, {user?.firstName || 'there'}</h1>
            </div>
            <div className="text-right flex-shrink-0">
              <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-1">Latest Snapshot</p>
              <p className="text-sm text-gray-400">Results from March 12, 2026</p>
            </div>
          </header>

          {/* Wellness Score Section */}
          <section className="mb-12 fade-up">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-heading font-extrabold text-8xl leading-none text-white">82</span>
              <span className="text-2xl text-gray-400">/100</span>
            </div>
            <div className="mb-6">
              <h3 className="font-body text-xl font-bold text-white">Your Wellness Score</h3>
              <p className="text-gray-400 text-sm">Based on 104 biomarkers analyzed through functional medicine optimal ranges</p>
            </div>
            {/* Score Gradient Bar */}
            <div className="relative h-2 w-full rounded-full overflow-hidden mb-2">
              <div className="absolute inset-0 bg-gradient-to-r from-teal via-gold to-warm"></div>
              {/* Marker at 82% */}
              <div className="absolute top-0 bottom-0 w-1 bg-bg-dark left-[82%]"></div>
            </div>
            <div className="flex justify-between text-xs uppercase tracking-wider text-gray-400 font-bold">
              <span>Optimal</span>
              <span>Borderline</span>
              <span>Attention Needed</span>
            </div>
          </section>

          {/* Biomarker Summary Row */}
          <div className="grid grid-cols-3 gap-6 mb-12 fade-up">
            {summaryStats.map((stat, idx) => (
              <div key={idx} className="bg-bg-mid p-6 rounded-xl flex items-center gap-4 hover:scale-[1.02] transition-transform delay-{idx + 1}">
                <div className={`w-3 h-3 rounded-full ${getDotColorSummary(stat.dot)}`}></div>
                <div>
                  <div className="font-heading text-4xl font-bold text-white">{stat.count}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-400 mt-1 font-bold">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Biomarker Cards Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12 fade-up">
            {biomarkers.map((marker, idx) => {
              const badge = getStatusBadge(marker.status);
              const dotColor = getDotColor(marker.status);
              return (
                <div key={idx} className={`bg-bg-mid p-8 rounded-xl delay-${idx + 1}`}>
                  {/* Top row: name and value */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h4 className="font-heading text-xl font-bold text-white">{marker.name}</h4>
                      <p className="text-xs text-gray-400">{marker.subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-heading text-3xl font-bold text-white">
                        {marker.value} <span className="text-sm font-body font-normal text-gray-400">{marker.unit}</span>
                      </div>
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mt-1 ${badge.bg} ${badge.text}`}>
                        {marker.status}
                      </span>
                    </div>
                  </div>

                  {/* Range visualization */}
                  <div className="space-y-4">
                    <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      {/* Standard range background */}
                      <div className="absolute inset-y-0 left-[10%] right-[10%] bg-gray-400/10"></div>
                      {/* Functional optimal overlay - sage/green tinted */}
                      <div className="absolute inset-y-0 left-[40%] right-[20%] bg-teal/40"></div>
                      {/* Marker dot */}
                      <div className={`absolute inset-y-0 w-1 ${getDotColor(marker.status)} z-10`} style={{ left: `${marker.fill}%` }}></div>
                    </div>
                    <div className="flex justify-between text-[10px] font-body font-medium text-gray-400">
                      <span>{marker.minStd} (Min Std)</span>
                      <span>{marker.optimalMin}-{marker.optimalMax} (Functional Optimal)</span>
                      <span>{marker.maxVal} (Max)</span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400 mt-4 italic">"{marker.description}"</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Physician Insights Panel */}
          <section className="bg-bg-mid border-l-8 border-teal p-10 rounded-xl mb-12 fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span>🩺</span>
              <h3 className="font-heading text-2xl font-bold text-white">Physician Insights</h3>
            </div>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-4xl">
              Sarah, your overall metabolic profile shows strength in thyroid function and blood glucose regulation. The key areas for improvement are your vitamin D levels and inflammatory markers. I recommend increasing vitamin D supplementation to 5,000 IU daily and incorporating anti-inflammatory foods. Your ferritin is worth monitoring — consider iron-rich foods with vitamin C for better absorption. Let us discuss these findings in your upcoming consultation.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-teal/20 flex items-center justify-center text-xl font-bold text-teal">DR</div>
              <div>
                <p className="font-heading font-bold text-white">Dr. Elena Vasquez, MD, IFMCP</p>
                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">Functional Medicine Specialist</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex items-center gap-4 mb-12 fade-up">
            <a href="/patient-portal/results" className="bg-teal text-pure-white px-8 py-4 rounded-xl font-bold hover:bg-teal-light transition btn-primary">
              View Full Report
            </a>
            <button className="border-2 border-teal text-teal px-8 py-4 rounded-xl font-bold hover:bg-teal/5 transition btn-secondary">
              Schedule Consultation
            </button>
          </div>

          {/* Portal Navigation Links Grid */}
          <section className="fade-up">
            <h3 className="font-heading text-lg font-bold text-white mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <a href="/patient-portal/results" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                My Results
              </a>
              <a href="/patient-portal/trends" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                Trends
              </a>
              <a href="/patient-portal/health-report" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                Health Report
              </a>
              <a href="/patient-portal/order" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                Order Panel
              </a>
              <a href="/patient-portal/draw-site" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                Find Draw Site
              </a>
              <a href="/patient-portal/history" className="bg-bg-mid p-6 rounded-xl hover:border-teal-border border border-border transition text-white font-body font-medium">
                Lab History
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

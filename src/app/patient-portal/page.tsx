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

  useEffect(() => {
    // Load Chart.js and create charts
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js';
    script.onload = () => {
      if (typeof (window as any).Chart !== 'undefined') {
        const Chart = (window as any).Chart;

        const chartDefaults = {
          plugins: {
            legend: { display: false },
            tooltip: {
              backgroundColor: '#FFFFFF',
              borderColor: 'rgba(0,0,0,0.1)',
              borderWidth: 1,
              titleColor: '#2C2420',
              bodyColor: '#666666',
              padding: 12
            }
          },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280', font: { size: 11 } } },
            y: { grid: { color: 'rgba(255,255,255,0.04)' }, ticks: { color: '#6b7280', font: { size: 11 } } }
          },
          responsive: true,
          maintainAspectRatio: true
        };

        // Trend chart
        const trendCanvas = document.getElementById('trendChart');
        if (trendCanvas) {
          new Chart(trendCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2023','Sep 2023','Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'Vitamin D (ng/mL)', data: [38, 42, 51, 58, 64, 68, 71], borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#22c55e', pointRadius: 4 },
                { label: 'hs-CRP (mg/L)', data: [2.8, 2.4, 2.0, 1.6, 1.4, 1.7, 2.1], borderColor: '#6B8B6F', backgroundColor: 'rgba(107,139,111,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#6B8B6F', pointRadius: 4 },
                { label: 'Ferritin (ng/mL)', data: [45, 38, 32, 28, 22, 20, 18], borderColor: '#d4a853', backgroundColor: 'rgba(212,168,83,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#d4a853', pointRadius: 4 }
              ]
            },
            options: chartDefaults
          });
        }

        // Thyroid panel chart
        const thyroidCanvas = document.getElementById('thyroidChart');
        if (thyroidCanvas) {
          new Chart(thyroidCanvas, {
            type: 'bar',
            data: {
              labels: ['Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'TSH', data: [2.1, 1.9, 1.7, 1.8, 1.6], backgroundColor: 'rgba(107,139,111,0.6)', borderColor: '#6B8B6F', borderWidth: 1, borderRadius: 4 },
                { label: 'Free T3', data: [3.2, 3.3, 3.5, 3.4, 3.6], backgroundColor: 'rgba(34,197,94,0.5)', borderColor: '#22c55e', borderWidth: 1, borderRadius: 4 },
                { label: 'Free T4', data: [1.1, 1.2, 1.3, 1.2, 1.3], backgroundColor: 'rgba(212,168,83,0.5)', borderColor: '#d4a853', borderWidth: 1, borderRadius: 4 }
              ]
            },
            options: {
              ...chartDefaults,
              plugins: {
                ...chartDefaults.plugins,
                legend: {
                  display: true,
                  labels: { color: '#9ca3af', font: { size: 10 }, boxWidth: 12 }
                }
              }
            }
          });
        }

        // Metabolic panel chart
        const metabolicCanvas = document.getElementById('metabolicChart');
        if (metabolicCanvas) {
          new Chart(metabolicCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'Fasting Glucose', data: [88, 85, 84, 83, 82], borderColor: '#6B8B6F', tension: 0.4, pointBackgroundColor: '#6B8B6F', pointRadius: 4 },
                { label: 'HbA1c ×10', data: [53, 52, 52, 51, 51], borderColor: '#22c55e', tension: 0.4, pointBackgroundColor: '#22c55e', pointRadius: 4 },
                { label: 'Fasting Insulin', data: [9, 8, 7, 6, 7], borderColor: '#d4a853', tension: 0.4, pointBackgroundColor: '#d4a853', pointRadius: 4 }
              ]
            },
            options: {
              ...chartDefaults,
              plugins: {
                ...chartDefaults.plugins,
                legend: {
                  display: true,
                  labels: { color: '#9ca3af', font: { size: 10 }, boxWidth: 12 }
                }
              }
            }
          });
        }
      }
    };
    document.head.appendChild(script);
  }, []);

  const biomarkers = [
    { name: 'Vitamin D', value: '71', unit: 'ng/mL', status: 'Optimal', fill: 71 },
    { name: 'hs-CRP', value: '2.1', unit: 'mg/L', status: 'Watch', fill: 55 },
    { name: 'Fasting Glucose', value: '82', unit: 'mg/dL', status: 'Optimal', fill: 68 },
    { name: 'Ferritin', value: '18', unit: 'ng/mL', status: 'Low', fill: 18 },
    { name: 'TSH', value: '1.6', unit: 'mIU/L', status: 'Optimal', fill: 65 },
    { name: 'Free T3', value: '3.6', unit: 'pg/mL', status: 'Optimal', fill: 72 },
    { name: 'HbA1c', value: '5.1', unit: '%', status: 'Optimal', fill: 62 },
    { name: 'Homocysteine', value: '9.2', unit: 'µmol/L', status: 'Watch', fill: 52 },
  ];

  const insights = [
    {
      dot: 'flag',
      title: 'Ferritin is low at 18 ng/mL',
      description: 'Your iron storage is below optimal (50–100 ng/mL for women). This level — even though technically within the standard lab range — can cause fatigue, hair shedding, and reduced exercise tolerance. Consider iron supplementation and repeat testing in 90 days.',
    },
    {
      dot: 'borderline',
      title: 'hs-CRP trending upward — watch inflammation',
      description: 'Your hs-CRP rose from 1.4 to 2.1 mg/L. While still below the cardiovascular risk threshold of 3.0, this trend suggests increasing systemic inflammation. Diet, sleep quality, and omega-3 intake are the most modifiable factors here.',
    },
    {
      dot: 'borderline',
      title: 'Homocysteine slightly elevated at 9.2 µmol/L',
      description: 'Optimal homocysteine is below 8 µmol/L. Yours is mildly elevated — a common finding with marginal B12 or folate intake. Methylated B-complex supplementation typically normalizes this within 60 days.',
    },
    {
      dot: 'optimal',
      title: 'Thyroid function excellent — TSH, Free T3, Free T4 all optimal',
      description: 'Your full thyroid panel is in excellent shape. TSH of 1.6 with Free T3 at 3.6 pg/mL indicates active conversion and appropriate pituitary signaling. No intervention needed.',
    },
    {
      dot: 'optimal',
      title: 'Metabolic health strong — glucose, HbA1c, and insulin all optimal',
      description: 'Fasting glucose of 82 mg/dL and HbA1c of 5.1% are ideal. Your metabolic flexibility appears intact. Continue current dietary patterns and maintain resistance training frequency.',
    },
  ];

  const getStatusPillColor = (status: string) => {
    switch (status) {
      case 'Optimal':
        return { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500' };
      case 'Watch':
        return { bg: 'bg-gold-dim', text: 'text-gold', dot: 'bg-gold' };
      case 'Low':
        return { bg: 'bg-red-500/10', text: 'text-red-400', dot: 'bg-red-500' };
      default:
        return { bg: 'bg-bg-dark', text: 'text-gray-400', dot: 'bg-gray-400' };
    }
  };

  const getProgressBarColor = (status: string) => {
    switch (status) {
      case 'Optimal':
        return 'bg-green-500';
      case 'Watch':
        return 'bg-gold';
      case 'Low':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getDotColor = (dot: string) => {
    switch (dot) {
      case 'optimal':
        return 'bg-green-500';
      case 'borderline':
        return 'bg-gold';
      case 'flag':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Portal Navigation */}
      <nav className="bg-bg-card border-b border-border sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-4">
              <div className="w-7 h-7 bg-teal rounded-lg text-white font-heading font-bold text-sm flex items-center justify-center">B</div>
              <span className="font-heading text-base text-white">Briella <span className="text-teal">Health</span></span>
            </a>
            <span className="text-xs font-bold text-teal uppercase tracking-wider bg-teal/10 border border-teal/30 rounded-full px-3 py-1">
              Patient Portal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-400">{user?.firstName} {user?.lastName?.charAt(0)}.</span>
            <div className="w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center text-sm font-bold">
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
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
                Overview
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>📊</span> Dashboard
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/results" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>🧬</span> My Results
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/trends" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📈</span> Trends
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/health-report" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📋</span> Health Report
                  </a>
                </li>
              </ul>
            </div>

            {/* Labs Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
                Labs
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal/order" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>🔬</span> Order Lab Panel
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/draw-site" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📍</span> Find Draw Site
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/history" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📅</span> Lab History
                  </a>
                </li>
              </ul>
            </div>

            {/* Provider Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
                Provider
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="#provider-cta" className="flex items-center gap-3 px-3 py-2 rounded-lg border border-teal/30 bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>📅</span> Meet a Provider
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-xs uppercase tracking-wider text-gray-500 font-bold mb-4">
                Account
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/patient-portal/settings" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>⚙️</span> Settings
                  </a>
                </li>
                <li>
                  <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition w-full text-left">
                    <span>↩️</span> Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {/* Header */}
          <div className="flex justify-between items-start flex-wrap gap-4 mb-8 fade-up">
            <div>
              <h1 className="font-heading font-extrabold text-2xl text-white mb-2">Good morning, {user?.firstName || 'there'}.</h1>
              <p className="text-gray-400 text-sm">
                Your last panel was drawn <strong className="text-white">March 12, 2026</strong> · Results complete
              </p>
            </div>
            <div className="flex items-center gap-3">
              {user?.memberId && (
                <span className="text-gray-500 text-xs font-mono">ID: {user.memberId}</span>
              )}
              <a href="/patient-portal/order" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-teal-light transition btn-primary">
                Order Next Panel
              </a>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-white/5 border border-border text-gray-400 font-semibold text-sm px-4 py-2 rounded-lg hover:text-white hover:border-border-strong transition btn-secondary"
              >
                Sign Out
              </button>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8 fade-up">
            {/* Briella Health Score */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-1">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="font-heading font-extrabold text-4xl text-teal">84</span>
                <span className="text-gray-400 text-sm font-medium">/100</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">Briella Health Score</p>
              <p className="text-teal text-sm font-medium">↑ 6 pts from last year</p>
            </div>

            {/* Optimal */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-2">
              <div className="mb-2">
                <span className="font-heading font-extrabold text-4xl text-white">67</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">Biomarkers in optimal range</p>
              <p className="text-teal text-sm font-medium">↑ 8 from prior panel</p>
            </div>

            {/* Watch */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-3">
              <div className="mb-2">
                <span className="font-heading font-extrabold text-4xl text-gold">4</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">Markers to watch</p>
              <p className="text-gray-500 text-sm">Same as prior panel</p>
            </div>

            {/* Out of Optimal */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-4">
              <div className="mb-2">
                <span className="font-heading font-extrabold text-4xl text-red-500">1</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">Markers out of optimal</p>
              <p className="text-teal text-sm font-medium">↓ 2 from prior panel</p>
            </div>
          </div>

          {/* Key Biomarker Results */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mb-8 card-hover card-glow fade-up">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-1">Key Biomarker Results — March 2026</h2>
                <p className="text-gray-400 text-xs">Click any card to view historical trend</p>
              </div>
              <a href="#" className="text-teal text-xs font-semibold hover:text-teal-light transition">View all 68 markers →</a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {biomarkers.map((marker, idx) => {
                const colors = getStatusPillColor(marker.status);
                const barColor = getProgressBarColor(marker.status);

                let borderColor = 'border-border';
                if (marker.status === 'Optimal') borderColor = 'border-green-500/30';
                else if (marker.status === 'Watch') borderColor = 'border-gold/30';
                else if (marker.status === 'Low') borderColor = 'border-red-500/30';

                return (
                  <div key={idx} className={`bg-bg-card border ${borderColor} rounded-lg p-5 card-hover card-glow ${idx % 4 === 0 ? 'delay-1' : idx % 4 === 1 ? 'delay-2' : idx % 4 === 2 ? 'delay-3' : 'delay-4'}`}>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">{marker.name}</p>
                    <div className="mb-3">
                      <span className="font-heading font-extrabold text-2xl text-white">{marker.value}</span>
                      <span className="text-gray-500 text-xs ml-1">{marker.unit}</span>
                    </div>
                    <div className="h-1 bg-bg-dark rounded-full overflow-hidden mb-3">
                      <div className={`h-full ${barColor}`} style={{ width: `${marker.fill}%` }} />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                      {marker.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Biomarker Trends Chart */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mb-8 card-hover card-glow fade-up">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="font-heading font-bold text-xl text-white mb-1">Biomarker Trends — 3-Year View</h2>
                <p className="text-gray-400 text-xs">Vitamin D · hs-CRP · Ferritin over time</p>
              </div>
              <div className="flex gap-4 text-xs">
                <span className="text-green-500">● Vitamin D</span>
                <span className="text-teal">● hs-CRP</span>
                <span className="text-gold">● Ferritin</span>
              </div>
            </div>
            <div style={{ position: 'relative', height: '300px' }}>
              <canvas id="trendChart" height="100"></canvas>
            </div>
          </div>

          {/* Thyroid and Metabolic Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 fade-up">
            {/* Thyroid Panel */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-1">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Thyroid Panel</h2>
                <p className="text-gray-400 text-xs">TSH · Free T3 · Free T4</p>
              </div>
              <div style={{ position: 'relative', height: '240px' }}>
                <canvas id="thyroidChart" height="160"></canvas>
              </div>
            </div>

            {/* Metabolic Panel */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-2">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Metabolic Panel</h2>
                <p className="text-gray-400 text-xs">Fasting Glucose · HbA1c · Insulin</p>
              </div>
              <div style={{ position: 'relative', height: '240px' }}>
                <canvas id="metabolicChart" height="160"></canvas>
              </div>
            </div>
          </div>

          {/* Physician Insights */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mb-8 card-hover card-glow fade-up">
            <h2 className="font-heading font-bold text-xl text-white mb-6">💡 Physician Insights — March 2026</h2>
            <div className="space-y-6">
              {insights.map((insight, idx) => (
                <div key={idx} className={`flex gap-4 pb-6 border-b border-border last:border-0 last:pb-0 ${idx === 0 ? 'delay-1' : idx === 1 ? 'delay-2' : idx === 2 ? 'delay-3' : idx === 3 ? 'delay-4' : 'delay-5'}`}>
                  <div className={`w-2 h-2 ${getDotColor(insight.dot)} rounded-full flex-shrink-0 mt-2`} />
                  <div>
                    <h3 className="text-white font-semibold mb-2">{insight.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Provider CTA Section */}
          <div
            className="relative overflow-hidden rounded-xl p-8 mb-8 border border-teal/30 card-hover card-glow fade-up"
            style={{
              background: 'linear-gradient(135deg, #0a1f2e 0%, #0d2a3a 60%, rgba(107,139,111,0.08) 100%)',
            }}
            id="provider-cta"
          >
            {/* Decorative gradient overlay */}
            <div
              className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(107,139,111,0.08) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start">
              {/* Left Content */}
              <div className="flex-1">
                <p className="text-teal text-xs font-bold uppercase tracking-wider mb-3">Your Next Step</p>
                <h2 className="font-heading font-extrabold text-2xl text-white mb-4">Discuss Your Results with a Provider</h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Your March panel shows <strong className="text-gray-300">ferritin at 18 ng/mL</strong> — below functional optimal — along with
                  <strong className="text-gray-300"> hs-CRP trending upward</strong> and mildly elevated homocysteine.
                  A brief consultation with a licensed provider can help you translate these findings into a
                  personalized protocol and address the root causes behind these patterns.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">Free consultation, fast approval</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">No insurance required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">Doctor-led, individualized treatment plans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">Science-backed protocols — hormones, weight, energy</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal text-white flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-300 text-sm">Free expedited delivery on prescriptions</span>
                  </div>
                </div>

                <a
                  href="https://myleaderhealth.com/schedule/"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 bg-teal text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-light transition btn-primary"
                >
                  Schedule a Free Consultation →
                </a>
              </div>

              {/* Right Card */}
              <div className="lg:w-80 flex-shrink-0">
                <div className="bg-bg-card border border-border rounded-lg p-5 card-hover card-glow">
                  <div className="w-11 h-11 rounded-2xl bg-teal text-white font-heading font-bold text-xl flex items-center justify-center mb-3">L</div>
                  <h3 className="font-heading font-bold text-white mb-1">Leader Health</h3>
                  <p className="text-gray-500 text-xs mb-4">Science-Driven Care for Modern Wellness</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/30">Hormone Therapy</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/30">Peptide Therapy</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/30">Weight Management</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal/10 text-teal border border-teal/30">Metabolic Optimization</span>
                  </div>

                  <p className="text-gray-500 text-xs mb-4">✓ LegitScript Certified Provider</p>

                  <a
                    href="https://myleaderhealth.com/schedule/"
                    target="_blank"
                    rel="noopener"
                    className="block w-full text-center py-2 text-white text-xs font-bold rounded-lg border border-border hover:bg-white/5 transition btn-secondary"
                  >
                    Book at myleaderhealth.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

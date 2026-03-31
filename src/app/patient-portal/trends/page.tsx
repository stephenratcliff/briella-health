'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function TrendsPage() {
  useScrollReveal();
  const router = useRouter();
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);

  useEffect(() => {
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
              backgroundColor: '#111f2e',
              borderColor: 'rgba(255,255,255,0.1)',
              borderWidth: 1,
              titleColor: '#fff',
              bodyColor: '#9ca3af',
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

        // Key Markers chart
        const keyMarkersCanvas = document.getElementById('keyMarkersChart');
        if (keyMarkersCanvas) {
          new Chart(keyMarkersCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2023','Sep 2023','Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'Vitamin D (ng/mL)', data: [38, 42, 51, 58, 64, 68, 71], borderColor: '#22c55e', backgroundColor: 'rgba(34,197,94,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#22c55e', pointRadius: 4 },
                { label: 'hs-CRP (mg/L)', data: [2.8, 2.4, 2.0, 1.6, 1.4, 1.7, 2.1], borderColor: '#0d9488', backgroundColor: 'rgba(13,148,136,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#0d9488', pointRadius: 4 },
                { label: 'Ferritin (ng/mL)', data: [45, 38, 32, 28, 22, 20, 18], borderColor: '#d4a853', backgroundColor: 'rgba(212,168,83,0.08)', tension: 0.4, fill: true, pointBackgroundColor: '#d4a853', pointRadius: 4 }
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

        // Cardiovascular Trends chart
        const cardiovascularCanvas = document.getElementById('cardiovascularChart');
        if (cardiovascularCanvas) {
          new Chart(cardiovascularCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'ApoB (mg/dL)', data: [95, 92, 88, 85, 82], borderColor: '#0d9488', tension: 0.4, fill: false, pointBackgroundColor: '#0d9488', pointRadius: 4 },
                { label: 'hs-CRP (mg/L)', data: [2.8, 2.0, 1.4, 1.7, 2.1], borderColor: '#d4a853', tension: 0.4, fill: false, pointBackgroundColor: '#d4a853', pointRadius: 4 },
                { label: 'Homocysteine (µmol/L)', data: [11, 10.2, 9.8, 9.5, 9.2], borderColor: '#22c55e', tension: 0.4, fill: false, pointBackgroundColor: '#22c55e', pointRadius: 4 }
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

        // Hormonal Trends chart
        const hormonesCanvas = document.getElementById('hormonesChart');
        if (hormonesCanvas) {
          new Chart(hormonesCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'Testosterone Total (ng/dL)', data: [580, 610, 630, 645, 650], borderColor: '#0d9488', tension: 0.4, fill: false, pointBackgroundColor: '#0d9488', pointRadius: 4 },
                { label: 'DHEA-S (µg/dL)', data: [280, 295, 310, 318, 320], borderColor: '#d4a853', tension: 0.4, fill: false, pointBackgroundColor: '#d4a853', pointRadius: 4 }
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

        // Metabolic Trends chart
        const metabolicCanvas = document.getElementById('metabolicChart');
        if (metabolicCanvas) {
          new Chart(metabolicCanvas, {
            type: 'line',
            data: {
              labels: ['Mar 2024','Sep 2024','Mar 2025','Sep 2025','Mar 2026'],
              datasets: [
                { label: 'Fasting Glucose (mg/dL)', data: [88, 85, 84, 83, 82], borderColor: '#0d9488', tension: 0.4, fill: false, pointBackgroundColor: '#0d9488', pointRadius: 4 },
                { label: 'HbA1c ×10', data: [53, 52, 52, 51, 51], borderColor: '#22c55e', tension: 0.4, fill: false, pointBackgroundColor: '#22c55e', pointRadius: 4 },
                { label: 'Fasting Insulin (µIU/mL)', data: [9, 8, 7, 6, 4.8], borderColor: '#d4a853', tension: 0.4, fill: false, pointBackgroundColor: '#d4a853', pointRadius: 4 }
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
                  <a href="/patient-portal" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📊</span> Dashboard
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/results" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>🧬</span> My Results
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/trends" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>📈</span> Trends
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>🔬</span> Order Lab Panel
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📍</span> Find Draw Site
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
                  <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg border border-teal/30 bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>⚙️</span> Settings
                  </a>
                </li>
                <li>
                  <button onClick={handleLogout} className="w-full text-left flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
          <div className="mb-8 fade-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-2">Biomarker Trends</h1>
                <p className="text-gray-400 text-sm">
                  Track your progress across panels and identify patterns over time
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-white/5 border border-border text-gray-400 font-semibold text-sm px-4 py-2 rounded-lg hover:text-white hover:border-border-strong transition btn-secondary w-fit"
              >
                Sign Out
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 fade-up">
              <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-1">
                <div className="mb-2">
                  <span className="font-heading font-extrabold text-4xl text-white">5</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Total panels completed</p>
                <p className="text-teal text-xs font-medium">Since Mar 2023</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading font-extrabold text-4xl text-green-400">12</span>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>
                <p className="text-gray-400 text-sm mb-1">Markers improving</p>
                <p className="text-gray-500 text-xs">Over time period</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-3">
                <div className="mb-2">
                  <span className="font-heading font-extrabold text-4xl text-white">52</span>
                </div>
                <p className="text-gray-400 text-sm mb-1">Markers stable</p>
                <p className="text-gray-500 text-xs">Consistent range</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading font-extrabold text-4xl text-red-400">3</span>
                  <TrendingDown className="w-5 h-5 text-red-400" />
                </div>
                <p className="text-gray-400 text-sm mb-1">Markers declining</p>
                <p className="text-gray-500 text-xs">Watch these closely</p>
              </div>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-up mb-8">
            {/* Key Markers Chart */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-1">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Key Markers — 3-Year View</h2>
                <p className="text-gray-400 text-xs">Vitamin D · hs-CRP · Ferritin</p>
              </div>
              <div style={{ position: 'relative', height: '300px' }}>
                <canvas id="keyMarkersChart" height="100"></canvas>
              </div>
            </div>

            {/* Cardiovascular Trends */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-2">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Cardiovascular Trends</h2>
                <p className="text-gray-400 text-xs">ApoB · hs-CRP · Homocysteine</p>
              </div>
              <div style={{ position: 'relative', height: '300px' }}>
                <canvas id="cardiovascularChart" height="100"></canvas>
              </div>
            </div>
          </div>

          {/* Hormonal & Metabolic Trends */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-up mb-8">
            {/* Hormonal Trends */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-1">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Hormonal Trends</h2>
                <p className="text-gray-400 text-xs">Testosterone Total · DHEA-S</p>
              </div>
              <div style={{ position: 'relative', height: '300px' }}>
                <canvas id="hormonesChart" height="100"></canvas>
              </div>
            </div>

            {/* Metabolic Trends */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-2">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-xl text-white mb-1">Metabolic Trends</h2>
                <p className="text-gray-400 text-xs">Fasting Glucose · HbA1c · Insulin</p>
              </div>
              <div style={{ position: 'relative', height: '300px' }}>
                <canvas id="metabolicChart" height="100"></canvas>
              </div>
            </div>
          </div>

          {/* Markers to Watch Table */}
          <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow fade-up">
            <h2 className="font-heading font-bold text-xl text-white mb-6">⚠️ Markers to Watch</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">Marker</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">Prior Value</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">Current Value</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">Trend</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold text-xs uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  <tr className="hover:bg-bg-dark/50 transition">
                    <td className="py-4 px-4 text-white font-medium">hs-CRP</td>
                    <td className="py-4 px-4 text-gray-300">1.4 mg/L</td>
                    <td className="py-4 px-4 text-white font-semibold">2.1 mg/L</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-red-400" />
                        <span className="text-red-400">Trending up</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-dim text-gold">Watch</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-dark/50 transition">
                    <td className="py-4 px-4 text-white font-medium">Ferritin</td>
                    <td className="py-4 px-4 text-gray-300">45 ng/mL</td>
                    <td className="py-4 px-4 text-white font-semibold">18 ng/mL</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-red-400" />
                        <span className="text-red-400">Trending down</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-red-500/10 text-red-400">Low</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-bg-dark/50 transition">
                    <td className="py-4 px-4 text-white font-medium">Homocysteine</td>
                    <td className="py-4 px-4 text-gray-300">9.5 µmol/L</td>
                    <td className="py-4 px-4 text-white font-semibold">9.2 µmol/L</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Trending down</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold-dim text-gold">Watch</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-bg-dark/50 border border-border/50 rounded-lg">
              <p className="text-gray-400 text-sm">
                <strong className="text-white">Recommendations:</strong> Ferritin is declining and now below functional optimal. Consider iron supplementation and repeat testing in 90 days. hs-CRP is trending upward — evaluate diet, sleep, and inflammatory markers. Homocysteine is improving with B-complex support.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

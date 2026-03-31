'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface LabOrder {
  id: string;
  date: string;
  monthYear: string;
  panelName: string;
  status: 'complete' | 'processing' | 'pending';
  markerCount: number;
  drawDate?: string;
}

const LAB_HISTORY: LabOrder[] = [
  {
    id: '1',
    date: 'March 12, 2026',
    monthYear: 'March 2026',
    panelName: 'Complete Annual Panel',
    status: 'complete',
    markerCount: 100,
    drawDate: 'March 12, 2026'
  },
  {
    id: '2',
    date: 'September 14, 2025',
    monthYear: 'September 2025',
    panelName: 'Longitudinal Follow-Up Panel',
    status: 'complete',
    markerCount: 30,
    drawDate: 'September 14, 2025'
  },
  {
    id: '3',
    date: 'March 8, 2025',
    monthYear: 'March 2025',
    panelName: 'Complete Annual Panel',
    status: 'complete',
    markerCount: 100,
    drawDate: 'March 8, 2025'
  },
  {
    id: '4',
    date: 'September 10, 2024',
    monthYear: 'September 2024',
    panelName: 'Longitudinal Follow-Up Panel',
    status: 'complete',
    markerCount: 30,
    drawDate: 'September 10, 2024'
  },
  {
    id: '5',
    date: 'March 5, 2024',
    monthYear: 'March 2024',
    panelName: 'Complete Annual Panel',
    status: 'complete',
    markerCount: 100,
    drawDate: 'March 5, 2024'
  }
];

export default function LabHistoryPage() {
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'complete':
        return { bg: 'bg-green-500/10', text: 'text-green-400', dot: 'bg-green-500' };
      case 'processing':
        return { bg: 'bg-gold-dim', text: 'text-gold', dot: 'bg-gold' };
      case 'pending':
        return { bg: 'bg-blue-500/10', text: 'text-blue-400', dot: 'bg-blue-500' };
      default:
        return { bg: 'bg-bg-dark', text: 'text-gray-400', dot: 'bg-gray-400' };
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'complete':
        return 'Results Complete';
      case 'processing':
        return 'Processing';
      case 'pending':
        return 'Pending Draw';
      default:
        return status;
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
                  <a href="/patient-portal" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>📊</span> Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>🧬</span> My Results
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
                  <a href="/patient-portal/history" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
            <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Lab History</h1>
            <p className="text-gray-400 text-sm">
              View all your past lab orders and results. Click any order to view detailed biomarker data.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-4 fade-up">
            {LAB_HISTORY.map((order, idx) => {
              const colors = getStatusColor(order.status);
              return (
                <div
                  key={order.id}
                  className={`bg-bg-card border border-border rounded-xl p-6 card-hover card-glow transition ${idx % 5 === 0 ? 'delay-1' : idx % 5 === 1 ? 'delay-2' : idx % 5 === 2 ? 'delay-3' : idx % 5 === 3 ? 'delay-4' : 'delay-5'}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    {/* Left Side - Order Info */}
                    <div className="flex-1">
                      <div className="flex items-start gap-4">
                        {/* Dot Timeline */}
                        <div className="flex flex-col items-center pt-1">
                          <div className={`w-3 h-3 ${colors.dot} rounded-full`} />
                          {idx < LAB_HISTORY.length - 1 && (
                            <div className="w-0.5 h-12 bg-border mt-3" />
                          )}
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="mb-2">
                            <p className="text-xs text-gray-500 uppercase tracking-wide font-bold mb-1">{order.monthYear}</p>
                            <h3 className="font-heading font-bold text-white text-lg">{order.panelName}</h3>
                            <p className="text-gray-400 text-sm">Drawn on {order.drawDate}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Status & Action */}
                    <div className="flex flex-col md:items-end gap-3 md:flex-shrink-0">
                      <div className="flex flex-wrap gap-2">
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                          {getStatusLabel(order.status)}
                        </span>
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/10 text-blue-400">
                          {order.markerCount} markers
                        </span>
                      </div>
                      <button className="inline-flex items-center gap-2 bg-teal text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-teal-light transition btn-primary whitespace-nowrap">
                        View Results →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 fade-up">
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-1">
              <p className="text-gray-400 text-xs uppercase tracking-wide font-bold mb-2">Total Panels</p>
              <p className="font-heading font-extrabold text-4xl text-teal">{LAB_HISTORY.length}</p>
              <p className="text-gray-500 text-xs mt-2">Since joining Briella Health</p>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-2">
              <p className="text-gray-400 text-xs uppercase tracking-wide font-bold mb-2">Biomarkers Tracked</p>
              <p className="font-heading font-extrabold text-4xl text-teal">330+</p>
              <p className="text-gray-500 text-xs mt-2">Across all panels</p>
            </div>

            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-3">
              <p className="text-gray-400 text-xs uppercase tracking-wide font-bold mb-2">Years of Data</p>
              <p className="font-heading font-extrabold text-4xl text-teal">2+</p>
              <p className="text-gray-500 text-xs mt-2">Since March 2024</p>
            </div>
          </div>

          {/* Download & Export */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mt-12 card-hover card-glow fade-up">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="font-heading font-bold text-white mb-2">Export Your Lab Data</h3>
                <p className="text-gray-400 text-sm">
                  Download all your historical lab results as a comprehensive report for your records or to share with another provider.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 bg-white/5 border border-border text-gray-400 font-bold text-sm px-4 py-2 rounded-lg hover:text-white hover:border-border-strong transition btn-secondary">
                  📄 PDF Report
                </button>
                <button className="inline-flex items-center gap-2 bg-teal text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-teal-light transition btn-primary">
                  📊 Excel Sheet
                </button>
              </div>
            </div>
          </div>

          {/* Need Help */}
          <div className="bg-gradient-to-r from-teal/10 to-transparent border border-teal/30 rounded-xl p-8 mt-8 fade-up">
            <h3 className="font-heading font-bold text-white mb-2">Need Help Understanding Your Results?</h3>
            <p className="text-gray-300 text-sm mb-4">
              Schedule a consultation with one of our physicians to discuss trends, get personalized recommendations, and build an action plan tailored to your health goals.
            </p>
            <a
              href="https://myleaderhealth.com/schedule/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-teal text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-light transition btn-primary"
            >
              Schedule Free Consultation →
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

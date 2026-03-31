'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function FindDrawSitePage() {
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
                  <a href="/patient-portal/draw-site" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
            <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Find a Quest Diagnostics Draw Site</h1>
            <p className="text-gray-400 text-sm">
              Quest Diagnostics operates 2,000+ patient service centers nationwide. Book your draw appointment below.
            </p>
          </div>

          {/* Appointment Scheduler */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mb-12 card-hover card-glow fade-up">
            <div className="mb-6">
              <h2 className="font-heading font-bold text-xl text-white mb-2">Schedule Your Lab Draw</h2>
              <p className="text-gray-400 text-sm">Use the scheduler below to find a location near you and book your appointment.</p>
            </div>

            {/* iframe or fallback */}
            <div className="bg-bg-dark rounded-lg overflow-hidden mb-6" style={{ minHeight: '600px' }}>
              <iframe
                src="https://appointment.questdiagnostics.com/patient/confirmation"
                style={{
                  width: '100%',
                  height: '600px',
                  border: 'none'
                }}
                title="Quest Diagnostics Appointment Scheduler"
              />
            </div>

            {/* Fallback Link */}
            <div className="border-t border-border pt-6">
              <p className="text-gray-400 text-sm mb-4">
                Having trouble with the scheduler above? You can also find locations and book directly on Quest Diagnostics:
              </p>
              <a
                href="https://www.questdiagnostics.com/locations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-teal text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-light transition btn-primary"
              >
                Open Quest Diagnostics Locator →
              </a>
            </div>
          </div>

          {/* Tips Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-up">
            {/* What to Bring */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-1">
              <h3 className="font-heading font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">🎫</span> What to Bring
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>Photo ID</strong> (required — driver's license, passport, or state ID)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>Lab order</strong> (we send this electronically to Quest)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>Insurance card</strong> (optional, but helpful for your records)
                  </span>
                </li>
              </ul>
            </div>

            {/* Fasting */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-2">
              <h3 className="font-heading font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">🕐</span> Fasting Guidelines
              </h3>
              <div className="space-y-3">
                <p className="text-gray-300 text-sm">
                  <strong>Most panels require a 10–12 hour fast</strong> for accurate metabolic and glucose measurements.
                </p>
                <div className="bg-teal/10 border border-teal/30 rounded-lg p-3">
                  <p className="text-teal text-xs font-bold uppercase tracking-wide mb-1">Pro Tip</p>
                  <p className="text-gray-300 text-xs">Schedule your draw for the morning (7–9 AM) to make fasting easier and improve accuracy for hormone testing.</p>
                </div>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-bg-card border border-border rounded-xl p-6 card-hover card-glow delay-3">
              <h3 className="font-heading font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-lg">📍</span> Best Timing
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>Morning draws</strong> (7–10 AM) recommended for hormone accuracy
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>Results turnaround:</strong> Typically 3–5 business days
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold flex-shrink-0">✓</span>
                  <span className="text-gray-300 text-sm">
                    <strong>No appointment needed</strong> at most Quest locations — walk-ins welcome
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mt-8 card-hover card-glow fade-up">
            <h3 className="font-heading font-bold text-white mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-teal font-semibold text-sm mb-2">How is my lab order sent to Quest?</h4>
                <p className="text-gray-400 text-sm">
                  Once you place your order, we transmit your lab order electronically to Quest Diagnostics. You'll receive a confirmation email with your order number. Simply present your photo ID at the draw site.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="text-teal font-semibold text-sm mb-2">Can I get my results early?</h4>
                <p className="text-gray-400 text-sm">
                  Results are typically available in your portal 3–5 business days after your draw. Expedited testing is not available for standard panels, but morning draws often process faster.
                </p>
              </div>
              <div className="border-t border-border pt-6">
                <h4 className="text-teal font-semibold text-sm mb-2">What if I need to reschedule?</h4>
                <p className="text-gray-400 text-sm">
                  Your lab order is valid for 30 days. You can reschedule your appointment directly through the Quest scheduler above or by calling your local Quest center.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

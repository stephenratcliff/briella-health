'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Download, CheckCircle, AlertCircle, Info } from 'lucide-react';

export default function HealthReportPage() {
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

  const getStatusColor = (status: 'optimal' | 'watch' | 'action') => {
    switch (status) {
      case 'optimal':
        return { bg: 'bg-green-500/10', text: 'text-green-400', badge: 'bg-green-500/20 border border-green-500/30' };
      case 'watch':
        return { bg: 'bg-gold-dim', text: 'text-gold', badge: 'bg-gold/20 border border-gold/30' };
      case 'action':
        return { bg: 'bg-red-500/10', text: 'text-red-400', badge: 'bg-red-500/20 border border-red-500/30' };
      default:
        return { bg: 'bg-bg-dark', text: 'text-gray-400', badge: 'bg-gray-500/20' };
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark">
      {/* Portal Navigation */}
      <nav className="bg-bg-card border-b border-border sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-7 h-7 bg-teal rounded-lg text-white font-heading font-bold text-sm flex items-center justify-center">B</div>
            <span className="font-heading text-base text-white">Briella <span className="text-teal">Health</span></span>
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
                  <a href="/patient-portal/health-report" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
                  <a href="/patient-portal/settings" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
                    <span>⚙️</span> Settings
                  </a>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition"
                  >
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
              <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Your Personalized Health Report</h1>
              <p className="text-gray-400 text-sm">
                AI-generated analysis powered by OptimalDX functional blood chemistry analysis
              </p>
              <p className="text-gray-500 text-xs mt-2">Generated March 15, 2026 · Based on your March 2026 panel</p>
            </div>
            <button
              disabled
              className="inline-flex items-center gap-2 bg-teal/30 text-teal font-semibold text-sm px-4 py-2 rounded-lg cursor-not-allowed"
            >
              <Download size={16} />
              Download PDF (Coming Soon)
            </button>
          </div>

          {/* Overall Health Score Card */}
          <div className="bg-gradient-to-br from-bg-card to-bg-card border border-teal/30 rounded-xl p-8 mb-8 card-hover card-glow fade-up">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div>
                <p className="text-gray-400 text-sm mb-3">Overall Health Score</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-extrabold text-6xl text-teal">84</span>
                  <span className="text-gray-400 text-xl">/100</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Based on your 100+ biomarker panel, your overall metabolic and cardiovascular health is strong. Key areas for optimization include iron storage (ferritin) and inflammatory markers (hs-CRP). Your thyroid and metabolic function are excellent.
                </p>
              </div>
            </div>
          </div>

          {/* Report Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cardiovascular Risk Assessment */}
            <div className="bg-bg-card border border-green-500/30 rounded-xl p-8 card-hover card-glow fade-up delay-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Cardiovascular Risk Assessment</h2>
                  <p className="text-gray-400 text-xs">ApoB, Lp(a), hs-CRP analysis</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">Optimal</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Risk Score: <span className="text-green-400 font-bold">Low</span></p>
                <p className="text-gray-400 text-sm">Your cardiovascular health markers are strong. ApoB at 85 mg/dL indicates excellent lipid particle profile. Lp(a) is naturally low at 12 nmol/L, which is favorable. Keep up current dietary and exercise patterns.</p>
              </div>
            </div>

            {/* Metabolic Health */}
            <div className="bg-bg-card border border-green-500/30 rounded-xl p-8 card-hover card-glow fade-up delay-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Metabolic Health</h2>
                  <p className="text-gray-400 text-xs">Fasting glucose, HbA1c, insulin, HOMA-IR</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">Optimal</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Insulin Sensitivity: <span className="text-green-400 font-bold">Excellent</span></p>
                <p className="text-gray-400 text-sm">Fasting glucose of 82 mg/dL, HbA1c of 5.1%, and fasting insulin of 7 µIU/mL indicate excellent metabolic flexibility. HOMA-IR of 1.4 shows no signs of metabolic dysfunction or insulin resistance.</p>
              </div>
            </div>

            {/* Hormonal Balance */}
            <div className="bg-bg-card border border-green-500/30 rounded-xl p-8 card-hover card-glow fade-up delay-3">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Hormonal Balance</h2>
                  <p className="text-gray-400 text-xs">Testosterone, thyroid markers, cortisol</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">Optimal</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Status: <span className="text-green-400 font-bold">Well-regulated</span></p>
                <p className="text-gray-400 text-sm">Your thyroid panel is excellent with TSH at 1.6 mIU/L and Free T3 at 3.6 pg/mL. Morning cortisol is appropriate at 18 µg/dL, indicating healthy HPA axis function. Hormone balance is solid.</p>
              </div>
            </div>

            {/* Nutrient Status */}
            <div className="bg-bg-card border border-gold/30 rounded-xl p-8 card-hover card-glow fade-up delay-4">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Nutrient Status</h2>
                  <p className="text-gray-400 text-xs">Ferritin, Vitamin D, B12</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold">Watch</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Status: <span className="text-gold font-bold">Action needed</span></p>
                <p className="text-gray-400 text-sm">Ferritin is flagged low at 18 ng/mL (optimal range: 50–100 ng/mL). Vitamin D is optimal at 71 ng/mL. B12 is adequate at 520 pg/mL. Iron supplementation recommended to prevent fatigue and hair shedding.</p>
              </div>
            </div>

            {/* Inflammatory Markers */}
            <div className="bg-bg-card border border-gold/30 rounded-xl p-8 card-hover card-glow fade-up delay-1">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Inflammatory Markers</h2>
                  <p className="text-gray-400 text-xs">hs-CRP, homocysteine trends</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-gold/20 border border-gold/30 text-gold">Watch</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Status: <span className="text-gold font-bold">Trending up</span></p>
                <p className="text-gray-400 text-sm">hs-CRP is trending upward from 1.4 to 2.1 mg/L. Homocysteine is slightly elevated at 9.2 µmol/L (optimal: &lt;8). Both respond well to omega-3 supplementation and methylated B-complex. Retest in 90 days.</p>
              </div>
            </div>

            {/* Organ Function */}
            <div className="bg-bg-card border border-green-500/30 rounded-xl p-8 card-hover card-glow fade-up delay-2">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-heading font-bold text-xl text-white mb-1">Organ Function</h2>
                  <p className="text-gray-400 text-xs">Liver and kidney panels</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400">Optimal</span>
              </div>
              <div className="mb-4">
                <p className="text-gray-300 text-sm mb-3">Status: <span className="text-green-400 font-bold">Excellent</span></p>
                <p className="text-gray-400 text-sm">Liver function tests (ALT, AST, GGT) and kidney markers (creatinine, eGFR, BUN) are all within optimal ranges. No hepatic or renal impairment detected. Continue current lifestyle patterns.</p>
              </div>
            </div>
          </div>

          {/* Methodology Section */}
          <div className="bg-bg-card border border-border rounded-xl p-8 mb-8 card-hover card-glow fade-up">
            <div className="flex gap-4 items-start">
              <Info className="text-teal flex-shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-heading font-bold text-lg text-white mb-3">About This Report</h3>
                <div className="space-y-3 text-sm text-gray-400">
                  <p>
                    This report uses <strong className="text-gray-300">OptimalDX's functional blood chemistry analysis engine</strong>. Unlike standard lab reporting, we evaluate your biomarkers against functional optimal ranges — the levels associated with vibrant health and disease prevention, not just the absence of disease.
                  </p>
                  <p>
                    Functional ranges are narrower and more stringent than standard lab reference ranges. For example, a ferritin level of 30 ng/mL might be "normal" by standard lab ranges but is suboptimal for energy, hair health, and exercise tolerance.
                  </p>
                  <p className="text-red-400">
                    This report is for educational purposes and does not constitute medical advice. Always consult with a licensed healthcare provider before making treatment decisions based on these findings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Items Card */}
          <div className="bg-bg-card border border-teal/30 rounded-xl p-8 card-hover card-glow fade-up">
            <h2 className="font-heading font-bold text-xl text-white mb-6">Recommended Actions</h2>
            <div className="space-y-4">
              <div className="flex gap-4 items-start pb-4 border-b border-border">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                <div>
                  <p className="text-white font-semibold mb-1">Begin iron supplementation</p>
                  <p className="text-gray-400 text-sm">Target ferritin: 50–100 ng/mL. Consider 25–50 mg elemental iron daily with vitamin C for absorption. Retest in 90 days.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-border">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                <div>
                  <p className="text-white font-semibold mb-1">Add omega-3 supplementation</p>
                  <p className="text-gray-400 text-sm">Target hs-CRP: &lt;1.0 mg/L. Consider 2–3g combined EPA/DHA daily from high-quality fish oil or algae source. Retest in 90 days.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-border">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                <div>
                  <p className="text-white font-semibold mb-1">Start methylated B-complex</p>
                  <p className="text-gray-400 text-sm">Target homocysteine: &lt;8 µmol/L. Choose a supplement with methylfolate (not folic acid) and methylcobalamin. Retest in 90 days.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start pb-4 border-b border-border">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                <div>
                  <p className="text-white font-semibold mb-1">Retest in 90 days</p>
                  <p className="text-gray-400 text-sm">Order the Longitudinal Follow-Up Panel to track ferritin, hs-CRP, and homocysteine. This allows you to measure protocol effectiveness.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-teal text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">5</div>
                <div>
                  <p className="text-white font-semibold mb-1">Schedule provider consultation</p>
                  <p className="text-gray-400 text-sm">A brief consultation with a Briella Health provider can help you create a personalized protocol and address root causes of these patterns.</p>
                  <a href="#" className="inline-flex items-center gap-2 bg-teal text-white font-semibold text-sm px-4 py-2 rounded-lg hover:bg-teal-light transition mt-3">
                    Schedule Consultation →
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

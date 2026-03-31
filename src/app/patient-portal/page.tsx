import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Portal — Briella Health',
};

export default function PatientPortalPage() {
  const biomarkers = [
    { name: 'Vitamin D', value: '71', unit: 'ng/mL', status: 'Optimal', fill: 70 },
    { name: 'hs-CRP', value: '2.1', unit: 'mg/L', status: 'Watch', fill: 40 },
    { name: 'Fasting Glucose', value: '82', unit: 'mg/dL', status: 'Optimal', fill: 65 },
    { name: 'Ferritin', value: '18', unit: 'ng/mL', status: 'Low', fill: 15 },
    { name: 'TSH', value: '1.6', unit: 'mIU/L', status: 'Optimal', fill: 60 },
    { name: 'Free T3', value: '3.6', unit: 'pg/mL', status: 'Optimal', fill: 70 },
    { name: 'HbA1c', value: '5.1', unit: '%', status: 'Optimal', fill: 55 },
    { name: 'Homocysteine', value: '9.2', unit: 'µmol/L', status: 'Watch', fill: 45 },
  ];

  const insights = [
    {
      icon: '🔴',
      title: 'Ferritin low at 18',
      description: 'Storage below optimal, fatigue risk',
    },
    {
      icon: '🟡',
      title: 'hs-CRP trending upward',
      description: 'Inflammation marker rising',
    },
    {
      icon: '🟡',
      title: 'Homocysteine slightly elevated',
      description: 'B-complex supplementation recommended',
    },
    {
      icon: '🟢',
      title: 'Thyroid excellent',
      description: 'Full panel in excellent shape',
    },
    {
      icon: '🟢',
      title: 'Metabolic health strong',
      description: 'Glucose, HbA1c, insulin all optimal',
    },
  ];

  const getStatusPillColor = (status: string) => {
    switch (status) {
      case 'Optimal':
        return { bg: 'bg-optimal-bg', text: 'text-optimal' };
      case 'Watch':
        return { bg: 'bg-borderline-bg', text: 'text-borderline' };
      case 'Low':
        return { bg: 'bg-flagged-bg', text: 'text-flagged' };
      default:
        return { bg: 'bg-sand-light', text: 'text-warm-gray-dark' };
    }
  };

  const getProgressBarColor = (status: string) => {
    switch (status) {
      case 'Optimal':
        return 'bg-optimal';
      case 'Watch':
        return 'bg-borderline';
      case 'Low':
        return 'bg-flagged';
      default:
        return 'bg-warm-gray';
    }
  };

  return (
    <div className="min-h-screen bg-cream-light">
      {/* Portal Navigation */}
      <nav className="bg-cream-light border-b border-sand-light sticky top-0 z-40">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="font-serif text-xl text-charcoal">Briella Health</span>
            <span className="bg-sand-light text-warm-gray-dark text-xs rounded-full px-2 py-0.5 font-medium">
              Patient Portal
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-charcoal">Sarah M.</span>
            <div className="w-8 h-8 bg-terracotta text-cream-light rounded-full flex items-center justify-center text-sm font-bold">
              SM
            </div>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden md:block w-56 bg-cream border-r border-sand-light min-h-screen">
          <nav className="p-6 space-y-8">
            {/* Overview Section */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-warm-gray-dark font-semibold mb-3">
                Overview
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block px-3 py-2 rounded-lg bg-sand-light text-charcoal text-sm">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    My Results
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Trends
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Health Report
                  </a>
                </li>
              </ul>
            </div>

            {/* Labs Section */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-warm-gray-dark font-semibold mb-3">
                Labs
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Order Panel
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Find Draw Site
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Lab History
                  </a>
                </li>
              </ul>
            </div>

            {/* Account Section */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-warm-gray-dark font-semibold mb-3">
                Account
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Settings
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 text-warm-gray-dark text-sm hover:bg-sand-light/50 rounded-lg transition">
                    Sign Out
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8">
          {/* Demo Banner */}
          <div className="mb-6 bg-sand-light text-warm-gray-dark text-sm text-center py-2 rounded-lg">
            This is a demo view of the Patient Portal
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-serif text-2xl text-charcoal mb-2">Good morning, Sarah.</h1>
            <p className="text-warm-gray-dark text-sm">
              Last panel: March 12, 2026 · Results complete
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {/* Briella Score */}
            <div className="bg-cream border border-sand-light rounded-xl p-6">
              <div className="flex items-baseline gap-1 mb-3">
                <span className="font-serif text-4xl text-olive">84</span>
                <span className="text-warm-gray-dark text-sm">/100</span>
              </div>
              <p className="text-olive text-sm font-medium">Briella Score</p>
              <p className="text-olive text-sm">↑ 6 pts</p>
            </div>

            {/* Optimal */}
            <div className="bg-cream border border-sand-light rounded-xl p-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-4xl text-olive">67</span>
              </div>
              <p className="text-warm-gray-dark text-sm mb-3">biomarkers</p>
              <p className="text-olive text-sm">↑ 8</p>
            </div>

            {/* Watch */}
            <div className="bg-cream border border-sand-light rounded-xl p-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-4xl text-borderline">4</span>
              </div>
              <p className="text-warm-gray-dark text-sm mb-3">markers</p>
              <p className="text-borderline text-sm">— same</p>
            </div>

            {/* Out of Optimal */}
            <div className="bg-cream border border-sand-light rounded-xl p-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-4xl text-flagged">1</span>
              </div>
              <p className="text-warm-gray-dark text-sm mb-3">marker</p>
              <p className="text-flagged text-sm">↓ 2</p>
            </div>
          </div>

          {/* Key Biomarkers */}
          <div className="mb-12">
            <h2 className="font-serif text-xl text-charcoal mb-6">Key Biomarkers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {biomarkers.map((marker, idx) => {
                const colors = getStatusPillColor(marker.status);
                const barColor = getProgressBarColor(marker.status);

                return (
                  <div key={idx} className="bg-cream border border-sand-light rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-warm-gray-dark font-semibold">
                          {marker.name}
                        </p>
                        <div className="flex items-baseline gap-2 mt-2">
                          <span className="font-serif text-2xl text-charcoal">{marker.value}</span>
                          <span className="text-sm text-warm-gray">{marker.unit}</span>
                        </div>
                      </div>
                      <span className={`${colors.bg} ${colors.text} text-xs font-medium rounded-full px-2 py-1`}>
                        {marker.status}
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-sand-light overflow-hidden">
                      <div
                        className={`h-full ${barColor} transition-all`}
                        style={{ width: `${marker.fill}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Physician Insights */}
          <div className="bg-cream-light border border-sand-light rounded-xl p-6">
            <h2 className="font-serif text-xl text-charcoal mb-6">Physician Insights</h2>
            <div className="space-y-4">
              {insights.map((insight, idx) => (
                <div key={idx} className="flex gap-4 pb-4 border-b border-sand-light last:border-0 last:pb-0">
                  <span className="text-2xl flex-shrink-0">{insight.icon}</span>
                  <div>
                    <p className="text-charcoal font-medium mb-1">{insight.title}</p>
                    <p className="text-warm-gray-dark text-sm">{insight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

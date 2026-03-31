'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ChevronDown, Search } from 'lucide-react';

type ResultCategory = {
  name: string;
  markers: {
    name: string;
    value: string;
    unit: string;
    status: 'Optimal' | 'Watch' | 'Low';
    optimalRange: string;
  }[];
};

export default function ResultsPage() {
  useScrollReveal();
  const router = useRouter();
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const [selectedPanel, setSelectedPanel] = useState('March 2026');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

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

  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const categories: ResultCategory[] = [
    {
      name: 'Cardiovascular',
      markers: [
        { name: 'ApoB', value: '82', unit: 'mg/dL', status: 'Optimal', optimalRange: '<90' },
        { name: 'Lp(a)', value: '15', unit: 'nmol/L', status: 'Optimal', optimalRange: '<75' },
        { name: 'hs-CRP', value: '2.1', unit: 'mg/L', status: 'Watch', optimalRange: '<1.0' },
        { name: 'Homocysteine', value: '9.2', unit: 'µmol/L', status: 'Watch', optimalRange: '<8.0' },
        { name: 'Total Cholesterol', value: '195', unit: 'mg/dL', status: 'Optimal', optimalRange: '<200' },
        { name: 'LDL', value: '110', unit: 'mg/dL', status: 'Optimal', optimalRange: '<100 ideal' },
        { name: 'HDL', value: '62', unit: 'mg/dL', status: 'Optimal', optimalRange: '>50' },
        { name: 'Triglycerides', value: '78', unit: 'mg/dL', status: 'Optimal', optimalRange: '<100' },
      ]
    },
    {
      name: 'Hormones',
      markers: [
        { name: 'Testosterone (Total)', value: '650', unit: 'ng/dL', status: 'Optimal', optimalRange: '>500' },
        { name: 'Testosterone (Free)', value: '15.2', unit: 'pg/mL', status: 'Optimal', optimalRange: '>9' },
        { name: 'SHBG', value: '38', unit: 'nmol/L', status: 'Optimal', optimalRange: '24–122' },
        { name: 'Estradiol', value: '28', unit: 'pg/mL', status: 'Optimal', optimalRange: '15–60' },
        { name: 'DHEA-S', value: '320', unit: 'µg/dL', status: 'Optimal', optimalRange: '>200' },
        { name: 'Cortisol', value: '14', unit: 'µg/dL', status: 'Optimal', optimalRange: '10–20' },
        { name: 'IGF-1', value: '195', unit: 'ng/mL', status: 'Optimal', optimalRange: '50–300' },
        { name: 'FSH', value: '4.2', unit: 'mIU/mL', status: 'Optimal', optimalRange: '1–12' },
        { name: 'LH', value: '5.1', unit: 'mIU/mL', status: 'Optimal', optimalRange: '1–9' },
        { name: 'Progesterone', value: '0.8', unit: 'ng/mL', status: 'Optimal', optimalRange: '<1.0' },
      ]
    },
    {
      name: 'Metabolic',
      markers: [
        { name: 'Fasting Glucose', value: '82', unit: 'mg/dL', status: 'Optimal', optimalRange: '<100' },
        { name: 'HbA1c', value: '5.1', unit: '%', status: 'Optimal', optimalRange: '<5.7' },
        { name: 'Fasting Insulin', value: '4.8', unit: 'µIU/mL', status: 'Optimal', optimalRange: '<5' },
        { name: 'HOMA-IR', value: '0.97', unit: '', status: 'Optimal', optimalRange: '<1.0' },
        { name: 'Uric Acid', value: '5.2', unit: 'mg/dL', status: 'Optimal', optimalRange: '<6.0' },
      ]
    },
    {
      name: 'Thyroid',
      markers: [
        { name: 'TSH', value: '1.6', unit: 'mIU/L', status: 'Optimal', optimalRange: '0.5–2.5' },
        { name: 'Free T3', value: '3.6', unit: 'pg/mL', status: 'Optimal', optimalRange: '2.4–4.2' },
        { name: 'Free T4', value: '1.3', unit: 'ng/dL', status: 'Optimal', optimalRange: '0.8–1.8' },
        { name: 'Reverse T3', value: '14', unit: 'ng/dL', status: 'Optimal', optimalRange: '<15' },
        { name: 'TPO Antibodies', value: '<10', unit: 'IU/mL', status: 'Optimal', optimalRange: '<35' },
        { name: 'Thyroglobulin Ab', value: '<1', unit: 'IU/mL', status: 'Optimal', optimalRange: '<1' },
      ]
    },
    {
      name: 'Immune & Inflammation',
      markers: [
        { name: 'IL-6', value: '1.8', unit: 'pg/mL', status: 'Optimal', optimalRange: '<3.0' },
        { name: 'Ferritin', value: '18', unit: 'ng/mL', status: 'Low', optimalRange: '50–100' },
        { name: 'CBC', value: 'Normal', unit: 'limits', status: 'Optimal', optimalRange: 'Normal' },
      ]
    },
    {
      name: 'Nutrients',
      markers: [
        { name: 'Vitamin D', value: '71', unit: 'ng/mL', status: 'Optimal', optimalRange: '>50' },
        { name: 'B12', value: '650', unit: 'pg/mL', status: 'Optimal', optimalRange: '>400' },
        { name: 'Folate', value: '18', unit: 'ng/mL', status: 'Optimal', optimalRange: '>10' },
        { name: 'Magnesium (RBC)', value: '5.8', unit: 'mg/dL', status: 'Optimal', optimalRange: '>5.2' },
        { name: 'Zinc', value: '95', unit: 'µg/dL', status: 'Optimal', optimalRange: '70–150' },
        { name: 'Selenium', value: '145', unit: 'µg/L', status: 'Optimal', optimalRange: '100–200' },
        { name: 'Omega-3 Index', value: '8.2', unit: '%', status: 'Optimal', optimalRange: '>8.0' },
        { name: 'CoQ10', value: '1.1', unit: 'mg/L', status: 'Optimal', optimalRange: '>0.8' },
      ]
    },
    {
      name: 'Organ Function',
      markers: [
        { name: 'Liver Panel', value: 'Optimal', unit: '', status: 'Optimal', optimalRange: 'Normal' },
        { name: 'Kidney Panel', value: 'Optimal', unit: '', status: 'Optimal', optimalRange: 'Normal' },
      ]
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

  const filteredCategories = categories
    .map(cat => ({
      ...cat,
      markers: cat.markers.filter(marker => {
        const matchesSearch = marker.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === 'All' || marker.status === filterStatus;
        return matchesSearch && matchesStatus;
      })
    }))
    .filter(cat => cat.markers.length > 0);

  const getCategoryStats = (markers: ResultCategory['markers']) => {
    const optimal = markers.filter(m => m.status === 'Optimal').length;
    const watch = markers.filter(m => m.status === 'Watch').length;
    const low = markers.filter(m => m.status === 'Low').length;
    return { optimal, watch, low };
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
                  <a href="/patient-portal/results" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
                    <span>🧬</span> My Results
                  </a>
                </li>
                <li>
                  <a href="/patient-portal/trends" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
                <h1 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-2">Complete Results — March 2026</h1>
                <p className="text-gray-400 text-sm">
                  All 75 biomarkers from your most recent panel, organized by category
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center gap-2 bg-white/5 border border-border text-gray-400 font-semibold text-sm px-4 py-2 rounded-lg hover:text-white hover:border-border-strong transition btn-secondary w-fit"
              >
                Sign Out
              </button>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 fade-up">
              {/* Panel Selector */}
              <div className="relative">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-2">
                  Test Panel
                </label>
                <div className="relative">
                  <select
                    value={selectedPanel}
                    onChange={(e) => setSelectedPanel(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-lg px-4 py-2 text-white text-sm appearance-none cursor-pointer hover:border-teal/50 focus:border-teal outline-none transition"
                  >
                    <option>March 2026 (Complete Annual)</option>
                    <option>Sep 2025 (Follow-Up)</option>
                    <option>Mar 2025 (Annual)</option>
                    <option>Sep 2024 (Follow-Up)</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Status Filter */}
              <div className="relative">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-2">
                  Filter by Status
                </label>
                <div className="relative">
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-lg px-4 py-2 text-white text-sm appearance-none cursor-pointer hover:border-teal/50 focus:border-teal outline-none transition"
                  >
                    <option>All</option>
                    <option>Optimal</option>
                    <option>Watch</option>
                    <option>Low</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                </div>
              </div>

              {/* Search */}
              <div className="relative">
                <label className="text-xs text-gray-400 font-bold uppercase tracking-wider block mb-2">
                  Search Markers
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="e.g., Vitamin D, cortisol..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-bg-card border border-border rounded-lg px-4 py-2 pl-10 text-white text-sm placeholder-gray-600 hover:border-teal/50 focus:border-teal outline-none transition"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Results by Category */}
          <div className="space-y-5 fade-up">
            {filteredCategories.map((category, categoryIdx) => {
              const stats = getCategoryStats(category.markers);
              const isExpanded = expandedCategories[category.name] !== false;

              return (
                <div
                  key={categoryIdx}
                  className={`bg-bg-card border border-border rounded-xl overflow-hidden card-hover card-glow ${categoryIdx % 3 === 0 ? 'delay-1' : categoryIdx % 3 === 1 ? 'delay-2' : 'delay-3'}`}
                >
                  {/* Category Header */}
                  <button
                    onClick={() => toggleCategory(category.name)}
                    className="w-full px-8 py-6 flex items-center justify-between hover:bg-bg-dark/50 transition text-left"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div>
                        <h2 className="font-heading font-bold text-lg text-white">{category.name}</h2>
                        <div className="flex gap-4 mt-2 text-xs">
                          <span className="text-gray-400">{category.markers.length} markers</span>
                          {stats.optimal > 0 && <span className="text-green-400">● {stats.optimal} optimal</span>}
                          {stats.watch > 0 && <span className="text-gold">● {stats.watch} watch</span>}
                          {stats.low > 0 && <span className="text-red-400">● {stats.low} low</span>}
                        </div>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Category Content */}
                  {isExpanded && (
                    <div className="border-t border-border px-8 py-6 space-y-4">
                      {category.markers.map((marker, markerIdx) => {
                        const colors = getStatusPillColor(marker.status);
                        let borderColor = 'border-border';
                        if (marker.status === 'Optimal') borderColor = 'border-green-500/30';
                        else if (marker.status === 'Watch') borderColor = 'border-gold/30';
                        else if (marker.status === 'Low') borderColor = 'border-red-500/30';

                        return (
                          <div
                            key={markerIdx}
                            className={`flex items-center justify-between p-4 bg-bg-dark/40 border ${borderColor} rounded-lg hover:bg-bg-dark/60 transition`}
                          >
                            <div className="flex-1">
                              <h3 className="text-white font-semibold text-sm mb-1">{marker.name}</h3>
                              <p className="text-gray-500 text-xs">Optimal range: {marker.optimalRange}</p>
                            </div>
                            <div className="flex items-center gap-4 ml-4">
                              <div className="text-right">
                                <div className="text-white font-bold text-lg">{marker.value}</div>
                                <div className="text-gray-500 text-xs">{marker.unit}</div>
                              </div>
                              <span className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${colors.bg} ${colors.text}`}>
                                {marker.status}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {filteredCategories.length === 0 && (
            <div className="text-center py-16 fade-up">
              <p className="text-gray-400 text-sm mb-2">No markers found matching your search.</p>
              <p className="text-gray-500 text-xs">Try adjusting your filters or search terms.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

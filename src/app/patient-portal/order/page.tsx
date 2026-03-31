'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface SelectedAddOns {
  [key: string]: boolean;
}

const ADDON_PANELS = [
  {
    id: 'cardio',
    name: 'Advanced Cardiovascular',
    price: 89,
    description: 'Deep dive into cardiovascular risk',
    markers: ['PLAC', 'OxLDL', 'MPO', 'sdLDL']
  },
  {
    id: 'hormone',
    name: 'Comprehensive Hormone',
    price: 99,
    description: 'Full male or female hormone panel',
    markers: ['DHEA-S', 'Prolactin', 'IGF-1', 'Additional sex hormones']
  },
  {
    id: 'gut',
    name: 'Gut Health & Inflammation',
    price: 79,
    description: 'Intestinal barrier and microbiome markers',
    markers: ['Calprotectin', 'Zonulin', 'Lactoferrin', 'Secretory IgA']
  },
  {
    id: 'metals',
    name: 'Heavy Metals',
    price: 129,
    description: 'Environmental toxin exposure screening',
    markers: ['Mercury', 'Lead', 'Arsenic', 'Cadmium']
  },
  {
    id: 'autoimmune',
    name: 'Autoimmune Screening',
    price: 99,
    description: 'Systemic autoimmune markers',
    markers: ['ANA', 'Anti-dsDNA', 'RF', 'Anti-CCP', 'Complement C3/C4']
  },
  {
    id: 'thyroid-adv',
    name: 'Advanced Thyroid',
    price: 69,
    description: 'Extended thyroid assessment',
    markers: ['Thyroid Ultrasound referral', 'Extended antibody panel']
  },
  {
    id: 'nutrigenomics',
    name: 'Nutrigenomics',
    price: 199,
    description: 'Genetic variations affecting nutrient metabolism',
    markers: ['MTHFR', 'COMT', 'VDR', 'APOE genotyping']
  },
  {
    id: 'mens',
    name: "Men's Vitality",
    price: 79,
    description: 'Male-specific health markers',
    markers: ['PSA', 'DHT', 'Prolactin', 'Estrone']
  },
  {
    id: 'womens',
    name: "Women's Wellness",
    price: 79,
    description: 'Female reproductive and cycle mapping',
    markers: ['AMH', 'Prolactin', 'Full cycle mapping markers']
  },
];

export default function OrderLabPanelPage() {
  useScrollReveal();
  const router = useRouter();
  const [user, setUser] = useState<{ firstName: string; lastName: string } | null>(null);
  const [selectedAddOns, setSelectedAddOns] = useState<SelectedAddOns>({});
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('briella-session');
    if (!session) {
      router.push('/login');
      return;
    }
    setUser(JSON.parse(session));
  }, [router]);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
    setShowCart(true);
  };

  const totalAddOnCost = ADDON_PANELS.reduce((sum, panel) => {
    return selectedAddOns[panel.id] ? sum + panel.price : sum;
  }, 0);

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
                  <a href="/patient-portal/order" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
            <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Order Lab Panel</h1>
            <p className="text-gray-400 text-sm">
              Choose your panel and optional add-ons. Your membership includes the annual panel.
            </p>
          </div>

          {/* Main Panels */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 fade-up">
            {/* Complete Annual Panel */}
            <div className="bg-bg-card border-2 border-teal rounded-xl p-8 card-hover card-glow delay-1">
              <div className="mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-heading font-bold text-2xl text-white mb-2">Complete Annual Panel</h2>
                    <p className="text-gray-400 text-sm">Comprehensive annual biomarker screening</p>
                  </div>
                </div>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-heading font-extrabold text-teal">$365</span>
                  <span className="text-gray-400 text-sm">/year</span>
                </div>
                <span className="inline-block bg-teal/20 border border-teal/40 text-teal text-xs font-bold px-3 py-1 rounded-full mb-4">
                  Included with membership
                </span>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Cardiovascular Health</p>
                  <p className="text-gray-300 text-sm">ApoB, Lp(a), hs-CRP, Homocysteine, Full Lipid Panel, Fibrinogen</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Hormones</p>
                  <p className="text-gray-300 text-sm">Total & Free Testosterone, SHBG, Estradiol, DHEA-S, Cortisol, IGF-1, FSH, LH, Progesterone</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Metabolic Function</p>
                  <p className="text-gray-300 text-sm">Fasting Glucose, HbA1c, Fasting Insulin, HOMA-IR, Uric Acid</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Thyroid Function</p>
                  <p className="text-gray-300 text-sm">TSH, Free T3, Free T4, Reverse T3, TPO Antibodies, Thyroglobulin Ab</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Immune & Inflammation</p>
                  <p className="text-gray-300 text-sm">IL-6, Ferritin, CBC with Differential</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Nutrients</p>
                  <p className="text-gray-300 text-sm">B12, Folate, Magnesium, Zinc, Selenium, Omega-3 Index, CoQ10, Vitamin D</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Organ Function</p>
                  <p className="text-gray-300 text-sm">Liver Panel, Kidney Panel (Comprehensive Metabolic Panel)</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Cancer Screening</p>
                  <p className="text-gray-300 text-sm">AFP</p>
                </div>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-teal text-white font-bold text-sm px-4 py-3 rounded-lg hover:bg-teal-light transition btn-primary">
                  Order Now
                </button>
              </div>
            </div>

            {/* Longitudinal Follow-Up Panel */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow delay-2">
              <div className="mb-6">
                <h2 className="font-heading font-bold text-2xl text-white mb-2">Longitudinal Follow-Up Panel</h2>
                <p className="text-gray-400 text-sm">Mid-year check-in with key progress markers</p>
                <div className="flex items-baseline gap-2 mt-4">
                  <span className="text-4xl font-heading font-extrabold text-gold">$149</span>
                  <span className="text-gray-400 text-sm">/panel</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs font-bold text-teal uppercase tracking-wide mb-2">Focus Markers (30 key tests)</p>
                  <p className="text-gray-300 text-sm">hs-CRP, Ferritin, Vitamin D, HbA1c, Fasting Insulin, Testosterone (total/free), TSH, Free T3, Homocysteine, CBC</p>
                </div>
                <p className="text-gray-400 text-sm italic">
                  Perfect for tracking progress between annual panels. Includes the most actionable markers for protocol adjustments.
                </p>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Streamlined testing for faster results</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Same lab quality as annual panel</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full bg-teal/20 text-teal flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-gray-300 text-sm">Track your progress between annual panels</span>
                </div>
              </div>

              <button className="w-full bg-white/5 border border-border text-gray-400 font-bold text-sm px-4 py-3 rounded-lg hover:text-white hover:border-border-strong transition btn-secondary">
                Add to Order
              </button>
            </div>
          </div>

          {/* Add-On Specialty Panels */}
          <div className="mb-12 fade-up">
            <h2 className="font-heading font-bold text-2xl text-white mb-6">Optional Add-On Panels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {ADDON_PANELS.map((panel, idx) => (
                <div
                  key={panel.id}
                  className={`bg-bg-card border ${selectedAddOns[panel.id] ? 'border-teal bg-teal/5' : 'border-border'} rounded-xl p-6 card-hover card-glow transition ${idx % 3 === 0 ? 'delay-1' : idx % 3 === 1 ? 'delay-2' : 'delay-3'}`}
                >
                  <h3 className="font-heading font-bold text-white mb-1">{panel.name}</h3>
                  <p className="text-gray-400 text-xs mb-3">{panel.description}</p>

                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="font-heading font-extrabold text-xl text-teal">${panel.price}</span>
                  </div>

                  <div className="mb-5 pb-5 border-b border-border">
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Markers Included</p>
                    <div className="flex flex-wrap gap-1">
                      {panel.markers.map((marker, i) => (
                        <span key={i} className="text-xs bg-bg-dark px-2 py-1 rounded text-gray-400">
                          {marker}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => toggleAddOn(panel.id)}
                    className={`w-full font-bold text-sm px-4 py-2 rounded-lg transition ${
                      selectedAddOns[panel.id]
                        ? 'bg-teal text-white hover:bg-teal-light'
                        : 'bg-white/5 border border-border text-gray-400 hover:text-white hover:border-border-strong'
                    }`}
                  >
                    {selectedAddOns[panel.id] ? '✓ Selected' : 'Add to Order'}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          {showCart && (
            <div className="fixed bottom-0 right-0 left-0 md:left-56 bg-bg-card border-t border-border p-6 fade-up">
              <div className="max-w-6xl mx-auto flex items-center justify-between gap-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Selected add-ons:</p>
                  <div className="flex flex-wrap gap-2">
                    {ADDON_PANELS.map(panel => {
                      if (selectedAddOns[panel.id]) {
                        return (
                          <span key={panel.id} className="text-xs bg-teal/10 border border-teal/30 text-teal px-3 py-1 rounded-full">
                            {panel.name} +${panel.price}
                          </span>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-gray-400 text-xs mb-1">Total add-on cost</p>
                    <p className="font-heading font-extrabold text-2xl text-teal">${totalAddOnCost}</p>
                  </div>
                  <button className="bg-teal text-white font-bold text-sm px-6 py-3 rounded-lg hover:bg-teal-light transition btn-primary whitespace-nowrap">
                    Complete Order
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Bottom spacing for cart */}
          {showCart && <div className="h-24" />}
        </main>
      </div>
    </div>
  );
}

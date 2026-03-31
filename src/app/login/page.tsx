'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'patient' | 'provider'>('patient');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>, type: 'patient' | 'provider') => {
    e.preventDefault();
    setError('');

    // Check localStorage for accounts
    const accounts = JSON.parse(localStorage.getItem('briella-accounts') || '[]');
    const match = accounts.find(
      (a: { email: string; password: string }) =>
        a.email === email.toLowerCase().trim() && a.password === password
    );

    if (match) {
      // Set session
      sessionStorage.setItem('briella-session', JSON.stringify({
        ...match,
        loggedInAt: new Date().toISOString(),
        type,
      }));
      // Redirect to portal
      if (type === 'patient') {
        router.push('/patient-portal');
      } else {
        router.push('/patient-portal'); // Same portal for now
      }
    } else {
      setError('No account found with that email and password.');
    }
  };

  return (
    <div className="min-h-screen bg-bg-dark flex flex-col items-center justify-center px-6 py-6">
      <div className="w-full max-w-lg">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-center gap-2.5 mb-11">
          <div className="w-9 h-9 bg-teal rounded flex items-center justify-center text-white font-heading font-bold text-sm">
            B
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Briella <span className="text-teal-light">Health</span>
          </span>
        </Link>

        {/* Card */}
        <div className="bg-bg-card border border-border rounded-3xl px-10 py-11 shadow-2xl">
          <h1 className="font-heading font-extrabold text-3xl text-white text-center mb-2">
            Welcome back
          </h1>
          <p className="text-gray-500 text-sm text-center mb-9">
            Sign in to your Briella Health account
          </p>

          {/* Tab Switcher */}
          <div className="grid grid-cols-2 border border-border rounded-2xl overflow-hidden mb-8">
            <button
              onClick={() => { setActiveTab('patient'); setError(''); }}
              className={`py-3 text-center text-sm font-bold uppercase tracking-[0.05em] transition ${
                activeTab === 'patient'
                  ? 'bg-teal-dim text-teal-light'
                  : 'bg-white/3% text-gray-500 hover:bg-white/6%'
              }`}
            >
              Patient
            </button>
            <button
              onClick={() => { setActiveTab('provider'); setError(''); }}
              className={`py-3 text-center text-sm font-bold uppercase tracking-[0.05em] transition border-l border-border ${
                activeTab === 'provider'
                  ? 'bg-teal-dim text-teal-light'
                  : 'bg-white/3% text-gray-500 hover:bg-white/6%'
              }`}
            >
              Provider / Team
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3 mb-6">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          {/* Patient Tab */}
          {activeTab === 'patient' && (
            <form onSubmit={(e) => handleLogin(e, 'patient')} noValidate className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="patientEmail" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Email
                </label>
                <input
                  id="patientEmail"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3.5 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="patientPass" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Password
                </label>
                <input
                  id="patientPass"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3.5 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white py-3.5 rounded-2xl font-heading font-bold text-sm transition hover:bg-teal-light mt-2"
              >
                Log In
              </button>
            </form>
          )}

          {/* Provider Tab */}
          {activeTab === 'provider' && (
            <form onSubmit={(e) => handleLogin(e, 'provider')} noValidate className="space-y-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="providerEmail" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Work Email
                </label>
                <input
                  id="providerEmail"
                  type="email"
                  placeholder="you@clinic.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3.5 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="providerPass" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Password
                </label>
                <input
                  id="providerPass"
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3.5 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-teal text-white py-3.5 rounded-2xl font-heading font-bold text-sm transition hover:bg-teal-light mt-2"
              >
                Log In to Provider Portal
              </button>
            </form>
          )}

          {/* Footer */}
          <div className="text-center text-sm text-gray-500 mt-7">
            <p>
              Not a member yet?{' '}
              <Link href="/signup" className="text-teal-light font-bold hover:underline">
                Join Briella Health
              </Link>
            </p>
            <p className="mt-2">
              Questions?{' '}
              <a href="mailto:hello@briellahealth.com" className="text-teal-light font-bold hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

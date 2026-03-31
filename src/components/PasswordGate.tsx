'use client';

import { useState, useEffect } from 'react';

const SITE_PASSWORD = 'briella2026';
const STORAGE_KEY = 'briella-auth';

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Check if already authenticated this session
    try {
      if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
        setAuthenticated(true);
      }
    } catch {
      // sessionStorage not available
    }
    setChecking(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === SITE_PASSWORD) {
      setAuthenticated(true);
      setError(false);
      try {
        sessionStorage.setItem(STORAGE_KEY, 'true');
      } catch {
        // ignore
      }
    } else {
      setError(true);
      setInput('');
    }
  };

  // Don't flash anything while checking session
  if (checking) {
    return (
      <div style={{ minHeight: '100vh', background: '#0b1623' }} />
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0b1623',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          background: '#111f2e',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '20px',
          padding: '48px 40px',
          maxWidth: '420px',
          width: '100%',
          margin: '0 20px',
          textAlign: 'center',
          boxShadow: '0 12px 40px rgba(0,0,0,0.35)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
          <div
            style={{
              background: '#0d9488',
              color: 'white',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Montserrat", system-ui, sans-serif',
              fontWeight: 900,
              fontSize: '16px',
            }}
          >
            B
          </div>
          <span style={{ color: 'white', fontFamily: '"Montserrat", system-ui, sans-serif', fontWeight: 800, fontSize: '20px' }}>
            Briella <span style={{ color: '#0d9488' }}>Health</span>
          </span>
        </div>

        <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>
          Preview Access
        </p>
        <h2 style={{ color: 'white', fontFamily: '"Montserrat", system-ui, sans-serif', fontWeight: 800, fontSize: '24px', marginBottom: '12px' }}>
          This site is in development
        </h2>
        <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
          Enter the access code to preview the Briella Health platform.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Enter access code"
            autoFocus
            style={{
              width: '100%',
              padding: '14px 18px',
              background: '#0b1623',
              border: error ? '1px solid #ef4444' : '1px solid rgba(255,255,255,0.12)',
              borderRadius: '10px',
              color: 'white',
              fontSize: '15px',
              outline: 'none',
              marginBottom: '8px',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#0d9488'; }}
            onBlur={(e) => { e.target.style.borderColor = error ? '#ef4444' : 'rgba(255,255,255,0.12)'; }}
          />
          {error && (
            <p style={{ color: '#ef4444', fontSize: '13px', marginBottom: '8px', textAlign: 'left' }}>
              Incorrect access code. Please try again.
            </p>
          )}
          <button
            type="submit"
            style={{
              width: '100%',
              padding: '14px',
              background: '#0d9488',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '14px',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              cursor: 'pointer',
              marginTop: '8px',
              transition: 'background 0.2s',
            }}
            onMouseOver={(e) => { (e.target as HTMLButtonElement).style.background = '#14b8b3'; }}
            onMouseOut={(e) => { (e.target as HTMLButtonElement).style.background = '#0d9488'; }}
          >
            Enter Site
          </button>
        </form>

        <p style={{ color: '#475569', fontSize: '12px', marginTop: '24px' }}>
          Need access? Contact <span style={{ color: '#0d9488' }}>hello@briellahealth.com</span>
        </p>
      </div>
    </div>
  );
}

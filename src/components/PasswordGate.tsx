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

  if (checking) {
    return (
      <div style={{ minHeight: '100vh', background: '#F5EDE3' }} />
    );
  }

  if (authenticated) {
    return <>{children}</>;
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F5EDE3',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Inter", system-ui, sans-serif',
      }}
    >
      <div
        style={{
          background: '#FFFFFF',
          border: '1px solid rgba(44,36,32,0.08)',
          borderRadius: '20px',
          padding: '48px 40px',
          maxWidth: '420px',
          width: '100%',
          margin: '0 20px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(44,36,32,0.06), 0 12px 40px rgba(44,36,32,0.08)',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '32px' }}>
          <div
            style={{
              background: '#6B8B6F',
              color: 'white',
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Source Serif 4", Georgia, serif',
              fontWeight: 900,
              fontSize: '16px',
            }}
          >
            B
          </div>
          <span style={{ color: '#2C2420', fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 800, fontSize: '20px' }}>
            Briella <span style={{ color: '#6B8B6F' }}>Health</span>
          </span>
        </div>

        <p style={{ color: '#6B8B6F', fontSize: '14px', marginBottom: '8px', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700 }}>
          Preview Access
        </p>
        <h2 style={{ color: '#2C2420', fontFamily: '"Source Serif 4", Georgia, serif', fontWeight: 800, fontSize: '24px', marginBottom: '12px' }}>
          This site is in development
        </h2>
        <p style={{ color: '#7A6F65', fontSize: '14px', lineHeight: '1.6', marginBottom: '32px' }}>
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
              background: '#F5EDE3',
              border: error ? '1px solid #ef4444' : '1px solid rgba(44,36,32,0.12)',
              borderRadius: '10px',
              color: '#2C2420',
              fontSize: '15px',
              outline: 'none',
              marginBottom: '8px',
              boxSizing: 'border-box',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => { e.target.style.borderColor = '#6B8B6F'; }}
            onBlur={(e) => { e.target.style.borderColor = error ? '#ef4444' : 'rgba(44,36,32,0.12)'; }}
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
              background: '#6B8B6F',
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
            onMouseOver={(e) => { (e.target as HTMLButtonElement).style.background = '#7FA383'; }}
            onMouseOut={(e) => { (e.target as HTMLButtonElement).style.background = '#6B8B6F'; }}
          >
            Enter Site
          </button>
        </form>

        <p style={{ color: '#A69888', fontSize: '12px', marginTop: '24px' }}>
          Need access? Contact <span style={{ color: '#6B8B6F' }}>hello@briellahealth.com</span>
        </p>
      </div>
    </div>
  );
}

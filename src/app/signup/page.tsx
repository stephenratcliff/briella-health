'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function SignupPage() {
  const [selectedSex, setSelectedSex] = useState<'female' | 'male' | null>(null);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
  });

  const benefits = [
    {
      title: '100+ biomarkers in one panel',
      description: 'Cardiovascular, hormones, thyroid, metabolic, immune, nutrients, and more.',
    },
    {
      title: 'Quest Diagnostics nationwide',
      description: '2,000+ draw locations. Book at a time that works for you.',
    },
    {
      title: 'Results in 3–5 days',
      description: 'Plain-language explanations, optimal ranges, and year-over-year tracking.',
    },
    {
      title: '$365/year — all-inclusive',
      description: 'HSA/FSA eligible. No insurance required. No hidden fees.',
    },
  ];

  const stateOptions = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas',
    'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
    'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
    'South Dakota', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
  ];

  const handleSelectSex = (sex: 'female' | 'male') => {
    setSelectedSex(sex);
  };

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSignupSuccess(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-bg-dark">
      {/* Left Panel */}
      <div className="bg-bg-card border-r border-border px-14 py-12 lg:py-16 flex flex-col justify-center relative overflow-hidden">
        {/* Decorative gradient background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-radial from-teal/10 to-transparent pointer-events-none" />

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 mb-14 relative z-10">
          <div className="w-9 h-9 bg-teal rounded flex items-center justify-center text-white font-heading font-bold text-sm">
            B
          </div>
          <span className="font-heading font-bold text-xl text-white">
            Briella <span className="text-teal-light">Health</span>
          </span>
        </Link>

        {/* Heading */}
        <h1 className="font-heading font-extrabold text-5xl text-white mb-5 leading-snug relative z-10">
          Your health,<br /><em style={{ fontStyle: 'normal', color: 'var(--teal-light)' }}>finally complete.</em>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-base leading-relaxed mb-11 max-w-md relative z-10">
          100+ biomarkers tested annually through Quest Diagnostics. Clear results, actionable insights, and physician-reviewed data — for less than $1 a day.
        </p>

        {/* Benefits List */}
        <ul className="space-y-4 mb-16 relative z-10">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3.5">
              <div className="w-7 h-7 rounded-full bg-teal-dim border border-teal-border flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-light">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className="flex-grow">
                <strong className="block text-white text-sm font-bold mb-0.5">{benefit.title}</strong>
                <span className="text-gray-500 text-xs leading-snug">{benefit.description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer disclaimer */}
        <p className="text-gray-600 text-xs leading-relaxed border-t border-border pt-6 relative z-10">
          Briella Health is a healthcare technology company. Lab services provided by independent CLIA-certified labs through Quest Diagnostics. Not a substitute for medical care.
        </p>
      </div>

      {/* Right Panel */}
      <div className="px-14 py-12 lg:py-16 flex flex-col justify-center overflow-y-auto">
        <div className="max-w-md w-full">
          {/* Form Header */}
          <div className="mb-9">
            <h2 className="font-heading font-extrabold text-3xl text-white mb-2">
              Member Signup
            </h2>
            <p className="text-gray-400 text-sm mb-1.5">
              It's time to own your health — from heart to hormones, thyroid to metabolism and beyond.
            </p>
            <p className="text-gray-500 text-xs">
              Already a member?{' '}
              <Link href="/login" className="text-teal-light font-bold hover:underline">
                Log in
              </Link>
            </p>
          </div>

          {!signupSuccess ? (
            <form onSubmit={handleSignup} noValidate className="space-y-0">
              {/* Email */}
              <div className="flex flex-col gap-1.5 mb-4">
                <label htmlFor="signupEmail" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Email Address
                </label>
                <input
                  id="signupEmail"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                />
              </div>

              {/* Name Grid */}
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="signupFirst" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                    First Name
                  </label>
                  <input
                    id="signupFirst"
                    type="text"
                    name="firstName"
                    placeholder="First"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="signupLast" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                    Last Name
                  </label>
                  <input
                    id="signupLast"
                    type="text"
                    name="lastName"
                    placeholder="Last"
                    required
                    className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                  />
                </div>
              </div>

              {/* Phone & DOB */}
              <div className="grid grid-cols-2 gap-3.5 mb-3.5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="signupPhone" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                    Phone Number
                  </label>
                  <input
                    id="signupPhone"
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    required
                    className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="signupDOB" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                    Date of Birth
                  </label>
                  <input
                    id="signupDOB"
                    type="date"
                    name="dob"
                    required
                    className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)]"
                  />
                </div>
              </div>

              {/* Sex Toggle */}
              <div className="flex flex-col gap-1.5 mb-3.5">
                <label className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Biological Sex
                </label>
                <div className="grid grid-cols-2 gap-0 border border-border rounded-2xl overflow-hidden">
                  <button
                    type="button"
                    id="sexFemale"
                    onClick={() => handleSelectSex('female')}
                    className={`py-3 text-center font-body text-sm font-bold transition border-r border-border ${
                      selectedSex === 'female'
                        ? 'bg-teal-dim text-teal-light'
                        : 'bg-white/3% text-gray-400 hover:bg-white/6%'
                    }`}
                  >
                    Female
                  </button>
                  <button
                    type="button"
                    id="sexMale"
                    onClick={() => handleSelectSex('male')}
                    className={`py-3 text-center font-body text-sm font-bold transition ${
                      selectedSex === 'male'
                        ? 'bg-teal-dim text-teal-light'
                        : 'bg-white/3% text-gray-400 hover:bg-white/6%'
                    }`}
                  >
                    Male
                  </button>
                </div>
                <input type="hidden" name="sex" value={selectedSex || ''} />
              </div>

              {/* State Select */}
              <div className="flex flex-col gap-1.5 mb-5">
                <label htmlFor="signupState" className="text-xs font-bold uppercase tracking-[0.04em] text-gray-400">
                  Where Will You Be Testing?
                </label>
                <select
                  id="signupState"
                  name="state"
                  required
                  className="bg-white/4% border border-border rounded-2xl px-4 py-3 text-white font-body text-sm outline-none transition focus:border-teal focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)] appearance-none bg-[image:url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20width=%2712%27%20height=%2712%27%20fill=%27none%27%20stroke=%27%236b7280%27%20stroke-width=%272%27%20viewBox=%270%200%2024%2024%27%3E%3Cpolyline%20points=%276%209%2012%2015%2018%209%27/%3E%3C/svg%3E')] bg-no-repeat bg-[right_1rem_center] pr-9"
                >
                  <option value="" disabled selected>Select your state</option>
                  {stateOptions.map((state) => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* Divider */}
              <hr className="border-t border-border my-5" />

              {/* Agreements */}
              <div className="space-y-3 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="agreeTerms"
                    required
                    className="w-4.5 h-4.5 mt-0.5 flex-shrink-0 accent-teal cursor-pointer"
                  />
                  <span className="text-gray-400 text-xs leading-relaxed">
                    I agree to Briella Health's <a href="#" className="text-teal-light hover:underline">Terms of Service</a> and <a href="#" className="text-teal-light hover:underline">Privacy Policy</a>.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="agreeMedical"
                    required
                    className="w-4.5 h-4.5 mt-0.5 flex-shrink-0 accent-teal cursor-pointer"
                  />
                  <span className="text-gray-400 text-xs leading-relaxed">
                    I authorize Briella Health's affiliated medical practice to order laboratory tests on my behalf.
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id="agreeHIPAA"
                    required
                    className="w-4.5 h-4.5 mt-0.5 flex-shrink-0 accent-teal cursor-pointer"
                  />
                  <span className="text-gray-400 text-xs leading-relaxed">
                    I acknowledge Briella Health's <a href="#" className="text-teal-light hover:underline">HIPAA Notice of Privacy Practices</a> and <a href="#" className="text-teal-light hover:underline">Authorization for Use of Medical Information</a>.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submitBtn"
                className="w-full bg-teal text-white py-3.5 rounded-2xl font-heading font-bold text-sm transition hover:bg-teal-light mb-4"
              >
                Create My Account →
              </button>

              {/* Footer note */}
              <p className="text-gray-600 text-xs leading-relaxed text-center">
                Your name must match the ID you present at your lab visit. By creating an account you agree to receive important membership communications. HSA/FSA eligibility varies by plan.
              </p>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-teal-dim border-2 border-teal flex items-center justify-center mx-auto mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-teal-light">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl text-white mb-3">
                You're on the list.
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-7">
                Thanks for signing up, <strong>{formData.firstName}</strong>. Briella Health is currently in pre-launch in Texas. We'll reach out to <strong>{formData.email}</strong> with next steps as soon as your membership is ready to activate.
              </p>
              <Link href="/" className="inline-block bg-teal text-white px-8 py-3 rounded-2xl font-heading font-bold text-sm hover:bg-teal-light transition mb-4">
                Back to Home
              </Link>
              <br />
              <a href="#" className="text-teal-light text-xs font-medium hover:underline">
                Explore what we test →
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

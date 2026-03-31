'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Eye, EyeOff, Trash2, X } from 'lucide-react';

export default function SettingsPage() {
  useScrollReveal();
  const router = useRouter();
  const [user, setUser] = useState<{ firstName: string; lastName: string; email: string; memberId: string; sex: string; state: string; createdAt: string } | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    dateOfBirth: '',
    biologicalSex: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false,
  });
  const [authorizedProviders, setAuthorizedProviders] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      type: 'Physician',
      practice: 'Optimal Health Clinic',
      email: 'sarah@optimalhealthclinic.com',
      npi: '1234567890',
    },
  ]);
  const [newProvider, setNewProvider] = useState({
    name: '',
    type: '',
    practice: '',
    email: '',
    phone: '',
    npi: '',
  });
  const [physicianAuth, setPhysicianAuth] = useState(true);
  const [providerRelease, setProviderRelease] = useState(false);
  const [notifications, setNotifications] = useState({
    results: true,
    insights: true,
    marketing: false,
  });
  const [saveSuccess, setSaveSuccess] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    // Check for session
    const session = sessionStorage.getItem('briella-session');
    if (!session) {
      router.push('/login');
      return;
    }
    const userData = JSON.parse(session);
    setUser(userData);
    setFormData({
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      phone: '',
      dateOfBirth: '',
      biologicalSex: userData.sex || '',
      street: '',
      city: '',
      state: userData.state || '',
      zip: '',
    });
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('briella-session');
    router.push('/login');
  };

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData({ ...passwordData, [name]: value });
  };

  const handleProviderChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewProvider({ ...newProvider, [name]: value });
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock save
    setSaveSuccess('Profile updated successfully');
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handleUpdatePassword = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!passwordData.current) newErrors.current = 'Current password is required';
    if (!passwordData.new) newErrors.new = 'New password is required';
    if (passwordData.new.length < 8) newErrors.new = 'Password must be at least 8 characters';
    if (passwordData.new !== passwordData.confirm) newErrors.confirm = 'Passwords do not match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Mock update
    setSaveSuccess('Password updated successfully');
    setPasswordData({ current: '', new: '', confirm: '' });
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handleAddProvider = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!newProvider.name) newErrors.name = 'Provider name is required';
    if (!newProvider.type) newErrors.type = 'Provider type is required';
    if (!newProvider.email) newErrors.email = 'Email is required';
    if (!providerRelease) newErrors.release = 'You must accept the authorization';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Add provider to list
    setAuthorizedProviders([
      ...authorizedProviders,
      {
        id: authorizedProviders.length + 1,
        name: newProvider.name,
        type: newProvider.type,
        practice: newProvider.practice,
        email: newProvider.email,
        npi: newProvider.npi,
      },
    ]);

    setNewProvider({ name: '', type: '', practice: '', email: '', phone: '', npi: '' });
    setSaveSuccess('Provider authorization submitted');
    setTimeout(() => setSaveSuccess(''), 3000);
  };

  const handleRevokeProvider = (id: number) => {
    setAuthorizedProviders(authorizedProviders.filter((p) => p.id !== id));
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
                  <a href="/patient-portal/health-report" className="flex items-center gap-3 px-3 py-2 text-gray-400 text-sm hover:bg-bg-dark rounded-lg transition">
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
                  <a href="/patient-portal/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-teal/10 text-teal text-sm font-medium hover:bg-teal/15 transition">
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
          <div className="mb-8 fade-up">
            <h1 className="font-heading font-extrabold text-3xl text-white mb-2">Account Settings</h1>
            <p className="text-gray-400 text-sm">Manage your profile, security, and provider authorizations</p>
          </div>

          {/* Success Message */}
          {saveSuccess && (
            <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3 fade-up">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">✓</div>
              <p className="text-green-400 text-sm">{saveSuccess}</p>
            </div>
          )}

          <div className="space-y-8">
            {/* Profile Information Section */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow fade-up">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">Profile Information</h2>
              <form onSubmit={handleSaveProfile} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleProfileChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                    {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleProfileChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                    {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    value={user?.email || ''}
                    disabled
                    className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-gray-500 cursor-not-allowed"
                  />
                  <p className="text-gray-500 text-xs mt-1">Contact support to change email</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleProfileChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleProfileChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Biological Sex</label>
                  <select
                    name="biologicalSex"
                    value={formData.biologicalSex}
                    onChange={handleProfileChange}
                    className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white focus:outline-none focus:border-teal"
                  >
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Street Address</label>
                  <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleProfileChange}
                    placeholder="123 Main St"
                    className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleProfileChange}
                      placeholder="San Francisco"
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">State</label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleProfileChange}
                      placeholder="CA"
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">ZIP Code</label>
                    <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleProfileChange}
                      placeholder="94102"
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-teal text-white font-semibold text-sm px-6 py-2 rounded-lg hover:bg-teal-light transition"
                >
                  Save Changes
                </button>
              </form>
            </div>

            {/* Change Password Section */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow fade-up delay-1">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">Change Password</h2>
              <form onSubmit={handleUpdatePassword} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Current Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords.current ? 'text' : 'password'}
                      name="current"
                      value={passwordData.current}
                      onChange={handlePasswordChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswords({ ...showPasswords, current: !showPasswords.current })}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                    >
                      {showPasswords.current ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.current && <p className="text-red-400 text-xs mt-1">{errors.current}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">New Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords.new ? 'text' : 'password'}
                      name="new"
                      value={passwordData.new}
                      onChange={handlePasswordChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswords({ ...showPasswords, new: !showPasswords.new })}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                    >
                      {showPasswords.new ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.new && <p className="text-red-400 text-xs mt-1">{errors.new}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">Confirm New Password</label>
                  <div className="relative">
                    <input
                      type={showPasswords.confirm ? 'text' : 'password'}
                      name="confirm"
                      value={passwordData.confirm}
                      onChange={handlePasswordChange}
                      className="w-full bg-bg-dark border border-border rounded-lg px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPasswords({ ...showPasswords, confirm: !showPasswords.confirm })}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400"
                    >
                      {showPasswords.confirm ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                  {errors.confirm && <p className="text-red-400 text-xs mt-1">{errors.confirm}</p>}
                </div>

                <button
                  type="submit"
                  className="bg-teal text-white font-semibold text-sm px-6 py-2 rounded-lg hover:bg-teal-light transition"
                >
                  Update Password
                </button>
              </form>
            </div>

            {/* Provider Authorization Section */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow fade-up delay-2">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">Provider Authorization & PHI Release</h2>

              {/* Supervising Physician */}
              <div className="mb-8 pb-8 border-b border-border">
                <h3 className="font-heading font-bold text-lg text-white mb-4">Supervising Physician Authorization</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Briella Health lab orders are authorized by our affiliated supervising physician. By using our service, you authorize this physician to review your results and order lab panels on your behalf.
                </p>

                <div className="flex items-center gap-3 p-4 bg-bg-dark rounded-lg">
                  <input
                    type="checkbox"
                    checked={physicianAuth}
                    onChange={(e) => setPhysicianAuth(e.target.checked)}
                    className="w-4 h-4 rounded cursor-pointer"
                  />
                  <label className="flex-1 text-sm text-gray-300 cursor-pointer">
                    I acknowledge and authorize Briella Health's supervising physician to order laboratory tests and review results on my behalf.
                  </label>
                  {physicianAuth && <span className="text-green-400">✓ Authorized</span>}
                </div>
              </div>

              {/* Third-Party Provider Release */}
              <div>
                <h3 className="font-heading font-bold text-lg text-white mb-4">Third-Party Provider Release</h3>
                <p className="text-gray-400 text-sm mb-6">
                  You may authorize Briella Health to share your lab results with a third-party healthcare provider of your choosing. This allows your physician, naturopath, or wellness provider to access your biomarker data directly.
                </p>

                <form onSubmit={handleAddProvider} className="mb-8 p-6 bg-bg-dark rounded-lg border border-border">
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Provider Name</label>
                        <input
                          type="text"
                          name="name"
                          value={newProvider.name}
                          onChange={handleProviderChange}
                          placeholder="Dr. Jane Smith"
                          className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                        />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Provider Type</label>
                        <select
                          name="type"
                          value={newProvider.type}
                          onChange={handleProviderChange}
                          className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white focus:outline-none focus:border-teal"
                        >
                          <option value="">Select type...</option>
                          <option value="Physician">Physician</option>
                          <option value="Nurse Practitioner">Nurse Practitioner</option>
                          <option value="Naturopathic Doctor">Naturopathic Doctor</option>
                          <option value="Chiropractor">Chiropractor</option>
                          <option value="Med Spa Provider">Med Spa Provider</option>
                          <option value="Wellness Coach">Wellness Coach</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.type && <p className="text-red-400 text-xs mt-1">{errors.type}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">Practice Name</label>
                      <input
                        type="text"
                        name="practice"
                        value={newProvider.practice}
                        onChange={handleProviderChange}
                        placeholder="Wellness Health Center"
                        className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={newProvider.email}
                          onChange={handleProviderChange}
                          placeholder="provider@example.com"
                          className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                        />
                        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={newProvider.phone}
                          onChange={handleProviderChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-2">NPI (Optional)</label>
                      <input
                        type="text"
                        name="npi"
                        value={newProvider.npi}
                        onChange={handleProviderChange}
                        placeholder="1234567890"
                        className="w-full bg-bg-card border border-border rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-teal"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          checked={providerRelease}
                          onChange={(e) => setProviderRelease(e.target.checked)}
                          className="w-4 h-4 rounded cursor-pointer mt-1"
                        />
                        <label className="text-sm text-gray-300 cursor-pointer">
                          I authorize Briella Health to release my protected health information (PHI), including laboratory results and health reports, to the provider named above for the purpose of coordinating my healthcare.
                        </label>
                      </div>
                      {errors.release && <p className="text-red-400 text-xs">{errors.release}</p>}

                      <div className="flex items-start gap-3">
                        <input type="checkbox" className="w-4 h-4 rounded cursor-pointer mt-1" />
                        <label className="text-sm text-gray-300 cursor-pointer">
                          I understand this authorization is voluntary and I may revoke it at any time by contacting hello@briellahealth.com
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal text-white font-semibold text-sm px-6 py-2 rounded-lg hover:bg-teal-light transition"
                    >
                      Submit Authorization
                    </button>
                  </div>
                </form>

                {/* Previously Authorized Providers */}
                {authorizedProviders.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-white mb-4">Authorized Providers</h4>
                    <div className="space-y-3">
                      {authorizedProviders.map((provider) => (
                        <div key={provider.id} className="flex items-start justify-between p-4 bg-bg-dark rounded-lg border border-border">
                          <div>
                            <p className="font-semibold text-white">{provider.name}</p>
                            <p className="text-xs text-gray-400">{provider.type}</p>
                            <p className="text-xs text-gray-500 mt-2">{provider.email}</p>
                          </div>
                          <button
                            onClick={() => handleRevokeProvider(provider.id)}
                            className="text-red-400 hover:text-red-300 transition"
                          >
                            Revoke
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Notification Preferences */}
            <div className="bg-bg-card border border-border rounded-xl p-8 card-hover card-glow fade-up delay-3">
              <h2 className="font-heading font-bold text-2xl text-white mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-bg-dark rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-white">Email notifications for results</p>
                    <p className="text-xs text-gray-400 mt-1">Get notified when your lab results are ready</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, results: !notifications.results })}
                    className={`relative w-10 h-6 rounded-full transition ${notifications.results ? 'bg-teal' : 'bg-gray-600'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${notifications.results ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-bg-dark rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-white">Email notifications for insights & recommendations</p>
                    <p className="text-xs text-gray-400 mt-1">Receive personalized health insights and protocol recommendations</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, insights: !notifications.insights })}
                    className={`relative w-10 h-6 rounded-full transition ${notifications.insights ? 'bg-teal' : 'bg-gray-600'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${notifications.insights ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-bg-dark rounded-lg border border-border">
                  <div>
                    <p className="font-medium text-white">Marketing communications</p>
                    <p className="text-xs text-gray-400 mt-1">Receive emails about new features and promotions</p>
                  </div>
                  <button
                    onClick={() => setNotifications({ ...notifications, marketing: !notifications.marketing })}
                    className={`relative w-10 h-6 rounded-full transition ${notifications.marketing ? 'bg-teal' : 'bg-gray-600'}`}
                  >
                    <div className={`absolute top-1 w-4 h-4 rounded-full bg-white transition ${notifications.marketing ? 'right-1' : 'left-1'}`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="bg-bg-card border border-red-500/30 rounded-xl p-8 card-hover card-glow fade-up delay-4">
              <h2 className="font-heading font-bold text-2xl text-red-400 mb-6">Danger Zone</h2>
              <p className="text-gray-400 text-sm mb-4">
                Permanently delete your account and all associated data. This action cannot be undone.
              </p>
              <button
                disabled
                className="inline-flex items-center gap-2 bg-red-500/20 text-red-400 font-semibold text-sm px-6 py-2 rounded-lg border border-red-500/30 cursor-not-allowed"
              >
                <Trash2 size={16} />
                Delete Account (Contact Support)
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

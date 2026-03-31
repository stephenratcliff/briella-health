import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Member Signup — Briella Health',
};

export default function SignupPage() {
  const benefits = [
    '100+ biomarkers in one panel',
    'Quest Diagnostics nationwide',
    'Results in 3-5 days',
    '$365/year — all-inclusive',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* Left Panel */}
      <div className="bg-bg-dark text-white p-8 md:p-12 flex flex-col justify-center">
        {/* Logo */}
        <Link href="/" className="mb-8 inline-block">
          <span className="font-heading text-2xl text-white hover:text-gray-300 transition">
            Briella Health
          </span>
        </Link>

        {/* Heading */}
        <h1 className="font-heading text-4xl md:text-5xl text-white mb-12 leading-tight">
          Your health, finally complete.
        </h1>

        {/* Benefits */}
        <ul className="space-y-4 mb-12">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-teal text-xl flex-shrink-0 mt-0.5">✓</span>
              <span className="text-white">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Footer Disclaimer */}
        <p className="text-gray-500 text-xs mt-auto">
          Briella Health is not a substitute for professional medical advice. Always consult with your healthcare provider.
        </p>
      </div>

      {/* Right Panel */}
      <div className="bg-bg-dark p-8 md:p-12 flex flex-col justify-center">
        {/* Heading */}
        <h2 className="font-heading text-2xl text-white mb-2">Member Signup</h2>
        <p className="text-gray-400 text-sm mb-8">
          Already a member?{' '}
          <Link href="/login" className="text-teal font-medium hover:text-teal-light transition">
            Log in
          </Link>
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
            />
          </div>

          {/* First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Sarah"
                className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Martinez"
                className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
              />
            </div>
          </div>

          {/* Phone + DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-white mb-2">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal transition"
              />
            </div>
          </div>

          {/* Biological Sex */}
          <div>
            <label className="block text-sm font-medium text-white mb-3">Biological Sex</label>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 bg-bg-mid border border-border rounded-xl px-4 py-3 text-white font-medium hover:border-teal transition"
              >
                Female
              </button>
              <button
                type="button"
                className="flex-1 bg-bg-mid border border-border rounded-xl px-4 py-3 text-white font-medium hover:border-teal transition"
              >
                Male
              </button>
            </div>
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-white mb-2">
              State
            </label>
            <select
              id="state"
              className="w-full bg-bg-mid border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-teal transition appearance-none"
            >
              <option value="">Select your state</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
              <option value="FL">Florida</option>
              <option value="IL">Illinois</option>
              <option value="PA">Pennsylvania</option>
            </select>
          </div>

          {/* Divider */}
          <div className="py-4">
            <div className="border-t border-border" />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-teal rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-400 leading-relaxed">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-teal rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-400 leading-relaxed">
                I consent to receive health updates and educational emails from Briella Health
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-teal rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-gray-400 leading-relaxed">
                I confirm I am 18 years or older
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal text-white py-3 rounded-xl font-medium hover:bg-teal-light transition mt-6"
          >
            Create My Account →
          </button>
        </form>
      </div>
    </div>
  );
}

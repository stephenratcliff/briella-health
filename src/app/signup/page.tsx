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
      <div className="bg-deep-earth text-cream-light p-8 md:p-12 flex flex-col justify-center">
        {/* Logo */}
        <Link href="/" className="mb-8 inline-block">
          <span className="font-serif text-2xl text-cream-light hover:text-sand-light transition">
            Briella Health
          </span>
        </Link>

        {/* Heading */}
        <h1 className="font-serif text-4xl md:text-5xl text-cream-light mb-12 leading-tight">
          Your health, finally complete.
        </h1>

        {/* Benefits */}
        <ul className="space-y-4 mb-12">
          {benefits.map((benefit, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="text-olive text-xl flex-shrink-0 mt-0.5">✓</span>
              <span className="text-cream-light">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Footer Disclaimer */}
        <p className="text-warm-gray text-xs mt-auto">
          Briella Health is not a substitute for professional medical advice. Always consult with your healthcare provider.
        </p>
      </div>

      {/* Right Panel */}
      <div className="bg-cream-light p-8 md:p-12 flex flex-col justify-center">
        {/* Heading */}
        <h2 className="font-serif text-2xl text-charcoal mb-2">Member Signup</h2>
        <p className="text-warm-gray-dark text-sm mb-8">
          Already a member?{' '}
          <Link href="/login" className="text-terracotta font-medium hover:text-terracotta-dark transition">
            Log in
          </Link>
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
            />
          </div>

          {/* First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Sarah"
                className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Martinez"
                className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
              />
            </div>
          </div>

          {/* Phone + DOB */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
              />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-medium text-charcoal mb-2">
                Date of Birth
              </label>
              <input
                id="dob"
                type="date"
                className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition"
              />
            </div>
          </div>

          {/* Biological Sex */}
          <div>
            <label className="block text-sm font-medium text-charcoal mb-3">Biological Sex</label>
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal font-medium hover:border-terracotta transition"
              >
                Female
              </button>
              <button
                type="button"
                className="flex-1 bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal font-medium hover:border-terracotta transition"
              >
                Male
              </button>
            </div>
          </div>

          {/* State */}
          <div>
            <label htmlFor="state" className="block text-sm font-medium text-charcoal mb-2">
              State
            </label>
            <select
              id="state"
              className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal focus:outline-none focus:border-terracotta transition appearance-none"
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
            <div className="border-t border-sand-light" />
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-terracotta rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-warm-gray-dark leading-relaxed">
                I agree to the Terms of Service and Privacy Policy
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-terracotta rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-warm-gray-dark leading-relaxed">
                I consent to receive health updates and educational emails from Briella Health
              </span>
            </label>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                className="accent-terracotta rounded mt-1 cursor-pointer"
              />
              <span className="text-sm text-warm-gray-dark leading-relaxed">
                I confirm I am 18 years or older
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-terracotta text-cream-light py-3 rounded-xl font-medium hover:bg-terracotta-dark transition mt-6"
          >
            Create My Account →
          </button>
        </form>
      </div>
    </div>
  );
}

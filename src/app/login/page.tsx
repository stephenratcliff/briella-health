import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Log In — Briella Health',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream-light flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-8">
          <span className="font-serif text-2xl text-charcoal hover:text-warm-gray-dark transition">
            Briella Health
          </span>
        </Link>

        {/* Heading */}
        <h1 className="font-serif text-2xl text-charcoal text-center mb-2">
          Welcome back
        </h1>
        <p className="text-warm-gray-dark text-center text-sm mb-8">
          Sign in to your Briella Health account
        </p>

        {/* Tab Switcher */}
        <div className="flex border-b border-sand-light mb-8">
          <button className="flex-1 pb-3 text-center border-b-2 border-terracotta text-charcoal font-medium text-sm">
            Patient
          </button>
          <button className="flex-1 pb-3 text-center text-warm-gray-dark font-medium text-sm hover:text-charcoal transition">
            Provider
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4 mb-6">
          {/* Email Field */}
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

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full bg-linen border border-sand-light rounded-xl px-4 py-3 text-charcoal placeholder:text-warm-gray focus:outline-none focus:border-terracotta transition"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-terracotta text-sm hover:text-terracotta-dark transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-terracotta text-cream-light py-3 rounded-xl font-medium hover:bg-terracotta-dark transition mt-6"
          >
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <div className="space-y-2 text-center text-sm">
          <p>
            Not a member yet?{' '}
            <Link href="/signup" className="text-terracotta font-medium hover:text-terracotta-dark transition">
              Join Briella Health
            </Link>
          </p>
          <p>
            <a href="#" className="text-terracotta hover:text-terracotta-dark transition">
              Questions? Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

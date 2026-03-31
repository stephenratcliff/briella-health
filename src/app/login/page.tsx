import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Log In — Briella Health',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-bg-dark flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <Link href="/" className="block text-center mb-8">
          <span className="font-heading text-2xl text-white hover:text-gray-300 transition">
            Briella Health
          </span>
        </Link>

        {/* Heading */}
        <h1 className="font-heading text-2xl text-white text-center mb-2">
          Welcome back
        </h1>
        <p className="text-gray-400 text-center text-sm mb-8">
          Sign in to your Briella Health account
        </p>

        {/* Tab Switcher */}
        <div className="flex border-b border-border mb-8">
          <button className="flex-1 pb-3 text-center border-b-2 border-teal text-white font-medium text-sm">
            Patient
          </button>
          <button className="flex-1 pb-3 text-center text-gray-400 font-medium text-sm hover:text-gray-300 transition">
            Provider
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4 mb-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full bg-bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full bg-bg-dark border border-border rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-teal transition"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a href="#" className="text-teal text-sm hover:text-teal-light transition">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-teal text-white py-3 rounded-xl font-medium hover:bg-teal-light transition mt-6"
          >
            Log In
          </button>
        </form>

        {/* Footer Links */}
        <div className="space-y-2 text-center text-sm">
          <p>
            Not a member yet?{' '}
            <Link href="/signup" className="text-teal font-medium hover:text-teal-light transition">
              Join Briella Health
            </Link>
          </p>
          <p>
            <a href="#" className="text-teal hover:text-teal-light transition">
              Questions? Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

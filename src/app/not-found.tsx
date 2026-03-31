import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen flex flex-col pt-[70px]">
        {/* 404 Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="text-center max-w-2xl">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="font-heading font-black text-9xl md:text-[140px] bg-gradient-to-r from-teal to-teal-light bg-clip-text text-transparent leading-none">
                404
              </h1>
            </div>

            {/* Heading */}
            <h2 className="font-heading font-extrabold text-4xl md:text-5xl text-white mb-4">
              Page Not Found
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
              We couldn't find the page you're looking for. It may have been moved or doesn't exist. Let's get you back on track.
            </p>

            {/* Back to Home Button */}
            <div className="mb-12">
              <Link
                href="/"
                className="inline-flex bg-teal text-white text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-md hover:bg-teal-light transition-colors duration-200"
              >
                Back to Home
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="border-t border-border pt-12">
              <p className="text-gray-400 text-sm uppercase tracking-[0.16em] font-bold mb-6 text-teal">
                Popular Pages
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  href="/how-it-works"
                  className="bg-bg-card border border-border rounded-lg p-4 hover:border-teal-border transition-colors duration-200 group"
                >
                  <p className="text-white font-semibold text-sm group-hover:text-teal transition-colors duration-200">
                    How It Works
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Learn our 3-step process
                  </p>
                </Link>

                <Link
                  href="/what-we-test"
                  className="bg-bg-card border border-border rounded-lg p-4 hover:border-teal-border transition-colors duration-200 group"
                >
                  <p className="text-white font-semibold text-sm group-hover:text-teal transition-colors duration-200">
                    What We Test
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    100+ biomarkers explained
                  </p>
                </Link>

                <Link
                  href="/membership"
                  className="bg-bg-card border border-border rounded-lg p-4 hover:border-teal-border transition-colors duration-200 group"
                >
                  <p className="text-white font-semibold text-sm group-hover:text-teal transition-colors duration-200">
                    Membership
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Pricing & features
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    platform: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'What We Test', href: '/what-we-test' },
      { label: 'Membership', href: '/membership' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'For Wellness Partners', href: '/for-providers' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'HIPAA Notice', href: '/hipaa' },
    ],
  };

  return (
    <footer className="bg-bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="bg-teal text-white w-[34px] h-[34px] rounded-[7px] font-heading font-black text-sm flex items-center justify-center">
                B
              </div>
              <div>
                <span className="text-white font-heading font-extrabold">
                  Briella&nbsp;
                </span>
                <span className="text-teal font-heading font-extrabold">
                  Health
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Healthcare technology for comprehensive health testing. Know every number that matters.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-teal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="border-t border-border pt-8 mb-8 space-y-4">
          <p className="text-gray-500 text-xs leading-relaxed">
            Briella Health is a healthcare technology company and not a laboratory or medical provider. All laboratory services are provided by independent, CLIA-certified third-party laboratories. These laboratory service providers set their own pricing. Although Briella Health may facilitate easy access to certain laboratory service providers on your behalf, Briella Health does not recommend or refer you to any healthcare providers. Briella Health does not offer medical advice, laboratory services, a diagnosis, medical treatment, or any form of medical opinion through our services or otherwise. Our services are not a substitute for medical care, medical advice, or a detailed discussion with your primary care physician or other licensed provider. If you have any questions regarding laboratory results or other information accessed through Briella Health, we recommend that you discuss those questions with a primary care physician or other licensed provider.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Briella Health membership pricing includes technology and service fees charged by Briella Health, as well as access to prepaid laboratory services provided by third parties and paid to such third parties on your behalf. Itemization of all fees is available upon request.
          </p>
          <p className="text-gray-500 text-xs leading-relaxed">
            Briella Health does not provide tax, legal, or financial advice. HSA/FSA eligibility, contribution amounts, rollover provisions, and other key features may change annually and differ between plans. We recommend consulting your plan administrator, HR department, or a qualified tax or financial advisor for guidance specific to your situation.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Briella Health LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-teal transition-colors">Privacy</Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-teal transition-colors">Terms</Link>
              <Link href="/hipaa" className="text-gray-500 text-sm hover:text-teal transition-colors">HIPAA</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

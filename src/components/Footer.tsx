import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'How It Works', href: '/how-it-works' },
      { label: 'What We Test', href: '/what-we-test' },
      { label: 'Membership', href: '/membership' },
      { label: 'For Providers', href: '/for-providers' },
    ],
    company: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="bg-teal text-white w-[34px] h-[34px] rounded-[7px] font-heading font-black text-sm flex items-center justify-center">
                B
              </div>
              <div>
                <div className="text-white font-heading font-extrabold">
                  Briella&nbsp;
                  <span className="text-teal">Health</span>
                </div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm">
              Know every number that matters.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
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

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Briella Health. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm max-w-md">
              Briella Health is a technology company, not a medical provider.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

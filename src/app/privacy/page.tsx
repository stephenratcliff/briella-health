import { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Briella Health',
  description:
    'Briella Health Privacy Policy — learn how we collect, protect, and respect your personal and health information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-bg-dark">
      <Nav />

      {/* ===== PAGE HERO ===== */}
      <section className="bg-bg-dark px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/"
            className="text-sm font-medium text-teal hover:text-teal-light transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="mt-8 font-heading font-extrabold text-4xl sm:text-5xl text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Last updated: March 31, 2026
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <article className="bg-bg-dark px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">

          {/* Introduction */}
          <section>
            <p className="text-gray-300 leading-relaxed mb-4">
              At Briella Health ("we," "us," "our," or "Company"), we are committed to protecting your privacy and being transparent about how we collect, use, and safeguard your information. This Privacy Policy explains our practices regarding data collection and your rights as a user of our platform and services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Briella Health is a healthcare technology platform that facilitates access to comprehensive biomarker testing through our partnership with CLIA-certified third-party laboratory partners like Quest Diagnostics. We are not a medical provider, laboratory, or insurance company — we are a technology company that helps you access testing services and understand your health data.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">1. Information We Collect</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">1.1 Personal Information You Provide</h3>
                <p className="text-gray-300 mb-4">When you create a Briella Health account and use our services, we collect:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Name, email address, and phone number</li>
                  <li>Date of birth and biological sex</li>
                  <li>Mailing address and state of residence</li>
                  <li>Payment information (processed securely through third-party payment processors)</li>
                  <li>Username and password for your account</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">1.2 Health Information</h3>
                <p className="text-gray-300 mb-4">As part of our service, we collect and store protected health information (PHI), including:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Health history, medications, and supplements you report during intake</li>
                  <li>Lab results and biomarker data from your tests</li>
                  <li>Physician notes, clinical assessments, and recommendations</li>
                  <li>Any communications with our clinical team regarding your results</li>
                  <li>Information about your health goals and lifestyle factors</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">1.3 Usage and Device Information</h3>
                <p className="text-gray-300 mb-4">We automatically collect information about how you interact with our platform:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Pages visited, features used, and actions taken within your account</li>
                  <li>Login times and frequency of access</li>
                  <li>Device type, operating system, and browser information</li>
                  <li>IP address and approximate location (country/state level)</li>
                  <li>Referring source (how you found us)</li>
                  <li>Search queries within our biomarker library</li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">1.4 Information from Third Parties</h3>
                <p className="text-gray-300">We may receive information about you from:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 mt-3">
                  <li>Lab partners like Quest Diagnostics (test results and sample processing status)</li>
                  <li>Physicians or healthcare providers you authorize to view your results</li>
                  <li>Payment processors and fraud detection services</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">2. How We Use Your Information</h2>

            <p className="text-gray-300 mb-4">We use the information we collect for the following purposes:</p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>To provide our services:</strong> Creating and maintaining your account, processing membership payments, coordinating with lab partners, and delivering test results and clinical insights.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Clinical care:</strong> Our physicians use your health history and results to provide clinical review, identify critical values, and generate personalized health recommendations.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Communication:</strong> Sending account updates, test result notifications, appointment reminders, and responding to your inquiries.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Platform improvement:</strong> Analyzing usage patterns to enhance user experience, fix technical issues, and develop new features.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Security and fraud prevention:</strong> Detecting suspicious activity, preventing unauthorized access, and protecting against security threats.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Compliance:</strong> Meeting legal obligations, regulatory requirements, and responding to lawful requests from authorities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Marketing and engagement (with consent):</strong> Sending you newsletters, health tips, and updates about new features — only if you opt in.</span>
              </li>
            </ul>
          </section>

          {/* 3. How We Share Your Information */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">3. How We Share Your Information</h2>

            <p className="text-gray-300 mb-6">
              We do not sell your personal information or health data to third parties. We share information only in the following circumstances:
            </p>

            <div className="space-y-4">
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Lab Partners and Service Providers</h3>
                <p className="text-gray-300 text-sm">We share necessary information with Quest Diagnostics and other CLIA-certified labs to process your tests and deliver results. These partners are bound by data protection agreements and HIPAA requirements.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Healthcare Providers</h3>
                <p className="text-gray-300 text-sm">If you authorize us to share results with your physician or other healthcare providers, we will disclose only the information you approve. You control this through your account settings.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Payment Processing</h3>
                <p className="text-gray-300 text-sm">Payment information is shared with our payment processor and financial institution only to process membership payments. We do not store credit card numbers directly.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Legal Requirements</h3>
                <p className="text-gray-300 text-sm">We may disclose information if required by law, court order, or governmental authority. We will notify you of such requests unless legally prohibited.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Business Transfers</h3>
                <p className="text-gray-300 text-sm">In the event of merger, acquisition, or bankruptcy, your information may be transferred as part of that transaction. We will notify you of any such change.</p>
              </div>
            </div>
          </section>

          {/* 4. Health Data Protection & HIPAA Compliance */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">4. Health Data Protection & HIPAA Compliance</h2>

            <p className="text-gray-300 mb-4">
              We take the privacy of your health information extremely seriously. Our platform is designed and operated in accordance with HIPAA (Health Insurance Portability and Accountability Act) and other healthcare privacy regulations.
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Encryption and Security</h3>
                <p className="text-gray-300">All data transmitted to and from our platform is encrypted using industry-standard TLS/SSL 1.2 or higher. Your health information is stored in encrypted form using AES-256 encryption or equivalent.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Access Controls</h3>
                <p className="text-gray-300">Access to your health information is restricted to authorized personnel who have a legitimate need to know for clinical, administrative, or operational purposes. All staff members receive HIPAA training and are bound by confidentiality agreements.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Audit Trails</h3>
                <p className="text-gray-300">We maintain detailed logs of all access to protected health information, allowing us to detect and investigate unauthorized access attempts.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Business Associate Agreements</h3>
                <p className="text-gray-300">All third-party service providers who handle your health information have signed Business Associate Agreements (BAAs) committing them to HIPAA compliance.</p>
              </div>
            </div>
          </section>

          {/* 5. Data Retention */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">5. Data Retention</h2>

            <p className="text-gray-300 mb-4">
              We retain your information for as long as necessary to provide our services and comply with legal obligations:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Active accounts:</strong> Information is retained for the duration of your membership plus any applicable legal hold periods.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Closed accounts:</strong> After account closure, we retain your data for 7 years to comply with healthcare and tax regulations, unless you request deletion (subject to legal constraints).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Health records:</strong> Lab results and clinical notes are retained per HIPAA requirements (minimum 6 years).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Payment records:</strong> Payment and transaction information is retained for 7 years for tax and regulatory compliance.</span>
              </li>
            </ul>
          </section>

          {/* 6. Your Privacy Rights */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">6. Your Privacy Rights</h2>

            <p className="text-gray-300 mb-4">
              Depending on your location, you have certain rights regarding your personal and health information:
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Access</h3>
                <p className="text-gray-300">You have the right to request and receive a copy of your personal and health information. We will provide this within 30 days (or as required by law).</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Correction</h3>
                <p className="text-gray-300">If you believe any information we hold about you is inaccurate or incomplete, you can request we correct it. We will investigate and make corrections as appropriate.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Deletion</h3>
                <p className="text-gray-300">You may request deletion of your personal information, subject to our retention obligations. Health records may be subject to longer retention requirements and cannot be deleted if required by law.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Portability</h3>
                <p className="text-gray-300">You have the right to receive your health information in a structured, commonly-used format (such as PDF or CSV) so you can share it with other healthcare providers.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Restrict Processing</h3>
                <p className="text-gray-300">You may request we restrict how we use your information, though this may limit our ability to provide services.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Object</h3>
                <p className="text-gray-300">You can object to certain types of data processing, such as direct marketing communications.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Accounting of Disclosures</h3>
                <p className="text-gray-300">Under HIPAA, you have the right to request an accounting of disclosures — a list of who we've shared your health information with and why.</p>
              </div>
            </div>

            <p className="text-gray-300 mt-6">
              To exercise any of these rights, contact us at <span className="text-teal">hello@briellahealth.com</span> with your request. We will respond within the timeframe required by applicable law.
            </p>
          </section>

          {/* 7. State-Specific Privacy Rights */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">7. State-Specific Privacy Rights</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">California (CCPA/CPRA)</h3>
                <p className="text-gray-300">If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA), including rights to know what data we collect, delete your data, and opt out of certain uses. Note: Health information may be exempt from certain CCPA rights under the HIPAA safe harbor.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Texas</h3>
                <p className="text-gray-300">Texas residents have rights under the Texas Data Privacy and Security Act (TDPSA), including similar rights to access, correction, and deletion of personal information.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Other States</h3>
                <p className="text-gray-300">Residents of states with comprehensive privacy laws (Colorado, Connecticut, Delaware, Florida, Illinois, Indiana, Iowa, Montana, New Hampshire, New Mexico, Tennessee, Utah, Virginia) have similar rights to access and deletion. We comply with all applicable state privacy laws.</p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Do Not Track</h3>
                <p className="text-gray-300">We do not respond to "Do Not Track" browser signals, but you can control many tracking mechanisms through browser settings.</p>
              </div>
            </div>
          </section>

          {/* 8. Cookies and Tracking Technologies */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">8. Cookies and Tracking Technologies</h2>

            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to enhance your experience and understand how you use our platform:
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Essential cookies:</strong> Required for authentication, security, and core functionality.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Performance cookies:</strong> Help us understand how you use our site to improve performance and user experience.</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Analytics cookies:</strong> Allow us to measure and analyze traffic and engagement patterns.</span>
              </div>
            </div>

            <p className="text-gray-300 mt-4">
              You can control cookies through your browser settings. Note that disabling essential cookies may impair functionality.
            </p>
          </section>

          {/* 9. Third-Party Services */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">9. Third-Party Services</h2>

            <p className="text-gray-300 mb-4">
              Our platform integrates with third-party services for specific functions. We share minimal necessary information:
            </p>

            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Payment processors (Stripe, etc.) — for billing only</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Email service providers (Sendgrid, etc.) — for transactional emails only</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Analytics platforms (Google Analytics) — usage data only, no health information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Cloud infrastructure providers (AWS, etc.) — under strict data processing agreements</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4">
              Each third-party service provider is bound by data protection agreements. Please review their privacy policies as well.
            </p>
          </section>

          {/* 10. Children's Privacy */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">10. Children's Privacy</h2>

            <p className="text-gray-300">
              Briella Health is not intended for users under 18 years old. We do not knowingly collect personal information from children. If we become aware that a child has provided information, we will delete it promptly. Parents or guardians who believe their child has provided information should contact us immediately.
            </p>
          </section>

          {/* 11. Security Measures */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">11. Security Measures</h2>

            <p className="text-gray-300 mb-4">
              We implement comprehensive security measures to protect your information:
            </p>

            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>End-to-end encryption for all data in transit</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Encrypted storage of sensitive data at rest</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Regular security assessments and penetration testing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Secure access controls and multi-factor authentication</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Intrusion detection and prevention systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Compliance with HIPAA Security Rule requirements</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4">
              While we implement industry-standard protections, no system is completely immune to breaches. We maintain breach notification procedures to inform affected users within required timeframes.
            </p>
          </section>

          {/* 12. Changes to This Policy */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">12. Changes to This Privacy Policy</h2>

            <p className="text-gray-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or applicable law. We will notify you of material changes by email or by posting a notice on our website. Your continued use of our platform following notification of changes constitutes your acceptance of the updated policy.
            </p>
          </section>

          {/* 13. Contact Us */}
          <section className="bg-bg-card border border-border rounded-xl p-8 mt-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Questions About This Policy?</h2>

            <p className="text-gray-300 mb-6">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
            </p>

            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Email:</p>
                <p><a href="mailto:hello@briellahealth.com" className="text-teal hover:text-teal-light transition-colors">hello@briellahealth.com</a></p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Privacy Officer:</p>
                <p>Briella Health LLC<br />Contact: hello@briellahealth.com</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Website:</p>
                <p><a href="https://briella.health" className="text-teal hover:text-teal-light transition-colors">briella.health</a></p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              We aim to resolve all privacy concerns within 30 days of receiving your inquiry.
            </p>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
}

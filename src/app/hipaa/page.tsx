import { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices | Briella Health',
  description:
    'HIPAA Notice of Privacy Practices for Briella Health — your rights regarding protected health information.',
};

export default function HIPAANotice() {
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
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="mt-4 text-gray-400 text-sm">
            Effective: March 31, 2026
          </p>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <article className="bg-bg-dark px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-12">

          {/* Introduction */}
          <section>
            <p className="text-gray-300 leading-relaxed mb-4">
              Briella Health LLC is committed to protecting the privacy of your health information. This Notice of Privacy Practices ("Notice") explains how we use and disclose your Protected Health Information (PHI) in accordance with the Health Insurance Portability and Accountability Act (HIPAA) and its implementing regulations.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This Notice is required by HIPAA and applies to all protected health information that we create, receive, maintain, or transmit as part of our operations. Please read this Notice carefully and retain it for your records.
            </p>
          </section>

          {/* 1. Our Commitment to Your Privacy */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">1. Our Commitment to Your Privacy</h2>

            <p className="text-gray-300 mb-4">
              At Briella Health, we understand that your health information is sensitive and personal. We are committed to:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">✓</span>
                <span>Maintaining the privacy and security of your protected health information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">✓</span>
                <span>Complying with HIPAA regulations and all applicable healthcare privacy laws</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">✓</span>
                <span>Notifying you promptly if there is a breach of your unsecured health information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">✓</span>
                <span>Honoring your rights to access, amend, and control your health information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">✓</span>
                <span>Being transparent about our privacy practices</span>
              </li>
            </ul>
          </section>

          {/* 2. Who We Are */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">2. Who We Are</h2>

            <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
              <p className="text-gray-300">
                Briella Health LLC is a healthcare technology company that serves as a Covered Entity under HIPAA. We are not a medical provider, laboratory, or insurance company. We are a technology platform that facilitates access to comprehensive biomarker testing through partnerships with CLIA-certified laboratory providers.
              </p>
            </div>

            <p className="text-gray-300 mb-4">
              <strong>What this means:</strong> As a HIPAA Covered Entity, we are required to protect your protected health information and provide you with certain rights regarding that information.
            </p>

            <p className="text-gray-300">
              Briella Health may function as a Business Associate when working with other healthcare organizations, and in those circumstances, we maintain separate Business Associate Agreements that further protect your information.
            </p>
          </section>

          {/* 3. Protected Health Information We Handle */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">3. Protected Health Information We Handle</h2>

            <p className="text-gray-300 mb-4">
              Protected Health Information (PHI) is any health information about you that is created or received by Briella Health and can be linked to you as an individual. This includes:
            </p>

            <div className="space-y-4">
              <div className="bg-bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-2">Medical Information</h3>
                <p className="text-gray-300 text-sm">Health history, medications, allergies, medical conditions, prior test results, and any clinical notes or assessments</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-2">Laboratory Data</h3>
                <p className="text-gray-300 text-sm">Biomarker test results, biological samples information, and lab processing details</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-2">Personal Identifiers</h3>
                <p className="text-gray-300 text-sm">Name, date of birth, address, phone number, email, and other contact information linked to your health information</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-2">Account Information</h3>
                <p className="text-gray-300 text-sm">Information about your membership, account activity, and interactions with our platform</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-4">
                <h3 className="font-heading text-sm font-bold text-white mb-2">Payment Information</h3>
                <p className="text-gray-300 text-sm">Billing and payment data associated with your health information</p>
              </div>
            </div>
          </section>

          {/* 4. How We Use and Disclose Your PHI */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">4. How We Use and Disclose Your PHI</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">4.1 For Treatment</h3>
                <p className="text-gray-300 mb-3">
                  We use your PHI to coordinate your care, including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Providing clinical review of your lab results</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Communicating with you about your test results and health insights</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Identifying critical values that require immediate attention</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Coordinating with laboratory partners to obtain and process your tests</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">4.2 For Payment</h3>
                <p className="text-gray-300 mb-3">
                  We use your PHI for billing and financial purposes, including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Processing your membership payments</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Billing for services rendered</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Collecting overdue payments</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">4.3 For Healthcare Operations</h3>
                <p className="text-gray-300 mb-3">
                  We use your PHI for administrative and operational purposes, including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Quality improvement activities and clinical effectiveness research</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Evaluating and improving our services</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Managing our workforce and training staff</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Ensuring compliance with HIPAA and other regulations</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Conducting fraud and abuse prevention activities</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Managing our IT systems and security measures</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">4.4 As Required by Law</h3>
                <p className="text-gray-300 mb-3">
                  We will disclose your PHI if required by law, court order, or governmental authority, including:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Court-ordered disclosures and legal proceedings</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Public health activities and disease reporting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Abuse and neglect reporting</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-teal flex-shrink-0">•</span>
                    <span>Law enforcement requests</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">4.5 Your Authorized Recipients</h3>
                <p className="text-gray-300">
                  With your explicit consent, we will disclose your PHI to physicians and healthcare providers you authorize through your account settings.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Your Rights Under HIPAA */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">5. Your Rights Under HIPAA</h2>

            <p className="text-gray-300 mb-6">
              HIPAA grants you specific rights regarding your protected health information. You have the right to:
            </p>

            <div className="space-y-4">
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Access Your Information</h3>
                <p className="text-gray-300 text-sm">You have the right to inspect and receive a copy of your PHI in our possession. We will provide this within 30 days of your request (or up to 60 days if needed). We may charge a reasonable fee for copies.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Request Amendment</h3>
                <p className="text-gray-300 text-sm">If you believe your PHI is inaccurate or incomplete, you may request we amend it. We have 60 days to respond. We may deny the request if we determine the information is accurate and complete or if it was not created by us.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to an Accounting of Disclosures</h3>
                <p className="text-gray-300 text-sm">You have the right to request a list showing who we have disclosed your PHI to and for what purpose. We will provide this within 60 days. You are entitled to one free accounting per year; additional requests may incur a fee.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Request Restrictions</h3>
                <p className="text-gray-300 text-sm">You may request restrictions on how we use or disclose your PHI. While we must consider your request, we are not required to agree. Any agreed-upon restrictions will be documented in writing.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Confidential Communication</h3>
                <p className="text-gray-300 text-sm">You have the right to request that we communicate with you about your health information in a specific manner or at a specific location (e.g., via email rather than phone).</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Receive This Notice</h3>
                <p className="text-gray-300 text-sm">You have the right to receive notice of our privacy practices. You may request a copy at any time.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Notification of Breach</h3>
                <p className="text-gray-300 text-sm">If there is a breach of your unsecured PHI, you have the right to be notified without unreasonable delay, no later than 60 calendar days after discovery of the breach.</p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Right to Portable Copy of Your Records</h3>
                <p className="text-gray-300 text-sm">You have the right to request an electronic copy of your health information in a standard format so you can transmit it to another healthcare provider or platform.</p>
              </div>
            </div>
          </section>

          {/* 6. Our Responsibilities */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">6. Our Responsibilities</h2>

            <p className="text-gray-300 mb-4">
              Under HIPAA, Briella Health is responsible for:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Maintaining the privacy and security of your PHI at all times</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Implementing and maintaining administrative, physical, and technical safeguards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Providing you with notice of our privacy practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Honoring your privacy rights as described in this Notice</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Notifying you in the event of a breach of your unsecured PHI</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Training our staff on privacy and security practices</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Maintaining documentation of our privacy and security practices</span>
              </li>
            </ul>
          </section>

          {/* 7. Business Associates */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">7. Business Associates</h2>

            <p className="text-gray-300 mb-4">
              We may share your PHI with Business Associates who perform functions on our behalf, including:
            </p>

            <div className="space-y-3 text-gray-300">
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Quest Diagnostics:</strong> Laboratory partner responsible for test processing and sample analysis</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Cloud Infrastructure Providers:</strong> Companies hosting our secure systems and data storage</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Payment Processors:</strong> Third parties processing your membership payments</span>
              </div>
              <div className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span><strong>Email and Communication Service Providers:</strong> Companies assisting with patient communications</span>
              </div>
            </div>

            <p className="text-gray-300 mt-4">
              All Business Associates have signed Business Associate Agreements (BAAs) committing them to HIPAA compliance and data protection standards equal to our own.
            </p>
          </section>

          {/* 8. Minimum Necessary Standard */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">8. Minimum Necessary Standard</h2>

            <p className="text-gray-300">
              In accordance with HIPAA, we follow the "minimum necessary" principle: we use, disclose, and request only the amount and type of PHI reasonably needed to accomplish the intended purpose. For example, we provide Quest Diagnostics with only the information necessary to process your test — not your entire health history unless clinically relevant.
            </p>
          </section>

          {/* 9. De-Identified Information */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">9. De-Identified Information</h2>

            <p className="text-gray-300">
              We may create and use de-identified information (information stripped of personal identifiers) for research, quality improvement, and other purposes without your consent. De-identified information is not subject to HIPAA protection because it cannot be linked back to you.
            </p>
          </section>

          {/* 10. Breach Notification Procedures */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">10. Breach Notification Procedures</h2>

            <p className="text-gray-300 mb-4">
              In the event of a breach of your unsecured PHI, we will:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">1</span>
                <span>Discover and assess the breach immediately upon detection</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">2</span>
                <span>Notify you without unreasonable delay, no later than 60 calendar days after discovery</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">3</span>
                <span>Provide notice via email and/or phone (at the contact information you provided)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">4</span>
                <span>Include in the notice: what happened, what information was involved, what steps we are taking, and what steps you can take</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">5</span>
                <span>Notify prominent media outlets and the HHS Office for Civil Rights if the breach affects 500+ residents of a state or jurisdiction</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4">
              We maintain comprehensive security measures to prevent breaches, and we will investigate any suspected breach thoroughly.
            </p>
          </section>

          {/* 11. Changes to This Notice */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">11. Changes to This Notice</h2>

            <p className="text-gray-300">
              We may update this Notice to reflect changes in our privacy practices or to comply with updated regulations. We will notify you of any material changes. The most current version will always be available on our website.
            </p>
          </section>

          {/* 12. Filing a Complaint */}
          <section className="bg-bg-card border border-border rounded-xl p-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">12. Filing a Complaint</h2>

            <p className="text-gray-300 mb-6">
              If you believe your privacy rights have been violated, you have the right to file a complaint. You may file a complaint with:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Briella Health Privacy Officer</h3>
                <p className="text-gray-300 mb-3">Contact our Privacy Officer to discuss your concerns:</p>
                <div className="space-y-2 text-gray-300">
                  <p><strong>Email:</strong> <a href="mailto:hello@briellahealth.com" className="text-teal hover:text-teal-light transition-colors">hello@briellahealth.com</a></p>
                  <p><strong>Address:</strong> Briella Health LLC, Texas, United States</p>
                  <p className="text-sm">We will respond to complaints within 30 days and investigate all allegations.</p>
                </div>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">U.S. Department of Health & Human Services</h3>
                <p className="text-gray-300 mb-3">You may also file a complaint with the Office for Civil Rights (OCR):</p>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p><strong>Office for Civil Rights</strong><br />U.S. Department of Health and Human Services</p>
                  <p><strong>Contact:</strong> <a href="https://www.hhs.gov/hipaa/filing-a-complaint/index.html" className="text-teal hover:text-teal-light transition-colors" target="_blank" rel="noopener noreferrer">www.hhs.gov/hipaa/filing-a-complaint</a></p>
                  <p><strong>Phone:</strong> 1-800-368-1019</p>
                  <p>Complaints may be filed electronically via the HHS website or by mail.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-300 text-sm mt-6">
              You will not be retaliated against or penalized for filing a complaint.
            </p>
          </section>

          {/* Contact Section */}
          <section className="bg-bg-card border border-border rounded-xl p-8 mt-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Questions About Your Privacy Rights?</h2>

            <p className="text-gray-300 mb-6">
              If you have questions about this Notice or about your privacy rights under HIPAA, please contact our Privacy Officer:
            </p>

            <div className="space-y-4 text-gray-300">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Privacy Officer Email:</p>
                <p><a href="mailto:hello@briellahealth.com" className="text-teal hover:text-teal-light transition-colors">hello@briellahealth.com</a></p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Company:</p>
                <p>Briella Health LLC<br />Texas, United States</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Website:</p>
                <p><a href="https://briella.health" className="text-teal hover:text-teal-light transition-colors">briella.health</a></p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              We are committed to responding to all privacy inquiries within 30 days and to protecting your health information with the highest standards.
            </p>
          </section>

          {/* Footer Note */}
          <section className="border-t border-border pt-8">
            <p className="text-gray-400 text-xs">
              <strong>Effective Date:</strong> This Notice of Privacy Practices is effective as of March 31, 2026, and applies to all protected health information maintained by Briella Health LLC, regardless of when it was created. Your use of Briella Health services constitutes your acknowledgment of this Notice.
            </p>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
}

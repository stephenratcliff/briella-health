import { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Briella Health',
  description:
    'Briella Health Terms of Service — the terms governing your use of our platform and services.',
};

export default function TermsOfService() {
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
            Terms of Service
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
              These Terms of Service ("Terms") govern your access to and use of Briella Health's website, platform, and services (collectively, the "Service"). By creating an account or using our Service in any way, you agree to be bound by these Terms. If you do not agree to these Terms, do not use our Service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read these Terms carefully, as they include important information about your rights, responsibilities, and limitations on our liability.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">1. Acceptance of Terms</h2>

            <p className="text-gray-300 mb-4">
              By accessing and using Briella Health, you accept and agree to be bound by all the terms and conditions of this agreement. If you do not agree to abide by all of the preceding, you are not authorized to use or access this Service.
            </p>

            <p className="text-gray-300">
              We reserve the right to modify these Terms at any time. We will notify you of material changes by email or posting the updated Terms on our website. Your continued use of the Service following notification constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* 2. Description of Services */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">2. Description of Services</h2>

            <p className="text-gray-300 mb-4">
              Briella Health provides a healthcare technology platform that facilitates access to comprehensive biomarker testing. Our services include:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Member portal for account management and test scheduling</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Coordination with CLIA-certified laboratory partners for test processing</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Delivery of lab results and clinical insights through our platform</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Physician-reviewed analysis of your results</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Health data tracking and trend analysis tools</span>
              </li>
            </ul>

            <div className="bg-bg-card border border-border rounded-xl p-6 mt-6">
              <p className="text-gray-300 text-sm">
                <strong>Important:</strong> Briella Health is a healthcare technology platform — NOT a medical provider, laboratory, or insurance company. We facilitate access to testing services but do not provide medical diagnosis, treatment, or medical advice. Our service is supplementary to, not a substitute for, care from your personal healthcare provider.
              </p>
            </div>
          </section>

          {/* 3. Eligibility */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">3. Eligibility</h2>

            <p className="text-gray-300 mb-4">
              To use Briella Health, you must:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Be at least 18 years old (or have parental/guardian consent if under 18 in some jurisdictions)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Be a resident of the United States</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Reside in a state where we currently offer services (currently Texas, Pennsylvania, and North Carolina; expanding)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Provide accurate and truthful information during registration</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Be capable of entering into legally binding contracts</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4">
              We reserve the right to refuse service to anyone for any reason at our sole discretion.
            </p>
          </section>

          {/* 4. Account Registration and Responsibilities */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">4. Account Registration and Responsibilities</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">4.1 Creating Your Account</h3>
                <p className="text-gray-300">
                  You are responsible for maintaining the confidentiality of your account credentials. You must provide accurate, current, and truthful information during registration and update this information as necessary.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">4.2 Account Security</h3>
                <p className="text-gray-300">
                  You are solely responsible for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your account or any breach of security.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">4.3 User Responsibilities</h3>
                <p className="text-gray-300">You agree to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 mt-2 ml-2">
                  <li>Not share your account credentials with others</li>
                  <li>Use the Service only for lawful purposes and in compliance with these Terms</li>
                  <li>Not attempt to gain unauthorized access to the Service</li>
                  <li>Maintain up-to-date health information for clinical accuracy</li>
                  <li>Not impersonate or misrepresent yourself</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 5. Membership and Payment Terms */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">5. Membership and Payment Terms</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.1 Membership Pricing</h3>
                <p className="text-gray-300">
                  Briella Health membership is $365 per year (annual subscription). This includes one comprehensive biomarker panel, physician review, unlimited access to your results portal, and year-round health tracking.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.2 Auto-Renewal</h3>
                <p className="text-gray-300">
                  Your membership automatically renews annually on the anniversary of your purchase date, unless you cancel before the renewal date. You will receive a renewal reminder email at least 30 days before renewal.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.3 Cancellation</h3>
                <p className="text-gray-300">
                  You can cancel your membership at any time through your account settings or by contacting hello@briellahealth.com. Cancellation takes effect at the end of your current billing cycle. No refunds are provided for partial months or years, except as required by law.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.4 Payment Method</h3>
                <p className="text-gray-300">
                  You authorize us to charge the payment method on file for your membership fees. You agree to keep your payment information current. If payment fails, we will attempt to collect using your backup payment method if available.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.5 HSA/FSA Eligible</h3>
                <p className="text-gray-300">
                  Briella Health membership is eligible for payment using Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA). It is your responsibility to verify eligibility with your account administrator.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">5.6 No Insurance Billing</h3>
                <p className="text-gray-300">
                  Briella Health does not bill insurance companies. You are responsible for paying membership fees directly. Some insurance plans may reimburse preventive wellness services; contact your insurance provider for details.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Medical Disclaimers */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">6. Medical Disclaimers</h2>

            <div className="space-y-4">
              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Not Medical Advice</h3>
                <p className="text-gray-300 text-sm">
                  The content and tools provided by Briella Health are for informational purposes only and do not constitute medical advice, diagnosis, treatment, or professional medical services. Results, insights, and recommendations from our platform should not be considered a substitute for consultation with a qualified healthcare provider.
                </p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">No Doctor-Patient Relationship</h3>
                <p className="text-gray-300 text-sm">
                  Use of Briella Health does not create a physician-patient relationship between you and our physicians. Our physicians provide clinical review of your results, but this does not constitute ongoing medical care or a treatment relationship.
                </p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Consult Your Healthcare Provider</h3>
                <p className="text-gray-300 text-sm">
                  Always consult with your personal healthcare provider before making any changes to your diet, exercise, medications, or health regimen. If you have questions about your results or need medical advice, contact your physician, not Briella Health.
                </p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Emergency Medical Situations</h3>
                <p className="text-gray-300 text-sm">
                  If you are experiencing a medical emergency, call 911 or go to the nearest emergency room. Do not rely on Briella Health or our platform for emergency care.
                </p>
              </div>

              <div className="bg-bg-card border border-border rounded-xl p-6">
                <h3 className="font-heading text-base font-bold text-white mb-2">Use at Your Own Risk</h3>
                <p className="text-gray-300 text-sm">
                  You use Briella Health at your own risk. We provide clinical insights based on established reference ranges and functional medicine principles, but results may not apply to your individual circumstances.
                </p>
              </div>
            </div>
          </section>

          {/* 7. Laboratory Services */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">7. Laboratory Services</h2>

            <p className="text-gray-300 mb-4">
              Briella Health partners with CLIA-certified laboratory providers, primarily Quest Diagnostics, to conduct your tests. By using our Service:
            </p>

            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>You authorize us to transmit your health information to our lab partners</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>You authorize the collection and processing of biological samples (blood)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>You acknowledge that lab partners may contact you with results or appointment information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>You agree that each lab partner's terms and privacy policies also apply to your use of their services</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>We are not responsible for lab partner actions, delays, or errors beyond our control</span>
              </li>
            </ul>
          </section>

          {/* 8. Intellectual Property */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">8. Intellectual Property</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Our Content</h3>
                <p className="text-gray-300">
                  All content on the Briella Health platform, including text, graphics, logos, images, and software, is the property of Briella Health LLC or our content providers and is protected by copyright, trademark, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Your Health Data</h3>
                <p className="text-gray-300">
                  Your health information and personal data remain your property. You grant us a non-exclusive, worldwide license to use this information solely for providing the Service and as authorized by law.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">License to Use</h3>
                <p className="text-gray-300">
                  We grant you a limited, non-exclusive, non-transferable license to access and use the Briella Health platform solely for your personal, non-commercial use. You may not reproduce, copy, distribute, or transmit any content without our prior written permission.
                </p>
              </div>
            </div>
          </section>

          {/* 9. User Conduct */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">9. User Conduct and Prohibited Activities</h2>

            <p className="text-gray-300 mb-4">You agree not to:</p>

            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Violate any laws or regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Use the Service for any unlawful purpose or to solicit others to do the same</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Harass, threaten, intimidate, or violate the legal rights of others</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Upload or transmit viruses or malicious code</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Attempt to gain unauthorized access to the Service or systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Interfere with or disrupt the normal functioning of the Service</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Reverse-engineer, decompile, or otherwise attempt to derive source code</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Provide false, misleading, or incomplete information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Use automated tools to access the Service without authorization</span>
              </li>
            </ul>
          </section>

          {/* 10. Limitation of Liability */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">10. Limitation of Liability</h2>

            <div className="bg-bg-card border border-border rounded-xl p-6 mb-6">
              <p className="text-gray-300">
                TO THE FULLEST EXTENT PERMITTED BY LAW, BRIELLA HEALTH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR OTHER DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, DATA, OR GOODWILL, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </div>

            <p className="text-gray-300 mb-4">
              The total liability of Briella Health for any claims arising from or related to this agreement shall not exceed the amount you paid for your membership in the 12 months preceding the claim.
            </p>

            <p className="text-gray-300">
              Some jurisdictions do not allow limitation of liability, so this limitation may not apply to you.
            </p>
          </section>

          {/* 11. Disclaimer of Warranties */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">11. Disclaimer of Warranties</h2>

            <div className="bg-bg-card border border-border rounded-xl p-6">
              <p className="text-gray-300">
                THE BRIELLA HEALTH SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR TITLE. WE DO NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE, UNINTERRUPTED, SECURE, OR FREE OF MALICIOUS CODE.
              </p>
            </div>
          </section>

          {/* 12. Indemnification */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">12. Indemnification</h2>

            <p className="text-gray-300">
              You agree to indemnify, defend, and hold harmless Briella Health, its officers, directors, employees, and agents from any claims, damages, losses, or liabilities (including legal fees) arising from or related to your use of the Service, breach of these Terms, violation of any law, or infringement of any third-party rights.
            </p>
          </section>

          {/* 13. Dispute Resolution */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">13. Dispute Resolution and Arbitration</h2>

            <div className="space-y-4">
              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Informal Resolution</h3>
                <p className="text-gray-300">
                  Before initiating formal proceedings, you agree to attempt to resolve disputes informally by contacting hello@briellahealth.com.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Binding Arbitration</h3>
                <p className="text-gray-300">
                  Any dispute, claim, or controversy arising from or relating to these Terms or the Service shall be resolved by binding arbitration before a neutral arbitrator under the American Arbitration Association (AAA) rules, rather than in court. The arbitration shall be conducted in English and shall take place in Texas.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Exceptions to Arbitration</h3>
                <p className="text-gray-300">
                  Notwithstanding the foregoing, either party may seek injunctive relief in court to prevent irreparable harm, and disputes regarding intellectual property rights may be brought in court.
                </p>
              </div>

              <div>
                <h3 className="font-heading text-base font-bold text-white mb-2">Class Action Waiver</h3>
                <p className="text-gray-300">
                  You agree that any arbitration or court proceeding shall be conducted on an individual basis, not as a class action or other representative action. You waive your right to participate in any class-action suit or collective dispute.
                </p>
              </div>
            </div>
          </section>

          {/* 14. Governing Law */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">14. Governing Law</h2>

            <p className="text-gray-300">
              These Terms shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law principles. Any legal action or proceeding relating to these Terms or your use of the Service shall be exclusively subject to the jurisdiction of the courts located in Texas.
            </p>
          </section>

          {/* 15. Termination */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">15. Termination</h2>

            <p className="text-gray-300 mb-4">
              We may suspend or terminate your account and access to the Service at any time, with or without cause, with or without notice, and without liability. Grounds for termination include:
            </p>

            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Breach of these Terms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Illegal or unethical activity</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Violation of applicable laws or regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Non-payment of membership fees</span>
              </li>
              <li className="flex gap-3">
                <span className="text-teal flex-shrink-0">•</span>
                <span>Your relocation outside our service area</span>
              </li>
            </ul>

            <p className="text-gray-300 mt-4">
              Upon termination, your account data will be handled in accordance with our Privacy Policy. Data retention obligations under applicable law will be honored.
            </p>
          </section>

          {/* 16. Entire Agreement */}
          <section>
            <h2 className="font-heading text-2xl font-bold text-white mb-6">16. Entire Agreement</h2>

            <p className="text-gray-300">
              These Terms, along with our Privacy Policy, HIPAA Notice of Privacy Practices, and any other policies referenced herein, constitute the entire agreement between you and Briella Health regarding your use of the Service. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
            </p>
          </section>

          {/* 17. Contact Information */}
          <section className="bg-bg-card border border-border rounded-xl p-8 mt-8">
            <h2 className="font-heading text-2xl font-bold text-white mb-6">Questions About These Terms?</h2>

            <p className="text-gray-300 mb-6">
              If you have questions, concerns, or requests regarding these Terms of Service, please contact us:
            </p>

            <div className="space-y-3 text-gray-300">
              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Email:</p>
                <p><a href="mailto:hello@briellahealth.com" className="text-teal hover:text-teal-light transition-colors">hello@briellahealth.com</a></p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Mailing Address:</p>
                <p>Briella Health LLC<br />Texas, United States</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-300 mb-1">Website:</p>
                <p><a href="https://briella.health" className="text-teal hover:text-teal-light transition-colors">briella.health</a></p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-6">
              We will respond to inquiries within 30 business days.
            </p>
          </section>

        </div>
      </article>

      <Footer />
    </div>
  );
}

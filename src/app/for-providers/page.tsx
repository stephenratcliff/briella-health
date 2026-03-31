import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Providers & Practices — Briella Health",
};

export default function ForProvidersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-bg-dark">
      <Nav />

      {/* Hero Section */}
      <section className="bg-bg-dark pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold uppercase tracking-wide text-sm font-semibold mb-4">
            For Providers & Practices
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl text-white mb-6 leading-tight">
            Your clients want the{" "}
            <span className="text-gold">full picture.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Add physician-ordered comprehensive lab testing to your practice. No infrastructure. No upfront costs. Revenue share from day one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gold text-bg-dark px-8 py-3 rounded-xl font-semibold hover:bg-gold/90 transition">
              Apply to Partner
            </button>
            <button className="border border-border text-white px-8 py-3 rounded-xl font-semibold hover:bg-bg-card transition">
              See the Dashboard
            </button>
          </div>
        </div>
      </section>

      {/* Image Section - Doctor Consultation */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600"
            alt="Female doctor in health consultation"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-card py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { label: "Biomarkers per patient", value: "100+" },
            { label: "Upfront cost", value: "$0" },
            { label: "Quest locations", value: "2,000+" },
            { label: "Revenue share", value: "20%" },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="text-3xl sm:text-4xl font-heading text-white mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Model */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl text-white text-center mb-12">
            How the Partnership Works
          </h2>
          <div className="space-y-8">
            {[
              {
                step: "1",
                title: "You join as a Briella affiliate",
                description:
                  "Branded subdomain, affiliate tracking, dashboard access",
              },
              {
                step: "2",
                title: "Clients enroll through your link",
                description:
                  "Digital intake, consent, automatic panel ordering",
              },
              {
                step: "3",
                title: "Results route to your dashboard",
                description:
                  "Real-time notifications, organized results, revenue reporting",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <span className="font-heading text-3xl text-gold">
                    {item.step}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-heading text-xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provider Dashboard Preview */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl text-white mb-8">
            Your Provider Dashboard
          </h2>
          <div className="bg-bg-card rounded-2xl p-8 border border-border">
            {/* Dashboard Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Active Members", value: "24" },
                { label: "Pending Draw", value: "6" },
                { label: "Flagged Results", value: "3" },
                { label: "Revenue", value: "$1,752" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-bg-mid rounded-lg p-4 text-center"
                >
                  <p className="text-white font-semibold text-lg">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Sample Patient Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-2 font-semibold text-white">
                      Patient
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-white">
                      Status
                    </th>
                    <th className="text-left py-3 px-2 font-semibold text-white">
                      Last Test
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sarah Mitchell", status: "Complete", date: "Mar 20" },
                    { name: "James Rodriguez", status: "Pending", date: "—" },
                    { name: "Emma Williams", status: "Complete", date: "Mar 18" },
                  ].map((patient, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-border/50 hover:bg-bg-card-hover"
                    >
                      <td className="py-3 px-2 text-gray-300">
                        {patient.name}
                      </td>
                      <td className="py-3 px-2">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                            patient.status === "Complete"
                              ? "bg-teal-dim text-teal"
                              : "bg-gold-dim text-gold"
                          }`}
                        >
                          {patient.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-gray-400">
                        {patient.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Cards */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl text-white text-center mb-12">
            Built for Compliance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                emoji: "⚕️",
                title: "Physician-ordered panels",
                description:
                  "Licensed physician through our network",
              },
              {
                emoji: "🔒",
                title: "HIPAA-compliant",
                description: "Full infrastructure, BAAs in place",
              },
              {
                emoji: "🗺️",
                title: "Multi-state availability",
                description: "TX, PA, NC, expanding",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-bg-card border border-border rounded-xl p-6"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-heading text-xl text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section className="bg-bg-dark px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl text-white text-center mb-12">
            Partnership Tiers
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl text-white mb-4">Starter</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Revenue Share</p>
                  <p className="font-heading text-3xl text-white">15%</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Max Members</p>
                  <p className="font-heading text-3xl text-white">25</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Payouts</p>
                  <p className="font-heading text-3xl text-white">Quarterly</p>
                </div>
              </div>
            </div>

            {/* Growth - Featured */}
            <div className="bg-bg-card rounded-2xl p-8 border-2 border-gold relative lg:scale-105">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="inline-block bg-gold text-bg-dark text-xs font-semibold rounded-full px-4 py-1">
                  Featured
                </span>
              </div>
              <h3 className="font-heading text-2xl text-white mb-4">Growth</h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Revenue Share</p>
                  <p className="font-heading text-3xl text-white">20%</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Max Members</p>
                  <p className="font-heading text-3xl text-white">100</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Payouts</p>
                  <p className="font-heading text-3xl text-white">Monthly</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Support</p>
                  <p className="font-semibold text-white">Priority</p>
                </div>
              </div>
              <button className="w-full bg-gold text-bg-dark py-3 rounded-xl font-semibold hover:bg-gold/90 transition">
                Apply to Partner
              </button>
            </div>

            {/* Enterprise */}
            <div className="bg-bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl text-white mb-4">
                Enterprise
              </h3>
              <div className="space-y-4 mb-8">
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Revenue Share</p>
                  <p className="font-heading text-3xl text-white">Custom</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Max Members</p>
                  <p className="font-heading text-3xl text-white">Unlimited</p>
                </div>
                <div className="pb-4 border-b border-border">
                  <p className="text-gray-400 text-sm">Features</p>
                  <p className="font-semibold text-white">
                    White-label, API access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold text-bg-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-4xl sm:text-5xl mb-8">
            Ready to add lab intelligence to your practice?
          </h2>
          <button className="bg-bg-dark text-gold px-8 py-3 rounded-xl font-semibold hover:bg-bg-dark/80 transition mb-4 inline-block">
            Apply to Partner
          </button>
          <p className="text-bg-dark/80 text-sm mt-6">
            No setup fees · Live within 2 weeks
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

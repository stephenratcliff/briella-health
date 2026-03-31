import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "What We Test | Briella Health",
  description: "100+ biomarkers across 11 organ systems. Comprehensive blood testing selected by physicians.",
};

export default function WhatWeTest() {
  const categories = [
    {
      emoji: "❤️",
      name: "Heart & Cardiovascular",
      count: 18,
      tests:
        "Total Cholesterol, LDL, HDL, Triglycerides, ApoB, ApoA-1, Lp(a), hsCRP, Homocysteine, Fibrinogen, Non-HDL, VLDL, LDL Particle Size, Oxidized LDL, MPO, NT-proBNP, Cardiac Troponin I, Lipoprotein Fractionation",
    },
    {
      emoji: "⚡",
      name: "Hormones & Metabolism",
      count: 22,
      tests:
        "Total/Free/Bioavailable Testosterone, SHBG, Estradiol, Progesterone, DHEA-S, Cortisol, FSH, LH, Prolactin, IGF-1, HbA1c, Fasting Insulin, Fasting Glucose, HOMA-IR, C-Peptide, Leptin, Adiponectin, Uric Acid, GLP-1, AMH",
    },
    {
      emoji: "🦋",
      name: "Thyroid Function",
      count: 8,
      tests: "TSH, Free T3, Free T4, Reverse T3, Total T3, Total T4, TPO Antibodies, Thyroglobulin Antibodies",
    },
    {
      emoji: "✨",
      name: "Nutrients & Vitamins",
      count: 16,
      tests:
        "Vitamin D, B12, Folate, B6, A, E, K, Magnesium (RBC), Zinc, Copper, Selenium, Iron, TIBC, Ferritin, Omega-3 Index, CoQ10",
    },
    {
      emoji: "🛡️",
      name: "Immune & Inflammation",
      count: 14,
      tests:
        "CBC with Differential, hsCRP, ESR, Ferritin, IL-6, TNF-alpha, ANA, Rheumatoid Factor, Anti-dsDNA, Complement C3/C4, IgG/IgA/IgM, WBC Count, Lymphocyte Subsets",
    },
    {
      emoji: "🫁",
      name: "Liver & Kidney",
      count: 12,
      tests:
        "ALT, AST, GGT, Alkaline Phosphatase, Total/Direct Bilirubin, Total Protein, Albumin, BUN, Creatinine, eGFR, Cystatin C",
    },
    {
      emoji: "🩸",
      name: "Blood & Hematology",
      count: 10,
      tests:
        "RBC, Hemoglobin, Hematocrit, MCV/MCH/MCHC, RDW, Platelet Count, WBC, Neutrophils, Lymphocytes, Reticulocyte Count",
    },
    {
      emoji: "🔬",
      name: "Cancer Screening Markers",
      count: 8,
      tests: "PSA, Free PSA, CEA, CA 19-9, CA-125, AFP, Beta-HCG, LDH",
    },
    {
      emoji: "⚗️",
      name: "Heavy Metals & Toxins",
      count: 6,
      tests: "Lead, Mercury, Arsenic, Cadmium, Aluminum, Manganese",
    },
  ];

  const stats = [
    { number: "100+", label: "Total Biomarkers" },
    { number: "11", label: "Organ Systems" },
    { number: "1", label: "Annual Draw" },
    { number: "Quest", label: "CLIA-Certified" },
  ];

  return (
    <div className="bg-bg-dark">
      <Nav />

      {/* Hero Section */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm uppercase tracking-wide text-teal">The Panel</p>
            <h1 className="mt-4 font-heading text-5xl font-bold text-white sm:text-6xl">
              100+ tests. Every system that matters.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Selected by physicians to cover cardiovascular, hormonal, metabolic, thyroid, immune, and
              nutritional health.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="border-y border-border bg-bg-card px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="font-heading text-4xl font-bold text-white">{stat.number}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section - Lab Technician */}
      <section className="bg-bg-dark px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <img
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600"
            alt="Lab technician working"
            className="w-full rounded-xl"
          />
        </div>
      </section>

      {/* Test Categories Grid */}
      <section className="bg-bg-dark px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-border bg-bg-card p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-3xl">{category.emoji}</p>
                    <h3 className="mt-3 font-heading text-lg font-bold text-white">
                      {category.name}
                    </h3>
                  </div>
                  <span className="rounded-full border border-border-teal bg-bg-teal-dim px-3 py-1 text-sm font-semibold text-teal">
                    {category.count}
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-400">{category.tests}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-xl border border-border bg-bg-light p-6">
          <p className="text-sm text-gray-400">
            <strong>Important:</strong> Panel may vary based on your selections. Results are not intended
            to diagnose, treat, cure, or prevent any disease. Some tests may require physician
            authorization. Please consult with your healthcare provider to discuss your results.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl font-bold text-white">Know Your Numbers</h2>
          <p className="mt-4 text-lg text-white">$365/year · All-inclusive</p>
          <button className="mt-8 rounded-lg bg-white px-8 py-3 font-body font-semibold text-teal transition-colors hover:bg-gray-100">
            Join the Waitlist
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

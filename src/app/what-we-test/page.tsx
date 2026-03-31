'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Biomarker Data ─── */
const biomarkersData = [
  // CARDIOVASCULAR
  { id: 'apoB', name: 'ApoB (Apolipoprotein B)', cat: 'cardiovascular', short: 'The most accurate count of atherogenic particles — a better predictor of cardiac risk than LDL cholesterol alone.', why: 'Unlike LDL-C, which measures cholesterol mass, ApoB directly counts every particle capable of depositing plaque. High ApoB predicts cardiovascular events even when standard LDL appears normal.', std: 'Rarely included', opt: '< 80 mg/dL', unit: 'mg/dL' },
  { id: 'lpA', name: 'Lp(a) — Lipoprotein(a)', cat: 'cardiovascular', short: 'A genetically inherited cardiovascular risk factor that standard lipid panels miss entirely.', why: 'Lp(a) is an independent risk factor for heart attack, stroke, and aortic valve disease — largely determined by genetics. About 20% of the population has elevated levels and has no idea.', std: 'Not included', opt: '< 30 mg/dL', unit: 'mg/dL' },
  { id: 'hsCRP', name: 'hs-CRP', cat: 'cardiovascular', short: 'A sensitive marker of systemic inflammation that predicts cardiovascular risk independent of cholesterol.', why: 'Chronic low-grade inflammation accelerates atherosclerosis. Levels above 3 mg/L double cardiovascular risk regardless of lipid status.', std: '< 3.0 mg/L', opt: '< 1.0 mg/L', unit: 'mg/L' },
  { id: 'homocysteine', name: 'Homocysteine', cat: 'cardiovascular', short: 'An amino acid that damages artery walls when elevated — and is highly correctable with B vitamins.', why: 'Elevated homocysteine is an independent risk factor for heart disease, stroke, and cognitive decline. It responds well to B12, folate, and B6 supplementation.', std: 'Not included', opt: '< 8 µmol/L', unit: 'µmol/L' },
  { id: 'ldl', name: 'LDL Cholesterol', cat: 'cardiovascular', short: 'The primary lipid target in cardiovascular risk assessment.', why: 'LDL transports cholesterol to arterial walls. Persistently elevated LDL accelerates plaque formation. Context alongside ApoB and triglycerides matters significantly.', std: '< 100 mg/dL', opt: '< 70 mg/dL', unit: 'mg/dL' },
  { id: 'hdl', name: 'HDL Cholesterol', cat: 'cardiovascular', short: 'The "reverse transport" cholesterol — higher is generally protective.', why: 'HDL mediates reverse cholesterol transport, removing lipids from vessel walls. Low HDL is an independent cardiovascular risk factor.', std: '> 40 mg/dL', opt: '> 60 mg/dL', unit: 'mg/dL' },
  { id: 'trig', name: 'Triglycerides', cat: 'cardiovascular', short: 'Blood fats influenced by carbohydrate intake — elevated levels signal insulin resistance.', why: 'Triglycerides are a sensitive marker of metabolic dysfunction. The triglyceride-to-HDL ratio is a practical insulin resistance proxy.', std: '< 150 mg/dL', opt: '< 80 mg/dL', unit: 'mg/dL' },
  { id: 'fibrinogen', name: 'Fibrinogen', cat: 'cardiovascular', short: 'A clotting protein and inflammation marker — elevated levels increase thrombosis and cardiovascular risk.', why: 'Chronically elevated fibrinogen thickens blood, promotes clot formation, and predicts cardiovascular events.', std: '200–400 mg/dL', opt: '200–300 mg/dL', unit: 'mg/dL' },
  // HORMONES
  { id: 'testTotal', name: 'Testosterone (Total)', cat: 'hormones', short: 'The primary androgen governing energy, muscle mass, mood, libido, and metabolic function.', why: 'Must be interpreted alongside free testosterone and SHBG. Optimal levels differ significantly from standard reference ranges.', std: '300–1000 ng/dL', opt: '600–900 ng/dL', unit: 'ng/dL' },
  { id: 'testFree', name: 'Testosterone (Free)', cat: 'hormones', short: 'The biologically active fraction — what your cells can actually use, unbound from carrier proteins.', why: 'Up to 98% of testosterone is bound and unavailable. Normal total with low free testosterone is a common pattern standard panels miss.', std: '5–21 ng/dL', opt: '15–25 ng/dL', unit: 'ng/dL' },
  { id: 'shbg', name: 'SHBG', cat: 'hormones', short: 'The carrier protein that binds sex hormones — essential context for interpreting testosterone.', why: 'High SHBG reduces free testosterone availability despite normal total levels. The key to reading your androgen picture accurately.', std: '10–57 nmol/L', opt: '20–40 nmol/L', unit: 'nmol/L' },
  { id: 'estradiol', name: 'Estradiol (E2)', cat: 'hormones', short: 'The primary estrogen — critical for bone density, cardiovascular protection, and cognition.', why: 'In men, produced via aromatization of testosterone — both too low and too high cause meaningful symptoms.', std: '15–350 pg/mL', opt: '50–200 pg/mL', unit: 'pg/mL' },
  { id: 'dheas', name: 'DHEA-S', cat: 'hormones', short: 'The most abundant circulating hormone — a precursor to sex hormones and a proxy for biological aging.', why: 'DHEA-S declines steadily with age. Low levels correlate with fatigue, immune dysfunction, and accelerated aging.', std: '35–430 µg/dL', opt: '200–350 µg/dL', unit: 'µg/dL' },
  { id: 'cortisol', name: 'Cortisol (AM)', cat: 'hormones', short: 'The primary stress and wake hormone — measured at peak morning levels to evaluate adrenal function.', why: 'Chronically elevated cortisol suppresses testosterone, promotes fat storage, impairs sleep, and accelerates immune aging.', std: '6–23 µg/dL', opt: '12–20 µg/dL', unit: 'µg/dL' },
  { id: 'igf1', name: 'IGF-1', cat: 'hormones', short: 'The primary mediator of growth hormone action — a key marker of metabolic vitality.', why: 'IGF-1 declines with age. Optimal levels support muscle synthesis, bone density, cognitive function, and cellular repair.', std: '75–200 ng/mL', opt: '150–250 ng/mL', unit: 'ng/mL' },
  { id: 'progesterone', name: 'Progesterone', cat: 'hormones', short: 'Balances estrogen, supports sleep and mood — among the most undertested hormonal markers.', why: 'In women, deficiency causes irregular cycles, poor sleep, and anxiety. In men, it has neuroprotective effects.', std: '5–20 ng/mL', opt: '10–25 ng/mL', unit: 'ng/mL' },
  { id: 'fsh', name: 'FSH', cat: 'hormones', short: 'A pituitary hormone driving ovarian development and sperm production.', why: 'Elevated FSH in women signals diminished ovarian reserve. In men, elevated FSH with low testosterone points to primary hypogonadism.', std: '3–10 mIU/mL', opt: 'Context-dependent', unit: 'mIU/mL' },
  { id: 'lh', name: 'LH', cat: 'hormones', short: 'The pituitary trigger for testosterone production and ovulation.', why: 'LH and FSH together define whether a hormone problem originates in the gonads or the pituitary.', std: '2–15 mIU/mL', opt: 'Requires clinical context', unit: 'mIU/mL' },
  // METABOLIC
  { id: 'glucose', name: 'Fasting Glucose', cat: 'metabolic', short: 'The foundational metabolic marker — reflecting blood sugar management in a rested, fasted state.', why: 'The "normal" cutoff of 100 mg/dL still leaves room for significant metabolic dysfunction. Optimal is below 85 mg/dL.', std: '70–99 mg/dL', opt: '72–85 mg/dL', unit: 'mg/dL' },
  { id: 'hba1c', name: 'HbA1c', cat: 'metabolic', short: 'A 90-day average of blood sugar control — far more informative than a single glucose reading.', why: 'HbA1c catches chronic hyperglycemia that a single glucose reading can miss. Levels above 5.6% indicate prediabetes risk.', std: '< 5.7%', opt: '4.8–5.4%', unit: '%' },
  { id: 'insulin', name: 'Fasting Insulin', cat: 'metabolic', short: 'The most sensitive early-warning marker for insulin resistance — elevated a decade before glucose goes abnormal.', why: 'Insulin resistance drives type 2 diabetes, PCOS, weight gain, and cardiovascular disease. Fasting glucose can remain normal while insulin is already elevated.', std: '2–25 µIU/mL', opt: '2–6 µIU/mL', unit: 'µIU/mL' },
  { id: 'homaIR', name: 'HOMA-IR', cat: 'metabolic', short: 'A calculated index quantifying insulin resistance from fasting glucose and insulin.', why: 'Above 2.0 suggests significant insulin resistance; above 2.9 is associated with metabolic syndrome.', std: '< 2.9', opt: '< 1.5', unit: 'index' },
  { id: 'uricAcid', name: 'Uric Acid', cat: 'metabolic', short: 'Best known for gout — also a reliable indicator of insulin resistance and cardiovascular risk.', why: 'Hyperuricemia independently predicts metabolic syndrome, kidney disease, and cardiovascular events.', std: '2.5–7.5 mg/dL', opt: '< 5.5 mg/dL', unit: 'mg/dL' },
  // THYROID
  { id: 'tsh', name: 'TSH', cat: 'thyroid', short: 'The master pituitary signal telling the thyroid how hard to work.', why: 'TSH alone misses conversion problems and autoimmune disease — the two most common thyroid issues.', std: '0.4–4.5 mIU/L', opt: '1.0–2.0 mIU/L', unit: 'mIU/L' },
  { id: 'freeT3', name: 'Free T3', cat: 'thyroid', short: 'The active, cellular form of thyroid hormone — what your tissues actually use.', why: 'T3 is four times more metabolically potent than T4. TSH and T4 can appear normal while T3 conversion is impaired.', std: '2.3–4.2 pg/mL', opt: '3.2–4.2 pg/mL', unit: 'pg/mL' },
  { id: 'freeT4', name: 'Free T4', cat: 'thyroid', short: 'The storage form of thyroid hormone — must be converted to active T3.', why: 'Normal T4 with low T3 suggests a conversion problem — often caused by stress, nutrient deficiencies, or inflammation.', std: '0.8–1.8 ng/dL', opt: '1.1–1.6 ng/dL', unit: 'ng/dL' },
  { id: 'reverseT3', name: 'Reverse T3', cat: 'thyroid', short: 'An inactive metabolite that blocks active T3 receptors — elevated levels cause functional hypothyroidism.', why: 'Under chronic stress, the body converts T4 to Reverse T3 instead of active T3. Missed by every standard panel.', std: '9.2–24.1 ng/dL', opt: '< 15 ng/dL', unit: 'ng/dL' },
  { id: 'tpoAb', name: 'TPO Antibodies', cat: 'thyroid', short: 'Markers of autoimmune thyroid disease — elevated before TSH shows any abnormality.', why: 'Anti-TPO antibodies diagnose Hashimoto thyroiditis — the most common autoimmune disease in the US.', std: '< 35 IU/mL', opt: '< 10 IU/mL', unit: 'IU/mL' },
  { id: 'tgAb', name: 'Thyroglobulin Antibodies', cat: 'thyroid', short: 'A second autoimmune thyroid marker — with TPO, confirms Hashimoto or Graves disease.', why: 'TgAb are present in 60–80% of Hashimoto patients. Testing both maximizes autoimmune thyroid detection.', std: '< 4 IU/mL', opt: '< 1 IU/mL', unit: 'IU/mL' },
  { id: 'vitD', name: 'Vitamin D (25-OH)', cat: 'thyroid', short: 'The hormone-like vitamin governing immune regulation, thyroid function, and bone density.', why: 'Over 40% of Americans are deficient. The standard "sufficient" cutoff of 30 ng/mL is too low for optimal function.', std: '30–100 ng/mL', opt: '60–80 ng/mL', unit: 'ng/mL' },
  // IMMUNE & INFLAMMATION
  { id: 'ferritin', name: 'Ferritin', cat: 'immune', short: 'The primary iron storage protein — important as both a nutrient marker and inflammation signal.', why: 'Low ferritin causes fatigue, hair loss, and cognitive dysfunction long before anemia develops. Routinely missed at low-normal levels.', std: '12–300 ng/mL', opt: '70–150 ng/mL', unit: 'ng/mL' },
  { id: 'il6', name: 'IL-6 (Interleukin-6)', cat: 'immune', short: 'A key inflammatory cytokine bridging acute immune response and chronic disease.', why: 'Chronically elevated IL-6 drives insulin resistance, muscle wasting, depression, and accelerated aging.', std: '< 7 pg/mL', opt: '< 3 pg/mL', unit: 'pg/mL' },
  { id: 'ironPanel', name: 'Iron & TIBC Panel', cat: 'immune', short: 'Serum iron, TIBC, and transferrin saturation — a complete picture of iron metabolism.', why: 'Serum iron alone is unreliable. The full panel distinguishes iron deficiency anemia from chronic disease anemia and hereditary hemochromatosis.', std: 'Varies by marker', opt: 'Transferrin sat: 25–35%', unit: 'Multiple' },
  // NUTRIENTS
  { id: 'b12', name: 'Vitamin B12', cat: 'nutrients', short: 'Essential for nerve function, DNA synthesis, and red blood cell formation.', why: 'Common deficiency in vegans, metformin users, and those on acid suppressants. Serum B12 can appear adequate while functional deficiency exists.', std: '200–900 pg/mL', opt: '700–1000 pg/mL', unit: 'pg/mL' },
  { id: 'folate', name: 'Folate (B9)', cat: 'nutrients', short: 'Critical for DNA synthesis and methylation — deficiency elevates homocysteine.', why: 'Folate drives methylation reactions throughout the body. MTHFR gene variants reduce folate conversion efficiency.', std: '> 5.9 ng/mL', opt: '> 15 ng/mL', unit: 'ng/mL' },
  { id: 'magnesium', name: 'Magnesium (RBC)', cat: 'nutrients', short: 'A cofactor in 300+ enzymatic reactions — deficiency underlies cramps, sleep disruption, and anxiety.', why: 'Standard serum magnesium misses most deficiency — RBC magnesium is the functional measure. Over 60% of Americans fall short.', std: '1.7–2.2 mg/dL', opt: 'RBC: 5.5–7.0 mg/dL', unit: 'mg/dL' },
  { id: 'zinc', name: 'Zinc', cat: 'nutrients', short: 'Essential for immune function, testosterone synthesis, and wound healing.', why: 'Zinc deficiency suppresses immune function and reduces testosterone production. A cofactor for 300+ enzymes.', std: '60–130 µg/dL', opt: '90–115 µg/dL', unit: 'µg/dL' },
  { id: 'selenium', name: 'Selenium', cat: 'nutrients', short: 'A trace mineral supporting thyroid hormone conversion and antioxidant defense.', why: 'Selenium is required for enzymes that convert T4 to active T3. Deficiency worsens Hashimoto thyroiditis.', std: '70–150 ng/mL', opt: '110–130 ng/mL', unit: 'ng/mL' },
  { id: 'omega3', name: 'Omega-3 Index', cat: 'nutrients', short: 'The ratio of EPA+DHA in red blood cells — a 3-month window into omega-3 status.', why: 'An Omega-3 Index below 4% doubles cardiac event risk. Achieving 8–12% reduces inflammation and arrhythmia risk.', std: '> 4%', opt: '8–12%', unit: '%' },
  { id: 'coq10', name: 'CoQ10', cat: 'nutrients', short: 'The mitochondrial fuel catalyst — essential for ATP production, depleted by statin medications.', why: 'CoQ10 declines with age and is blocked by statin drugs. A critical marker for anyone on statins.', std: '0.5–1.7 µg/mL', opt: '1.0–2.0 µg/mL', unit: 'µg/mL' },
  // BLOOD & HEMATOLOGY
  { id: 'cbc', name: 'CBC with Differential', cat: 'blood', short: 'The foundational hematology panel — red cells, white cells, and platelets across all major populations.', why: 'Anemia patterns point to specific deficiencies. White cell differentials distinguish viral from bacterial infection and identify immune disorders.', std: 'Multiple ranges', opt: 'All components within range', unit: 'Multiple' },
  // CANCER
  { id: 'afp', name: 'AFP (Alpha-Fetoprotein)', cat: 'cancer', short: 'A hepatocellular carcinoma and germ cell tumor marker.', why: 'Elevated AFP in adults signals hepatocellular carcinoma or testicular germ cell tumors. Important for those with liver disease.', std: '< 10 ng/mL', opt: '< 5 ng/mL', unit: 'ng/mL' },
  { id: 'psa', name: 'PSA (Men)', cat: 'cancer', short: 'Prostate-specific antigen — the primary prostate cancer screening marker for men.', why: 'PSA trends over time are more meaningful than a single number. Velocity changes can signal early malignancy before absolute thresholds are reached.', std: '< 4.0 ng/mL', opt: '< 1.0 ng/mL', unit: 'ng/mL' },
  // KIDNEY
  { id: 'kidney', name: 'Kidney Function Panel', cat: 'kidney', short: 'BUN, Creatinine, eGFR, and Cystatin C — core markers of renal function.', why: 'Chronic kidney disease often progresses silently. eGFR and Cystatin C are more sensitive than creatinine alone.', std: 'eGFR > 90', opt: '> 90 mL/min', unit: 'mL/min' },
  // LIVER
  { id: 'liver', name: 'Liver Function Panel', cat: 'liver', short: 'ALT, AST, ALP, Bilirubin, Albumin, and Total Protein — comprehensive hepatic assessment.', why: 'Reveals acute inflammation, cholestasis, and synthetic dysfunction. Essential for anyone taking medications metabolized by the liver.', std: 'Varies by test', opt: 'All within range', unit: 'Multiple' },
  { id: 'ggt', name: 'GGT', cat: 'liver', short: 'A sensitive liver enzyme and early marker of metabolic liver stress, bile duct dysfunction, and alcohol use.', why: 'GGT rises before other liver enzymes in fatty liver disease and correlates with cardiovascular risk and insulin resistance independently.', std: '8–61 U/L', opt: '< 30 U/L', unit: 'U/L' },
];

/* ─── Category Config ─── */
const categories = [
  { key: 'cardiovascular', label: 'Cardiovascular', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z', color: '#ef4444' },
  { key: 'hormones', label: 'Hormones', icon: 'M13 2L3 14h9l-1 10 10-12h-9l1-10z', color: '#f59e0b' },
  { key: 'metabolic', label: 'Metabolic', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', color: '#f97316' },
  { key: 'thyroid', label: 'Thyroid', icon: 'M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z', color: '#8b5cf6' },
  { key: 'immune', label: 'Immune & Inflammation', icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', color: '#10b981' },
  { key: 'nutrients', label: 'Nutrients & Vitamins', icon: 'M17.73 12.02l3.98-3.98a.996.996 0 000-1.41l-4.34-4.34a.996.996 0 00-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16a.996.996 0 000 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98z', color: '#22c55e' },
  { key: 'blood', label: 'Blood & Hematology', icon: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8z', color: '#dc2626' },
  { key: 'cancer', label: 'Cancer Markers', icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z', color: '#6366f1' },
  { key: 'kidney', label: 'Kidney', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z', color: '#06b6d4' },
  { key: 'liver', label: 'Liver', icon: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z', color: '#a855f7' },
];

const categoryLabels: Record<string, string> = {};
const categoryColors: Record<string, string> = {};
categories.forEach(c => {
  categoryLabels[c.key] = c.label;
  categoryColors[c.key] = c.color;
});

export default function WhatWeTest() {
  useScrollReveal();

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const [visibleSection, setVisibleSection] = useState<string>('cardiovascular');

  // Intersection observer for sidebar active state
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Filter biomarkers
  const filteredByCategory = useMemo(() => {
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return biomarkersData.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.short.toLowerCase().includes(q) ||
        b.cat.toLowerCase().includes(q)
      );
    }
    if (activeCategory) {
      return biomarkersData.filter(b => b.cat === activeCategory);
    }
    return biomarkersData;
  }, [activeCategory, searchQuery]);

  // Group by category
  const groupedMarkers = useMemo(() => {
    const groups: Record<string, typeof biomarkersData> = {};
    filteredByCategory.forEach(b => {
      if (!groups[b.cat]) groups[b.cat] = [];
      groups[b.cat].push(b);
    });
    return groups;
  }, [filteredByCategory]);

  const catCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    biomarkersData.forEach(b => {
      counts[b.cat] = (counts[b.cat] || 0) + 1;
    });
    return counts;
  }, []);

  const handleCategoryClick = (key: string) => {
    setSearchQuery('');
    if (activeCategory === key) {
      setActiveCategory(null);
    } else {
      setActiveCategory(key);
      // Scroll to section
      const el = sectionRefs.current[key];
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-bg-dark min-h-screen">
      <Nav />

      {/* ─── Hero ─── */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl fade-up">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-5">Biomarker Library</p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.08]">
              What we test —{' '}
              <span className="text-teal-light">and why it matters.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
              Standard physicals check 10–20 markers. Every Briella Health membership includes {biomarkersData.length}+ biomarkers across {categories.length} body systems — with functional optimal ranges, not just standard lab cutoffs.
            </p>

            {/* Stat pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-teal/10 border border-teal/20">
                <span className="text-teal font-heading font-extrabold text-lg">{biomarkersData.length}+</span>
                <span className="text-gray-300 text-sm">biomarkers</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/20">
                <span className="text-gold font-heading font-extrabold text-lg">{categories.length}</span>
                <span className="text-gray-300 text-sm">body systems</span>
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/10">
                <span className="text-white font-heading font-extrabold text-lg">$365</span>
                <span className="text-gray-300 text-sm">per year</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Search + Category Bar (sticky) ─── */}
      <section className="sticky top-[68px] z-30 bg-bg-dark/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4">
          {/* Search */}
          <div className="relative mb-3">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search biomarkers — e.g. testosterone, vitamin D, ApoB..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setActiveCategory(null); }}
              className="w-full bg-bg-card border border-border rounded-xl py-3 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-teal/60 focus:shadow-[0_0_0_3px_rgba(13,148,136,0.12)] transition-all placeholder-gray-600"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>
            )}
          </div>

          {/* Category pills — horizontal scroll */}
          <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
            {categories.map(cat => {
              const isActive = activeCategory === cat.key;
              const count = catCounts[cat.key] || 0;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryClick(cat.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap border transition-all shrink-0 ${
                    isActive
                      ? 'bg-teal/15 border-teal/40 text-teal-light shadow-[0_0_12px_rgba(13,148,136,0.15)]'
                      : 'bg-bg-card border-border text-gray-400 hover:border-teal/30 hover:text-gray-200'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                  {cat.label}
                  <span className={`text-[0.65rem] ${isActive ? 'text-teal/60' : 'text-gray-600'}`}>{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-10">

          {/* Sidebar — Desktop only */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-[220px]">
              <p className="text-[0.65rem] uppercase tracking-[0.12em] font-bold text-gray-600 mb-4">Systems</p>
              <nav className="flex flex-col gap-1">
                {categories.map(cat => {
                  const isVisible = visibleSection === cat.key;
                  return (
                    <button
                      key={cat.key}
                      onClick={() => handleCategoryClick(cat.key)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left text-sm transition-all ${
                        isVisible
                          ? 'bg-teal/10 text-teal-light'
                          : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.03]'
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: isVisible ? cat.color : 'transparent' }} />
                      <span className="truncate">{cat.label}</span>
                      <span className={`text-[0.65rem] ml-auto ${isVisible ? 'text-teal/50' : 'text-gray-700'}`}>
                        {catCounts[cat.key] || 0}
                      </span>
                    </button>
                  );
                })}
              </nav>

              {/* Quick Stats */}
              <div className="mt-8 p-4 rounded-xl bg-bg-card border border-border">
                <p className="text-[0.65rem] uppercase tracking-[0.12em] font-bold text-gray-600 mb-3">Coverage</p>
                <div className="text-2xl font-heading font-extrabold text-white mb-1">{biomarkersData.length}+</div>
                <p className="text-xs text-gray-500 mb-4">biomarkers tested annually</p>
                <Link
                  href="/membership"
                  className="block text-center text-xs font-bold text-teal hover:text-teal-light transition-colors py-2 rounded-lg border border-teal/20 hover:border-teal/40"
                >
                  View Membership &rarr;
                </Link>
              </div>
            </div>
          </aside>

          {/* Biomarker Grid */}
          <main className="flex-1 min-w-0">
            {searchQuery.trim() && (
              <div className="mb-6">
                <p className="text-sm text-gray-400">
                  <span className="text-white font-semibold">{filteredByCategory.length}</span> result{filteredByCategory.length !== 1 ? 's' : ''} for &ldquo;<span className="text-teal-light">{searchQuery}</span>&rdquo;
                </p>
              </div>
            )}

            {categories.map(cat => {
              const markers = groupedMarkers[cat.key];
              if (!markers || markers.length === 0) return null;

              return (
                <section
                  key={cat.key}
                  id={cat.key}
                  ref={el => { sectionRefs.current[cat.key] = el; }}
                  className="mb-14 scroll-mt-[240px]"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: cat.color + '18' }}
                    >
                      <svg className="w-4 h-4" style={{ color: cat.color }} fill="currentColor" viewBox="0 0 24 24">
                        <path d={cat.icon} />
                      </svg>
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-lg text-white leading-tight">{cat.label}</h2>
                      <p className="text-xs text-gray-500">{markers.length} biomarker{markers.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>

                  {/* Marker Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {markers.map((marker) => {
                      const isExpanded = expandedCard === marker.id;
                      return (
                        <div
                          key={marker.id}
                          onClick={() => setExpandedCard(isExpanded ? null : marker.id)}
                          className={`group bg-bg-card border rounded-xl cursor-pointer transition-all duration-200 ${
                            isExpanded
                              ? 'border-teal/50 shadow-[0_0_20px_rgba(13,148,136,0.08)] md:col-span-2'
                              : 'border-border hover:border-gray-700 hover:shadow-[0_2px_12px_rgba(0,0,0,0.3)]'
                          }`}
                        >
                          <div className="p-5">
                            {/* Card Header */}
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="text-sm font-bold text-white group-hover:text-teal-light transition-colors leading-snug">
                                {marker.name}
                              </h3>
                              <svg
                                className={`w-4 h-4 shrink-0 mt-0.5 transition-all duration-200 ${
                                  isExpanded ? 'text-teal rotate-180' : 'text-gray-600 group-hover:text-gray-400'
                                }`}
                                fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                              >
                                <polyline points="6 9 12 15 18 9"/>
                              </svg>
                            </div>

                            {/* Short description */}
                            <p className="text-xs text-gray-400 leading-relaxed mb-3">{marker.short}</p>

                            {/* Range badges — always visible */}
                            <div className="flex flex-wrap gap-2">
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                                <span className="text-[0.6rem] uppercase tracking-wider text-gray-600 font-bold">Std</span>
                                <span className="text-[0.7rem] text-gray-400">{marker.std}</span>
                              </div>
                              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-teal/[0.06] border border-teal/[0.12]">
                                <span className="text-[0.6rem] uppercase tracking-wider text-teal/60 font-bold">Optimal</span>
                                <span className="text-[0.7rem] text-teal-light font-semibold">{marker.opt}</span>
                              </div>
                            </div>

                            {/* Expanded detail */}
                            {isExpanded && (
                              <div className="mt-4 pt-4 border-t border-border/60">
                                <div className="flex gap-2 items-start mb-3">
                                  <div className="w-5 h-5 rounded-full bg-teal/10 flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-teal" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                                  </div>
                                  <div>
                                    <p className="text-[0.65rem] uppercase tracking-[0.1em] font-bold text-gray-600 mb-1">Why We Test This</p>
                                    <p className="text-sm text-gray-300 leading-relaxed">{marker.why}</p>
                                  </div>
                                </div>

                                <div className="grid grid-cols-3 gap-2 mt-4">
                                  <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                                    <p className="text-[0.6rem] uppercase tracking-wider text-gray-600 font-bold mb-1">Standard Range</p>
                                    <p className="text-sm text-gray-300">{marker.std}</p>
                                  </div>
                                  <div className="bg-teal/[0.04] rounded-lg p-3 border border-teal/[0.1]">
                                    <p className="text-[0.6rem] uppercase tracking-wider text-teal/50 font-bold mb-1">Optimal Range</p>
                                    <p className="text-sm text-teal-light font-semibold">{marker.opt}</p>
                                  </div>
                                  <div className="bg-white/[0.02] rounded-lg p-3 border border-white/[0.04]">
                                    <p className="text-[0.6rem] uppercase tracking-wider text-gray-600 font-bold mb-1">Unit</p>
                                    <p className="text-sm text-gray-300">{marker.unit}</p>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}

            {filteredByCategory.length === 0 && (
              <div className="text-center py-20">
                <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                  </svg>
                </div>
                <p className="text-gray-400 text-sm mb-1">No biomarkers match &ldquo;{searchQuery}&rdquo;</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory(null); }} className="text-teal text-sm hover:text-teal-light transition-colors">
                  Clear search
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* ─── Bottom CTA ─── */}
      <section className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center fade-up">
          <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">Every marker. Every year.</p>
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
            {biomarkersData.length}+ biomarkers. One membership.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md mx-auto">
            $365/year — no add-ons, no à la carte pricing. All 50 states through Quest Diagnostics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="inline-block px-8 py-3.5 bg-teal text-white font-heading font-bold rounded-xl hover:bg-teal-light transition-colors"
            >
              Start Your Membership
            </Link>
            <Link
              href="/how-it-works"
              className="inline-block px-8 py-3.5 border border-border text-gray-300 font-heading font-bold rounded-xl hover:border-teal/40 hover:text-white transition-all"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

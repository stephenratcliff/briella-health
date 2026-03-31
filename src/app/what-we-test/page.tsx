'use client';

import { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import Link from "next/link";

// Metadata cannot be used in 'use client' components, so we'll define it separately if needed

const biomarkersData = [
  { id: 'apoB', name: 'ApoB (Apolipoprotein B)', cat: 'cardiovascular', short: 'The most accurate count of atherogenic particles — a better predictor of cardiac risk than LDL cholesterol alone.', why: 'Unlike LDL-C, which measures cholesterol mass, ApoB directly counts every particle capable of depositing plaque. High ApoB predicts cardiovascular events even when standard LDL appears normal. Many cardiologists now consider it the primary lipid target.', std: 'Rarely included in standard panels', opt: '< 80 mg/dL (< 60 if high risk)', unit: 'mg/dL' },
  { id: 'lpA', name: 'Lp(a) — Lipoprotein(a)', cat: 'cardiovascular', short: 'A genetically inherited cardiovascular risk factor that standard lipid panels miss entirely.', why: 'Lp(a) is an independent risk factor for heart attack, stroke, and aortic valve disease — largely determined by genetics, unaffected by diet or most medications. About 20% of the population has elevated levels and has no idea.', std: 'Not included in standard panels', opt: '< 30 mg/dL', unit: 'mg/dL' },
  { id: 'hsCRP', name: 'hs-CRP (High-Sensitivity CRP)', cat: 'cardiovascular', short: 'A sensitive marker of systemic inflammation that predicts cardiovascular risk independent of cholesterol.', why: 'Chronic low-grade inflammation accelerates atherosclerosis. Levels above 3 mg/L double cardiovascular risk regardless of lipid status. hs-CRP can identify inflammation years before symptoms appear.', std: '< 3.0 mg/L (elevated)', opt: '< 1.0 mg/L', unit: 'mg/L' },
  { id: 'homocysteine', name: 'Homocysteine', cat: 'cardiovascular', short: 'An amino acid that damages artery walls when elevated — and is highly correctable with B vitamins.', why: 'Elevated homocysteine is an independent risk factor for heart disease, stroke, and cognitive decline. It responds well to B12, folate, and B6 supplementation — making early detection genuinely actionable.', std: 'Not included in standard panels', opt: '< 8 µmol/L', unit: 'µmol/L' },
  { id: 'ldl', name: 'LDL Cholesterol', cat: 'cardiovascular', short: 'The primary lipid target in cardiovascular risk assessment.', why: 'LDL transports cholesterol to arterial walls. Persistently elevated LDL accelerates plaque formation. Context alongside ApoB and triglycerides matters significantly for true risk assessment.', std: '< 100 mg/dL', opt: '< 70 mg/dL', unit: 'mg/dL' },
  { id: 'hdl', name: 'HDL Cholesterol', cat: 'cardiovascular', short: 'The "reverse transport" cholesterol that moves lipids away from arteries — higher is generally protective.', why: 'HDL mediates reverse cholesterol transport, removing lipids from vessel walls. Low HDL is an independent cardiovascular risk factor. Very high HDL does not always confer additional protection.', std: '> 40 mg/dL (men)', opt: '> 60 mg/dL', unit: 'mg/dL' },
  { id: 'trig', name: 'Triglycerides', cat: 'cardiovascular', short: 'Blood fats directly influenced by carbohydrate intake — elevated levels signal insulin resistance.', why: 'Triglycerides are a sensitive marker of metabolic dysfunction. Levels above 150 mg/dL suggest early insulin resistance. The triglyceride-to-HDL ratio is a practical insulin resistance proxy.', std: '< 150 mg/dL', opt: '< 80 mg/dL', unit: 'mg/dL' },
  { id: 'fibrinogen', name: 'Fibrinogen', cat: 'cardiovascular', short: 'A clotting protein and inflammation marker — elevated levels increase thrombosis and cardiovascular risk.', why: 'Chronically elevated fibrinogen thickens blood, promotes clot formation, and predicts cardiovascular events. It responds to lifestyle modification and anti-inflammatory interventions.', std: '200–400 mg/dL', opt: '200–300 mg/dL', unit: 'mg/dL' },
  { id: 'testTotal', name: 'Testosterone (Total)', cat: 'hormones', short: 'The primary androgen governing energy, muscle mass, mood, libido, and metabolic function in both men and women.', why: 'Must be interpreted alongside free testosterone and SHBG. Low levels correlate with fatigue, low libido, muscle loss, insulin resistance, and depression. Optimal levels differ significantly from standard reference ranges.', std: '300–1000 ng/dL (men)', opt: '600–900 ng/dL (men)', unit: 'ng/dL' },
  { id: 'testFree', name: 'Testosterone (Free)', cat: 'hormones', short: 'The biologically active fraction — what your cells can actually use, unbound from carrier proteins.', why: 'Up to 98% of testosterone is bound and unavailable for tissue use. Normal total testosterone with low free testosterone is a common, clinically significant pattern that standard panels miss.', std: '5–21 ng/dL (men)', opt: '15–25 ng/dL (men)', unit: 'ng/dL' },
  { id: 'shbg', name: 'SHBG', cat: 'hormones', short: 'The carrier protein that binds sex hormones — essential context for interpreting testosterone accurately.', why: 'High SHBG reduces free testosterone availability despite normal total levels. Low SHBG (common in insulin resistance) can mask functional deficiency. The key to reading your androgen picture accurately.', std: '10–57 nmol/L (men)', opt: '20–40 nmol/L (men)', unit: 'nmol/L' },
  { id: 'estradiol', name: 'Estradiol (E2)', cat: 'hormones', short: 'The primary estrogen — critical for bone density, cardiovascular protection, cognition, and libido in both sexes.', why: 'In women, estradiol drives the cycle and protects bone and cardiovascular health. In men, produced via aromatization of testosterone — both too low and too high cause meaningful symptoms.', std: '15–350 pg/mL (women)', opt: '50–200 pg/mL (women, follicular)', unit: 'pg/mL' },
  { id: 'dheas', name: 'DHEA-S', cat: 'hormones', short: 'The most abundant circulating hormone — a precursor to sex hormones and a proxy for biological aging.', why: 'DHEA-S declines steadily with age, peaking in the late 20s. Low levels correlate with fatigue, immune dysfunction, and accelerated aging. It serves as a precursor for both testosterone and estrogen.', std: '35–430 µg/dL (men)', opt: '200–350 µg/dL (men)', unit: 'µg/dL' },
  { id: 'cortisol', name: 'Cortisol (AM)', cat: 'hormones', short: 'The primary stress and wake hormone — measured at peak morning levels to evaluate adrenal function.', why: 'Morning cortisol reflects adrenal reserve and circadian integrity. Chronically elevated cortisol suppresses testosterone, promotes fat storage, impairs sleep, and accelerates immune aging.', std: '6–23 µg/dL (AM)', opt: '12–20 µg/dL (AM)', unit: 'µg/dL' },
  { id: 'igf1', name: 'IGF-1', cat: 'hormones', short: 'The primary mediator of growth hormone action — a key marker of metabolic vitality and biological aging.', why: 'IGF-1 declines with age and reflects growth hormone output. Optimal levels support muscle synthesis, bone density, cognitive function, and cellular repair.', std: '75–200 ng/mL (age-dependent)', opt: '150–250 ng/mL', unit: 'ng/mL' },
  { id: 'progesterone', name: 'Progesterone', cat: 'hormones', short: 'Balances estrogen, supports sleep and mood — among the most undertested hormonal markers.', why: 'In women, deficiency causes irregular cycles, poor sleep, anxiety, and estrogen dominance. In men, it has neuroprotective effects as a testosterone precursor.', std: 'Women (luteal): 5–20 ng/mL', opt: 'Women (luteal): 10–25 ng/mL', unit: 'ng/mL' },
  { id: 'fsh', name: 'FSH', cat: 'hormones', short: 'A pituitary hormone driving ovarian development in women and sperm production in men.', why: 'Elevated FSH in women signals diminished ovarian reserve or menopause. In men, elevated FSH with low testosterone points to primary hypogonadism. Low FSH in both sexes indicates pituitary dysfunction.', std: 'Women: 3–10 mIU/mL (follicular)', opt: 'Context-dependent', unit: 'mIU/mL' },
  { id: 'lh', name: 'LH', cat: 'hormones', short: 'The pituitary trigger for testosterone in men and ovulation in women.', why: 'LH and FSH together define whether a hormone problem originates in the gonads or the pituitary — a distinction that changes treatment entirely.', std: 'Women: 2–15 mIU/mL', opt: 'Requires clinical context', unit: 'mIU/mL' },
  { id: 'glucose', name: 'Fasting Glucose', cat: 'metabolic', short: 'The foundational metabolic marker — reflecting blood sugar management in a rested, fasted state.', why: 'The "normal" cutoff of 100 mg/dL still leaves room for significant metabolic dysfunction. Optimal is below 85 mg/dL, where long-term risk curves begin to flatten.', std: '70–99 mg/dL (normal)', opt: '72–85 mg/dL', unit: 'mg/dL' },
  { id: 'hba1c', name: 'HbA1c', cat: 'metabolic', short: 'A 90-day average of blood sugar control — far more informative than a single glucose measurement.', why: 'HbA1c catches chronic hyperglycemia missed by a single glucose reading. Levels above 5.6% indicate prediabetes risk even within the conventional "normal" range.', std: '< 5.7% (normal)', opt: '4.8–5.4%', unit: '%' },
  { id: 'insulin', name: 'Fasting Insulin', cat: 'metabolic', short: 'The most sensitive early-warning marker for insulin resistance — often elevated a decade before glucose becomes abnormal.', why: 'Insulin resistance drives type 2 diabetes, PCOS, weight gain, cardiovascular disease, and many cancers. Fasting glucose can remain normal while insulin is already chronically elevated.', std: '2–25 µIU/mL', opt: '2–6 µIU/mL', unit: 'µIU/mL' },
  { id: 'homaIR', name: 'HOMA-IR', cat: 'metabolic', short: 'A calculated index quantifying insulin resistance from fasting glucose and insulin.', why: 'HOMA-IR quantifies insulin resistance more meaningfully than either value alone. Above 2.0 suggests significant insulin resistance; above 2.9 is associated with metabolic syndrome.', std: '< 2.9', opt: '< 1.5', unit: 'index' },
  { id: 'uricAcid', name: 'Uric Acid', cat: 'metabolic', short: 'Best known as the gout marker — also a reliable indicator of insulin resistance and cardiovascular risk.', why: 'Hyperuricemia causes gout but also independently predicts metabolic syndrome, kidney disease, and cardiovascular events. Fructose and insulin resistance drive levels up even without dietary purine excess.', std: '2.5–7.5 mg/dL (men)', opt: '< 5.5 mg/dL', unit: 'mg/dL' },
  { id: 'tsh', name: 'TSH', cat: 'thyroid', short: 'The master pituitary signal telling the thyroid how hard to work — the primary screening test.', why: 'TSH is the most sensitive indicator of thyroid status. However, it alone misses conversion problems and autoimmune disease — the two most common thyroid issues in otherwise healthy adults.', std: '0.4–4.5 mIU/L', opt: '1.0–2.0 mIU/L', unit: 'mIU/L' },
  { id: 'freeT3', name: 'Free T3', cat: 'thyroid', short: 'The active, cellular form of thyroid hormone — what your tissues actually use for metabolism and energy.', why: 'T3 is four times more metabolically potent than T4. TSH and T4 can appear normal while T3 conversion is impaired — leaving patients with hypothyroid symptoms but "normal" labs. The most commonly missed thyroid problem.', std: '2.3–4.2 pg/mL', opt: '3.2–4.2 pg/mL', unit: 'pg/mL' },
  { id: 'freeT4', name: 'Free T4', cat: 'thyroid', short: 'The storage form of thyroid hormone — must be converted to active T3 for cellular use.', why: 'Normal T4 with low T3 suggests a conversion problem — often caused by chronic stress, nutrient deficiencies, or inflammation. A pattern invisible to standard thyroid screening.', std: '0.8–1.8 ng/dL', opt: '1.1–1.6 ng/dL', unit: 'ng/dL' },
  { id: 'reverseT3', name: 'Reverse T3', cat: 'thyroid', short: 'An inactive T3 metabolite that blocks active T3 receptors — elevated levels cause functional hypothyroidism.', why: 'Under chronic stress or caloric restriction, the body converts T4 to Reverse T3 instead of active T3, blocking T3 receptors. This causes hypothyroid symptoms with a normal TSH. Missed by every standard panel.', std: '9.2–24.1 ng/dL', opt: '< 15 ng/dL; Free T3:rT3 ratio > 20', unit: 'ng/dL' },
  { id: 'tpoAb', name: 'TPO Antibodies', cat: 'thyroid', short: 'Markers of autoimmune thyroid disease — elevated before TSH shows any abnormality, sometimes by years.', why: 'Anti-TPO antibodies diagnose Hashimoto thyroiditis — the most common autoimmune disease in the US. Identifying it early allows intervention before gland destruction progresses.', std: '< 35 IU/mL', opt: '< 10 IU/mL', unit: 'IU/mL' },
  { id: 'tgAb', name: 'Thyroglobulin Antibodies', cat: 'thyroid', short: 'A second autoimmune thyroid marker — together with TPO antibodies, confirms Hashimoto or Graves disease.', why: 'TgAb are present in 60–80% of Hashimoto patients. Testing both TPO and TgAb maximizes autoimmune thyroid detection.', std: '< 4 IU/mL', opt: '< 1 IU/mL', unit: 'IU/mL' },
  { id: 'vitD', name: 'Vitamin D (25-OH)', cat: 'thyroid', short: 'The hormone-like vitamin governing immune regulation, thyroid function, bone density, and hundreds of gene expressions.', why: 'Vitamin D deficiency impairs thyroid receptor sensitivity and worsens autoimmune thyroid disease. Over 40% of Americans are deficient. The standard "sufficient" cutoff of 30 ng/mL is too low for optimal function.', std: '30–100 ng/mL (sufficient)', opt: '60–80 ng/mL', unit: 'ng/mL' },
  { id: 'ferritin', name: 'Ferritin', cat: 'immune', short: 'The primary iron storage protein — important as both a nutrient marker and a chronic inflammation signal.', why: 'Low ferritin causes fatigue, hair loss, and poor cognitive function long before anemia develops. High ferritin signals iron overload or hidden chronic inflammation. Routinely missed at low-normal levels.', std: '12–300 ng/mL (men)', opt: '70–150 ng/mL (men); 50–100 ng/mL (women)', unit: 'ng/mL' },
  { id: 'il6', name: 'IL-6 (Interleukin-6)', cat: 'immune', short: 'A key inflammatory cytokine bridging acute immune response and chronic disease.', why: 'Chronically elevated IL-6 drives insulin resistance, muscle wasting, depression, and accelerated cognitive aging. A central biomarker in metabolic medicine and oncology.', std: '< 7 pg/mL', opt: '< 3 pg/mL', unit: 'pg/mL' },
  { id: 'hsCRP2', name: 'hs-CRP (Inflammation Panel)', cat: 'immune', short: 'Systemic inflammation marker — the most accessible, broadly predictive inflammation biomarker.', why: 'Elevated levels predict cardiovascular events, cancer progression, and metabolic dysfunction years before clinical diagnosis. Responsive to diet, sleep, exercise, and targeted supplementation.', std: '< 3 mg/L', opt: '< 1 mg/L', unit: 'mg/L' },
  { id: 'b12', name: 'Vitamin B12', cat: 'nutrients', short: 'Essential for nerve function, DNA synthesis, and red blood cell formation — deficiency causes irreversible neurological damage.', why: 'Common in vegans, metformin users, and those on acid suppressants. Serum B12 can appear adequate while functional deficiency exists — methylmalonic acid confirms.', std: '200–900 pg/mL', opt: '700–1000 pg/mL', unit: 'pg/mL' },
  { id: 'folate', name: 'Folate (B9)', cat: 'nutrients', short: 'Critical for DNA synthesis and methylation — deficiency elevates homocysteine and impairs cellular repair.', why: 'Folate drives methylation reactions throughout the body. MTHFR gene variants reduce folate conversion efficiency and require methylated supplementation.', std: '> 5.9 ng/mL', opt: '> 15 ng/mL', unit: 'ng/mL' },
  { id: 'magnesium', name: 'Magnesium (RBC)', cat: 'nutrients', short: 'A cofactor in 300+ enzymatic reactions — deficiency underlies muscle cramps, sleep disruption, anxiety, and arrhythmias.', why: 'Standard serum magnesium misses most deficiency — RBC magnesium is the functional measure. Deficiency impairs ATP production, insulin signaling, and vascular tone. Over 60% of Americans fall short.', std: 'Serum: 1.7–2.2 mg/dL', opt: 'RBC Mag: 5.5–7.0 mg/dL', unit: 'mg/dL' },
  { id: 'zinc', name: 'Zinc', cat: 'nutrients', short: 'Essential for immune function, testosterone synthesis, and wound healing — commonly depleted by stress.', why: 'Zinc deficiency suppresses immune function, reduces testosterone production, and impairs wound healing. A cofactor for 300+ enzymes. Stress, alcohol, and phytate-rich diets deplete it rapidly.', std: '60–130 µg/dL', opt: '90–115 µg/dL', unit: 'µg/dL' },
  { id: 'selenium', name: 'Selenium', cat: 'nutrients', short: 'A trace mineral supporting thyroid hormone conversion, antioxidant defense, and immune function.', why: 'Selenium is required for enzymes that convert T4 to active T3. Deficiency worsens Hashimoto thyroiditis and impairs fertility. Soil depletion has made deficiency more common than appreciated.', std: '70–150 ng/mL', opt: '110–130 ng/mL', unit: 'ng/mL' },
  { id: 'omega3', name: 'Omega-3 Index', cat: 'nutrients', short: 'The ratio of EPA+DHA in red blood cells — a 3-month window into cardiovascular inflammation and omega-3 status.', why: 'An Omega-3 Index below 4% doubles cardiac event risk. Achieving 8–12% through diet or supplementation reduces inflammation, triglycerides, and arrhythmia risk.', std: '> 4% (minimum)', opt: '8–12%', unit: '% of RBC fatty acids' },
  { id: 'coq10', name: 'CoQ10', cat: 'nutrients', short: 'The mitochondrial fuel catalyst — essential for ATP production and dramatically depleted by statin medications.', why: 'CoQ10 declines with age and is blocked by statin drugs. Low CoQ10 causes muscle weakness, fatigue, and cardiac dysfunction. A critical marker for anyone on statins.', std: '0.5–1.7 µg/mL', opt: '1.0–2.0 µg/mL', unit: 'µg/mL' },
  { id: 'cbc', name: 'CBC with Differential', cat: 'blood', short: 'The foundational hematology panel — red cells, white cells, and platelets across all major populations.', why: 'CBC with differential gives a complete picture of blood cell populations. Anemia patterns point to specific deficiencies. White cell differentials distinguish viral from bacterial infection.', std: 'Varies by component', opt: 'All components within reference ranges', unit: 'Multiple' },
  { id: 'afp', name: 'AFP', cat: 'cancer', short: 'A hepatocellular carcinoma and germ cell tumor marker — critical for liver cancer surveillance.', why: 'Elevated AFP in adults signals hepatocellular carcinoma (HCC) or testicular germ cell tumors. Particularly important for those with metabolic liver disease, hepatitis B/C, or cirrhosis.', std: '< 10 ng/mL', opt: '< 5 ng/mL', unit: 'ng/mL' },
  { id: 'kidney', name: 'Kidney Function Panel', cat: 'kidney', short: 'BUN, Creatinine, eGFR, and Cystatin C — core markers of glomerular filtration and renal function.', why: 'Chronic kidney disease often progresses silently. eGFR and Cystatin C are more sensitive than creatinine alone. Early detection through these markers allows intervention before progression.', std: 'eGFR > 90', opt: '> 90 mL/min', unit: 'mL/min' },
  { id: 'liver', name: 'Liver Function Panel', cat: 'liver', short: 'ALT, AST, ALP, Bilirubin, Albumin, and Total Protein — comprehensive hepatic assessment.', why: 'These markers reveal acute inflammation (elevated transaminases), cholestasis (bilirubin), synthetic dysfunction (albumin), and chronic disease patterns. Essential for anyone taking medications metabolized by the liver.', std: 'Varies by test', opt: 'All within reference', unit: 'Multiple' },
];

const categoryLabels: Record<string, string> = {
  cardiovascular: 'Cardiovascular',
  hormones: 'Hormones',
  metabolic: 'Metabolic',
  thyroid: 'Thyroid',
  immune: 'Immune & Inflammation',
  nutrients: 'Nutrients & Vitamins',
  kidney: 'Kidney',
  liver: 'Liver',
  blood: 'Blood & Hematology',
  cancer: 'Cancer Markers',
};

const categoryEmojis: Record<string, string> = {
  cardiovascular: '❤️',
  hormones: '⚡',
  metabolic: '🔥',
  thyroid: '🦋',
  immune: '🛡️',
  nutrients: '🌿',
  kidney: '💧',
  liver: '🫁',
  blood: '🩸',
  cancer: '🔬',
};

export default function WhatWeTest() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());

  // Count biomarkers by category
  const catCounts = biomarkersData.reduce((acc: Record<string, number>, b) => {
    acc[b.cat] = (acc[b.cat] || 0) + 1;
    return acc;
  }, {});

  // Filter biomarkers based on active category and search
  const filteredBiomarkers = useMemo(() => {
    let list = activeFilter === 'all'
      ? biomarkersData
      : biomarkersData.filter(b => b.cat === activeFilter);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.short.toLowerCase().includes(q) ||
        b.why.toLowerCase().includes(q)
      );
    }

    return list;
  }, [activeFilter, searchQuery]);

  const toggleCard = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const allCategories = ['all', ...Object.keys(categoryLabels)];

  return (
    <div className="bg-bg-dark">
      <Nav />

      {/* Hero Section */}
      <section style={{ paddingTop: '120px', paddingBottom: '64px', borderBottom: '1px solid var(--border)' }} className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] font-bold text-teal">The Full Panel</p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl text-white mt-6 mb-5" style={{ maxWidth: '640px' }}>
              What we test — <span style={{ fontStyle: 'normal', color: 'var(--teal-light)' }}>and why it matters.</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed" style={{ maxWidth: '580px', marginBottom: 0 }}>
              Standard physicals check 10–20 markers. Every Briella Health membership includes 100+ tests — organized by system, explained in plain language, with optimal ranges your doctor probably won't share.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white bg-opacity-5 border border-white border-opacity-[0.08] text-gray-300 text-sm font-medium">
                <strong className="text-white">100+</strong> biomarkers tested
              </div>
              <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white bg-opacity-5 border border-white border-opacity-[0.08] text-gray-300 text-sm font-medium">
                <strong className="text-white">11</strong> organ systems
              </div>
              <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white bg-opacity-5 border border-white border-opacity-[0.08] text-gray-300 text-sm font-medium">
                <strong className="text-white">$365</strong>/year · all-inclusive
              </div>
              <div className="inline-flex items-center gap-2 px-[18px] py-2 rounded-full bg-white bg-opacity-5 border border-white border-opacity-[0.08] text-gray-300 text-sm font-medium">
                Click any marker to learn more
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biomarkers Library Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1.5 mb-8 scrollbar-hide">
            {allCategories.map(cat => {
              const label = cat === 'all' ? 'All Tests' : categoryLabels[cat];
              const emoji = cat === 'all' ? '⬡' : categoryEmojis[cat];
              const count = cat === 'all' ? biomarkersData.length : (catCounts[cat] || 0);

              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveFilter(cat);
                    setSearchQuery('');
                  }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-sm font-semibold whitespace-nowrap border transition-all ${
                    activeFilter === cat
                      ? 'bg-teal-dim border-teal text-teal-light shadow-[0_0_0_1px_var(--teal)]'
                      : 'bg-bg-card border-border text-gray-400 hover:border-teal-border hover:text-teal-light hover:bg-teal-dim'
                  }`}
                >
                  <span className="text-[0.9rem]">{emoji}</span>
                  {label}
                  <span className={`text-[0.7rem] font-bold px-2 py-0.5 rounded-full min-w-[28px] text-center transition-all ${
                    activeFilter === cat
                      ? 'bg-teal bg-opacity-20 text-teal-light'
                      : 'bg-white bg-opacity-[0.06] text-gray-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative mb-3">
            <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search any biomarker, e.g. testosterone, vitamin D, ApoB…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-bg-card border border-border rounded-[10px] py-3 pl-12 pr-4 text-white font-body text-sm focus:outline-none focus:border-teal transition-colors placeholder-gray-600"
            />
          </div>

          {/* Count Label */}
          <p className="text-xs text-gray-600 mb-5">
            Showing {filteredBiomarkers.length} biomarker{filteredBiomarkers.length !== 1 ? 's' : ''}
          </p>

          {/* Biomarkers Grid */}
          {filteredBiomarkers.length > 0 ? (
            <div className="grid grid-cols-1 gap-3">
              {filteredBiomarkers.map(marker => (
                <div
                  key={marker.id}
                  onClick={() => toggleCard(marker.id)}
                  className={`bg-bg-card border rounded-[12px] p-5 sm:p-[22px] cursor-pointer transition-all ${
                    expandedCards.has(marker.id)
                      ? 'border-teal shadow-[0_0_0_1px_var(--teal),0_8px_32px_rgba(13,148,136,0.1)]'
                      : 'border-border hover:border-teal-border hover:shadow-[0_4px_20px_rgba(13,148,136,0.08)]'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2.5">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.1em] text-teal-light bg-teal-dim border border-teal-border rounded-full px-2.5 py-0.75 inline-block mb-2">
                        {categoryLabels[marker.cat]}
                      </span>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-600 transition-all ${expandedCards.has(marker.id) ? 'rotate-180 !text-teal' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1.5">{marker.name}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{marker.short}</p>

                  {/* Expanded Details */}
                  {expandedCards.has(marker.id) && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-gray-300 leading-relaxed mb-4">{marker.why}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <div className="bg-white bg-opacity-3 border border-border rounded-2xl p-3">
                          <label className="text-[0.6rem] font-bold uppercase tracking-[0.08em] text-gray-600 block mb-1">Standard Range</label>
                          <span className="text-xs text-gray-300">{marker.std}</span>
                        </div>
                        <div className="bg-white bg-opacity-3 border border-border rounded-2xl p-3">
                          <label className="text-[0.6rem] font-bold uppercase tracking-[0.08em] text-gray-600 block mb-1">Optimal Range</label>
                          <span className="text-xs text-teal-light font-bold">{marker.opt}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-600 text-sm">
              No biomarkers match your search.
            </div>
          )}

        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-bg-card border-t border-border px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.16em] font-bold text-teal mb-4">Every marker. Every year.</p>
          <h2 className="font-heading font-extrabold text-4xl text-white mb-3">100+ biomarkers. One membership.</h2>
          <p className="text-gray-400 text-base leading-relaxed mb-8" style={{ maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto' }}>
            $365/year — no add-ons, no à la carte pricing. All 50 states through Quest Diagnostics.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-3 bg-teal text-white font-heading font-bold rounded-lg hover:bg-teal-light transition-colors"
          >
            View Membership Plans
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

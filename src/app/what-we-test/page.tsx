'use client';

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useScrollReveal } from '@/hooks/useScrollReveal';

/* ─── Biomarker Data (100+ markers across 14 categories) ─── */
const biomarkersData = [
  // ── HEART & CARDIOVASCULAR (15) ──
  { id: 'totalChol', name: 'Total Cholesterol', cat: 'cardiovascular', short: 'The sum of all cholesterol fractions — provides context but must be interpreted with LDL, HDL, and triglycerides.', why: 'Total cholesterol alone is a poor predictor of risk. It gains meaning alongside particle counts and ratios. Very low levels can also signal nutritional or hormonal issues.', std: '< 200 mg/dL', opt: '150–200 mg/dL', unit: 'mg/dL' },
  { id: 'ldl', name: 'LDL Cholesterol', cat: 'cardiovascular', short: 'The primary lipid target in cardiovascular risk assessment.', why: 'LDL transports cholesterol to arterial walls. Persistently elevated LDL accelerates plaque formation. Context alongside ApoB and triglycerides matters significantly.', std: '< 100 mg/dL', opt: '< 70 mg/dL', unit: 'mg/dL' },
  { id: 'hdl', name: 'HDL Cholesterol', cat: 'cardiovascular', short: 'The "reverse transport" cholesterol — higher is generally protective.', why: 'HDL mediates reverse cholesterol transport, removing lipids from vessel walls. Low HDL is an independent cardiovascular risk factor.', std: '> 40 mg/dL', opt: '> 60 mg/dL', unit: 'mg/dL' },
  { id: 'trig', name: 'Triglycerides', cat: 'cardiovascular', short: 'Blood fats influenced by carbohydrate intake — elevated levels signal insulin resistance.', why: 'Triglycerides are a sensitive marker of metabolic dysfunction. The triglyceride-to-HDL ratio is a practical insulin resistance proxy.', std: '< 150 mg/dL', opt: '< 80 mg/dL', unit: 'mg/dL' },
  { id: 'vldl', name: 'VLDL Cholesterol', cat: 'cardiovascular', short: 'Very low-density lipoprotein — a triglyceride-rich particle contributing to plaque formation.', why: 'VLDL carries triglycerides from the liver. Elevated VLDL reflects metabolic dysfunction and contributes independently to cardiovascular risk.', std: '5–40 mg/dL', opt: '< 20 mg/dL', unit: 'mg/dL' },
  { id: 'nonHDL', name: 'Non-HDL Cholesterol', cat: 'cardiovascular', short: 'All atherogenic cholesterol combined — a better risk predictor than LDL alone.', why: 'Non-HDL captures LDL, VLDL, IDL, and Lp(a) in a single number. Many guidelines now consider it a superior target to LDL cholesterol.', std: '< 130 mg/dL', opt: '< 100 mg/dL', unit: 'mg/dL' },
  { id: 'apoB', name: 'ApoB (Apolipoprotein B)', cat: 'cardiovascular', short: 'The most accurate count of atherogenic particles — a better predictor of cardiac risk than LDL cholesterol alone.', why: 'Unlike LDL-C, which measures cholesterol mass, ApoB directly counts every particle capable of depositing plaque. High ApoB predicts cardiovascular events even when standard LDL appears normal.', std: 'Rarely included', opt: '< 80 mg/dL', unit: 'mg/dL' },
  { id: 'lpA', name: 'Lp(a) — Lipoprotein(a)', cat: 'cardiovascular', short: 'A genetically inherited cardiovascular risk factor that standard lipid panels miss entirely.', why: 'Lp(a) is an independent risk factor for heart attack, stroke, and aortic valve disease — largely determined by genetics. About 20% of the population has elevated levels and has no idea.', std: 'Not included', opt: '< 30 mg/dL', unit: 'mg/dL' },
  { id: 'ldlParticle', name: 'LDL Particle Number', cat: 'cardiovascular', short: 'The total count of LDL particles — a more granular cardiovascular risk marker than LDL cholesterol mass.', why: 'Two people with identical LDL-C can have vastly different particle counts. Higher particle numbers mean more opportunities for arterial wall penetration and plaque formation.', std: '< 1300 nmol/L', opt: '< 1000 nmol/L', unit: 'nmol/L' },
  { id: 'ldlSmall', name: 'LDL Small Dense', cat: 'cardiovascular', short: 'The most atherogenic LDL subtype — small particles penetrate arterial walls more easily.', why: 'Small dense LDL particles are more oxidizable and more likely to become trapped in the arterial wall. A pattern driven by insulin resistance and high triglycerides.', std: 'Varies', opt: 'Pattern A (large buoyant)', unit: 'nmol/L' },
  { id: 'hsCRP', name: 'hs-CRP', cat: 'cardiovascular', short: 'A sensitive marker of systemic inflammation that predicts cardiovascular risk independent of cholesterol.', why: 'Chronic low-grade inflammation accelerates atherosclerosis. Levels above 3 mg/L double cardiovascular risk regardless of lipid status.', std: '< 3.0 mg/L', opt: '< 1.0 mg/L', unit: 'mg/L' },
  { id: 'homocysteine', name: 'Homocysteine', cat: 'cardiovascular', short: 'An amino acid that damages artery walls when elevated — and is highly correctable with B vitamins.', why: 'Elevated homocysteine is an independent risk factor for heart disease, stroke, and cognitive decline. It responds well to B12, folate, and B6 supplementation.', std: 'Not included', opt: '< 8 µmol/L', unit: 'µmol/L' },
  { id: 'fibrinogen', name: 'Fibrinogen', cat: 'cardiovascular', short: 'A clotting protein and inflammation marker — elevated levels increase thrombosis and cardiovascular risk.', why: 'Chronically elevated fibrinogen thickens blood, promotes clot formation, and predicts cardiovascular events.', std: '200–400 mg/dL', opt: '200–300 mg/dL', unit: 'mg/dL' },
  { id: 'omega3Total', name: 'Omega-3 (Total)', cat: 'cardiovascular', short: 'Combined EPA and DHA — the anti-inflammatory fatty acids that protect the cardiovascular system.', why: 'Low omega-3 levels double cardiac event risk. EPA and DHA reduce triglycerides, platelet aggregation, and vascular inflammation.', std: '> 4%', opt: '8–12%', unit: '%' },
  { id: 'omega6Total', name: 'Omega-6 (Total)', cat: 'cardiovascular', short: 'Pro-inflammatory fatty acids — the ratio to omega-3 matters more than the absolute value.', why: 'Western diets are heavily skewed toward omega-6. A high omega-6:omega-3 ratio promotes chronic inflammation and cardiovascular risk.', std: 'Varies', opt: 'Ratio < 4:1 to omega-3', unit: '%' },

  // ── HORMONES (12) ──
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
  { id: 'amh', name: 'Anti-Müllerian Hormone (AMH)', cat: 'hormones', short: 'The most reliable marker of ovarian reserve in women — important for fertility planning at any age.', why: 'AMH reflects the remaining egg supply and declines years before other hormones change. Critical for women considering fertility preservation or family planning timelines.', std: '1.0–10.0 ng/mL', opt: 'Age-dependent', unit: 'ng/mL' },
  { id: 'prolactin', name: 'Prolactin', cat: 'hormones', short: 'A pituitary hormone that can suppress testosterone and disrupt menstrual cycles when elevated.', why: 'Elevated prolactin causes low libido, erectile dysfunction, and amenorrhea. May signal pituitary adenoma, medication side effects, or chronic stress.', std: '2–18 ng/mL (men)', opt: '< 15 ng/mL', unit: 'ng/mL' },

  // ── METABOLIC (6) ──
  { id: 'glucose', name: 'Fasting Glucose', cat: 'metabolic', short: 'The foundational metabolic marker — reflecting blood sugar management in a rested, fasted state.', why: 'The "normal" cutoff of 100 mg/dL still leaves room for significant metabolic dysfunction. Optimal is below 85 mg/dL.', std: '70–99 mg/dL', opt: '72–85 mg/dL', unit: 'mg/dL' },
  { id: 'hba1c', name: 'HbA1c', cat: 'metabolic', short: 'A 90-day average of blood sugar control — far more informative than a single glucose reading.', why: 'HbA1c catches chronic hyperglycemia that a single glucose reading can miss. Levels above 5.6% indicate prediabetes risk.', std: '< 5.7%', opt: '4.8–5.4%', unit: '%' },
  { id: 'insulin', name: 'Fasting Insulin', cat: 'metabolic', short: 'The most sensitive early-warning marker for insulin resistance — elevated a decade before glucose goes abnormal.', why: 'Insulin resistance drives type 2 diabetes, PCOS, weight gain, and cardiovascular disease. Fasting glucose can remain normal while insulin is already elevated.', std: '2–25 µIU/mL', opt: '2–6 µIU/mL', unit: 'µIU/mL' },
  { id: 'homaIR', name: 'HOMA-IR (Calculated)', cat: 'metabolic', short: 'A calculated index quantifying insulin resistance from fasting glucose and insulin.', why: 'Above 2.0 suggests significant insulin resistance; above 2.9 is associated with metabolic syndrome.', std: '< 2.9', opt: '< 1.5', unit: 'index' },
  { id: 'uricAcid', name: 'Uric Acid', cat: 'metabolic', short: 'Best known for gout — also a reliable indicator of insulin resistance and cardiovascular risk.', why: 'Hyperuricemia independently predicts metabolic syndrome, kidney disease, and cardiovascular events.', std: '2.5–7.5 mg/dL', opt: '< 5.5 mg/dL', unit: 'mg/dL' },
  { id: 'cPeptide', name: 'C-Peptide', cat: 'metabolic', short: 'A direct measure of pancreatic insulin production — more stable than insulin itself.', why: 'C-Peptide distinguishes type 1 from type 2 diabetes and confirms whether the pancreas is still producing insulin. More reliable than insulin measurement alone.', std: '0.8–3.1 ng/mL', opt: '1.0–2.5 ng/mL', unit: 'ng/mL' },

  // ── THYROID (8) ──
  { id: 'tsh', name: 'TSH', cat: 'thyroid', short: 'The master pituitary signal telling the thyroid how hard to work.', why: 'TSH alone misses conversion problems and autoimmune disease — the two most common thyroid issues.', std: '0.4–4.5 mIU/L', opt: '1.0–2.0 mIU/L', unit: 'mIU/L' },
  { id: 'freeT3', name: 'Free T3', cat: 'thyroid', short: 'The active, cellular form of thyroid hormone — what your tissues actually use.', why: 'T3 is four times more metabolically potent than T4. TSH and T4 can appear normal while T3 conversion is impaired.', std: '2.3–4.2 pg/mL', opt: '3.2–4.2 pg/mL', unit: 'pg/mL' },
  { id: 'totalT3', name: 'Total T3', cat: 'thyroid', short: 'Combined bound and free T3 — provides additional context when free T3 is borderline.', why: 'Total T3 helps confirm hyperthyroid states and adds context to free T3 when binding protein levels are unusual.', std: '80–200 ng/dL', opt: '100–180 ng/dL', unit: 'ng/dL' },
  { id: 'freeT4', name: 'Free T4', cat: 'thyroid', short: 'The storage form of thyroid hormone — must be converted to active T3.', why: 'Normal T4 with low T3 suggests a conversion problem — often caused by stress, nutrient deficiencies, or inflammation.', std: '0.8–1.8 ng/dL', opt: '1.1–1.6 ng/dL', unit: 'ng/dL' },
  { id: 'totalT4', name: 'Total T4', cat: 'thyroid', short: 'Combined bound and free T4 — useful for confirming thyroid hormone production levels.', why: 'Total T4 adds context alongside free T4. Discrepancies between total and free levels may indicate binding protein abnormalities.', std: '4.5–12.0 µg/dL', opt: '6.0–10.0 µg/dL', unit: 'µg/dL' },
  { id: 'reverseT3', name: 'Reverse T3', cat: 'thyroid', short: 'An inactive metabolite that blocks active T3 receptors — elevated levels cause functional hypothyroidism.', why: 'Under chronic stress, the body converts T4 to Reverse T3 instead of active T3. Missed by every standard panel.', std: '9.2–24.1 ng/dL', opt: '< 15 ng/dL', unit: 'ng/dL' },
  { id: 'tpoAb', name: 'TPO Antibodies', cat: 'thyroid', short: 'Markers of autoimmune thyroid disease — elevated before TSH shows any abnormality.', why: 'Anti-TPO antibodies diagnose Hashimoto thyroiditis — the most common autoimmune disease in the US.', std: '< 35 IU/mL', opt: '< 10 IU/mL', unit: 'IU/mL' },
  { id: 'tgAb', name: 'Thyroglobulin Antibodies', cat: 'thyroid', short: 'A second autoimmune thyroid marker — with TPO, confirms Hashimoto or Graves disease.', why: 'TgAb are present in 60–80% of Hashimoto patients. Testing both maximizes autoimmune thyroid detection.', std: '< 4 IU/mL', opt: '< 1 IU/mL', unit: 'IU/mL' },

  // ── LIVER (8) ──
  { id: 'alt', name: 'ALT (Alanine Aminotransferase)', cat: 'liver', short: 'The most liver-specific enzyme — elevated levels signal hepatocellular injury or fatty liver disease.', why: 'ALT is the first enzyme to rise in fatty liver (NAFLD/NASH), drug-induced liver injury, and viral hepatitis. Even mild elevations within the "normal" range predict long-term liver disease risk.', std: '7–56 U/L', opt: '< 25 U/L', unit: 'U/L' },
  { id: 'ast', name: 'AST (Aspartate Aminotransferase)', cat: 'liver', short: 'A liver and muscle enzyme — the AST:ALT ratio helps distinguish liver disease patterns.', why: 'AST:ALT ratio above 2:1 suggests alcoholic liver disease. AST is also elevated in muscle damage, hemolysis, and cardiac injury.', std: '10–40 U/L', opt: '< 25 U/L', unit: 'U/L' },
  { id: 'alp', name: 'ALP (Alkaline Phosphatase)', cat: 'liver', short: 'A marker of bile duct function and bone metabolism — elevated in cholestasis and bone disorders.', why: 'Isolated ALP elevation can signal bile duct obstruction, primary biliary cholangitis, or bone disorders like Paget disease. Context with GGT distinguishes liver from bone sources.', std: '44–147 U/L', opt: '50–100 U/L', unit: 'U/L' },
  { id: 'ggt', name: 'GGT (Gamma-Glutamyl Transferase)', cat: 'liver', short: 'A sensitive liver enzyme and early marker of metabolic liver stress and bile duct dysfunction.', why: 'GGT rises before other liver enzymes in fatty liver disease and correlates with cardiovascular risk and insulin resistance independently.', std: '8–61 U/L', opt: '< 30 U/L', unit: 'U/L' },
  { id: 'bilirubinTotal', name: 'Bilirubin (Total)', cat: 'liver', short: 'A breakdown product of red blood cells processed by the liver — elevated in liver disease or hemolysis.', why: 'Mildly elevated bilirubin (Gilbert syndrome) is actually protective as an antioxidant. High levels indicate liver dysfunction, bile duct obstruction, or excessive red blood cell breakdown.', std: '0.1–1.2 mg/dL', opt: '0.3–1.0 mg/dL', unit: 'mg/dL' },
  { id: 'bilirubinDirect', name: 'Bilirubin (Direct)', cat: 'liver', short: 'The conjugated form processed by the liver — elevated specifically in bile duct obstruction.', why: 'Direct bilirubin elevation points to obstructive causes (gallstones, tumors) while indirect elevation suggests hemolysis or Gilbert syndrome.', std: '0.0–0.3 mg/dL', opt: '< 0.2 mg/dL', unit: 'mg/dL' },
  { id: 'albumin', name: 'Albumin', cat: 'liver', short: 'The most abundant blood protein — reflects liver synthetic function, nutrition, and inflammation.', why: 'Low albumin signals chronic liver disease, malnutrition, or chronic inflammation. It also affects drug binding and fluid balance.', std: '3.5–5.5 g/dL', opt: '4.2–5.0 g/dL', unit: 'g/dL' },
  { id: 'totalProtein', name: 'Total Protein', cat: 'liver', short: 'Combined albumin and globulin — reflects liver function, immune activity, and nutritional status.', why: 'High total protein can indicate chronic infection or autoimmune disease. Low levels suggest liver dysfunction or protein loss.', std: '6.0–8.3 g/dL', opt: '6.5–7.5 g/dL', unit: 'g/dL' },

  // ── KIDNEY (5) ──
  { id: 'bun', name: 'BUN (Blood Urea Nitrogen)', cat: 'kidney', short: 'A waste product from protein metabolism filtered by the kidneys — elevated in kidney dysfunction.', why: 'BUN rises with kidney disease, dehydration, and high-protein diets. The BUN:creatinine ratio helps differentiate pre-renal from intrinsic kidney disease.', std: '6–20 mg/dL', opt: '10–16 mg/dL', unit: 'mg/dL' },
  { id: 'creatinine', name: 'Creatinine', cat: 'kidney', short: 'A muscle metabolism waste product filtered by the kidneys — the standard renal function marker.', why: 'Creatinine is influenced by muscle mass and diet, making it less reliable in muscular or elderly patients. Best interpreted with eGFR and Cystatin C.', std: '0.7–1.3 mg/dL', opt: '0.8–1.1 mg/dL', unit: 'mg/dL' },
  { id: 'egfr', name: 'eGFR (Estimated GFR)', cat: 'kidney', short: 'The estimated glomerular filtration rate — the gold standard for assessing overall kidney function.', why: 'eGFR below 60 indicates chronic kidney disease. Early decline is often silent with no symptoms until significant function is lost.', std: '> 60 mL/min', opt: '> 90 mL/min', unit: 'mL/min' },
  { id: 'cystatinC', name: 'Cystatin C', cat: 'kidney', short: 'A superior kidney function marker — unaffected by muscle mass, age, or sex unlike creatinine.', why: 'Cystatin C catches early kidney decline missed by creatinine-based eGFR. Particularly valuable in muscular patients, the elderly, and vegetarians where creatinine is unreliable.', std: '0.6–1.0 mg/L', opt: '< 0.8 mg/L', unit: 'mg/L' },
  { id: 'bunCreatRatio', name: 'BUN/Creatinine Ratio', cat: 'kidney', short: 'Helps distinguish dehydration and pre-renal azotemia from intrinsic kidney disease.', why: 'A ratio above 20:1 suggests dehydration or upper GI bleeding. A normal ratio with elevated BUN and creatinine indicates true kidney dysfunction.', std: '10–20:1', opt: '12–16:1', unit: 'ratio' },

  // ── IMMUNE & INFLAMMATION (6) ──
  { id: 'ferritin', name: 'Ferritin', cat: 'immune', short: 'The primary iron storage protein — important as both a nutrient marker and inflammation signal.', why: 'Low ferritin causes fatigue, hair loss, and cognitive dysfunction long before anemia develops. Routinely missed at low-normal levels.', std: '12–300 ng/mL', opt: '70–150 ng/mL', unit: 'ng/mL' },
  { id: 'iron', name: 'Serum Iron', cat: 'immune', short: 'Circulating iron available for immediate use — fluctuates throughout the day and with meals.', why: 'Serum iron alone is unreliable — it must be interpreted alongside ferritin, TIBC, and transferrin saturation for a complete picture.', std: '60–170 µg/dL', opt: '80–120 µg/dL', unit: 'µg/dL' },
  { id: 'tibc', name: 'TIBC (Total Iron-Binding Capacity)', cat: 'immune', short: 'Measures the blood\'s capacity to bind iron — inversely related to iron stores.', why: 'High TIBC with low ferritin confirms iron deficiency. Low TIBC may indicate chronic disease, inflammation, or iron overload.', std: '250–370 µg/dL', opt: '275–350 µg/dL', unit: 'µg/dL' },
  { id: 'transferrinSat', name: 'Transferrin Saturation', cat: 'immune', short: 'The percentage of transferrin carrying iron — the most actionable iron metabolism marker.', why: 'Below 20% indicates iron deficiency. Above 45% suggests iron overload or hemochromatosis — a common, treatable genetic condition.', std: '20–50%', opt: '25–35%', unit: '%' },
  { id: 'esr', name: 'ESR (Sed Rate)', cat: 'immune', short: 'Erythrocyte sedimentation rate — a nonspecific but sensitive indicator of systemic inflammation.', why: 'ESR rises in infection, autoimmune disease, and malignancy. Combined with hs-CRP, it helps characterize acute versus chronic inflammatory states.', std: '0–20 mm/hr', opt: '< 10 mm/hr', unit: 'mm/hr' },
  { id: 'il6', name: 'IL-6 (Interleukin-6)', cat: 'immune', short: 'A key inflammatory cytokine bridging acute immune response and chronic disease.', why: 'Chronically elevated IL-6 drives insulin resistance, muscle wasting, depression, and accelerated aging.', std: '< 7 pg/mL', opt: '< 3 pg/mL', unit: 'pg/mL' },

  // ── NUTRIENTS & VITAMINS (12) ──
  { id: 'vitD', name: 'Vitamin D (25-OH)', cat: 'nutrients', short: 'The hormone-like vitamin governing immune regulation, thyroid function, and bone density.', why: 'Over 40% of Americans are deficient. The standard "sufficient" cutoff of 30 ng/mL is too low for optimal function.', std: '30–100 ng/mL', opt: '60–80 ng/mL', unit: 'ng/mL' },
  { id: 'b12', name: 'Vitamin B12', cat: 'nutrients', short: 'Essential for nerve function, DNA synthesis, and red blood cell formation.', why: 'Common deficiency in vegans, metformin users, and those on acid suppressants. Serum B12 can appear adequate while functional deficiency exists.', std: '200–900 pg/mL', opt: '700–1000 pg/mL', unit: 'pg/mL' },
  { id: 'mma', name: 'Methylmalonic Acid (MMA)', cat: 'nutrients', short: 'The functional confirmatory test for B12 deficiency — catches deficiency that serum B12 misses.', why: 'MMA rises when B12 is functionally insufficient, even if serum B12 appears normal. The definitive test for true cellular B12 status.', std: '< 378 nmol/L', opt: '< 270 nmol/L', unit: 'nmol/L' },
  { id: 'folate', name: 'Folate (B9)', cat: 'nutrients', short: 'Critical for DNA synthesis and methylation — deficiency elevates homocysteine.', why: 'Folate drives methylation reactions throughout the body. MTHFR gene variants reduce folate conversion efficiency.', std: '> 5.9 ng/mL', opt: '> 15 ng/mL', unit: 'ng/mL' },
  { id: 'magnesium', name: 'Magnesium (RBC)', cat: 'nutrients', short: 'A cofactor in 300+ enzymatic reactions — deficiency underlies cramps, sleep disruption, and anxiety.', why: 'Standard serum magnesium misses most deficiency — RBC magnesium is the functional measure. Over 60% of Americans fall short.', std: '1.7–2.2 mg/dL', opt: 'RBC: 5.5–7.0 mg/dL', unit: 'mg/dL' },
  { id: 'zinc', name: 'Zinc', cat: 'nutrients', short: 'Essential for immune function, testosterone synthesis, and wound healing.', why: 'Zinc deficiency suppresses immune function and reduces testosterone production. A cofactor for 300+ enzymes.', std: '60–130 µg/dL', opt: '90–115 µg/dL', unit: 'µg/dL' },
  { id: 'copper', name: 'Copper', cat: 'nutrients', short: 'Essential for iron metabolism, connective tissue, and neurotransmitter synthesis — toxic in excess.', why: 'Copper must be balanced with zinc. Excess copper is linked to anxiety, insomnia, and oxidative stress. Deficiency causes anemia and neurological symptoms.', std: '70–175 µg/dL', opt: '90–130 µg/dL', unit: 'µg/dL' },
  { id: 'selenium', name: 'Selenium', cat: 'nutrients', short: 'A trace mineral supporting thyroid hormone conversion and antioxidant defense.', why: 'Selenium is required for enzymes that convert T4 to active T3. Deficiency worsens Hashimoto thyroiditis.', std: '70–150 ng/mL', opt: '110–130 ng/mL', unit: 'ng/mL' },
  { id: 'vitA', name: 'Vitamin A (Retinol)', cat: 'nutrients', short: 'Essential for vision, immune function, and skin health — both deficiency and excess are harmful.', why: 'Vitamin A deficiency impairs immune function and night vision. Excess is hepatotoxic. Testing ensures supplementation is appropriately dosed.', std: '38–98 µg/dL', opt: '50–80 µg/dL', unit: 'µg/dL' },
  { id: 'vitE', name: 'Vitamin E (Alpha-Tocopherol)', cat: 'nutrients', short: 'The primary fat-soluble antioxidant protecting cell membranes from oxidative damage.', why: 'Deficiency is rare but occurs with fat malabsorption. Vitamin E protects LDL from oxidation — a key step in atherosclerosis.', std: '5.5–17.0 mg/L', opt: '8.0–14.0 mg/L', unit: 'mg/L' },
  { id: 'coq10', name: 'CoQ10', cat: 'nutrients', short: 'The mitochondrial fuel catalyst — essential for ATP production, depleted by statin medications.', why: 'CoQ10 declines with age and is blocked by statin drugs. A critical marker for anyone on statins.', std: '0.5–1.7 µg/mL', opt: '1.0–2.0 µg/mL', unit: 'µg/mL' },
  { id: 'mthfr', name: 'MTHFR Gene (DNA)', cat: 'nutrients', short: 'A genetic test for methylation efficiency — affects folate metabolism and homocysteine clearance.', why: 'MTHFR variants (C677T, A1298C) reduce the body\'s ability to convert folic acid to active methylfolate. Affects up to 40% of the population and guides supplementation choices.', std: 'Genotype result', opt: 'No variant / heterozygous', unit: 'DNA' },

  // ── BLOOD & HEMATOLOGY (16) ──
  { id: 'wbc', name: 'WBC (White Blood Cell Count)', cat: 'blood', short: 'Total white blood cell count — your immune system\'s overall activity level.', why: 'Elevated WBC signals infection, inflammation, or stress response. Persistently low counts may indicate immune suppression or bone marrow disorders.', std: '4.5–11.0 K/µL', opt: '5.0–8.0 K/µL', unit: 'K/µL' },
  { id: 'rbc', name: 'RBC (Red Blood Cell Count)', cat: 'blood', short: 'The total number of red blood cells — foundational oxygen-carrying capacity.', why: 'Low RBC causes fatigue, weakness, and cognitive dysfunction (anemia). High RBC (polycythemia) increases clotting risk.', std: '4.5–5.9 M/µL (men)', opt: '4.8–5.5 M/µL', unit: 'M/µL' },
  { id: 'hemoglobin', name: 'Hemoglobin', cat: 'blood', short: 'The oxygen-carrying protein in red blood cells — the most widely tested blood marker.', why: 'Hemoglobin less than 13.5 g/dL (men) or 12.0 g/dL (women) impairs oxygen delivery to tissues.', std: '13.5–17.5 g/dL (men)', opt: '14.0–17.0 g/dL', unit: 'g/dL' },
  { id: 'hematocrit', name: 'Hematocrit', cat: 'blood', short: 'The percentage of blood that is red blood cells — another measure of oxygen-carrying capacity.', why: 'Low hematocrit indicates anemia. High hematocrit (dehydration, polycythemia) increases blood viscosity and clotting risk.', std: '41–53% (men)', opt: '44–50%', unit: '%' },
  { id: 'mcv', name: 'MCV (Mean Corpuscular Volume)', cat: 'blood', short: 'The average size of red blood cells — helps classify types of anemia.', why: 'Low MCV indicates iron deficiency. High MCV suggests B12 or folate deficiency or alcohol use.', std: '80–100 fL', opt: '85–95 fL', unit: 'fL' },
  { id: 'mch', name: 'MCH (Mean Corpuscular Hemoglobin)', cat: 'blood', short: 'The average amount of hemoglobin per red blood cell.', why: 'Abnormal MCH parallels MCV changes and helps identify anemia subtypes.', std: '27–33 pg', opt: '28–32 pg', unit: 'pg' },
  { id: 'mchc', name: 'MCHC (Mean Corpuscular Hemoglobin Concentration)', cat: 'blood', short: 'The average concentration of hemoglobin within red blood cells.', why: 'MCHC is the most stable RBC index but rarely reveals new pathology on its own.', std: '32–36 g/dL', opt: '33–35 g/dL', unit: 'g/dL' },
  { id: 'platelets', name: 'Platelets', cat: 'blood', short: 'The clotting cells in blood — too few risks bleeding, too many risks clotting.', why: 'Platelet counts below 150 K/µL increase bleeding risk. Above 400 K/µL increases thrombosis risk and suggests inflammation or bone marrow disorders.', std: '150–400 K/µL', opt: '200–350 K/µL', unit: 'K/µL' },
  { id: 'rdw', name: 'RDW (Red Cell Distribution Width)', cat: 'blood', short: 'The variability in red blood cell size — higher values suggest anemia or inflammation.', why: 'Elevated RDW is a subtle early marker of nutritional deficiency, inflammation, or bone marrow stress.', std: '11–15%', opt: '11–13%', unit: '%' },
  { id: 'neutrophils', name: 'Neutrophils (Absolute)', cat: 'blood', short: 'The most abundant white blood cells — the infection-fighting front line.', why: 'Elevated neutrophils signal acute infection or inflammation. Persistently low counts indicate bone marrow suppression or immune disorder.', std: '2.0–7.5 K/µL', opt: '3.0–6.0 K/µL', unit: 'K/µL' },
  { id: 'lymphocytes', name: 'Lymphocytes (Absolute)', cat: 'blood', short: 'The adaptive immune cells — T cells, B cells, and NK cells combined.', why: 'Elevated lymphocytes suggest viral infection or immune activation. Low counts (below 1.0) indicate immune suppression.', std: '1.0–4.8 K/µL', opt: '1.5–3.5 K/µL', unit: 'K/µL' },
  { id: 'monocytes', name: 'Monocytes (Absolute)', cat: 'blood', short: 'The tissue-infiltrating immune cells that become macrophages.', why: 'Elevated monocytes indicate chronic infection or inflammation. High monocyte percentages predict cardiovascular risk.', std: '0.2–0.9 K/µL', opt: '0.3–0.6 K/µL', unit: 'K/µL' },
  { id: 'eosinophils', name: 'Eosinophils (Absolute)', cat: 'blood', short: 'The parasite-fighting and allergy-response cells.', why: 'Elevated eosinophils indicate parasitic infection, allergy, or eosinophilic disorders.', std: '0.0–0.4 K/µL', opt: '0.0–0.2 K/µL', unit: 'K/µL' },
  { id: 'basophils', name: 'Basophils (Absolute)', cat: 'blood', short: 'The mast cell counterparts in blood — involved in allergic and immune responses.', why: 'Elevated basophils are rare but can indicate allergic response or bone marrow disorder.', std: '0.0–0.1 K/µL', opt: '0.0–0.05 K/µL', unit: 'K/µL' },

  // ── ELECTROLYTES (6) ──
  { id: 'sodium', name: 'Sodium (Na)', cat: 'electrolytes', short: 'The primary extracellular electrolyte governing fluid balance and blood pressure.', why: 'Sodium dysregulation causes muscle weakness, confusion, seizures, and death. Both extremes are dangerous.', std: '136–145 mEq/L', opt: '138–142 mEq/L', unit: 'mEq/L' },
  { id: 'potassium', name: 'Potassium (K)', cat: 'electrolytes', short: 'The primary intracellular electrolyte critical for muscle and heart function.', why: 'Low potassium causes muscle weakness, palpitations, and arrhythmias. High potassium is immediately life-threatening.', std: '3.5–5.0 mEq/L', opt: '4.0–4.5 mEq/L', unit: 'mEq/L' },
  { id: 'chloride', name: 'Chloride (Cl)', cat: 'electrolytes', short: 'An anion maintaining electrical neutrality and fluid balance.', why: 'Chloride follows sodium and reflects similar pathology. Abnormalities suggest acid-base disorders or dehydration.', std: '98–107 mEq/L', opt: '100–105 mEq/L', unit: 'mEq/L' },
  { id: 'bicarb', name: 'Bicarbonate (HCO3)', cat: 'electrolytes', short: 'The buffer system\'s primary component — maintains blood pH.', why: 'Low bicarbonate indicates metabolic acidosis. High levels suggest metabolic alkalosis or chronic respiratory disease.', std: '23–29 mEq/L', opt: '24–27 mEq/L', unit: 'mEq/L' },
  { id: 'calcium', name: 'Calcium (Total)', cat: 'electrolytes', short: 'The structural and signaling mineral — critical for bones, muscle, and nerve function.', why: 'Must be interpreted with albumin (calcium binds to protein) and vitamin D. Low calcium causes tetany and seizures.', std: '8.5–10.5 mg/dL', opt: '9.0–10.0 mg/dL', unit: 'mg/dL' },
  { id: 'ionizedCa', name: 'Calcium (Ionized)', cat: 'electrolytes', short: 'The biologically active form of calcium unbound to protein — the true functional measure.', why: 'Ionized calcium is unaffected by albumin and better reflects true calcium status, especially in critical illness or liver disease.', std: '4.5–5.3 mg/dL', opt: '4.7–5.1 mg/dL', unit: 'mg/dL' },

  // ── AUTOIMMUNE (3) ──
  { id: 'ana', name: 'ANA (Antinuclear Antibody)', cat: 'autoimmune', short: 'The screening test for systemic autoimmune disease — positive in lupus, Sjögren\'s, and scleroderma.', why: 'ANA-negative effectively rules out lupus. ANA-positive requires reflex testing to specific autoantibodies for diagnosis.', std: 'Negative', opt: 'Negative', unit: 'titer' },
  { id: 'rf', name: 'Rheumatoid Factor (RF)', cat: 'autoimmune', short: 'An autoantibody against the Fc region of IgG — present in rheumatoid arthritis and other autoimmune conditions.', why: 'RF is positive in RA but also common in other autoimmune diseases and chronic infections. Non-specific without clinical context.', std: '< 14 IU/mL', opt: 'Negative', unit: 'IU/mL' },
  { id: 'ccp', name: 'Anti-CCP (Cyclic Citrullinated Peptide)', cat: 'autoimmune', short: 'A highly specific marker for rheumatoid arthritis — more predictive than RF alone.', why: 'Anti-CCP predicts RA development and progression. Can be positive years before RA symptoms appear.', std: '< 20 units/mL', opt: 'Negative', unit: 'units/mL' },

  // ── HEAVY METALS (2) ──
  { id: 'mercury', name: 'Mercury (Serum)', cat: 'metals', short: 'A neurotoxic heavy metal from contaminated fish, dental amalgam, and environmental exposure.', why: 'Chronic low-level mercury exposure affects cognition and motor function. Hair mercury is often superior to serum for assessing body burden.', std: '< 10 ng/mL', opt: '< 5 ng/mL', unit: 'ng/mL' },
  { id: 'lead', name: 'Lead (Blood)', cat: 'metals', short: 'A cumulative neurotoxin affecting cognition, blood pressure, and bone health — no truly safe level.', why: 'Lead exposure in childhood predicts lower IQ and adult cardiovascular disease. Chronic low-level exposure is common from old housing, contaminated water, and occupational sources.', std: '< 10 µg/dL', opt: '< 2 µg/dL', unit: 'µg/dL' },

  // ── CANCER MARKERS (2) ──
  { id: 'psa', name: 'PSA (Prostate-Specific Antigen)', cat: 'cancer', short: 'A prostate enzyme elevated in cancer, benign hyperplasia, and prostatitis.', why: 'PSA alone cannot distinguish cancer from benign disease. Context with DRE, age, family history, and PSA velocity is essential.', std: '< 4.0 ng/mL', opt: '< 2.5 ng/mL', unit: 'ng/mL' },
  { id: 'cea', name: 'CEA (Carcinoembryonic Antigen)', cat: 'cancer', short: 'A tumor marker for colorectal, lung, and breast cancers — rarely negative in healthy individuals.', why: 'Elevated CEA warrants further investigation. Smoking raises baseline CEA.', std: '< 3.0 ng/mL', opt: '< 2.5 ng/mL', unit: 'ng/mL' },

  // ── PANCREAS (2) ──
  { id: 'amylase', name: 'Amylase', cat: 'pancreas', short: 'An enzyme produced by the pancreas and salivary glands — elevated in acute pancreatitis.', why: 'Amylase rises rapidly in acute pancreatitis but returns to normal quickly. Lipase is more specific and stays elevated longer.', std: '30–110 U/L', opt: '30–80 U/L', unit: 'U/L' },
  { id: 'lipase', name: 'Lipase', cat: 'pancreas', short: 'The pancreatic fat-digesting enzyme — more specific than amylase for pancreatitis.', why: 'Lipase is the gold-standard test for acute and chronic pancreatitis. Stays elevated longer than amylase.', std: '< 160 U/L', opt: '< 90 U/L', unit: 'U/L' },
];

const categories = [
  { id: 'cardiovascular', name: 'Heart & Cardiovascular', emoji: '❤️', count: 15 },
  { id: 'hormones', name: 'Hormones', emoji: '⚖️', count: 12 },
  { id: 'metabolic', name: 'Metabolic', emoji: '⚡', count: 6 },
  { id: 'thyroid', name: 'Thyroid', emoji: '🦋', count: 8 },
  { id: 'liver', name: 'Liver', emoji: '🧪', count: 8 },
  { id: 'kidney', name: 'Kidney', emoji: '💧', count: 5 },
  { id: 'immune', name: 'Immune & Inflammation', emoji: '🛡️', count: 6 },
  { id: 'nutrients', name: 'Nutrients & Vitamins', emoji: '🌿', count: 12 },
  { id: 'blood', name: 'Blood & Hematology', emoji: '🩸', count: 16 },
  { id: 'electrolytes', name: 'Electrolytes', emoji: '⚛️', count: 6 },
  { id: 'autoimmune', name: 'Autoimmune', emoji: '🔬', count: 3 },
  { id: 'metals', name: 'Heavy Metals', emoji: '☠️', count: 2 },
  { id: 'cancer', name: 'Cancer Markers', emoji: '🎯', count: 2 },
  { id: 'pancreas', name: 'Pancreas', emoji: '🔥', count: 2 },
];

export default function WhatWeTestPage() {
  const [activeCategory, setActiveCategory] = useState('cardiovascular');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMarkers = useMemo(() => {
    let filtered = biomarkersData;
    if (activeCategory) {
      filtered = filtered.filter(m => m.cat === activeCategory);
    }
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(m =>
        m.name.toLowerCase().includes(query) || m.short.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  return (
    <>
      <Nav />
      <main className="bg-bg-dark">
        {/* ═══ HERO SECTION ═══ */}
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 px-6 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">
              Complete Panel
            </p>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              100+ biomarkers.
              <br />
              One complete picture.
            </h1>
            <p className="text-white text-lg max-w-2xl mx-auto leading-relaxed">
              Functional optimal ranges beyond population averages. Every biomarker tested has a reason — science-backed, clinically actionable.
            </p>
          </div>
        </section>

        {/* ═══ CATEGORY GRID ═══ */}
        <section className="px-6 md:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-8">
              By Category
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setSearchQuery('');
                  }}
                  className={`p-6 rounded-xl border transition-all ${
                    activeCategory === cat.id
                      ? 'bg-teal border-teal text-pure-white'
                      : 'bg-bg-card border-border hover:border-teal-border hover:bg-bg-card-hover'
                  }`}
                >
                  <div className="text-3xl mb-2">{cat.emoji}</div>
                  <p className={`font-heading font-bold text-sm leading-tight ${activeCategory === cat.id ? 'text-pure-white' : 'text-white'}`}>
                    {cat.name}
                  </p>
                  <p className={`text-xs mt-2 ${activeCategory === cat.id ? 'text-pure-white opacity-90' : 'text-gray-400'}`}>
                    {cat.count} markers
                  </p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ THE BRIELLA DIFFERENCE: RANGE VISUALIZATION ═══ */}
        <section className="px-6 md:px-8 py-16 bg-bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <p className="text-teal uppercase tracking-[0.16em] text-xs font-bold mb-4">
                Why It Matters
              </p>
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-6">
                The Briella Difference: Ranges That Matter
              </h2>
              <p className="text-white text-lg max-w-3xl">
                Standard reference ranges are based on 95% of the population. But "normal" is not the same as "optimal" — and that gap is where most dysfunction hides.
              </p>
            </div>

            <div className="space-y-8">
              {/* Patient A */}
              <div>
                <p className="text-white font-bold mb-3">Patient A — LDL Cholesterol</p>
                <div className="relative h-16 bg-bg-mid rounded-xl overflow-hidden border border-border-strong">
                  <div className="absolute inset-0 flex items-center">
                    <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-gold-dim via-transparent to-transparent opacity-30" />
                  </div>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 bg-gold rounded-full mr-2 inline-block" />
                    <span className="text-white font-bold text-sm">35 mg/dL</span>
                  </div>
                  <div className="absolute right-4 top-0 bottom-0 flex items-center text-xs text-gray-500">
                    Standard range: &lt; 100
                  </div>
                </div>
              </div>

              {/* Patient B */}
              <div>
                <p className="text-white font-bold mb-3">Patient B — LDL Cholesterol</p>
                <div className="relative h-16 bg-bg-mid rounded-xl overflow-hidden border border-border-strong">
                  <div className="absolute inset-0 flex items-center">
                    <div className="absolute left-0 right-0 h-full bg-gradient-to-r from-teal-dim via-transparent to-transparent opacity-30" />
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                    <div className="w-3 h-3 bg-teal rounded-full mr-2 inline-block" />
                    <span className="text-white font-bold text-sm">72 mg/dL</span>
                  </div>
                  <div className="absolute right-4 top-0 bottom-0 flex items-center text-xs text-gray-500">
                    Functional optimal: &lt; 70
                  </div>
                </div>
              </div>
            </div>

            <p className="text-white mt-8 text-sm leading-relaxed">
              Both are "normal." Patient A is unnecessarily low. Patient B is borderline high from a functional perspective. The Briella panel catches these nuances.
            </p>
          </div>
        </section>

        {/* ═══ SEARCH & FILTER ═══ */}
        <section className="sticky top-20 z-30 bg-bg-dark border-b border-border px-6 md:px-8 py-4 shadow-md">
          <div className="max-w-6xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="Search biomarkers by name or function..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-bg-card border border-border text-white placeholder-gray-400 focus:outline-none focus:border-teal"
            />
            {(activeCategory || searchQuery) && (
              <div className="flex flex-wrap gap-2 items-center">
                {activeCategory && (
                  <button
                    onClick={() => setActiveCategory('')}
                    className="px-3 py-1 rounded-lg bg-teal text-pure-white text-sm font-medium hover:bg-teal-light transition"
                  >
                    {categories.find(c => c.id === activeCategory)?.name}
                    <span className="ml-2">×</span>
                  </button>
                )}
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="px-3 py-1 rounded-lg bg-gold text-white text-sm font-medium hover:bg-gold opacity-80 hover:opacity-100 transition"
                  >
                    {searchQuery}
                    <span className="ml-2">×</span>
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        {/* ═══ BIOMARKER TABLE ═══ */}
        <section className="px-6 md:px-8 py-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-white text-sm font-bold mb-4">
              {filteredMarkers.length} result{filteredMarkers.length !== 1 ? 's' : ''}
            </p>

            <div className="space-y-4">
              {filteredMarkers.map((marker) => (
                <div
                  key={marker.id}
                  className="bg-bg-card border border-border rounded-xl p-6 hover:border-teal-border hover:bg-bg-card-hover transition"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-white mb-1">
                        {marker.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-3">{marker.short}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{marker.why}</p>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <p className="text-teal text-xs font-bold uppercase tracking-[0.08em] mb-1">
                          Standard Range
                        </p>
                        <p className="text-white font-mono text-sm">{marker.std}</p>
                      </div>
                      <div>
                        <p className="text-teal text-xs font-bold uppercase tracking-[0.08em] mb-1">
                          Functional Optimal
                        </p>
                        <p className="text-white font-mono text-sm font-bold">{marker.opt}</p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-gray-500 text-xs">Unit: {marker.unit}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredMarkers.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-400 text-lg">No biomarkers found.</p>
                <button
                  onClick={() => {
                    setActiveCategory('cardiovascular');
                    setSearchQuery('');
                  }}
                  className="text-teal hover:text-teal-light mt-4 text-sm font-medium"
                >
                  Reset filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ═══ BOTTOM CTA ═══ */}
        <section className="dark-section px-6 md:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-white mb-4">
              Ready to test smarter?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join members who've moved beyond guessing. Get your biomarker snapshot and the science behind every number.
            </p>
            <Link
              href="/signup"
              className="inline-block px-8 py-4 bg-teal text-pure-white font-bold rounded-xl hover:bg-teal-light transition"
            >
              Start Your Panel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

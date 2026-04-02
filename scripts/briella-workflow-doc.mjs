#!/usr/bin/env node
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, ExternalHyperlink } = require("docx");
const fs = require("fs");

// ── Design tokens ──
const NAVY = "0B1623";
const TEAL = "0D9488";
const TEAL_LIGHT = "E6F7F5";
const GOLD = "F59E0B";
const GOLD_LIGHT = "FEF3C7";
const GRAY = "F3F4F6";
const BORDER_COLOR = "D1D5DB";
const WHITE = "FFFFFF";

const border = { style: BorderStyle.SINGLE, size: 1, color: BORDER_COLOR };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0 };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

// Full content width for US Letter with 1" margins
const CONTENT_WIDTH = 9360;

function headerCell(text, width, color = NAVY) {
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: { fill: color, type: ShadingType.CLEAR },
    margins: cellMargins,
    verticalAlign: "center",
    children: [new Paragraph({ alignment: AlignmentType.LEFT, children: [
      new TextRun({ text, bold: true, color: WHITE, font: "Arial", size: 20 })
    ]})]
  });
}

function cell(text, width, options = {}) {
  const { bold, color, fill, align } = options;
  return new TableCell({
    borders,
    width: { size: width, type: WidthType.DXA },
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: cellMargins,
    children: [new Paragraph({ alignment: align || AlignmentType.LEFT, children: [
      new TextRun({ text, bold: !!bold, color: color || "333333", font: "Arial", size: 20 })
    ]})]
  });
}

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ heading: level, spacing: { before: 300, after: 150 }, children: [
    new TextRun({ text, bold: true, font: "Arial", size: level === HeadingLevel.HEADING_1 ? 32 : level === HeadingLevel.HEADING_2 ? 28 : 24, color: NAVY })
  ]});
}

function body(text, options = {}) {
  return new Paragraph({ spacing: { after: 150 }, children: [
    new TextRun({ text, font: "Arial", size: 20, ...options })
  ]});
}

function bodyMulti(runs) {
  return new Paragraph({ spacing: { after: 150 }, children: runs.map(r =>
    new TextRun({ font: "Arial", size: 20, color: "333333", ...r })
  )});
}

function spacer() {
  return new Paragraph({ spacing: { after: 100 }, children: [] });
}

// ── Build document ──
const doc = new Document({
  styles: {
    default: { document: { run: { font: "Arial", size: 20 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 300, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: NAVY },
        paragraph: { spacing: { before: 240, after: 150 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: TEAL },
        paragraph: { spacing: { before: 200, after: 120 }, outlineLevel: 2 } },
    ]
  },
  numbering: {
    config: [
      { reference: "bullets", levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "numbers", levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
      { reference: "letters", levels: [{ level: 0, format: LevelFormat.LOWER_LETTER, text: "%1)", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    headers: {
      default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [
        new TextRun({ text: "BRIELLA HEALTH", bold: true, color: TEAL, font: "Arial", size: 16 }),
        new TextRun({ text: "  |  Confidential", color: "999999", font: "Arial", size: 16 })
      ]})] })
    },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: "Page ", color: "999999", font: "Arial", size: 16 }),
        new TextRun({ children: [PageNumber.CURRENT], color: "999999", font: "Arial", size: 16 })
      ]})] })
    },
    children: [

      // ── TITLE PAGE ──
      spacer(), spacer(), spacer(), spacer(),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "BRIELLA HEALTH", bold: true, font: "Arial", size: 48, color: NAVY })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [
        new TextRun({ text: "Lab Ordering & Interpretation Workflow", font: "Arial", size: 28, color: TEAL })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [
        new TextRun({ text: "Platform Architecture, Cost Structure & Partner Integration", font: "Arial", size: 22, color: "666666" })
      ]}),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
        new TextRun({ text: "April 2026  |  Confidential", font: "Arial", size: 20, color: "999999" })
      ]}),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 1: EXECUTIVE SUMMARY ──
      heading("1. Executive Summary"),
      body("This document maps the end-to-end workflow for Briella Health\u2019s biomarker testing service, incorporating three key platform partners: Junction (lab ordering and routing), OptimalDX (functional blood chemistry interpretation), and a provider network (physician ordering authority). The system is designed to serve two distinct ordering paths while keeping the patient experience simple and unified."),
      spacer(),

      // ── SECTION 2: PARTNER OVERVIEW ──
      heading("2. Platform Partners"),

      heading("2a. Junction \u2014 Lab Ordering & Routing Infrastructure", HeadingLevel.HEADING_2),
      body("Junction is a healthcare API platform that enables white-labeled lab test ordering, kit logistics, and results delivery via a single integration. Raised $18M Series A (March 2025), serving 140+ healthcare organizations including Found, Parsley Health, and Evidation."),
      spacer(),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2800, 6560],
        rows: [
          new TableRow({ children: [headerCell("Capability", 2800, TEAL), headerCell("Details", 6560, TEAL)] }),
          new TableRow({ children: [cell("Lab Network", 2800, { bold: true }), cell("Quest, LabCorp, BioReference, plus specialty labs \u2014 10+ networks total", 6560)] }),
          new TableRow({ children: [cell("Coverage", 2800, { bold: true }), cell("All 50 states for in-person (PSC); 49 states for home kits (excludes NY)", 6560)] }),
          new TableRow({ children: [cell("Fulfillment", 2800, { bold: true }), cell("In-person PSC visits (Quest/LabCorp/BioReference), at-home phlebotomy, and home test kits", 6560)] }),
          new TableRow({ children: [cell("Routing Logic", 2800, { bold: true }), cell("API auto-selects optimal lab based on patient ZIP, test availability, cost, and compliance", 6560)] }),
          new TableRow({ children: [cell("Results Format", 2800, { bold: true }), cell("Standardized JSON via API + original lab PDF; same schema across all lab networks", 6560)] }),
          new TableRow({ children: [cell("Pricing Model", 2800, { bold: true }), cell("Volume-based, no test upcharges. Custom pricing per discovery call.", 6560)] }),
          new TableRow({ children: [cell("Integration", 2800, { bold: true }), cell("REST API with dashboard; webhooks for order status and results delivery", 6560)] }),
        ]
      }),
      spacer(),

      heading("2b. OptimalDX \u2014 Functional Blood Chemistry Interpretation", HeadingLevel.HEADING_2),
      body("OptimalDX is a software platform for evidence-based biomarker interpretation using functional (optimal) reference ranges rather than conventional pathological ranges. It generates automated Functional Health Reports from standard blood chemistry data."),
      spacer(),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2800, 6560],
        rows: [
          new TableRow({ children: [headerCell("Capability", 2800, TEAL), headerCell("Details", 6560, TEAL)] }),
          new TableRow({ children: [cell("Interpretation", 2800, { bold: true }), cell("100+ biomarkers analyzed against functional (optimal) ranges, not just pathological thresholds", 6560)] }),
          new TableRow({ children: [cell("Reports", 2800, { bold: true }), cell("16 automated Functional Health Reports with scoring, probability weighting, and graphical output", 6560)] }),
          new TableRow({ children: [cell("Data Import", 2800, { bold: true }), cell("Lab PDF parser, direct lab integrations (HL7), or manual entry", 6560)] }),
          new TableRow({ children: [cell("Tracking", 2800, { bold: true }), cell("Longitudinal patient tracking across multiple test dates", 6560)] }),
          new TableRow({ children: [cell("Pricing", 2800, { bold: true }), cell("$20/mo base membership (pay-per-credit) or $197/mo unlimited blood tests", 6560)] }),
          new TableRow({ children: [cell("Integration", 2800, { bold: true }), cell("Partners: Fullscript, DUTCH, Great Plains, Genova. Supports HL7 data import.", 6560)] }),
        ]
      }),
      spacer(),

      heading("2c. Provider Network \u2014 Physician Ordering Authority", HeadingLevel.HEADING_2),
      body("For the direct-to-consumer (DTC) path where patients order without an existing provider, Briella Health requires a licensed physician to authorize lab orders and review results. Options include SteadyMD (used by Quest for DTC oversight), a dedicated Briella provider network, or the Aurora model."),
      spacer(),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2800, 6560],
        rows: [
          new TableRow({ children: [headerCell("Function", 2800, TEAL), headerCell("Details", 6560, TEAL)] }),
          new TableRow({ children: [cell("Lab Ordering", 2800, { bold: true }), cell("Licensed physician reviews and authorizes requisitions in all 50 states", 6560)] }),
          new TableRow({ children: [cell("Results Review", 2800, { bold: true }), cell("Clinician reviews results, flags critical values, triggers patient alerts", 6560)] }),
          new TableRow({ children: [cell("Compliance", 2800, { bold: true }), cell("State-level telehealth and DTC lab ordering compliance (varies by state)", 6560)] }),
          new TableRow({ children: [cell("Model", 2800, { bold: true }), cell("Per-encounter or monthly retainer; async review for routine panels, sync for abnormals", 6560)] }),
          new TableRow({ children: [cell("Est. Cost", 2800, { bold: true }), cell("$3\u20135 per async order review; $15\u201325 per sync consultation (volume-dependent)", 6560)] }),
        ]
      }),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 3: DUAL-PATH WORKFLOW ──
      heading("3. Dual-Path Ordering Workflow"),
      body("The system supports two entry points that converge on the same backend infrastructure. This keeps the patient experience consistent regardless of how they enter."),
      spacer(),

      // Workflow diagram as table
      heading("3a. Visual Workflow", HeadingLevel.HEADING_2),
      spacer(),

      // PATH HEADERS
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [4680, 4680],
        rows: [
          new TableRow({ children: [
            new TableCell({ borders: noBorders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: TEAL, type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 200, right: 200 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
                new TextRun({ text: "PATH A: Patient Self-Order", bold: true, color: WHITE, font: "Arial", size: 22 })
              ]})]
            }),
            new TableCell({ borders: noBorders, width: { size: 4680, type: WidthType.DXA }, shading: { fill: NAVY, type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 200, right: 200 },
              children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
                new TextRun({ text: "PATH B: Clinic / Med Spa Order", bold: true, color: WHITE, font: "Arial", size: 22 })
              ]})]
            }),
          ]}),
        ]
      }),
      spacer(),

      // STEP-BY-STEP FLOW
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [800, 3880, 800, 3880],
        rows: [
          new TableRow({ children: [
            headerCell("Step", 800, TEAL), headerCell("Patient Self-Order", 3880, TEAL),
            headerCell("Step", 800, NAVY), headerCell("Clinic / Med Spa Order", 3880, NAVY),
          ]}),
          new TableRow({ children: [
            cell("1", 800, { bold: true, align: AlignmentType.CENTER }), cell("Patient visits briellahealth.com, selects panel, pays $365/yr membership", 3880),
            cell("1", 800, { bold: true, align: AlignmentType.CENTER }), cell("Provider/clinic enrolls patient in Briella platform via provider portal", 3880),
          ]}),
          new TableRow({ children: [
            cell("2", 800, { bold: true, align: AlignmentType.CENTER }), cell("Briella routes order to Aurora/SteadyMD provider network for physician authorization", 3880),
            cell("2", 800, { bold: true, align: AlignmentType.CENTER }), cell("Clinic\u2019s own provider (or Briella\u2019s supervising physician) signs the requisition", 3880),
          ]}),
          new TableRow({ children: [
            cell("3", 800, { bold: true, align: AlignmentType.CENTER }), cell("Approved order sent to Junction API", 3880),
            cell("3", 800, { bold: true, align: AlignmentType.CENTER }), cell("Approved order sent to Junction API", 3880),
          ]}),
          new TableRow({ children: [
            cell("4", 800, { bold: true, align: AlignmentType.CENTER, fill: TEAL_LIGHT }), cell("Junction routes to optimal lab: Quest PSC, LabCorp PSC, or home kit", 3880, { fill: TEAL_LIGHT }),
            cell("4", 800, { bold: true, align: AlignmentType.CENTER, fill: TEAL_LIGHT }), cell("Junction routes to optimal lab: Quest PSC, LabCorp PSC, or home kit", 3880, { fill: TEAL_LIGHT }),
          ]}),
          new TableRow({ children: [
            cell("5", 800, { bold: true, align: AlignmentType.CENTER }), cell("Patient completes draw (PSC walk-in or home kit)", 3880),
            cell("5", 800, { bold: true, align: AlignmentType.CENTER }), cell("Patient completes draw (PSC walk-in or home kit)", 3880),
          ]}),
          new TableRow({ children: [
            cell("6", 800, { bold: true, align: AlignmentType.CENTER, fill: GOLD_LIGHT }), cell("Results returned via Junction API (JSON + lab PDF)", 3880, { fill: GOLD_LIGHT }),
            cell("6", 800, { bold: true, align: AlignmentType.CENTER, fill: GOLD_LIGHT }), cell("Results returned via Junction API (JSON + lab PDF)", 3880, { fill: GOLD_LIGHT }),
          ]}),
          new TableRow({ children: [
            cell("7", 800, { bold: true, align: AlignmentType.CENTER }), cell("Results fed into OptimalDX for functional interpretation + report generation", 3880),
            cell("7", 800, { bold: true, align: AlignmentType.CENTER }), cell("Results fed into OptimalDX for functional interpretation + report generation", 3880),
          ]}),
          new TableRow({ children: [
            cell("8", 800, { bold: true, align: AlignmentType.CENTER }), cell("Briella UI presents: conventional ranges + OptimalDX functional insights + trends", 3880),
            cell("8", 800, { bold: true, align: AlignmentType.CENTER }), cell("Briella UI presents results to patient AND sends provider-facing summary to clinic", 3880),
          ]}),
          new TableRow({ children: [
            cell("9", 800, { bold: true, align: AlignmentType.CENTER }), cell("Provider network reviews critical flags; patient notified of any abnormals", 3880),
            cell("9", 800, { bold: true, align: AlignmentType.CENTER }), cell("Clinic provider reviews and follows up with patient per existing relationship", 3880),
          ]}),
        ]
      }),
      spacer(),
      bodyMulti([
        { text: "Key insight: ", bold: true },
        { text: "Steps 3\u20137 are identical regardless of entry path. Junction + OptimalDX form a shared backend. The only difference is who authorizes the order (Step 2) and who reviews the results (Step 9)." },
      ]),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 4: LAB FULFILLMENT OPTIONS ──
      heading("4. Lab Fulfillment Options via Junction"),
      body("Junction\u2019s routing engine selects the optimal fulfillment path based on the patient\u2019s ZIP code, test panel requirements, and cost. Briella patients see a simple choice; Junction handles the complexity."),
      spacer(),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [1800, 2520, 2520, 2520],
        rows: [
          new TableRow({ children: [
            headerCell("", 1800), headerCell("Quest PSC", 2520), headerCell("LabCorp PSC", 2520), headerCell("Home Kit / Phlebotomy", 2520),
          ]}),
          new TableRow({ children: [
            cell("Coverage", 1800, { bold: true }), cell("2,200+ locations, all 50 states", 2520), cell("2,000+ locations, all 50 states", 2520), cell("49 states (excl. NY), at-home phlebotomy or self-collect kit", 2520),
          ]}),
          new TableRow({ children: [
            cell("Patient Experience", 1800, { bold: true }), cell("Walk in with requisition, no appointment needed", 2520), cell("Walk in or schedule appointment", 2520), cell("Kit shipped to home, collect sample, prepaid return", 2520),
          ]}),
          new TableRow({ children: [
            cell("Turnaround", 1800, { bold: true }), cell("1\u20133 business days", 2520), cell("1\u20133 business days", 2520), cell("5\u20137 business days (includes shipping)", 2520),
          ]}),
          new TableRow({ children: [
            cell("Panel Depth", 1800, { bold: true }), cell("Full 100+ biomarker panel supported", 2520), cell("Full 100+ biomarker panel supported (equivalent CPT codes)", 2520), cell("Limited by collection method; some markers require venipuncture", 2520),
          ]}),
          new TableRow({ children: [
            cell("Est. Lab Cost", 1800, { bold: true }), cell("$80\u2013120 wholesale", 2520), cell("$85\u2013130 wholesale", 2520), cell("$120\u2013180 (includes kit + shipping + processing)", 2520),
          ]}),
          new TableRow({ children: [
            cell("Best For", 1800, { bold: true }), cell("Urban/suburban patients, full panel, fastest results", 2520), cell("Equivalent alternative, some regions have better LabCorp coverage", 2520), cell("Rural patients, mobility limitations, convenience preference", 2520),
          ]}),
        ]
      }),

      spacer(),
      bodyMulti([
        { text: "Panel equivalence: ", bold: true },
        { text: "The Briella 100+ biomarker panel maps to standard CPT codes available at both Quest and LabCorp. Junction\u2019s API ensures order parity across networks, so results are directly comparable regardless of which lab processes them." },
      ]),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 5: COST STRUCTURE ──
      heading("5. Cost Structure \u2014 Per Patient, Per Panel"),
      body("Below is the estimated cost breakdown for a single 100+ biomarker panel order through each path. All figures are estimates based on published pricing and typical volume-negotiated rates. Actual costs will depend on Junction\u2019s contracted rates, OptimalDX tier, and provider network agreement."),
      spacer(),

      heading("5a. Path A: Patient Self-Order (DTC)", HeadingLevel.HEADING_2),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [3200, 1800, 1800, 2560],
        rows: [
          new TableRow({ children: [
            headerCell("Cost Component", 3200), headerCell("PSC (Quest)", 1800), headerCell("Home Kit", 1800), headerCell("Who Gets Paid", 2560),
          ]}),
          new TableRow({ children: [
            cell("Lab Processing (via Junction)", 3200, { bold: true }), cell("$80\u2013120", 1800, { align: AlignmentType.CENTER }), cell("$120\u2013180", 1800, { align: AlignmentType.CENTER }), cell("Quest/LabCorp/BioRef", 2560),
          ]}),
          new TableRow({ children: [
            cell("Junction Platform Fee", 3200, { bold: true }), cell("$5\u201315", 1800, { align: AlignmentType.CENTER }), cell("$10\u201320", 1800, { align: AlignmentType.CENTER }), cell("Junction", 2560),
          ]}),
          new TableRow({ children: [
            cell("Provider Network (order auth + review)", 3200, { bold: true }), cell("$3\u20138", 1800, { align: AlignmentType.CENTER }), cell("$3\u20138", 1800, { align: AlignmentType.CENTER }), cell("Aurora / SteadyMD", 2560),
          ]}),
          new TableRow({ children: [
            cell("OptimalDX Interpretation", 3200, { bold: true }), cell("$2\u20135", 1800, { align: AlignmentType.CENTER }), cell("$2\u20135", 1800, { align: AlignmentType.CENTER }), cell("OptimalDX", 2560),
          ]}),
          new TableRow({ children: [
            cell("Briella Platform + UI + Support", 3200, { bold: true }), cell("Included", 1800, { align: AlignmentType.CENTER }), cell("Included", 1800, { align: AlignmentType.CENTER }), cell("Briella Health", 2560),
          ]}),
          new TableRow({ children: [
            cell("TOTAL COST PER PANEL", 3200, { bold: true, color: NAVY }),
            cell("$90\u2013148", 1800, { bold: true, align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
            cell("$135\u2013213", 1800, { bold: true, align: AlignmentType.CENTER, fill: GOLD_LIGHT }),
            cell("", 2560),
          ]}),
          new TableRow({ children: [
            cell("PATIENT PAYS", 3200, { bold: true, color: TEAL }),
            cell("$365/yr", 1800, { bold: true, align: AlignmentType.CENTER, color: TEAL }),
            cell("$365/yr + kit surcharge", 1800, { bold: true, align: AlignmentType.CENTER, color: TEAL }),
            cell("Briella Health", 2560),
          ]}),
          new TableRow({ children: [
            cell("BRIELLA GROSS MARGIN (2x/yr)", 3200, { bold: true, color: NAVY }),
            cell("$69\u2013185", 1800, { bold: true, align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
            cell("Varies", 1800, { bold: true, align: AlignmentType.CENTER }),
            cell("", 2560),
          ]}),
        ]
      }),
      spacer(),
      bodyMulti([
        { text: "Margin note: ", bold: true },
        { text: "At $365/yr with 2 panels included, Briella\u2019s cost basis is $180\u2013296 (PSC path) or $270\u2013426 (home kit path) per patient per year. The PSC path is profitable at volume; the home kit may require a surcharge or be offered as a premium add-on." },
      ]),
      spacer(),

      heading("5b. Path B: Clinic / Med Spa Order", HeadingLevel.HEADING_2),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [3200, 1800, 1800, 2560],
        rows: [
          new TableRow({ children: [
            headerCell("Cost Component", 3200), headerCell("PSC (Quest)", 1800), headerCell("Home Kit", 1800), headerCell("Who Gets Paid", 2560),
          ]}),
          new TableRow({ children: [
            cell("Lab Processing (via Junction)", 3200, { bold: true }), cell("$80\u2013120", 1800, { align: AlignmentType.CENTER }), cell("$120\u2013180", 1800, { align: AlignmentType.CENTER }), cell("Quest/LabCorp/BioRef", 2560),
          ]}),
          new TableRow({ children: [
            cell("Junction Platform Fee", 3200, { bold: true }), cell("$5\u201315", 1800, { align: AlignmentType.CENTER }), cell("$10\u201320", 1800, { align: AlignmentType.CENTER }), cell("Junction", 2560),
          ]}),
          new TableRow({ children: [
            cell("Provider Network", 3200, { bold: true }), cell("$0 (clinic\u2019s own provider)", 1800, { align: AlignmentType.CENTER }), cell("$0 (clinic\u2019s own provider)", 1800, { align: AlignmentType.CENTER }), cell("N/A \u2014 clinic provides", 2560),
          ]}),
          new TableRow({ children: [
            cell("OptimalDX Interpretation", 3200, { bold: true }), cell("$2\u20135", 1800, { align: AlignmentType.CENTER }), cell("$2\u20135", 1800, { align: AlignmentType.CENTER }), cell("OptimalDX", 2560),
          ]}),
          new TableRow({ children: [
            cell("Briella Platform + UI + Support", 3200, { bold: true }), cell("Included", 1800, { align: AlignmentType.CENTER }), cell("Included", 1800, { align: AlignmentType.CENTER }), cell("Briella Health", 2560),
          ]}),
          new TableRow({ children: [
            cell("TOTAL COST PER PANEL", 3200, { bold: true, color: NAVY }),
            cell("$87\u2013140", 1800, { bold: true, align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
            cell("$132\u2013205", 1800, { bold: true, align: AlignmentType.CENTER, fill: GOLD_LIGHT }),
            cell("", 2560),
          ]}),
          new TableRow({ children: [
            cell("CLINIC PAYS BRIELLA", 3200, { bold: true, color: TEAL }),
            cell("$150\u2013200/panel", 1800, { bold: true, align: AlignmentType.CENTER, color: TEAL }),
            cell("$200\u2013280/panel", 1800, { bold: true, align: AlignmentType.CENTER, color: TEAL }),
            cell("Briella Health", 2560),
          ]}),
          new TableRow({ children: [
            cell("CLINIC CHARGES PATIENT", 3200, { bold: true }),
            cell("$300\u2013500+", 1800, { bold: true, align: AlignmentType.CENTER }),
            cell("$400\u2013600+", 1800, { bold: true, align: AlignmentType.CENTER }),
            cell("Clinic retains markup", 2560),
          ]}),
        ]
      }),
      spacer(),
      bodyMulti([
        { text: "Clinic advantage: ", bold: true },
        { text: "No provider network cost (clinic uses their own ordering physician). The clinic buys wholesale from Briella and marks up to their patient. Briella earns $10\u201360 margin per panel; the clinic earns $100\u2013300+." },
      ]),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 6: MONEY FLOW ──
      heading("6. Money Flow Summary"),
      body("For every panel ordered through Briella, here is where the dollars flow:"),
      spacer(),

      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2200, 1600, 1600, 1600, 2360],
        rows: [
          new TableRow({ children: [
            headerCell("Entity", 2200), headerCell("DTC (PSC)", 1600), headerCell("DTC (Home)", 1600), headerCell("Clinic (PSC)", 1600), headerCell("What They Do", 2360),
          ]}),
          new TableRow({ children: [
            cell("Lab (Quest/LabCorp)", 2200, { bold: true }), cell("$80\u2013120", 1600, { align: AlignmentType.CENTER }), cell("$120\u2013180", 1600, { align: AlignmentType.CENTER }), cell("$80\u2013120", 1600, { align: AlignmentType.CENTER }), cell("Process blood samples, run assays, generate raw results", 2360),
          ]}),
          new TableRow({ children: [
            cell("Junction", 2200, { bold: true }), cell("$5\u201315", 1600, { align: AlignmentType.CENTER }), cell("$10\u201320", 1600, { align: AlignmentType.CENTER }), cell("$5\u201315", 1600, { align: AlignmentType.CENTER }), cell("API routing, lab selection, kit logistics, results normalization", 2360),
          ]}),
          new TableRow({ children: [
            cell("Provider Network", 2200, { bold: true }), cell("$3\u20138", 1600, { align: AlignmentType.CENTER }), cell("$3\u20138", 1600, { align: AlignmentType.CENTER }), cell("$0", 1600, { align: AlignmentType.CENTER }), cell("Physician order authorization, results review, critical alerts", 2360),
          ]}),
          new TableRow({ children: [
            cell("OptimalDX", 2200, { bold: true }), cell("$2\u20135", 1600, { align: AlignmentType.CENTER }), cell("$2\u20135", 1600, { align: AlignmentType.CENTER }), cell("$2\u20135", 1600, { align: AlignmentType.CENTER }), cell("Functional range interpretation, automated health reports", 2360),
          ]}),
          new TableRow({ children: [
            cell("Briella Health", 2200, { bold: true, color: TEAL }),
            cell("$35\u201393", 1600, { align: AlignmentType.CENTER, bold: true, fill: TEAL_LIGHT }),
            cell("Thin/Neg", 1600, { align: AlignmentType.CENTER, fill: GOLD_LIGHT }),
            cell("$10\u201360", 1600, { align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
            cell("Platform, UI, patient experience, brand, member management", 2360),
          ]}),
        ]
      }),
      spacer(),

      // ── SECTION 7: OPTIMALDX COST MODELING ──
      heading("7. OptimalDX Cost at Scale"),
      body("OptimalDX pricing has a significant inflection point that matters for unit economics:"),
      spacer(),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [2340, 2340, 2340, 2340],
        rows: [
          new TableRow({ children: [
            headerCell("Tier", 2340), headerCell("Monthly Cost", 2340), headerCell("Reports Included", 2340), headerCell("Cost Per Report", 2340),
          ]}),
          new TableRow({ children: [
            cell("Pay-As-You-Go", 2340, { bold: true }), cell("$20/mo + credits", 2340, { align: AlignmentType.CENTER }), cell("~10 free, then $45/credit", 2340, { align: AlignmentType.CENTER }), cell("~$45 each", 2340, { align: AlignmentType.CENTER }),
          ]}),
          new TableRow({ children: [
            cell("Unlimited", 2340, { bold: true, color: TEAL }), cell("$197/mo", 2340, { bold: true, align: AlignmentType.CENTER }), cell("Unlimited", 2340, { align: AlignmentType.CENTER }), cell("Depends on volume", 2340, { align: AlignmentType.CENTER }),
          ]}),
          new TableRow({ children: [
            cell("At 50 patients/mo", 2340), cell("$197/mo", 2340, { align: AlignmentType.CENTER }), cell("50", 2340, { align: AlignmentType.CENTER }), cell("$3.94 each", 2340, { align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
          ]}),
          new TableRow({ children: [
            cell("At 100 patients/mo", 2340), cell("$197/mo", 2340, { align: AlignmentType.CENTER }), cell("100", 2340, { align: AlignmentType.CENTER }), cell("$1.97 each", 2340, { align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
          ]}),
          new TableRow({ children: [
            cell("At 500 patients/mo", 2340), cell("$197/mo", 2340, { align: AlignmentType.CENTER }), cell("500", 2340, { align: AlignmentType.CENTER }), cell("$0.39 each", 2340, { align: AlignmentType.CENTER, fill: TEAL_LIGHT }),
          ]}),
          new TableRow({ children: [
            cell("Enterprise / API", 2340, { bold: true }), cell("Custom", 2340, { align: AlignmentType.CENTER }), cell("Custom", 2340, { align: AlignmentType.CENTER }), cell("Negotiate", 2340, { align: AlignmentType.CENTER }),
          ]}),
        ]
      }),
      spacer(),
      bodyMulti([
        { text: "Recommendation: ", bold: true },
        { text: "Start with the $197/mo unlimited plan immediately. At just 40+ panels/month, this is cheaper than pay-as-you-go. At scale (500+/mo), OptimalDX becomes nearly free at $0.39/report. Negotiate an enterprise API deal once volume exceeds 200/mo." },
      ]),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 8: KEEPING IT SIMPLE ──
      heading("8. Keeping It Simple for Patients"),
      body("The entire backend complexity is invisible to the patient. Here is what they actually experience:"),
      spacer(),

      heading("8a. DTC Patient Journey (3 Steps)", HeadingLevel.HEADING_2),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 100 }, children: [
        new TextRun({ text: "Sign up + pay ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "\u2014 briellahealth.com, $365/year, choose your panel. Done in 2 minutes.", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 100 }, children: [
        new TextRun({ text: "Get your blood drawn ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "\u2014 walk into any Quest or LabCorp near you (no appointment), OR request a home kit. Show your Briella requisition.", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { after: 100 }, children: [
        new TextRun({ text: "View your results ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "\u2014 log in to your Briella dashboard. See every biomarker with clear explanations, optimal vs. standard ranges, personalized insights, and trends over time.", font: "Arial", size: 20 }),
      ]}),
      spacer(),
      body("The patient never sees Junction, OptimalDX, the provider network, or any routing logic. They see Briella."),
      spacer(),

      heading("8b. What Junction Enables That Quest Alone Can\u2019t", HeadingLevel.HEADING_2),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
        new TextRun({ text: "Lab choice: ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "Patient picks Quest, LabCorp, or home kit \u2014 Junction routes appropriately", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
        new TextRun({ text: "Unified results: ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "Regardless of lab, results come back in the same normalized format", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
        new TextRun({ text: "Home kits: ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "Opens access for rural patients and those who prefer not to visit a PSC", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
        new TextRun({ text: "Future flexibility: ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "Add specialty labs, genetic testing, or at-home devices without rebuilding integrations", font: "Arial", size: 20 }),
      ]}),
      new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { after: 80 }, children: [
        new TextRun({ text: "Add-ons: ", bold: true, font: "Arial", size: 20 }),
        new TextRun({ text: "MRI, nutrition panels, allergy testing, and genetic testing can be layered in as premium add-ons through the same Junction infrastructure", font: "Arial", size: 20 }),
      ]}),

      new Paragraph({ children: [new PageBreak()] }),

      // ── SECTION 9: NEXT STEPS ──
      heading("9. Implementation Roadmap"),
      spacer(),
      new Table({
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        columnWidths: [1200, 3000, 2800, 2360],
        rows: [
          new TableRow({ children: [
            headerCell("Phase", 1200), headerCell("Action", 3000), headerCell("Dependencies", 2800), headerCell("Timeline", 2360),
          ]}),
          new TableRow({ children: [
            cell("1", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Discovery call with Junction \u2014 discuss volume projections, panel specs, pricing", 3000), cell("None", 2800), cell("This week", 2360),
          ]}),
          new TableRow({ children: [
            cell("2", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Sign up for OptimalDX unlimited ($197/mo), test API/import workflow with sample data", 3000), cell("None", 2800), cell("This week", 2360),
          ]}),
          new TableRow({ children: [
            cell("3", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Evaluate provider network options: SteadyMD, Aurora, or build own panel", 3000), cell("State licensing requirements", 2800), cell("Weeks 1\u20132", 2360),
          ]}),
          new TableRow({ children: [
            cell("4", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Junction API integration \u2014 order placement, routing, results webhook", 3000), cell("Junction contract signed", 2800), cell("Weeks 2\u20134", 2360),
          ]}),
          new TableRow({ children: [
            cell("5", 1200, { bold: true, align: AlignmentType.CENTER }), cell("OptimalDX integration \u2014 auto-feed Junction results into ODX, pull interpreted reports", 3000), cell("Junction results flowing", 2800), cell("Weeks 3\u20135", 2360),
          ]}),
          new TableRow({ children: [
            cell("6", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Build Briella patient dashboard \u2014 merge conventional + functional ranges, trend charts", 3000), cell("OptimalDX report format finalized", 2800), cell("Weeks 4\u20136", 2360),
          ]}),
          new TableRow({ children: [
            cell("7", 1200, { bold: true, align: AlignmentType.CENTER }), cell("Beta launch: 50 DTC patients + 2 partner clinics", 3000), cell("All integrations live", 2800), cell("Week 8", 2360),
          ]}),
        ]
      }),

      spacer(), spacer(),
      new Paragraph({ border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: TEAL, space: 1 } }, spacing: { after: 200 }, children: [] }),
      new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 50 }, children: [
        new TextRun({ text: "Prepared for Briella Health  |  April 2026  |  Confidential", color: "999999", font: "Arial", size: 18 }),
      ]}),

    ]
  }]
});

const OUTPUT = process.argv[2] || "Briella_Health_Workflow_Architecture.docx";
Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(OUTPUT, buffer);
  console.log(`Created: ${OUTPUT}`);
});

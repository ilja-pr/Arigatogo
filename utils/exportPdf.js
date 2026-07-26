import jsPDF from 'jspdf';

/*
 * Erzeugt ein echtes Text-PDF (kein Screenshot):
 * gestochen scharf, durchsuchbar, mit Branding, Meta-Kopf,
 * formatierten Tages-Abschnitten und Seitenzahlen.
 */

// ── Layout-Konstanten (mm, A4) ──────────────────────────────
const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN_X = 22;
const MARGIN_TOP = 26;
const MARGIN_BOTTOM = 22;
const CONTENT_W = PAGE_W - MARGIN_X * 2;

// Farben passend zur Website
const COLOR_ACCENT = [196, 55, 47];   // Shu – Torii-Rot
const COLOR_INK = [34, 38, 46];       // Sumi – Tinte
const COLOR_SOFT = [92, 98, 112];     // verdünnte Tusche
const COLOR_LINE = [225, 220, 210];   // Papierlinie

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
};

// Plan-Text in Blöcke zerlegen: Tages-Überschriften ("Tag 1 – Kyoto"),
// Unter-Labels ("Ort:", "Aktivitäten:", "Tipps:"), Bullets und Fließtext.
const parsePlan = (text) => {
  const lines = (text ?? '').replace(/\r/g, '').split('\n');
  const blocks = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    if (/^tag\s*\d+/i.test(line)) {
      blocks.push({ type: 'day', text: line });
    } else if (/^(ort|aktivitäten|aktivitaeten|tipps|hinweise|übernachtung|uebernachtung|essen)\s*:/i.test(line)) {
      const idx = line.indexOf(':');
      blocks.push({
        type: 'label',
        label: line.slice(0, idx + 1),
        text: line.slice(idx + 1).trim(),
      });
    } else if (/^[-•·▪]/.test(line)) {
      blocks.push({ type: 'bullet', text: line.replace(/^[-•·▪]\s*/, '') });
    } else {
      blocks.push({ type: 'para', text: line });
    }
  }
  return blocks;
};

export const exportPlanPdf = ({ planText, meta = {}, filename = 'arigatogo-reiseplan.pdf' }) => {
  if (typeof window === 'undefined') return;

  const pdf = new jsPDF('p', 'mm', 'a4');
  let y = MARGIN_TOP;
  let pageNum = 1;

  // ── Hilfsfunktionen ───────────────────────────────────────
  const drawFooter = () => {
    pdf.setDrawColor(...COLOR_LINE);
    pdf.setLineWidth(0.3);
    pdf.line(MARGIN_X, PAGE_H - 14, PAGE_W - MARGIN_X, PAGE_H - 14);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8.5);
    pdf.setTextColor(...COLOR_SOFT);
    pdf.text('Arigatogo – Dein Wegweiser für Japan', MARGIN_X, PAGE_H - 9);
    pdf.text(`Seite ${pageNum}`, PAGE_W - MARGIN_X, PAGE_H - 9, { align: 'right' });
  };

  const newPage = () => {
    drawFooter();
    pdf.addPage();
    pageNum += 1;
    y = MARGIN_TOP;
  };

  const ensureSpace = (needed) => {
    if (y + needed > PAGE_H - MARGIN_BOTTOM) newPage();
  };

  // ── Kopf mit Hinomaru-Branding ────────────────────────────
  pdf.setFillColor(...COLOR_ACCENT);
  pdf.circle(MARGIN_X + 5, y, 5, 'F'); // rote Sonne

  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(22);
  pdf.setTextColor(...COLOR_INK);
  pdf.text('Arigatogo', MARGIN_X + 14, y + 2.5);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10);
  pdf.setTextColor(...COLOR_SOFT);
  pdf.text('Persönlicher Japan-Reiseplan', MARGIN_X + 14, y + 8.5);

  y += 18;
  pdf.setDrawColor(...COLOR_ACCENT);
  pdf.setLineWidth(0.8);
  pdf.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
  y += 10;

  // ── Meta-Block (Reisedaten) ───────────────────────────────
  const metaRows = [
    meta.startDate && meta.endDate
      ? ['Reisezeitraum', `${formatDate(meta.startDate)} – ${formatDate(meta.endDate)}`]
      : null,
    meta.destinationType ? ['Reisetyp', meta.destinationType] : null,
    meta.interests ? ['Interessen', meta.interests] : null,
    meta.styles?.length ? ['Reisestil', meta.styles.join(', ')] : null,
    meta.budget ? ['Budget', `${meta.budget} €`] : null,
  ].filter(Boolean);

  if (metaRows.length) {
    pdf.setFontSize(10.5);
    for (const [label, value] of metaRows) {
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(...COLOR_INK);
      pdf.text(`${label}:`, MARGIN_X, y);
      pdf.setFont('helvetica', 'normal');
      pdf.setTextColor(...COLOR_SOFT);
      const wrapped = pdf.splitTextToSize(value, CONTENT_W - 38);
      pdf.text(wrapped, MARGIN_X + 38, y);
      y += wrapped.length * 5 + 2;
    }
    y += 4;
    pdf.setDrawColor(...COLOR_LINE);
    pdf.setLineWidth(0.3);
    pdf.line(MARGIN_X, y, PAGE_W - MARGIN_X, y);
    y += 10;
  }

  // ── Plan-Inhalt ───────────────────────────────────────────
  const blocks = parsePlan(planText);

  for (const block of blocks) {
    if (block.type === 'day') {
      ensureSpace(20);
      y += 4;
      // Roter Punkt + Tages-Überschrift
      pdf.setFillColor(...COLOR_ACCENT);
      pdf.circle(MARGIN_X + 1.5, y - 1.5, 1.5, 'F');
      pdf.setFont('helvetica', 'bold');
      pdf.setFontSize(14);
      pdf.setTextColor(...COLOR_ACCENT);
      const wrapped = pdf.splitTextToSize(block.text, CONTENT_W - 8);
      pdf.text(wrapped, MARGIN_X + 6, y);
      y += wrapped.length * 6.5 + 3;
    } else if (block.type === 'label') {
      pdf.setFontSize(10.5);
      pdf.setFont('helvetica', 'bold');
      pdf.setTextColor(...COLOR_INK);
      const labelW = pdf.getTextWidth(block.label) + 2;
      const wrapped = block.text
        ? pdf.splitTextToSize(block.text, CONTENT_W - labelW)
        : [];
      ensureSpace(Math.max(6, wrapped.length * 5 + 2));
      pdf.text(block.label, MARGIN_X, y);
      if (wrapped.length) {
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(...COLOR_SOFT);
        pdf.text(wrapped, MARGIN_X + labelW, y);
        y += wrapped.length * 5 + 2;
      } else {
        y += 6;
      }
    } else if (block.type === 'bullet') {
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10.5);
      pdf.setTextColor(...COLOR_INK);
      const wrapped = pdf.splitTextToSize(block.text, CONTENT_W - 7);
      ensureSpace(wrapped.length * 5 + 1.5);
      pdf.setFillColor(...COLOR_ACCENT);
      pdf.circle(MARGIN_X + 2, y - 1.3, 0.8, 'F');
      pdf.text(wrapped, MARGIN_X + 6, y);
      y += wrapped.length * 5 + 1.5;
    } else {
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10.5);
      pdf.setTextColor(...COLOR_INK);
      const wrapped = pdf.splitTextToSize(block.text, CONTENT_W);
      ensureSpace(wrapped.length * 5 + 2);
      pdf.text(wrapped, MARGIN_X, y);
      y += wrapped.length * 5 + 2.5;
    }
  }

  // Abschluss
  ensureSpace(14);
  y += 6;
  pdf.setFont('helvetica', 'italic');
  pdf.setFontSize(10);
  pdf.setTextColor(...COLOR_SOFT);
  pdf.text('Gute Reise! – Yoi tabi o!', MARGIN_X, y);

  drawFooter();
  pdf.save(filename);
};

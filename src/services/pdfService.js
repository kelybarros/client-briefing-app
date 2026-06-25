import { jsPDF } from "jspdf";
import logo from "../assets/logo.png";

export const generateBriefingPdf = (state) => {
  const doc = new jsPDF();

  const pageHeight = doc.internal.pageSize.height;
  const pageWidth = doc.internal.pageSize.width;

  const today = new Date().toLocaleDateString("pt-BR");

  const primary = [59, 131, 246]; 
  const gray = [120, 120, 120];

  const sectionSpacing = 10; 
  const afterTitleSpacing = 8;  
  const lineSpacing = 6;       
  const blockSpacing = 0;     

  const checkPageBreak = (y, space = 12) => {
    if (y + space > pageHeight - 20) {
      doc.addPage();
      return 20;
    }
    return y;
  };

  const addFooter = () => {
    const pages = doc.internal.getNumberOfPages();

    for (let i = 1; i <= pages; i++) {
      doc.setPage(i);

      doc.setFontSize(8);
      doc.setTextColor(150);

      doc.text(
        `Kely Barros • Briefing de Projeto • Página ${i} de ${pages}`,
        15,
        pageHeight - 10
      );
    }
  };

  doc.addImage(logo, "PNG", pageWidth / 2 - 15, 40, 30, 35);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text("BRIEFING DE PROJETO", pageWidth / 2, 100, {
    align: "center",
  });

  doc.setFontSize(12);
  doc.setTextColor(gray[0], gray[1], gray[2]);
  doc.text("Documento de análise de projeto", pageWidth / 2, 110, {
    align: "center",
  });

  doc.setFontSize(10);
  doc.text(`Data: ${today}`, pageWidth / 2, 120, {
    align: "center",
  });

  doc.addPage();

  let y = 20;

  const addSection = (title) => {
    y += sectionSpacing;
    y = checkPageBreak(y, 20);

    doc.setFillColor(...primary);
    doc.rect(15, y - 6, 3, 10, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.setTextColor(30, 30, 30);
    doc.text(title, 22, y);

    y += afterTitleSpacing;
  };

  const addLine = (label, value) => {
    y = checkPageBreak(y, 10);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(50, 50, 50);
    doc.text(`${label}:`, 22, y);

    doc.setFont("helvetica", "normal");

    const text = value ? String(value) : "-";
    const lines = doc.splitTextToSize(text, 120);

    doc.text(lines, 60, y);

    y += lines.length * lineSpacing + 2;
  };

  addSection("DADOS DO CLIENTE");
  addLine("Nome", state.generalInfo.name);
  addLine("Empresa", state.generalInfo.company);
  addLine("Email", state.generalInfo.email);
  addLine("WhatsApp", state.generalInfo.whatsapp);

  y += blockSpacing;

  addSection("PROJETO");
  addLine("Tipo", state.aboutProject.type?.label);
  addLine(
    "Presença",
    state.aboutProject.presence?.map((i) => i.label).join(", ")
  );
  addLine("Descrição", state.aboutProject.text);

  y += blockSpacing;

  addSection("PÚBLICO-ALVO");
  addLine("Público", state.audienceInfo.audience);
  addLine(
    "Idade",
    state.audienceInfo.age?.map((i) => i.label).join(", ")
  );
  addLine("Interesses", state.audienceInfo.interest);

  y += blockSpacing;


  addSection("OBJETIVOS");
  addLine("Principal", state.objective.primary?.label);
  addLine(
    "Secundários",
    state.objective.secondary?.map((i) => i.label).join(", ")
  );
  addLine("Observações", state.objective.text);

  y += blockSpacing;

  addSection("IDENTIDADE VISUAL");
  addLine("Status", state.visualIdentity.options?.label);
  addLine("Cores", state.visualIdentity.colors);
  addLine("Referências", state.visualIdentity.reference);
  addLine("Evitar", state.visualIdentity.avoid);

  y += blockSpacing;

  addSection("FUNCIONALIDADES");
  addLine("Páginas", state.features.pages);
  addLine("Funcionalidades", state.features.important);
  addLine("Textos", state.features.textCreator?.label);
  addLine("Envio de materiais", state.features.materialDelivery);

  addFooter();

  const fileName =
    state.generalInfo.name
      ?.toLowerCase()
      ?.replace(/\s+/g, "-") || "briefing";

  doc.save(`${fileName}-briefing.pdf`);
};
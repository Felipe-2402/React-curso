import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CenterContent from "../components/CenterContent";




export default function page () {
  const leftNews = [
    { title: "Novo limite de MEI atualizado", date:"2026", preview: "O governo discute aumento do teto anual do MEI para acompanhar a inflação."},
    { title: "Mudanças na DAS mensal", date:"janeiro", preview: "A guia mensal terá novo valor baseado no salário mínimo atual."},
    { title: "Nova categoria incluída", date:"Receita federal", preview: "Profissões digitais passam a poder aderir ao regime MEI."}
  ];
  return (
  <main className="layout">
    <LeftPanel  items={leftNews} />
    <CenterContent />
    <RightPanel />

  </main>
);
}

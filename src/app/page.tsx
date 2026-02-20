import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CenterContent from "../components/CenterContent";




export default function page () {
  return (
  <main className="layout">
    <LeftPanel />
    <CenterContent />
    <RightPanel />

  </main>
);
}

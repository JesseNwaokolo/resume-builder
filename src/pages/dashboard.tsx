import ResumePage from "@/components/ResumePage";
import SideBar from "@/components/SideBar";
import Topbar from "@/components/Topbar";

function Dahsboard() {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <main className="flex flex-1 overflow-hidden">
        <SideBar />
        <ResumePage />
      </main>
    </div>
  );
}

export default Dahsboard;

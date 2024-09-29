import React, { useEffect } from "react";
import SidePanel from "../components/SidePanel";
import MainContent from "../components/MainContent";

function Dashboard() {
  return (
    <div className="flex gap-2 container mx-auto h-screen">
      <SidePanel />
      <MainContent />
    </div>
  );
}

export default Dashboard;

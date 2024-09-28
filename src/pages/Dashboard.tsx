import React, { useEffect } from "react";

function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("auth");
  };

  return <div className="dashboard-container"></div>;
}

export default Dashboard;

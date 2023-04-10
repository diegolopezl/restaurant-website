import React from "react";

const DashboardHeader = ({ title }) => {
  return (
    <header className="dashboard-header">
      <h2 className="db-title">{title}</h2>
    </header>
  );
};

export default DashboardHeader;

// src/components/Topbar.jsx
import React from "react";

const Topbar = () => {
  const topbarStyle = {
    background: "#f8fafc",
    borderBottom: "1px solid #e2e8f0",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div style={topbarStyle}>
      <h1>Welcome, Admin</h1>
      <div>
        <span role="img" aria-label="bell">🔔</span>
        <span style={{ marginLeft: "15px" }}>👤 Profile</span>
      </div>
    </div>
  );
};

export default Topbar;
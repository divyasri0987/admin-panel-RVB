// src/components/Sidebar.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const sidebarStyle = {
    width: "220px",
    backgroundColor: "#0f172a", // clean dark blue (almost black)
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    minHeight: "100vh",
    boxShadow: "none", // remove shadow behind sidebar
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "12px 0",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  };

  const activeLinkStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // subtle highlight for active page
    fontWeight: "600",
  };

  const hoverStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  };

  return (
    <div style={sidebarStyle}>
      <h2 style={{ marginBottom: "25px", fontSize: "22px", fontWeight: "700" }}>
        Admin Panel
      </h2>

      {["/", "/users", "/content", "/reports", "/settings"].map((path, idx) => {
        const labels = ["Dashboard", "Users", "Content Management", "Reporting & Analytics", "Settings"];
        return (
          <Link
            key={idx}
            to={path}
            style={{
              ...linkStyle,
              ...(location.pathname === path ? activeLinkStyle : {}),
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor =
                location.pathname === path ? "rgba(255,255,255,0.1)" : "transparent")
            }
          >
            {labels[idx]}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
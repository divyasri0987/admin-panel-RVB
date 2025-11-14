// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard/Dashboard";
import UsersList from "./pages/Users/UsersList";
import PostsList from "./pages/Content/PostsList";
import Reports from "./pages/Reports/Reports";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <div className="d-flex min-vh-100">
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            backgroundColor: "#0f172a", // same as Sidebar.jsx
            color: "#fff",
            borderRight: "none",
            boxShadow: "none",
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content */}
        <div
          className="flex-fill"
          style={{
            backgroundColor: "#ffffff", // pure white content area
            color: "#000",
          }}
        >
          <Topbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="users" element={<UsersList />} />
              <Route path="content" element={<PostsList />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
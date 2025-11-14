import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  FaUsers,
  FaFileAlt,
  FaUserShield,
  FaPlus,
  FaChartBar,
  FaTrashAlt,
  FaTachometerAlt,
} from "react-icons/fa";

const Dashboard = () => {
  const data = [
    { month: "Jan", users: 30 },
    { month: "Feb", users: 45 },
    { month: "Mar", users: 60 },
    { month: "Apr", users: 80 },
    { month: "May", users: 100 },
    { month: "Jun", users: 120 },
  ];

  return (
    <div className="container py-5">
      {/* === Header with Icon + Subtitle === */}
      <div className="text-center mb-5">
        <FaTachometerAlt size={40} className="text-primary mb-3" />
        <h2 className="fw-bold text-primary">Dashboard Overview</h2>
        <p className="text-muted fst-italic">
          Track your platform’s growth and performance in real time 📊
        </p>
      </div>

      {/* === Gradient Stats Cards === */}
      <div className="row text-center mb-5">
        {/* Total Users */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #007bff, #00b4d8)",
            }}
          >
            <div className="card-body">
              <FaUsers size={40} className="mb-3" />
              <h5 className="fw-semibold">Total Users</h5>
              <p className="display-6 fw-bold mt-2">120</p>
            </div>
          </div>
        </div>

        {/* Total Posts */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #6f42c1, #b47bff)",
            }}
          >
            <div className="card-body">
              <FaFileAlt size={40} className="mb-3" />
              <h5 className="fw-semibold">Total Posts</h5>
              <p className="display-6 fw-bold mt-2">45</p>
            </div>
          </div>
        </div>

        {/* Active Admins */}
        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{
              background: "linear-gradient(135deg, #fd7e14, #ffb86b)",
            }}
          >
            <div className="card-body">
              <FaUserShield size={40} className="mb-3" />
              <h5 className="fw-semibold">Active Admins</h5>
              <p className="display-6 fw-bold mt-2">3</p>
            </div>
          </div>
        </div>
      </div>

      {/* === Matching Report-style Chart === */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <h4 className="fw-semibold text-center mb-4 text-secondary">
            Monthly User Growth Report
          </h4>
          <div style={{ width: "100%", height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar
                  dataKey="users"
                  fill="url(#colorGradient)"
                  barSize={40}
                  radius={[8, 8, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007bff" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#00b4d8" stopOpacity={0.5} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* === Action Buttons === */}
      <div className="text-center mb-5">
        <button className="btn btn-primary mx-2 shadow-sm">
          <FaPlus className="me-2" /> Add User
        </button>
        <button className="btn btn-success mx-2 shadow-sm">
          <FaChartBar className="me-2" /> View Reports
        </button>
        <button className="btn btn-danger mx-2 shadow-sm">
          <FaTrashAlt className="me-2" /> Delete Data
        </button>
      </div>

      {/* === Recent Activity === */}
      <div className="card shadow-sm border-0">
        <div className="card-body text-center">
          <h4 className="fw-semibold mb-3 text-secondary">
            Recent Activity
          </h4>
          <p className="text-muted">
            No recent activity yet. Stay tuned for updates!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import {
  FaChartLine,
  FaUsers,
  FaFileAlt,
  FaChartPie,
} from "react-icons/fa";

const Reports = () => {
  const reportData = [
    { month: "Jan", posts: 20, users: 30 },
    { month: "Feb", posts: 25, users: 45 },
    { month: "Mar", posts: 40, users: 60 },
    { month: "Apr", posts: 35, users: 80 },
    { month: "May", posts: 50, users: 100 },
    { month: "Jun", posts: 60, users: 120 },
  ];

  return (
    // 🔥 Dashboard jaisa exact spacing & alignment
    <div className="container py-5">

      {/* === Header Section === */}
      <div className="text-center mb-5">
        <FaChartLine size={40} className="text-success mb-3" />
        <h2 className="fw-bold text-success">Reporting & Analytics</h2>
        <p className="text-muted fst-italic">
          Analyze user engagement, post statistics, and growth performance 📈
        </p>
      </div>

      {/* === Summary Cards === */}
      <div className="row mb-5 text-center">

        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{ background: "linear-gradient(135deg, #198754, #00c897)" }}
          >
            <div className="card-body">
              <FaUsers size={35} className="mb-3" />
              <h5 className="fw-semibold">Total Users</h5>
              <h2 className="fw-bold mt-2">120</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{ background: "linear-gradient(135deg, #0d6efd, #00bfff)" }}
          >
            <div className="card-body">
              <FaFileAlt size={35} className="mb-3" />
              <h5 className="fw-semibold">Total Posts</h5>
              <h2 className="fw-bold mt-2">45</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div
            className="card text-white shadow-lg border-0"
            style={{ background: "linear-gradient(135deg, #6f42c1, #b47bff)" }}
          >
            <div className="card-body">
              <FaChartPie size={35} className="mb-3" />
              <h5 className="fw-semibold">Monthly Growth</h5>
              <h2 className="fw-bold mt-2">+15%</h2>
            </div>
          </div>
        </div>

      </div>

      {/* === Chart === */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <h4 className="fw-semibold text-center mb-4 text-secondary">
            Users & Posts Analytics
          </h4>

          <div style={{ width: "100%", height: 350 }}>
            <ResponsiveContainer>
              <BarChart data={reportData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Bar
                  dataKey="users"
                  fill="url(#greenGradient)"
                  barSize={40}
                  radius={[8, 8, 0, 0]}
                />
                <Bar
                  dataKey="posts"
                  fill="url(#blueGradient)"
                  barSize={40}
                  radius={[8, 8, 0, 0]}
                />

                <defs>
                  <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#198754" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#00c897" stopOpacity={0.5} />
                  </linearGradient>

                  <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0d6efd" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#00bfff" stopOpacity={0.5} />
                  </linearGradient>
                </defs>

              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>

      {/* === Summary Report === */}
      <div className="card shadow-sm border-0 mb-5">
        <div className="card-body">
          <h5 className="fw-semibold text-secondary mb-3">
            Summary Report
          </h5>
          <p className="text-muted">
            Overall platform activity is growing steadily. User engagement and
            post creation have increased by <strong>25%</strong> compared to the
            previous quarter.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Reports;
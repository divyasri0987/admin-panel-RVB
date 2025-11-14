// src/pages/Settings.jsx
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSave = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  return (
    <div
      className={`container mt-5 ${
        darkMode ? "bg-dark text-light rounded-4 p-4" : ""
      }`}
    >
      <h2
        className={`fw-bold mb-4 text-center ${
          darkMode ? "text-info" : "text-primary"
        }`}
      >
        Settings & Configuration
      </h2>

      {showAlert && (
        <div
          className={`alert ${
            darkMode ? "alert-info" : "alert-success"
          } text-center fw-semibold`}
          role="alert"
        >
          ✅ Changes saved successfully!
        </div>
      )}

      <div className="row">
        {/* Left Column - Profile + Preferences + Workflow */}
        <div className="col-lg-8">
          {/* Profile Settings */}
          <div
            className={`card shadow-sm border-0 mb-4 ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">Profile Settings</h5>
              <form className="row mt-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Admin Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter admin name"
                    defaultValue="Divya Srivastava"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label fw-semibold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    defaultValue="admin@example.com"
                  />
                </div>
              </form>
            </div>
          </div>

          {/* Theme Settings */}
          <div
            className={`card shadow-sm border-0 mb-4 ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">Theme Settings</h5>
              <div className="form-check form-switch mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="darkModeSwitch"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                />
                <label
                  className="form-check-label fw-semibold"
                  htmlFor="darkModeSwitch"
                >
                  {darkMode ? "Dark Mode Enabled 🌙" : "Enable Dark Mode"}
                </label>
              </div>
            </div>
          </div>

          {/* Manage System Preferences */}
          <div
            className={`card shadow-sm border-0 mb-4 ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">Manage System Preferences</h5>

              <div className="mb-3">
                <label className="form-label fw-semibold">Language</label>
                <select className="form-select">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Time Zone</label>
                <select className="form-select">
                  <option>UTC+5:30 (India)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC-5 (EST)</option>
                </select>
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="notifications"
                />
                <label className="form-check-label fw-semibold" htmlFor="notifications">
                  Enable Notifications
                </label>
              </div>
            </div>
          </div>

          {/* Workflow Settings */}
          <div
            className={`card shadow-sm border-0 mb-4 ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">Workflow Settings</h5>

              <div className="mb-3">
                <label className="form-label fw-semibold">Default User Role</label>
                <select className="form-select">
                  <option>Admin</option>
                  <option>Editor</option>
                  <option>Viewer</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">Approval Steps</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g., Admin → Manager → CEO"
                />
              </div>

              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="activityLog"
                />
                <label className="form-check-label fw-semibold" htmlFor="activityLog">
                  Enable Activity Logging
                </label>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="text-center mb-5">
            <button
              className={`btn px-4 fw-semibold ${
                darkMode ? "btn-info text-dark" : "btn-success"
              }`}
              onClick={handleSave}
            >
              💾 Save Changes
            </button>
          </div>
        </div>

        {/* Right Column - Admin Profile Summary */}
        <div className="col-lg-4">
          <div
            className={`card shadow-lg border-0 text-center ${
              darkMode ? "bg-secondary text-light" : ""
            }`}
          >
            <div className="card-body">
              <img
                src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
                alt="Female Admin Avatar"
                className="rounded-circle mb-3 border border-3 border-light shadow-sm"
                width="100"
                height="100"
              />
              <h5 className="fw-bold text-info">Divya Srivastava</h5>
              <p className="text-muted mb-1">System Administrator</p>
              <span className="badge bg-success mb-3">Active ✅</span>

              <hr />
              <p className="small text-muted mb-1">
                <strong>Email:</strong> admin@gmail.com
              </p>
              <p className="small text-muted">
                <strong>Last Login:</strong> 12 Nov 2025, 08:45 PM
              </p>

              <button
                className={`btn btn-sm ${
                  darkMode ? "btn-outline-light" : "btn-outline-primary"
                } mt-2`}
              >
                ✏ Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // ✅ Bootstrap import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App /> {/* BrowserRouter ab App.jsx ke andar hi hai */}
  </React.StrictMode>
);
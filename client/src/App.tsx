import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Screen from "./screens";
import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  // Function --> Update the current theme of app
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Screen.Home />} />
          {/* POS SCREENS */}
          <Route path="/pos" element={<Screen.PosLogin />} />
          <Route path="/pos/table" element={<Screen.TableMap />} />
          <Route path="/pos/menu" element={<Screen.ProductMenu />} />
          {/* AUTHENTICATION SCREENS */}
          <Route path="/register" element={<Screen.UserRegistration />} />
          {/* DASHBOARD SCREENS */}
          <Route path="/dashboard/employee" element={<Screen.EmployeeList />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

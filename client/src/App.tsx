import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Screen from "./screens";
import React from "react";
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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ProductMenu, TableMap, UserRegistration } from "./screens";
import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("dark");

  // Function --> Update the current theme of app
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* POS SCREENS */}
          <Route path="/pos/table" element={<TableMap />} />
          <Route path="/pos/menu" element={<ProductMenu />} />
          {/* AUTHENTICATION SCREENS */}
          <Route path="/register" element={<UserRegistration />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

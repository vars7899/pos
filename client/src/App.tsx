import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, TableMap } from "./screens";
import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Function --> Update the current theme of app
  const toggleTheme = () => setTheme((current) => (current === "dark" ? "light" : "dark"));

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* POS SCREENS */}
          <Route path="/pos/table" element={<TableMap />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

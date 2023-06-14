import React, { useEffect, useState } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    // root
  });

  return <div>useThemeMode</div>;
};

export default useThemeMode;

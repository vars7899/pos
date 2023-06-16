import { useEffect, useState } from "react";

export const useThemeMode = () => {
  // Get the stored theme, if available
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  // Function --> Update the current theme of app
  const $toggleTheme = () => setTheme((current: string) => (current === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return { $toggleTheme, theme };
};

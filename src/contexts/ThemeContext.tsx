
"use client";
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

export type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  effectiveTheme: "light" | "dark"; // Actual theme being applied (light or dark, never system)
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem("pair-genius-theme") as Theme | null;
      if (storedTheme && ["light", "dark", "system"].includes(storedTheme)) {
        return storedTheme;
      }
    }
    return "system"; // Default to system
  });

  // This state will hold the actual theme (light or dark) being applied, resolving "system"
  const [effectiveTheme, setEffectiveTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    let currentThemeToApply: "light" | "dark";

    if (theme === "system") {
      currentThemeToApply = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    } else {
      currentThemeToApply = theme;
    }

    root.classList.remove("light", "dark");
    root.classList.add(currentThemeToApply);
    setEffectiveTheme(currentThemeToApply); // Update the effective theme state

    if (typeof window !== 'undefined') {
      localStorage.setItem("pair-genius-theme", theme); // Store the user's preference (can be "system")
    }
  }, [theme]);

  // Listener for system theme changes if "system" is selected
  useEffect(() => {
    if (theme !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      const systemTheme = mediaQuery.matches ? "dark" : "light";
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(systemTheme);
      setEffectiveTheme(systemTheme);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);


  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const value = useMemo(() => ({ theme, setTheme, effectiveTheme }), [theme, setTheme, effectiveTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

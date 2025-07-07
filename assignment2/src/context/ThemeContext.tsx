"use client"
'use client';

import { createContext, useState, useContext, ReactNode } from "react";
interface themeContextInterface{
  theme:'light' | 'dark'
  toggleTheme : ()=>void
}

export const ThemeContext = createContext<themeContextInterface | undefined>(undefined);
interface childrenInterface{
  children:ReactNode;
}

export const ThemeProvider = ({ children } : childrenInterface) => {
  const [theme, setTheme] = useState<'light' | 'dark'>("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useTheme = ():themeContextInterface => {
 const context = useContext(ThemeContext);
 if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
 return context;
}
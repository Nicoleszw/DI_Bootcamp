import React, { createContext, useState } from 'react';

// 1. Create the context
export const ThemeContext = createContext();

// 2. Create the provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // 3. Toggle function
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

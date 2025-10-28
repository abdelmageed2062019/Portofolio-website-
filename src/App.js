import React, { useState, createContext, useEffect } from "react";

import { About, Experience, Footer, Header, Skills, Work } from "./container";
import { Navbar, Portofolio } from "./components";

import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

export const themeContext = createContext(null);

const App = () => {
  const getTheme = () => {
    try {
      const theme = localStorage.getItem("theme");
      return theme ? JSON.parse(theme) : false;
    } catch (error) {
      // If theme is not valid JSON (e.g., old format "light" or "dark")
      const theme = localStorage.getItem("theme");
      return theme || false;
    }
  };

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  return (
    <themeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app">
        <Portofolio />
        <Navbar />
        <Header />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Footer />
      </div>
    </themeContext.Provider>
  );
};

export default App;

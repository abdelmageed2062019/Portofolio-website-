import React, { useState, createContext, useEffect } from "react";

import { About, Footer, Header, Skills, Work } from "./container";
import { Navbar, Portofolio } from "./components";

import "react-toastify/dist/ReactToastify.css";

import "./App.scss";

export const themeContext = createContext(null);

const App = () => {
  const getTheme = () => {
    return JSON.parse(localStorage.getItem("theme")) || false;
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
        <Skills />
        <Footer />
      </div>
    </themeContext.Provider>
  );
};

export default App;

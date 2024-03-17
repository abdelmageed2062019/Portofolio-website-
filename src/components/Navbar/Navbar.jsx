import React, { useState, useContext } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { BsFillSunFill } from "react-icons/bs";

import { themeContext } from "../../../src/App";

import "./Navbar.scss";

const Navbar = ({ textEnter, textLeave }) => {
  const [toggle, setToggle] = useState(false);
  const { toggleTheme, theme } = useContext(themeContext);

  return (
    <nav className="app__navbar">
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            {theme === "dark" ? (
              <a href={`#${item}`} className="dark-text">
                {item}
              </a>
            ) : (
              <a href={`#${item}`}>{item}</a>
            )}
          </li>
        ))}
        <li onClick={toggleTheme} style={{ cursor: "pointer" }}>
          {theme === "dark" ? (
            <MdDarkMode className="dark-text" />
          ) : (
            <BsFillSunFill />
          )}
        </li>
      </ul>

      <div
        className={
          theme === "dark" ? "app__navbar-menu dark" : "app__navbar-menu"
        }
      >
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [200, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className={theme === "dark" ? "dark" : ""}
          >
            <HiX
              onClick={() => setToggle(false)}
              className={theme === "dark" ? "dark-text" : ""}
            />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li
                  key={item}
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                >
                  <a
                    href={`#${item}`}
                    onClick={() => setToggle(false)}
                    className={theme === "dark" ? "dark-text" : ""}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li onClick={toggleTheme} style={{ cursor: "pointer" }}>
                {theme === "dark" ? (
                  <MdDarkMode className={theme === "dark" ? "dark-text" : ""} />
                ) : (
                  <BsFillSunFill />
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

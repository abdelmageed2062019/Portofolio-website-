import React, { useContext } from "react";
import { NavigationDots, SocialMedia } from "../components";
import { themeContext } from "../App";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    const { theme } = useContext(themeContext);

    return (
      <div
        id={idName}
        className={
          theme === "dark"
            ? `app__container ${className} dark`
            : `app__container ${className}`
        }
      >
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
          <div className="copyright">
            <p className="p-text">@2023 Abdelmageed</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;

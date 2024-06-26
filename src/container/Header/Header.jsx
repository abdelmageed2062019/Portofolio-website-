import React from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Header.scss";

const Header = () => {
  const scaleVaraince = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I'm</p>
              <h1 className="head-text">Abdelmageed</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Frontend Developer</p>
            <p className="p-text">Full-Time</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile" />
        <motion.img
          whileInView={{ x: [-100, 0], scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile-circle"
          className="overlay-circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVaraince}
        whileInView={scaleVaraince.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.javascript, images.angular].map(
          (circle, index) => (
            <div className="circle-cmp app__flex" key={`{circle-${index}}`}>
              <img src={circle} alt="circle" />
            </div>
          )
        )}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home", "");

import { useState } from "react";
import { motion, useScroll } from "framer-motion";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Header.scss";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <img src={images.animationInto} />
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hi Folks, I am</p>
              <h1 className="head-text">Yong Yung Hao</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Cloud Engineering</p>
            <p className="p-text">DevOps Engineering</p>
            <p className="p-text">AWS Cloud Club Captian</p>
            <p className="p-text">Web Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={images.profile2Improve} alt="profile_bg"></img>

        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>
      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles"
      >
        {[images.react, images.aws, images.azure].map((circle, index) => (
          <div className={`cicle-cmp app__flex `} key={`circle-${index}`}>
            <img className={`circle${index}`} src={circle} alt="circle" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default AppWrap(Header, "home");

import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://www.linkedin.com/in/yong-yung-hao-388638238/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/yyhao0422">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/yyhao0422/">
        <BsInstagram />
      </a>
    </div>
  );
};

export default SocialMedia;

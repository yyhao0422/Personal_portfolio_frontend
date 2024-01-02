import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a
        href="https://www.linkedin.com/in/yong-yung-hao-388638238/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/yyhao0422" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://www.credly.com/users/yung-hao-yong/badges"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 48 48"
        >
          <path
            fill="#808080"
            d="m42,37c0,2.76-2.24,5-5,5H11c-2.76,0-5-2.24-5-5V11c0-2.76,2.24-5,5-5h26c2.76,0,5,2.24,5,5v26Z"
          ></path>
          <path
            fill="#fff"
            d="m33.77,27.04c-.71-.5-1.68-.32-2.18.39-2.14,2.96-5.22,5.57-9.58,5.57s-4.62-7.88-2-13c1.61-3.14,3.87-5.73,5.84-5.72,1.39,0,2.18,1.26,1.8,2.6-.46,1.63-.51,2.72-.51,2.81-.04.96.71,1.77,1.68,1.8.02,0,.04.01.07.01.93,0,1.7-.74,1.74-1.68,0-.03.18-3.31,2.78-6.77.63-.84.39-2.07-.57-2.59-.77-.42-1.75-.14-2.27.56-.15.2-.29.39-.42.59-.14.2-.4.27-.62.17-7.7-3.47-12.07,3.86-13.51,7.23-3,7-3,18,5.62,18,7.22,0,10.63-4.75,12.6-7.79.46-.71.27-1.66-.42-2.14-.01,0-.02-.02-.03-.02Z"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialMedia;

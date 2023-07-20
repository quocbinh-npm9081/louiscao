import "./style.scss";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
export const ClickIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 300, x: 300 }}
      animate={{
        opacity: 1,
        y: 0,
        x: 0,
        transition: { delay: 0.3, duration: 1.8, ease: "easeInOut" },
      }}
      className="clickIcon"
    >
      <Link to={`model/曹国平-dev`}>
        <svg
          width="64px"
          height="64px"
          viewBox="-2.4 -2.4 28.80 28.80"
          xmlns="http://www.w3.org/2000/svg"
          fill="#ffffff"
          stroke="#ffffff"
          stroke-width="0.00024000000000000003"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M13.172 5.717l2.71-1.297.432.902-2.865 1.372zm.203-4.301l-.943-.333-1.028 2.915.872.535zm-9.219 8.616l.432.902 2.865-1.37-.587-.829zM6.978 2.03L8.06 4.291l.902-.431L7.88 1.599zm-.342 4.25L3.72 5.252l-.332.943 3.117 1.1zM21.813 15H16.36l3.032 6.049-3.94 1.981-3.106-6.152L9 21.462V5.65zm-7.074-1h4.007L10 7.618v10.777l2.501-3.427 3.393 6.72 2.155-1.084z"></path>
            <path fill="none" d="M0 0h24v24H0z"></path>
          </g>
        </svg>
      </Link>
    </motion.div>
  );
};

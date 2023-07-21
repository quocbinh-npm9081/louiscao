import React from "react";
import ImageBlock from "../ImageBlock/ImageBlock";
import { motion } from "framer-motion";
import "./style.scss";

interface ILoaderProps {
  setLoading: (e: Boolean) => void;
}

const itemMain = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.8,
    },
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 0.32,
    },
  },
};
const Loader: React.FC<ILoaderProps> = ({ setLoading }) => {
  return (
    <div className="loader">
      <motion.div
        className="loader-inner"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoading(false)}
      >
        <ImageBlock
          src={import.meta.env.VITE_REACT_APP_URL_IMAGE_PATH}
          id="image-1"
        />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img
            layoutId="main-image-1"
            src={`${import.meta.env.VITE_REACT_APP_URL_IMAGE_PATH}/image-2.jpg`}
            alt="random alt"
          />{" "}
        </motion.div>
        <ImageBlock
          src={import.meta.env.VITE_REACT_APP_URL_IMAGE_PATH}
          id="image-3"
        />
        <ImageBlock
          src={import.meta.env.VITE_REACT_APP_URL_IMAGE_PATH}
          id="image-4"
        />
        <ImageBlock
          src={import.meta.env.VITE_REACT_APP_URL_IMAGE_PATH}
          id="image-5"
        />
      </motion.div>
    </div>
  );
};

export default Loader;

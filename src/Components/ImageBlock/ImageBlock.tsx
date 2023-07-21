import React from "react";
import ImageBanner from "../ImageBanner/ImageBanner";
import { motion } from "framer-motion";
interface IImageBlockProps {
  src: string;
  id: string;
}

const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.6,
      ease: [0.17, 0.67, 0.83, 0.67],
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const ImageBlock: React.FC<IImageBlockProps> = ({ src, id }) => {
  return (
    <motion.div variants={item} className={`image-block ${id}`}>
      <ImageBanner
        src={src + `/${id}.webp`}
        fallback={src + `/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};

export default ImageBlock;

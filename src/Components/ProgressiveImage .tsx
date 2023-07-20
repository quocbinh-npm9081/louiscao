import React from "react";
import { Suspense } from "react";
import { motion } from "framer-motion";
import LowQuantityImage from "./LowQuantityImage";

interface IProgressiveImageProps {
  lowQualityImage: string;
  highQualityImage: string;
  imageDetails: {
    width: number;
    height: string | number;
  };
}
const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

const ProgressiveImage: React.FC<IProgressiveImageProps> = ({
  lowQualityImage,
  highQualityImage,
  imageDetails,
}) => {
  return (
    <Suspense
      fallback={<LowQuantityImage imageDetails={imageDetails} lowQualityImage={`${lowQualityImage}`} />}
    >
      <motion.img
        width={imageDetails.width}
        height={imageDetails.height}
        src={`${highQualityImage}`}
        whileHover={{ scale: 1.1 }}
        transition={transition}
        alt="binhdev"
      />
    </Suspense>
  );
};
export default ProgressiveImage;

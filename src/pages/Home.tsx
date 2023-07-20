import React from "react";
import { Link } from "react-router-dom";
import highQualityImage from "../assets/main2.jpg";
import lowQualityImage from "../assets/main1.jpg";
import { motion } from "framer-motion";

import ProgressiveImage from "../Components/ProgressiveImage ";
import { ClickIcon } from "../Components/ClickIcon/ClickIcon";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const visible = {
  opacity: 1,
  transition: transition,
};
interface IHomeProps {
  imageDetails: {
    width: number;
    height: number | string;
  };
}
const Home: React.FC<IHomeProps> = ({ imageDetails }) => {
  return (
    <main>
      <motion.div
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        animate={visible}
        className="container"
      >
        <div className="row center">
          <div className="image-container">
            <div className="thumbnail">
              <motion.div
                className="frame"
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible,
                }}
              >
                <ClickIcon />
                <Link to={`model/曹国平-dev`}>
                  <ProgressiveImage
                    imageDetails={imageDetails}
                    lowQualityImage={lowQualityImage}
                    highQualityImage={highQualityImage}
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              exit={{ opacity: 0 }}
              transition={transition}
              className="information"
            >
              <div className="title">Cao Quốc Bình</div>
              <div className="location">
                <span>曹国平</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import "./style.scss";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      deplayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAnimation = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const Banner = () => {
  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setPlayMarquee(true);
  }, []);
  return (
    <motion.div className="banner" variants={banner}>
      <BannerRowCenter title={"experience"} playMarquee={playMarquee} />
    </motion.div>
  );
};

const AnimatedLetters: React.FC<{
  title: string;
}> = ({ title }) => (
  <motion.span
    className="row-title"
    variants={banner}
    initial="initial"
    animate="animate"
  >
    {[...title].map((letter, index: number) => (
      <motion.span
        variants={letterAnimation}
        className="row-letter"
        key={index}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowCenter: React.FC<{
  title: string;
  playMarquee: boolean;
}> = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
      <div className="marquee__inner">
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </div>
    </div>
  );
};

export default Banner;

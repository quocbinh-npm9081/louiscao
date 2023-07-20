import React, { useRef, useState, useEffect } from "react";
import lowQualityImage from "../assets/main2.jpg";
import ScrollForMore from "../Components/ScrollForMore/ScrollForMore";
import MonoMusic from "../assets/mp3/Waiting For You Album.mp3";
import { motion, useScroll, useTransform } from "framer-motion";
import Typing from "../Components/Typing";
//Components

interface IModelProps {
  imageDetails: {
    width: number;
    height: number | string;
  };
}
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const firstName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const lastName = {
  animate: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { ...transition, duration: 1 },
  },
};

const Model: React.FC<IModelProps> = ({ imageDetails }) => {
  const player = useRef<HTMLAudioElement>(null);
  const [isCanScroll, setIscanScroll] = useState<Boolean>(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const [isPlay, setIsPlay] = useState<Boolean>(true);
  useEffect(() => {
    if (!isCanScroll) {
      document.querySelector("body")?.classList.add("no-scroll");
    } else {
      document.querySelector("body")?.classList.remove("no-scroll");
    }
  }, [isCanScroll]);

  useEffect(() => {
    if (isPlay && player && player.current) player.current.play();
  }, [isPlay]);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      onAnimationComplete={() => {
        setIscanScroll(true);
        setIsPlay(true);
      }}
      className="single"
    >
      <Typing />
      <div className="container fluid">
        <div className="row center top-row">
          <div className="top">
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 1.4,
                  ease: "easeIn",
                  delay: 1.2,
                },
              }}
              className="details"
            >
              <div className="location">
                <div className="mua">English name: Louis .Q Cao</div>
              </div>
              <div className="mua">Japanese name: 曹国平</div>
            </motion.div>

            <motion.div className="model">
              <motion.span variants={firstName} className="first">
                <motion.span variants={letter}>Q</motion.span>
                <motion.span variants={letter}>U</motion.span>
                <motion.span variants={letter}>O</motion.span>
                <motion.span variants={letter}>C</motion.span>
              </motion.span>
              <motion.span variants={lastName} className="last">
                <motion.span variants={letter}>B</motion.span>
                <motion.span variants={letter}>I</motion.span>
                <motion.span variants={letter}>N</motion.span>
                <motion.span variants={letter}>H</motion.span>
              </motion.span>
            </motion.div>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="bottom">
            <div className="image-container-single">
              <motion.div
                className="thumbnail-single"
                initial={{
                  y: "-55%",
                  width: imageDetails.width,
                  height: imageDetails.height,
                }}
                animate={{
                  y: 0,
                  width: "100%",
                  height: window.innerHeight > 1440 ? 800 : 400,
                  transition: {
                    delay: 0.2,
                    ...transition,
                  },
                }}
              >
                <div className="frame-single">
                  <motion.img
                    style={{ scale: scale, opacity: opacity }}
                    initial={{ scale: 1 }}
                    animate={{
                      transition: {
                        delay: 0.2,
                        ...transition,
                      },
                      y: window.innerWidth < 580 ? -100 : -900,
                    }}
                    src={lowQualityImage}
                    alt="an image"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          <ScrollForMore />
        </div>
      </div>
      <div className="detailed-information">
        <div className="container">
          <div className="row">
            <h2 className="title">
              The insiration behind the artwork & <br /> what it means.
            </h2>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </div>
        </div>
      </div>
      <audio src={MonoMusic} ref={player} controls style={{ opacity: 0 }} />
    </motion.div>
  );
};

export default Model;

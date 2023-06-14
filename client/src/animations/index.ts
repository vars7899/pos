import { Variants } from "framer-motion";

export const fadeIn = (duration: number): Variants => {
  return {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 0.5, 1],
      transition: { duration: duration },
    },
  };
};

export const backgroundBubble = (
  initTranslateX: string,
  initTranslateY: string,
  scaleArr: number[],
  translateXArr: number[],
  translateYArr: number[]
): Variants => {
  return {
    initial: {
      translateX: initTranslateX,
      translateY: initTranslateY,
    },
    animate: {
      scale: scaleArr,
      translateX: translateXArr,
      translateY: translateYArr,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        duration: 8,
      },
    },
  };
};

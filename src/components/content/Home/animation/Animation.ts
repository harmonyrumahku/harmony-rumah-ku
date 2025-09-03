import { easeOut } from "framer-motion";

export const logoVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export const textVariants = {
  hidden: {
    y: 20,
    opacity: 0,
    textShadow: "0 0 5px rgba(255,255,255,0.3)",
  },
  visible: {
    y: 0,
    opacity: 1,
    textShadow: "0 0 10px rgba(255,255,255,0.5)",
    transition: {
      y: { duration: 0.6, ease: easeOut },
      opacity: { duration: 0.6, ease: easeOut },
      textShadow: { duration: 0.6, ease: easeOut },
    },
  },
};

export const titleVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export const descriptionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: easeOut,
    },
  },
};

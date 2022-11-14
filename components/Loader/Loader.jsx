import React from "react";
import { RiLoader4Line } from "react-icons/ri";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <svg
      stroke="#fff"
      fill="#fff"
      strokeWidth="0"
      viewBox="0 0 24 24"
      height="24"
      width="24"
      xmlns="http://www.w3.org/2000/svg">
      <motion.path
        animate={{
          rotateZ: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364z"></motion.path>
    </svg>
  );
};

export default Loader;

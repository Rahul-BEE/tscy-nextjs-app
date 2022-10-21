import React from "react";
import { TbLoader } from "react-icons/tb";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 2 }}>
      <TbLoader />
    </motion.div>
  );
};

export default Loader;

import React from "react";
import styles from "../../../styles/masterplan.module.scss";
import { motion } from "framer-motion";
const Paginationdots = ({ slideIndex }) => {
  return (
    <div className={styles.paginationdots}>
      <ul>
        {[0, 1, 2].map((item) => {
          return (
            <motion.li
              initial={{
                opacity: 0.5,
              }}
              animate={{
                opacity: item === slideIndex ? 1 : 0.5,
              }}>
              {item === slideIndex ? (
                <motion.span layoutId="selectedOne" layout="position" />
              ) : null}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default Paginationdots;

import React from "react";
import styles from "../../../styles/masterplan.module.scss";
import { motion } from "framer-motion";
const Paginationdots = ({ slideIndex, length, setSlideIndex }) => {
  return (
    <div className={styles.paginationdots}>
      <ul>
        {[...Array(length).keys()].map((item) => {
          return (
            <motion.li
              onClick={() => setSlideIndex(item)}
              key={item}
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

import { useState } from "react";
import Filters from "../../components/Floorplan/Filters";
import styles from "../../styles/floorplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import VillaCards from "../../components/Floorplan/VillaCards";
const Floorplan = () => {
  const [text, setText] = useState("PERFECT FOR YOU.");
  const [filterId, setFilterId] = useState(0);
  return (
    <div className={styles.app__floorplanmain}>
      <div className={styles.floorplanHeading}>
        <p>Let’s find a home</p>
        <AnimatePresence>
          <p>
            that’s{" "}
            <motion.span
              key={text}
              animate="visible"
              initial="hidden"
              variants={{
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    duration: 0.6,
                  },
                },
                hidden: {
                  opacity: 0,
                },
              }}>
              {text.split("").map((char, index) => (
                <motion.span
                  key={`${text}_${index}`}
                  variants={{
                    hidden: {
                      opacity: 0,
                      x: 5,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                    },
                  }}>
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </p>
        </AnimatePresence>
      </div>

      <Filters
        filterId={filterId}
        setFilterId={setFilterId}
        setText={setText}
      />
      <VillaCards filterId={filterId} />
    </div>
  );
};

export default Floorplan;

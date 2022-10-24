import { useState } from "react";
import Filters from "../../components/Floorplan/Filters";
import styles from "../../styles/floorplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import VillaCards from "../../components/Floorplan/VillaCards";
import useLanguage from "../../utils/useLanguage";
import { BsArrowDownCircle } from "react-icons/bs";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import { HeadComponent } from "../../components";

const Floorplan = () => {
  const lan = useLanguage();
  // const [text, setText] = useState("PERFECT FOR YOU.");
  const [filterId, setFilterId] = useState(0);
  return (
    <>
      <HeadComponent title={"TSC-Floorplan"} />
      <div className={styles.app__floorplanmain}>
        <div className={styles.floorplanHeading}>
          <p>
            {lan.commontext.findyour} <span>{lan.commontext.dreamHome}</span>
          </p>
          {/* <p>Let’s find a home</p>
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
        </AnimatePresence> */}
        </div>

        {/* <Filters
        filterId={filterId}
        setFilterId={setFilterId}
        // setText={setText}
      /> */}
        <VillaCards filterId={filterId} />
        <div className={styles.downloadcomparison}>
          <p>
            {lan.commontext.download} {lan.commontext.comparison}{" "}
            <BsArrowDownCircle />
          </p>
        </div>
        <CardSection />
        <LocationFYV />
      </div>
    </>
  );
};

export default Floorplan;

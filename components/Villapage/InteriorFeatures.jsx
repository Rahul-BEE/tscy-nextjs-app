import React, { useState } from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from "framer-motion";
import SliderComponent from "./SliderComponent";
const InteriorFeatures = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const [init, setInit] = useState(true);
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  const starterAnimation = useAnimation();

  const carouselHandler = (val) => {
    if (val) {
      starterAnimation.start("visible");
      setInit(true);
    } else {
      starterAnimation.start("hidden");
      setInit(false);
    }
  };

  return (
    <div className={styles.interiorfeaturesmain}>
      <div className={styles.interiorHeader}>
        <div>
          <p className={`${styles.subHeading} sectionsubHeading`}>
            {lan.commontext.caption}
          </p>
          <p className={"sectionmainHeading"}>
            {lan.commontext.interiorHeading}
          </p>
        </div>
        <div className={styles.interiorcontrols}>
          <IoChevronBackCircleOutline onClick={() => carouselHandler(true)} />
          <IoChevronForwardCircleOutline
            onClick={() => carouselHandler(false)}
          />
        </div>
      </div>
      {data && (
        <div className={styles.contentContainer} data-index={init}>
          <LayoutGroup>
            <AnimatePresence>
              {init && (
                <motion.div
                  key={init}
                  className={styles.description}
                  layout="position"
                  variants={{
                    visible: {
                      x: 0,
                      opacity: 1,
                    },
                    exit: {
                      x: "100%",
                      opacity: 0,
                    },
                  }}>
                  <p>{data.interiorDescription}</p>
                  <div>
                    <button>Register Interest</button>
                    <button>
                      {lan.commontext.download} {lan.commontext.brochure}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div className={styles.slideContainer} layout="position">
              <SliderComponent />
            </motion.div>
          </LayoutGroup>
        </div>
      )}
    </div>
  );
};

export default InteriorFeatures;

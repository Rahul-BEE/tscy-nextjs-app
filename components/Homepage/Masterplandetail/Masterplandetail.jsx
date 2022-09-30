import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { GoChevronLeft } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
const parentVariant = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.6,
    },
  },
  hidden: (direction) => ({
    x: direction === 1 ? "100%" : "-100%",
    opacity: 0,
  }),
  exit: (direction) => ({
    x: direction === 1 ? "-100%" : "100%",
    opacity: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  }),
};
const Masterplandetail = ({ item, setShowDetail }) => {
  const lan = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState(
    item < 16 ? lan.masterplan.markers[item - 1] : lan.tracks[item - 16]
  );
  const length = data.slideimg.length;
  const dragHandler = (info) => {
    if (info.velocity.x < -200 && slideIndex < length - 1) {
      setDirection(1);
      setSlideIndex((prev) => prev + 1);
    } else if (info.velocity.x > 100 && slideIndex !== 0) {
      setDirection(-1);
      setSlideIndex((prev) => prev - 1);
    } else {
      return;
    }
  };

  useEffect(() => {
    setSliderWidth(
      document.getElementById("masterplanslider").getBoundingClientRect()
        .width -
        document.getElementById("masterplanslideparent").getBoundingClientRect()
          .width
    );
  }, [slideIndex]);
  return (
    <>
      <div className={styles.masterplandetailinner} id="masterplanslideparent">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            data-index={item > 15 ? "true" : "false"}
            drag="x"
            dragConstraints={{
              right: 0,
              left: -sliderWidth,
            }}
            id="masterplanslider"
            animate="visible"
            initial="hidden"
            exit={"exit"}
            variants={parentVariant}
            dragElastic={0.1}
            custom={direction}
            onDragEnd={(_, info) => dragHandler(info)}
            className={styles.masterplaninnerslideimg}
            key={`${data.name}${slideIndex}`}>
            <Image
              key={`${data.name}_detailimg`}
              src={data.slideimg[slideIndex]}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={data.slideimg[slideIndex]}
            />
            <div className={styles.masterplandetailgradient} />
          </motion.div>
        </AnimatePresence>
        <div className={styles.gobackbtn} onClick={() => setShowDetail(false)}>
          <span>
            <GoChevronLeft />
          </span>
          {lan.commontext.gobacktomasterplan}
        </div>
      </div>
    </>
  );
};

export default Masterplandetail;

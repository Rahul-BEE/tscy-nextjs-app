import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { GoChevronLeft } from "react-icons/go";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import Paginationdots from "./Paginationdots";
import MasterplanInfoBox from "./Masterplaninfobox/MasterplanInfoBox";
const parentVariant = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  hidden: (direction) => ({
    x: direction === 1 ? "100%" : "-100%",
    opacity: 0.75,
    transition: {
      duration: 1,
    },
  }),
  exit: (direction) => ({
    x: direction === 1 ? "-100%" : "100%",
    opacity: 0.75,
    transition: {
      duration: 1,
    },
  }),
};
const Masterplandetail = ({ item, track, goback }) => {
  const lan = useLanguage();
  const [slideIndex, setSlideIndex] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [index, setIndex] = useState(track ? track - 16 : item - 1);
  const [direction, setDirection] = useState(1);
  const [showGradient, setShowGradient] = useState(false);
  const [data, _] = useState(track ? lan.tracks : lan.masterplan.markers);
  const length = data[index]?.slideimg.length;
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

  useEffect(() => {
    console.log("slide", slideIndex);
  }, [index]);

  return (
    <>
      <div
        className={styles.masterplandetailinner}
        id="masterplanslideparent"
        key={track ? track : item}>
        {console.log("direction", direction)}
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            data-index={track !== null ? "true" : "false"}
            drag="x"
            dragConstraints={
              lan.language === 1
                ? {
                    right: 0,
                    left: -sliderWidth,
                  }
                : {
                    left: 0,
                    right: sliderWidth,
                  }
            }
            id="masterplanslider"
            animate="visible"
            initial="hidden"
            exit={"exit"}
            variants={parentVariant}
            dragElastic={false}
            dragMomentum={track ? true : false}
            custom={direction}
            onDragEnd={(_, info) => dragHandler(info)}
            className={styles.masterplaninnerslideimg}
            key={`${data[index].name}${slideIndex}`}>
            <Image
              key={`${data[index].name}_detailimg`}
              src={data[index].slideimg[slideIndex]}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              blurDataURL={data[index].slideimg[slideIndex]}
              alt={data[index].name}
              onLoadingComplete={() => setShowGradient(true)}
              quality={100}
              priority={true}
            />
            {showGradient && track === null && (
              <div className={styles.masterplandetailgradient} />
            )}
          </motion.div>
        </AnimatePresence>
        <MasterplanInfoBox
          item={item}
          track={track}
          slideIndex={slideIndex}
          setSlideIndex={setSlideIndex}
          updateIndex={setIndex}
          setDirection={setDirection}
        />
        <div className={styles.detailtopbar}>
          <div className={styles.gobackbtn} onClick={() => goback()}>
            <span
              style={{
                marginRight: "5px",
                marginBottom: "2px",
              }}>
              <GoChevronLeft />
            </span>
            <p>{lan.commontext.gobacktomasterplan}</p>
          </div>
          {data[index].slideimg.length > 1 && (
            <div className={styles.slideNumber}>
              <p>
                {slideIndex + 1}/{data[index].slideimg.length}
              </p>
            </div>
          )}
        </div>
        {data[index].slideimg.length > 1 && (
          <Paginationdots
            slideIndex={slideIndex}
            length={data[index].slideimg.length}
            setSlideIndex={setSlideIndex}
          />
        )}
      </div>
    </>
  );
};

export default Masterplandetail;

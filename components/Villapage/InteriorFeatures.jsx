import React, { useCallback, useState, useEffect } from "react";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import {
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";
import { BsArrowDownCircle } from "react-icons/bs";
import { useRouter } from "next/router";

import {
  AnimatePresence,
  LayoutGroup,
  motion,
  useAnimation,
} from "framer-motion";
import { useRef } from "react";
import SliderComponent from "./SliderComponent";
const InteriorFeatures = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const [open, setOpen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(100);
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [controlsColor, setControlsColor] = useState([0.5, 1]);
  const carouselRef = useRef(null);
  const itemRef = useRef(null);
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  const starterAnimation = useAnimation();

  const setNewComponentWidth = useCallback(() => {
    setContainerWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
    );
    setItemWidth(itemRef.current?.getBoundingClientRect().width);
  }, [carouselRef]);

  useEffect(() => {
    setNewComponentWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewComponentWidth);
    }
    return () => {
      window.removeEventListener("resize", setNewComponentWidth);
    };
  }, [carouselRef.current, setNewComponentWidth]);
  const carouselHandler = (id) => {
    if (
      id === "+" &&
      scrolledWidth <
        carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth &&
      open
    ) {
      setScrolledWidth((prev) => prev + itemWidth);
      starterAnimation.start({
        x: -(scrolledWidth + itemWidth),
      });
    } else if (id === "-" && scrolledWidth > 0) {
      setScrolledWidth((prev) => prev - itemWidth);
      starterAnimation.start({
        x: -scrolledWidth + itemWidth,
      });
    } else if (scrolledWidth === 0 && id === "-") {
      setControlsColor([0.5, 1]);
      setOpen(false);
    } else if (scrolledWidth === 0 && id === "+") {
      setOpen(true);
      setControlsColor([1, 1]);
    } else {
      setControlsColor([1, 0.5]);
      return;
    }
  };
  const carouselHandler2 = (id) => {
    if (
      id === "+" &&
      scrolledWidth <
        carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
    ) {
      setScrolledWidth((prev) => prev + itemWidth);
      starterAnimation.start({
        x: -(scrolledWidth + itemWidth),
      });
    } else if (id === "-" && scrolledWidth > 0) {
      setScrolledWidth((prev) => prev - itemWidth);
      starterAnimation.start({
        x: -scrolledWidth + itemWidth,
      });
    } else {
      return;
    }
  };

  return (
    <div className={styles.interiorfeaturesmain}>
      <div className={styles.interiorHeader}>
        <div>
          <p className={`${styles.subHeading} sectionsubHeading`}>
            {lan.commontext.caption}
          </p>
          <h4 className={"sectionmainHeading"}>
            {lan.commontext.interiorHeading}
          </h4>
        </div>
        <div className={styles.interiorcontrols}>
          <IoChevronBackCircleOutline
            onClick={() => carouselHandler("-")}
            style={{
              opacity: controlsColor[0],
            }}
          />
          <IoChevronForwardCircleOutline
            onClick={() => carouselHandler("+")}
            style={{
              opacity: controlsColor[1],
            }}
          />
        </div>
      </div>
      {data && (
        <div className={styles.contentContainer} data-index={!open}>
          <AnimatePresence>
            <LayoutGroup>
              {!open && (
                <motion.div key={open} className={styles.description}>
                  <p>{data.interiorDescription}</p>
                  <div className={styles.buttoncontainer}>
                    <button className={styles.btn1}>
                      {lan.commontext.registerinterest}
                    </button>
                    <button className={styles.btn2}>
                      {lan.commontext.download} {lan.commontext.brochure}
                      <span>
                        <BsArrowDownCircle />
                      </span>
                    </button>
                  </div>
                </motion.div>
              )}
              <motion.div className={styles.slideContainer} layout="position">
                <SliderComponent
                  animation={starterAnimation}
                  carouselRef={carouselRef}
                  setNewComponentWidth={setNewComponentWidth}
                  containerWidth={containerWidth}
                  itemRef={itemRef}
                  setItemWidth={setItemWidth}
                />
                <div
                  className={`${styles.interiorcontrols} ${styles.mobileControls}`}>
                  <IoChevronBackCircleOutline
                    onClick={() => carouselHandler2("-")}
                  />
                  <IoChevronForwardCircleOutline
                    onClick={() => carouselHandler2("+")}
                  />
                </div>
              </motion.div>
            </LayoutGroup>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default InteriorFeatures;
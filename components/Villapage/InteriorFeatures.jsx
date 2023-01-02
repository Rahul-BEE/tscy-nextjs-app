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
import Image from "next/image";
import Link from "next/link";
const InteriorFeatures = ({ data }) => {
  const lan = useLanguage();
  const [open, setOpen] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(100);
  const [scrolledWidth, setScrolledWidth] = useState(0);
  const [controlsColor, setControlsColor] = useState(
    lan.language === 1 ? [0.5, 1] : [1, 0.5]
  );
  const carouselRef = useRef(null);
  const itemRef = useRef(null);

  const starterAnimation = useAnimation();

  const setNewComponentWidth = useCallback(() => {
    setContainerWidth(
      carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
    );
    setItemWidth(
      carouselRef.current?.scrollWidth / data?.interior.length - 2.5
    );
  }, [carouselRef, data, scrolledWidth]);

  useEffect(() => {
    setNewComponentWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewComponentWidth);
    }
    return () => {
      window.removeEventListener("resize", setNewComponentWidth);
    };
  }, [carouselRef.current, setNewComponentWidth, lan.language]);
  const carouselHandler = (id) => {
    if (lan.language === 1) {
      if (
        id === "+" &&
        scrolledWidth <
          carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth &&
        open
      ) {
        setControlsColor([1, 1]);
        setScrolledWidth((prev) => prev + itemWidth);
        starterAnimation.start({
          x: -(scrolledWidth + itemWidth),
        });
      } else if (id === "-" && scrolledWidth > 0) {
        setControlsColor([1, 1]);
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
    } else {
      if (id === "+" && scrolledWidth < 0) {
        setControlsColor([1, 1]);
        setScrolledWidth((prev) => prev + itemWidth);
        starterAnimation.start({
          x: -(scrolledWidth + itemWidth),
        });
      } else if (
        id === "-" &&
        scrolledWidth >
          carouselRef.current?.clientWidth - carouselRef.current?.scrollWidth &&
        open
      ) {
        setControlsColor([1, 1]);
        setScrolledWidth((prev) => prev - itemWidth);
        starterAnimation.start({
          x: -scrolledWidth + itemWidth,
        });
      } else if (scrolledWidth === 0 && id === "+") {
        setControlsColor([1, 0.5]);
        setOpen(false);
      } else if (scrolledWidth === 0 && id === "-") {
        setOpen(true);
        setControlsColor([1, 1]);
      } else {
        setControlsColor([0.5, 1]);
        return;
      }
    }
  };
  const carouselHandler2 = (id) => {
    if (lan.language === 1) {
      if (
        id === "+" &&
        scrolledWidth <
          carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
      ) {
        setScrolledWidth(
          (prev) => Number(prev.toFixed(2)) + Number(itemWidth.toFixed(2))
        );
        setControlsColor([1, 1]);
        starterAnimation.start({
          x: -(scrolledWidth + itemWidth),
        });
      } else if (id === "-" && scrolledWidth > 5) {
        setControlsColor([1, 1]);
        setScrolledWidth(
          (prev) => Number(prev.toFixed(2)) - Number(itemWidth.toFixed(2))
        );
        starterAnimation.start({
          x: -scrolledWidth + itemWidth,
        });
      } else if (parseInt(scrolledWidth) <= 2 && id === "-") {
        setControlsColor([0.5, 1]);
        return;
      } else {
        setControlsColor([1, 0.5]);
        return;
      }
    } else {
      if (id === "+" && scrolledWidth < 0) {
        setScrolledWidth(
          (prev) => Number(prev.toFixed(2)) + Number(itemWidth.toFixed(2))
        );
        setControlsColor([1, 1]);
        starterAnimation.start({
          x: -(scrolledWidth + itemWidth),
        });
      } else if (
        id === "-" &&
        Math.abs(scrolledWidth) <
          carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth
      ) {
        setScrolledWidth(
          (prev) => Number(prev.toFixed(2)) - Number(itemWidth.toFixed(2))
        );
        setControlsColor([1, 1]);
        starterAnimation.start({
          x: -scrolledWidth + itemWidth,
        });
      } else if (
        Math.abs(scrolledWidth) >
          carouselRef.current?.scrollWidth - carouselRef.current?.clientWidth &&
        id === "-"
      ) {
        setControlsColor([0.5, 1]);
        return;
      } else {
        setControlsColor([1, 0.5]);
        return;
      }
    }
  };

  return (
    <div className={styles.interiorfeaturesmain}>
      <div className={styles.interiorHeader}>
        <div>
          {/* <p className={`${styles.subHeading} sectionsubHeading`}>
            {lan.commontext.caption}
          </p> */}
          <h1 className={"sectionmainHeading"}>
            {lan.commontext.interiorHeading}
          </h1>
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
                    <Link href="/contact-us" passHref>
                      <motion.button
                        className={styles.btn1}
                        whileHover={{
                          scale: 1.05,
                        }}>
                        {lan.commontext.registerinterest}
                      </motion.button>
                    </Link>
                    <Link href="https://thesustainablecity-yiti.com/brochure/Yiti Brochure.pdf">
                      <a target="_blank" rel="noreferrer">
                        <button className={styles.btn2}>
                          {lan.commontext.download} {lan.commontext.brochure}
                          <span>
                            <BsArrowDownCircle />
                          </span>
                        </button>
                      </a>
                    </Link>
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
                    style={{
                      opacity: controlsColor[0],
                    }}
                  />
                  <IoChevronForwardCircleOutline
                    onClick={() => carouselHandler2("+")}
                    style={{
                      opacity: controlsColor[1],
                    }}
                  />
                </div>
              </motion.div>
            </LayoutGroup>
          </AnimatePresence>
        </div>
      )}
      {!open && (
        <div className={styles.polygondiv}>
          <Image
            src="/Images/villas/interiorfeaurepolygon.png"
            layout="fill"
            alt="Sustainable city Polygon"
          />
        </div>
      )}
    </div>
  );
};

export default InteriorFeatures;

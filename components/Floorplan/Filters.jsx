import { useEffect, useState } from "react";
import useLanguage from "../../utils/useLanguage";
import { motion, useAnimation } from "framer-motion";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";
import styles from "../../styles/floorplan.module.scss";
import { useRef } from "react";
import { useCallback } from "react";
const Filters = ({ filterId, setFilterId, setText }) => {
  const lan = useLanguage();
  const [showLeft, setShowLeft] = useState(false);
  const [data, _] = useState(lan.villaplansection);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [scrolledWIdth, setScrolledWidth] = useState(0);
  const innerRow = useRef(null);
  const filterRowRef = useRef(null);

  const move = useAnimation();
  const moveFilter = (dir) => {
    if (dir === 1) {
      if (scrolledWIdth < sliderWidth) {
        setScrolledWidth((prev) => prev + 360);
        move.start({
          x: -(scrolledWIdth + 360),
        });
      } else {
        setShowLeft(true);
      }
    } else {
      if (scrolledWIdth !== 0) {
        setScrolledWidth((prev) => prev - 360);
        move.start({
          x: -scrolledWIdth + 360,
        });
      } else {
        setShowLeft(false);
      }
    }
  };
  const setNewSliderInnerWidth = useCallback(() => {
    console.log(
      innerRow.current?.getBoundingClientRect().width,
      filterRowRef.current?.getBoundingClientRect().width,
      innerRow.current?.getBoundingClientRect().width /
        filterRowRef.current?.getBoundingClientRect().width
    );
    setSliderWidth(
      innerRow.current?.getBoundingClientRect().width -
        filterRowRef.current?.getBoundingClientRect().width
    );
  }, [innerRow]);

  useEffect(() => {
    setNewSliderInnerWidth();
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewSliderInnerWidth);
    }

    return () => {
      window.removeEventListener("resize", setNewSliderInnerWidth);
    };
  }, [setNewSliderInnerWidth, innerRow]);

  const clickHandler = (index) => {
    setFilterId(index);

    setText(data.filters[index].headingText);
  };

  return (
    <div className={styles.filterrow} ref={filterRowRef}>
      <motion.div
        className={styles.filterinnerrow}
        drag="x"
        animate={move}
        dragMomentum={0.1}
        dragElastic={false}
        dragConstraints={{
          right: 0,
          left: -1076,
        }}
        ref={innerRow}>
        {data.filters.map((item, index) => {
          return (
            <motion.div
              key={`${item.key}_${index}`}
              className={`${styles.filterItem} ${
                index === filterId ? styles.selectedFilterItem : ""
              }`}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              onClick={() => clickHandler(index)}>
              {item.icon}
              <p>{item.subtext}</p>
              <h4>{item.text}</h4>
            </motion.div>
          );
        })}
      </motion.div>
      <div className={styles.filtercontrols} data-arrow={showLeft}>
        <div
          data-control="left"
          className={styles.arrow}
          style={{
            display: showLeft ? "flex" : "none",
          }}
          onClick={() => moveFilter(-1)}>
          <IoChevronBackCircleOutline />
        </div>
        <div
          className={styles.arrow}
          style={{
            display: showLeft ? "none" : "flex",
          }}
          onClick={() => moveFilter(1)}>
          <IoChevronForwardCircleOutline />
        </div>
      </div>
    </div>
  );
};

export default Filters;

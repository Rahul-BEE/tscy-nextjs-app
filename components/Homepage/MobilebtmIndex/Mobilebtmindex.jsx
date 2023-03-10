import React, { useCallback } from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../../utils/useLanguage";
import { useEffect } from "react";
import { useRef } from "react";
const Mobilebtmindex = ({ setShowDetail, setItem, setTrack, setDesktop }) => {
  const lan = useLanguage();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [innerwidth, setInnerWidth] = useState(0);
  const [data, setData] = useState(lan.masterplan.markers);
  const innerRow = useRef(null);

  const clickTabHandler = (id) => {
    if (id === 0) {
      setSelectedTab(0);
      setData(lan.masterplan.markers);
    } else if (id === 1) {
      setData(lan.tracks);
      setSelectedTab(1);
    }
    setNewSliderInnerWidth();
  };

  const setNewSliderInnerWidth = useCallback(() => {
    setInnerWidth(
      innerRow.current?.scrollWidth - innerRow.current?.clientWidth
    );
  }, [innerRow, selectedTab]);

  useEffect(() => {
    setNewSliderInnerWidth();

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 728);
      window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 728);
        window.addEventListener("resize", setNewSliderInnerWidth);
      });
    }
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 728);
        window.addEventListener("resize", setNewSliderInnerWidth);
      });
    };
  }, [innerRow, setNewSliderInnerWidth]);

  const clickHandler = (id) => {
    setDesktop(false);
    setShowDetail(true);
    if (id < 16) {
      setItem(id);
      setTrack(null);
    } else {
      setItem(null);
      setTrack(id);
    }
  };
  return (
    <div className={styles.mobilebtmindex}>
      <nav>
        <ul>
          <li
            key={"componentstab"}
            className={selectedTab === 0 ? styles.selectedTab : ""}
            onClick={() => {
              clickTabHandler(0);
            }}>
            {lan.commontext.components}
            {selectedTab === 0 && (
              <motion.div className={styles.underline} layoutId="underline" />
            )}
          </li>
          <li
            key={"trackstab"}
            className={selectedTab === 1 ? styles.selectedTab : ""}
            onClick={() => {
              clickTabHandler(1);
            }}>
            {lan.commontext.tracks}
            {selectedTab === 1 && (
              <motion.div className={styles.underline} layoutId="underline" />
            )}
          </li>
        </ul>
      </nav>
      <div className={styles.mobilebtmcontent}>
        <AnimatePresence mode="wait" initial={false}>
          {data && (
            <motion.div
              id="dragContainer"
              onLoad={setNewSliderInnerWidth}
              className={styles.mobilebtmcontentinner}
              data-index={selectedTab}
              drag="x"
              ref={innerRow}
              dragListener={isMobile}
              dragConstraints={
                lan.language === 1
                  ? {
                      right: 0,
                      left: -innerwidth - 20,
                    }
                  : {
                      left: 0,
                      right: innerwidth + 20,
                    }
              }
              key={`${selectedTab}_dragDiv`}>
              {data.map((item, index) => {
                return (
                  <motion.p
                    key={index}
                    className={styles.normalItem}
                    onClick={() => clickHandler(item.id)}
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeIn",
                    }}>
                    {item.name}
                  </motion.p>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Mobilebtmindex;

import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../../utils/useLanguage";
import { useEffect } from "react";
const Mobilebtmindex = ({ setShowDetail, setItem, setTrack, setDesktop }) => {
  const lan = useLanguage();
  const [selectedTab, setSelectedTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [innerwidth, setInnerWidth] = useState(0);
  const [data, setData] = useState(lan.masterplan.markers);
  useEffect(() => {
    if (selectedTab === 0) {
      setData(lan.masterplan.markers);
    } else if (selectedTab === 1) {
      setData(lan.tracks);
    }
    // setInnerWidthFunction();
  }, [selectedTab]);

  useEffect(() => {
    setInnerWidth(
      document.getElementById("dragContainer").clientWidth -
        window.innerWidth / 2
    );
  }, [data]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth < 728);
    }
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < 728);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < 728);
      });
    };
  }, []);

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
              setSelectedTab(0);
            }}>
            {lan.commontext.components}
            {selectedTab === 0 ? (
              <motion.div className={styles.underline} layoutId="underline" />
            ) : null}
          </li>
          <li
            key={"trackstab"}
            className={selectedTab === 1 ? styles.selectedTab : ""}
            onClick={() => {
              setSelectedTab(1);
            }}>
            {lan.commontext.tracks}
            {selectedTab === 1 ? (
              <motion.div className={styles.underline} layoutId="underline" />
            ) : null}
          </li>
        </ul>
      </nav>
      <div className={styles.mobilebtmcontent}>
        <AnimatePresence mode="wait" initial={false}>
          {data && (
            <motion.div
              id="dragContainer"
              className={styles.mobilebtmcontentinner}
              data-index={selectedTab}
              drag="x"
              dragListener={isMobile}
              dragConstraints={{
                right: 0,
                left: -innerwidth,
              }}
              key={`${selectedTab}_dragDiv`}>
              {data.map((item) => {
                return (
                  <motion.p
                    key={item.name}
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

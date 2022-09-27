import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import useLanguage from "../../../utils/useLanguage";
import { useEffect } from "react";
const Mobilebtmindex = () => {
  const lan = useLanguage();
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState(lan.masterplan.markers);

  useEffect(() => {
    if (selectedTab === 0) {
      setData(lan.masterplan.markers);
    } else if (selectedTab === 1) {
      setData(lan.tracks);
    }
  }, [selectedTab]);
  return (
    <div className={styles.mobilebtmindex}>
      <nav>
        <ul>
          <li
            key={"componentstab"}
            className={selectedTab === 0 ? styles.selectedTab : ""}
            onClick={() => setSelectedTab(0)}>
            {lan.commontext.components}
            {selectedTab === 0 ? (
              <motion.div className={styles.underline} layoutId="underline" />
            ) : null}
          </li>
          <li
            key={"trackstab"}
            className={selectedTab === 1 ? styles.selectedTab : ""}
            onClick={() => setSelectedTab(1)}>
            {lan.commontext.tracks}
            {selectedTab === 1 ? (
              <motion.div className={styles.underline} layoutId="underline" />
            ) : null}
          </li>
        </ul>
      </nav>
      <div className={styles.mobilebtmcontent}>
        <AnimatePresence mode="wait">
          {data && (
            <motion.div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
              }}
              key={
                selectedTab === 0
                  ? "componentmaster"
                  : selectedTab === 1
                  ? "tracksmaster"
                  : "empty"
              }
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2, staggerChildren: 0.1 }}>
              {data.map((item) => {
                return <p>{item.name}</p>;
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Mobilebtmindex;

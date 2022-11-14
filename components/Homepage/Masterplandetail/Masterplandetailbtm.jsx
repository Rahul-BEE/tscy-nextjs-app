import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";
import Link from "next/link";
const Masterplandetailbtm = ({ item, track, controlItem, setDirection }) => {
  const lan = useLanguage();
  const index = track ? track - 16 : item - 1;
  const [data, setData] = useState(track ? lan.tracks : lan.masterplan.markers);
  const length = data[index]?.slideimg.length;
  useEffect(() => {
    setData(track ? lan.tracks : lan.masterplan.markers);
  }, [item, track]);

  const navigating = (dir) => {
    if (dir === 1) {
      setDirection(1);
      if (track && index < lan.tracks.length - 1) {
        controlItem({ item: null, track: track + 1 });
      }
      if (item && index < lan.masterplan.markers.length - 1) {
        controlItem({ item: item + 1, track: null });
      }
    } else if (dir === -1) {
      setDirection(-1);
      if (track && index !== 0) {
        controlItem({ item: null, track: track - 1 });
      }
      if (item && index !== 0) {
        controlItem({ item: item - 1, track: null });
      }
    }
  };
  return (
    <div className={`${styles.mobilebtmindex} ${styles.mobilebtmdetailsindex}`}>
      <>
        <div
          style={{
            width: "100%",
            position: "relative",
            textAlign: "center",
          }}>
          <h4 className={styles.btmindexmobileheading}>{data[index].name}</h4>
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            <p
              className={styles.nextprevcontrol}
              style={{
                opacity: index <= 0 ? 0 : 1,
              }}
              onClick={() => navigating(-1)}>
              <FiChevronLeft color="#058DA6" />{" "}
              <span>{lan.commontext.prev}</span>
            </p>

            <p
              className={styles.nextprevcontrol2}
              style={{
                opacity: index !== data.length - 1 ? 1 : 0,
              }}
              onClick={() => navigating(1)}>
              <span>{lan.commontext.next}</span>{" "}
              <FiChevronRight color="#058DA6" />
            </p>
          </div>
        </div>
        <p>{data[index].description}</p>

        {data[index].details && (
          <div className={styles.itemdetailsbtm}>
            {Object.entries(data[index].details).map((value, i) => (
              <div key={`${i}_values`} className={styles.detailItem}>
                <h6 style={{ paddingTop: "10px" }}>{value[0]}</h6>
                {data[index].ground ? (
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      paddingTop: "10px",
                      gap: "0.8rem",
                    }}>
                    {value[1].map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                ) : (
                  <p style={{ paddingTop: "10px" }}>{value[1]}</p>
                )}
              </div>
            ))}
          </div>
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}>
          {data[index].villadetails && (
            <Link href={"/floorplan"} passHref>
              <motion.button className={styles.seevillabtn}>
                {lan.commontext.seevillas}
              </motion.button>
            </Link>
          )}
        </div>
      </>
    </div>
  );
};

export default Masterplandetailbtm;

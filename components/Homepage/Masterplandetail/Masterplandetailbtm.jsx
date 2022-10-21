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
  const [index, setIndex] = useState(track ? track - 16 : item - 1);
  const [data, setData] = useState(track ? lan.tracks : lan.masterplan.markers);
  const length = data[index]?.slideimg.length;
  useEffect(() => {
    setData(track ? lan.tracks : lan.masterplan.markers);
    setIndex(track ? track - 16 : item - 1);
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
          <p className={styles.nextprevcontrol} onClick={() => navigating(-1)}>
            <FiChevronLeft color="#058DA6" /> <span>{lan.commontext.prev}</span>
          </p>
          <p className={styles.nextprevcontrol2} onClick={() => navigating(1)}>
            <span>{lan.commontext.next}</span>{" "}
            <FiChevronRight color="#058DA6" />
          </p>
        </div>
      </div>
      <p>{data[index].description}</p>
      {data[index].villadetails ? (
        <div className={styles.villadetailsbtm}>
          <h4>{lan.commontext.villatypes}</h4>
          <div className={styles.villaitem}>
            {data[index].villatype.map((villa, index) => (
              <div key={index}>
                <h5>{villa.type}</h5>
                <p>
                  {villa.noofbedrooms} <span>{lan.commontext.bedroom}</span>{" "}
                </p>
              </div>
            ))}
          </div>
          <Link href={"/floorplan"} passHref>
            <motion.button className={styles.seevillabtn}>
              {lan.commontext.seevillas}
            </motion.button>
          </Link>
        </div>
      ) : (
        <div className={styles.itemdetailsbtm}>
          {Object.entries(data[index].contact).map((value, index) => (
            <div key={`${index}_values`} className={styles.detailItem}>
              <h6>{value[0]}</h6>
              <p>{value[1]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Masterplandetailbtm;

import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
const Masterplandetailbtm = ({ item, track, controlItem }) => {
  const lan = useLanguage();
  const [index, setIndex] = useState(track ? track - 16 : item - 1);
  const [direction, setDirection] = useState(1);
  const [data, _] = useState(track ? lan.tracks : lan.masterplan.markers);
  const length = data[index]?.slideimg.length;
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
          <p
            className={styles.nextprevcontrol}
            onClick={() => controlItem(item + 1)}>
            <FiChevronLeft color="#058DA6" /> <span>{lan.commontext.prev}</span>
          </p>
          <p
            className={styles.nextprevcontrol2}
            onClick={() => controlItem(item - 1)}>
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
          <motion.button className={styles.seevillabtn}>
            {lan.commontext.seevillas}
          </motion.button>
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

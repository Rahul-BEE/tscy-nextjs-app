import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { motion } from "framer-motion";
const Masterplandetailbtm = ({ item, track }) => {
  const lan = useLanguage();
  const [index, setIndex] = useState(track ? track - 16 : item - 1);
  const [direction, setDirection] = useState(1);

  console.log(item, track, lan.masterplan.markers);
  const [data, setData] = useState(track ? lan.tracks : lan.masterplan.markers);
  const length = data[index]?.slideimg.length;
  return (
    <div className={`${styles.mobilebtmindex} ${styles.mobilebtmdetailsindex}`}>
      <h4>{data[index].name}</h4>
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
          <motion.button
            style={{
              backgroundColor: "#058DA6",
            }}>
            {lan.commontext.seevillas}
          </motion.button>
        </div>
      ) : (
        <div className={styles.itemdetailsbtm}>
          {Object.entries(data[index].contact).map((value, index) => (
            <p key={`${index}_values`}>
              {value[0]}
              <span>{value[1]}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Masterplandetailbtm;

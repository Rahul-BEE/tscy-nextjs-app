import React from "react";
import { useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import { motion } from "framer-motion";
const Masterplandetailbtm = ({ item }) => {
  const lan = useLanguage();
  const [data, setData] = useState(
    item < 16 ? lan.masterplan.markers[item - 1] : lan.tracks[item - 16]
  );
  return (
    <div className={`${styles.mobilebtmindex} ${styles.mobilebtmdetailsindex}`}>
      <h4>{data.name}</h4>
      <p>{data.description}</p>
      {data.villadetails ? (
        <div className={styles.villadetailsbtm}>
          <h4>{lan.commontext.villatypes}</h4>
          <div className={styles.villaitem}>
            {data.villatype.map((villa, index) => (
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
          {Object.entries(data.details).map((value, index) => (
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

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";
import { motion } from "framer-motion";
const MasterplanPopup = ({ item, offsetTop, offsetLeft, setShow }) => {
  const lan = useLanguage();
  const ref = useRef(null);
  const [data, setData] = useState(undefined);
  useEffect(() => {
    setData(lan.masterplan.markers[item]);
    window.addEventListener("resize", () => setShow(false));
    return () => {
      window.removeEventListener("resize", () => setShow(false));
    };
  }, [item]);
  return (
    <div className={styles.masterplanpopup} key={`${item}_masterplanpop`}>
      {console.log(`${item}_masterplanpop`)}
      {data && (
        <motion.div
          className={styles.popupinnercard}
          ref={ref}
          style={{
            top: Number(offsetTop),
            left: Number(offsetLeft),
            position: "relative",
          }}
          data-position={item > 9 ? "top" : ""}>
          <div
            className={`${item <= 9 ? styles.pentagontop : styles.normaltop}`}>
            hi
            {/* <Image src={data.icon} width="60" height="65" layout="responsive" /> */}
          </div>
          <div className={styles.contentbox}>
            <h3>{data.name}</h3>
            <h5>{lan.commontext.description}</h5>
            <p className={styles.description}>{data.description}</p>
            <h5>{lan.commontext.details}</h5>
            <div className={styles.detailsContainer}>
              <div className={styles.col1}>
                <h6>{Object.keys(data.details)[0]}</h6>
                <p>{Object.values(data.details)[0]}</p>
              </div>
              <div className={styles.col2}>
                <h6>{Object.keys(data.details)[1]}</h6>
                <p>{Object.values(data.details)[1]}</p>
              </div>
              <div className={styles.col3}>
                <h6>{Object.keys(data.details)[2]}</h6>
                <p>{Object.values(data.details)[2]}</p>
              </div>
            </div>
          </div>
          <div
            className={`${item > 9 ? styles.pentagontop : styles.normaltop}`}>
            <button>{lan.commontext.seedetails}</button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MasterplanPopup;

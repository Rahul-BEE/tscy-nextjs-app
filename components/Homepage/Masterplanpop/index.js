import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";
import { motion } from "framer-motion";
const MasterplanPopup = ({ item, offsetTop, offsetLeft, setShow }) => {
  const lan = useLanguage();
  const ref = useRef(null);
  const [width, setWidth] = useState(130);
  const [data, _] = useState(lan.masterplan.markers[item]);

  // const setNewWidth = useCallback(() => {
  //   console.log(ref.current.clientWidth);
  //   setWidth(ref.current.clientWidth / 2);
  // }, [ref.current]);
  // useEffect(() => {
  //   window.addEventListener("resize", setNewWidth);
  //   return () => {
  //     window.removeEventListener("resize", setNewWidth);
  //   };
  // }, [ref]);

  useEffect(() => {
    setWidth(ref.current.clientWidth / 2);
  }, [ref.current]);
  return (
    <div className={styles.masterplanpopup} key={`${item}_masterplanpop`}>
      {data && (
        <motion.div
          onMouseLeave={() => setShow(false)}
          className={styles.popupinnercard}
          ref={ref}
          style={{
            top: Number(offsetLeft),
            left: Number(offsetTop - width),
            position: "relative",
          }}
          data-position={item > 9 ? "top" : ""}>
          <Image src={data.icon} width="60" height="65" layout="intrinsic" />
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
          <button>{lan.commontext.seedetails}</button>
        </motion.div>
      )}
    </div>
  );
};

export default MasterplanPopup;

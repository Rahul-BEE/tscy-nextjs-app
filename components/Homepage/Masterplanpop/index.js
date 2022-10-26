import { useCallback, useEffect, useRef, useState } from "react";
import styles from "../../../styles/masterplan.module.scss";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiOutlineArrowSmRight } from "react-icons/hi";
const MasterplanPopup = ({
  item,
  offsetTop,
  offsetLeft,
  setShow,
  w,
  h,
  track,
  setShowDetail,
  getPath,
}) => {
  const lan = useLanguage();
  const ref = useRef(null);
  const [data, setData] = useState(undefined);
  useEffect(() => {
    if (track) {
      setData(lan.tracks[track - 16]);
    } else {
      setData(lan.masterplan.markers[item]);
    }
    window.addEventListener("resize", () => setShow(false));
    return () => {
      window.removeEventListener("resize", () => setShow(false));
    };
  }, [item, track]);
  return (
    <div className={styles.masterplanpopup} key={`${item}_masterplanpop`}>
      {data !== undefined && (
        <>
          <motion.div
            className={styles.popupinnercard}
            ref={ref}
            style={{
              top: Number(offsetTop),
              left: Number(offsetLeft),
              position: "relative",
            }}
            data-type={track ? "track" : ""}
            data-pos={
              track
                ? "rt"
                : item <= 4
                ? "lt"
                : item > 4 && item <= 8
                ? "rt"
                : "br"
            }>
            <div className={styles.popupheading}>
              <div className={styles.popiconcontainer}>{data.icon}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "0.5rem",
                  flexDirection: "column",
                  height: 65,
                }}>
                <h3>{data.name}</h3>
                {/* <h5>{lan.commontext.description}</h5> */}
              </div>
            </div>
            <p className={styles.description}>{data.description}</p>
            {track && data.details && (
              <div className={styles.contentbox}>
                <h5>{lan.commontext.details}</h5>
                <div className={styles.detailsContainer}>
                  <div className={styles.col1}>
                    <h6>
                      {Object.keys(data.details)[0]}
                      <span>{Object.values(data.details)[0]}</span>
                    </h6>
                  </div>
                  <div className={styles.col2}>
                    <h6>
                      {Object.keys(data.details)[1]}
                      <span>{Object.values(data.details)[1]}</span>
                    </h6>
                  </div>
                  <div className={styles.col3}>
                    <h6>
                      {Object.keys(data.details)[2]}
                      <span>{Object.values(data.details)[2]}</span>
                    </h6>
                  </div>
                </div>
              </div>
            )}
            {!track && (
              <button
                className={styles.popupcardbtn}
                onClick={() => setShowDetail(true)}>
                <HiOutlineArrowSmRight />
              </button>
            )}
          </motion.div>

          <svg
            style={{
              width: w + 5,
              height: h + 5,
              top: Number(offsetTop - h / 2),
              left: Number(offsetLeft - w / 2),
              cursor: "pointer",
              pointerEvents: "all",
            }}
            onClick={() => getPath({ id: item + 1 })}
            viewBox="0 0 46 46"
            fill="none"
            id="popupmarker"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
              style={{
                scale: 1.5,
              }}
              d="M36.6781 27.8245L36.6781 17.598C36.6781 15.9151 35.7803 14.36 34.3228 13.5185L25.4664 8.40527C24.0089 7.5638 22.2133 7.5638 20.7558 8.40527L11.8994 13.5185C10.442 14.36 9.54412 15.9151 9.54412 17.598L9.54412 27.8245C9.54412 29.5074 10.442 31.0625 11.8994 31.904L20.7558 37.0172C22.2133 37.8587 24.0089 37.8587 25.4664 37.0172L34.3228 31.904C35.7803 31.0625 36.6781 29.5074 36.6781 27.8245Z"
              fill="#058DA6"
              stroke="white"
              strokeWidth="1.66257"
            />
            <motion.path
              style={{
                scale: 1.5,
              }}
              d="M33.089 27.8833L33.089 17.5694C33.089 17.1956 32.8895 16.8502 32.5658 16.6633L23.6337 11.5063C23.31 11.3194 22.9111 11.3194 22.5874 11.5063L13.6552 16.6633C13.3315 16.8502 13.1321 17.1956 13.1321 17.5694L13.1321 27.8833C13.1321 28.2571 13.3315 28.6025 13.6553 28.7894L22.5874 33.9464C22.9111 34.1333 23.31 34.1333 23.6337 33.9464L32.5658 28.7894C32.8895 28.6025 33.089 28.2571 33.089 27.8833Z"
              fill="white"
              stroke="white"
              strokeWidth="2.81761"
            />
            <rect
              width="13"
              height="3"
              rx="0.875"
              transform="matrix(0.701677 0.712495 -0.701677 0.712495 19.6399 17.7534)"
              fill="#058DA6"
            />
            <rect
              width="13"
              height="3"
              rx="0.875"
              transform="matrix(-0.701677 0.712495 0.701677 0.712495 26.3062 17.7534)"
              fill="#058DA6"
            />
          </svg>
        </>
      )}
    </div>
  );
};

export default MasterplanPopup;

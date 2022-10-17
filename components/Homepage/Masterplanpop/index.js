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
            }
          >
            <div className={styles.popupheading}>
              <Image src={data.icon} width="60" height="65" alt={data.name} />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  gap: "0.5rem",
                  flexDirection: "column",
                  height: 65,
                }}
              >
                <h3>{data.name}</h3>
                <h5>{lan.commontext.description}</h5>
              </div>
            </div>
            <p className={styles.description}>{data.description}</p>
            {track && (
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
            <button
              className={styles.popupcardbtn}
              onClick={() => setShowDetail(true)}
            >
              <HiOutlineArrowSmRight />
            </button>
          </motion.div>

          <svg
            style={{
              width: w,
              height: h,
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
              stroke-width="1.66257"
            />
            <motion.path
              style={{
                scale: 1.5,
              }}
              d="M33.089 27.8833L33.089 17.5694C33.089 17.1956 32.8895 16.8502 32.5658 16.6633L23.6337 11.5063C23.31 11.3194 22.9111 11.3194 22.5874 11.5063L13.6552 16.6633C13.3315 16.8502 13.1321 17.1956 13.1321 17.5694L13.1321 27.8833C13.1321 28.2571 13.3315 28.6025 13.6553 28.7894L22.5874 33.9464C22.9111 34.1333 23.31 34.1333 23.6337 33.9464L32.5658 28.7894C32.8895 28.6025 33.089 28.2571 33.089 27.8833Z"
              fill="white"
              stroke="white"
              stroke-width="2.81761"
            />
            <rect
              width="11.8759"
              height="1.75"
              rx="0.875"
              transform="matrix(0.701677 0.712495 -0.701677 0.712495 19.6399 17.7534)"
              fill="#058DA6"
            />
            <rect
              width="11.8759"
              height="1.75"
              rx="0.875"
              transform="matrix(-0.701677 0.712495 0.701677 0.712495 26.3062 17.7534)"
              fill="#058DA6"
            />
          </svg>

          {/* <svg
            style={{
              width: w,
              height: h,
              top: Number(offsetTop - h / 2),
              left: Number(offsetLeft - w / 2),
              cursor: "pointer",
              pointerEvents: "all",
            }}
            viewBox="0 0 65 65"
            fill="none"
            id="popupmarker"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => getPath({ id: item + 1 })}
          >
            <motion.path
              style={{
                scale: 1.02,
              }}
              d="M27.9076 4.7933L10.9579 14.5792C8.12731 16.2135 6.38359 19.2337 6.38359 22.5022V42.074C6.38359 45.3425 8.12731 48.3627 10.9579 49.997L27.9076 59.7829C30.7382 61.4171 34.2257 61.4171 37.0563 59.7829L54.006 49.997C56.8366 48.3627 58.5803 45.3425 58.5803 42.074V22.5022C58.5803 19.2337 56.8366 16.2135 54.006 14.5792L37.0563 4.7933C34.2257 3.15905 30.7382 3.15905 27.9076 4.7933Z"
              fill="#058DA6"
              stroke="white"
              strokeWidth="3.22894"
            />
            <motion.path
              d="M27.9079 21.8617L25.7383 23.1142C22.9077 24.7485 21.164 27.7687 21.164 31.0372V33.5424C21.164 36.8109 22.9077 39.8311 25.7383 41.4653L27.9079 42.7179C30.7385 44.3521 34.2259 44.3521 37.0565 42.7179L39.226 41.4653C42.0566 39.8311 43.8004 36.8109 43.8004 33.5424V31.0372C43.8004 27.7687 42.0566 24.7485 39.226 23.1142L37.0565 21.8617C34.2259 20.2274 30.7385 20.2274 27.9079 21.8617Z"
              fill="white"
              stroke="white"
              strokeWidth="3.22894"
            />
          </svg> */}
        </>
      )}
    </div>
  );
};

export default MasterplanPopup;

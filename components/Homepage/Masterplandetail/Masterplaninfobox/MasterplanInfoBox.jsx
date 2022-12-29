import React, { useEffect, useState } from "react";
import styles from "../../../../styles/masterplan.module.scss";
import useLanguage from "../../../../utils/useLanguage";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
const MasterplanInfoBox = ({
  item,
  track,
  slideIndex,
  setSlideIndex,
  updateIndex,
  setDirection,
}) => {
  const lan = useLanguage();
  const [index, setIndex] = useState(track ? track - 16 : item - 1);
  const [imgIndex, setImgIndex] = useState(slideIndex);
  const scrollAnimation = useAnimation();
  const [scrolledWIdth, setScrolledWidth] = useState(0);
  const [data, setData] = useState(track ? lan.tracks : lan.masterplan.markers);
  const controlHandler = (pos) => {
    if (pos === 1) {
      if (index !== 0) {
        setIndex((prev) => prev - 1);
        setDirection(-1);
        updateIndex(index - 1);
      }
    } else if (pos === -1) {
      if (index !== data.length - 1) {
        setIndex((prev) => prev + 1);
        setDirection(1);
        updateIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    setImgIndex(0);
    setSlideIndex(0);
  }, [index]);

  const slideImageClickHandler = ({ id }) => {
    if (id < slideIndex) {
      setDirection(-1);
    } else {
      setDirection(1);
    }

    setImgIndex(id);
    setSlideIndex(id);
  };
  const carouselHandler = async ({ dir }) => {
    if (lan.language === 1) {
      if (dir === 1) {
        if (slideIndex > data[index].slideimg.length - 2) {
          return;
        }
        setDirection(1);
        setImgIndex((prev) => prev + 1);
        setSlideIndex((prev) => prev + 1);
        if (data[index].slideimg.length > 3 && slideIndex > 1) {
          setScrolledWidth((prev) => prev + 136);
          await scrollAnimation.start({
            x: -(scrolledWIdth + 136),
          });
        }
      } else if (dir === -1) {
        if (slideIndex < 1) {
          return;
        }
        setDirection(-1);
        setImgIndex((prev) => prev - 1);
        setSlideIndex((prev) => prev - 1);
        if (data[index].slideimg.length > 3 && slideIndex > 2) {
          setScrolledWidth((prev) => prev - 136);
          await scrollAnimation.start({
            x: -scrolledWIdth + 136,
          });
        }
      }
    } else {
      if (dir === -1) {
        if (slideIndex > data[index].slideimg.length - 2) {
          return;
        }
        setDirection(1);
        setImgIndex((prev) => prev + 1);
        setSlideIndex((prev) => prev + 1);
        if (data[index].slideimg.length > 3 && slideIndex > 1) {
          setScrolledWidth((prev) => prev - 136);
          await scrollAnimation.start({
            x: -scrolledWIdth + 136,
          });
        }
      } else if (dir === 1) {
        if (slideIndex < 1) {
          return;
        }
        setDirection(-1);
        setImgIndex((prev) => prev - 1);
        setSlideIndex((prev) => prev - 1);
        if (data[index].slideimg.length > 3 && slideIndex > 2) {
          setScrolledWidth((prev) => prev + 136);
          await scrollAnimation.start({
            x: -(scrolledWIdth + 136),
          });
        }
      }
    }
  };
  return (
    <div className={styles.masterplaninfobox} key={track ? track : item}>
      {data[index] && (
        <div className={styles.masterplaninnerinfobox}>
          <div className={styles.infocontrols}>
            <div onClick={() => controlHandler(1)}>
              {index !== 0 && (
                <>
                  <GoChevronLeft />
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                    }}>
                    {lan.commontext.previousto} {data[index - 1].name}
                  </p>
                </>
              )}
            </div>
            <div onClick={() => controlHandler(-1)} data-order={2}>
              {index !== data.length - 1 && (
                <>
                  <p
                    style={{
                      padding: 0,
                      margin: 0,
                      textAlign: "end",
                    }}>
                    {lan.commontext.nextto} {data[index + 1].name}
                  </p>
                  <GoChevronRight />
                </>
              )}
            </div>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              paddingTop: "1rem",
            }}>
            <div className={styles.infoboxheadicon}>{data[index].icon}</div>
            <div className={styles.infoboxcontent}>
              <h3>{data[index].name}</h3>
              <div>
                {/* <h4
                  className={styles.subheading}
                  style={{
                    marginBottom: "0.5rem",
                  }}>
                  {lan.commontext.description}
                </h4> */}
                <p>{data[index].description}</p>
              </div>

              {data[index].details && (
                <div className={styles.itemdetailsbtm}>
                  <h4
                    className={styles.subheading}
                    style={{
                      marginBottom: "0.5rem",
                    }}>
                    {lan.commontext.details}
                  </h4>
                  <div className={styles.itemdetailsbtmdiv}>
                    {Object.entries(data[index].details).map((value, i) => (
                      <div
                        key={`${i}_values`}
                        style={{
                          flex: data[index].ground ? "0 0 100%" : "0 0 33%",
                        }}>
                        <h5>{value[0]}</h5>
                        {data[index].ground ? (
                          <div
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "flex-start",
                              justifyContent: "space-around",
                              paddingTop: "10px",
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
                  {data[index].villadetails && (
                    <Link href={"/floorplan"} passHref>
                      <button className={styles.seevillabtn}>
                        {lan.commontext.seevillas}
                      </button>
                    </Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <div
            style={{
              flex: 1,
              width: "100%",
              textAlign: "center",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}>
            <div style={{ width: "100%", textAlign: "center" }}>
              <h4 className={styles.subheading}>
                {lan.commontext.relatedimages}
              </h4>
              <div className={styles.infoboxslider}>
                <motion.div
                  className={styles.infoboxsliderinner}
                  animate={scrollAnimation}
                  data-align={
                    data[index].slideimg.length > 3 ? "start" : "center"
                  }>
                  {data[index].slideimg.map((item, index) => (
                    <div className={styles.infoslide} key={index}>
                      <Image
                        src={item}
                        width={75}
                        height={75}
                        layout="responsive"
                        objectFit="cover"
                        alt={"slideimages"}
                        onClick={() => slideImageClickHandler({ id: index })}
                      />
                      <div
                        className={styles.slideoverLay}
                        style={{
                          display: imgIndex === index ? "none" : "",
                          pointerEvents: "none",
                        }}
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
              {/* <div className={styles.slidenav}>
                <GoChevronLeft onClick={() => carouselHandler({ dir: -1 })} />
                <GoChevronRight onClick={() => carouselHandler({ dir: 1 })} />
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterplanInfoBox;

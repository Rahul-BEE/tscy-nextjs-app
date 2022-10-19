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
    setSlideIndex(imgIndex);
  }, [imgIndex]);

  const carouselHandler = ({ dir, id }) => {
    if (dir) {
      if (dir === 1 && imgIndex < data[index].slideimg.length - 1) {
        setScrolledWidth((prev) => prev + 120);
        setImgIndex((prev) => prev + 1);
        scrollAnimation.start({
          x: -(scrolledWIdth + 120),
        });
      } else if (dir === -1 && imgIndex !== 0) {
        setScrolledWidth((prev) => prev - 120);
        setImgIndex((prev) => prev - 1);
        scrollAnimation.start({
          x: -scrolledWIdth + 120,
        });
      }
    } else {
      setImgIndex(id);
    }
  };
  return (
    <div className={styles.masterplaninfobox}>
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

          <div className={styles.infoboxheadicon}>{data[index].icon}</div>
          <div className={styles.infoboxcontent}>
            <h3>{data[index].name}</h3>
            <div>
              <h4
                className={styles.subheading}
                style={{
                  marginBottom: "0.5rem",
                }}>
                {lan.commontext.description}
              </h4>
              <p>{data[index].description}</p>
            </div>
            {data[index].villadetails ? (
              <div className={styles.villadetailsbtm}>
                <h4 className={styles.subheading}>
                  {lan.commontext.villatypes}
                </h4>
                <div className={styles.villaitem}>
                  {data[index].villatype.map((villa, index) => (
                    <div key={`${index}_${villa.type}`}>
                      <h5>{villa.type}</h5>
                      <p>
                        {villa.noofbedrooms}{" "}
                        <span>{lan.commontext.bedroom}</span>{" "}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href={"/floorplan"} passHref>
                  <button className={styles.seevillabtn}>
                    {lan.commontext.seevillas}
                  </button>
                </Link>
              </div>
            ) : (
              <div className={styles.itemdetailsbtm}>
                <h4
                  className={styles.subheading}
                  style={{
                    marginBottom: "0.5rem",
                  }}>
                  {lan.commontext.details}
                </h4>
                <div className={styles.itemdetailsbtmdiv}>
                  {Object.entries(data[index].contact).map((value, index) => (
                    <div key={`${index}_values`}>
                      <h5>{value[0]}</h5>
                      <p>{value[1]}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <h4 className={styles.subheading}>{lan.commontext.relatedimages}</h4>
          <div className={styles.infoboxslider}>
            <motion.div
              className={styles.infoboxsliderinner}
              animate={scrollAnimation}
              data-align={data[index].slideimg.length > 3 ? "start" : "center"}>
              {data[index].slideimg.map((item, index) => (
                <div className={styles.infoslide} key={index}>
                  <Image
                    src={item}
                    width={120}
                    height={120}
                    layout="responsive"
                    objectFit="cover"
                    alt={"slideimages"}
                    onClick={() => carouselHandler({ id: index })}
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
          <div
            className={styles.slidenav}
            style={{
              display: data[index].slideimg.length > 3 ? "" : "none",
            }}>
            <GoChevronLeft
              onClick={() => carouselHandler({ dir: -1, index })}
            />
            <GoChevronRight
              onClick={() => carouselHandler({ dir: 1, index })}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterplanInfoBox;

import React, { useState } from "react";
import styles from "../../../../styles/masterplan.module.scss";
import useLanguage from "../../../../utils/useLanguage";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
const MasterplanInfoBox = ({
  item,
  track,
  slideIndex,
  setSlideIndex,
  updateIndex,
}) => {
  const lan = useLanguage();
  const [index, setIndex] = useState(track ? track - 16 : item - 1);

  const [data, setData] = useState(track ? lan.tracks : lan.masterplan.markers);
  const controlHandler = (pos) => {
    if (pos === 1) {
      if (index !== 0) {
        setIndex((prev) => prev - 1);
        updateIndex(index - 1);
      }
    } else if (pos === -1) {
      if (index !== data.length - 1) {
        setIndex((prev) => prev + 1);
        updateIndex(index + 1);
      }
    }
  };

  return (
    <div className={styles.masterplaninfobox}>
      {data[index] && (
        <>
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
                    }}>
                    {lan.commontext.nextto} {data[index + 1].name}
                  </p>
                  <GoChevronRight />
                </>
              )}
            </div>
          </div>

          <Image
            src={"/Images/masterplan/plaza.png"}
            width="85"
            height={"95"}
            layout="intrinsic"
          />
          <div className={styles.infoboxcontent}>
            <h3>{data[index].name}</h3>
            <div>
              <h4
                style={{
                  marginBottom: "0.5rem",
                }}>
                {lan.commontext.description}
              </h4>
              <p>{data[index].description}</p>
            </div>
            {data[index].villadetails ? (
              <div className={styles.villadetailsbtm}>
                <h4>{lan.commontext.villatypes}</h4>
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
                <motion.button
                  style={{
                    backgroundColor: "#058DA6",
                  }}>
                  {lan.commontext.seevillas}
                </motion.button>
              </div>
            ) : (
              <div className={styles.itemdetailsbtm}>
                <h4
                  style={{
                    marginBottom: "0.5rem",
                  }}>
                  {lan.commontext.contact} {lan.commontext.details}
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
          <h4>{lan.commontext.relatedimages}</h4>
          <div className={styles.infoboxslider}>
            {data[index].slideimg.map((item, index) => (
              <div className={styles.infoslide} key={index}>
                <Image
                  src={item}
                  width={120}
                  height={120}
                  layout="responsive"
                  objectFit="cover"
                  onClick={() => setSlideIndex(index)}
                />
                <div
                  className={styles.slideoverLay}
                  style={{
                    display: slideIndex === index ? "none" : "",
                    pointerEvents: "none",
                  }}
                />
              </div>
            ))}
          </div>
          {/* <div>
            <GoChevronLeft onClick={() => controlHandler(1)} />
            <GoChevronRight onClick={() => controlHandler(-1)} />
          </div> */}
        </>
      )}
    </div>
  );
};

export default MasterplanInfoBox;

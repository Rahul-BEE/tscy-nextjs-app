import React, { useState } from "react";
import styles from "../../../../styles/masterplan.module.scss";
import useLanguage from "../../../../utils/useLanguage";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Image from "next/image";
import { motion } from "framer-motion";
const MasterplanInfoBox = ({ item }) => {
  const lan = useLanguage();
  const [index, setIndex] = useState(item);
  const [data, setData] = useState(
    item < 16 ? lan.masterplan.markers[index - 1] : lan.tracks[index - 16]
  );
  return (
    <div className={styles.masterplaninfobox}>
      <div className={styles.infocontrols}>
        <div>
          <span
            style={{
              marginRight: "0.6rem",
            }}>
            <GoChevronLeft />
          </span>
          {lan.commontext.previousto}
        </div>
        <div>
          {lan.commontext.nextto}
          <span
            style={{
              marginLeft: "0.6rem",
            }}>
            <GoChevronRight />
          </span>
        </div>
      </div>
      {data && (
        <>
          <Image
            src={"/Images/masterplan/plaza.png"}
            width="85"
            height={"95"}
            layout="intrinsic"
          />
          <div className={styles.infoboxcontent}>
            <h3>{data.name}</h3>
            <h4>{lan.commontext.description}</h4>
            <p>{data.description}</p>
            {data.villadetails ? (
              <div className={styles.villadetailsbtm}>
                <h4>{lan.commontext.villatypes}</h4>
                <div className={styles.villaitem}>
                  {data.villatype.map((villa, index) => (
                    <div key={index}>
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
                <h4>
                  {lan.commontext.contact} {lan.commontext.details}
                </h4>
                <div className={styles.itemdetailsbtmdiv}>
                  {Object.entries(data.contact).map((value, index) => (
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
            {data.slideimg.map((item, index) => (
              <div className={styles.infoslide}>
                <Image
                  src={item}
                  width={120}
                  height={120}
                  layout="responsive"
                  objectFit="cover"
                />
                <div className={styles.slideoverLay} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MasterplanInfoBox;

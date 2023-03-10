import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/floorplan.module.scss";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { motion } from "framer-motion";
const VillaCards = ({ filterId }) => {
  const lan = useLanguage();
  const data = lan.villaplansection.villas;

  const [sortedArray, setSortedArray] = useState(data);

  useEffect(() => {
    if (filterId === 0) {
      setSortedArray(data);
    } else {
      let temp1 = data.find((item) => {
        if (item.keys.includes(filterId)) return item;
      });
      let temp2 = data.filter((item) => !item.keys.includes(filterId));
      setSortedArray([temp1, ...temp2]);
    }
  }, [filterId, data]);

  return (
    <div>
      <div className={styles.villacardsection}>
        {data.map((villa, index) => (
          <div
            className={styles.villacard}
            key={`${index}_villacards`}
            style={{
              filter:
                filterId === 0
                  ? "grayscale(0)"
                  : villa.keys.includes(filterId)
                  ? "grayscale(0)"
                  : "grayscale(1)",
            }}>
            <div
              style={{
                paddingBottom: "1rem",
              }}>
              <h5>
                {villa.bedrooms} {lan.commontext.bedroom}
              </h5>
              <h5>{villa.type}</h5>
              <p>{villa.location}</p>
              <Link href={`floorplan/${villa.slug}`} passHref>
                <motion.button
                  data-villa={villa.title}
                  className="floorplan_villacard_learnmorebtn"
                  whileHover={{
                    scale: 1.05,
                  }}>
                  {lan.commontext.learnmore}
                </motion.button>
              </Link>
            </div>
            <Image
              src={villa.mainImg}
              width={476}
              height={222}
              layout={"responsive"}
              objectFit="cover"
              alt={`${villa.bedrooms} ${lan.commontext.bedroom}`}
              placeholder="blur"
              blurDataURL="/Images/blur.png"
              objectPosition={index === 0 ? "20% 50%" : "50% 50%"}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.villacardsection} ${styles.villacardsectionmobile}`}>
        {sortedArray.map((villa, index) => (
          <div
            className={styles.villacard}
            key={`${index}_villacards`}
            style={{
              filter:
                filterId === 0
                  ? "grayscale(0)"
                  : villa.keys.includes(filterId)
                  ? "grayscale(0)"
                  : "grayscale(1)",
            }}>
            <div
              style={{
                paddingBottom: "1rem",
              }}>
              <h5>
                {villa.bedrooms} {lan.commontext.bedroom}
              </h5>
              <h5>{villa.type}</h5>
              <p>{villa.location}</p>
              <Link href={`floorplan/${villa.slug}`} passHref>
                <motion.button
                  data-villa={villa.title}
                  className="floorplan_villacard_learnmorebtn"
                  whileHover={{
                    scale: 1.05,
                  }}>
                  {lan.commontext.learnmore}
                </motion.button>
              </Link>
            </div>
            <Image
              src={villa.mainImg}
              width={476}
              height={222}
              layout={"responsive"}
              objectFit="cover"
              alt={`${villa.bedrooms} ${lan.commontext.bedroom}`}
              placeholder="blur"
              blurDataURL="/Images/blur.png"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillaCards;

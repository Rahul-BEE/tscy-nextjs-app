import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/floorplan.module.scss";
import useLanguage from "../../utils/useLanguage";
const VillaCards = ({ filterId }) => {
  const lan = useLanguage();
  const [data, _] = useState(lan.villaplansection.villas);

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
  }, [filterId]);

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
            <div>
              <h5>
                {villa.bedrooms} {lan.commontext.bedroom}
              </h5>
              <h5>{villa.type}</h5>
              <p>{villa.location}</p>
              <button>{lan.commontext.learnmore}</button>
            </div>
            <Image
              src={villa.mainImg}
              width={476}
              height={222}
              layout={"responsive"}
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
            <div>
              <h5>
                {villa.bedrooms} {lan.commontext.bedroom}
              </h5>
              <h5>{villa.type}</h5>
              <p>{villa.location}</p>
              <button>{lan.commontext.learnmore}</button>
            </div>
            <Image
              src={villa.mainImg}
              width={476}
              height={222}
              layout={"responsive"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VillaCards;

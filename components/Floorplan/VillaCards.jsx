import Image from "next/image";
import React from "react";
import { useState } from "react";
import styles from "../../styles/floorplan.module.scss";
import useLanguage from "../../utils/useLanguage";
const VillaCards = () => {
  const lan = useLanguage();
  const [index, setIndex] = useState(0);
  const [data, _] = useState(lan.villaplansection.villas);
  return (
    <div className={styles.villacardsection}>
      {data.map((villa, index) => (
        <div className={styles.villacard}>
          <div>
            <p>
              {villa.bedrooms} {lan.commontext.bedroom}
            </p>
            <p>{villa.type}</p>
            <p>{villa.location}</p>
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
  );
};

export default VillaCards;

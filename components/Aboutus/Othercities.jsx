import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";

const Othercities = () => {
  const lan = useLanguage();
  const data = lan.aboutus;
  return (
    <section className={styles.othercities}>
      <div className={styles.othercitiesinner}>
        <div>
          <p className={styles.heading}>{data.othercity.heading1}</p>
          <p className={styles.heading}>{data.othercity.heading2}</p>
        </div>
        <div className={styles.citycardcontainer}>
          <div className={styles.citycard}>
            <div className={styles.cardImg}>
              <Image
                src={"/Images/aboutus/scsharjah.png"}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                alt={data.othercity.city1}
              />
            </div>
            <p>{data.othercity.city1}</p>
            <p>{data.othercity.country}</p>
          </div>
          <div className={styles.citycard}>
            <div className={styles.cardImg}>
              <Image
                src={"/Images/aboutus/scdubai.png"}
                layout="responsive"
                width={600}
                height={400}
                objectFit="cover"
                alt={data.othercity.city2}
              />
            </div>
            <p>{data.othercity.city2}</p>
            <p>{data.othercity.country}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Othercities;

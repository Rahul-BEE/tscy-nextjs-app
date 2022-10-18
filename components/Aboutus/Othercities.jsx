import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
const Othercities = () => {
  const lan = useLanguage();
  const data = lan.aboutus;
  return (
    <section className={styles.othercities}>
      <div className={styles.othercitiesinner}>
        <div className={styles.topheading}>
          <p className={styles.heading}>{data.othercity.heading1}</p>
          <p className={styles.heading}>{data.othercity.heading2}</p>
        </div>
        <div className={styles.citycardcontainer}>
          <Link href={"https://www.sharjahsustainablecity.ae/"} passHref>
            <a target={"_blank"}>
              <div className={styles.citycard}>
                <motion.div
                  className={styles.cardImg}
                  whileHover={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                  }}>
                  <Image
                    src={"/Images/aboutus/scsharjah.png"}
                    layout="responsive"
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt={data.othercity.city1}
                  />
                </motion.div>
                <p>{data.othercity.city1}</p>
                <p>{data.othercity.country}</p>
              </div>
            </a>
          </Link>
          <Link href="https://www.thesustainablecity.ae/" passHref>
            <a target={"_blank"}>
              <div className={styles.citycard}>
                <motion.div
                  className={styles.cardImg}
                  whileHover={{
                    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.25)",
                  }}>
                  <Image
                    src={"/Images/aboutus/scdubai.png"}
                    layout="responsive"
                    width={600}
                    height={400}
                    objectFit="cover"
                    alt={data.othercity.city2}
                  />
                </motion.div>
                <p>{data.othercity.city2}</p>
                <p>{data.othercity.country}</p>
              </div>
            </a>
          </Link>
          <div className={styles.polygonpos}>
            <Image
              src={"/Images/aboutus/poly3.png"}
              width={300}
              height={226}
              layout="responsive"
              objectFit="contain"
              alt="diamond polygon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Othercities;

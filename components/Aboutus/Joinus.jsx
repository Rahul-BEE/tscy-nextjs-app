import Link from "next/link";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
import { BsArrowRightCircle } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
const Joinus = () => {
  const lan = useLanguage();
  const data = lan.aboutus;
  return (
    <section className={styles.joinus}>
      <div className={styles.joinusinner}>
        <h3>{data.joinus.title}</h3>
        <p>{data.joinus.desc}</p>
        <div className={styles.ctaContainer}>
          <Link href={"/contact-us"} passHref>
            <motion.button
              whileHover={{
                scale: 1.02,
              }}>
              {lan.commontext.contact}
            </motion.button>
          </Link>
          <Link href={"/contact-us"} passHref>
            <p>
              {lan.commontext.registerinterest}
              <span>
                <BsArrowRightCircle />
              </span>
            </p>
          </Link>
        </div>
        <div className={styles.layerblur} />
        <div className={styles.polygonpos}>
          <Image
            src={"/Images/aboutus/joinpolygon.png"}
            width={300}
            height={226}
            layout="responsive"
            alt="diamond polygon"
          />
        </div>
      </div>
    </section>
  );
};

export default Joinus;

import Link from "next/link";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
import { BsArrowRightCircle } from "react-icons/bs";
const Joinus = () => {
  const lan = useLanguage();
  const data = lan.aboutus;
  return (
    <section className={styles.joinus}>
      <div className={styles.joinusinner}>
        <h3>{data.joinus.title}</h3>
        <p>{data.joinus.desc}</p>
        <div className={styles.ctaContainer}>
          <Link href={"/contact"}>
            <button>{lan.commontext.contact}</button>
          </Link>
          <p>
            {lan.commontext.registerinterest}
            <span>
              <BsArrowRightCircle />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Joinus;

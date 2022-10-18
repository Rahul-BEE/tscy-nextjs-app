import Image from "next/image";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import Link from "next/link";
const Ourstory = () => {
  const lan = useLanguage();
  const data = lan.aboutus;
  return (
    <section className={styles.ourstory}>
      <div className={styles.ourstoryInner}>
        <div className={styles.heading}>
          <p className="sectionmainHeading">{data.title}</p>
        </div>
        <div className={styles.statistics}>
          {data.statistics.map((item, index) => (
            <div key={index} className={styles[`item${index}`]}>
              <h2>
                {item.data}
                {item.sub && <sub>{item.sub}</sub>}
              </h2>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.aboutusimgmaincontainer}>
          <div className={styles.aboutusmasterplan}>
            <Image
              src={"/Images/masterplanimage.png"}
              layout="fill"
              objectFit="cover"
              objectPosition="80%"
              priority
              alt="Sustainable City Yiti Masterplan"
            />
          </div>
          <div className={styles.polygoncontainer1}>
            <Image
              src={"/Images/aboutus/poly1.png"}
              layout="responsive"
              objectFit="contain"
              width={439}
              height={439}
              alt="Sustainable City Yiti Masterplan"
              priority
            />
          </div>
          <div className={styles.polygoncontainer2}>
            <Image
              src={"/Images/aboutus/poly2.png"}
              layout="responsive"
              width={439}
              height={439}
              objectFit="contain"
              alt="Sustainable City Yiti Masterplan"
              style={{
                left: "-100%",
              }}
              priority
            />
          </div>
        </div>
        <div className={styles.storycontent}>
          <h3>{lan.commontext.ourstory}</h3>
          <p>
            {data.story.p1}
            <Link href={"https://omran.om/"} passHref>
              <a target={"_blank"}>
            <span
             style={{
              textDecoration: "underline",
            }}
            >{data.story.s1}</span>
            </a>
            </Link>
            {data.story.p2}
            <Link href={"https://diamond-developers.ae/"} passHref>
              <a target={"_blank"}>
            <span
             style={{
              textDecoration: "underline",
            }}
            >{data.story.s2}</span>
            </a>
            </Link>
            {data.story.p3}
          </p>
          
          <p
            style={{
              marginTop: "2rem",
            }}
          >
            {data.story.p4} <span>{data.story.s3}</span> {data.story.p5}
            <Link href={"https://www.thesustainablecity.ae/"} passHref>
              <a target={"_blank"}>
            <span
              style={{
                textDecoration: "underline",
              }}
            >
              {data.story.s4}
            </span>
            </a>
            </Link>
            {data.story.p6}
          </p>
        </div>
        <div className={styles.partners}>
          <h5>{lan.partners.title2}</h5>
          <div className={styles.partnercontainer}>
            <Link href={"https://diamond-developers.ae/"} passHref>
              <a target={"_blank"}>
                <motion.div
                  className={styles.partneritem}
                  whileHover={{
                    boxShadow: "3px 5px 16px rgba(0, 0, 0, 0.1)",
                    border: "1px solid white",
                  }}
                >
                  {lan.partners.diamond}
                </motion.div>
              </a>
            </Link>
            <Link href={"https://www.omran.om/"} passHref>
              <a target={"_blank"}>
                <motion.div
                  className={styles.partneritem}
                  whileHover={{
                    boxShadow: "3px 5px 16px rgba(0, 0, 0, 0.1)",
                    border: "1px solid white",
                  }}
                >
                  {lan.partners.omran}
                </motion.div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;

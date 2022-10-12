import Image from "next/image";
import React from "react";
import styles from "../../styles/about.module.scss";
import useLanguage from "../../utils/useLanguage";
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
        <div className={styles.storycontent}>
          <h3>{lan.commontext.ourstory}</h3>
          <p>
            {data.story.p1}
            <span>{data.story.s}</span>
            {data.story.p2}
          </p>

          <p
            style={{
              marginTop: "2rem",
            }}>
            {data.story.p3} <span>{data.story.s2}</span> {data.story.p4}
            <span
              style={{
                textDecoration: "underline",
              }}>
              {data.story.s3}
            </span>
            {data.story.p5}
          </p>
        </div>
        <div className={styles.partners}>
          <h5>{lan.partners.title2}</h5>
          <div className={styles.partnercontainer}>
            <div className={styles.partneritem}>{lan.partners.diamond}</div>
            <div className={styles.partneritem}>{lan.partners.omran}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;

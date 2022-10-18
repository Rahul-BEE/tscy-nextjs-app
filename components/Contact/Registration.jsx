import React from "react";
import ContactForm from "./ContactForm";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Registration = () => {
  const lan = useLanguage();
  const router = useRouter();
  const broker = router.query.broker;
  return (
    <div className={styles.registration}>
      <div className="headingRow">
        <p
          className="sectionmainHeading"
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
          }}>
          {broker === "true"
            ? lan.contact.register.title
            : lan.commontext.registerinterest}
        </p>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <div>
            <h4>{lan.contact.register.info.title}</h4>
            <p
              style={{
                marginTop: "0.6rem",
              }}>
              {lan.contact.register.info.description}
            </p>
          </div>
          <div className={styles.middlesection}>
            {lan.contact.register.info.data.map((item, index) => (
              <div key={index} className={styles.infoRow}>
                <div>{item.icon}</div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.content}</p>
                  {item.content2 && <p>{item.content2}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.infosocial}>
            {lan.contact.register.info.socialmedia.map((item, index) => {
              return (
                <Link href={item.link} key={`${index}_social`}>
                  <motion.div
                    whileHover={{
                      scale: 1.5,
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                    }}>
                    {item.icon}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
        <ContactForm page={broker} />
      </div>
    </div>
  );
};

export default Registration;

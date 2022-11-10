import React from "react";
import ContactForm from "./ContactForm";
import BrokerForm from "./BrokerForm";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";

const Registration = () => {
  const lan = useLanguage();
  const router = useRouter();
  const broker = router.query.broker;
  return (
    <div className={styles.registration}>
      <div className="headingRow">
        <h1
          className={`sectionmainHeading ${styles.mainheadingContactus}`}
          style={{
            width: "100%",
            margin: 0,
            padding: 0,
          }}>
          {broker === "true"
            ? lan.contact.register.title
            : lan.commontext.registerinterest}
        </h1>
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
                  <a
                    data-type={item.type}
                    href={item?.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      marginTop: "5px",
                    }}>
                    {item.content}
                  </a>
                  {item.content2 && <p>{item.content2}</p>}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.infosocial}>
            {lan.contact.register.info.socialmedia.map((item, index) => {
              return (
                <Link href={item.link} key={`${index}_social`}>
                  <a target={"_blank"} rel="noreferrrer">
                    <motion.div
                      whileHover={{
                        scale: 1.1,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}>
                      {item.icon}
                    </motion.div>
                  </a>
                </Link>
              );
            })}
          </div>
          <div className={styles.infopolygon}>
            <Image
              width={214}
              height={134}
              layout="responsive"
              src={"/Images/contact/contactinfopoly.png"}
              alt="Sustainable City diamond"
            />
          </div>
        </div>
        {broker === "true" ? <BrokerForm /> : <ContactForm />}
      </div>
    </div>
  );
};

export default Registration;

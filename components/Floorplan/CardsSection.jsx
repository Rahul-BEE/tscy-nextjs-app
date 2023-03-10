import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/cardsection.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
const CardSection = ({ page }) => {
  const lan = useLanguage();
  return (
    <div className={styles.cardsSectionmain} data-bg={page}>
      <div className={styles.cardSectionInner}>
        <Row className="headingRow">
          <Col>
            {/* <h5 className="sectionsubHeading">{lan.findyourvilla.title1}</h5> */}
            <h1 className="sectionmainHeading">{lan.findyourvilla.title2}</h1>
          </Col>
        </Row>
        <div className={`sectionmaindescription`}>
          <p>{lan.findyourvilla.description}</p>
        </div>
        <div className={styles.cardContainer} data-page={page}>
          {lan.findyourvilla.cards.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{
                boxShadow: "5px 5px 16px rgba(0, 0, 0, 0.1)",
              }}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{item.icon}</div>
                <div className={styles.cardContents}>
                  <h5>{item.title1}</h5>
                  <h5>{item.title2}</h5>
                </div>
              </div>
              <p className={styles.cardContents}>{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.cardContainer2} data-page={page}>
          {lan.findyourvilla.cards.map((item, index) => (
            <div className={styles.cardHeader} key={index}>
              <div className={styles.iconContainer}>{item.icon}</div>
              <div className={styles.cardContents}>
                <p>{item.title1}</p>
                <p>{item.title2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardSection;

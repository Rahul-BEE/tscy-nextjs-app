import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/floorplan.module.scss";
import useLanguage from "../../utils/useLanguage";
const CardSection = () => {
  const lan = useLanguage();
  return (
    <div className={styles.cardsSectionmain}>
      <div className={styles.cardSectionInner}>
        <Row className="headingRow">
          <Col>
            <h5 className="sectionsubHeading">{lan.findyourvilla.title1}</h5>
            <h2 className="sectionmainHeading">{lan.findyourvilla.title2}</h2>
          </Col>
        </Row>
        <div className={`sectionmaindescription`}>
          <p>{lan.findyourvilla.description}</p>
        </div>
        <div className={styles.cardContainer}>
          {lan.findyourvilla.cards.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>{item.icon}</div>
                <div className={styles.cardContents}>
                  <h5>{item.title1}</h5>
                  <h5>{item.title2}</h5>
                </div>
              </div>
              <p className={styles.cardContents}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CardSection;

import styles from "../../styles/masterplan.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Masterplanmarker from "./Masterplanmarker";
import { motion } from "framer-motion";
import { useState } from "react";
const Masterplan = () => {
  const lan = useLanguage();
  return (
    <div className={styles.app__masterplan}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.masterplan.title1}</h5>
          <h2 className="sectionmainHeading">{lan.masterplan.title2}</h2>
        </Col>
      </Row>
      <Row className={`${styles.masterplan_description} flex`}>
        <Col md={6} lg={6} sm={12} xl={8}>
          {lan.masterplan.description}
        </Col>
      </Row>
      <div className={styles.masterplan}>
        <Image
          src="/Images/masterplanimage.png"
          width={1528}
          height={800}
          // objectPosition="50% 50%"

          objectFit="cover"
          className={styles.masterplanmap}
          blurDataURL="/Images/masterplanimage.png"
          placeholder="blur"
        />

        <Masterplanmarker />
        {/* <div className={styles.masterplan_bottomindex}>
          <div className={styles.indexdiv}>
            <div className={styles.componentdiv}>
              <div className={styles.componentheading}>
                {lan.commontext.components}
              </div>
              <div className={styles.components}>
                {lan.masterplan.markers.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
            <div className={styles.tracksdiv}>
              <div className={styles.tracksheading}>
                {lan.commontext.tracks}
              </div>
              <div className={styles.tracks}>
                {lan.tracks.map((item) => (
                  <p>{item.name}</p>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Masterplan;

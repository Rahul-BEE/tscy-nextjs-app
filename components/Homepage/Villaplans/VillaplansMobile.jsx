import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/villaplans.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import useLanguage from "../../../utils/useLanguage";
import Image from "next/image";

import Bedroom from "../../../public/Svg/bedroom.svg";
import Swimicon from "../../../public/Svg/swimicon.svg";
import Garden from "../../../public/Svg/garden.svg";
import Eco from "../../../public/Svg/ecofriendly.svg";
import Maidroom from "../../../public/Svg/maidroom.svg";

function VillaplansMobile() {
  const lan = useLanguage();
  const ref = useRef(null);

  const test = useAnimation();

  const [activeVilla, setActiveVilla] = useState(0);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[0]);

  const changeVilla = (index) => {
    setActiveVilla(index);
    setVilla(lan.villaplansection.villas[index]);

    if (index === 1) {
      test.start({
        x: -100,
      });
    } else if (index === 2) {
      test.start({
        x: -200,
      });
    } else {
      test.start({
        x: 0,
      });
    }
  };

  return (
    <div className={styles.section_villaplan_mobile}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">Redefining living with our</h5>
          <h2 className="sectionmainHeading">BEDROOM VILLA PLANS</h2>
        </Col>
      </Row>

      <div className={styles.villa_slide}>
        <motion.div
          className={styles.container}
          drag={"x"}
          dragConstraints={{ right: 0, left: -200 }}
          ref={ref}
          animate={test}
        >
          {lan &&
            lan.villaplansection.villas.map((villa, index) => (
              <div
                // className={styles.content_container}
                className={`${styles.content_container} flex ${
                  currentvilla.id === index + 1 ? styles.activeVilla : ""
                }`}
                onClick={() => changeVilla(index)}
              >
                <div className={styles.content}>
                  <div className={styles.number}>{villa.bedrooms}</div>
                  <div className={styles.text}>
                    <p>BEDROOM</p> {villa.type}
                  </div>
                </div>
              </div>
            ))}
        </motion.div>
      </div>

      <Row className={styles.descriptionRow}>
        <Col md={9} lg={9} sm={12} className={styles.text}>
          <p>{currentvilla.description}</p>
        </Col>
      </Row>

      <div className={styles.villadownload}>
        <div className={styles.download_content}>Download Brochure</div>
        <div className={styles.download_content}>Download Floor Plan</div>
        <div className={styles.download_content}>Register Interest</div>
      </div>

      <div className={styles.villaplanImageContainer}>
        <Image
          src="/Images/villaplansectionimg.png"
          width={900}
          height={500}
          layout="responsive"
        />
      </div>
      <div className={styles.villaplanfeatures_mobile}>
        <p className={styles.heading}>{lan.commontext.propsubheading_1}</p>

        <div className={styles.items}>
          <p>
            <Bedroom /> <span>{lan.commontext.bedroom}</span>
          </p>
          <p>
            <Eco /> <span>{lan.commontext.bathroom}</span>
          </p>
          <p>
            <Maidroom /> <span>{lan.commontext.maidroom}</span>
          </p>
          <p>
            <Garden /> <span>{lan.commontext.privategarden}</span>
          </p>
          <p>
            <Eco /> <span>{lan.commontext.smarthome}</span>
          </p>
        </div>
        <div>
          <Button>{lan.commontext.seedetails}</Button>
        </div>
      </div>
    </div>
  );
}

export default VillaplansMobile;

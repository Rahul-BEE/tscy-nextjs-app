import { Button, Col, Container, Row } from "react-bootstrap";
import useLangage from "../../utils/useLanguage";
// import styles from "../../styles/home.module.scss";
import styles from "../../styles/villaplans.module.scss";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";

import Bedroom from "../../public/Svg/bedroom.svg";
import Swimicon from "../../public/Svg/swimicon.svg";
import Garden from "../../public/Svg/garden.svg";
import Eco from "../../public/Svg/ecofriendly.svg";
import Maidroom from "../../public/Svg/maidroom.svg";
import VillaplansMobile from "./Villaplans/VillaplansMobile";
import Link from "next/link";

const Villplans = () => {
  const lan = useLangage();
  const [villaIndex, setIndex] = useState(0);
  const [currentvilla, setVilla] = useState(lan.villaplansection.villas[0]);

  useEffect(() => {
    setVilla(lan.villaplansection.villas[villaIndex]);
  }, [lan]);
  const changeVilla = (index) => {
    setIndex(index);
    setVilla(lan.villaplansection.villas[index]);
  };

  return (
    <div className={styles.app_villa_main}>
      <div className={styles.app__villaplanmaincontainer_desktop}>
        <Row className="headingRow">
          <Col>
            <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5>
            <h2 className="sectionmainHeading">
              {lan.villaplansection.title2}
            </h2>
          </Col>
        </Row>
        <Row className={` ${styles.villaplanindexrow} flex`}>
          {lan &&
            lan.villaplansection.villas.map((villa, index) => (
              <Col
                className={`${styles.villaplanindexcol} flex ${
                  currentvilla.id === index + 1 ? styles.activeVilla : ""
                }`}
                md={3}
                lg={3}
                key={`${index}_villas`}
                onClick={() => changeVilla(index)}>
                <motion.h5
                  whileHover={{ scale: 1.2 }}
                  onHoverStart={(e) => {}}
                  onHoverEnd={(e) => {}}>
                  {villa.bedrooms}
                </motion.h5>
                <p>{villa.homepagetitle}</p>
                <span className={styles[`border_line_${index}`]}></span>
              </Col>
            ))}
        </Row>
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
            src={currentvilla.mainImg}
            width={900}
            height={500}
            layout="responsive"
          />
          <div className={styles.villaplanfeatures}>
            <p className={styles.heading}>{lan.commontext.propsubheading_1}</p>
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
            <Link href={`/floorplan/${currentvilla.slug}`} passHref>
              <div>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}>
                  {lan.commontext.seedetails}
                </motion.button>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.villaplanmaincontainer_mobile}>
        <VillaplansMobile />
      </div>
    </div>
  );
};

export default Villplans;

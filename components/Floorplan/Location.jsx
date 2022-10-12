import React from "react";
import styles from "../../styles/floorplan.module.scss";
import Location from "../Homepage/Location";
import { Col, Row } from "react-bootstrap";
import useLanguage from "../../utils/useLanguage";
import Image from "next/image";
const LocationFYV = () => {
  const lan = useLanguage();
  return (
    <div className={styles.location}>
      <div className={`${styles.cardSectionInner} ${styles.locationDesktop}`}>
        <Row
          className="headingRow"
          style={{
            paddingTop: "2rem",
          }}>
          <Col>
            {/* <h5 className="sectionsubHeading mt-5">
              {lan.locationsection.title1}
            </h5> */}
            <h2 className="sectionmainHeading">{lan.locationsection.title2}</h2>
          </Col>
        </Row>
        <div className={`sectionmaindescription`}>
          <p>{lan.locationsection.description}</p>
        </div>
      </div>
      <div className={styles.locationDesktop}>
        <Image
          src={"/Images/villas/locationfyv.png"}
          width={1500}
          height={600}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className={styles.locationMobile}>
        <Location />
      </div>
    </div>
  );
};

export default LocationFYV;

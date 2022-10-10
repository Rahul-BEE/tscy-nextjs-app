import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import Link from "next/link";
import Amenities from "./Amenities";
const PrimeLocation = () => {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  return (
    <div className={styles.primelocationmain}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.commontext.situated}</h5>
          <h2 className="sectionmainHeading">
            {lan.commontext.primelocationText}
          </h2>
        </Col>
      </Row>
      <div className={styles.locationinnercontainer}>
        {data && (
          <div className={styles.locationimgContainer}>
            <Image
              src={data.locationImg}
              priority={true}
              layout="fill"
              objectFit="cover"
              objectPosition={"center"}
              quality={"100"}
              style={{
                borderRadius: "15px",
              }}
            />
            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <h5>{data.location}</h5>
                <Link href={"/#masterplananchor"} passHref>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                    }}>
                    {lan.commontext.viewin} {lan.commontext.masterplan}
                  </motion.button>
                </Link>
              </div>
              <h6>{lan.commontext.description}</h6>
              <p>{data.locationDesc}</p>
              <Link href={"/#masterplananchor"} passHref>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}>
                  {lan.commontext.viewin} {lan.commontext.masterplan}
                </motion.button>
              </Link>
            </div>
          </div>
        )}
      </div>
      <Amenities />
    </div>
  );
};

export default PrimeLocation;

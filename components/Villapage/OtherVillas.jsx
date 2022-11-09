import React from "react";
import styles from "../../styles/othervillas.module.scss";
import { useRouter } from "next/router";
import useLanguage from "../../utils/useLanguage";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import { motion } from "framer-motion";
const OtherVillas = () => {
  const router = useRouter();
  const { villaId } = router.query;
  const lan = useLanguage();
  const data = lan.villaplansection.villas.filter(
    (villa) => villa.slug !== villaId
  );

  return (
    <div className={styles.othervillasmain}>
      <Row className="headingRow">
        <Col>
          {/* <h5 className="sectionsubHeading">{lan.commontext.dontforget}</h5> */}
          <h1 className="sectionmainHeading">
            {lan.commontext.othervillatypes}
          </h1>
        </Col>
      </Row>
      {data && (
        <div className={styles.othervillainner}>
          {data.map((villa, index) => (
            <Link href={`/floorplan/${villa.slug}`} passHref key={index}>
              <motion.div
                data-villa={villa.title}
                whileHover={{
                  scale: 1.02,
                }}
                className={`${styles.villacard} floorplan_villacard_learnmorebtn`}
                key={`${index}_villacards`}>
                <div
                  className={styles.cardHeader}
                  style={{
                    pointerEvents: "none",
                  }}>
                  <h5>
                    {villa.bedrooms} {lan.commontext.bedroom}
                  </h5>
                  <h5>{villa.type}</h5>
                  <p>{villa.location}</p>
                </div>
                <div
                  style={{
                    pointerEvents: "none",
                  }}>
                  <Image
                    src={villa.mainImg}
                    width={780}
                    height={280}
                    layout={"responsive"}
                    placeholder="blur"
                    blurDataURL="/Images/blur.png"
                    alt={villa.title}
                    objectFit="cover"
                  />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default OtherVillas;

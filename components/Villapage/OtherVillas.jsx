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
          <h2 className="sectionmainHeading">
            {lan.commontext.othervillatypes}
          </h2>
        </Col>
      </Row>
      {data && (
        <div className={styles.othervillainner}>
          {data.map((villa, index) => (
            <Link href={`/floorplan/${villa.slug}`} passHref key={index}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}
                className={styles.villacard}
                key={`${index}_villacards`}>
                <div className={styles.cardHeader}>
                  <h5>
                    {villa.bedrooms} {lan.commontext.bedroom}
                  </h5>
                  <h5>{villa.type}</h5>
                  <p>{villa.location}</p>
                </div>
                <Image
                  src={villa.mainImg}
                  width={476}
                  height={222}
                  layout={"responsive"}
                  placeholder="blur"
                  blurDataURL="/Images/blur.png"
                />
              </motion.div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default OtherVillas;

import Image from "next/image";
import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/othervillas.module.scss";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import Link from "next/link";
import Amenities from "./Amenities";
import { useState } from "react";
import { useAppContext } from "../../context/AppContext";

const PrimeLocation = ({ data }) => {
  const { state, dispatch } = useAppContext();
  const lan = useLanguage();
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const setNewComponentWidth = useCallback(() => {
    if (window.innerWidth < 700) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    setNewComponentWidth();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", setNewComponentWidth);
    }
    return () => {
      window.removeEventListener("resize", setNewComponentWidth);
    };
  }, [setNewComponentWidth]);
  const viewinmphandler = () => {
    dispatch({
      type: "updatedistrict",
      value: data.locationid,
    });
    router.push("/#masterplananchor");
  };
  return (
    <div className={styles.primelocationmain}>
      <Row className="headingRow">
        <Col>
          {/* <h5 className="sectionsubHeading">{lan.commontext.situated}</h5> */}
          <h1 className="sectionmainHeading">
            {lan.commontext.primelocationText}
          </h1>
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
              placeholder="blur"
              alt="Sustainable city prime location"
              blurDataURL="/Images/masterplanimageblur2.png"
              style={{
                borderRadius: isMobile ? 0 : "15px",
              }}
            />
            <div className={styles.infoBox}>
              <div className={styles.infoBoxHeader}>
                <h5>{data.location}</h5>

                <motion.button
                  onClick={viewinmphandler}
                  whileHover={{
                    scale: 1.05,
                  }}>
                  {lan.commontext.viewin} {lan.commontext.masterplan}
                </motion.button>
              </div>
              <h6>{lan.commontext.description}</h6>
              <p>{data.locationDesc}</p>
              <motion.button
                onClick={viewinmphandler}
                whileHover={{
                  scale: 1.05,
                }}>
                {lan.commontext.viewin} {lan.commontext.masterplan}
              </motion.button>
            </div>
          </div>
        )}
      </div>
      {/* <Amenities /> */}
    </div>
  );
};

export default PrimeLocation;

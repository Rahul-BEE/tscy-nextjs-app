import React, { useRef } from "react";
import styles from "../../styles/plans.module.scss";
import useLanguage from "../../utils/useLanguage";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Plandot from "../../public/Svg/floorplans/plandots/plandot.svg";
import Activeplandot from "../../public/Svg/floorplans/plandots/activeplandot.svg";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

function Plans() {
  const lan = useLanguage();
  const router = useRouter();
  const ref = useRef(null);

  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  //   onclick change
  const [floorindex, setFloorindex] = useState("ground");
  const [expanded, setExpanded] = useState(0);

  const mobileIndexAnimation = useAnimation();
  const mobileIndexAnimation2 = useAnimation();

  useEffect(() => {
    if (expanded === 0) {
      setFloorindex("ground");
    } else if (expanded === 1) {
      setFloorindex("first");
    }
  }, [expanded]);

  const clickHandler = async (id) => {
    setExpanded(id);
    if (id === 1) {
      mobileIndexAnimation.start("visible");
      await mobileIndexAnimation2.start({
        x: lan.language === 1 ? "-100%" : "100%",
      });
    } else if (id === 0) {
      mobileIndexAnimation.start("hidden");
      await mobileIndexAnimation2.start({
        x: 0,
      });
    }
  };
  const planheaderRef = useRef(null);
  const planDragController = (info) => {
    if (info.velocity.x > 60) {
      setExpanded(0);
    } else if (info.velocity.x < -10) {
      setExpanded(1);
    }
  };
  return (
    <div className={styles.hero_box}>
      <div className={styles.realtiveParent}>
        <div className={styles.hero_main}>
          {/* heading */}
          <Row className="headingRow">
            <Col>
              <h1 className="sectionmainHeading">{lan.commontext.floorplan}</h1>
            </Col>
          </Row>

          {/* floor plan */}

          {data && (
            <div className={styles.hero_container}>
              {/* left */}
              <div className={`${styles.hero_items} ${styles.selectFloor}`}>
                <div className={styles.item_container1}>
                  <div className={styles.hero_desktop}>
                    <Accordion
                      i={0}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      data={data}
                    />

                    <Accordion
                      i={1}
                      expanded={expanded}
                      setExpanded={setExpanded}
                      data={data}
                    />
                  </div>
                  <div className={styles.buadetailsdeskp}>
                    <p className={styles.fw_500}>
                      {lan.commontext.gfa}:{" "}
                      <span>
                        {data.gfa} {lan.commontext.unit}&sup2;
                      </span>
                    </p>
                    <p className={styles.fw_500}>
                      {lan.commontext.bua}:{" "}
                      <span>
                        {data.bua} {lan.commontext.unit}&sup2;
                      </span>
                    </p>
                  </div>

                  <div className={styles.buadetailsmob}>
                    <div className={styles.fw_500}>
                      <p>{lan.commontext.gfa}</p>
                      <span>{data.gfa} m&sup2;</span>
                    </div>
                    <div className={styles.fw_500}>
                      <p>{lan.commontext.bua}</p>
                      <span>{data.bua} m&sup2;</span>
                    </div>
                  </div>
                  {/* Button */}
                  <Link href="https://thesustainablecity-yiti.com/brochure/Villa Brochure Final.pdf">
                    <a target={"_blank"} rel="noreferrer">
                      <motion.div className={styles.dd_button}>
                        {lan.commontext.download} {lan.commontext.floorplan}
                      </motion.div>
                    </a>
                  </Link>

                  <div className={styles.hero_tablet}>
                    <div className={styles.item}>
                      <div className={styles.heading_item}>
                        <div
                          onClick={() => setExpanded(0)}
                          className={
                            expanded === 0 ? styles.active : styles.noactive
                          }>
                          <h3>{lan.commontext.groundfloor}</h3>
                        </div>
                        <span className={styles.seperator}></span>
                        <div
                          onClick={() => setExpanded(1)}
                          className={
                            expanded === 1 ? styles.active : styles.noactive
                          }>
                          <h3>{lan.commontext.firstfloor}</h3>
                        </div>
                      </div>
                      {/* mobile heading */}
                      <div className={styles.heading_item_mobile}>
                        <motion.div
                          drag="x"
                          dragConstraints={
                            lan.language === 1
                              ? {
                                  right: 0,
                                  left: -150,
                                }
                              : {
                                  right: 150,
                                  left: 0,
                                }
                          }
                          ref={planheaderRef}
                          className={styles.innerHeading}
                          animate={mobileIndexAnimation2}>
                          <div
                            onClick={() => clickHandler(0)}
                            className={`${styles.flexItem1} ${
                              expanded === 0 ? styles.active : styles.noactive
                            }`}>
                            <motion.h3
                              variants={{
                                hidden: {
                                  position: "static",
                                },
                                visible: {
                                  position: "absolute",
                                  right: lan.language === 1 ? "-20%" : "unset",
                                  left: lan.language === 1 ? "unset" : "-15%",
                                },
                              }}
                              animate={mobileIndexAnimation}
                              initial="hidden">
                              {lan.commontext.groundfloor}
                            </motion.h3>
                            {expanded === 0 ? (
                              <motion.div
                                className={styles.underline}
                                layoutId="underline"
                              />
                            ) : null}
                          </div>

                          <div
                            onClick={() => clickHandler(1)}
                            className={`${styles.flexItem2} ${
                              expanded === 1 ? styles.active : styles.noactive
                            }`}>
                            <motion.h3
                              variants={{
                                visible: {
                                  position: "static",
                                },
                                hidden: {
                                  position: "absolute",
                                  left: lan.language === 1 ? "-10%" : "unset",
                                  right: lan.language === 1 ? "unset" : "-10%",
                                },
                              }}
                              animate={mobileIndexAnimation}
                              initial="hidden">
                              {lan.commontext.firstfloor}
                            </motion.h3>
                            {expanded === 1 ? (
                              <motion.div
                                className={styles.underline}
                                layoutId="underline"
                              />
                            ) : null}
                          </div>
                        </motion.div>
                      </div>

                      <div className={styles.description}>
                        <p className={styles.descp}>
                          {data.floordesc[expanded]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* center */}
              <motion.div
                drag="x"
                key={expanded}
                dragConstraints={{
                  right: 0,
                  left: 0,
                }}
                onDragEnd={(_, info) => planDragController(info)}
                className={`${styles.hero_items} ${styles.floorplanGrid}`}
                style={{
                  position: "relative",
                }}>
                <Image
                  className={styles.mobile_img}
                  src={data.floorplan[expanded]}
                  layout="responsive"
                  width={556}
                  height={800}
                  objectFit="cover"
                  quality={100}
                  placeholder="blur"
                  blurDataURL="/Images/blur.png"
                  alt={`${data.title}-${floorindex}`}
                  priority
                  style={{
                    pointerEvents: "none",
                  }}
                />
              </motion.div>

              <div className={`${styles.hero_items} ${styles.propertiesgrid}`}>
                <div className={styles.item_container2}>
                  <div className={styles.item}>
                    <div className={styles.item_heading}>
                      <h3>{lan.commontext.features}</h3>
                    </div>

                    {/* features */}

                    <div className={styles.collection}>
                      {data.propertyFeatures["ground"].map((value, index) => (
                        <div key={index}>
                          {lan.propertyFeatures[value].num === true ? (
                            <div className={styles.icons}>
                              <div className={styles.svg_icon}>
                                {lan.propertyFeatures[value].icon}
                              </div>
                              <div className={styles.featuredata}>
                                {lan.propertyFeatures[value].key && (
                                  <span>
                                    {data[lan.propertyFeatures[value].key]}
                                  </span>
                                )}
                                {lan.propertyFeatures[value].name}
                              </div>
                            </div>
                          ) : (
                            <div className={styles.icons}>
                              <div className={styles.svg_icon}>
                                {lan.propertyFeatures[value].icon}
                              </div>
                              <div className={styles.featuredata}>
                                {lan.propertyFeatures[value].name}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className={styles.planPagination}>
            <span
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                clickHandler(0);
                setExpanded(0);
              }}>
              {expanded === 0 ? <Activeplandot /> : <Plandot />}
            </span>
            <span
              onClick={() => {
                clickHandler(1);
                setExpanded(1);
              }}
              style={{
                cursor: "pointer",
              }}>
              {" "}
              {expanded === 1 ? <Activeplandot /> : <Plandot />}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const Accordion = ({ i, expanded, setExpanded, data }) => {
  const isOpen = i === expanded;
  const lan = useLanguage();
  return (
    <div className={styles.accordion_box} key={i}>
      <motion.div
        initial={false}
        onClick={() => setExpanded(i)}
        style={{
          cursor: "pointer",
          color: "#777777",
          opacity: isOpen ? 1 : 0.5,
        }}
        className={styles.heading_accord}>
        {i === 0 ? lan.commontext.groundfloor : lan.commontext.firstfloor}
      </motion.div>
      <AnimatePresence initial={false} exitBeforeEnter>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            style={{ overflow: "hidden" }}
            className={styles.details}>
            <p>{data.floordesc[expanded]}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Plans;

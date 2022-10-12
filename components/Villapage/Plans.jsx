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

function Plans() {
  const lan = useLanguage();
  const router = useRouter();
  const test = useAnimation();
  const ref = useRef(null);

  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  //   onclick change
  const [floorindex, setFloorindex] = useState("ground");
  const [expanded, setExpanded] = useState(0);

  useEffect(() => {
    if (expanded === 0) {
      setFloorindex("ground");
      test.start({
        x: 0,
      });
    } else if (expanded === 1) {
      setFloorindex("first");
      test.start({
        x: -200,
      });
    }
  }, [expanded]);

  return (
    <div className={styles.hero_box}>
      <div className={styles.realtiveParent}>
        <div className={styles.hero_main}>
          {/* heading */}
          <Row className="headingRow">
            <Col>
              <h2 className="sectionmainHeading">{lan.commontext.floorplan}</h2>
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

                  {/* Button */}
                  <div className={styles.dd_button}>
                    {lan.commontext.download} {lan.commontext.floorplan}
                  </div>

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
                      {/* <div className={styles.heading_item_mobile}>
                        <div
                          className={styles.head}
                          drag={"x"}
                          dragConstraints={{ right: 0, left: -200 }}
                          ref={ref}
                          animate={test}>
                          <div
                            onClick={() => setExpanded(0)}
                            className={expanded === 0 ? styles.active : ""}>
                            <h3>{lan.commontext.groundfloor}</h3>
                          </div>

                          <div
                            onClick={() => setExpanded(1)}
                            className={expanded === 1 ? styles.active : ""}>
                            <h3>{lan.commontext.firstfloor}</h3>
                          </div>
                        </div>
                      </div> */}

                      <div className={styles.description}>
                        <p>
                          Transform your home office into your new favorite
                          meeting room—and your desk into a shared table where
                          you can gather with your team.
                        </p>
                        <div className={styles.col_2}>
                          <div className={styles.fw_500}>
                            <p>Gross Floor Area:</p>
                            <span>{data.gfa} m&sup2;</span>
                          </div>
                          <div className={styles.fw_500}>
                            <p>Built Up Area:</p>
                            <span>{data.bua} m&sup2;</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* center */}
              <div className={`${styles.hero_items} ${styles.floorplanGrid}`}>
                <Image
                  className={styles.mobile_img}
                  src={data.floorplan[expanded]}
                  layout="responsive"
                  width={556}
                  height={800}
                  objectFit="cover"
                />
              </div>

              <div className={`${styles.hero_items} ${styles.propertiesgrid}`}>
                <div className={styles.item_container2}>
                  <div className={styles.item}>
                    <div className={styles.item_heading}>
                      <h3>
                        {expanded === 0
                          ? lan.commontext.groundfloor
                          : lan.commontext.firstfloor}
                      </h3>
                    </div>

                    {/* features */}

                    <div className={styles.collection}>
                      {data.propertyFeatures[floorindex].map((value, index) => (
                        <div key={index}>
                          {lan.propertyFeatures[value].num === true ? (
                            <div className={styles.icons}>
                              <div className={styles.svg_icon}>
                                {lan.propertyFeatures[value].icon}
                              </div>
                              <div>
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
                              <div>{lan.propertyFeatures[value].name}</div>
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
            <span>{expanded === 0 ? <Activeplandot /> : <Plandot />}</span>
            <span> {expanded === 1 ? <Activeplandot /> : <Plandot />}</span>
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
    <div className={styles.accordion_box}>
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? "1" : "0.5" }}
        onClick={() => setExpanded(i)}
        style={{ cursor: "pointer", color: "#777777" }}
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
            <p>
              Transform your home office into your new favorite meeting room—and
              your desk into a shared table where you can gather with your team.
            </p>
            <p className={styles.fw_500}>
              Gross Floor Area: <span>{data.gfa} m&sup2;</span>
            </p>
            <p className={styles.fw_500}>
              Built Up Area: <span>{data.bua} m&sup2;</span>
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Plans;
import React from "react";
import styles from "../../styles/plans.module.scss";
import useLanguage from "../../utils/useLanguage";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Plans() {
  const lan = useLanguage();
  const router = useRouter();
  const { villaId } = router.query;
  const data = lan.villaplansection.villas.find(
    (villa) => villa.slug === villaId
  );

  //   onclick change
  const [floorindex, setFloorindex] = useState(0);
  const [expanded, setExpanded] = useState(0);

  return (
    <div className={styles.hero_main}>
      {/* heading */}
      <div className={styles.hero_heading}>
        <p>Our villas stand out with</p>
        <h2>FLOOR PLANS</h2>
      </div>

      {/* floor plan */}

      {data && (
        <div className={styles.hero_container}>
          {/* left */}
          <div className={styles.hero_items}>
            <div className={styles.item_container1}>
              {/* <div className={styles.item} onClick={() => setFloorindex(0)}>
                <h3>Ground Floor</h3>
                <p>
                  Transform your home office into your new favorite meeting
                  room—and your desk into a shared table where you can gather
                  with your team.
                </p>
                <p>
                  Gross Floor Area: <span>{data.gfa}</span>
                </p>
                <p>
                  Built Up Area: <span>{data.bua}</span>
                </p>
              </div>
              <div className={styles.item} onClick={() => setFloorindex(1)}>
                <h3>First Floor</h3>
                <p>
                  Transform your home office into your new favorite meeting
                  room—and your desk into a shared table where you can gather
                  with your team.
                </p>
                <p>
                  Gross Floor Area: <span>{data.gfa}</span>
                </p>
                <p>
                  Built Up Area: <span>{data.bua}</span>
                </p>
              </div> */}

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

              {/* Button */}
              <div className={styles.dd_button}>Download Floor Plans</div>
            </div>
          </div>

          {/* center */}
          <div className={styles.hero_items}>
            <Image
              className={styles.mobile_img}
              // src="/Images/location/Asset1.png"
              src={data.floorplan[expanded]}
              width={556}
              height={800}
              layout="responsive"
              // layout="fill"
            />
          </div>

          {/* right */}
          <div className={styles.hero_items}>
            <div className={styles.item_container2}>
              <div className={styles.item}>
                <div className={styles.item_heading}>
                  <h3>{floorindex === 0 ? "Ground Floor" : "First Floor"}</h3>
                </div>

                {/* features */}

                <div className={styles.collection}></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const Accordion = ({ i, expanded, setExpanded, data }) => {
  const isOpen = i === expanded;
  console.log(isOpen, i);

  // By using `AnimatePresence` to mount and unmount the contents, we can animate
  // them in and out while also only rendering the contents of open accordions
  return (
    <div className={styles.accordion_box}>
      <motion.div
        initial={false}
        animate={{ opacity: isOpen ? "1" : "0.5" }}
        onClick={() => setExpanded(i)}
        style={{ cursor: "pointer", color: "#777777" }}
        className={styles.heading_accord}
      >
        {i === 0 ? "Ground Floor" : "First Floor"}
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
            className={styles.details}
          >
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

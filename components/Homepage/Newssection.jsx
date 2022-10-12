import styles from "../../styles/newssection.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import NewsCarousel from "./NewsSectionComponents/NewsCarousel";
import NewsMobile from "./NewsSectionComponents/NewsMobile";
import { useState } from "react";
import useLanguage from "../../utils/useLanguage";
import { motion, useAnimation } from "framer-motion";
import { Col, Row } from "react-bootstrap";

function Newssection() {
  const lan = useLanguage();
  const controls = useAnimation();
  const data = lan.newssection.post

  const initialData = {
    firstSlice: 0,
    secondSlice: 1,
    lastSlice: 3,
  };
  const [sliceNumber, setSliceNumber] = useState(initialData);
  const handelChange = (e) => {
    e.preventDefault();
    controls.start("hidden");
    if (data.length - 1 >= sliceNumber.lastSlice) {
      setSliceNumber({
        ...sliceNumber,
        firstSlice: sliceNumber.firstSlice + 1,
        secondSlice: sliceNumber.secondSlice + 1,
        lastSlice: sliceNumber.lastSlice + 1,
      });
    } else {
      console.log(sliceNumber);
      setSliceNumber({
        ...sliceNumber,
        firstSlice: 0,
        secondSlice: 1,
        lastSlice: 3,
      });
    }
    controls.start("visible");
  };

  const handelChnagePrev = (e) => {
    e.preventDefault();
    if (sliceNumber.firstSlice > 0) {
      setSliceNumber({
        ...sliceNumber,
        firstSlice: sliceNumber.firstSlice - 1,
        secondSlice: sliceNumber.secondSlice - 1,
        lastSlice: sliceNumber.lastSlice - 1,
      });
    } else {
      setSliceNumber({
        ...sliceNumber,
        firstSlice: 2,
        secondSlice: 3,
        lastSlice: 5,
      });
    }
  };
  const variants1 = {
    visible: {
      borderRadius: ["50%", "50%", "0%", "0%"],
      x: 400,
      y: -100,
      opacity: 1,
      scale: 0.2,

      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.3,
      },
    },
    hidden: {
      opacity: 0,
    },
  };

  const variants = {
    visible: {
      x: [400, 100, 0],
      y: [-100, 0],
      opacity: [0, 1],
      scale: [0, 1],
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.3,
      },
    },
    hidden: {
      opacity: 1,
    },
  };

  return (
    <div className={styles.hero_newssection}>
      <div className={styles.hero_container}>
        <Row className="headingRow">
          <Col>
            {/* <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5> */}
            <h2 className="sectionmainHeading">{lan.commontext.press}</h2>
          </Col>
        </Row>
        {/* layout */}

        <div className={styles.shape_hex}>
          <Image
            src={"/Svg/Polygon.svg"}
            alt="The Sustainable Villas Yiti"
            width={"250px"}
            height={"250px"}
          />
        </div>

        <div className={styles.hero_main_box}>
          {/* main box */}
          {data
            .slice(sliceNumber.firstSlice, sliceNumber.secondSlice)
            .map((item, index) => (
              <div className={styles.hero_box} key={index}>
                <div>
                  <div className={styles.news_heading}>
                    <h3>{item.title}</h3>
                  </div>
                  <motion.div
                    className={styles.test_box}
                    animate={controls}
                    initial="hidden"
                    variants={variants}></motion.div>
                  <p>{item.discription}</p>
                </div>
              </div>
            ))}

          {/* small boxes */}

          <div className={styles.hero_secondry_box}>
            <div className={styles.news_nav}>
              <motion.p
                onClick={(e) => handelChnagePrev(e)}
                whileTap={{ scale: 0.9 }}>
                <FaChevronLeft className={styles.icon} /> Previous
              </motion.p>
              <motion.p
                onClick={(e) => handelChange(e)}
                whileTap={{ scale: 0.9 }}>
                Next <FaChevronRight className={styles.icon} />
              </motion.p>
            </div>

            {data
              .slice(sliceNumber.secondSlice, sliceNumber.lastSlice)
              .map((item, index) => (
                <div className={styles.secondry_box} key={index}>
                  <div className={styles.test_box}></div>
                  <h3>{item.title}</h3>
                </div>
              ))}
          </div>
        </div>

        {/* tablet view */}
        <NewsCarousel data={data} />
      </div>

      {/* mobile */}
      <NewsMobile data={data} />
    </div>
  );
}

export default Newssection;

import styles from "../../styles/home.module.scss";
import featurestyles from "../../styles/sustainblefeature.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Polygon from "../../public/Svg/Polygonorg.svg";
import People from "../../public/Svg/people.svg";
import Eco from "../../public/Svg/Eco.svg";
import Env from "../../public/Svg/Env.svg";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
const SustainableFeatures = () => {
  const [featureSelected, setFeatureSelected] = useState(0);
  const lan = useLanguage();
  const [showData, setShowData] = useState(lan.sustainablesection.features[0]);

  // Framer motiom setting
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const variant1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.3,
      },
    },
    hidden: {
      x: "-100vw",
      opacity: 0,
    },
  };
  const variant2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 1.5,
        bounce: 0.3,
      },
    },
    hidden: {
      x: "100vw",
      opacity: 0,
    },
  };
  const controls = useAnimation();

  useEffect(() => {
    switch (featureSelected) {
      case 0: {
        setShowData(lan.sustainablesection.features[0]);
        return;
      }
      case 1: {
        setShowData(lan.sustainablesection.features[1]);
        return;
      }
      case 2: {
        setShowData(lan.sustainablesection.features[2]);
        return;
      }
      default: {
        setShowData(lan.sustainablesection.features[0]);
        return;
      }
    }
  }, [featureSelected, lan]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [inView]);

  const changeShowData = (value) => {
    if (value === 1) {
      if (featureSelected === 2) {
        setFeatureSelected(0);
      } else {
        setFeatureSelected(featureSelected + 1);
      }
    }
    if (value === -1) {
      if (featureSelected === 0) {
        setFeatureSelected(2);
      } else {
        setFeatureSelected(featureSelected - 1);
      }
    }
  };
  const SustainableIcons = () => {
    return (
      <Row className="mb-3">
        <Col
          className="d-flex justify-content-between align-items-center"
          style={{ gap: "2.5rem" }}>
          <RiArrowLeftSLine
            className={styles.rotate_icon}
            onClick={() => changeShowData(-1)}
          />
          <div
            className={`${styles.sustainableicons} ${
              featureSelected !== 0
                ? styles.iconSocial
                : styles.iconSocialActive
            }`}
            onClick={() => setFeatureSelected(0)}>
            <Polygon />
            <div className={styles.socialIconIcon}>
              <People />
            </div>
          </div>
          <div
            className={`${styles.sustainableicons} ${
              featureSelected !== 1 ? styles.iconEco : styles.iconEcoActive
            }`}
            onClick={() => setFeatureSelected(1)}>
            <Polygon />
            <div className={styles.ecoIconIcon}>
              <Eco />
            </div>
          </div>
          <div
            className={`${styles.sustainableicons} ${
              featureSelected !== 2 ? styles.iconEnv : styles.iconEnvActive
            }`}
            onClick={() => setFeatureSelected(2)}>
            <Polygon />
            <div className={styles.envIconIcon}>
              <Env />
            </div>
          </div>

          <RiArrowRightSLine
            className={styles.rotate_icon}
            onClick={() => changeShowData(1)}
          />
        </Col>
      </Row>
    );
  };
  const SustainableContents = () => {
    return (
      <Container fluid className={featurestyles.sustainablecontentContainer}>
        <Row>
          <Col style={{ position: "relative" }}>
            <div className={featurestyles.sustainabledeskdisp}>
              {showData && (
                <>
                  <h3
                    style={{
                      color:
                        featureSelected === 1
                          ? "#038fab"
                          : featureSelected === 2
                          ? "#70b795"
                          : "#E79127",
                    }}>
                    {showData?.heading}
                  </h3>
                  <p className="px-4 my-4">{showData?.sub}</p>
                  <Swiper
                    className={featurestyles.featureBullets}
                    modules={[Autoplay, FreeMode]}
                    direction="vertical"
                    slidesPerView={7}
                    loop={true}
                    freeMode={true}
                    speed={1500}
                    autoplay={{ delay: 1000, disableOnInteraction: false }}>
                    {showData?.bullets.map((bullet, index) => (
                      <SwiperSlide key={`${index}_feature_bullet`}>
                        <h5 className={featurestyles.bulletSustainable}>
                          {bullet}
                        </h5>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </>
              )}
            </div>
            <div className={featurestyles.featuresoverLay}></div>
            <div className={featurestyles.sustainablemobdisp}>
              {showData && (
                <>
                  <h3
                    style={{
                      color:
                        featureSelected === 1
                          ? "#038fab"
                          : featureSelected === 2
                          ? "#70b795"
                          : "#E79127",
                    }}>
                    {showData?.heading}
                  </h3>
                  {showData?.bullets.map((bullet, index) => (
                    <h5 className={featurestyles.bulletSustainable} key={index}>
                      {bullet}
                    </h5>
                  ))}
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <div ref={ref} className={featurestyles.app__sustainablefeaturesection}>
      <Row>
        <Col className={featurestyles.sustainablesection_heading}>
          {/* <h5 className="sectionsubHeading">{lan.sustainablesection.title1}</h5> */}
          <h2 className="sectionmainHeading">
            {lan.sustainablesection.title2}
          </h2>
        </Col>
      </Row>
      {showData && (
      <Row className={featurestyles.rowtablet}>
        <Col md={3} className={featurestyles.sustainImgCol}>
          <motion.div animate={controls} initial="hidden" variants={variant1} style={{height:"100%",width:"100%"}}>
            <Image
              src={showData?.leftimg}
              width={357}
              height={453}

              className={featurestyles.susimage1}
              alt="Sustainale feature image"
            />
          </motion.div>
        </Col>
        <Col
          className={featurestyles.sustainablefeaturecontent}
          md={6}
          sm={6}
          lg={6}>
          <Container className={`${featurestyles.sustainablefeatures}`} fluid>
            <SustainableIcons />
            {showData && <SustainableContents />}
          </Container>
        </Col>
        <Col md={3} className={featurestyles.sustainImgCol1}>
          <motion.div animate={controls} initial="hidden" variants={variant2} className={featurestyles.animateright} style={{height:"100%",width:"100%"}}>
            <Image
              src={showData?.rightimg}
              width={369}
              height={431}
              style={{float: "right"}}
              className={featurestyles.susimage2}
              alt="Sustainbale feature Image"
            />
          </motion.div>
        </Col>

        <Col md={12} className={featurestyles.sustainImgCol2}>
          <motion.div animate={controls} initial="hidden" variants={variant2}>
            <Image
              src={showData?.mobimg}
              width={470}
              height={400}
              className={featurestyles.susimage2}
              alt="Sustainbale feature Image"
            />
          </motion.div>
        </Col>
      </Row>
        )}
    </div>
  );
};

export default SustainableFeatures;

import styles from "../../styles/home.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import useLanguage from "../../utils/useLanguage";
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
const SustainableFeatures = () => {
  const lan = useLanguage();
  const [featureSelected, setFeatureSelected] = useState(0);
  const [showData, setShowData] = useState(lan.sustainablesection.features[0]);

  useEffect(() => {
    console.log("called");
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
  }, [featureSelected]);

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
          <RiArrowLeftSLine onClick={() => changeShowData(-1)} />
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

          <RiArrowRightSLine onClick={() => changeShowData(1)} />
        </Col>
      </Row>
    );
  };
  const SustainableContents = () => {
    return (
      <Container fluid className={styles.sustainablecontentContainer}>
        <div style={{ height: "32rem", overflow: "hidden" }}>
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
                className={styles.featureBullets}
                modules={[Autoplay, FreeMode]}
                direction="vertical"
                slidesPerView={7}
                loop={true}
                freeMode={true}
                speed={1000}
                autoplay={{ delay: 1000 }}>
                {showData?.bullets.map((bullet, index) => (
                  <SwiperSlide key={`${index}_feature_bullet`}>
                    <h5 className={styles.bulletSustainable}>{bullet}</h5>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
        <div className={styles.featuresoverLay}></div>
      </Container>
    );
  };

  const SustainableImageComponents = (data) => {};
  return (
    <div className={styles.app__sustainablefeaturesection}>
      <Row>
        <Col className={styles.sustainablesection_heading}>
          <h5 className="sectionsubHeading">{lan.sustainablesection.title1}</h5>
          <h2 className="sectionmainHeading">
            {lan.sustainablesection.title2}
          </h2>
        </Col>
      </Row>
      <Row>
        <Col className={styles.sustainablefeatureImages}>images</Col>
        <Col className={styles.sustainablefeaturecontent} md={6}>
          <Container className={`${styles.sustainablefeatures}`}>
            <SustainableIcons />
            {showData && <SustainableContents />}
          </Container>
        </Col>
        <Col
          className={`${styles.sustainablefeatureImages} ${styles.sustainablefeatureImagesposition}`}>
          images
        </Col>
      </Row>
    </div>
  );
};

export default SustainableFeatures;

import styles from "../../styles/home.module.scss";
import { Row, Col } from "react-bootstrap";
import useLanguage from "../../utils/useLanguage";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Polygon from "../../public/Svg/Polygonorg.svg";
import People from "../../public/Svg/people.svg";
import Eco from "../../public/Svg/Eco.svg";
import Env from "../../public/Svg/Env.svg";
import { useEffect, useState } from "react";
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

  const SustainableIcons = () => {
    return (
      <Row>
        <Col className="d-flex justify-content-between align-items-center">
          <RiArrowLeftSLine />
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

          <RiArrowRightSLine />
        </Col>
      </Row>
    );
  };
  const SustainableContents = () => {
    return <Row>{console.log(showData)}hi</Row>;
  };
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
          <SustainableIcons />
          {showData && <SustainableContents />}
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

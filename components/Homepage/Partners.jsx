import styles from "../../styles/home.module.scss";
import { Row, Col } from "react-bootstrap";
import useLanguage from "../../utils/useLanguage";
const Partners = () => {
  const lan = useLanguage();
  return (
    <div className={styles.app__partnersection}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.partners.title1}</h5>
          <h2 className="sectionmainHeading">{lan.partners.title2}</h2>
        </Col>
      </Row>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "76px",
          margin: "5rem 0",
        }}>
        <div className="animatedBackground"></div>
      </div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "76px",
          margin: "2.5rem 0",
        }}>
        <div className="animatedBackground2"></div>
      </div>
    </div>
  );
};

export default Partners;

import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
const Location = () => {
  const lan = useLanguage();
  return (
    <div className={styles.app__locationsection}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.locationsection.title1}</h5>
          <h2 className="sectionmainHeading">{lan.locationsection.title2}</h2>
        </Col>
      </Row>
      <Row className={`${styles.location_description} flex`}>
        <Col md={5} lg={5} sm={12}>
          {lan.locationsection.description}
        </Col>
      </Row>
      <div className={styles.locationImagecontainer}>
        <Image src="/Images/locationimage2.png" width={1728} height={652} />
      </div>
    </div>
  );
};

export default Location;

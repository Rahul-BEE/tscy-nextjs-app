import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
const Masterplan = () => {
  const lan = useLanguage();

  return (
    <div className={styles.app__masterplan}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.masterplan.title1}</h5>
          <h2 className="sectionmainHeading">{lan.masterplan.title2}</h2>
        </Col>
      </Row>
      <Row className={`${styles.masterplan_description} flex`}>
        <Col md={6} lg={6} sm={12}>
          {lan.masterplan.description}
        </Col>
      </Row>
      <div className={`${styles.masterplan_imagecontainer}`}>
        <Image
          src="/Images/masterplanimage.svg"
          width={1568}
          height={800}
          className={styles.masterplanmap}
          blurDataURL="/Images/masterplanimage.png"
          placeholder="blur"
        />
      </div>
    </div>
  );
};

export default Masterplan;

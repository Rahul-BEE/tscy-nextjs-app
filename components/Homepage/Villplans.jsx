import { Col, Container, Row } from "react-bootstrap";
import useLangage from "../../utils/useLanguage";
import styles from "../../styles/home.module.scss";
import Image from "next/image";
const Villplans = () => {
  const lan = useLangage();

  return (
    <div className={styles.app__villplanmaincontainer}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5>
          <h2 className="sectionmainHeading">{lan.villaplansection.title2}</h2>
        </Col>
      </Row>
      <Row className="flex justify-content-center my-3">
        {lan.villaplansection.villas.map((villa, index) => (
          <Col
            className={`${styles.villaplanindexcol} flex`}
            md={3}
            lg={3}
            key={`${index}_villas`}>
            <h5>{villa.bedrooms}</h5>
            <p>{villa.homepagetitle}</p>
          </Col>
        ))}
      </Row>
      <Image
        src="/Images/villaplansectionimg.png"
        width={1000}
        height={500}
        layout="responsive"
      />
    </div>
  );
};

export default Villplans;

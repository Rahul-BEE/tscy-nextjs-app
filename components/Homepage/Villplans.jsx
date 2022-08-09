import { Col, Container, Row } from "react-bootstrap";
import useLangage from "../../utils/useLanguage";
import styles from "../../styles/home.module.scss";
const Villplans = ({ data }) => {
  const lan = useLangage();
  console.log(data);
  return (
    <div className={styles.app__villplanmaincontainer}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">{lan.villaplansection.title1}</h5>
          <h2 className="sectionmainHeading">{lan.villaplansection.title2}</h2>
        </Col>
      </Row>
      <Row className="flex justify-content-center my-3">
        {data?.map((villa) => (
          <Col className={`${styles.villaplanindexcol} flex`} md={3} lg={3}>
            <h5>{villa.attributes.no_bed}</h5>
            <p>Bedroom {villa.attributes.villatype.data.attributes.type}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Villplans;

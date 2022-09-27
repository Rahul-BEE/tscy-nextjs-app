import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import Clickme from "../../public/Svg/locationbtn.svg";
import LocationSvgComp from "./LocationSvg/LocationSvgComp";
const Location = () => {
  const lan = useLanguage();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 15000);
  });
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
      {/* <div className={styles.locationImagecontainer}>
        {show ? (
          <Image
            src="/Images/location/Assets1.png"
            width={1728}
            height={652}
            layout="responsive"
          />
        ) : (
          <Image
            src="/Images/locationimage1.png"
            width={1728}
            height={652}
            layout="responsive"
          />
        )}
        {!show && <Clickme onClick={() => setShow(true)} />}
      </div> */}

      <div className={styles.locationImagecontainer1}>
        <Image
          src="/Images/location/Asset1.png"
          width={1728}
          height={872}
          layout="responsive"
          // layout="fill"
        />
        <LocationSvgComp />
      </div>
    </div>
  );
};

export default Location;

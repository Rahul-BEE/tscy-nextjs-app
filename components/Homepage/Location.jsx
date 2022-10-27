import styles from "../../styles/home.module.scss";
import useLanguage from "../../utils/useLanguage";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { useEffect, useState } from "react";
import LocationSvgComp from "./LocationSvg/LocationSvgComp";
import LocationSvgComp1 from "./LocationSvg/LocationSvgComp1";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const Location = ({ external }) => {
  const lan = useLanguage();
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [svgchange, setSvgChange] = useState(true);

  return (
    <div
      className={styles.app__locationsection}
      style={{
        position: "relative",
      }}>
      <div className={styles.locationabheadingcontainer}>
        <Row
          className="headingRow"
          style={{
            paddingTop: "2rem",
          }}>
          <Col>
            {/* <h5 className="sectionsubHeading mt-5">
              {lan.locationsection.title1}
            </h5> */}
            <h2 className="sectionmainHeading">{lan.locationsection.title2}</h2>
          </Col>
        </Row>
        <div className={`sectionmaindescription`}>
          <p className={styles.locationdescription}>
            {lan.locationsection.description}
          </p>
        </div>
        <div>
          <Link href={"https://goo.gl/maps/pztjf2ZTzSj9PAoV6"}>
            <a target={"_blank"} rel="noreferrer">
              <button className={styles.getdirectionlocationbtn}>
                {lan.commontext.getdirection}
              </button>
            </a>
          </Link>
        </div>
      </div>

      <motion.div
        className={
          svgchange === true
            ? styles.container_location
            : styles.container_location_mobile
        }>
        <div className={styles.locationImagecontainer1}>
          <div className={styles.first_img}>
            <Image
              className={styles.mobile_img}
              src="/Images/location/Asset1.png"
              width={1728}
              height={872}
              layout="responsive"
              alt={lan.locationsection.title2}
              priority={true}
              quality={100}
            />
          </div>
          <LocationSvgComp svgchange={svgchange} setSvgChange={setSvgChange} />
        </div>
        <div className={styles.locationImagecontainer2}>
          <LocationSvgComp1 svgchange={svgchange} setSvgChange={setSvgChange} />
        </div>
      </motion.div>
    </div>
  );
};

export default Location;

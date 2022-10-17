import { Row, Col } from "react-bootstrap";
import useLanguage from "../../utils/useLanguage";
import { motion } from "framer-motion";
import Diamond from "../../public/Logos/diamond.svg";
import Omran from "../../public/Logos/omran.svg";
import { useEffect } from "react";
import styles from "../../styles/home.module.scss";

const Marquee = ({ dir }) => {
  useEffect(() => {
    const root = document.documentElement;
    const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
      "--marquee-elements-displayed"
    );
    const marqueeContent = document.querySelector("ul.marquee-content");
    const marqueeContent2 = document.querySelector("ul.marquee-content2");
    root.style.setProperty(
      "--marquee-elements",
      marqueeContent.children.length
    );
    root.style.setProperty(
      "--marquee-elements",
      marqueeContent2.children.length
    );

    for (let i = 0; i < marqueeElementsDisplayed * 2; i++) {
      marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
      marqueeContent2.appendChild(marqueeContent2.children[i].cloneNode(true));
    }
  }, []);
  return (
    <div>
      <div className="marquee">
        <ul className="marquee-content" data-dir={dir}>
          <li>
            <a href="https://diamond-developers.ae/" target={"_blank"}>
              <Diamond />
            </a>
          </li>
          <li>
            <a href="https://www.omran.om/" target={"_blank"}>
              <Omran />
            </a>
          </li>
        </ul>
      </div>
      <div className="marquee2">
        <ul className="marquee-content2" data-dir={dir}>
          <li>
            <a href="https://diamond-developers.ae/" target={"_blank"}>
              <Diamond />
            </a>
          </li>
          <li>
            <a href="https://www.omran.om/" target={"_blank"}>
              <Omran />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Partners = () => {
  const lan = useLanguage();
  return (
    <div className={styles.app__partnersection}>
      <Row className="headingRow">
        <Col>
          {/* <h5 className="sectionsubHeading">{lan.partners.title1}</h5> */}
          <h2 className="sectionmainHeading">{lan.partners.title2}</h2>
        </Col>
      </Row>
      <Marquee />
    </div>
  );
};

export default Partners;

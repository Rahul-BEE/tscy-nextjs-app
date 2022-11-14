import { useState } from "react";
import Filters from "../../components/Floorplan/Filters";
import styles from "../../styles/floorplan.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import VillaCards from "../../components/Floorplan/VillaCards";
import useLanguage from "../../utils/useLanguage";
import { BsArrowDownCircle } from "react-icons/bs";
import CardSection from "../../components/Floorplan/CardsSection";
import LocationFYV from "../../components/Floorplan/Location";
import { HeadComponent, Location } from "../../components";
import { Col, Row } from "react-bootstrap";

const Floorplan = () => {
  const lan = useLanguage();
  // const [text, setText] = useState("PERFECT FOR YOU.");
  const [filterId, setFilterId] = useState(0);
  return (
    <>
      <HeadComponent
        title={lan.seo.floorplan.title}
        description={lan.seo.floorplan.description}
        og={lan.seo.floorplan.og}
        keyword={lan.seo.floorplan.keyword}
        canonicaltag={lan.seo.floorplan.canonicaltag}
        language={lan.language === 1 ? "en" : "ar"}>
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/ar/floorplan"}
          hrefLang={"ar"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/floorplan/"}
          hrefLang={"en"}
        />
        <link
          rel="alternate"
          href={"https://www.thesustainablecity-yiti.com/floorplan/"}
          hreflang="x-default"
        />
      </HeadComponent>

      <div className={styles.app__floorplanmain}>
        <Row
          className="headingRow"
          style={{
            paddingTop: "2rem",
          }}>
          <Col>
            <h1 className={`sectionmainHeading ${styles.floorplanHeading}`}>
              {lan.commontext.findyour} <span>{lan.commontext.dreamHome}</span>
            </h1>
          </Col>
        </Row>

        {/* <Filters
        filterId={filterId}
        setFilterId={setFilterId}
        // setText={setText}
      /> */}
        <VillaCards filterId={filterId} />
        <div
          className={styles.downloadcomparison}
          style={{
            opacity: 0,
            pointerEvents: "none",
          }}>
          <p>
            {lan.commontext.download} {lan.commontext.comparison}{" "}
            <BsArrowDownCircle />
          </p>
        </div>
        <CardSection />
        <LocationFYV />
      </div>
    </>
  );
};

export default Floorplan;

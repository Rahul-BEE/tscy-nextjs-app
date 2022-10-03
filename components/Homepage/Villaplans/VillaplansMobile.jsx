import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import styles from "../../../styles/villaplans.module.scss";

function VillaplansMobile() {
  return (
    <div className={styles.section_villaplan_mobile}>
      <Row className="headingRow">
        <Col>
          <h5 className="sectionsubHeading">Redefining living with our</h5>
          <h2 className="sectionmainHeading">BEDROOM VILLA PLANS</h2>
        </Col>
      </Row>
    </div>
  );
}

export default VillaplansMobile;

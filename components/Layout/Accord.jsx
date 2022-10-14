import React from "react";
import { useState } from "react";
import {
  Accordion,
  Card,
  Container,
  useAccordionButton,
} from "react-bootstrap";
import { BsPlus } from "react-icons/bs";
import styles from "../../styles/layout.module.scss";

function CustomToggle({ children, eventkey }) {
  const decoratedOnClick = useAccordionButton(eventkey, () =>
    console.log("click")
  );
  return (
    <div className={`${styles.mobile_dropdown} flex `}>
      <h4>{children}</h4>
      <BsPlus onClick={decoratedOnClick} className={styles.icon} />
    </div>
  );
}

function Accord({ data }) {
  const [open, setOpen] = useState([false, 0]);
  return (
    <div key={data}>
      <Accordion className={styles.accord}>
        {data.map((e, index) => (
          <Card className={styles.accord_card} key={`${index}_footer_link`}>
            <Card.Header
              className={styles.bg_transparent}
              data-open={index === open[1] && open[0] ? "open" : "closed"}>
              <CustomToggle
                eventkey={index}
                onClick={() => setOpen([!open[0], index])}>
                {e.title}
              </CustomToggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body className={styles.accord_card_body}>
                <ul>
                  {e.links.map((value, index) => (
                    <li key={`${index}_footeraccord_list`}>{value.title}</li>
                  ))}
                </ul>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ))}
      </Accordion>
    </div>
  );
}

export default Accord;

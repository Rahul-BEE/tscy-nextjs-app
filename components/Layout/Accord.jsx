import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/AccordionButton";
import Card from "react-bootstrap/Card";
import useLanguage from "../../utils/useLanguage";
import styles from "../../styles/layout.module.scss";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return (
    <div
      type="button"
      className={styles.accordHeaderbtn}
      onClick={decoratedOnClick}>
      {children}
    </div>
  );
}

function Accord() {
  const lan = useLanguage();
  const data = lan.footer;
  return (
    <Accordion className={styles.footeraccord}>
      {data && (
        <Card
          className={styles.accordcard}
          style={{
            borderTop: "2px solid rgba(119, 119, 119, 0.2)",
          }}>
          <Card.Header className={styles.accordcardheader}>
            <CustomToggle eventKey="0">
              {data[0].title} <AiOutlinePlus />
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className={styles.accordcardbody}>
              <div
                className={`${styles.footercardlink} ${styles.accordfootercardlink}`}>
                {data[0].links.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
      {data && (
        <Card className={styles.accordcard}>
          <Card.Header className={styles.accordcardheader}>
            <CustomToggle eventKey="1">
              {data[1].title} <AiOutlinePlus />
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body className={styles.accordcardbody}>
              <div
                className={`${styles.footercardlink} ${styles.accordfootercardlink}`}>
                {data[1].links.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <a>{item.text}</a>
                  </Link>
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
      {data && (
        <Card className={styles.accordcard}>
          <Card.Header className={styles.accordcardheader}>
            <CustomToggle eventKey="2">
              {data[2].title} <AiOutlinePlus />
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body className={styles.accordcardbody}>
              <div
                className={`${styles.footercardlink} ${styles.accordfootercardlink}`}>
                {data[2].links.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <a target={"_blank"} rel="noreferrer">
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      )}
    </Accordion>
  );
}

export default Accord;

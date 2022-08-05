import Modal from "react-bootstrap/Modal";
import styles from "../../styles/layout.module.scss";
import { Row, Col, Container, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { useRouter } from "next/router";
import Polygon from "../../public/Svg/menupolygon.svg";
const MobileMenu = ({ show, onHide, handleLang, currentLang }) => {
  const lan = useLanguage();
  const router = useRouter();
  console.log(currentLang);
  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={onHide}
      className={styles.header__modal}
      contentClassName={styles.header__modal_contentclass}>
      <Modal.Body className={styles.header__modal_body}>
        <Container fluid className={styles.header_mobilemenu}>
          <Row>
            <Col md="1">
              <IoClose onClick={onHide} size={30} color="white" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Row className="mb-5">
                <Col className="flex justify-content-center">
                  <Image
                    src="/Logos/tsc-logo-white-text.svg"
                    alt="the sustainable city yiti"
                    width={200}
                    height={100}
                  />
                </Col>
              </Row>
              <Row className="d-flex justify-content-center text-align-center align-items-center">
                <Col />
                <Col sm={5} className={styles.mobilemenu_middlecol}>
                  <Link href="/">
                    <a
                      className={`d-flex justify-content-between align-items-center ${
                        router.pathname === "/"
                          ? styles.menuactive
                          : styles.menuinactive
                      }`}
                      onClick={() => onHide()}>
                      <Polygon className="me-2" />
                      <p className="p-0 m-0">{lan.header.homepage}</p>
                    </a>
                  </Link>
                  <hr className={styles.mobilemenu_hr} />
                  {lan.header.links.map((link, index) => {
                    return (
                      <div
                        key={`${index}_header_links_mobile`}
                        style={{ width: "100%" }}
                        className="flex justify-content-center flex-column">
                        <Link href={link.link}>
                          <a
                            className={`d-flex justify-content-between align-items-center ${
                              router.pathname === link.link
                                ? styles.menuactive
                                : styles.menuinactive
                            }`}
                            onClick={() => onHide()}>
                            <Polygon className="me-2" />
                            <p className="p-0 m-0">{link.text}</p>
                          </a>
                        </Link>
                        <hr className={styles.mobilemenu_hr} />
                      </div>
                    );
                  })}
                  <Link href="/contact">
                    <a
                      className={`d-flex justify-content-between align-items-center ${
                        router.pathname === "/contact"
                          ? styles.menuactive
                          : styles.menuinactive
                      }`}
                      onClick={() => onHide()}>
                      <Polygon className="me-2" />
                      <p className="p-0 m-0">{lan.header.contact}</p>
                    </a>
                  </Link>
                  <hr className={styles.mobilemenu_hr} />
                </Col>
                <Col />
              </Row>
              <Row>
                <Col className={styles.mobilemenu_languagecol}>
                  <Button
                    className={
                      currentLang === "en"
                        ? styles.btnlangactive
                        : styles.btnlanginactive
                    }
                    onClick={() => handleLang("ar")}>
                    Hello
                  </Button>
                  <Button
                    className={
                      currentLang === "ar"
                        ? styles.btnlangactive
                        : styles.btnlanginactive
                    }
                    onClick={() => handleLang("ar")}>
                    مرحبا
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default MobileMenu;

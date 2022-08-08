import Modal from "react-bootstrap/Modal";
import styles from "../../styles/layout.module.scss";
import { Row, Col, Container, Button } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import { useRouter } from "next/router";
import Polygon from "../../public/Svg/menupolygon.svg";
const MobileMenu = ({ show, onHide, handleLang, currentLang }) => {
  const lan = useLanguage();
  const router = useRouter();
  return (
    <Modal
      show={show}
      fullscreen={true}
      onHide={onHide}
      className={styles.header__modal}
      contentClassName={styles.header__modal_contentclass}>
      <Modal.Body className={styles.header__modal_body}>
        <Row className={styles.header__modaltop}>
          <Col>
            <IoClose onClick={onHide} size={30} color="white" />
          </Col>
        </Row>
        <div className={styles.header_topImage}>
          <Image src="/Images/mobilemenutop.png" layout="fill" />
        </div>
        <Row fluid className={styles.header_mobilemenu}>
          <Col className="m-0 p-0">
            <Row className="mb-3">
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
                    className={`d-flex align-items-center ${
                      router.pathname === "/"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <Polygon className="me-2" />
                    <p className="p-0 m-0">{lan.header.homepage}</p>
                  </a>
                </Link>
                {lan.header.links.map((link, index) => {
                  return (
                    <div
                      key={`${index}_header_links_mobile`}
                      style={{ width: "100%" }}
                      className="flex justify-content-center flex-column">
                      <Link href={link.link}>
                        <a
                          className={`d-flex align-items-center ${
                            router.pathname === link.link
                              ? styles.menuactive
                              : styles.menuinactive
                          }`}
                          onClick={() => onHide()}>
                          <Polygon className="me-2" />
                          <p className="p-0 m-0">{link.text}</p>
                        </a>
                      </Link>
                    </div>
                  );
                })}
                <Link href="/contact">
                  <a
                    className={`d-flex  align-items-center ${
                      router.pathname === "/contact"
                        ? styles.menuactive
                        : styles.menuinactive
                    }`}
                    onClick={() => onHide()}>
                    <Polygon className="me-2" />
                    <p className="p-0 m-0">{lan.header.contact}</p>
                  </a>
                </Link>
              </Col>
              <Col />
            </Row>
            <Row className="flex justify-content-center">
              <Col className={styles.mobilemenu_languagecol} md={6}>
                <Button
                  className={
                    currentLang === "en"
                      ? styles.btnlangactive
                      : styles.btnlanginactive
                  }
                  onClick={() => handleLang("en")}>
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

        <Row className={styles.header__modalbottom}>
          <Col className={styles.header_btmImage}>
            <Image src="/Images/mobilemenuleft.png" layout="fill" />
          </Col>
          <Col className={`${styles.header_btmImage} ${styles.btmImage2}`}>
            <Image src="/Images/mobilemenuright.png" layout="fill" />
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default MobileMenu;

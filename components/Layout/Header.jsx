import styles from "../../styles/layout.module.scss";
import { BiChevronRightCircle, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import MobileMenu from "./MobilemenuModal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useAnimation, motion } from "framer-motion";
import { useScrollDirection } from "react-use-scroll-direction";
const Header = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("en");
  const [loading, setloading] = useState(true);
  const [domYOffset, setDomYOffset] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const lan = useLanguage(loading);
  const location = useRouter();
  const animation = useAnimation();
  const { scrollDirection } = useScrollDirection();

  useEffect(() => {
    const someFunc = async () => {
      if (scrollDirection === "DOWN" && domYOffset && !isMobile) {
        await animation.start({
          y: -300,
        });
      } else if (scrollDirection === "UP" && domYOffset && !isMobile) {
        await animation.start({
          y: 0,
        });
      }
    };
    someFunc();
  }, [scrollDirection]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLanguage(
        JSON.parse(localStorage.getItem("language"))
          ? JSON.parse(localStorage.getItem("language"))
          : "en"
      );
    }
  }, []);
  const handelLanguageChange = (lang) => {
    let lan = "";
    if (language === "en") {
      lan = "ar";
    } else {
      lan = "en";
    }
    localStorage.setItem("language", JSON.stringify(lan));
    setLanguage(lan);
    location.push(location.asPath, location.asPath, { locale: lan });
    // window.location.reload(true);

    setloading(!loading);
  };
  useEffect(() => {
    function updatePosition() {
      if (window.innerWidth < 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
      if (window.pageYOffset > 600 && location.pathname === "/") {
        setDomYOffset(true);
      } else {
        setDomYOffset(false);
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);
    }
    updatePosition();
    return () => {
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
    };
  }, [location.pathname]);

  return (
    <motion.header
      className={`${styles.app__header} navbar navbar-expand-lg`}
      animate={animation}>
      <div
        className={` ${styles.headermain}`}
        data-scrolled={domYOffset || location.pathname !== "/" ? "true" : ""}>
        <div className={`${styles.app__header_right} flex`}>
          <Link href="/" passHref>
            <a>
              <Image
                src={
                  domYOffset || location.pathname !== "/"
                    ? "/Logos/tsc-logo.svg"
                    : "/Logos/tsc-logo-white.svg"
                }
                width={180}
                height={80}
                alt="sustainable city yiti "
                style={{ cursor: "pointer" }}
              />
            </a>
          </Link>
          <button
            className={`btn ${
              domYOffset || location.pathname !== "/"
                ? styles.header_right_langbtn2
                : styles.header_right_langbtn
            }`}
            onClick={() => handelLanguageChange()}>
            {lan.header.langbtn}
          </button>
        </div>
        <nav
          className={`${styles.app__header_middle} ${
            domYOffset || location.pathname !== "/"
              ? styles.header_middle_li2
              : ""
          } collapse navbar-collapse`}>
          <ul className={`flex`}>
            {lan.header.links.map((link, index) => {
              return (
                <li key={`${index}_header_links`}>
                  <Link href={link.link}>
                    <a>{link.text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div
          className={`${styles.app__header_left} ${
            domYOffset || location.pathname !== "/"
              ? styles.header_left_btn2
              : ""
          } `}>
          <Link href={"/contact"} passHref>
            <button className={`btn ${styles.contactbtn}`}>
              {lan.commontext.registerinterest}
              <BiChevronRightCircle className={styles.arrow_icon} size={20} />
            </button>
          </Link>
          <Link href={"/floorplan"} passHref>
            <button className={`btn ${styles.findyourhome}`}>
              {lan.header.links[0].text}
            </button>
          </Link>
        </div>
        <button
          className={`navbar-toggler ${styles.navbar__menubtn}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <BiMenuAltLeft
            color={
              domYOffset || location.pathname !== "/" ? "#058da6" : "white"
            }
            size={40}
            className="me-3"
            onClick={() => setShow(true)}
          />
        </button>
      </div>
      {/* <button
        className={`btn ${styles.header_right_langbtn} ${styles.mobilelangbtn}`}
        onClick={() => handelLanguageChange()}>
        {lan.header.langbtn}
      </button> */}
      {show && (
        <MobileMenu
          show={show}
          onHide={() => setShow(false)}
          handleLang={handelLanguageChange}
          currentLang={language}
        />
      )}
    </motion.header>
  );
};

export default Header;

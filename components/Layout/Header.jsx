import styles from "../../styles/layout.module.scss";
import { BiChevronRightCircle, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import MobileMenu from "../MobilemenuModal";
import { useEffect, useState, useLayoutEffect } from "react";
import { useRouter } from "next/router";
const Header = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("en");
  const [domYOffset, setDomYOffset] = useState(false);
  const lan = useLanguage();
  const location = useRouter();
  useLayoutEffect = useEffect;
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
    if (lang) {
      localStorage.setItem("language", JSON.stringify(lang));
      setLanguage(lan);
      window.location.reload(true);
    } else {
      let lan = "";
      if (language === "en") {
        lan = "ar";
      } else {
        lan = "en";
      }
      localStorage.setItem("language", JSON.stringify(lan));
      setLanguage(lan);
      window.location.reload(true);
    }
  };
  useLayoutEffect(() => {
    function updatePosition() {
      if (window.pageYOffset > 600 && location.pathname === "/") {
        setDomYOffset(true);
      } else {
        setDomYOffset(false);
      }
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);
  return (
    <header
      className={`${styles.app__header} ${
        domYOffset || location.pathname !== "/" ? styles.app_header2 : ""
      } navbar navbar-expand-lg`}>
      <div className="container-fluid mx-2">
        <button
          className={`navbar-toggler ${styles.navbar__menubtn}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <BiMenuAltLeft
            color="white"
            size={40}
            className="me-3"
            onClick={() => setShow(true)}
          />
        </button>
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
            className={`btn ${styles.header_right_langbtn} ${
              domYOffset || location.pathname !== "/"
                ? styles.header_right_langbtn2
                : ""
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
            <button className="btn">
              {lan.header.contact}
              <BiChevronRightCircle size={20} />
            </button>
          </Link>
        </div>
      </div>
      <button
        className={`btn ${styles.header_right_langbtn} ${styles.mobilelangbtn}`}
        onClick={() => handelLanguageChange()}>
        {lan.header.langbtn}
      </button>
      {show && (
        <MobileMenu
          show={show}
          onHide={() => setShow(false)}
          handleLang={handelLanguageChange}
          currentLang={language}
        />
      )}
    </header>
  );
};

export default Header;

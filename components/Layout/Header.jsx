import styles from "../../styles/layout.module.scss";
import { BiChevronRightCircle, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";
import Link from "next/link";
import MobileMenu from "../MobilemenuModal";
import { useEffect, useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
  const [language, setLanguage] = useState("en");
  const lan = useLanguage();
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

  return (
    <header className={`${styles.app__header} navbar navbar-expand-lg`}>
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
          <Link href={"/"} passHref>
            <Image
              src="/Logos/tsc-logo-white.svg"
              width={180}
              height={80}
              alt="sustainable city yiti "
              style={{ cursor: "pointer" }}
            />
          </Link>
          <button
            className={`btn ${styles.header_right_langbtn}`}
            onClick={() => handelLanguageChange()}>
            {lan.header.langbtn}
          </button>
        </div>
        <nav
          className={`${styles.app__header_middle} collapse navbar-collapse`}>
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
        <div className={styles.app__header_left}>
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

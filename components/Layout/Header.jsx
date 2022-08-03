import styles from "../../styles/layout.module.scss";
import { BiChevronRightCircle, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import { english } from "../../utils/data";
import Link from "next/link";
import MobileMenu from "../MobilemenuModal";
import { useState } from "react";
const Header = () => {
  const [show, setShow] = useState(false);
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
          <Image
            src="/Logos/tsc-logo-white.svg"
            width={180}
            height={80}
            alt="sustainable city yiti "
          />
          <button className={`btn ${styles.header_right_langbtn}`}>
            {english.header.langbtn}
          </button>
        </div>
        <nav
          className={`${styles.app__header_middle} collapse navbar-collapse`}>
          <ul className={`flex`}>
            {english.header.links.map((link, index) => {
              return (
                <li key={`${index}_header_links`}>
                  <Link href="#">{link}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={styles.app__header_left}>
          <button className="btn">
            {english.header.contact}
            <BiChevronRightCircle size={20} />
          </button>
        </div>
      </div>
      <button
        className={`btn ${styles.header_right_langbtn} ${styles.mobilelangbtn}`}>
        {english.header.langbtn}
      </button>
      {show && <MobileMenu show={show} onHide={() => setShow(false)} />}
    </header>
  );
};

export default Header;

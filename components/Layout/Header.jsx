import styles from "../../styles/layout.module.scss";
import { BiChevronRightCircle, BiMenuAltLeft } from "react-icons/bi";
import Image from "next/image";
import { english } from "../../utils/data";
import Link from "next/link";
const Header = () => {
  return (
    <nav className={`${styles.app__header} navbar navbar-expand-lg`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <BiMenuAltLeft />
      </button>
      <div className={styles.app__header_right}>
      <Image src="/Logos/tsc-logo-white.svg" width={180} height={80} />
        <button className={`btn ${styles.header_right_langbtn}`}>
          {english.header.langbtn}
        </button>
      </div>
      <div className={`${styles.app__header_middle} collapse navbar-collapse`}>
        <ul>
          {english.header.links.map((link, index) => {
            return (
              <li key={`${index}_header_links`}>
                <Link href="#">{link}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.app__header_left}>
        <button className="btn">
          {english.header.contact}
            <BiChevronRightCircle />
        </button>
      </div>
    </nav>
  );
};

export default Header;

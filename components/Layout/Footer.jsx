import styles from "../../styles/layout.module.scss";
import Image from "next/image";
import useLanguage from "../../utils/useLanguage";

import { IoIosArrowDroprightCircle } from "react-icons/io";
import {
  FaInstagramSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";

import React from "react";
import Accord from "./Accord";
import Link from "next/link";

function Footer() {
  const lan = useLanguage();
  const cardlinksdata = lan.footer.cardlinksdata;

  return (
    <div>
      {cardlinksdata && (
        <div className={`${styles.footer}`}>
          <div className={styles.items}>
            <div className={styles.logo}>
              <Image
                width={"100px"}
                height={"100px"}
                src="/Logos/logo.png"
                alt="logo"
              />
              <Image
                width={"395px"}
                height={"60"}
                src="/Logos/logotext.png"
                alt="logotext"
              />
            </div>
            {/* top */}

            <div className={styles.box}>
              <div className={styles.cards}>
                {cardlinksdata.map((e, index) => (
                  <div className={styles.card} key={`${index}_footer_primary`}>
                    <h3>{e.title}</h3>
                    <ul>
                      {e.links.map((value, index) => (
                        <Link
                          href={"/contact?broker=true"}
                          passHref
                          key={`${index}_footer_list_links`}
                        >
                          <li>{value.title}</li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className={styles.newsletter}>
                <div className={styles.card}>
                  {/* <h3>Stay Updated</h3>
                  <p>By Signing up to our newsletter</p>
                  <div className={styles.newsletter_box}>
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter your email address"
                    />
                    <span>
                      <IoIosArrowDroprightCircle />
                    </span>
                  </div> */}
                  <div className={styles.social_icons}>
                    <FaLinkedin color="#0077B5" className={styles.icon} />
                    <FaFacebookSquare color="#3A559F" className={styles.icon} />
                    <FaWhatsappSquare color="#29A71A" className={styles.icon} />
                    <FaInstagramSquare
                      color="#E14478"
                      className={styles.icon}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* mobile viww */}
            <Accord data={cardlinksdata} />

            <div className={styles.mobile_social_icon}>
              <div className={styles.social_icons}>
                <FaLinkedin color="#0077B5" className={styles.icon} />
                <FaFacebookSquare color="#3A559F" className={styles.icon} />
                <FaWhatsappSquare color="#29A71A" className={styles.icon} />
                <FaInstagramSquare color="#E14478" className={styles.icon} />
              </div>
            </div>

            {/* copyright */}
            <div className={styles.footer_bottom}>
              <div className={`flex ${styles.bottom_items} `}>
                <h4>Diamond Developers</h4>
                <p>&copy; Diamond Developers Co. Ltd. 2022</p>
              </div>

              <div className={`flex ${styles.mobile_none}`}>
                <h4>{lan.header.langbtn}</h4>
                {/* <h4>AED</h4> */}
              </div>
            </div>

            <br />
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;

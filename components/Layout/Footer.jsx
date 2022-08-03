import styles from "../../styles/layout.module.scss";
import Image from 'next/image'
import {Container, Row,Col} from  "react-bootstrap"


import React from 'react'

function Footer() {
  return (
    <div>
      <div className={`${styles.footer}`}>
      <div className={styles.logo}>
      <Image width={"123px"} height={"141px"} src="/Logos/logo.png" alt="logo" />
      <Image width={"396px"} height={"60"} src="/Logos/logotext.png" alt="logotext" />

      </div>
        <div className={styles.items}>
          {/* top */}
          <div className={styles.box}>
            <div className={styles.cards}>

            <div className={styles.card}>
              <h3>About</h3>
              <ul>
                <li>what we do</li>
                <li>Careers</li>
                <li>Press and News</li>
                <li>Life at a Glance</li>
                <li>Villas at TSC</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>Support</h3>
              <ul>
                <li>Reach out to us</li>
                <li>Become a Broker</li>
                <li>Language Support</li>
                <li>Language Support</li>
                <li>Help and Support</li>
              </ul>
            </div>
            <div className={styles.card}>
              <h3>More from TSC</h3>
              <ul>
                <li>About Us</li>
                <li>TSC - Dubai</li>
                <li>TSC - Sharjah</li>
                <li>Villas at TSC</li>

              </ul>
            </div>

            </div>
            <div className={styles.newsletter}>
            <div className={styles.card}>
              <h3>Stay Updated</h3>
              <ul>
                <li>By Signing up to our newsletter</li>
              </ul>
              <div>
              <input type="email" name="" id="" placeholder="Enter your email address" />

              </div>

            </div>

            </div>
          </div>
          
          {/* copyright */}
          <div className={styles.footer_bottom}>
            <div className={`flex`}>
              <h4>Diamond Developers</h4>
              <p>&copy; Diamond Developers International Ltd. 2022</p>
            </div>

            <div className={`flex`}>
              <h3>ENGLISH</h3>
              <h3>AED</h3>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
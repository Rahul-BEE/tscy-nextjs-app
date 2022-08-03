import styles from "../../styles/layout.module.scss";



import React from 'react'

function Footer() {
  return (
    <div>
      <div className={`${styles.footer}`}>
      <div className={styles.logo}>
      <img src="/Logos/logo.png" alt="logo" />
      <img src="/Logos/logotext.png" alt="" />
      </div>
        <div className={styles.items}>
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

        </div>
      </div>
    </div>
  )
}

export default Footer
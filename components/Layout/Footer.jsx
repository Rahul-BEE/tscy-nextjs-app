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

        </div>
      </div>
    </div>
  )
}

export default Footer
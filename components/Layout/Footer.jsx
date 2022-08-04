import styles from "../../styles/layout.module.scss";
import Image from 'next/image'
import {IoIosArrowDroprightCircle} from 'react-icons/io'



import React from 'react'
import Accord from "./Accord";

function Footer() {


  const cardlinksdata = [
    {
      title: 'About',
      links:[
        {
          title: "what we do"
        },
        {
          title: "Careers"
        },
        {
          title: "Press and News"
        },
        {
          title: "Life at a Glance"
        },
        {
          title: "Villas at TSC"
        }

      ]
    },
    {
      title: 'Support',
      links:[
        {
          title: "Reach out to us"
        },
        {
          title: "Become a Broker"
        },
        {
          title: "Language Support"
        },
        {
          title: "Help and Support"
        }

      ]
    },
    {
      title: 'More from TSC',
      links:[
        {
          title: "About Us"
        },
        {
          title: "TSC - Dubai"
        },
        {
          title: "TSC - Sharjah"
        },
        {
          title: "Villas at TSC"
        }

      ]
    }
  ]
  return (
    <div>
      <div className={`${styles.footer}`}>

        <div className={styles.items}>
        <div className={styles.logo}>
      <Image width={"100px"} height={"100px"} src="/Logos/logo.png" alt="logo"  />
      <Image width={"395px"} height={"60"} src="/Logos/logotext.png" alt="logotext" />

      </div>
          {/* top */}



          <div className={styles.box}>
            <div className={styles.cards}>

            {cardlinksdata.map((e,key)=>(
                          <div className={styles.card}>
                          <h3>{e.title}</h3>
                          <ul>
                            {e.links.map((value,index)=>(
                            <li>{value.title}</li>

                            ))}
                          </ul>
                        </div>
          ))}


            </div>
            <div className={styles.newsletter}>
            <div className={styles.card}>
              <h3>Stay Updated</h3>
              <p>By Signing up to our newsletter</p>
              <div className={styles.newsletter_box}>
              <input type="email" name="" id="" placeholder="Enter your email address" />
              <span>
                <IoIosArrowDroprightCircle />
              </span>

              </div>

            </div>

            </div>
          </div>

                    {/* mobile viww */}
                    <Accord data={cardlinksdata}/>
          
          {/* copyright */}
          <div className={styles.footer_bottom}>
            <div className={`flex ${styles.bottom_items} `}>
              <h4>Diamond Developers</h4>
              <p>&copy; Diamond Developers International Ltd. 2022</p>
            </div>

            <div className={`flex ${styles.mobile_none}` }>
              <h4>ENGLISH</h4>
              <h4>AED</h4>
            </div>

          </div>


          <br />

        </div>
      </div>
    </div>
  )
}

export default Footer
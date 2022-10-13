import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
const ContactForm = () => {
  const lan = useLanguage();
  const [select, setSelect] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [companyContact, setCompanyContact] = useState("");
  const [license, setLicense] = useState("");
  const data = lan.contact.register.formdata;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className={styles.contactform}>
      {data && (
        <>
          <div className={styles.typeSelector}>
            <div className={styles.innertypeselector}>
              <p
                className={select === 0 ? styles.active : ""}
                onClick={() => setSelect(0)}>
                {lan.contact.register.individual}
              </p>
              <p
                className={select === 1 ? styles.active : ""}
                onClick={() => setSelect(1)}>
                {lan.contact.register.corporate}
              </p>
            </div>
          </div>
          <div className={styles.formContainer}>
            <form onSubmit={submitHandler} className={styles.forms}>
              {select === 1 && (
                <div className={styles.companyrow1}>
                  <div className={styles.formItem}>
                    <label htmlFor="company">{data.company.title}</label>
                    <input
                      style={{
                        padding: "0.3rem 0",
                      }}
                      type="text"
                      id="company"
                      required
                      placeholder={data.company.placeholder}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}></input>
                  </div>
                  <div className={styles.formItem}>
                    <label htmlFor="companycontact">
                      {data.companyContact.title}
                    </label>
                    <input
                      style={{
                        padding: "0.3rem 0",
                      }}
                      type="text"
                      id="companycontact"
                      required
                      placeholder={data.companyContact.placeholder}
                      value={companyContact}
                      onChange={(e) =>
                        setCompanyContact(e.target.value)
                      }></input>
                  </div>
                </div>
              )}
              <div className={styles.formItem}>
                <label htmlFor="fullname">{data.name.title}</label>
                <input
                  type="text"
                  id="fullname"
                  style={{
                    padding: "0.3rem 0",
                  }}
                  required
                  placeholder={data.name.placeholder}
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}></input>
              </div>
              <div className={styles.namemailRow} data-select={select}>
                <div className={styles.formItem}>
                  <label htmlFor="email">{data.email.title}</label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      padding: "0.3rem 0",
                    }}
                    required
                    placeholder={data.email.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className={styles.formItem}>
                  <label htmlFor="phone">{data.phone.title}</label>
                  <PhoneInput
                    country={"om"}
                    value={phone}
                    containerClass={styles.picontainerclass}
                    inputClass={styles.piinputclass}
                    buttonClass={styles.buttonClass}
                    onChange={(val) => setPhone(val)}
                  />
                </div>
              </div>
              {select === 1 && (
                <div className={styles.formItem}>
                  <label htmlFor="license">{data.company.title}</label>
                  <input
                    style={{
                      padding: "0.3rem 0",
                    }}
                    type="text"
                    id="license"
                    required
                    placeholder={data.license.placeholder}
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}></input>
                </div>
              )}

              <div className={styles.btnholder}>
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}>
                  {lan.commontext.sendmessage}
                </motion.button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;

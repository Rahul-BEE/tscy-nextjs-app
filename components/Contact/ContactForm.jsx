import { useState } from "react";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
const ContactForm = ({ page }) => {
  const lan = useLanguage();
  const [select, setSelect] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [villa, setVilla] = useState(0);
  const [companyContact, setCompanyContact] = useState("");
  const [license, setLicense] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const data = lan.contact.register.formdata;
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (_, country) => {
    const mobLength = country.format.split(".").length - 1;
    if (phone.split("").length - 1 !== mobLength) {
      setError(true);
      setErrorMessage("Enter Valid Mobile Number");
    } else {
      setError(false);
      setErrorMessage("r");
    }
  };
  return (
    <div className={styles.contactform}>
      {data && (
        <>
          {page === "true" && (
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
          )}
          <div className={styles.formContainer}>
            <form onSubmit={submitHandler} className={styles.forms}>
              {select === 1 && (
                <div className={styles.companyrow1}>
                  <div className={styles.formItem}>
                    <label htmlFor="company">{data.company.title}</label>
                    <input
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
                    enableSearch={true}
                    searchClass={styles.searchClass}
                    onBlur={handleChange}
                    countryCodeEditable={false}
                    searchNotFound={"No country found"}
                    isValid={(value, country) => {
                      if (value.match(/12345/)) {
                        setError(true);
                        return false;
                      } else if (value.match(/1234/)) {
                        setError(true);
                        return false;
                      } else {
                        setError(false);
                        return true;
                      }
                    }}
                  />
                  <small
                    className={styles.phoneErrorDiv}
                    style={{
                      display: error ? "block" : "none",
                    }}>
                    {errorMessage}
                  </small>
                </div>
              </div>
              {/* {page !== "true" && (
                <div className={styles.formItem}>
                  <label htmlFor="villa" style={{ marginBottom: "0.5rem" }}>
                    {data.villas.title}
                  </label>
                  <select
                    className={styles.selectcontent}
                    value={villa}
                    onChange={(e) => setVilla(e.target.value)}>
                    {data.villas.villa.map((item, index) => (
                      <option
                        value={item}
                        key={index}
                        className={styles.optionvalue}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              )} */}
              {select === 1 && (
                <div className={styles.formItem}>
                  <label htmlFor="license">{data.license.title}</label>
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
                  type="submit"
                  whileHover={{
                    scale: 1.1,
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

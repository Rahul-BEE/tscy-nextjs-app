import { useState } from "react";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import sendEmail from "../../utils/emailservice";
import { BsArrowDownCircle } from "react-icons/bs";
import Loader from "../Loader/Loader";
import Link from "next/link";
const ContactForm = ({ page }) => {
  const lan = useLanguage();
  const [select, setSelect] = useState(0);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [villa, setVilla] = useState(0);
  const [companyContact, setCompanyContact] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [license, setLicense] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [leadfrom, setLeadFrom] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const data = lan.contact.register.formdata;
  const submitHandler = async (e) => {
    e.preventDefault();

    if (phone === "") {
      setError(true);
      setErrorMessage(
        errorMessage ? errorMessage : "Please fill all the fields"
      );
      return;
    } else {
      setError(false);
      setErrorMessage("");
    }
    if (select === 0 && leadfrom === "") {
      setError(true);
      setErrorMessage(
        errorMessage ? errorMessage : "Please fill all the fields"
      );
      return;
    } else {
      setError(false);
      setErrorMessage("");
    }
    setLoading(true);
    const data =
      select === 0
        ? {
            fullname,
            email,
            phone,
            leadfrom,
          }
        : {
            company,
            license,
            email,
            phone,
            fullname,
            type: select === 1 ? "Cooperate" : "Individual",
          };
    let result = await sendEmail({ data, type: select === 1 ? 1 : 0 });
    if (result) {
      setEmailSend(true);
      setLoading(false);
    } else {
      setEmailSend(false);
      setLoading(false);
    }
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
            {!emailSend ? (
              <form onSubmit={submitHandler} className={styles.forms}>
                {select === 1 && (
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
                  //   <div className={styles.companyrow1}>

                  //  <div className={styles.formItem}>
                  //       <label htmlFor="companycontact">
                  //         {data.companyContact.title}
                  //       </label>
                  //       <input
                  //         type="text"
                  //         id="companycontact"
                  //         required
                  //         placeholder={data.companyContact.placeholder}
                  //         value={companyContact}
                  //         onChange={(e) =>
                  //           setCompanyContact(e.target.value)
                  //         }></input>
                  //     </div>
                  //   </div>
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
                      countryCodeEditable={false}
                      searchNotFound={"No country found"}
                    />
                  </div>
                </div>
                {page !== "true" && (
                  <div className={styles.formItem}>
                    <label htmlFor="leadfrom">{data.leadfrom.title}</label>
                    <select
                      className={styles.selectcontent}
                      value={leadfrom}
                      style={{
                        color: leadfrom === "" ? "#B5b5b5" : "#777777",
                      }}
                      onChange={(e) => setLeadFrom(e.target.value)}>
                      <option
                        defaultValue={leadfrom}
                        hidden
                        className={`${styles.optionvalue} ${styles.optionselect1}`}>
                        {data.leadfrom.placeholder}
                      </option>
                      {data.leadfrom.options.map((item, index) => (
                        <option
                          value={item}
                          key={index}
                          className={styles.optionvalue}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
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

                {error && (
                  <small className={styles.phoneErrorDiv}>{errorMessage}</small>
                )}
                <div className={styles.btnholder}>
                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: !loading ? 1.02 : 1,
                    }}
                    disabled={loading}>
                    {loading ? <Loader /> : lan.commontext.sendmessage}
                  </motion.button>
                </div>
              </form>
            ) : (
              <div className={styles.thankscontainer}>
                <h4>{lan.commontext.thanksnote}</h4>
                <p>{lan.contact.thanksdesc}</p>
                <div className={styles.thanksbtncontainer}>
                  <motion.button
                    onClick={() => {
                      setEmailSend(false);
                      setError(false);
                      setErrorMessage(false);
                    }}
                    className={styles.borderbtn}
                    whileHover={{
                      scale: 1.05,
                    }}>
                    {lan.contact.submitanotherinterest}
                  </motion.button>
                  <Link href="#visitus" passHref>
                    <button>
                      {lan.commontext.visitouroffice} <BsArrowDownCircle />{" "}
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactForm;

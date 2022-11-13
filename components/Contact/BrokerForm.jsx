import React from "react";
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
import TagManager from "react-gtm-module";
const BrokerForm = () => {
  const lan = useLanguage();
  const [select, setSelect] = useState(0);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [license, setLicense] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const data = lan.contact.register.formdata;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitHandler = async (e) => {
    e.preventDefault();

    if (company.trim().length < 2 && select === 1) {
      setError(1);
      return;
    }
    if (firstname.trim().length < 1) {
      setError(2);
      return;
    }
    if (lastname.trim().length < 1) {
      setError(5);
      return;
    }
    if (!email.trim().match(emailRegex)) {
      setError(3);
      return;
    }
    if (phone.trim().length < 10) {
      setError(4);
      return;
    }
    // if (phone === "") {
    //   setError(true);
    //   setErrorMessage(
    //     errorMessage ? errorMessage : "Please fill all the fields"
    //   );
    //   return;
    // } else {
    //   setError(false);
    //   setErrorMessage("");
    // }
    // setLoading(true);
    // const data = {
    //   company,
    //   license,
    //   email,
    //   phone,
    //   firstname,
    //   lastname,
    //   type: select === 1 ? "Cooperate" : "Individual",
    // };
    // let result = await sendEmail({ data });
    // TagManager.dataLayer({
    //   dataLayer: {
    //     event: "register_interest_contact",
    //   },
    // });
    // if (result) {
    //   setEmailSend(true);
    //   setLoading(false);
    // } else {
    //   setEmailSend(false);
    //   setLoading(false);
    // }
  };
  const onFocusFunc = (id) => {
    if (id === error) {
      setError(0);
    }
  };
  const submitanotherinterest = () => {
    setEmailSend(false);
    setError(0);
    setFirstname("");
    setLastName("");
    setPhone("");
    setCompany("");
    setEmail("");
    setLicense("");
  };
  return (
    <div className={styles.contactform}>
      {data && (
        <div
          style={{
            position: "sticky",
            top: 0,
            display: "flex",
            alignItems: " flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
          }}>
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
            {!emailSend ? (
              <form onSubmit={submitHandler} className={styles.forms}>
                {select === 1 && (
                  <div
                    className={styles.formItem}
                    data-error={error === 1 ? "true" : "false"}>
                    <label htmlFor="company">{data.company.title}</label>
                    <input
                      type="text"
                      id="company"
                      onFocus={() => onFocusFunc(1)}
                      className={error === 1 ? styles.error : ""}
                      placeholder={data.company.placeholder}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}></input>
                  </div>
                )}
                <div className={styles.namerow}>
                  <div
                    className={styles.formItem}
                    data-error={error === 2 ? "true" : "false"}>
                    <label htmlFor="firstname">{data.name.title}</label>
                    <input
                      type="text"
                      id="firstname"
                      onFocus={() => onFocusFunc(2)}
                      className={error === 2 ? styles.error : ""}
                      placeholder={data.name.placeholder}
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}></input>
                  </div>
                  <div
                    className={styles.formItem}
                    data-error={error === 5 ? "true" : "false"}>
                    <label htmlFor="lastname">{data.lastname.title}</label>
                    <input
                      type="text"
                      id="lastname"
                      onFocus={() => onFocusFunc(5)}
                      className={error === 5 ? styles.error : ""}
                      placeholder={data.lastname.placeholder}
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}></input>
                  </div>
                </div>
                <div className={styles.namemailRow} data-select={select}>
                  <div
                    className={styles.formItem}
                    data-error={error === 3 ? "true" : "false"}>
                    <label htmlFor="email">{data.email.title}</label>
                    <input
                      type="text"
                      id="email"
                      onFocus={() => onFocusFunc(3)}
                      className={error === 3 ? styles.error : ""}
                      placeholder={data.email.placeholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}></input>
                  </div>
                  <div
                    className={styles.formItem}
                    data-error={error === 4 ? "true" : "false"}>
                    <label htmlFor="phone">{data.phone.title}</label>
                    <PhoneInput
                      country={"om"}
                      value={phone}
                      onFocus={() => onFocusFunc(4)}
                      inputProps={{
                        "data-color": phone.length > 3 ? "true" : "false",
                      }}
                      containerClass={styles.picontainerclass}
                      inputClass={error === 4 ? styles.error : ""}
                      buttonClass={styles.buttonClass}
                      onChange={(val) => setPhone(val)}
                      enableSearch={true}
                      searchClass={styles.searchClass}
                      countryCodeEditable={false}
                      searchNotFound={"No country found"}
                    />
                  </div>
                </div>
                {select === 1 && (
                  <div className={styles.formItem}>
                    <label htmlFor="license">{data.license.title}</label>
                    <input
                      style={{
                        padding: "0.3rem 0",
                      }}
                      type="text"
                      id="license"
                      placeholder={data.license.placeholder}
                      value={license}
                      onChange={(e) => setLicense(e.target.value)}></input>
                  </div>
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
                    onClick={submitanotherinterest}
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
        </div>
      )}
    </div>
  );
};

export default BrokerForm;

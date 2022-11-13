import { useRef, useState } from "react";
import styles from "../../styles/contact.module.scss";
import useLanguage from "../../utils/useLanguage";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion } from "framer-motion";
import { BsArrowDownCircle } from "react-icons/bs";
import Loader from "../Loader/Loader";
import Link from "next/link";
import TagManager from "react-gtm-module";
import { HiChevronDown } from "react-icons/hi";
import { useEffect } from "react";
import { useCallback } from "react";
import sendEmail from "../../utils/emailservice";
const ContactForm = () => {
  const lan = useLanguage();
  const customSelect = useRef(null);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("1");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(0);
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [leadfrom, setLeadFrom] = useState(
    lan.contact.register.formdata.leadfrom.placeholder
  );

  const data = lan.contact.register.formdata;
  const submitHandler = async (e) => {
    e.preventDefault();
    setError(0);
    if (firstname.trim().length < 1) {
      setError(1);
      return;
    }
    if (lastname.trim().length < 1) {
      setError(5);
      return;
    }
    if (!email.trim().match(emailRegex)) {
      setError(2);
      return;
    }
    if (phone.trim().length < 10) {
      setError(3);
      return;
    }
    if (leadfrom === lan.contact.register.formdata.leadfrom.placeholder) {
      setError(4);
      return;
    }

    setLoading(true);
    const data = {
      firstname,
      lastname,
      email,
      phone,
      leadfrom,
    };
    // //email js

    let result = await sendEmail({
      data,
      temmplate: 0,
    });

    if (result) {
      setEmailSend(true);
      setLoading(false);
    } else {
      setEmailSend(false);
      setLoading(false);
    }

    TagManager.dataLayer({
      dataLayer: {
        event: "register_interest_contact",
      },
    });
  };
  const submitanotherinterest = () => {
    setEmailSend(false);
    setError(0);
    setFirstname("");
    setLastName("");
    setPhone("");
    setEmail("");
  };

  const openSelectDrop = () => {
    setShowDropDown(!showDropDown);
  };
  const onFocusFunc = (id) => {
    if (id === error) {
      setError(0);
    }
  };

  const setDropDirectionNew = useCallback(() => {
    let pos = customSelect.current?.getBoundingClientRect();
    if (!pos) {
      return;
    }
    if (window.innerHeight - pos.y > 300) {
      setDropDirection("1");
    } else {
      setDropDirection("0");
    }
  }, []);
  useEffect(() => {
    setDropDirectionNew();
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setDropDirectionNew);
    }
    return () => {
      window.removeEventListener("scroll", setDropDirectionNew);
    };
  }, []);
  return (
    <div className={styles.contactform}>
      {data && (
        <div className={styles.formContainer}>
          <div
            style={{
              position: "sticky",
              top: 0,
            }}>
            {" "}
            {!emailSend ? (
              <form
                // action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                onSubmit={submitHandler}
                className={styles.forms}>
                <div className={styles.namerow}>
                  <div
                    className={styles.formItem}
                    data-error={error === 1 ? "true" : "false"}>
                    <input type="hidden" name="oid" value="00D250000009OKo" />
                    <label htmlFor="firstname">{data.name.title}</label>
                    <input
                      type="text"
                      id="firstnamecontact"
                      name="first_name"
                      onFocus={() => onFocusFunc(1)}
                      className={error === 1 ? styles.error : ""}
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
                      name="last_name"
                      onFocus={() => onFocusFunc(5)}
                      className={error === 5 ? styles.error : ""}
                      placeholder={data.lastname.placeholder}
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}></input>
                  </div>
                </div>
                <div
                  className={styles.formItem}
                  data-error={error === 2 ? "true" : "false"}>
                  <label htmlFor="email">{data.email.title}</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onFocus={() => onFocusFunc(2)}
                    className={error === 2 ? styles.error : ""}
                    placeholder={data.email.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div
                  className={styles.formItem}
                  data-error={error === 3 ? "true" : "false"}>
                  <label htmlFor="phone">{data.phone.title}</label>
                  <PhoneInput
                    country={"om"}
                    value={phone}
                    name="phone"
                    onFocus={() => onFocusFunc(3)}
                    inputProps={{
                      "data-color": phone.length > 3 ? "true" : "false",
                    }}
                    containerClass={styles.picontainerclass}
                    inputClass={error === 3 ? styles.error : ""}
                    buttonClass={styles.buttonClass}
                    onChange={(val) => setPhone(val)}
                    enableSearch={true}
                    searchClass={styles.searchClass}
                    countryCodeEditable={false}
                    searchNotFound={"No country found"}
                  />
                </div>
                <div
                  className={styles.formItem}
                  data-error={error === 4 ? "true" : "false"}>
                  <label htmlFor="leadfrom">{data.leadfrom.title}</label>
                  <motion.div
                    className={styles.customSelect}
                    data-error={error === 4 ? "true" : "false"}
                    ref={customSelect}
                    style={{
                      color:
                        leadfrom !== data.leadfrom.placeholder
                          ? "#777777"
                          : error == 4
                          ? "#FE8392"
                          : "#B5B5B5",
                    }}
                    onClick={() => {
                      openSelectDrop();
                      onFocusFunc(4);
                    }}>
                    {leadfrom} <HiChevronDown />
                  </motion.div>
                  {showDropDown && (
                    <div
                      className={styles.customdropdown}
                      data-dir={dropDirection}>
                      {data.leadfrom.options.map((item, index) => (
                        <motion.p
                          key={index}
                          whileHover={{
                            backgroundColor: "#f5f5f5",
                            transition: {
                              type: "tween",
                            },
                          }}
                          style={{
                            margin: 0,
                            padding: "10px",
                            backgroundColor: "#ffffff",
                          }}
                          onClick={() => {
                            setLeadFrom(item);
                            setShowDropDown(false);
                          }}>
                          {item}
                        </motion.p>
                      ))}
                    </div>
                  )}
                </div>
                {/* {error && (
                  <small className={styles.phoneErrorDiv}>{errorMessage}</small>
                )} */}
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

export default ContactForm;

// <form onSubmit={submitHandler} className={styles.forms}>
//   <div className={styles.namerow}>
//     <div className={styles.formItem}>
//       <label htmlFor="firstname">{data.name.title}</label>
//       <input
//         type="text"
//         id="firstname"
//         required
//         placeholder={data.name.placeholder}
//         value={firstname}
//         onChange={(e) => setFirstname(e.target.value)}></input>
//     </div>
//     <div className={styles.formItem}>
//       <label htmlFor="lastname">{data.lastname.title}</label>
//       <input
//         type="text"
//         id="lastname"
//         required
//         placeholder={data.lastname.placeholder}
//         value={lastname}
//         onChange={(e) => setLastName(e.target.value)}></input>
//     </div>
//   </div>
//   <div className={styles.formItem}>
//     <label htmlFor="email">{data.email.title}</label>
//     <input
//       type="email"
//       id="email"
//       required
//       placeholder={data.email.placeholder}
//       value={email}
//       onChange={(e) => setEmail(e.target.value)}></input>
//   </div>
//   <div className={styles.formItem}>
//     <label htmlFor="phone">{data.phone.title}</label>
//     <PhoneInput
//       country={"om"}
//       value={phone}
//       containerClass={styles.picontainerclass}
//       inputClass={styles.piinputclass}
//       buttonClass={styles.buttonClass}
//       onChange={(val) => setPhone(val)}
//       enableSearch={true}
//       searchClass={styles.searchClass}
//       countryCodeEditable={false}
//       searchNotFound={"No country found"}
//     />
//   </div>
//   <div className={styles.formItem}>
//     <label htmlFor="leadfrom">{data.leadfrom.title}</label>
//     <select
//       className={styles.selectcontent}
//       value={leadfrom}
//       style={{
//         color: leadfrom === "" ? "#B5b5b5" : "#777777",
//       }}
//       onChange={(e) => setLeadFrom(e.target.value)}>
//       <option
//         defaultValue={leadfrom}
//         hidden
//         className={`${styles.optionvalue} ${styles.optionselect1}`}>
//         {data.leadfrom.placeholder}
//       </option>
//       {data.leadfrom.options.map((item, index) => (
//         <option
//           value={item}
//           key={index}
//           className={styles.optionvalue}>
//           {item}
//         </option>
//       ))}
//     </select>
//   </div>
//   {error && (
//     <small className={styles.phoneErrorDiv}>{errorMessage}</small>
//   )}
//   <div className={styles.btnholder}>
//     <motion.button
//       type="submit"
//       whileHover={{
//         scale: !loading ? 1.02 : 1,
//       }}
//       disabled={loading}>
//       {loading ? <Loader /> : lan.commontext.sendmessage}
//     </motion.button>
//   </div>
// </form>
// https://test.salesforce.com/servlet/servlet.WebToLead?oid=00D250000009OKo&first_name=${firstname}&last_name=${lastname}&email=${email}&lead_source=${leadfrom}&phone=${phone}

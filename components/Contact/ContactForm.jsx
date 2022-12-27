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
import { useRouter } from "next/router";
import sendLead from "../../utils/salesforce";
const ContactForm = ({ showDropDown, setShowDropDown }) => {
  const lan = useLanguage();
  const customSelect = useRef(null);
  // const [showDropDown, setShowDropDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("1");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [ferror, setferror] = useState(false);
  const [lerror, setlerror] = useState(false);
  const [eerror, seteerror] = useState(false);
  const [perror, setperror] = useState(false);
  const [herror, setherror] = useState(false);

  const router = useRouter();
  const social = router.query.social;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [leadfrom, setLeadFrom] = useState(
    social ? social : lan.contact.register.formdata.leadfrom.placeholder
  );

  const data = lan.contact.register.formdata;
  const submitHandler = async (event) => {
    event.preventDefault();
    setError(false);
    let e = false;
    if (firstname.trim().length < 1) {
      setError(true);
      setferror(true);
      e = true;
    } else {
      setferror(false);
    }
    if (lastname.trim().length < 1) {
      setError(true);
      setlerror(true);
      e = true;
    } else {
      setlerror(false);
    }
    if (!email.trim().match(emailRegex)) {
      setError(true);
      seteerror(true);
      e = true;
    } else {
      seteerror(false);
    }
    if (phone.trim().length < 10) {
      setError(true);
      setperror(true);
      e = true;
    } else {
      setperror(false);
    }
    if (leadfrom === lan.contact.register.formdata.leadfrom.placeholder) {
      setError(true);
      setherror(true);
      e = true;
    } else {
      setherror(false);
    }

    if (e) {
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

    // let result = await sendEmail({
    //   data,
    //   temmplate: 0,
    // });
    let result = await sendLead({ data });
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
    setError(false);
    setFirstname("");
    setLastName("");
    setPhone("");
    setEmail("");
    setLeadFrom(lan.contact.register.formdata.leadfrom.placeholder);
  };

  const openSelectDrop = () => {
    setShowDropDown(!showDropDown);
  };
  const onFocusFunc = (id) => {
    switch (id) {
      case 1: {
        setferror(false);
        return;
      }
      case 5: {
        setlerror(false);
        return;
      }
      case 2: {
        seteerror(false);
        return;
      }
      case 3: {
        setperror(false);
        return;
      }
      case 4: {
        setherror(false);
        return;
      }
      default: {
        setError(false);
      }
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
    if (router.query.social) {
      if (data.leadfrom.options.includes(social)) {
        setLeadFrom(router.query.social);
      } else {
        router.push("/contact-us");
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", setDropDirectionNew);
    }
    return () => {
      window.removeEventListener("scroll", setDropDirectionNew);
    };
  }, [router]);

  return (
    <div className={styles.contactform}>
      {data && (
        <div className={styles.formContainer}>
          <div
            style={{
              position: "sticky",
              top: 0,
            }}>
            {!emailSend ? (
              <form
                // action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                onSubmit={submitHandler}
                className={styles.forms}>
                <div className={styles.namerow}>
                  <div
                    className={styles.formItem}
                    data-error={ferror ? "true" : "false"}>
                    <input type="hidden" name="oid" value="00D250000009OKo" />
                    <label htmlFor="firstname">{data.name.title}</label>
                    <input
                      type="text"
                      id="firstnamecontact"
                      name="first_name"
                      onFocus={() => onFocusFunc(1)}
                      className={ferror && error ? styles.error : ""}
                      placeholder={data.name.placeholder}
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}></input>
                  </div>
                  <div
                    className={styles.formItem}
                    data-error={lerror ? "true" : "false"}>
                    <label htmlFor="lastname">{data.lastname.title}</label>
                    <input
                      type="text"
                      id="lastname"
                      name="last_name"
                      onFocus={() => onFocusFunc(5)}
                      className={lerror ? styles.error : ""}
                      placeholder={data.lastname.placeholder}
                      value={lastname}
                      onChange={(e) => setLastName(e.target.value)}></input>
                  </div>
                </div>
                <div
                  className={styles.formItem}
                  data-error={eerror ? "true" : "false"}>
                  <label htmlFor="email">{data.email.title}</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    onFocus={() => onFocusFunc(2)}
                    className={eerror ? styles.error : ""}
                    placeholder={data.email.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div
                  className={styles.formItem}
                  data-error={perror ? "true" : "false"}>
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
                    inputClass={perror ? styles.error : ""}
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
                  data-error={herror ? "true" : "false"}>
                  <label htmlFor="leadfrom">{data.leadfrom.title}</label>
                  <motion.div
                    className={styles.customSelect}
                    data-error={herror ? "true" : "false"}
                    ref={customSelect}
                    style={{
                      pointerEvents: social ? "none" : "all",
                      textTransform: "capitalize",
                      color:
                        leadfrom !== data.leadfrom.placeholder
                          ? "#777777"
                          : herror
                          ? "#FE8392"
                          : "#B5B5B5",
                    }}
                    onClick={() => {
                      openSelectDrop();
                      onFocusFunc(4);
                    }}>
                    {leadfrom} <HiChevronDown />
                  </motion.div>

                  <div
                    style={{
                      pointerEvents: showDropDown ? "all" : "none",
                      opacity: showDropDown ? 1 : 0,
                    }}
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
                          textTransform: "capitalize",
                        }}
                        onClick={() => {
                          setLeadFrom(item);
                          setShowDropDown(false);
                        }}>
                        {item}
                      </motion.p>
                    ))}
                  </div>
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

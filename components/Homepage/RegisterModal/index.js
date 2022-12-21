import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import useLanguage from "../../../utils/useLanguage";
import styles from "../../../styles/registermodal.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoClose } from "react-icons/io5";
import sendEmail from "../../../utils/emailservice";
import { HiChevronDown } from "react-icons/hi";
import TagManager from "react-gtm-module";
const RegsiterModal = ({ show, setshowmodal }) => {
  const lan = useLanguage();
  const [error, setError] = useState(false);
  const [ferror, setferror] = useState(false);
  const [lerror, setlerror] = useState(false);
  const [eerror, seteerror] = useState(false);
  const [perror, setperror] = useState(false);
  const [herror, setherror] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("1");
  const customSelect = useRef(null);
  const [firstname, setfirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadfrom, setLeadFrom] = useState(
    lan.contact.register.formdata.leadfrom.placeholder
  );
  const data = lan.contact.register.formdata;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitHandler = async () => {
    setError(false);
    let e = false;
    if (firstname.trim().length < 1) {
      setError(true);
      setferror(true);
      e = true;
    } else {
      setferror(false);
    }
    if (!email.trim().match(emailRegex)) {
      setError(true);
      seteerror(true);
      e = true;
    } else {
      seteerror(false);
    }
    if (lastname.trim().length < 1) {
      setError(true);
      setlerror(true);
      e = true;
    } else {
      setlerror(false);
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
    const data = {
      firstname,
      lastname,
      email,
      phone,
      leadfrom,
    };

    sendEmail({
      data,
      temmplate: 0,
    });

    TagManager.dataLayer({
      dataLayer: {
        event: "register_interest_from_modal",
        params: {
          submitted_on: "Homepage Modal",
        },
      },
    });

    setshowmodal(false);
  };

  const selectOnFocus = () => {
    const selectMode = document.getElementById("registermodalselect");
    selectMode.style.borderBottomColor = "2px";
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
      case 5: {
        setlerror(false);
        return;
      }
      default: {
        setError(false);
      }
    }
  };
  const setDropDirectionNew = useCallback(() => {
    let pos = customSelect.current?.getBoundingClientRect();
    if (pos) {
      if (window.innerHeight - pos.y > 300) {
        setDropDirection("1");
      } else {
        setDropDirection("0");
      }
    }
  }, [customSelect.current]);
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
    <Modal
      show={show}
      onHide={() => {
        setShowDropDown(false);
        setshowmodal(false);
      }}
      size="lg"
      centered
      dialogClassName={styles.dialogClassName}
      autoFocus
      className={styles.modalClassName}
      contentClassName={styles.contentClass}>
      <Modal.Header className={styles.modalheader}>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className={styles.modaltitle}>
          {lan.commontext.registerinterest}
        </Modal.Title>
        <span
          className={styles.closebtn}
          id="registermodalclosebtn"
          onClick={() => setshowmodal(false)}>
          <IoClose />
        </span>
      </Modal.Header>
      <Modal.Body
        onClick={() => {
          if (showDropDown) setShowDropDown(false);
        }}>
        <form className={styles.forms}>
          <div className={styles.modalbody}>
            <div
              className={styles.formItem}
              data-error={ferror ? "true" : "false"}>
              <label htmlFor="firstname">{data.name.title}</label>
              <input
                autoFocus={true}
                type="text"
                id="firstname"
                onFocus={() => onFocusFunc(1)}
                className={ferror ? styles.error : ""}
                placeholder={data.name.placeholder}
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}></input>
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
                onChange={(e) => setLastname(e.target.value)}></input>
            </div>

            <div
              className={styles.formItem}
              data-error={eerror ? "true" : "false"}>
              <label htmlFor="email">{data.email.title}</label>
              <input
                type="email"
                id="email"
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
              className={`${styles.formItem} ${styles.grid_col_span2}`}
              data-error={herror ? "true" : "false"}>
              <label htmlFor="leadfrom">{data.leadfrom.title}</label>
              <motion.div
                className={styles.customSelect}
                ref={customSelect}
                data-error={herror ? "true" : "false"}
                style={{
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
              {showDropDown && (
                <div className={styles.customdropdown} data-dir={dropDirection}>
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
              )}
            </div>
          </div>
        </form>
        <div className={styles.modalfooter}>
          <motion.button onClick={submitHandler} className="regmodalsubmitbtn">
            {lan.commontext.sendmessage}
          </motion.button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegsiterModal;

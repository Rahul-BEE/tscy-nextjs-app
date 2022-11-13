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
  const [error, setError] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);
  const [dropDirection, setDropDirection] = useState("1");
  const customSelect = useRef(null);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadfrom, setLeadFrom] = useState(
    lan.contact.register.formdata.leadfrom.placeholder
  );
  const data = lan.contact.register.formdata;
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const submitHandler = async () => {
    setError(0);
    if (fullname.trim().length < 1) {
      setError(1);
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

    const data = {
      firstname: fullname,
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
    if (id === error) {
      setError(0);
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
      onHide={() => setshowmodal(false)}
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
      <Modal.Body>
        <form className={styles.forms}>
          <div className={styles.modalbody}>
            <div
              className={styles.formItem}
              data-error={error === 1 ? "true" : "false"}>
              <label htmlFor="fullname">{data.fullname.title}</label>
              <input
                autoFocus={true}
                type="text"
                id="fullname"
                onFocus={() => onFocusFunc(1)}
                className={error === 1 ? styles.error : ""}
                placeholder={data.fullname.placeholder}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}></input>
            </div>

            <div
              className={styles.formItem}
              data-error={error === 2 ? "true" : "false"}>
              <label htmlFor="email">{data.email.title}</label>
              <input
                type="email"
                id="email"
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
                ref={customSelect}
                data-error={error === 4 ? "true" : "false"}
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
                <div className={styles.customdropdown} data-dir={dropDirection}>
                  {data.leadfrom.options.map((item, index) => (
                    <p
                      key={index}
                      onClick={() => {
                        setLeadFrom(item);
                        setShowDropDown(false);
                      }}>
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
            {/* <div className={styles.formItem}>
              <label htmlFor="leadfrom">{data.leadfrom.title}</label>
              <select
                className={styles.selectcontent}
                value={leadfrom}
                id="registermodalselect"
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
            </div> */}
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

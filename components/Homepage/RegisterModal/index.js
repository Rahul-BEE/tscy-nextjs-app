import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-bootstrap/Modal";
import useLanguage from "../../../utils/useLanguage";
import styles from "../../../styles/registermodal.module.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoClose } from "react-icons/io5";
import sendEmail from "../../../utils/emailservice";
import TagManager from "react-gtm-module";
const RegsiterModal = ({ show, setshowmodal }) => {
  const lan = useLanguage();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Please fill all the fields"
  );
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [leadfrom, setLeadFrom] = useState("");
  const data = lan.contact.register.formdata;
  const submitHandler = async () => {
    if (phone === "" || leadfrom === "") {
      setError(true);
      setErrorMessage(
        errorMessage ? errorMessage : "Please fill all the fields"
      );
      return;
    } else {
      setError(false);
      setErrorMessage("");
    }
    const data = {
      fullname,
      email,
      phone,
      leadfrom,
    };
    TagManager.dataLayer({
      dataLayer: {
        event: "register_interest_from_modal",
        params: {
          submitted_on: "Homepage Modal",
        },
      },
    });

    sendEmail({ data, type: 0 });
    setshowmodal(false);
  };

  const selectOnFocus = () => {
    const selectMode = document.getElementById("registermodalselect");
    selectMode.style.borderBottomColor = "2px";
  };
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
            <div className={styles.formItem}>
              <label htmlFor="fullname">{data.name.title}</label>
              <input
                autoFocus={true}
                type="text"
                id="fullname"
                required
                placeholder={data.name.placeholder}
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}></input>
            </div>

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
            <div className={styles.formItem}>
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
            </div>
          </div>
        </form>
        <div className={styles.modalfooter}>
          <small
            style={{
              opacity: error ? 1 : 0,
              pointerEvents: "none",
            }}
            className={styles.registermodalerror}>
            * {errorMessage}
          </small>

          <motion.button onClick={submitHandler} className="regmodalsubmitbtn">
            {lan.commontext.sendmessage}
          </motion.button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegsiterModal;

import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoClose } from "react-icons/io5";
const Browsercompatibility = ({ show, setshowmodal }) => {
  return (
    <Modal
      show={show}
      size="md"
      centered
      onHide={() => {
        setshowmodal(false);
      }}>
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Hi</Modal.Title>
        <span onClick={() => setshowmodal(false)}>
          <IoClose />
        </span>
      </Modal.Header>
      <Modal.Body>Hello bnoss</Modal.Body>
    </Modal>
  );
};

export default Browsercompatibility;

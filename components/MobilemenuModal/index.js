import Modal from "react-bootstrap/Modal";

const MobileMenu = ({ show, onHide }) => {
  return (
    <Modal show={show} fullscreen={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default MobileMenu;

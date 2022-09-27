import React, { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import "./HireModal.css";
function MyVerticallyCenteredModal(props) {
  const form = useRef();
  const [isSent, setSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m150dti",
        "template_ey4c6h6",
        form.current,
        "pILYdhhhn5m_AWF-i"
      )
      .then(
        (result) => {
          setSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hire-modal"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Join us now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">Write To Us</h4>
        <form ref={form} onSubmit={sendEmail}>
          <label>Full Name :</label>
          <input type="text" name="user_name" required />
          <label>Email Address :</label>
          <input type="email" name="user_email" required />
          <label>About Me :</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Write a profile about yourself and your skills and send it to us and we will get back to you as soon as possible"
            required
          />
          <input
            type="submit"
            value="Send"
            className="btn btn-outline-success accent-clr hire-me"
          />
        </form>
        {isSent ? (
          <div className="sent">
            <div className="sent-icon-wrapper">
              <FaCheck className="sent-icon" />
            </div>
            <h3 className="accent-clr">Sent successfully</h3>
          </div>
        ) : null}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="btn accent-clr hire-me">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function HireModal() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Button
        className="btn accent-clr hire-me my-2"
        onClick={() => setModalShow(true)}
      >
        Apply Now
      </Button>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default HireModal;

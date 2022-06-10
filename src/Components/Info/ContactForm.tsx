import { useState } from "react";
import { Modal } from "../PopUp";
import AvTimerIcon from "@material-ui/icons/AvTimerOutlined";

import "./ContactForm.scss";
const ContactForm = () => {
  const [open, setOpen] = useState(false);
  return (
    <div id="contactForm">
      <h1 className="title">
        Get in <span>Touch</span>
      </h1>
      <p>We will respond to your message as soon as possible.</p>
      <form>
        <div className="column">
          <div className="nameDiv">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="name"
              required
            ></input>
            <label htmlFor="name">Name</label>
          </div>
          <div className="emailDiv">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="subjectDiv">
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="subject"
              required
            />
            <label htmlFor="subject">Subject</label>
          </div>
          <div className="phoneDiv">
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              maxLength={10}
              minLength={10}
              placeholder="phone number"
              required
            />
            <label htmlFor="phoneNumber">Phone</label>
          </div>

          {/* ------ */}

          <div className="messageDiv">
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={5}
              placeholder="message"
              required
            ></textarea>
            <label htmlFor="message" className="mes">
              Message
            </label>
          </div>
        </div>

        <button type="button" onClick={() => setOpen((pre) => !pre)}>
          Send
        </button>
      </form>
      <Modal
        modalState={open}
        setModalState={setOpen}
        buttonText="Close"
        icon={<AvTimerIcon />}
      >
        <h1>Coming Soon</h1>
        <h3>Sorry for the inconvenience </h3>
        <h3>Our team is working on it</h3>
      </Modal>
    </div>
  );
};

export default ContactForm;

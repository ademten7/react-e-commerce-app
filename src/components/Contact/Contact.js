import React, { useRef, useState } from "react";
import { GoMailRead } from "react-icons/go";
import { GrMapLocation } from "react-icons/gr";
import { BsTelephoneForward } from "react-icons/bs";
import "./Contact.css";
import EmailJS from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    EmailJS.sendForm(
      //RESTART THE SERVICE
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      formRef.current,
      process.env.REACT_APP_USER_ID
    )
      .then((result) => {
        console.log(result.text); //if we get OK  message it we works
        if (result.text === "OK") {
          setStatus(true);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container contact">
      <h1 className="header">Contact Us</h1>
      {status ? (
        <div>
          <h1>Thanks for your email</h1>
          <p className="header-para">
            We love questions and feedback-and we're always happy to help
          </p>
        </div>
      ) : (
        <div className="contact-page">
          <div className="contact-left">
            <h3>Send us a message</h3>
            <p>Send us a message and we'll respond in 24 hours</p>
            <form ref={formRef} onSubmit={sendEmail}>
              <div>
                <div className="names-emails">
                  <div className="name">
                    <label>Full Name</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Type full name here"
                      required
                    />
                  </div>
                  <div className="email">
                    <label>Email</label>
                    <br />
                    <input
                      type="email"
                      placeholder="Type email here"
                      required
                    />
                  </div>
                </div>
                <div className="telephone-organisation">
                  <div className="tel">
                    <label>Telephone</label>
                    <br />
                    <input type="tel" placeholder="Phone number" required />
                  </div>
                  <div className="organisation">
                    <label>Organisation</label>
                    <br />
                    <input
                      type="text"
                      placeholder="Organisation name"
                      required
                    />
                  </div>
                </div>
                <br />
                <label className="message">Message</label>
                <br />
                <textarea
                  name="textarea"
                  placeholder="Type your message here"
                  id="textarea"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>
              <button className="btn-secondary" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-right">
            <h3>Contact Information</h3>
            <p>
              <GrMapLocation /> Kibitzweg 4, 24565 Kiel
            </p>
            <p>
              <GoMailRead /> contact.us@fakemail.com
            </p>{" "}
            <p>
              {" "}
              <BsTelephoneForward />
              +49 777 7777
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;

import React, { useState, useEffect, useRef } from "react";
import "./Contact.css";
import db from "../../firebsae";
import { ref, set } from "firebase/database";

const Contact = () => {
  const firstRender = useRef(true);
  const [disable, setDisabled] = useState(true);
  const [MsgSent, setMsgSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // skip validation on first render
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    setDisabled(formValidation());
  }, [formData.name, formData.email, formData.subject, formData.message]);
  
  
  useEffect(() => {
    setTimeout(() => {
      setMsgSent(false);
    }, 2500);
  }, [MsgSent]);



  const formValidation = () => {
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.subject === "" ||
      formData.message === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    return new Promise((resolve, reject) => {
      set(ref(db, "messages/" + formData.name), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })
        .then((response) => {
          setMsgSent(true);
          console.log("REsponse", response);
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          resolve(response);
        })
        .catch((error) => {
          console.log(" Error", error);
          reject(error);
        });
    });
  };

  return (
    <div>
      <section className="contact section" id="contact">
        <div className="container">
          <div className="row">
            <div className="section-title pad-15">
              <h2>Contact</h2>
            </div>
          </div>
          <div className="row">
            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-phone"></i>
              </div>
              <h4>Call me on</h4>
              <p>+918000968035</p>
            </div>

            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <h4>Adress</h4>
              <p>Shivani park , A-3/10, Silvassa , DNH</p>
            </div>

            <div className="contact-info-item pad-15">
              <div className="icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h4>Email</h4>
              <p>nileshyadav.dev@gmail.com</p>
            </div>
          </div>

          {MsgSent && (
            <div className="row  ">
              <div className="alert pad-15 ">Message Sent</div>
            </div>
          )}

          <div className="row">
            <div className="contact-form pad-15">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="form-item col-6 pad-15">
                    <div className="form-group">
                      <input
                        type="text"
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                        }}
                        value={formData.name}
                        className="form-control"
                        placeholder="Name"
                        name="name"
                        id="name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-item col-6 pad-15">
                    <div className="form-group">
                      <input
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                        }}
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 pad-15">
                    <div className="form-group">
                      <input
                        onChange={(e) => {
                          setFormData({ ...formData, subject: e.target.value });
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        name="subject"
                        id="subject"
                        value={formData.subject}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-item col-12 pad-15">
                    <div className="form-group">
                      <textarea
                        onChange={(e) => {
                          setFormData({ ...formData, message: e.target.value });
                        }}
                        type="text"
                        className="form-control"
                        placeholder="Your Message..."
                        name="message"
                        id="message"
                        value={formData.message}
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 pad-15">
                    <button type="submit " disabled={disable} className="btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

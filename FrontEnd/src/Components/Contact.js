import React from "react";
import "./ContactStyles.css";

const Contact = () => {
  return (
    <>
      <div className="contact-main">
            <h2>Contact Us</h2>

          <div className="left-container">
            <div className="address">
              <div className="address-i">
                <i className="fa fa-location-dot"></i>
              </div>
              <div className="address-div">
                <h3>Address</h3>
                <span>Beirut, Lebanon</span>
              </div>
            </div>
            <div className="phone">
              <div className="phone-i">
                <i className="fa fa-phone"></i>
              </div>
              <div className="phone-div">
                <h3>Phone</h3>
                <span>+961 78 82 71 04</span>
              </div>
            </div>
            <div className="email">
              <div className="email-i">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="email-div">
                <h3>Email</h3>
                <span>mohamadchalhoub24@gmail.com</span>
              </div>
            </div>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" action="mailto:mohamadchalhoub24@gmail.com" method="post" encType="text/plain">
            <h3>Send Message</h3>
            <input type="text" placeholder="Full Name"></input>
            <input type="text" placeholder="Email"></input>
            <input type="text" placeholder="Type your message"></input>
            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;

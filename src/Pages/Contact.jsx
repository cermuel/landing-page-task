import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Comingsoon from "./Comingsoon";

const Contact = () => {
  return (
    <div className="main-contact">
      <div className="left-side">
        <Comingsoon />
      </div>
      <div className="contact-section">
        <div className="contact-header">
          Hey, we are still in the works,<br></br> but you can send us a
          message!
        </div>
        <div className="form">
          <span className="label">First Name</span>
          <input
            type="text"
            name=""
            className="contact-inputs"
            placeholder="Enter your first name"
            id=""
          />
          <span className="label">Last Name</span>
          <input
            type="text"
            name=""
            className="contact-inputs"
            placeholder="Enter your last name"
            id=""
          />
          <span className="label-med"> Email Address</span>
          <input
            type="text"
            name=""
            className="contact-inputs"
            placeholder="Enter your Email Address"
            id=""
          />
          <span className="label-long">Tell Us What You Need Help With</span>
          <br></br>
          <input
            type="text"
            name=""
            className="contact-textarea"
            placeholder="Enter a topic, like ' channel problem... '"
            id=""
          />
          <br />
          <input type="submit" value="SEND NOW" className="contact-submit" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

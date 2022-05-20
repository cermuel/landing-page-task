import React from "react";
import "../App.css";
import logo from "../logo.svg";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { CgYoutube } from "react-icons/cg";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const About = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav-img">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-links">
          <Link to="/about" className="about">
            About us
          </Link>
          <Link to="/blog" className="blog">
            Blog
          </Link>
          <a className="contact">Contact us</a>
        </div>
      </div>
      <div className="about-section">
        <span className="about-text">
          <span className="dash">----------</span> About Us
        </span>
        <div className="about-header">
          Built for Saas <br />
          and E-commerce
        </div>
        <div className="text-2">
          Our tools are easy to set up and use with a user
          <br /> friendly dashboard that enables you to set up,
          <br /> launch, automate and manage multi-affiliate <br />
          campaigns in 5 minutes
        </div>
        <div className="header-2">
          Metricks was developed because just like
          <br /> you, we needed a product that could give
          <br /> us good value.
        </div>
        <div className="explanation">
          <div className="explain-1">
            <div className="num">
              01
              <hr />
            </div>
            <br />
            We pride ourselves in our ability to innovate and <br></br>create
            world-class tools that provide reliable and <br></br> efficient
            touchpoints between advertisers and <br></br>affiliates.
          </div>
          <div className="explain-2">
            <div className="num-2">
              02
              <hr />
            </div>
            <br />
            Leveraging the best technology, we have developed an all-in-one
            affiliate marketing tracking software, a genius tool to help you
            track, automate and optimize your influencer campaigns, all from one
            dashboard.
            <br />
            Our team of experts are constantly brainstorming, testing and
            developing new solutions with only one thing in mind - your business
            growth. Your success is our success and by giving you the tools you
            need to scale, we grow as well.
          </div>
        </div>
        <div className="about-help">
          <span className="about-help-header">Got A Question?</span>
          <span className="about-help-text">
            See how Metricks can help your business grow with best Affiliate
            Marketing Tracking<br></br> Software.
          </span>
          <Link to="/contact" className="about-help-link">
            Contact Us
            <BsArrowRight className="about-help-arrow" />
          </Link>
        </div>
        <div className="footer">
          <div className="icons">
            <div className="icon">
              <CgYoutube />
            </div>
            <div className="icon">
              <AiFillFacebook />
            </div>
            <div className="icon">
              <AiFillLinkedin />
            </div>
            <div className="icon">
              <AiFillTwitterCircle />
            </div>
            <div className="icon">
              <AiFillInstagram />
            </div>
          </div>
          <div className="terms">
            <span className="terms-1">Terms and Services</span>
            <span className="terms-2">Privacy Policy</span>
          </div>
          <br />
          <span className="copyright">
            Copyright 2021 @ Peddle Technologies. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;

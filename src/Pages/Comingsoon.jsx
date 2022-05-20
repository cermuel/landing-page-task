import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import About from "./About";

const Comingsoon = () => {
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
      <div className="header">
        SOMETHING AWESOME IS <br /> COMING SOON
      </div>
      <div className="text">
        Your all-in-one affiliate marketing tracking software{" "}
        <b>track, automate </b>and <b>optimize</b> your campaigns.
      </div>
      <div className="time">
        <div className="days">
          7<span className="days-text">Days</span>
        </div>
        <div className="hours">
          24
          <span className="hours-text">Hours</span>
        </div>
        <div className="minutes">
          54
          <span className="minutes-text">Minutes</span>
        </div>
        <div className="seconds">
          11
          <span className="seconds-text">Seconds</span>
        </div>
      </div>
      <div className="contact-inputs">
        <input type="text" className="firstName" placeholder="First Name..." />
        <input type="text" className="lastName" placeholder="Last Name..." />
      </div>
      <div className="waiting-list">
        <input
          type="email"
          placeholder="Enter your email address..."
          className="waiting-list-email"
        />
        <input
          type="submit"
          value="JOIN OUR WAITING LIST"
          className="waiting-list-submit"
        />
      </div>
    </div>
  );
};

export default Comingsoon;

import React from "react";
import styled from "styled-components";
import { AiFillFacebook } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { MdEmail, MdPhoneInTalk } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import logo from "../../assets/logo.png";
import { Container } from "./footer.styled";

export default function Footer() {
  const servicesLinks = ["Art", "Common", "Trading", "Rare", "Generic"];
  const companyLinks = ["Home", "About", "Marketplace", "Sellers", "Create"];
  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "canttycalr26@gmail.com",
    },
    {
      icon: <MdPhoneInTalk />,
      value: "+(234) 2-7860-0103",
    },
    {
      icon: <IoLocationSharp />,
      value: "1901 Catederal Cir. Monasty, Sanssy 81063",
    },
  ];
  const socialIcons = [
    <AiFillFacebook />,
    <FaTwitterSquare />,
    <BsLinkedin />,
    <FaInstagramSquare />,
  ];
  return (
    <Container>
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
        <div className="social-icons">
          {socialIcons.map((icon, index) => {
            return <div className="icon" key={index}>{icon}</div>;
          })}
        </div>
      </div>
      <div className="row">
        <h3>Our Services</h3>
        <ul className="list">
          {servicesLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Company</h3>
        <ul className="list">
          {companyLinks.map((link) => {
            return <li key={link}>{link}</li>;
          })}
        </ul>
      </div>
      <div className="row">
        <h3>Contact Us</h3>
        <ul>
          {contactInfo.map(({ icon, value }, index) => {
            return (
              <li key={index}>
                <div className="icon">{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}

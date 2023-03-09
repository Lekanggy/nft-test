import React, { useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import logo from "../../assets/logo.png";
import Button from "../button/Button";
import { Nav } from "./navbar.styled";
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", (e) => setIsNavOpen(false));
  return (
    <Nav state={isNavOpen ? 1 : 0}>
      <div className="brand">
        <img src={logo} alt="logo" />
      </div>
      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={() => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
          />
        )}
      </div>
      <div className={`links ${isNavOpen ? "show" : ""}`}>
        <ul>
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="maketplace">Marketplace</a>
          </li>
          {/* <li>
            <a href="sellers">Sellers</a>
          </li>
          <li>
            <a href="create">Create</a>
          </li> */}
        </ul>
      </div>
      <Button text="Contact" />
    </Nav>
  );
}



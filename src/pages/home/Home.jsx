import React from "react";
import hero from "../../assets/hero.png";
import heroText from "../../assets/heroText.png";
import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import { Section } from "./home.styled";
export default function Home() {
  return (
    <Section>
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Explore Our{" "}
            <span>
              <img src={heroText} alt="Hero Text" />
            </span>{" "}
            Digital NFT Market Place
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <div className="buttons">
            <Button blue text="Explore Now" />
            <Button text="Create NFT" />
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>40K</h2>
              <h5>Artwork</h5>
            </div>
            <div className="dataTab">
              <h2>12K</h2>
              <h5>Auction</h5>
            </div>
            <div className="dataTab">
              <h2>20K</h2>
              <h5>Artist</h5>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero} alt="hero" />
        </div>
      </div>
    </Section>
  );
}

import React,{useState} from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";
import marketplace1 from "../../assets/marketplace1.png";
import marketplace2 from "../../assets/marketplace2.png";
import marketplace3 from "../../assets/marketplace3.png";
import marketplace4 from "../../assets/marketplace4.png";
import marketplace5 from "../../assets/marketplace5.png";
import marketplace6 from "../../assets/marketplace6.png";
import marketplace7 from "../../assets/marketplace7.png";
import marketplace8 from "../../assets/marketplace8.png";
import Button from "../button/Button";
import FancyModalButton from "../modal/Modal";
import { Section } from "./market.styled";
import { marketPlaceData } from "./marketData";

const marketPlaceType = [
  "All",
  "Art",
  "Generic",
  "Common",
  "Trading",
  "Rare",
];
export default function MarketPlace() {
  const [isOpen, setIsOpen] = useState(false);
  const [details, setDetails] = useState()

  const  toggleModal= (e) =>{
    setIsOpen(!isOpen);
  }

  const getItem = (item)=>{
    setDetails(item)
    toggleModal()
  }
  
  return (
    <Section>
      <div className="title">
        <h2>NFT Marketplace</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard.
        </p>
      </div>
      <div className="marketPlaceTypes">
        {marketPlaceType.map((text, index) => {
          return <Button text={text} key={index} blue={index === 0} />;
        })}
      </div>
      <div className="marketPlaces">
        {marketPlaceData.map((item, index) => {
          
          return (
            <>
            <div className="marketplace" key= {index} onClick={()=> getItem(item)}>
              <div className="image">
                <img src={item.image} alt="marketplace" />
              </div>
              <div className="name">
                <h4>{item.name}</h4>
                <BsThreeDots />
              </div>
              <h6 className="username">{item.username}</h6>
              <div className="price-container">
                <h5 className="price">{item.price}</h5>
                <FaEthereum />
              </div>
            </div>
            </>
          );
        })}
         <FancyModalButton toggleModal={toggleModal} isOpen={isOpen} item={details}/>
      </div>
    </Section>
  );
}

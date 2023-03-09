import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

const ModalDetail = ({item}) => {
  return (
    <div className="desc-item">
        <div className="image">
            <img src={item.image} alt="marketplace" />
        </div>
        <div className="item-name">
            <h4>{item.name}</h4>
            <BsThreeDots />
        </div>
        <h6 className="modal-username">{item.username}</h6>
        <div className="item-price">
            <h5 className="price">{item.price}</h5>
            <FaEthereum />
        </div>
        <button className="purchase-btn">Purchase NFT</button>
  </div>
  )
}

export default ModalDetail